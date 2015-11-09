from scipy.stats import norm
import matplotlib.mlab as mlab
import matplotlib.pyplot as plt
import numpy as np
import sys, json
import functions as fun

#get extent image of filesystem
path = 'testdir' #sys.argv[1]
data = fun.get_data(path)
extents = open('home.data','w')
for i in range(0,len(data)):
 extents.write(str(fun.count_extents(data[i]))+'\n')
extents.close()

#get extents data from file
arch = "image.data"
datos = []
for item in open(arch,'r'):
    item = item.strip()
    if item != '':
        try:
	      datos.append(int(item))
        except ValueError:
            pass

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
plt.savefig('extent_distribution.png', dpi=50)


"""
# best fit of data
(mu, sigma) = norm.fit(datos)

# the histogram of the data
n, bins, patches = plt.hist(datos,threasold, normed=1, facecolor='blue', alpha=0.75)

# add a 'best fit' line
y = mlab.normpdf( bins, mu, sigma)
l = plt.plot(bins, y, 'r--', linewidth=2)

#plot
plt.xlabel('Number of extents (of a file)')
plt.ylabel('Number of such files')
plt.title(r'$\mathrm{Histogram\ of\ file\ extents:}\ \mu=%.3f,\ \sigma=%.3f$' %(mu, sigma))
plt.grid(True)
plt.show() 
"""
