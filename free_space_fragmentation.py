import numpy as np
import matplotlib.pyplot as plt

def remove_space(line):
    return filter(lambda x: x!='', line.split(' '))

#e2freefrag /dev/agingfs_group/agingfs >> ibm.free

f = open('ibm.free','r')
fsf = f.read()
f.close()

fsf = fsf.split('\n')
info = []
for i in range(0,11):
  info.append(fsf[i])
free_percent = fsf[3].split(' ')[3][1:-2]
used_percent = 100.0 - float(free_percent)
blockSize = int(fsf[1].split(' ')[1])
totalBlocks= int(fsf[2].split(' ')[2])
totalVolume = (blockSize*totalBlocks)/1000000000#convert to GB
histogram = []
for i in range(12,len(fsf)):
  histogram.append(fsf[i])
  
histogram = map(lambda x: remove_space(x), histogram)
ticks = []
extents = []
blocks = []
for i in range(0,len(histogram)):
  histogram[i].pop(2)
  ticks.append(histogram[i][0][:-3] + '-' + histogram[i][1][:-1])
  extents.append(int(histogram[i][2]))
  blocks.append(int(histogram[i][3]))
  
buckets = np.array(range(len(ticks)))
plt.figure(figsize=(24.0,12.38))
ax = plt.axes()
width = 1.0
ax.set_xticks(buckets+(width/2))
ax.set_xticklabels(ticks)
ax.set_ylabel('free extents')
#ax.set_ylabel('free blocks')
plt.bar(buckets,extents,width,color='green',log=0, label='Amount of free extents of given size')
plt.title('Volume size: '+str(totalVolume)+'GB, Used volume: '+str(used_percent)+'%')
plt.legend(loc='upper right') 
plt.xlabel('Size of free extents')
plt.ylabel('Number of extents')
plt.grid(linewidth=3)
#plt.show()
plt.savefig('free_fragmentation',dpi=50)












