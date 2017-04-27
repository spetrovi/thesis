import subprocess, func, os
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
  return int(func.read_file('du_tmp/used.du','r').split('\t')[0])*1000

def delete_volume(mountpoint, delete):
	files = filter(lambda x: os.path.getsize(x) != 0, func.recursive_glob(mountpoint, '*'))

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
