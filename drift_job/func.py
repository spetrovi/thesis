import re, sys, subprocess, glob, time, threading, os, fnmatch


def gather_info():
  subprocess.call('sysctl -a > ./out/kernel_info',shell=True)
  subprocess.call('fdisk -l > ./out/disk_info',shell=True)
  subprocess.call('mount -v > ./out/mount_info',shell=True)
  subprocess.call('uname -a > ./out/system_info',shell=True)
  subprocess.call('cat /proc/meminfo > ./out/proc_mem_info',shell=True)
  subprocess.call('cat /proc/cpuinfo > ./out/cpu_info',shell=True)
  subprocess.call('cat /etc/redhat-release > ./out/release_info',shell=True)
  subprocess.call('printenv > ./out/system_variable',shell=True)

  subprocess.call('ldconfig -p > ./out/lib_vers',shell=True)
  subprocess.call('df -h > ./out/df_info',shell=True)
  subprocess.call('pvdisplay >> ./out/lvm_info && vgdisplay >> ./out/lvm_info && lvdisplay >> ./out/lvm_info',shell=True)
  subprocess.call('sysctl -a > ./out/sysctl_info',shell=True)
  subprocess.call('tuned-adm active > ./out/tuned_info',shell=True)

def layout_score(device, fsystem, log_interval):
	  files = recursive_glob(mountpoint, '*')
	  for _file in files:
		subprocess.call('xfs_io -c fiemap '+_file+'> fie_data',shell=True)
		subprocess.call('xfs_io -c fiemap '+_file+'>> ./out/fie_data',shell=True)
		data = read_file('fie_data','r').split('\n')[1:-1] #now we have list of line such as '\t0: [0..383]: 146518560..146518943'
        	data = map(lambda x: x.split(':')[1:][1],data) 
                data = map(lambda x: x[1][1:],data)
	        data = filter(lambda x: x!='hole',data)
	        data = map(make_pair,data)
                result.append(data)



#log free space histogram and df (interval in seconds)
class log_free_space(object):
    def __init__(self, device, fsystem, mountpoint, interval):
	self.mountpoint = mountpoint
	self.interval = interval
	self.dev = device
	self.fsystem = fsystem
	self.c = 0
	self.signal = True
        thread = threading.Thread(target=self.run, args=())
        thread.daemon = True                            # Daemonize thread
        thread.start()                                  # Start the execution

    def log(self):
	if self.fsystem == 'ext4':
		subprocess.call('e2freefrag '+self.dev+' > ./out/free_space_'+str(self.c)+'.log',shell=True)
	if self.fsystem == 'xfs':
		subprocess.call('xfs_info '+self.dev+' > ./out/xfs_info',shell=True)
		agcount = int(read_file('./out/xfs_info','r').split('\n')[0].split('agcount=')[1].split(', agsize')[0])
		subprocess.call('for AGNO in seq 0 '+str(agcount-1)+';do /usr/sbin/xfs_db -r -c "freesp -s -a $AGNO" '+self.dev+' 1>>./out/free_space_'+str(self.c)+'.log;done',shell=True)
	subprocess.call('df | grep '+self.dev+' >> ./out/log.out',shell=True)

#if file system full, delete 10% of space
    def maintain(self):
	if int(read_file('./out/log.out','r').split('\n')[-2:-1][0].split('%')[0].split(' ')[-1:][0]) == 100:
		delete_volume(self.mountpoint, 10)
	

    def run(self):
	while self.signal:
		self.c += 1
		self.log()
		self.maintain()
		time.sleep(self.interval)

from random import randint

def filter_empty_elements(list):
  return filter(lambda x: x == '', list)

#returns total volume used by file (in bytes)
def get_item_space(item):
   return os.path.getsize(item)

#returns total volume used by top_directory (du returns size in KB, so *1000)
def get_used_space(top_directory):
  subprocess.call('rm -rf du_tmp; mkdir du_tmp',shell=True)
  subprocess.call('du -c ' +top_directory+ '| grep total > du_tmp/used.du',shell=True)
  return int(read_file('du_tmp/used.du','r').split('\t')[0])*1000

def delete_volume(mountpoint, delete):
        files = filter(lambda x: os.path.getsize(x) != 0, recursive_glob(mountpoint, '*'))

        used_space = get_used_space(mountpoint)

        new_total = used_space
        deleted_space = 0

        while (float(deleted_space)/float(used_space))*100 <= delete:
                old_total = new_total
                new_total = get_used_space(mountpoint)
  
                item = files[randint(0,len(files)-1)]
                space = get_item_space(item)
                os.remove(item)
  
                deleted_space += space
                files.remove(item)
        return deleted_space


def count_extents(file_adresses):
  number_of_non_cont = 1
  if len(file_adresses) == 1:
    return number_of_non_cont
  
  for i in range(0,len(file_adresses)-1): 
    if (int(file_adresses[i][1])+1) != int(file_adresses[i+1][0]):
      number_of_non_cont += 1
  return number_of_non_cont

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

def make_pair(extent):
  return map(lambda x: int(x),extent.split('..'))

def recursive_glob(rootdir='.', pattern='*'):
    return [os.path.join(looproot, filename)
            for looproot, _, filenames in os.walk(rootdir)
            for filename in filenames
            if fnmatch.fnmatch(filename, pattern)]


def read_file(path,option):
  f = open(path,option)
  string = f.read()
  f.close
  return string

def get_compose():
    f = open('./out/system_variable',shell=True)
    contents = f.read()
    f.close()
    for line in contents:
	if line.split('=')[0] == 'DISTRO':
		print line.split('=')[1]
		return line.split('=')[1]


def get_fs(mountpoint):
    fs = read_file('./out/mount_info','r')
    string = mountpoint + " type "
    output = ''
    i = fs.find(string)+len(string)
    while (fs[i] != " "):	
      output += fs[i]
      i += 1;
    print output
    return output

def get_jobid():
  try:
    jobid = filter(lambda x: x.split('=')[0]=='JOBID', read_file('./out/system_variable','r').split('\n'))[0].split('=')[1]
  except IndexError:
    print '00000'
    sys.exit('No JOBID entry in ./out/system_variable')
  print jobid 
  return jobid

def nice_hostname(hostname):
  print hostname.split('.')[0]
