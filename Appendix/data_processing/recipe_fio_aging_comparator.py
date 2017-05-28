from random import randint
import subprocess
import glob
import numpy as np
from html import HTML
from free_space_frag import Free_space_fragmentation
from extent_distribution import used_space_histogram
import drift_compare

BYTES_PER_KB = 1<<10

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

#in mode returns value of the given parameter, example: 'infoname=example.info, parameter=ioengine, mode=0'{ioengine=libaio} ~~~> returns 'libaio'
def get_value(string, parameter):
	res = filter(lambda x: x.split('=')[0] == parameter, string.split('\n'))[0].split('=')[1:]
	if len(res) > 1: return ' '.join('='.join(res).split('-'))
	return res[0]

class Boxplot:
  def __init__(self, _dir):
    self._dir = _dir
    self.bw = self.parse_data('bw')
   #self.iops_boxplots.append(self.parse_data('iops',i))
    self.lat = self.parse_data('lat')

  def parse_data(self, _type):
    data=[]
    times=[]
    logs=glob.glob('out/'+self._dir+'/*_'+_type+'*.log')
    print logs
    for log in logs:
	with open(log) as openfileobject:
	    for line in openfileobject:
			data.append(float(line.split(', ')[1])/1024) #lines are in format 'time,_type,operation,blocksize'
			times.append(int(line.split(', ')[0]))
 
    low = str(round(np.min(data)+0.1,2)) #in case there were zero value, otherwise log plot would not work
    high = str(round(np.max(data)+0.1,2))
    q1 = str(round(np.percentile(data,25)+0.1,2))
    q3 = str(round(np.percentile(data,75)+0.1,2))
    median = str(round(np.median(data)+0.1,2))
    stdev = str(round(np.std(data),2))#.split('.')[0]
    return {'low':low, 'q1':q1, 'median':median, 'q3':q3, 'high':high, 'stdev':stdev}

class Run:
	def __init__(self, _dir, fsystem, destination):
		self.size = _dir
		test = './out/'+_dir+'/pretest_free_space_'
		self.free_space_pretest = [Free_space_fragmentation(read_file(test+str(i)+'.frag', 'r'), fsystem) for i in range(len(glob.glob(test+'*')))] 
		test = 	'./out/'+_dir+'/posttest_free_space_'
		self.free_space_posttest = [Free_space_fragmentation(read_file(test+str(i)+'.frag', 'r'), fsystem) for i in range(len(glob.glob(test+'*')))]
		self.boxplot = Boxplot(_dir)		

class Tar:
  def __init__(self, tar, destination):
    self.destination = destination
    #self.options = options
    self.tar = tar
    self.tar_name = tar.split('/')[-1:][0][:-7]
    self.properties = read_file(self.tar[:-7]+'.properties','r')
    self.depth = int(get_value(self.properties,'depth'))
    self.recipe = self.make_recipe()
    self.operation = get_value('\n'.join(self.recipe.split(' ')),'rw')
    self.fsystem = get_value(self.properties,'filesystem')

    self.host = get_value(self.properties,'hostname').split('.')[0]
    self.image_name = get_value(self.properties,'image')

    self.image_tar = drift_compare.Tar(self.host+'_images/'+self.image_name.split('.')[0]+'.tar.xz', destination)

    self.runs = []

  def process(self):
    #self.image_tar.process_image()
    untar(self.tar)
    print self.tar
    for i in range(self.depth+1):
	self.runs.append(Run(str(i*10), self.fsystem, self.destination))
    self.runs.append(Run('fresh', self.fsystem,self.destination))
    subprocess.call('rm -rf out',shell=True)
    
  def make_recipe(self):
	return get_value(self.properties, 'recipe')+' filesystem='+get_value(self.properties,'filesystem')+' kernel='+get_value(self.properties,'kernel')+'_'+get_value(self.properties,'build')+' depth='+get_value(self.properties,'depth')

class Charts:
  def __init__(self, tars):
    self.item = 'fsystem'
    self.tars = tars
#    self.tar1 = tar1
#    self.tar2 = tar2

    self.ID = 'figure_'+str(randint(0,10000))
    #self.diffs = []
    #self.regressions = []
    #self.gains = []
    #self.median_diffs()

    self.box_bw_chart = self.generate_box_highchart('bw')
    self.box_lat_chart = self.generate_box_highchart('lat')

	




  def median_diffs(self):
    for i, item in enumerate(self.tar1.runs):
      diff = round(((float(self.tar2.runs[i].boxplot.bw['median'])-float(item.boxplot.bw['median']))/float(item.boxplot.bw['median']))*100,2)
      if diff < 0:
	self.regressions.append(diff)
      if diff > 0:
	self.gains.append(diff)
      self.diffs.append(diff)

  def generate_box_highchart(self, _type):
	ticks = []
	boxplots = []
	template = read_file('templates/boxplot_ops.js','r')
	for tar in self.tars:
		if _type == 'bw':
			ylabel = 'Throughput [MB/s]'
			data = reduce(lambda x, y: x+[y.boxplot.bw], tar.runs, [])
			name = self.ID+'bw'
			print 'name: '+self.ID+'bw'
		if _type == 'lat':
			ylabel = 'Latency [ms]'
			data = reduce(lambda x, y: x+[y.boxplot.lat], tar.runs, [])
			name = self.ID+'lat'
		boxplots.append(data)
		#ticks.append(tar.operation)
		template_set = read_file('templates/boxplot_set.js','r')
		values = ''
		for boxplot in data:
	     		values += '''{low: '''+boxplot['low']+''', q1: '''+boxplot['q1']+''', median: '''+boxplot['median']+''', q3: '''+boxplot['q3']+''', high: '''+boxplot['high']+''' },\n'''
		#	print _type
		#	print values
		template_set = values.join(template_set.split('XXX_DATA_XXX'))
		template_set = tar.operation.join(template_set.split('XXX_OP_XXX'))
		template = (template_set+'XXX_SET_XXX').join(template.split('XXX_SET_XXX'))
	#srs = [[] for i in range(len(self.tars))]
	#for op in boxplots:
	#	for i, util in enumerate(op):
	#		srs[i].append(util)
	
	#for op in srs:
	#	values = ''
	#	template_set = read_file('templates/boxplot_set.js','r')
	#	for boxplot in op:
	#		values += '''{low: '''+boxplot['low']+''', q1: '''+boxplot['q1']+''', median: '''+boxplot['median']+''', q3: '''+boxplot['q3']+''', high: '''+boxplot['high']+''' },\n'''
	#	template_set = values.join(template_set.split('XXX_DATA_XXX'))
	#	template_set = op.join(template_set.split('XXX_OP_XXX'))
	#	template = (template_set+'XXX_SET_XXX').join(template.split('XXX_SET_XXX'))
			 
	ticks = ''
	for run in self.tars[0].runs:
		ticks += '''\''''+run.size+'''\', '''
	for tick in range(0,int(self.tars[0].depth)+1):
      		ticks += '''\''''+str(tick*10)+'''\', '''

	template =  name.join(template.split('XXX_NAME_XXX'))
	template = str(ticks).join(template.split('XXX_TICKS_XXX'))
	template = ''.join(template.split('XXX_SET_XXX'))
	template = ylabel.join(template.split('XXX_YLABEL_XXX'))
	return template

