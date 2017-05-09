from random import randint
import subprocess
import glob
import numpy as np
from html import HTML
from free_space_frag import Free_space_fragmentation
from extent_distribution import used_space_histogram
import drift_compare

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
    logs=glob.glob('./out/'+self._dir+'/*_'+_type+'*.log')
    for log in logs:
	with open(log) as openfileobject:
	    for i, line in enumerate(openfileobject):
			data.append(float(line.split(',')[1])) #lines are in format 'time,_type,operation,blocksize'
			times.append(int(line.split(',')[0]))
    low = str(round(np.min(data)/1000+0.001,2)) #in case there were zero value, otherwise log plot would not work
    high = str(round(np.max(data)/1000+0.001,2))
    q1 = str(round(np.percentile(data,25)/1000+0.001,2))
    q3 = str(round(np.percentile(data,75)/1000+0.001,2))
    median = str(round(np.median(data)/1000+0.001,2))
    stdev = str(round(np.std(data)/1000,2))#.split('.')[0]
    return {'low':low, 'q1':q1, 'median':median, 'q3':q3, 'high':high, 'stdev':stdev}

class Run:
	def __init__(self, _dir, fsystem, destination):
		self.size = _dir
		test = './out/'+_dir+'/pretest_free_space_'
		self.free_space_pretest = [Free_space_fragmentation(read_file(test+str(i)+'.frag', 'r'), fsystem) for i in range(len(glob.glob(test+'*')))] 
		test = 	'./out/'+_dir+'/posttest_free_space_'
		self.free_space_posttest = [Free_space_fragmentation(read_file(test+str(i)+'.frag', 'r'), fsystem) for i in range(len(glob.glob(test+'*')))]
#		test = 	'./out/'+_dir+'/pretest_fie_data_'
# 		self.used_space_pretest, self.file_size_pretest = [used_space_histogram(test+str(i),destination) for i in range(len(glob.glob(test+'*')))]
#		test = 	'./out/'+_dir+'/posttest_fie_data_'
#		self.used_space_posttest = [used_space_histogram(test+str(i),destination) for i in range(len(glob.glob(test+'*')))]
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
    self.image_tar.process_image()
    untar(self.tar)
    for i in range(1, self.depth+1):
	self.runs.append(Run(str(i*10), self.fsystem, self.destination))
    self.runs.append(Run('fresh', self.fsystem,self.destination))
#    subprocess.call('rm -rf ./out/*/*.log',shell=True)
#    subprocess.call('mv out/* '+self.destination+'/'+self.tar_name,shell=True)
    subprocess.call('rm -rf out',shell=True)
    
  def make_recipe(self):
	return get_value(self.properties, 'recipe')+' filesystem='+get_value(self.properties,'filesystem')+' kernel='+get_value(self.properties,'kernel')+'_'+get_value(self.properties,'build')+' depth='+get_value(self.properties,'depth')

class Charts:
  def __init__(self, tar1, tar2):
    self.item = 'fsystem'
    self.tar1 = tar1
    self.tar2 = tar2
    self.chart_description = self.create_chart_description()
    self.ID = 'figure_'+str(randint(0,10000))
    self.diffs = []
    self.regressions = []
    self.gains = []
    self.median_diffs()
    self.table = ''
    self.box_highchart = self.generate_box_highchart('bw')
    self.make_table()

  def make_table(self):
	tar1 = self.tar1
	tar2 = self.tar2
	self.table = HTML()
	table = self.table.table(id='t01')
	tr = table.tr
	tr.th('randwrite')
	for i in range(0,14):
		tr.th
	tr = table.tr
	tr.th
	tr.th('median')
	tr.th
	tr.th('first quartile')
	tr.th
	tr.th('third quartile')		
	tr.th
	tr.th('max')
	tr.th
	tr.th('min')
	tr.th
	tr.th('standard deviation')
	tr.th
	tr.th
	tr.th('logs')
	tr = table.tr
	tr.th('Free')
	for i in range(0,7):
		tr.th('set1')
		tr.th('set2')
	for i in range(len(self.tar1.runs)):		
			tr = table.tr
			tr.td(str(100-(i+1)*10))
			tr.td(tar1.runs[i].boxplot.bw['median']+'MB/s')
			tr.td(tar2.runs[i].boxplot.bw['median']+'MB/s')

			tr.td(tar1.runs[i].boxplot.bw['q1']+'MB/s')
			tr.td(tar2.runs[i].boxplot.bw['q1']+'MB/s')

			tr.td(tar1.runs[i].boxplot.bw['q3']+'MB/s')
			tr.td(tar2.runs[i].boxplot.bw['q3']+'MB/s')

			tr.td(tar1.runs[i].boxplot.bw['high']+'MB/s')
			tr.td(tar2.runs[i].boxplot.bw['high']+'MB/s')

			tr.td(tar1.runs[i].boxplot.bw['low']+'MB/s')
			tr.td(tar2.runs[i].boxplot.bw['low']+'MB/s')

			tr.td(tar1.runs[i].boxplot.bw['stdev']+'MB/s')
			tr.td(tar2.runs[i].boxplot.bw['stdev']+'MB/s')
	

