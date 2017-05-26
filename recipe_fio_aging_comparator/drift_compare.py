from random import randint
import subprocess
import glob
import numpy as np
from html import HTML
from free_space_frag import Free_space_fragmentation
from extent_distribution import used_space_histogram
from extent_distribution import file_size_histogram
from image import d_image
import csv
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
from scipy.interpolate import interp1d
from scipy.signal import savgol_filter
from scipy.stats import linregress

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
    #self.image = glob.glob(self.tar[:-7]+'*bz2')[0]#]get_value(self.properties,'image')
    self.host = get_value(self.properties,'hostname').split('.')[0]
    self.image_ID = ''


  def process_image(self):
#	untar(self.host+'_images/'+self.image.split('.')[0]+'.tar.xz')
	untar(self.tar)
	self.image_ID = d_image(self.fsystem, self.destination)
	self.image_rsp_plot, self.image_rsp_reg = self.generate_rsp_plot(glob.glob('./out/*rspt.csv')[0])
	self.image_usage_plot = self.generate_usage_plot()
	self.extents_ID= used_space_histogram('./out/fie_data', self.destination)
#	self.fsize_ID = file_size_histogram('./out/du_data', self.destination)
	self.image_log = read_file('./out/log.out','r')
	self.image_recipe = read_file('./out/recipe','r')
	subprocess.call('rm -rf out',shell=True)

  def generate_usage_plot(self):
	contents = read_file('./out/df_log.out','r').split('\n')[:-1]#[8:-3]
        percents = map(lambda x: int(x.split('%')[0].split(' ')[-1:][0]),contents)
	x = [0.08*i for i in range(len(percents))]
	fig, ax = plt.subplots()
	ax.plot(x,percents)
	ax.set_ylabel('Used space [%]')
	ax.set_xlabel('Time [h]')
	#ax.set_ylim([0,0.1])
	ax.grid()
	fig.set_size_inches(4, 3)
	plt.savefig(self.destination+'usage_'+self.image_ID+'.png', bbox_inches='tight')
	return 'usage_'+self.image_ID+'.png'

  def generate_rsp_plot(self, filename):
	template = read_file('templates/rsp_template.js','r')
	line_template = read_file('templates/rsp_line_template.js','r')

	ID_cur = self.image_ID+'_rsp'
	ID_reg = self.image_ID+'_rsp_reg'

	template_cur = ID_cur.join(template.split('XXX_NAME_XXX'))
	template_reg = ID_reg.join(template.split('XXX_NAME_XXX'))

	template_cur = 'Evolution of latency'.join(template_cur.split('XXX_TITLE_XXX'))
	template_reg = 'Linear regression of latency'.join(template_reg.split('XXX_TITLE_XXX'))

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
	bins_xx = []
	mx = []
	for key, (x,y) in rsptimes.items():
		if x!=[]:
			if len(x) > len(mx): mx = x[:]

	bins_xx = np.linspace(min(mx),max(mx), 600)
	info_file = open(self.destination+self.tar_name+'.info','w')
	
	for key, (x,y) in rsptimes.items():
		if x!=[]:
			#prepare values

			xx = np.linspace(min(x),max(x), 600)

			y = map(lambda x: x*1000, y) #s to ms

			info_file.write(key+'\n')
			info_file.write(str(np.median(y))+'\,ms\n')
			info_file.write(str(np.mean(y))+'\,ms\n')
			#print key
			#print np.median(y)
			#print np.mean(y)
			#print '\n'
		
			#print key
			#print linregress(x,y)			
			
			# interpolate + smooth
			itp = interp1d(x,y)
			window_size, poly_order = 101, 3
			yy_sg = savgol_filter(itp(xx), window_size, poly_order)
			

			
			#name template
			line = line_template
			line = key.join(line.split('XXX_NAME_XXX'))	

			#actual curve			
			y_curve = list(yy_sg)
			#y_curve = list(itp(xx))

			#regression
			fit = np.polyfit(x,y,2)
			fit_fn = np.poly1d(fit)
			y_regression = map(lambda x: fit_fn(x), bins_xx)
	
			#push data to template
			line_cur = str(y_curve).join(line.split('XXX_DATA_XXX'))
			template_cur = (line_cur+'XXX_LINE_XXX').join(template_cur.split('XXX_LINE_XXX'))

			line_reg = str(y_regression).join(line.split('XXX_DATA_XXX'))
			template_reg = (line_reg+'XXX_LINE_XXX').join(template_reg.split('XXX_LINE_XXX'))


	info_file.close()
	template_cur = ''.join(template_cur.split('XXX_LINE_XXX'))
	template_reg = ''.join(template_reg.split('XXX_LINE_XXX'))

	ticks = map(lambda x: int(x), list(bins_xx))
	template_cur = str(ticks).join(template_cur.split('XXX_BINS_XXX'))
	template_reg = str(ticks).join(template_reg.split('XXX_BINS_XXX'))
	
			
	#		ax.plot(xx,yy_sg,label=key)
	f = open(self.destination+'/'+ID_cur+'.js','w')
	f.write(template_cur)
	f.close()

	f = open(self.destination+'/'+ID_reg+'.js','w')
	f.write(template_reg)
	f.close()

	return ID_cur, ID_reg
	#ax.plot(xx,y)
	#ax.set_ylabel('Response time[s]')
	#ax.set_xlabel('Time[s]')
	#ax.set_ylim([0,0.1])
	#ax.grid()
	#box = ax.get_position()
	#ax.set_position([box.x0, box.y0 + box.height * 0.1,
        #         box.width, box.height * 0.9])
	#legend = ax.legend(loc='upper left')#), bbox_to_anchor=(0.5, -0.05), shadow=True, ncol=5)
