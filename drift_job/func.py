import  re,sys, subprocess, glob

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
