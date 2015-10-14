from scipy.stats import norm
import matplotlib.mlab as mlab
import matplotlib.pyplot as plt
import get_data, sys
import numpy as np
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
	      datos.append(float(item))
        except ValueError:
            pass 
"""
pos = np.array(map(lambda x: int(x),list(set(datos))))
print pos
width = 1.0
ax = plt.axes()
ax.set_xticks(pos + (width / 2))
ax.set_xticklabels(pos)
plt.bar(pos, datos, width, color='b',)
plt.show()


#linear visualisation of filesystem
"""
pos = np.arange(len(datos))
width = 0.01
ax = plt.axes()
ax.set_xticks(pos + (width / 2))
#ax.set_xticklabels(pos)
ax.set_yscale('log')
plt.bar(pos, datos, width, color='b',log=1)
plt.show()
#plt.savefig('linear_image.png')
