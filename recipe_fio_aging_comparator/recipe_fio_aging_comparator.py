import sys, glob, os, subprocess, optparse, numpy as np
from random import randint
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

def untar(source):
	if source[-2:] == 'xz':
		subprocess.call('tar -Jxf '+source+' -C ./',shell=True)
	if source[-2:] == 'gz':
		subprocess.call('tar -zxf '+source+' -C ./',shell=True)
  
#in mode returns value of the given parameter, example: 'infoname=example.info, parameter=ioengine, mode=0'{ioengine=libaio} ~~~> returns 'libaio'
def get_value(recipe, parameter):
  recipe = map(lambda x: x.split('='), recipe.split(' ')) #recipe is list of tuples, example [[direct,1],[rw,read],[ioengine,libaio]]
  return [x for x in recipe if x[0] == parameter][0][1] #finds tuple with 'paramter' on the first place and returns second value(the value of parameter)
  
#opens file, load the contents, close file, returns contents
def read_file(name, option):
  f = open(name, option)
  string = f.read()
  f.close
  return string

class Threads:
  def __init__(self,number_of_threads, storage_string):
    self.storage_string = storage_string
    self.medians = self.get_medians(number_of_threads)
    self.suma = sum(self.medians)
 
  def get_medians(self, numberOfThreads):
   dataset = []
   for i in range(1, numberOfThreads+1):
     log = (glob.glob('./out/*bw*'+str(i)+'*log')[0])
     data = map(lambda x: float(x.split(',')[1])/1000, read_file(log, 'r')[:-1].split('\n')) #log is now list of all lines from one log file
     if self.storage_string == 'MULTITHREAD':
	data = data[0::5]
     dataset.append(data)
   return map(lambda x: np.median(x), dataset)


class Boxplot:
  def __init__(self, number_of_threads, storage_string):
    self.storage_string = storage_string
    self.number_of_threads = number_of_threads
    self.data, self.time = self.parse_data()
    self.low = str(round(np.min(self.data)+0.001,2)) #in case there were zero value, otherwise log plot would not work
    self.high = str(round(np.max(self.data)+0.001,2))
    self.q1 = str(round(np.percentile(self.data,25)+0.001,2))
    self.q3 = str(round(np.percentile(self.data,75)+0.001,2))
    self.median = str(round(np.median(self.data)+0.001,2))
    self.stdev = str(round(np.std(self.data),2)).split('.')[0]

    
  def parse_data(self):
    data=[]
    times=[]
    logs=glob.glob('./out/*_bw*.log')
    for log in logs:
	with open(log) as openfileobject:
	    for i, line in enumerate(openfileobject):
		if self.storage_string == 'MULTITHREAD':
			if i % 5 == 0:
				data.append(float(line.split(',')[1])/1000) #lines are in format 'time,bandwidth,operation,blocksize'
				times.append(int(line.split(',')[0]))
		else:
			data.append(float(line.split(',')[1])/1000) #lines are in format 'time,bandwidth,operation,blocksize'
			times.append(int(line.split(',')[0]))
    return data, times
    
class Histogram:
  def __init__(self,tars):
    self.bins, self.baseline, self.target = self.make_histogram(tars)
      
      
  def make_histogram(self,tars):
    full_baseline_data = []
    full_target_data = []
    for tar in tars:
      full_baseline_data += tar[0].boxplot_data.data
      full_target_data += tar[1].boxplot_data.data
    #dummy_histohram = np.histogram(full_baseline_data+full_target_data, bins = 100)
    #baseline_histogram = np.histogram(full_baseline_data, bins = dummy_histohram[1])
    #target_histogram = np.histogram(full_target_data, bins = dummy_histohram[1])
    baseline_histogram = np.histogram(full_baseline_data, bins = 100)
    target_histogram = np.histogram(full_target_data, bins = baseline_histogram[1])
    return map(lambda x: str(round(x,2)),list(baseline_histogram[1])), list(baseline_histogram[0]), list(target_histogram[0])

    
class Speed_data:
  def __init__(self,speed_data,operation):
    self.time_target = speed_data[0]
    self.data_target = speed_data[1]
    self.time_baseline = speed_data[2]
    self.data_baseline = speed_data[3]
    self.operation = operation
    

