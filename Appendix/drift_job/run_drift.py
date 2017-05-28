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
parser.add_option('-m', '--mountpoint', dest='mountpoint', default='/RHTSspareLUN1', type='string', help='specify mountpoint on which drift runs')
parser.add_option('-F', '--fsystem', dest='fsystem', default='ext4', type='string', help='specify file system')
parser.add_option('-M', '--maintain',dest='maintain', default='0_100', type='string', help='specify amount for maintainance simulation')
parser.add_option('-T', '--tag',dest='tag', default='1SASHDD', type='string', help='specify storage tag')
parser.add_option('-f', '--fstrim',dest='trim', default='0', type='int', help='specify if fstrim should be used')
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

logger = func.async_worker(options.device, options.fsystem, options.mountpoint, options.maintain, log_interval, options.trim)

logging.info(drift)
print drift
subprocess.call(drift,shell=True)
logger.signal = False

func.layout_score(options.mountpoint)

logging.info('run_drift over')
	 