#	x.set_yscale("log")#, nonposy='clip')
#	fig.set_size_inches(6,5)
	#plt.savefig(self.destination+'/'+self.image_ID+'.png')#,bbox_inches='tight')
#	return self.image_ID+'.png'

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
	r.script('', src="//rawgithub.com/phpepe/highcharts-regression/master/highcharts-regression.js")
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
	if False: #self.tar1.image == self.tar2.image:
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
		#image_fsizes1 = self.tar1.fsize_ID
		#image_fsizes2 = self.tar2.fsize_ID
		image_rsp_plot1 = self.tar1.image_rsp_plot
		image_rsp_plot2 = self.tar2.image_rsp_plot
		image_rsp_reg1 = self.tar1.image_rsp_reg
		image_rsp_reg2 = self.tar2.image_rsp_reg
		r.script('', type='text/javascript', src=image_ID1+'.js')
		r.script('', type='text/javascript', src=image_ID2+'.js')
		r.script('', type='text/javascript', src=image_extents1+'.js')
		r.script('', type='text/javascript', src=image_extents2+'.js')
		#r.script('', type='text/javascript', src=image_fsizes1+'.js')
		#r.script('', type='text/javascript', src=image_fsizes2+'.js')
		r.script('', type='text/javascript', src=image_rsp_plot1+'.js')
		r.script('', type='text/javascript', src=image_rsp_plot2+'.js')
		r.script('', type='text/javascript', src=image_rsp_reg1+'.js')
		r.script('', type='text/javascript', src=image_rsp_reg2+'.js')

		table = r.table
		tr = table.tr
		tr.td.div(id=image_ID1, align='left')
		tr.td.div(id=image_ID2, align='left')
		tr = table.tr
#		tr.td.img(src=self.tar1.image_rsp_plot)
#		tr.td.img(src=self.tar2.image_rsp_plot)
		tr.td.div(id=image_rsp_plot1, align='left')
		tr.td.div(id=image_rsp_plot2, align='left')

		tr = table.tr
#		tr.td.img(src=self.tar1.image_rsp_plot)
#		tr.td.img(src=self.tar2.image_rsp_plot)
		tr.td.div(id=image_rsp_reg1, align='left')
		tr.td.div(id=image_rsp_reg2, align='left')

		tr = table.tr
		tr.td.img(src=self.tar1.image_usage_plot)
		tr.td.img(src=self.tar2.image_usage_plot)
		tr = table.tr
		tr.td.div(id=image_extents1, align='left')
		tr.td.div(id=image_extents2, align='left')
		#tr = table.tr
		#tr.td.div(id=image_fsizes1, align='left')
		#tr.td.div(id=image_fsizes2, align='left')
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

path1 = glob.glob('./durden_images/*xfs*.tar.xz')[0]
path2 = glob.glob('./draven_images/*xfs*W495LONG3.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()



"""
path1 = glob.glob('./durden_images/*ext4*.tar.xz')[0]
path2 = glob.glob('./durden_images/*xfs*.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()

path1 = glob.glob('./durden_images/*xfs*.tar.xz')[0]
path2 = glob.glob('./draven_images/*xfs*W495LONG3.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()


path1 = glob.glob('./blade_images/*xfs*W495TRIM.tar.xz')[0]
path2 = glob.glob('./durden_images/*xfs*.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()



path1 = glob.glob('./blade_images/*xfs*W495TRIM.tar.xz')[0]
path2 = glob.glob('./blade_images/*ext4*W495TRIM.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()


path1 = glob.glob('./blade_images/*xfs*W495.tar.xz')[0]
path2 = glob.glob('./blade_images/*xfs*W495TRIM.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()


path1 = glob.glob('./blade_images/*ext4*W495.tar.xz')[0]
path2 = glob.glob('./blade_images/*ext4*W495TRIM.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()



#path1 = glob.glob('./draven_images/*xfs*W495LONG3.tar.xz')[0]
#path2 = glob.glob('./draven_images/*xfs*W495LONG3.tar.xz')[0]
#r = Report(path1,path2,'./res/')
#r.save()



path1 = glob.glob('./wolverine_images/*xfs*TRIM.tar.xz')[0]
path2 = glob.glob('./blade_images/*xfs*TRIM.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()


path1 = glob.glob('./draven_images/*xfs*W4LONG.tar.xz')[0]
path2 = glob.glob('./draven_images/*ext4*W4LONG.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()


path1 = glob.glob('./draven_images/*ext4*W4LONG.tar.xz')[0]
path2 = glob.glob('./blade_images/*ext4*.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()


path1 = glob.glob('./blade_images/*-drift_job-xfs*W490.tar.xz')[0]
path2 = glob.glob('./blade_images/*-drift_job-ext4*W490.tar.xz')[0]
r = Report(path1,path2,'./res/')
r.save()
 

#path1 = glob.glob('./blade_images/*-drift_job-ext4-1SASHDD-EXP.tar.xz')[0]
#path2 = glob.glob('./blade_images/*-drift_job-ext4-1SATASSD-EXP.tar.xz')[0]
#r = Report(path1,path2,'./res/')
#r.save()

#path1 = glob.glob('/home/spetrovi/Documents/test_results/joker_images/*-drift_job-ext4-1SATASSD-MAINTAIN.tar.xz')[0]
#path2 = glob.glob('/home/spetrovi/Documents/test_results/joker_images/*-drift_job-ext4-2SATASSDLVM-MAINTAIN.tar.xz')[0]
#r = Report(path1,path2,'./res/')
#r.save()

"""





