class Chart:
  def __init__(self, item, tars, options):
    self.options = options
    tars.sort(key=lambda x: int(x[0].number_of_threads))
    self.tars = tars
    self.histogram = Histogram(self.tars)
    self.recipe = tars[0][0].recipe
    self.operation = get_value(tars[0][0].recipe,'rw')
    self.boxplot_baseline_data, self.boxplot_target_data, self.ticks, self.threads_baseline_data, self.threads_target_data = self.get_data()
    self.js_name = '_'.join(list(item))
    self.ID = ''.join(map(lambda x: x[0], item))+str(randint(0,1000)) #ATTENTION, not formally collisionless
    self.chart_description = self.create_chart_description()
    self.boxplot_js = self.generate_boxplot_script() 
    self.threads_js = self.generate_threads_script() 
    self.histogram_js = self.generate_histogram_script() 
    self.regresions, self.gains = self.median_diffs()
    self.table = self.make_table()
    if self.options.speed_plot_type == 1:
      #self.list_of_plots = self.make_speed_plot() # turned off for now
      self.list_of_plots = []
    else:
      #self.list_of_plots = self.make_speed_plot2()
      self.list_of_plots = []
    self.speed_plot_table = self.speed_plot_table()
    
  def speed_plot_table(self):
    table = '<table>'
    for i, plot in enumerate(self.list_of_plots):
      table+='''<tr><img src="'''+plot+'''"></tr>'''
    table+='\n</table>'
    return table

  def median_diffs(self):
    regresions = []
    gains = []
    for i, item in enumerate(self.boxplot_baseline_data):
      diff = round(((float(self.boxplot_target_data[i].median)-float(item.median))/float(item.median))*100,2)
      if diff < 0:
	regresions.append(diff)
      if diff > 0:
	gains.append(diff)
      if diff == 0:
	regresions.append(diff)
	gains.append(diff)
    return regresions, gains
      
  def get_data(self):
      boxplot_baseline_data = []
      boxplot_target_data = []
      ticks = []
      threads_baseline_data = []
      threads_target_data = []

      for tar in self.tars:
	number_of_threads = get_value(tar[0].recipe,'numjobs')
	ticks.append(str(number_of_threads)) #generate ticks

	boxplot_baseline_data.append(tar[0].boxplot_data)
	threads_baseline_data.append(tar[0].threads_data)
      
	boxplot_target_data.append(tar[1].boxplot_data)
	threads_target_data.append(tar[1].threads_data)

      return boxplot_baseline_data, boxplot_target_data, ticks, threads_baseline_data, threads_target_data
  
  def create_chart_description(self):
    recipe = filter(lambda x: x.split('=')[0] != 'name' and x.split('=')[0] != 'numjobs' and x.split('=')[0] != 'directory' and x.split('=')[0] != 'filename' and x.split('=')[0] != self.options.parameter, self.recipe.split(' '))
    return '<br>'.join(recipe)+'<br>compared:<br>'+self.options.baseline+'<br>'+ self.options.target



  def make_speed_plot(self):
    list_of_plots = []
    for i, item in enumerate(self.boxplot_baseline_data):
      fig, ax = plt.subplots(nrows=1)
      ax.scatter(item.time,item.data, color='blue', marker=',',label='baseline', s=1)
      ax.scatter(self.boxplot_target_data[i].time,self.boxplot_target_data[i].data, color='green', marker=',',label='target',alpha=0.5, s=1)
      ax.grid(True)
      ax.set_title(str(item.number_of_threads)+' threads, '+self.operation)
      ax.legend(ncol=1)
      ax.set_xscale('log',nonposx='clip')
      ax.set_ylim(-5)
      ax.set_ylabel('Throughput (MB/s)')
      ax.set_xlabel('Time (ms), log scale')
      list_of_plots.append('./'+str(item.number_of_threads)+'_'+self.operation+'_'+self.ID+'.png')
      fig.savefig(self.options.destination+self.options.baseline+'_vs_'+self.options.target+'/'+str(item.number_of_threads)+'_'+self.operation+'_'+self.ID+'.png')
      plt.close()
    return list_of_plots

  def make_speed_plot2(self):
    fig, ax = plt.subplots(nrows=1)
    time = []
    data = []
    list_of_plots = []
    for item in self.boxplot_baseline_data:
      time += item.time
      data += item.data
    ax.scatter(time,data, color='blue', marker='.',label='baseline')
    time = []
    data = []
    for item in self.boxplot_target_data:
      time += item.time
      data += item.data
    ax.scatter(time,data, color='yellow', marker='.',label='target',alpha=0.5)
    ax.grid(True)
    ax.set_title(str(item.number_of_threads)+' threads')
    ax.set_ylim(-20)
    ax.legend(ncol=1)
    ax.set_xscale('log',nonposx='clip')
    list_of_plots.append('./'+str(item.number_of_threads)+'_'+self.operation+'_'+self.ID+'.png')
    fig.savefig(self.options.destination+self.options.baseline+'_vs_'+self.options.target+'/'+str(item.number_of_threads)+'_'+self.operation+'_'+self.ID+'.png')
    plt.close()
    return list_of_plots
    
  def generate_boxplot_script(self):
    count = (len(self.chart_description.split('<br>'))-2)*20
    js = 'var '
    js += self.ID+''';\n$(document).ready(function () {'''+self.ID+'''= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: '''
    js+=str(600+count)
    js+=  '''\n, backgroundColor: '#F2F2F2','''
    js += 'spacingBottom: '+ str(count)
    js+=''', events: {
                    load: function () {
                        var label = this.renderer.label("'''
    js += self.chart_description
    js += '''")
                        .css({
                            width: '450px',
                            color: '#222',
                            fontSize: '16px'
                        })
                        
                        .add();
                
                        label.align(Highcharts.extend(label.getBBox(), {
                            align: 'left',
                            x: 0, // offset
                            verticalAlign: 'bottom',
                            y: '''
    js += str(count)+''' // offset'''
    js += '''
                        }), null, 'spacingBox');
                
                    }
                },'''
    
    
    
    js += '''\n renderTo: \''''+self.ID+'''\'},\ntitle: {text: \'Total througput using '''+self.operation+''' operation\'},'''
    js += '''xAxis: [{categories: ['''
    for tic in self.ticks:
      js += '''\''''+tic+'''\', '''
    js += '''],'''
    js += '''title: {text: 'Number of threads'}}],
      yAxis: [{labels: { formatter: function () {return this.value;}},
      title: {text: 'Throughput [MB/s]'}}],
      tooltip: {shared: true},
      series: [
      {
      name: \''''
    js += self.options.baseline
    js += '''\',\ncolor: '#0000ff',
      type: 'boxplot',
      data: [ '''
    for elem in self.boxplot_baseline_data:
      js += '''{low: '''+elem.low+''', q1: '''+elem.q1+''', median: '''+elem.median+''', q3: '''+elem.q3+''', high: '''+elem.high+''' },\n'''
      #if i < len(self.boxplot_baseline_data): script.write(''',\n''')
    
    js += '''],visible: true,\n	tooltip: {headerFormat: '<em>Number of threads {point.key}</em><br/>'}\n},\n{\n	name: \''''+self.options.target
    js += '''\',\ncolor: '#89F54E',\n	type: 'boxplot',\n	data: [\n'''
    
    for i, elem in enumerate(self.boxplot_target_data):
      js += '''{low: '''+elem.low+''', q1: '''+elem.q1+''', median: '''+elem.median+''', q3: '''+elem.q3+''', high: '''+elem.high+''' },\n'''
    js += '''],visible: true,\n	tooltip: {headerFormat: '<em>Number of threads {point.key}</em><br/>'}\n}]});})\n'''
    return js
   
  def generate_threads_script(self):
    js = 'var '
    js += self.ID+'''_threads;\n$(document).ready(function () {'''+self.ID+'''_threads= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',\n renderTo: \''''+self.ID+'''_threads\'},\ntitle: {text: \'Median throughput per thread using '''+self.operation+''' operation\'},'''
    js += '''xAxis: [{categories: ['''
    for tic in self.ticks:
      js += '''\''''+tic+'''\', '''
    js += '''],'''
    js += '''title: {text: 'Number of threads'}}],
      yAxis: [{labels: { formatter: function () {return this.value;}},
      title: {text: 'Throughput [MB/s]'}}],
      tooltip: {shared: true},
      series: [
      {
      name: \''''      
    js += self.options.baseline + ' SUM' + '''\',\ncolor: '#E5DBCF',\n	type: 'column',\n	data: [\n'''
    for elem in self.threads_baseline_data:
      js += str(elem.suma)+',\n'
    js += '''],visible: true,\n	tooltip: {headerFormat: '<em>Number of threads {point.key}</em><br/>'}\n},\n {\n	name: \''''
    
    js += self.options.target + ' SUM' + '''\',\ncolor: '#E5DBCF',\n	type: 'column',\n	data: [\n'''
    for elem in self.threads_target_data:
      js += str(elem.suma)+',\n'
    js += '''],visible: true,\n	tooltip: {headerFormat: '<em>Number of threads {point.key}</em><br/>'}\n},\n {\n	name: \''''
    
    js += self.options.baseline + ' medians' +'''\',\ncolor: '#3399FF',\n	type: 'boxplot',\n	data: [\n'''
    for elem in self.threads_baseline_data:
      low = str(np.min(elem.medians))
      high = str(np.max(elem.medians))
      q1 = str(np.percentile(elem.medians,25))
      q3 = str(np.percentile(elem.medians,75))
      median = str(np.median(elem.medians))
    
      js += '''{low: '''+low+''', q1: '''+q1+''', median: '''+median+''', q3: '''+q3+''', high: '''+high+''' },\n'''
    
    js += '''],\nvisible: true,\n	tooltip: {headerFormat: '<em>medians by thread {point.key}</em><br/>'}\n},\n'''
    js += '''{\n	name: \''''+ self.options.target+' medians'
    
    js += '''\',\ncolor: '#3366CC',\n	type: 'boxplot',\n	data: [\n'''

    for elem in self.threads_target_data:
      low = str(np.min(elem.medians))
      high = str(np.max(elem.medians))
      q1 = str(np.percentile(elem.medians,25))
      q3 = str(np.percentile(elem.medians,75))
      median = str(np.median(elem.medians))
  
      js += '''{low: '''+low+''', q1: '''+q1+''', median: '''+median+''', q3: '''+q3+''', high: '''+high+''' },\n'''
    
    js += '''],\nvisible: true,\n	tooltip: {headerFormat: '<em>medians by thread {point.key}</em><br/>'}\n}]});})\n'''
    return js
  
  
  def generate_histogram_script(self):
    js = 'var '
    js += self.ID+'''_histogram;\n$(document).ready(function () {'''+self.ID+'''_histogram= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',\n renderTo: \''''+self.ID+'''_histogram\'},\ntitle: {text: \'Histogram of recorded throughput using '''+self.operation+''' operation\'},'''
    js += '''xAxis: [{categories: ['''
    for _bin in self.histogram.bins:
      js += '''\''''+_bin+'''\', '''
    js += '''],'''
    js += '''title: {text: 'Throughput [MB/s]'}}],
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0,
            grouping: false,
            shadow: false
        }
    },
      yAxis: [{labels: { formatter: function () {return this.value;}},
      title: {text: 'Frequency'}}],
      tooltip: {shared: true},
      series: [
      {
      name: \''''      
    js += self.options.baseline + '' + '''\',\ncolor: 'rgba(0, 0, 255, 0.50)',\n	type: 'column',\n	data: [\n'''
    for value in self.histogram.baseline:
      js += str(value)+',\n'
    js += '''],visible: true,\n	tooltip: {headerFormat: '<em>Number of threads {point.key}</em><br/>'}\n},\n {\n	name: \''''
    
    js += self.options.target + '' + '''\',\ncolor:'rgba(0, 255, 0, 0.50)',\n	type: 'column',\n	data: [\n'''
    for value in self.histogram.target:
      js += str(value)+',\n'
    js += '''],visible: true,\n	tooltip: {headerFormat: '<em>Number of threads {point.key}</em><br/>'}\n},\n'''
    js += '''\n]});})\n'''
    return js
  
  def make_table(self):
    table = '<UL>\n<LI>'
    table+= '''\n<table id="t01">
      	    <tr>
      	    <th>'''+self.operation+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    <th>'''+" "+'''
      	    </tr>
      	    <tr>
      	    <th>'''+" "+'''</th>
      	    <th>'''+"median"+'''</th>
      	    <th>'''+" "+'''</th>
      	    <th>'''+"first quartile"+'''</th>
      	    <th>'''+" "+'''</th>
      	    <th>'''+"third quartile"+'''</th>
      	    <th>'''+" "+'''</th>
      	    <th>'''+"max"+'''</th>
      	    <th>'''+" "+'''</th>
      	    <th>'''+"min"+'''</th>
      	    <th>'''+" "+'''</th>
      	    <th>'''+"standard deviation"+'''</th>
      	    <th>'''+" "+'''</th>
      	    <th>'''+" "+'''</th>
      	    <th>'''+"logs"+'''</th>

      	    </tr>
	    <tr>
	    <th>threadNum</th>
	    <th>baseline</th>		
	    <th>target</th>
	    <th>baseline</th>
	    <th>target</th>
	    <th>baseline</th>		
	    <th>target</th>
	    <th>baseline</th>		
	    <th>target</th>
	    <th>baseline</th>		
	    <th>target</th>
	    <th>baseline</th>		
	    <th>target</th>
	    <th>median diff</th>
	    <th>baseline</th>
	    <th>target</th>
	    </tr>\n'''
    for i, entry in enumerate(self.boxplot_baseline_data):
      table += '<tr>'
      table += '''<td>'''+entry.number_of_threads+'''</td>''' #number of threads
      table += '''<td>'''+entry.median+'''MB/s'''+'''</td>''' #median
      table += '''<td>'''+self.boxplot_target_data[i].median+'''MB/s'''+'''</td>'''
      table += '''<td>'''+entry.q1+'''MB/s'''+'''</td>''' #first quartile
      table += '''<td>'''+self.boxplot_target_data[i].q1+'''MB/s'''+'''</td>'''
      table += '''<td>'''+entry.q3+'''MB/s'''+'''</td>''' #third quartile
      table += '''<td>'''+self.boxplot_target_data[i].q3+'''MB/s'''+'''</td>'''
      table += '''<td>'''+entry.high+'''MB/s'''+'''</td>''' #max
      table += '''<td>'''+self.boxplot_target_data[i].high+'''MB/s'''+'''</td>'''
      table += '''<td>'''+entry.low+'''MB/s'''+'''</td>''' #min
      table += '''<td>'''+self.boxplot_target_data[i].low+'''MB/s'''+'''</td>'''
      table += '''<td>'''+entry.stdev+'''MB/s'''+'''</td>''' #min
      table += '''<td>'''+self.boxplot_target_data[i].stdev+'''MB/s'''+'''</td>'''
      
      table += '<td'
      diff = ((float(self.boxplot_target_data[i].median)-float(entry.median))/float(entry.median))*100
      if diff<-5:
	table += ''' bgcolor="#FF0000\"'''
      table += '>'
      table += str(round(diff,2))
      table += '''%</td>'''     
      table += '''<td><a href="''' + self.tars[i][0].tar_name + '''">baseline</td>'''
      table += '''<td><a href="''' + self.tars[i][1].tar_name + '''">target</td>'''
      table +='''</tr>\n'''
    table += '''</table>\n</UL>\n'''
    return table
    
