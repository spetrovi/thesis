#/bin/python
#Tests generates workloads using fio(flexible input/output tool).
#These tests are aimed at testing loads with multiple threads
#script takes recipe in *-* format and desired number of iterations

import subprocess, sys, logging, optparse, func
logging.basicConfig(filename='./out/log.out',level=logging.DEBUG)

def load_and_mount(fsystem, image, device, mountpoint):
	logging.basicConfig(filename='./out/log.out',level=logging.DEBUG)
	subprocess.call('umount '+mountpoint, shell=True)
	subprocess.call('wipefs -a '+device,shell = True)
	if fsystem == 'ext4':
		subprocess.call('e2image -r '+image+' '+device+'>>./out/log.out', shell=True)
	if fsystem == 'xfs':
		subprocess.call('xfs_mdrestore '+image+' '+device+'>>./out/log.out', shell=True)
	subprocess.call('mount '+device+' '+mountpoint, shell=True)
	
	logging.info('Loaded, check df output: ')
	subprocess.call('df '+device+' > ./df_check',shell=True)
	logging.info(func.read_file('./df_check','r').split('\n')[-2])

def log_fragmentation(fsystem, device, mountpoint, result_directory, prefix, i):
	i = str(i)
	subprocess.call('df > '+result_directory+prefix+'df_'+i+'.frag',shell=True)
#	func.layout_score(mountpoint, result_directory, prefix, i)
	if fsystem == 'ext4':
		subprocess.call('e2freefrag '+device+' > '+result_directory+prefix+'free_space_'+i+'.frag',shell=True)
	if fsystem == 'xfs':
		subprocess.call('xfs_info '+device+' > '+result_directory+prefix+'xfs_info_'+i,shell=True)
		agcount = int(func.read_file(result_directory+prefix+'xfs_info_'+i,'r').split('\n')[0].split('agcount=')[1].split(', agsize')[0])
		subprocess.call('for AGNO in `seq 0 '+str(agcount-1)+'`;do xfs_db -r -c "freesp -s -a $AGNO" '+device+' 1>>'+result_directory+prefix+'free_space_'+i+'.frag;done',shell=True)


def initialize_test(mountpoint):
		logging.info('Initializing...')
		logging.info('Sync...')
		process = subprocess.Popen(('sync').split(), stdout=subprocess.PIPE)
		out, err = process.communicate()
	 	logging.info('Output: '+out)

		logging.info('Trim...')
		process = subprocess.Popen(('fstrim -v '+mountpoint).split(), stdout=subprocess.PIPE)
		out, err = process.communicate()
	 	logging.info('Output: '+out)

		process = subprocess.Popen(('echo 3 > /proc/sys/vm/drop_caches').split(),stdout=subprocess.PIPE)
		out, err = process.communicate()
	 
	 	logging.info('Cleaning cache...')
	 	logging.info('Output: '+out)

parser = optparse.OptionParser('usage: python run_test.py [options]')
parser.add_option('-R', '--recipe', dest='recipe', default='', type='string', help='specify recipe to use')
parser.add_option('-N', '--numjob', dest='numjob', default='1', type='int', help='specify how many times should be test repeated')
parser.add_option('-F', '--fsystem',dest='fsystem', default='ext4', type='string', help='specify file system parameter')
parser.add_option('-I', '--image',dest='image', default='none', type='string', help='specify image')
parser.add_option('-D', '--device',dest='device', default='none', type='string', help='specify device')
parser.add_option('-d', '--depth',dest='depth', default='1', type='string', help='increments of 10 will be deleted from loaded amount')
parser.add_option('-M', '--mountpoint',dest='mountpoint', default='/RHTSspareLUN1', type='string', help='specify mountpoint')
(options, args) = parser.parse_args()


fsystem = options.fsystem
image = options.image[:-4]
device = options.device
mountpoint = options.mountpoint

recipeString = ' --name=global --directory='+mountpoint
recipe = options.recipe.split('-')
for param in recipe:
  recipeString = recipeString + ' --'+param

f = open('./out/recipe','w')
f.write(recipeString)
f.close()

for i in range(int(options.numjob)):
	logging.info('\n\nFresh test')
	result_directory = './out/fresh/'
	logging.info('result directory: '+result_directory)
	subprocess.call('mkdir '+result_directory,shell=True)
	job_name = result_directory+'job'+str(i)
	test = 'fio' + recipeString +' --write_bw_log=' + job_name + ' --write_lat_log='+job_name+' --output='+ job_name+ '.out'+' --unlink=1'+' --name=job'

	initialize_test(mountpoint)
	
	logging.info('Test: '+test)
	subprocess.call(test,shell=True)
	subprocess.call('rm -rf '+result_directory+'*slat*',shell=True)
	subprocess.call('rm -rf '+result_directory+'*clat*',shell=True)
	logging.info('test over')


for i in range(int(options.numjob)):
	for j in range(0,int(options.depth)+1):
		logging.info('\n\nAged test')
		result_directory = './out/'+str(j*10)+'/'
		logging.info('result directory: '+result_directory)
		subprocess.call('mkdir '+result_directory,shell=True)
		job_name = result_directory+'job'+str(i)
		test = 'fio' + recipeString
		test = test+' --write_bw_log='+job_name+ ' --write_lat_log='+job_name + ' --output='+job_name+'.out'+' --name=job'

		logging.info('Loading '+image+' on device '+device+'...')
	 	load_and_mount(fsystem, image, device, mountpoint)


		logging.info('Deleting '+str(j*10)+'% of volume')
	 	deleted_volume = func.delete_volume(mountpoint, j*10)
		logging.info('Deleted volume: '+str(deleted_volume/1000000)+'MB')

		logging.info('Logging pre-test fragmentation')
		log_fragmentation(fsystem, device, mountpoint, result_directory, 'pretest_', i)

		initialize_test(mountpoint)	
		logging.info('Test: '+test)
		
	 	subprocess.call(test,shell=True)	

		logging.info('Logging post-test fragmentation')	
		log_fragmentation(fsystem, device, mountpoint, result_directory, 'posttest_', i)
		subprocess.call('rm -rf '+result_directory+'*slat*',shell=True)
		subprocess.call('rm -rf '+result_directory+'*clat*',shell=True)

	 	logging.info('test over')
subprocess.call('rm -rf '+image,shell=True)
logging.info('All jobs iterated, script ends') 
