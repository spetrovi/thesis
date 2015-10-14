import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm
import get_data
import sys

from pylab import *
from scipy.ndimage import measurements
from itertools import islice
import copy

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

data = np.array(get_data.get_data('testdir'))
files = copy.deepcopy(data)
#unfold ranges into list of integers
for i in range(0,len(data)):
  ranges = data[i]
  for j in range(0,len(ranges)):
    ranges[j] = range(int(ranges[j][0]),int(ranges[j][1])+1)

#unfold ranges into list of integers
for i in range(0,len(files)):
  ranges = files[i]
  for j in range(0,len(ranges)):
    size = ranges[j][1] - ranges[j][0]
    ranges[j] = [int(ranges[j][0])]*size
    ranges[j].append(i+1)


#concate lists
for i in range(0,len(data)):
  data[i] = concate_list(data[i])
  #files[i] = concate_list(files[i])

files = concate_list(files)
files.sort()

size = len(files[0])
color = files[i][len(files[i])-1]
file_ = [color]*size
newArray = [file_]

#here to add free space
for i in range(1,len(files)):
  prevAddress = files[i-1][0]
  prevSize = len(files[i-1])
  freeSpace = files[i][0]-(prevAddress+prevSize)
  #print 'prev address ' + str(prevAddress) +' '+ 'size ' +str(prevSize)
  #print 'curr address ' + str(files[i][0])
  #print str(freeSpace)
  if freeSpace != 0:
    if freeSpace > 5000:
      freeSpaceObject = [0]*1000
    else:
      freeSpaceObject = [0]*freeSpace
    newArray.append(freeSpaceObject)
  #newArray.append(files[i])
  size = len(files[i])
  color = i#files[i][len(files[i])-1]
  file_ = [color]*size
  newArray.append(file_)
#here to color right

#concate lists again
overData = concate_list(newArray)
#overData.sort()

#substract minimal addres
#minimalAddress = np.min(overData)

#divide to more rows, +- sqrt(len(overData)) to make a square
ra = solve(overData,int(sqrt(len(overData))))

#make graph
imshow(ra, origin='upper', interpolation='nearest')
colorbar()
title("Matrix")
show()



#data = np.array(get_data.get_data('testdir'))
#for i in range(0,len(data)):
  #ranges = data[i]
  #for j in range(0,len(ranges)):
    #ranges[j] = range(int(ranges[j][0]),int(ranges[j][1])+1)
    
    
#minimum = np.min(data)
#maximum = np.max(data)
#print minimum
#print maximum
#data.sort()
#print data
"""	
import pylab as plt
import numpy as np

# Sample data
side = np.linspace(-2,2,1000)
X,Y = np.meshgrid(side,side)
Z = np.exp(-((X-1)**2+Y**2))

# Plot the density map using nearest-neighbor interpolation
plt.pcolormesh(X,Y,Z)
plt.show()"""