class Group:
  def __init__(self, charts,item):
    self.charts = charts
    self.item = item
    self.name = self.name()
    self.button_name = 'name'
    self.ID = str(randint(0,1000))
    self.boxplot_script, self.threads_script, self.histogram_script = self.merge_scripts()
   

    
    
  def merge_scripts(self):
    merged_script_boxplot = ''
    merged_script_threads = ''
    merged_script_histogram = ''
    
    for item in self.charts:
      merged_script_boxplot += item.boxplot_js
      merged_script_threads += item.threads_js
      merged_script_histogram += item.histogram_js
      
    merged_script_boxplot = merged_script_boxplot[:-3]
    merged_script_threads = merged_script_threads[:-3]
    merged_script_histogram = merged_script_histogram[:-3]
    
    merged_script_boxplot += self.button_boxplot()
    merged_script_threads += self.button_threads()
    merged_script_histogram += self.button_histogram()

    return merged_script_boxplot, merged_script_threads, merged_script_histogram
  


  def name(self):
    ls = filter(lambda x: x!='thread' and x.split('=')[0]!='directory' and x.split('=')[0]!='name' and x.split('=')[0]!='numjobs' and x!='time_based' and x.split('=')[0]!='ioengine' and x.split('=')[0]!='fsync' and x.split('=')[0]!='runtime' and x!='group_reporting' and x.split('=')[0]!='bs' and x.split('=')[0]!='direct' and x.split('=')[0]!='kernel' ,list(self.item))
    ls.sort()
    return '_'.join(ls)
 
  def button_boxplot(self):
    button = '''var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#'''+self.ID+'''\').click(function () {'''
    for item in self.charts:
      button += item.ID+'''.yAxis[0].update({\n            type: types[type]\n        });'''
    button +='''\ntype += 1;\n        if (type === types.length) {\n            type = 0;\n        }\n    });\n})'''
    return button

  def button_threads(self):
    button = '''var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#'''+self.ID+'''_threads\').click(function () {'''
    for item in self.charts:
      button += item.ID+'''_threads.yAxis[0].update({\n            type: types[type]\n        });'''
    button +='''\ntype += 1;\n        if (type === types.length) {\n            type = 0;\n        }\n    });\n})'''
    return button

  def button_histogram(self):
    button = '''var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#'''+self.ID+'''_histogram\').click(function () {'''
    for item in self.charts:
      button += item.ID+'''_histogram.yAxis[0].update({\n            type: types[type]\n        });'''
    button +='''\ntype += 1;\n        if (type === types.length) {\n            type = 0;\n        }\n    });\n})'''
    return button
  
