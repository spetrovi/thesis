import subprocess, sys, glob
import numpy as np
import fnmatch
import os

def recursive_glob(rootdir='.', pattern='*'):
    return [os.path.join(looproot, filename)
            for looproot, _, filenames in os.walk(rootdir)
            for filename in filenames
            if fnmatch.fnmatch(filename, pattern)]

#cfiles = recursive_glob('src', '*.c')



def make_pair(extent):
  return map(lambda x: int(x),extent.split('..'))

def get_data(folder):
  files = recursive_glob(folder, '*')
  result = []
  for i in range(0,len(files)):
    subprocess.call('xfs_io -c fiemap '+files[i]+'> file_data',shell=True)
    f = open('file_data','r')
    data = f.read()
    f.close()
    data = data.split('\n')[1:]
    data = map(lambda x: x.split(':')[1:],data)[:-1]
    data = map(lambda x: x[1][1:],data)
    #filter out holes
    data = filter(lambda x: x!='hole',data)
    data = map(make_pair,data)
    result.append(data)
  return result
  
