import matplotlib.pyplot as plt
import numpy as np
import matplotlib.mlab as mlab
import math
import random
from scipy.stats import lognorm
from scipy.stats import norm

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

def dist2():
	mu, sigma = 7.0, 0.9
	stddev = 0.859455801705594
#	stddev = 1
	mean = 0.418749176686875
#	mean = 2**8
	dist = lognorm(stddev,loc=mean)
	x=np.linspace(0,6,200)

#	x = np.linspace(2**7, 2**10,200)
	#vals = lognorm.rvs(2000, size=1000)
	#mean = 32k
#	vals = np.random.lognormal(10, 100)
#	print vals
#	l = lognorm(0.88711349, scale=math.exp(9.2991610))
#	vals = l.rvs(size=10000)
#	print("mean: %.5f  stddev: %.5f" % (np.mean(vals), np.std(vals)))
	#vals = np.random.lognormal(mu, sigma, 10000)

#	hist, bins = np.histogram(vals)
#	print len(hist), len(bins[:-1])

	fig, ax = plt.subplots()

#	y = map(lambda x: x*1000, dist.pdf(x))
	y = dist.pdf(x)
	print y
	x = map(lambda x: x*1000,x)
	ax.plot(x,y)	
#	ax.hist(vals, 100, normed=True, align='mid')
#	hist, bins= np.histogram(vals, bins=20)
#	print hist
#	print bins
#	ax.bar(bins[:-1], hist)
#	ticks = []
#	for i in range(len(bins)-1):
#		ticks.append(sizeof_fmt(bins[i])+'-'+sizeof_fmt(bins[i+1]))
#	ax.xaxis.set_ticks([i+i for i in range(len(ticks))])
#	ax.xaxis.set_ticklabels(ticks)
	for label in ax.xaxis.get_ticklabels():
    		label.set_rotation(90)
	ax.set_ylabel('Probability')
	ax.set_xlabel('File size')
#	ax.set_xscale('log')
#	ax.set_ylim([0,0.1])
#	ax.set_xscale('log', basex=2)
	ax.grid()
	fig.set_size_inches(4, 3)
#	plt.show()
	plt.savefig('dist',bbox_inches='tight')

def dist3():
	f_range = (2,28)
	file_sizes = [(2**i) for i in range(f_range[0],f_range[1])]
	mu = ((f_range[1]-f_range[0])/2)-3
	sigma = 4
	x = [i for i in range(f_range[1]-f_range[0])]
	
	probs = norm.pdf(x, loc = mu, scale = sigma)	

	normed = [i/sum(probs) for i in probs]
#	np.random.choice(file_sizes, p=normed)
#	print normed
	ticks = []
	for i in range(len(file_sizes)):
		if i % 3 == 1:
			ticks.append(sizeof_fmt(file_sizes[i]))


	fig, ax = plt.subplots()

	ax.plot(x, normed)
	y = np.random.choice(file_sizes, 10000, p = normed)
	histogram, bins =  np.histogram(y, bins = [8,16,128,2048, 32000, 512000, 8000000,128000000])
	print map(lambda x: sizeof_fmt(x), list(bins))
	print list(histogram)
#	bins = list(bins)[:-1]
#	histogram = list(histogram)

#	ax.plot(bins, histogram)
#	ticks = []
#	for i in range(len(bins)-1):
#		ticks.append(sizeof_fmt(bins[i])+'-'+sizeof_fmt(bins[i+1]))
#	ax.xaxis.set_ticks([i+i for i in range(len(ticks))])
#	ax.xaxis.set_ticklabels(['8B', '128B', '2KiB', '32KiB', '512KiB', ' 8MiB', '128MiB'])
#	for i, label in enumerate(ax.xaxis.get_ticklabels()):
#   		label.set_rotation(90)
	ax.set_ylabel('Probability')
	ax.set_xlabel('File size')
#	ax.set_ylim([0,0.1])
	ax.grid()
	fig.set_size_inches(4, 3)
#	plt.show()
	plt.savefig('dist',bbox_inches='tight')
dist3()
#dist2()
#dist()




