class Info:
  def __init__(self,tars):
    f = open(tars[1].tar[:-6]+'properties', "r")
    self.properties = f.read()
    self.custom_tag = ''
    f.close()
    
    for line in self.properties.split('\n'):
      if line.split('=')[0] == 'hostname':
	self.hostname = line.split('=')[1]
      if line.split('=')[0] == 'filesystem':
	self.filesystem = line.split('=')[1]
      if line.split('=')[0] == 'custom_tag':
        self.custom_tag = line.split('=')[1]	

    untar(tars[0].tar)
    try:
      f = open("./out/proc_mem_info", "r")
    except IOError:
      f = open('./out/OK','r')
    try:
      self.ram = f.read().split('\n')[0].split(' ')[-2:][0]+' KB'
    except IndexError:
      self.ram = 'unknown'
    f.close()
    
    try:
      f = open('./out/system_variable','r')
    except IOError:
      f = open('./out/OK','r')
    variables = f.read()
    f.close()
    try:
      self.build_baseline = filter(lambda x: x.split('=')[0]=='DISTRO',variables.split('\n'))[0].split('=')[1]
    except IndexError:
      self.build_baseline = 'unknown'
    try:
      f = open('./out/elevator', 'r')
    except IOError:
      f = open('./out/OK','r')
    try:
      self.elevator_baseline = f.read()
    except self.elevator_baseline=='':
      self.elevator_baseline = 'unknown'
    f.close()
    subprocess.call('rm -rf ./out',shell=True)
    
    untar(tars[1].tar)
    
    try:
      f = open('./out/system_variable','r')
    except IOError:
      f = open('./out/OK','r')
    variables = f.read()
    f.close()
    try:
      self.build_target = filter(lambda x: x.split('=')[0]=='DISTRO',variables.split('\n'))[0].split('=')[1]
    except IndexError:
      self.build_target = 'unknown'
    try:
      f = open('./out/elevator', 'r')
    except IOError:
      f = open('./out/OK','r')
    try:
      self.elevator_target = f.read()
    except self.elevator_target=='':
      self.elevator_target = 'unknown'
    f.close()
    subprocess.call('rm -rf ./out',shell=True)
    

