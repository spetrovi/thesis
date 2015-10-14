from scipy.stats import norm
import matplotlib.mlab as mlab
import matplotlib.pyplot as plt
import numpy as np
import get_data, sys

"""
#get extent image of filesystem
path = sys.argv[1]
data = get_data.get_data(path)
extents = open('image.data','w')

for i in range(0,len(data)):
 extents.write(str(len(data[i]))+'\n')
 
 if len(data[i])>2: #print for more extentet files
   print str(len(data[i]))
extents.close()
"""

#get extents data from file
arch = "ibm.data"
datos = []
for item in open(arch,'r'):
    item = item.strip()
    if item != '':
        try:
	    #if int(item) < threasold:
	      datos.append(int(item))
        except ValueError:
            pass
	  


buckets = list(set(datos))
buckets.sort()
values = []
for item in buckets:
  values.append(datos.count(item))

ticks = map(lambda x: str(x),buckets)
buckets = np.array(range(len(buckets)))

ax = plt.axes()
width = 1.0
ax.set_xticks(buckets+(width/2))
ax.set_xticklabels(ticks)
plt.bar(buckets,values,width,color='blue',log=1)
plt.grid()
plt.show()
plt.savefig('histogram.png')
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
