import matplotlib.pyplot as plt
import numpy as np
import matplotlib.mlab as mlab
import math
import random

def sizeof_fmt(num, suffix='B'):
    for unit in ['','Ki','Mi','Gi','Ti','Pi','Ei','Zi']:
        if abs(num) < 1024.0:
            return "%3i%s%s" % (num, unit, suffix)
        num /= 1024.0
    return "%.1f%s%s" % (num, 'Yi', suffix)

def dist():
	file_sizes = [(2**i) for i in range(10,36)]
	ticks = []
	for i in range(len(file_sizes)-1):
		if i % 2 == 1:
			ticks.append(sizeof_fmt(file_sizes[i]))

	mu = 12.5
	sigma = 2.5
	x = np.linspace(0,26,26)



	probs1 = list(mlab.normpdf(x, mu, sigma))
	probs1 = map(lambda x: 2*x, probs1)	

	mu = 20
	sigma = 2

	probs2 = list(mlab.normpdf(x, mu, sigma))

	mu = 8
	sigma = 3

	probs3 = list(mlab.normpdf(x, mu, sigma))
	
#	probs = map(lambda x, y, z: x+y+z, probs1, probs2, probs3)	
	probs  = map(lambda x, y: x+y, probs1, probs2)	
	normed = [i/sum(probs) for i in probs]
	print normed
#	y = np.random.choice(file_sizes, 100000, p=normed)
	y = []

#	prob = list(mlab.normpdf(bins, mu, si))
	for i in range(20000):
#		y.append(np.random.normal(m, si))	
		y.append(np.random.choice(file_sizes, p=normed))
#		#y.append(random.gauss(m,si))
#	print y
	histogram, npbins = np.histogram(y, file_sizes)
#	print np.histogram(y, bins=20)

	histogram = map(lambda x: int(x), histogram)
	print histogram
	

	fig, ax = plt.subplots()

	ax.plot([i for i in range(len(normed))], normed)

#	ticks = []
#	for i in range(len(bins)-1):
#		ticks.append(sizeof_fmt(bins[i])+'-'+sizeof_fmt(bins[i+1]))
	ax.xaxis.set_ticks([i+i for i in range(len(ticks))])
	ax.xaxis.set_ticklabels(ticks)
	for label in ax.xaxis.get_ticklabels():
    		label.set_rotation(90)
	ax.set_ylabel('Probability')
	ax.set_xlabel('File size')
#	ax.set_ylim([0,0.1])
	ax.grid()
	fig.set_size_inches(4, 3)
#	plt.show()
	plt.savefig('dist',bbox_inches='tight')


dist()
