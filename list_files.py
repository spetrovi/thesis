import numpy as np
import matplotlib.pyplot as plt
import subprocess, sys, os, fnmatch
import functions as fun
from random import randint
  


#returns total volume used by file
def get_item_space(item):
  subprocess.call('du ' +item+ ' > du_tmp/item.du',shell=True)
  return int(fun.read_file('du_tmp/item.du','r').split('\t')[0])

  
subprocess.call('rm -rf du_tmp; mkdir du_tmp',shell=True)
top_directory = sys.argv[1]
name = sys.argv[2]

files = fun.recursive_glob(top_directory, '*')
for i in range(0,len(files)):
  files[i]=(files[i],get_item_space(files[i]))
fun.save_json(name,files)
rm -rf du_tmp