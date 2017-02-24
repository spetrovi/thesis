#/bin/python
#
#
#script takes recipe in *_* format and desired number of iterations

#log free space histogram and df every 20 minutes
import time
def log_free_space(dev):
	c = 0
	while True:
		subprocess.call('e2freefrag '+dev+' > ./out/free_space_'+str(c)+'.log',shell=True)
		subprocess.call('df | grep '+dev+' >> ./out/log.out',shell=True)
		c += 1
		time.sleep(1200)

#get all extents  
def get_data(folder):
  files = recursive_glob(folder, '*')
  result = []
  for i in range(0,len(files)):
    subprocess.call('xfs_io -c fiemap '+files[i]+'> file_data',shell=True)
    f = open('file_data','r')
    data = f.read()
    f.close()
    filele = data+'\n'
    #parse fiemap output
    data = data.split('\n')[1:]
    data = map(lambda x: x.split(':')[1:],data)[:-1]
    data = map(lambda x: x[1][1:],data)
    #filter out holes
    data = filter(lambda x: x!='hole',data)
    data = map(make_pair,data)
    result.append(data)
    #subprocess.call(filele +' >> data.visual',shell=True)
  return filter(lambda x: x!=[], result)


import subprocess, sys, logging, optparse
logging.basicConfig(filename='./out/log.out',level=logging.DEBUG)

parser = optparse.OptionParser('usage: python run_drift.py [fs-drift options]')
parser.add_option('-R', '--recipe', dest='recipe', default='', type='string', help='specify recipe to use')
parser.add_option('-D', '--device', dest='dev', default='', type='string', help='specify device on which drift runs')
parser.add_option('-M', '--mountpoint', dest='mountpoint', default='', type='string', help='specify mountpoint on which drift runs')
(options, args) = parser.parse_args()

recipe = ' '.join(options.recipe.split('_'))

#add dest finding


subprocess.call("echo -n "+recipe+" >> ./out/recipe",shell=True)

drift = 'python fs-drift.py ' + recipe + ' >> fs_drift.out' 

logging.info('initializing')
process = subprocess.Popen(("sync").split(), stdout=subprocess.PIPE)
out, err = process.communicate()
logging.info(out)
process = subprocess.Popen(("echo 3 > /proc/sys/vm/drop_caches").split(),stdout=subprocess.PIPE)
out, err = process.communicate()
logging.info('clean_cache')
logging.info(out)

#start free space logging thread
from threading import Timer
t = Timer(60, log_free_space(dev))
t.start()

logging.info(test)
subprocess.call(test,shell=True)
t.cancel()

#log extents histogram
data = get_data(mountpoint)
extents = open('./out/extents.log','w')
for i in range(0,len(data)):
 extents.write(str(count_extents(data[i]))+'\n')
extents.close()

subprocess.call("rm -rf "+dest+"/*",shell=True)
logging.info('run_drift over')
	 