class Tar:
  def __init__(self,tar,options,destination):
    self.destination = destination
    self.options = options
    self.tar = tar
    self.tar_name = tar.split('/')[-1:][0][:-7]
    self.property = self.tar[:-7]+'.properties'
    self.recipe = self.make_recipe()
    self.number_of_threads = get_value(self.recipe,'numjobs')

  def process_tar(self):
    print self.tar_name
    untar(self.tar)
    self.boxplot_data = Boxplot(self.number_of_threads, self.options.storage_string)
    self.threads_data = Threads(int(self.number_of_threads), self.options.storage_string)
    subprocess.call('mkdir '+self.destination+'/'+self.tar_name+'/',shell=True)
    subprocess.call('rm -rf ./out/*.log',shell=True)
    subprocess.call('mv ./out/ '+self.destination+'/'+self.tar_name,shell=True)
    
  def make_recipe(self):
    return ' '.join(filter(lambda x : x.split('=')[0]=='recipe', read_file(self.property,'r').split('\n'))[0][7:].split('-'))+' '+filter(lambda x : x.split('=')[0]=='filesystem', read_file(self.property,'r').split('\n'))[0]+' kernel='+self.property.split('/')[-3:][0].split('_RHEL')[0]

#TODO add support for non-kernel option, reference below
#  def make_recipe(self):
#    untar(self.tar)
#    if self.options.kernel == 'unspecified':
#	return ' '.join(map(lambda x: x[2:], read_file('./out/recipe','r').split(' ')))+' kernel='+self.tar.split('/')[-3:][0].split('_RHEL')[0]
#    else:
#	return' '.join(map(lambda x: x[2:], read_file('./out/recipe','r').split(' ')))+' kernel='+self.options.kernel


