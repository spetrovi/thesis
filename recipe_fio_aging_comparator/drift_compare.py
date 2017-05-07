from random import randint
import subprocess
import glob
import numpy as np
from html import HTML
from free_space_frag import Free_space_fragmentation
from extent_distribution import used_space_histogram
from image import d_image
import csv
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
from scipy.interpolate import interp1d
from scipy.signal import savgol_filter

def untar(source):
	if source[-2:] == 'xz':
		subprocess.call('tar -Jxf '+source+' -C ./',shell=True)
	if source[-2:] == 'gz':
		subprocess.call('tar -zxf '+source+' -C ./',shell=True)



def read_file(name,option):
  f = open(name,option)
  str_ = f.read()
  f.close()
  return str_

#returns value of the given parameter
def get_value(string, parameter):
	res = filter(lambda x: x.split('=')[0] == parameter, string.split('\n'))[0].split('=')[1:]
	if len(res) > 1: return ' '.join('='.join(res).split('-'))
	return res[0]



class Tar:
  def __init__(self, tar, destination):
    self.destination = destination
    self.tar = tar
    self.tar_name = tar.split('/')[-1:][0][:-7]
    self.properties = read_file(self.tar[:-7]+'.properties','r')
    self.fsystem = get_value(self.properties,'filesystem')
#    self.free_space_pretest = []
#    self.free_space_posttest = []
#    self.extent_distribution = []
    self.image = glob.glob(self.tar[:-7]+'*bz2')[0]#]get_value(self.properties,'image')
    self.host = get_value(self.properties,'hostname').split('.')[0]
    self.image_ID = ''


  def process_image(self):
#	untar(self.host+'_images/'+self.image.split('.')[0]+'.tar.xz')
	untar(self.tar)
	self.image_ID = d_image(self.fsystem, self.destination)
	self.image_rsp_plot = self.generate_rsp_plot(glob.glob('./out/*rspt.csv')[0])
	self.image_usage_plot = self.generate_usage_plot()
	self.extents_ID, self.fsize_ID= used_space_histogram('./out/fie_data', self.destination)

	self.image_log = read_file('./out/log.out','r')
	self.image_recipe = read_file('./out/recipe','r')
	subprocess.call('rm -rf out',shell=True)

  def generate_usage_plot(self):
	contents = read_file('./out/df_log.out','r').split('\n')[:-1]#[8:-3]
        percents = map(lambda x: int(x.split('%')[0].split(' ')[-1:][0]),contents)
	x = [300*i for i in range(len(percents))]
	fig, ax = plt.subplots()
	ax.plot(x,percents)
	ax.set_ylabel('Used space[%]')
	ax.set_xlabel('Time[s]')
	#ax.set_ylim([0,0.1])
	ax.grid()
#	fig.set_size_inches(4, 3)
	plt.savefig(self.destination+'usage_'+self.image_ID+'.png')#,bbox_inches='tight')
	return 'usage_'+self.image_ID+'.png'

  def generate_rsp_plot(self, filename):
	rsptimes = {}
	fig, ax = plt.subplots()
	with open(filename, "rb") as csvfile:
        	datareader = csv.reader(csvfile)
		name = 'aggr'
        	for row in datareader:
				if len(row) == 1:
					name = row[0]
					rsptimes.update({name:([],[])})
				else:
					if rsptimes == {}: rsptimes.update({name:([],[])})
					rsptimes[name][0].append(float(row[0]))
					rsptimes[name][1].append(float(row[1]))
	for key, (x,y) in rsptimes.items():
		if x!=[]:
			xx = np.linspace(min(x),max(x), 1000)

			# interpolate + smooth
			itp = interp1d(x,y, kind='linear')
			window_size, poly_order = 501, 5
			yy_sg = savgol_filter(itp(xx), window_size, poly_order)
	
			ax.plot(xx,yy_sg,label=key)

	#ax.plot(xx,y)
	ax.set_ylabel('Response time[s]')
	ax.set_xlabel('Time[s]')
	#ax.set_ylim([0,0.1])
	ax.grid()
	box = ax.get_position()
	ax.set_position([box.x0, box.y0 + box.height * 0.1,
                 box.width, box.height * 0.9])
	legend = ax.legend(loc='upper left')#), bbox_to_anchor=(0.5, -0.05), shadow=True, ncol=5)
