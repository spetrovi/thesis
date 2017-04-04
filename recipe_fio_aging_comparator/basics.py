from random import randint
import subprocess
import glob
import numpy as np
from html import HTML
from free_space_frag import Free_space_fragmentation
from extent_distribution import Extent_distribution
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

class Boxplots:
  def __init__(self, depth):
    self.depth = depth
    self.free_space_logs = []
    self.free_space_histograms = []
    self.extent_histograms = []
    self.used_space_logs = []
    self.bw = []
    #self.iops_boxplots = []
    self.lat = []
    self.fio_outputs = []
    for i in range(1, 6):
	self.free_space_logs.append(read_file('./out/'+str(i*10)+'/free_space.frag', 'r'))
	self.free_space_histograms.append(Free_space_fragmentation(read_file('./out/'+str(i*10)+'/free_space.frag','r'),'ext4'))
	self.used_space_logs.append(read_file('./out/'+str(i*10)+'/extents.frag', 'r'))
        self.extent_histograms.append(Extent_distribution(read_file('./out/'+str(i*10)+'/extents.frag','r')))
	fio_out_files = glob.glob('./out/'+str(i*10)+'/*.out')
	for out in fio_out_files: self.fio_outputs.append(read_file(out, 'r'))
	#TODO add df.frag
	self.bw.append(self.parse_data('bw',i))
	#self.iops_boxplots.append(self.parse_data('iops',i))
	self.lat.append(self.parse_data('lat',i))

  def parse_data(self, _type, i):
    data=[]
    times=[]
    logs=glob.glob('./out/'+str(i*10)+'/*_'+_type+'*.log')
    for log in logs:
	with open(log) as openfileobject:
	    for i, line in enumerate(openfileobject):
			data.append(float(line.split(',')[1])) #lines are in format 'time,_type,operation,blocksize'
			times.append(int(line.split(',')[0]))
    low = str(round(np.min(data)//1000+0.001,2)) #in case there were zero value, otherwise log plot would not work
    high = str(round(np.max(data)//1000+0.001,2))
    q1 = str(round(np.percentile(data,25)//1000+0.001,2))
    q3 = str(round(np.percentile(data,75)//1000+0.001,2))
    median = str(round(np.median(data)//1000+0.001,2))
    stdev = str(round(np.std(data)//1000,2))#.split('.')[0]
    return {'low':low, 'q1':q1, 'median':median, 'q3':q3, 'high':high, 'stdev':stdev}


class Tar:
  def __init__(self, tar, destination):
    self.destination = destination
    #self.options = options
    self.tar = tar
    self.tar_name = tar.split('/')[-1:][0][:-7]
    self.properties = read_file(self.tar[:-7]+'.properties','r')
    self.depth = get_value(self.properties,'depth')
    self.recipe = self.make_recipe()
    self.operation = get_value('\n'.join(self.recipe.split(' ')),'rw')

  def process(self):
    untar(self.tar)
    self.boxplots = Boxplots(self.depth)
    #self.threads_data = Threads(int(self.number_of_threads), self.options.storage_string)
    subprocess.call('mkdir '+self.destination+'/'+self.tar_name+'/',shell=True)
#    subprocess.call('rm -rf ./out/*/*.log',shell=True)
    subprocess.call('mv out/* '+self.destination+'/'+self.tar_name,shell=True)
    subprocess.call('rmdir out',shell=True)
    
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
	for i in range(0, int(self.tar1.depth)):		
			tr = table.tr
			tr.td(str((i+1)*10))
			tr.td(tar1.boxplots.bw[i]['median']+'MB/s')
			tr.td(tar2.boxplots.bw[i]['median']+'MB/s')

			tr.td(tar1.boxplots.bw[i]['q1']+'MB/s')
			tr.td(tar2.boxplots.bw[i]['q1']+'MB/s')

			tr.td(tar1.boxplots.bw[i]['q3']+'MB/s')
			tr.td(tar2.boxplots.bw[i]['q3']+'MB/s')

			tr.td(tar1.boxplots.bw[i]['high']+'MB/s')
			tr.td(tar2.boxplots.bw[i]['high']+'MB/s')

			tr.td(tar1.boxplots.bw[i]['low']+'MB/s')
			tr.td(tar2.boxplots.bw[i]['low']+'MB/s')

			tr.td(tar1.boxplots.bw[i]['stdev']+'MB/s')
			tr.td(tar2.boxplots.bw[i]['stdev']+'MB/s')
	

#TODO
  def create_chart_description(self):
    recipe = filter(lambda x: x.split('=')[0] != 'name' and x.split('=')[0] != 'numjobs' and x.split('=')[0] != 'directory' and x.split('=')[0] != 'filename' and x.split('=')[0] != self.item, self.tar1.recipe.split(' '))
    return '<br>'.join(recipe)+'<br>compared:<br>'+'tar1'+'<br>'+'tar2'


  def median_diffs(self):
    for i, item in enumerate(self.tar1.boxplots.bw):
      print self.tar2.boxplots.bw[i]
      diff = round(((float(self.tar2.boxplots.bw[i]['median'])-float(item['median']))/float(item['median']))*100,2)
      if diff < 0:
	self.regresions.append(diff)
      if diff > 0:
	self.gains.append(diff)
      self.diffs.append(diff)

  def generate_box_highchart(self, _type):
	if _type == 'bw':
		ylabel = 'Throughput [MB/s]'
		data1 = self.tar1.boxplots.bw
		data2 =	self.tar2.boxplots.bw
	if _type == 'lat':
		ylabel = 'Latency [ms]'
		data1 = self.tar1.boxplots.lat
		data2 =	self.tar2.boxplots.lat
	template = read_file('boxplot.js','r')
	count = (len(self.chart_description.split('<br>'))-2)*20
	template = self.ID.join(template.split('XXX_NAME_XXX'))
	template = self.chart_description.join(template.split('XXX_RENDER_LABEL_XXX'))
	ticks = ''
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
	self.destination = destination
	self.tar1 = Tar(path1, destination)
	self.tar2 = Tar(path1, destination)
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
	ul.li('Set1: 3.10.514...')
	ul.li('Set2: 3.10.514...')
	
	r.dt
	r.strong('Builds')
	ul = r.ul
	ul.li('Set1: RHEL7')
	ul.li('Set2: RHEL7')
	
	r.dt.strong('Machine')
	ul = r.ul
	ul.li.a('',href="https://beaker.engineering.redhat.com/view/"+'draven'+"#details")
	ul.li('RAM '+'ram')
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
		
		r.a('Go back to TOC', href='#TOC')
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

    

path = '1782476_draven/2017-Mar-28_05h34m31s-recipe_fio_aging-1SASHDD.tar.xz'
r = Report(path,path,'./res')
r.save()
#print tar.boxplots.free_space_histograms[0].generate_histogram_script()
#tar.boxplots.extent_histograms[4].save()























