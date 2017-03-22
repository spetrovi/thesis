

class Frag_histogram:
	def __init__(self, fsf):
		fsf = fsf.split('\n')
		info = []
		for i in range(0,11):
		info.append(fsf[i])
		free_percent = fsf[3].split(' ')[3][1:-2]
		#used_percent = 100.0 - float(free_percent)
		blockSize = int(fsf[1].split(' ')[1])
		totalBlocks= int(fsf[2].split(' ')[2])
		totalVolume = (blockSize*totalBlocks)/1000000000#convert to GB
		histogram = []
		for i in range(12,len(fsf)-1):
  			histogram.append(fsf[i])
		histogram = map(lambda x: remove_space(x), histogram)
		self.bins = []
		self.extents = []
		self.blocks = []
		for i in range(0,len(histogram)):
  			histogram[i].pop(2)
  			bins.append(histogram[i][0][:-3] + '-' + histogram[i][1][:-1])
  			extents.append(int(histogram[i][2]))
 	 		blocks.append(int(histogram[i][3]))
		self.ID = 'free_hist'

  def generate_histogram_script(self):
    js = 'var '
    js += self.ID+'''_histogram;\n$(document).ready(function () {'''+self.ID+'''_histogram= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',\n renderTo: \''''+self.ID+'''_histogram\'},\ntitle: {text: \'Histogram of free space\'},'''
    js += '''xAxis: [{categories: ['''
    for _bin in self.bins:
      js += '''\''''+_bin+'''\', '''
    js += '''],'''
    js += '''title: {text: 'Extent size [MB/s]'}}],
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
    js += 'free extents' + '''\',\ncolor: 'rgba(0, 0, 255, 0.50)',\n	type: 'column',\n	data: [\n'''
    for value in self.extents:
      js += str(value)+',\n'
    js += '''],visible: true,\n	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}\n},\n {\n	name: \''''
    
    js += 'free blocks' + '''\',\ncolor:'rgba(0, 255, 0, 0.50)',\n	type: 'column',\n	data: [\n'''
    for value in self.blocks:
      js += str(value)+',\n'
    js += '''],visible: true,\n	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}\n},\n'''
    js += '''\n]});})\n'''
    return js[:-3]+self.button_histogram()

  def button_histogram(self):
    button = '''var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#'''+self.ID+'''_histogram_button\').click(function () {'''
    button += self.ID+'''_histogram.yAxis[0].update({\n            type: types[type]\n        });'''
    button +='''\ntype += 1;\n        if (type === types.length) {\n            type = 0;\n        }\n    });\n})'''
    return button

  def make_report(self):
    report = '''<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
	<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> 
	<title>free space fragmentation</title>
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
	<DT><CENTER><STRONG>free space fragmentation on device'''
    report += '''</CENTER> </STRONG>\n  <br>              \n  <br>'''

    report += '''<script type='text/javascript' src=\''''+self.ID+'''_histogram.js\'></script>\n'''

    report += '''<a name="'''+self.ID+'''"_ /a>\n<h3 id="summary top">Free space fragmentation</h3>\n'''
    report += '''<div class="main">\n<table>\n<tr>\n'''''
    report += '''<td><div id=\"'''+self.ID+'''_histogram\" align="center" margin: 0 auto"></div></td>\n'''
    report += '''<LI>Change between linear and logarithmic Y axis\n<br\n><button id=\"'''+self.ID+'''_histogram_button\" class="autocompare">LinY/LogY</button>\n'''
    report += '''</tr>\n</table>\n'''
    report += '''\n<br>\n<br>\n<a href="#TOC">Go back to TOC</a>\n\n'''
    return report

  def save(self):
      f = open(self.ID+'_histogram.js','w+')
      f.write(self.generate_histogram_script())
      f.close()
      #f = open('index.html','w+')
      #f.write(self.make_report())
      f.close()



def remove_space(line):
    return filter(lambda x: x!='', line.split(' '))

def read_file(name,option):
  f = open(name,option)
  str_ = f.read()
  f.close()
  return str_

#in mode returns value of the given parameter, example: 'infoname=example.info, parameter=ioengine, mode=0'{ioengine=libaio} ~~~> returns 'libaio'
def get_value(string, parameter):
  recipe = map(lambda x: x.split('='), recipe.split('\n')) #recipe is list of tuples, example [[direct,1],[rw,read],[ioengine,libaio]]
  return [x for x in recipe if x[0] == parameter][0][1] #finds tuple with 'paramter' on the first place and returns second value(the value of parameter)

class Boxplot:
  def __init__(self, depth):
    self.depth = depth
    self.free_space_logs = []
    self.used_space_logs = []
    self.bw_boxplots = []
    self.iops_boxplots = []
    self.lat_boxplots = []
    self.fio_outputs = []
    for i in range(1, 6):
	self.free_space_logs.append(read_file('./out/'+str(i*10)+'free_space.frag', 'r'))
	self.used_space_logs.append(read_file('./out/'+str(i*10)+'extents.frag', 'r'))
	self.fio_outputs.append(read_file('./out/'+str(i*10)+'*.out', 'r'))
	#TODO add df.frag
	self.bw_boxplots.append(self.parse_data('bw',i))
	self.iops_boxplots.append(self.parse_data('iops',i))
	self.lat_boxplots.append(self.parse_data('_lat.',i))

  def parse_data(self, _type, i):
    data=[]
    times=[]
    logs=glob.glob('./out/'+i*10+'/*_'+_type+'*.log')
    for log in logs:
	with open(log) as openfileobject:
	    for i, line in enumerate(openfileobject):
			data.append(float(line.split(',')[1])/1000) #lines are in format 'time,_type,operation,blocksize'
			times.append(int(line.split(',')[0]))
    low = str(round(np.min(data)+0.001,2)) #in case there were zero value, otherwise log plot would not work
    high = str(round(np.max(data)+0.001,2))
    q1 = str(round(np.percentile(data,25)+0.001,2))
    q3 = str(round(np.percentile(data,75)+0.001,2))
    median = str(round(np.median(data)+0.001,2))
    stdev = str(round(np.std(data),2)).split('.')[0]
    return (low, high, q1, q3, median, stdev)


class Tar:
  def __init__(self, tar, destination):
    #self.destination = destination
    #self.options = options
    self.tar = tar
    self.tar_name = tar.split('/')[-1:][0][:-7]
    self.property = read_file(self.tar[:-7]+'.properties','r')
    self.recipe = self.make_recipe()
    self.depth = get_value(self.property,'depth')

  def process_tar(self):
    print self.tar_name
    untar(self.tar)
    self.boxplots = Boxplot(self.depth)
    #self.threads_data = Threads(int(self.number_of_threads), self.options.storage_string)
    subprocess.call('mkdir '+self.destination+'/'+self.tar_name+'/',shell=True)
    subprocess.call('rm -rf ./out/*/*.log',shell=True)
    subprocess.call('mv ./out/ '+self.destination+'/'+self.tar_name,shell=True)
    
  def make_recipe(self):
    return ' '.join(filter(lambda x : x.split('=')[0]=='recipe', read_file(self.property,'r').split('\n'))[0][7:].split('-'))+' '+filter(lambda x : x.split('=')[0]=='filesystem', read_file(self.property,'r').split('\n'))[0]+' kernel='+self.property.split('/')[-3:][0].split('_RHEL')[0]+' depth='+self.depth