#	ax.set_yscale("log")#, nonposy='clip')
#	fig.set_size_inches(6,5)
	plt.savefig(self.destination+'/'+self.image_ID+'.png')#,bbox_inches='tight')
	return self.image_ID+'.png'

class Report:
  def __init__(self,path1, path2, destination):
	self.destination = destination+path1.split('/')[-1:][0][:-7]+'_vs_'+path2.split('/')[-1:][0][:-7]+'/'
        subprocess.call('mkdir '+self.destination,shell=True)  
	self.tar1 = Tar(path1, self.destination)
	self.tar2 = Tar(path2, self.destination)
#	self.tar1.process()
#	self.tar2.process()
#       self.charts = [Charts(self.tar1, self.tar2)]
   	self.report = self.make_report()
	

  def save(self):
#    f = open(self.destination+'/'+self.charts[0].ID+'.js', 'w')
#    f.write(self.charts[0].box_highchart)
#    f.close()


    f = open(self.destination+'/index.html','w+')
    f.write(str(self.report))
    f.close()	

  def make_report(self):
	r = HTML()
	r.html
	r.head
	r.title('Results of fs aging test')
	r.script('', type='text/javascript', src='http://code.jquery.com/jquery-1.9.1.js')
 	r += '</head>'
	r.body
	r.script('', src="http://code.highcharts.com/highcharts.js")
	r.script('', src="http://code.highcharts.com/highcharts-more.js")
	r.script('', src="http://code.highcharts.com/modules/exporting.js")
#	r.script('', src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js")
	r.script('', src="https://code.highcharts.com/highcharts-3d.js")


	r.link(rel="stylesheet", type="text/css", href="stylesheet.css")
	r.br
	r.font(size='3')
	r.style
	r += '''table {
	    width:20%;
	    }
	    table, th, td{
	    border: 1px solid black;
	    border-collapse: collapse;
	    font-size: 14px;
	    }
	    th, td{
	    padding: 5px;
	    text-align: left;
	    }
	    table#t01 tr:nth-child(even) {
	    background-color: #eee;
	    }
	    table#t01 tr:nth-child(odd) {
	    background-color:#fff;
	    }
	    table#t01 th	{
	    background-color: white;
	    color: black;
	    })\n</style>'''
	r.dt
	r.strong('recipe fio results on '+'draven')
	r.br
	r.br
	r.dt.strong('Kernels')
	ul = r.ul
	ul.li('set1: '+get_value(self.tar1.properties,'kernel'))
	ul.li('set2: '+get_value(self.tar2.properties,'kernel'))
	
	r.dt
	r.strong('Builds')
	ul = r.ul
	ul.li('set1: '+get_value(self.tar1.properties,'build'))
	ul.li('set2: '+get_value(self.tar2.properties,'build'))
	
	r.dt.strong('Machine')
	if get_value(self.tar1.properties,'hostname') == get_value(self.tar2.properties,'hostname'):
		ul = r.ul
		ul.li.a(get_value(self.tar1.properties,'hostname'),href="https://beaker.engineering.redhat.com/view/"+get_value(self.tar1.properties,'hostname')+"#details")
		#ul.li('RAM '+'ram')

	r.strong('Test script, raw data and test logs')
	ul = r.ul
	ul.li.a('Test Bash script', href="http://pkgs.devel.redhat.com/cgit/tests/performance/tree/recipe_fio/runtest.sh")
	ul.li.a('Raw data folder', href='http://perf-desktop.brq.redhat.com/fsage_thesis/'+'sors')
	r.dt.strong('Used tools')
	ul = r.ul
	ul.li.a('FIO (Flexible Input/Output tool)', href="https://github.com/axboe/fio")
	ul.ul.li('version: fio-2.1.10')
	ul.li.a('Fs-drift, file system aging test', href="https://github.com/bengland2/fs-drift")

	#r += self.create_toc()
	r.dt.strong('Image')
	if self.tar1.image == self.tar2.image:
		self.tar1.process_image()
		image_ID = self.tar1.image_ID
		r.script('', type='text/javascript', src=image_ID+'.js')
		r.li.div(id=image_ID, align='left')
	else:
		self.tar1.process_image()
		self.tar2.process_image()
		image_ID1 = self.tar1.image_ID
		image_ID2 = self.tar2.image_ID
		image_extents1 = self.tar1.extents_ID
		image_extents2 = self.tar2.extents_ID
		image_fsizes1 = self.tar1.fsize_ID
		image_fsizes2 = self.tar2.fsize_ID
		r.script('', type='text/javascript', src=image_ID1+'.js')
		r.script('', type='text/javascript', src=image_ID2+'.js')
		r.script('', type='text/javascript', src=image_extents1+'.js')
		r.script('', type='text/javascript', src=image_extents2+'.js')
		r.script('', type='text/javascript', src=image_fsizes1+'.js')
		r.script('', type='text/javascript', src=image_fsizes2+'.js')
		table = r.table
		tr = table.tr
		tr.td.div(id=image_ID1, align='left')
		tr.td.div(id=image_ID2, align='left')
		tr = table.tr
		tr.td.img(src=self.tar1.image_rsp_plot)
		tr.td.img(src=self.tar2.image_rsp_plot)

		tr = table.tr
		tr.td.img(src=self.tar1.image_usage_plot)
		tr.td.img(src=self.tar2.image_usage_plot)
		tr = table.tr
		tr.td.div(id=image_extents1, align='left')
		tr.td.div(id=image_extents2, align='left')
		tr = table.tr
		tr.td.div(id=image_fsizes1, align='left')
		tr.td.div(id=image_fsizes2, align='left')
		tr = table.tr
		td = tr.td
		for line in self.tar1.properties.split('\n'):
			td.li(line)
		td = tr.td
		for line in self.tar2.properties.split('\n'):
			td.li(line)
