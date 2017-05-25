import free_space_frag as fsf
import glob
from random import randint

def read_file(_file, op):
	f = open(_file,op)
	s = f.read()
	f.close()
	return s

def tr(val):
	if val.find('i') >= 0:
		suf = val[-3:]
		val = int(val.split('-')[0][:-3])
	else:
		suf = val[-1:]
		val = int(val.split('-')[0][:-1])
	if suf.find('K') >= 0: return val*1000
	if suf.find('M') >= 0: return val*1000000
	if suf.find('G') >= 0: return val*1000000000

def d_image(fsystem, destination):
	ID = 'image_'+str(randint(0,1000))
	raw_files = glob.glob('./out/free_space_*.log')
	raw_files.sort(key=lambda x: int(x.split('free_space_')[1][:-4]))
	#print 'free files: '+str(len(raw_files))
	histograms = []

	for i, _file in enumerate(raw_files):
 	   # if i > 107:
		histograms.append(fsf.Free_space_fragmentation(read_file(_file,'r'), fsystem))

	bins = []
	for hist in histograms:
		bins += hist.bins
	


	bins = sorted(list(set(bins)),key=tr)

	template = read_file('templates/image.js','r')
	if fsystem == 'xfs':
		template = str(map(lambda x: x.split('-')[0][:-3]+'-'+x.split('-')[1], bins)).join(template.split('XXX_BINS_XXX'))
	else:
		template = str(bins).join(template.split('XXX_BINS_XXX'))
	template = str(range(0,len(histograms))).join(template.split('XXX_TIMES_XXX'))
	template = str(len(histograms)*7).join(template.split('XXX_DEPTH_XXX'))
	data = ''
	for i, hist in enumerate(histograms):
		data += '{\nstack: '+str(i)+',\ndata:['
		for j, _bin in enumerate(hist.bins):
			col = bins.index(_bin)
			val = hist.extents[j]
			data +='['+str(col)+','+str(val)+'],'
		data += ']},'

	template = data.join(template.split('XXX_DATA_XXX'))
	template = ID.join(template.split('XXX_NAME_XXX'))

	_file = open(destination+ID+'.js','w')
	_file.write(template)
	_file.close()
	return ID

