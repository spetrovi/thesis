#/bin/python
#
#
#script takes recipe in *_* format and desired number of iterations


import  subprocess, func
import subprocess, sys, logging, optparse
logging.basicConfig(filename='./out/log.out',level=logging.DEBUG)

parser = optparse.OptionParser('usage: python run_drift.py [fs-drift options]')
parser.add_option('-R', '--recipe', dest='recipe', default='', type='string', help='specify recipe to use')
parser.add_option('-D', '--device', dest='device', default='', type='string', help='specify device on which drift runs')
parser.add_option('-M', '--mountpoint', dest='mountpoint', default='/RHTSspareLUN1', type='string', help='specify mountpoint on which drift runs')
parser.add_option('-F', '--fsystem', dest='fsystem', default='ext4', type='string', help='specify file system')
(options, args) = parser.parse_args()

recipe = ' -'.join(' '.join(options.recipe.split('_')).split('-'))+' -t '+options.mountpoint

log_interval = float(recipe.split(' -i ')[1].split(' ')[0])
subprocess.call("echo -n "+recipe+" >> ./out/recipe",shell=True)
logging.info('initializing')
process = subprocess.Popen(("sync").split(), stdout=subprocess.PIPE)
out, err = process.communicate()
logging.info(out)
process = subprocess.Popen(("echo 3 > /proc/sys/vm/drop_caches").split(),stdout=subprocess.PIPE)
out, err = process.communicate()
logging.info('clean_cache')
logging.info(out)

drift = 'python fs-drift/fs-drift.py ' + recipe + ' >> ./out/fs_drift.out' 

logger = func.log_free_space(options.device, options.fsystem, options.mountpoint, log_interval)

logging.info(drift)
print drift
subprocess.call(drift,shell=True)
logger.signal = False

#save file fragmentation and du
#func.log_used_space(options.device, options.fsystem, log_interval)

#log extents histogra
#data = func.get_data(options.mountpoint)
#extents = open('./out/extents.log','w')
#for i in range(0,len(data)):
# extents.write(str(func.count_extents(data[i]))+'\n')
#extents.close()
#
subprocess.call('cat out/fs_drift.out |grep \'response time \' >> ./out/rsp_times_file',shell=True)
rsp_file = func.read_file('./out/rsp_times_file','r').split(' ')[-1:][0][:-1]

subprocess.call('cp '+rsp_file+' ./out/',shell=True)


logging.info('run_drift over')
	 
