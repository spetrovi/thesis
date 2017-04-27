#/bin/python
#Tests generates workloads using fio(flexible input/output tool).
#These tests are aimed at testing loads with multiple threads
#script takes recipe in *-* format and desired number of iterations

import subprocess, sys, logging, optparse, func
from random_delete_volume import delete_volume
logging.basicConfig(filename='./out/log.out',level=logging.DEBUG)

def load_and_mount(fsystem, image, device, mountpoint):
	subprocess.call('umount '+mountpoint, shell=True)
	subprocess.call('wipefs -a '+device,shell = True)
	if fsystem == 'ext4':
		subprocess.call('e2image -r '+image+' '+device+'>>./out/log.out', shell=True)
	if fsystem == 'xfs':
		subprocess.call('xfs_mdrestore '+image+' '+device+'>>./out/log.out', shell=True)
	subprocess.call('mount '+device+' '+mountpoint, shell=True)

def log_fragmentation(fsystem, device, mountpoint, j, prefix):
	if fsystem == 'ext4':
		subprocess.call('e2freefrag '+device+' > ./out/'+str(j*10)+'/'+prefix+'free_space.frag',shell=True)
	if fsystem == 'xfs':
		subprocess.call('xfs_info '+device+' > ./out/'+str(j*10)+'/xfs_info',shell=True)
		agcount = int(func.read_file('./out/'+str(j*10)+'/xfs_info','r').split('\n')[0].split('agcount=')[1].split(', agsize')[0])
		subprocess.call('for AGNO in seq 0 '+str(agcount-1)+';do /usr/sbin/xfs_db -r -c "freesp -s -a $AGNO" '+device+' 1>>./out/'+str(j*10)+'/'+prefix+'free_space.frag;done',shell=True)
	subprocess.call('du -c '+mountpoint+' > ./out/'+str(j*10)+'/du.frag',shell=True)
	subprocess.call('df '+device+' > ./out/'+str(j*10)+'/df.frag',shell=True)

parser = optparse.OptionParser('usage: python run_test.py [options]')
parser.add_option('-R', '--recipe', dest='recipe', default='', type='string', help='specify recipe to use')
parser.add_option('-N', '--numjob', dest='numjob', default='1', type='int', help='specify how many times should be test repeated')
parser.add_option('-F', '--fsystem',dest='fsystem', default='ext4', type='string', help='specify file system parameter')
parser.add_option('-I', '--image',dest='image', default='none', type='string', help='specify image')
parser.add_option('-D', '--device',dest='device', default='none', type='string', help='specify device')
parser.add_option('-d', '--depth',dest='depth', default='1', type='string', help='increments of 10 will be deleted from loaded amount')
(options, args) = parser.parse_args()


fsystem = options.fsystem
image = options.image[:-4]
device = options.device
mountpoint = '/RHTSspareLUN1'
subprocess.call('mkdir '+mountpoint, shell=True)

recipeString = ' --directory='+mountpoint
recipe = options.recipe.split('-')
for param in recipe:
  recipeString = recipeString + ' --'+param

subprocess.call("echo -n "+recipeString+" >> ./out/recipe",shell=True)

for j in range(1,int(options.depth)+1):
	result_directory = './out/'+str(j*10)+'/'
	logging.info('result directory: '+result_directory)
	subprocess.call('mkdir '+result_directory,shell=True)

	for i in range(0,int(options.numjob)):
		logging.info('loading '+image+' on device '+device)
	 	load_and_mount(fsystem, image, device, mountpoint)
	 	deleted_volume = delete_volume(mountpoint, j*10)
		print str(deleted_volume/1000000)+'MB'
		logging.info('deleted_volume: '+str(deleted_volume/1000000)+'MB')
		subprocess.call('umount '+mountpoint,shell=True)
		subprocess.call('mount '+device+' '+mountpoint,shell=True)
		log_fragmentation(fsystem, device, mountpoint, j, 'pretest_')
	 	test = 'fio' + recipeString +' --write_bw_log='+result_directory+'job_' + str(i) + ' --write_lat_log='+result_directory+'lat_' + str(i) +' --write_iops_log='+result_directory+'iops_' + str(i) + ' --output='+result_directory+'job_'+str(i)+'.out'
	   
	 	logging.info('initializing')
		process = subprocess.Popen(("sync").split(), stdout=subprocess.PIPE)
		out, err = process.communicate()
		logging.info(out)

		process = subprocess.Popen(("echo 3 > /proc/sys/vm/drop_caches").split(),stdout=subprocess.PIPE)
		out, err = process.communicate()
	 
	 	logging.info('clean_cache')
	 	logging.info(out)
		logging.info(test)
	 	
	 	subprocess.call(test,shell=True)	
	 	logging.info('test over')

		log_fragmentation(fsystem, device, mountpoint, j, 'posttest_')
		func.test_space_frag(mountpoint, j)

	 
logging.info('All jobs iterated, script ends') 
