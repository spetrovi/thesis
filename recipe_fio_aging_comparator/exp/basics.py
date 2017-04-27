from random import randint
import subprocess
import glob
import numpy as np


import csv
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
from scipy.interpolate import interp1d
from scipy.signal import savgol_filter



def generate_rsp_plot(filename):
	x = []
	y = []
	with open(filename, "rb") as csvfile:
        	datareader = csv.reader(csvfile)
        	count = 0
        	for row in datareader:
#			if count % 10 == 0:
				x.append(float(row[0]))
				y.append(float(row[1]))	
				count +=1
	
	xx = np.linspace(min(x),max(x), 1000)

	# interpolate + smooth
	itp = interp1d(x,y, kind='linear')
	window_size, poly_order = 101, 3
	yy_sg = savgol_filter(itp(xx), window_size, poly_order)
	
	fig, ax = plt.subplots()
	ax.plot(xx,yy_sg)
	ax.set_ylabel('Response time[s]')
	ax.set_xlabel('Time[s]')
	#ax.set_ylim([0,0.1])
	ax.grid()
#	fig.set_size_inches(4, 3)
	plt.savefig('fig.png')#,bbox_inches='tight')

generate_rsp_plot(glob.glob('./out_xfs/*rspt.csv')[0])