class Report:
  def __init__(self, paths, destination):
	self.destination = destination+paths[0].split('/')[-1:][0][:-7]+'/'
        subprocess.call('mkdir '+self.destination,shell=True)  
	self.tars = []
	for path in paths:
		self.tars.append(Tar(path, self.destination))
		self.tars[-1].process()

#	self.tar1 = Tar(path1, self.destination)
#	self.tar2 = Tar(path2, self.destination)
#	self.tar1.process()
#	self.tar2.process()
        self.charts = Charts(self.tars)
   	self.report = self.make_report()
	

  def save(self):
    f = open(self.destination+'/'+self.charts.ID+'lat.js', 'w')
    f.write(self.charts.box_lat_chart)
    f.close()
    f = open(self.destination+'/'+self.charts.ID+'bw.js', 'w')
    f.write(self.charts.box_bw_chart)
    f.close()
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
	ul.li(get_value(self.tars[0].properties,'kernel'))
	
	r.dt
	r.strong('Builds')
	ul = r.ul
	ul.li(get_value(self.tars[0].properties,'build'))
	
	r.dt.strong('Machine')
	ul = r.ul
	ul.li.a(get_value(self.tars[0].properties,'hostname'),href="https://beaker.engineering.redhat.com/view/"+get_value(self.tars[0].properties,'hostname')+"#details")
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
	
	r.script('', type='text/javascript', src=self.charts.ID+'bw.js')
	r.script('', type='text/javascript', src=self.charts.ID+'lat.js')

	#r += self.create_toc()
	r.dt.strong('Image')
	self.tars[0].image_tar.process_image()

	image_ID = self.tars[0].image_tar.image_ID
	image_extents = self.tars[0].image_tar.extents_ID

	image_rsp = self.tars[0].image_tar.image_rsp_plot

	r.script('', type='text/javascript', src=image_ID+'.js')
	r.script('', type='text/javascript', src=image_extents+'.js')

	r.script('', type='text/javascript', src=image_rsp+'.js')

	table = r.table
	tr = table.tr
	tr.td.div(id=image_ID, align='left')

	tr = table.tr
	tr.td.div(id=image_rsp, align='left')

	tr = table.tr
	tr.td.img(src=self.tars[0].image_tar.image_usage_plot)

	tr = table.tr
	tr.td.div(id=image_extents, align='left')

	tr = table.tr
	td = tr.td
	for line in self.tars[0].image_tar.properties.split('\n'):
		td.li(line)

		
	h = r.h3(id='summary top')
	r.div(klass='main')
	r.li('Change between linear and logarithmic Y axis')
	r.button('Liny/logY', id=self.charts.ID+'bw_button', klass='autocompare')
	
	table = r.table
	tr = table.tr
	tr.td.div(id=self.charts.ID+'bw', align='center')
	tr.td.div(id=self.charts.ID+'lat', align='center')

		

	return r
	

      


"""   
tars = glob.glob('1844043_joker/*.tar.xz')
path1 = tars[0]
path2 = tars[1]
r = Report(path1,path2,'./res/')
r.save()

tars = glob.glob('1843966_draven/*.tar.xz')
path1 = tars[0]
path2 = tars[1]
r = Report(path1,path2,'./res/')
r.save()

paths = glob.glob('1867796_blade/*W495TRIM.tar.xz')
r = Report(paths,'fio_res/')
r.save()
"""
paths = glob.glob('1870871_durden/*.tar.xz')
r = Report(paths,'fio_res/')
r.save()

"""
path1 = tars[0]
path2 = tars[1]
r = Report(path1,path2,'./fio_res/')
r.save()

path2 = tars[2]
r = Report(path1,path2,'./fio_res/')
r.save()

path2 = tars[3]
r = Report(path1,path2,'./fio_res/')
r.save()
"""
#tars = glob.glob('1848*_blade/*1SATASSD*.tar.xz')
#path1 = tars[0]
#path2 = tars[1]
#r = Report(path1,path2,'./res/')
#r.save()






















