from random import randint

def sizeof_fmt(num, suffix='B'):
    for unit in ['','Ki','Mi','Gi','Ti','Pi','Ei','Zi']:
        if abs(num) < 1024.0:
            return "%3i%s%s" % (num, unit, suffix)
        num /= 1024.0
    return "%.1f%s%s" % (num, 'Yi', suffix)

def remove_space(line):
    return filter(lambda x: x!='', line.split(' '))

class Free_space_fragmentation:
  def __init__(self, _file, fsystem):
		self.fsystem = fsystem
		ffh = _file.split('\n')
		self.bins = []
		self.extents = []
		self.blocks = []
		if fsystem == 'ext4':
			histogram = []
			for i in range(12,len(ffh)-1):
  				histogram.append(ffh[i])
			histogram = map(lambda x: remove_space(x), histogram)		
			for i in range(0,len(histogram)):
  				histogram[i].pop(2)
  				self.bins.append(histogram[i][0][:-3] + '-' + histogram[i][1][:-1])
  				self.extents.append(int(histogram[i][2]))
 	 			self.blocks.append(int(histogram[i][3]))

		if fsystem == 'xfs':
			ffh = filter(lambda x: x.find('from') < 0 and x.find('free') < 0, ffh)[:-1]
			histogram = {}
			for line in ffh:
				line = filter(lambda x: x!= '', line.split(' '))
				tick = line[0]+'-'+line[1]
				if histogram.has_key(tick):
					histogram[tick][0]+=int(line[2])
					histogram[tick][1]+=int(line[3])
				else:	
					histogram[tick] = [int(line[2]), int(line[3])]
				#print tick
			histogram = sorted(histogram.items(), key=lambda x: int(x[0].split('-')[0]))
			for i in range(len(histogram)):
  				tick = histogram[i][0].split('-')
				self.bins.append(sizeof_fmt(int(tick[0])*4096)+'-'+sizeof_fmt(int(tick[1])*4096))
  				self.extents.append(histogram[i][1][0])
				self.blocks.append(histogram[i][1][1])
		self.ID = 'free_hist_'+fsystem+'_'+str(randint(0,10000)) #hash

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
    js += '''title: {text: 'Extent size'}}],
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
