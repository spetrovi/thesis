import subprocess, sys, glob, fnmatch, os, json
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.mlab as mlab
from scipy.ndimage import measurements
from itertools import islice
import matplotlib.cm as cm
from pylab import *
from scipy.ndimage import measurements
from itertools import islice
import copy

#opens file, load the contents, close file, returns contents
def read_file(name, option):
  f = open(name, option)
  string = f.read()
  f.close()
  return string


def recursive_glob(rootdir='.', pattern='*'):
    return [os.path.join(looproot, filename)
            for looproot, _, filenames in os.walk(rootdir)
            for filename in filenames
            if fnmatch.fnmatch(filename, pattern)]

def save_json(file_name, data):
  save_json = open(file_name+'.json','w')
  save_json.write(json.dumps(data))
  save_json.close()
  
def load_json(file_name):
  load_json = open(file_name,'r')
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
  
  
def count_extents(file_adresses):
  number_of_non_cont = 1
  if len(file_adresses) == 1:
    return number_of_non_cont
  
  for i in range(0,len(file_adresses)-1): 
    if (int(file_adresses[i][1])+1) != int(file_adresses[i+1][0]):
      number_of_non_cont += 1
  return number_of_non_cont

def analyse_cycles():
  cycles = glob.glob('*.json')
  cycles.sort()
  map(lambda x: extent_distribution(x, load_json(x)), cycles)
  map(lambda x: visual(x, load_json(x)), cycles)
  
def extent_distribution(name, data):
  datos = []
  if data == []:
    return 0
  for item in data:
    datos.append(count_extents(item))
    suma = sum(datos)
  buckets = list(set(datos))
  buckets.sort()
  values = []
  for item in buckets:
    values.append(datos.count(item))

  ticks = map(lambda x: str(x),buckets)
  buckets = np.array(range(len(buckets)))

  plt.figure(figsize=(24.0,12.38))
  ax = plt.axes()
  width = 1.0
  ax.set_xticks(buckets+(width/2))
  ax.set_xticklabels(ticks)
  plt.bar(buckets,values,width,color='green',log=1, label='Amount of files with given number of extents')
  plt.legend(loc='upper right')
  plt.grid(linewidth=3)
  plt.xlabel('Number of extents')
  plt.ylabel('Number of files')
  plt.title
  #plt.show()
  plt.savefig('./out/Ex'+name[:-5]+'.png', dpi=50)
  return 1

#divide list 'lis' into 'n' rows
def solve(lis, n):
  it = iter(lis)
  return [list(islice(it,n)) for _ in xrange(len(lis)/n)]

#concate list 'list_'
def concate_list(list_):
  total = []
  for i in list_:
    total += i
  return total

def visual(name, files):
  if files==[]:
    return 0
  files.sort()
  for i in range(0,len(files)):
    for item in files[i]: # first address of extent
      item[1] = item[1]-item[0] #size of extent
      item.append(i) #color
  files = concate_list(files)
  files.sort()

  #every extent has a right color, size and place among other extents
  size = files[0][1]
  color = files[0][2]
  file_ = [color]*size
  newArray = [file_]

  for i in range(i,len(files)):
    prevAddress = files[i-1][0]
    prevSize = files[i-1][1]
    freeSpace = files[i][0]-(prevAddress+prevSize)
    if freeSpace != 0:
      if freeSpace > 5000:
	freeSpaceObject = [0]*5000
      else:
	freeSpaceObject = [0]*freeSpace
    newArray.append(freeSpaceObject)
    size = files[i][1]
    color = files[i][2]
    file_ = [color]*size
    newArray.append(file_)

  overData = concate_list(newArray)
  #divide to more rows, +- sqrt(len(overData)) to make a square
  ra = solve(overData,int(sqrt(len(overData))))
  #make graph
  fig = plt.figure()
  plt.imshow(ra, origin='upper', interpolation='nearest')
  colorbar()
  title("Matrix")
  #show()
  fig.savefig('./out/2d'+name[:-5]+'.png', dpi=200)
  return 1




























