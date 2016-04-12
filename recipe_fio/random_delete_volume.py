import numpy as np
import matplotlib.pyplot as plt
import subprocess, sys
import functions as fun
from random import randint

def filter_empty_elements(list):
  return filter(lambda x: x == '', list)

#returns total volume used by file
def get_item_space(item):
  subprocess.call('du ' +item+ ' > du_tmp/item.du',shell=True)
  return int(fun.read_file('du_tmp/item.du','r').split('\t')[0])

#returns total volume used by top_directory
def get_used_space(top_directory):
  subprocess.call('du -c ' +top_directory+ '| grep total > du_tmp/used.du',shell=True)
  return int(fun.read_file('du_tmp/used.du','r').split('\t')[0])
  
subprocess.call('rm -rf du_tmp; mkdir du_tmp',shell=True)
top_directory = sys.argv[1]
percent_to_delete = int(sys.argv[2])

files = fun.recursive_glob(top_directory, '*')

used_space = get_used_space(top_directory)

#old_total = used_space
new_total = used_space
deleted_space = 0

while deleted_space <= (used_space//100)*percent_to_delete:
  old_total = new_total
  new_total = get_used_space(top_directory)
  
  item = files[randint(0,len(files)-1)]
  space = get_item_space(item)
  print item
  print space
  subprocess.call('rm -rf '+item,shell=True)
  
  deleted_space += (old_total - new_total)
  files.remove(item)
print str(deleted_space)