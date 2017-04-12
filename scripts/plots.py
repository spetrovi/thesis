import matplotlib.pyplot as plt
import numpy as np
import matplotlib.mlab as mlab
import math

def figure1():
	x = [i for i in range(21)]
	y = [0.05 for i in range(21)]

	fig, ax = plt.subplots()
	ax.plot(x,y)
#	ax.yaxis.set_ticklabels([])
	ax.set_ylabel('Probability of access')
	ax.set_xlabel('File index')
	ax.set_ylim([0,0.1])
	ax.grid()
	fig.set_size_inches(4, 3)
	plt.savefig('fig1',bbox_inches='tight')

def figure2():
	mu = 0
	variance = 1
	sigma = math.sqrt(variance)
	x = np.linspace(-10, 10, 300)
	y =  list(mlab.normpdf(x, mu, sigma))
	y = y[150:]+y[:150]
	x = map(lambda x: x+10.0, x)

	fig, ax = plt.subplots()
	ax.plot(x,y)
#	ax.yaxis.set_ticklabels([])
	ax.set_ylabel('Probability of access')
	ax.set_xlabel('File index')
	ax.set_ylim([0,0.5])
	ax.grid()
	fig.set_size_inches(4, 3)
	plt.savefig('fig2',bbox_inches='tight')

def figure3():
	mu = 5
	variance = 1
	sigma = math.sqrt(variance)
	n = 20
	k = 300
	x = np.linspace(0, n, k)
	y =  list(mlab.normpdf(x, mu, sigma))

	fig, ax = plt.subplots()
	ax.plot(x,y)

	mu = 10
	variance = 1
	sigma = math.sqrt(variance)
	
	y =  list(mlab.normpdf(x, mu, sigma))

	ax.plot(x,y)

	mu = 15
	variance = 1
	sigma = math.sqrt(variance)
	
	y =  list(mlab.normpdf(x, mu, sigma))

	ax.plot(x,y)

#	x = [5,5]
#	y = [0.0, 0.2]

#	ax.plot(x,y, linestyle='-', color='red')

#	x = [10,10]
#	y = [0.0, 0.2]

#	ax.plot(x,y, linestyle='-', color='red')

#	x = [i for i in range(5,11)]
#	y = [0.2 for i in range(5,11)]

#	ax.plot(x,y, linestyle='-', label='moved average', linewidth=5, color='red')
#	ax.arrow((5, 0.2), (10, 0.2), head_width=0.05, head_length=0.1)
	ax.annotate('', xy=(10,0.1), xytext=(5,0.1), arrowprops=dict(facecolor='red', shrink=0.05))
	ax.annotate('', xy=(15,0.12), xytext=(10,0.12), arrowprops=dict(facecolor='red', shrink=0.05))
#	ax.annotate('moving average', xy=(5.2,0.2), xytext=(5.2,0.21))
#	ax.yaxis.set_ticklabels([])
	ax.set_ylabel('Probability of access')
	ax.set_xlabel('File index')
#	plt.show()
	ax.set_ylim([0,0.5])
	ax.grid()
	fig.set_size_inches(4, 3)
	plt.savefig('fig3',bbox_inches='tight')
figure1()
figure2()
figure3()