#TODO
  def create_chart_description(self):
    recipe = filter(lambda x: x.split('=')[0] != 'name' and x.split('=')[0] != 'numjobs' and x.split('=')[0] != 'directory' and x.split('=')[0] != 'filename' and x.split('=')[0] != self.item, self.tar1.recipe.split(' '))
    return '<br>'.join(recipe)+'<br>compared:<br>'+'tar1'+'<br>'+'tar2'


  def median_diffs(self):
    for i, item in enumerate(self.tar1.runs):
      diff = round(((float(self.tar2.runs[i].boxplot.bw['median'])-float(item.boxplot.bw['median']))/float(item.boxplot.bw['median']))*100,2)
      if diff < 0:
	self.regressions.append(diff)
      if diff > 0:
	self.gains.append(diff)
      self.diffs.append(diff)

  def generate_box_highchart(self, _type):
	if _type == 'bw':
		ylabel = 'Throughput [MB/s]'
		data1 = reduce(lambda x, y: x+[y.boxplot.bw], self.tar1.runs, [])
		data2 = reduce(lambda x, y: x+[y.boxplot.bw], self.tar2.runs, [])
	if _type == 'lat':
		ylabel = 'Latency [ms]'
		data1 = reduce(lambda x, y: x+[y.boxplot.lat], self.tar1.runs, [])
		data2 = reduce(lambda x, y: x+[y.boxplot.lat], self.tar2.runs, [])

	template = read_file('templates/boxplot.js','r')
	count = (len(self.chart_description.split('<br>'))-2)*20
	template = self.ID.join(template.split('XXX_NAME_XXX'))
	template = self.chart_description.join(template.split('XXX_RENDER_LABEL_XXX'))
	ticks = ''
	for run in self.tar1.runs:
		ticks += '''\''''+run.size+'''\', '''
	for tick in range(1,int(self.tar1.depth)+1):
      		ticks += '''\''''+str(tick*10)+'''\', '''
	template = ticks.join(template.split('XXX_TICKS_XXX'))
	template = ylabel.join(template.split('XXX_YLABEL_XXX'))
	values = ''
        for boxplot in data1:
	      values += '''{low: '''+boxplot['low']+''', q1: '''+boxplot['q1']+''', median: '''+boxplot['median']+''', q3: '''+boxplot['q3']+''', high: '''+boxplot['high']+''' },\n'''
	template = values.join(template.split('XXX_DATA_SET1_XXX'))
	values = ''
	for boxplot in data2:
		values += '''{low: '''+boxplot['low']+''', q1: '''+boxplot['q1']+''', median: '''+boxplot['median']+''', q3: '''+boxplot['q3']+''', high: '''+boxplot['high']+''' },\n'''
	template = values.join(template.split('XXX_DATA_SET2_XXX'))
	return template

