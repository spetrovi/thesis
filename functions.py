import subprocess, sys, glob, fnmatch, os, json
import numpy as np

def recursive_glob(rootdir='.', pattern='*'):
    return [os.path.join(looproot, filename)
            for looproot, _, filenames in os.walk(rootdir)
            for filename in filenames
            if fnmatch.fnmatch(filename, pattern)]

def save_json(file_name, data):
  save_json = open(file_name+'.json','w')
  save_json.write(json_dumps(data))
  save_json.close()
  
def load_json(file_name):
  load_json = open(file_name+'.json','r')
  data_string = load_json.read()
  load_json.close()
  return json.loads(data_string)


def make_pair(extent):
  return map(lambda x: int(x),extent.split('..'))
    
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

#store adress image of filesystem
def store_image(folder, file_name):
  data = get_data(folder)
  save_json(file_name, data)