class Wikifeed:
  def __init__(self, page, kernel, column, link, host):
    self.page = page
    self.kernel = kernel
    self.column = column
    self.link = link
    self.host = host
    

class Report:
  def __init__(self,source, baseline, target, destination, storage_string, page):
    print 'recipe_fio_comparator'
    print baseline
    print target
    print storage_string
    self.baseline_path = baseline
    self.target_path = target
    self.custom_tag = ''
    self.host = baseline.split('/')[1].split('_')[1]

    baseline = baseline.split('/')[0].split('_RHEL')[0]
    target = target.split('/')[0].split('_RHEL')[0]
    
    self.page = page
    self.success = False
    parser = optparse.OptionParser('usage: python recipe_fio_comparator.py [options]')
    parser.add_option('-S', '--source', dest='source', default=source, type='string', help='specify source folder of results')
    parser.add_option('-P', '--parameter', dest='parameter', default='kernel', type='string', help='specify compared parameter')
    parser.add_option('-K', '--kernel', dest='kernel', default='unspecified', type='string', help='specify kernel name')
    parser.add_option('-B', '--baseline', dest='baseline', default=baseline, type='string', help='specify baseline value')
    parser.add_option('-T', '--target', dest='target', default=target, type='string', help='specify target value')
    parser.add_option('-D', '--destination', dest='destination', default=destination, type='string', help='specify destination of generated report')
    parser.add_option('-A', '--storage_string', dest='storage_string', default=storage_string, type='string', help='specify storage string')
    parser.add_option('-E', '--speed_plot_type', dest='speed_plot_type', default='1', type='int', help='you can have either unaggregated(1) or aggregated(2) plots')
    (options, args) = parser.parse_args()
    self.options = options
    self.destination = self.options.destination+self.target_path.split('/')[0]+'/'+self.target_path.split('/')[1]+'_fio_'+storage_string
    print self.destination+'/index.html'
    if os.path.exists(self.destination+'/index.html'):
        print '\033[92mReport already exist! Sending to wiki...\033[0m'
	self.success = True
    else:
        subprocess.call('mkdir -p '+self.destination,shell=True)
        try:
		self.results = self.load_results()
		self.matched_tars = self.match_results()
		self.info = Info(self.matched_tars[0])
        	self.custom_tag = self.info.custom_tag
                self.matrix = self.make_matrix()
		for result in self.results: result.process_tar()
        	self.charts = self.make_charts()
        	self.groups = self.group_charts()
        	self.toc = self.create_toc()
		self.success = True
	except ValueError:
		print '\033[91mNo bw logs!\033[0m'
		self.success = False
	except IndexError:
		print '\033[91mNo matched results for '+self.target_path.split('/')[0]+'/'+self.target_path.split('/')[1]+'_fio_'+storage_string+'\033[0m'
		self.success = False

        if self.success: 
		self.report = self.make_report()
		self.save()
  


  def load_results(self):
    if self.options.kernel == 'unspecified':
      tars = glob.glob(self.options.source+'/'+self.baseline_path+'/*fio*'+self.options.storage_string+'*.tar.*') + glob.glob(self.options.source+self.target_path+'/*fio*'+self.options.storage_string+'*.tar.*')
    else:
      tars = glob.glob(self.options.source+'/'+self.kernel+'/*fio*.tar.*')
    results = []
    for tar in tars:
	results.append(Tar(tar,self.options,self.destination))
    return results
  
  
  def get_wikifeed(self):
    if self.custom_tag:
      return Wikifeed(self.page,self.target_path.split('/')[0]+'_'+self.custom_tag,self.options.storage_string+'_fio',self.make_link(),self.host)
    else:
      return Wikifeed(self.page,self.target_path.split('/')[0],self.options.storage_string+'_fio',self.make_link(),self.host)

  def get_host(self):
    return self.hostname.split('.')[0]
  
  def make_link(self):
    return 'http://perf-desktop.brq.redhat.com/'+'/'.join(self.destination[1:].split('/')[3:])

  def simplify_reduce(self):
    return list(set(map(lambda x: self.simplify_more(x), self.charts)))

  
  def group_charts(self):
    matrix = self.simplify_reduce()
    groups = []
    for item in matrix:
      charts = filter(lambda x: self.simplify_more(x)==item, self.charts)
      groups.append(Group(charts,item))
    return groups
  
      
  def make_charts(self):
    charts = []
    for item in self.matrix:
      tars = filter(lambda x: self.simplify(x)==item,self.matched_tars)
      charts.append(Chart(item, tars, self.options))
    return charts
  
  def match_results(self):
    baseline_tars = [item for item in self.results if get_value(item.recipe, self.options.parameter) == self.options.baseline] #keep results which only contain 'baseline' value of 'parameter'
    target_tars = [item for item in self.results if get_value(item.recipe, self.options.parameter) == self.options.target] #keep results which only contain 'target' value of 'parameter'
    matched_tars = []
    for baseline_tar in baseline_tars:
      configuration = set(filter(lambda x: x.split('=')[0]!=self.options.parameter,baseline_tar.recipe.split(' '))) #configuration is a set of strings 'parameter=value', but without 'paramter=value1' tuple
      for target_tar in target_tars:
	if configuration == set(filter(lambda x: x.split('=')[0]!=self.options.parameter,target_tar.recipe.split(' '))): matched_tars.append((baseline_tar,target_tar))
    return matched_tars

  def make_matrix(self):
    return list(set(map(self.simplify, self.matched_tars)))

  #list from recipe
  def simplify(self,x):
    return tuple(set(filter(lambda x: x.split('=')[0] != 'numjobs' and x.split('=')[0] != 'name', x[0].recipe.split(' '))))
  
  def simplify_more(self,x):
    return tuple(set(filter(lambda x: x.split('=')!='numjobs' and x.split('=')!='rw',x.recipe.split(' '))))

    
  
  def make_report(self):
    report = '''<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
	<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> 
	<title>recipe_fio results</title>
	<script type='text/javascript' src='http://code.jquery.com/jquery-1.9.1.js'></script>
        </head>
        <body>
	<script src="http://code.highcharts.com/highcharts.js"></script>
	<script src="http://code.highcharts.com/highcharts-more.js"></script>
	<script src="http://code.highcharts.com/modules/exporting.js"></script>
	<link rel="stylesheet" type="text/css" href="stylesheet.css">
	<br>
	<font size="3"><style>
	    table {
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
	    }
	    </style>
	    </head>
	<DT><CENTER><STRONG>recipe_fio results on ''' + self.info.hostname
    report += '''</CENTER> </STRONG>\n  <br>              \n  <br><DT><STRONG>Kernels</STRONG><UL>\n  <LI>Baseline: '''+self.options.baseline+'''\n  <LI>Target: '''+self.options.target+'\n'
    report += '''</UL> </CENTER> </STRONG>   \n  <DT><STRONG>Builds</STRONG><UL>\n  <LI>Baseline: '''+self.info.build_baseline+'''\n  <LI>Target: '''+self.info.build_target+'\n'
    report += '''</UL> </CENTER> </STRONG>   \n  <DT><STRONG>Custom tag</STRONG><UL>\n  <LI>'''+self.custom_tag+'''\n'''
    report += '''</UL>\n  <DT> <STRONG>Machine</STRONG><UL>\n  <LI><a href="https://beaker.engineering.redhat.com/view/'''+self.info.hostname+'''#details">'''+self.info.hostname+'''</a>\n'''
    report += '''<LI> RAM: '''+self.info.ram+'''</UL>\n'''
    report += '''\n      <DT> <STRONG>Test script, raw data and test logs </STRONG><UL>
      <LI><a href="http://pkgs.devel.redhat.com/cgit/tests/performance/tree/recipe_fio/runtest.sh">Test Bash script</a>
      <LI><a href="http://perf-desktop.brq.redhat.com/fs_sync/'''+self.options.source+'''">Raw data folder</a>\n'''
    report += '''\n  <DT><STRONG>Tools used</STRONG><UL>\n  <LI><a href="https://github.com/axboe/fio">FIO (Flexible Input/Output tool)</a><UL>\n  <LI>version: fio-2.1.10</UL></UL></UL>\n'''
    for group in self.groups:
      report += '''<script type='text/javascript' src=\''''+group.ID+'''.js\'></script>\n'''
      report += '''<script type='text/javascript' src=\''''+group.ID+'''_threads.js\'></script>\n'''
      report += '''<script type='text/javascript' src=\''''+group.ID+'''_histogram.js\'></script>\n'''
    report += self.toc
    for item in self.groups:
      report += '''<a name="'''+item.ID+'''"_ /a>\n<h3 id="summary top">'''+item.charts[0].chart_description+'''</h3>\n'''
      report += '''<div class="main">\n<table>\n<tr>\n'''
      report += '''<LI>Change between linear and logarithmic Y axis\n<br\n><button id=\"'''+item.ID+'''\" class="autocompare">LinY/LogY</button>\n'''
      for i,chart in enumerate(item.charts):
	if i == 2:
	  report += '''</tr>\n</table>\n'''
	  report += item.charts[0].table
	  report += item.charts[1].table
	  report += '''<div class="main">\n<table>\n<tr>\n'''
	report += '''<td><div id=\"'''+chart.ID+'''\" align="center" margin: 0 auto"></div></td>\n'''
      report += '''</tr>\n</table>\n'''
      if i == 0 or i == 2:
	report += item.charts[i].table
      if i == 1:
	report += item.charts[0].table
	report += item.charts[2].table
      if i == 3:
	report += item.charts[2].table
	report += item.charts[3].table
      report += '''<div class="main">\n<table>\n<tr>\n'''
      
      for i, chart in enumerate(item.charts):
	if i == 2:
	  report += '''</tr>\n<tr>\n'''
	report += '''<td><div id=\"'''+chart.ID+'''_threads\" align="center" margin: 0 auto"></div></td>\n'''
      report += '''</tr>\n</table>\n'''
      report += '''<LI>Change between linear and logarithmic Y axis\n<br\n><button id=\"'''+item.ID+'''_threads\" class="autocompare">LinY/LogY</button>\n'''
      report += '''\n<br>\n<br>\n\n'''
      report += '''<div class="main">\n<table>\n<tr>\n'''
      for i, chart in enumerate(item.charts):
	if i == 2:
	  report += '''</tr>\n<tr>\n'''
	report += '''<td><div id=\"'''+chart.ID+'''_histogram\" align="center" margin: 0 auto"></div></td>\n'''
      
      report += '''<LI>Change between linear and logarithmic Y axis\n<br\n><button id=\"'''+item.ID+'''_histogram\" class="autocompare">LinY/LogY</button>\n'''
      report += '''</tr>\n</table>\n'''
      
      for chart in item.charts:
       report += chart.speed_plot_table
      report += '''\n<br>\n<br>\n<a href="#TOC">Go back to TOC</a>\n\n'''
    return report
      
      
      
  def create_toc(self):
    toc = '''<a name="TOC"></a>\n<STRONG> Table of contents</STRONG>\n<table id="t01">\n<tr>\n<th>Link</th>\n<th nowrap>Regresion <-5%</th>\n<th>Gain >5%</th>\n</tr>n'''
    for item in self.groups:
      regresions = []
      gains = []
      for chart in item.charts:
	regresions += map(lambda x: str(x)[:5], filter(lambda x: x<-5, chart.regresions))
	gains += map(lambda x: str(x)[:5], filter(lambda x: x>5, chart.gains))
      toc += '''<tr>\n<td nowrap>\n<LI><a href="#'''+item.ID+'\"_>'+item.name+'''</a></td>\n<td>{'''
      toc += ','.join(regresions)
      toc += '''}</td><td nowrap>{'''
      toc += ','.join(gains)
      toc += '''}</td>\n</tr>\n'''
    toc += '''</table>'''
    return toc
    
  def save(self):
    for group in self.groups:
      f = open(self.destination+'/'+group.ID+'.js','w+')
      f.write(group.boxplot_script)
      f.close()
      f = open(self.destination+'/'+group.ID+'_threads.js','w+')
      f.write(group.threads_script)
      f.close()
      f = open(self.destination+'/'+group.ID+'_histogram.js','w+')
      f.write(group.histogram_script)
      f.close()
      f = open
    f = open(self.destination+'/'+'index.html','w+')
    f.write(self.report)
    f.close()
   

      
      
    