class Report:
  def __init__(self,path1, path2, destination):
	self.destination = destination+path1.split('/')[-1:][0][:-7]+'_vs_'+path2.split('/')[-1:][0][:-7]+'/'
        subprocess.call('mkdir '+self.destination,shell=True)  
	self.tar1 = Tar(path1, self.destination)
	self.tar2 = Tar(path2, self.destination)
	self.tar1.process()
	self.tar2.process()
        self.charts = [Charts(self.tar1, self.tar2)]
   	self.report = self.make_report()
	

  def save(self):
    f = open(self.destination+'/'+self.charts[0].ID+'.js', 'w')
    f.write(self.charts[0].box_highchart)
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
	for chart in self.charts:
		r.script('', type='text/javascript', src=chart.ID+'.js')

	#r += self.create_toc()
	r.dt.strong('Image')
	if self.tar1.image_name == self.tar2.image_name:
		self.tar1.image_tar.process_image()
		image_ID = self.tar1.image_tar.image_ID
		r.script('', type='text/javascript', src=image_ID+'.js')
		r.li.div(id=image_ID, align='left')
	else:
		self.tar1.image_tar.process_image()
		self.tar2.image_tar.process_image()
		image_ID1 = self.tar1.image_tar.image_ID
		image_ID2 = self.tar2.image_tar.image_ID
		image_extents1 = self.tar1.image_tar.extents_ID
		image_extents2 = self.tar2.image_tar.extents_ID
		image_fsizes1 = self.tar1.image_tar.fsize_ID
		image_fsizes2 = self.tar2.image_tar.fsize_ID
		image_rsp1 = self.tar1.image_tar.image_rsp_plot
		image_rsp2 = self.tar2.image_tar.image_rsp_plot
		r.script('', type='text/javascript', src=image_ID1+'.js')
		r.script('', type='text/javascript', src=image_ID2+'.js')
		r.script('', type='text/javascript', src=image_extents1+'.js')
		r.script('', type='text/javascript', src=image_extents2+'.js')
		r.script('', type='text/javascript', src=image_fsizes1+'.js')
		r.script('', type='text/javascript', src=image_fsizes2+'.js')
		r.script('', type='text/javascript', src=image_rsp1+'.js')
		r.script('', type='text/javascript', src=image_rsp2+'.js')
		table = r.table
		tr = table.tr
		tr.td.div(id=image_ID1, align='left')
		tr.td.div(id=image_ID2, align='left')
		tr = table.tr
#		tr.td.img(src=self.tar1.image_tar.image_rsp_plot)
#		tr.td.img(src=self.tar2.image_tar.image_rsp_plot)

		tr.td.div(id=image_rsp1, align='left')
		tr.td.div(id=image_rsp2, align='left')

		tr = table.tr
		tr.td.img(src=self.tar1.image_tar.image_usage_plot)
		tr.td.img(src=self.tar2.image_tar.image_usage_plot)
		tr = table.tr
		tr.td.div(id=image_extents1, align='left')
		tr.td.div(id=image_extents2, align='left')
		tr = table.tr
		tr.td.div(id=image_fsizes1, align='left')
		tr.td.div(id=image_fsizes2, align='left')
		tr = table.tr
		td = tr.td
		for line in self.tar1.image_tar.properties.split('\n'):
			td.li(line)
		td = tr.td
		for line in self.tar2.image_tar.properties.split('\n'):
			td.li(line)

		
	
        for chart in self.charts:
		r.a('',name=chart.ID)
		h = r.h3(id='summary top')
		for item in chart.chart_description.split('<br>'):
			h.li(item)
		r.div(klass='main')
		r.li('Change between linear and logarithmic Y axis')
		r.button('Liny/logY', id=chart.ID+'_button', klass='autocompare')
		table = r.table
		tr = table.tr
		tr.td.div(id=chart.ID, align='center')
		
		r += str(chart.table)
		
	#	r.a('Go back to TOC', href='#TOC')
	return r
	

      
  def create_toc(self):
    toc = HTML()
    toc.a(name='TOC')
    toc.strong('Table of contents')
    table = toc.table(id='t01')
    tr = table.tr
    tr.th('Link')
    tr.th('Regresion < -5%', 'nowrap')
    tr.th('Gain > 5%')
    for chart in self.charts:
	tr = table.tr
	tr.td.li.a('charta',href='#'+chart.ID)
	tr.td('{'+','.join(chart.regressions)+'}')
	tr.td('{'+','.join(chart.gains)+'}')
    return toc

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
"""

tars = glob.glob('1848*_blade/*1SASHDD*.tar.xz')
path1 = tars[0]
path2 = tars[1]
r = Report(path1,path2,'./res/')
r.save()

tars = glob.glob('1848*_blade/*1SATASSD*.tar.xz')
path1 = tars[0]
#path2 = tars[1]
r = Report(path1,path2,'./res/')
r.save()






