#		tr.td.pro(self.tar1.properties)
#		tr.td.pro(self.tar2.properties)

		#r.li.div(id=image_ID1, align='left')
		#r.li.div(id=image_ID2, align='left')
	return r

"""
path1 = glob.glob('/home/spetrovi/Documents/test_results/draven_images/*-drift_job-xfs-1SASHDD-RSP.tar.xz')[0]
path2 = glob.glob('/home/spetrovi/Documents/test_results/draven_images/*-drift_job-xfs-1SASHDD-DIVRSP.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()


path1 = glob.glob('/home/spetrovi/Documents/test_results/draven_images/*-drift_job-ext4-1SASHDD-MAINTAIN.tar.xz')[0]
path2 = glob.glob('/home/spetrovi/Documents/test_results/draven_images/*-drift_job-ext4-1SASHDD-DIVRSP.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()



path1 = glob.glob('/home/spetrovi/Documents/test_results/draven_images/*-drift_job-xfs-1SASHDD-MAINTAIN.tar.xz')[0]
path2 = glob.glob('/home/spetrovi/Documents/test_results/joker_images/*-drift_job-xfs-1SATASSD-MAINTAIN.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()

path1 = glob.glob('/home/spetrovi/Documents/test_results/draven_images/*-drift_job-ext4-1SASHDD-MAINTAIN.tar.xz')[0]
path2 = glob.glob('/home/spetrovi/Documents/test_results/joker_images/*-drift_job-ext4-1SATASSD-MAINTAIN.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()

path1 = glob.glob('./joker_images/*-drift_job-xfs-1SATASSD-DIVRSP.tar.xz')[0]
path2 = glob.glob('./joker_images/*-drift_job-ext4-1SATASSD-DIVRSP.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()

path1 = glob.glob('./draven_images/*-drift_job-xfs-1SASHDD-DIVRSP.tar.xz')[0]
path2 = glob.glob('./draven_images/*-drift_job-ext4-1SASHDD-DIVRSP.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()
"""
path1 = glob.glob('./blade_images/*-drift_job-xfs-1SASHDD-EXP.tar.xz')[0]
path2 = glob.glob('./blade_images/*-drift_job-xfs-1SATASSD-EXP.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()
 

path1 = glob.glob('./blade_images/*-drift_job-ext4-1SASHDD-EXP.tar.xz')[0]
path2 = glob.glob('./blade_images/*-drift_job-ext4-1SATASSD-EXP.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()

#path1 = glob.glob('/home/spetrovi/Documents/test_results/joker_images/*-drift_job-ext4-1SATASSD-MAINTAIN.tar.xz')[0]
#path2 = glob.glob('/home/spetrovi/Documents/test_results/joker_images/*-drift_job-ext4-2SATASSDLVM-MAINTAIN.tar.xz')[0]
#r = Report(path1,path2,'./res/')
#r.save()























