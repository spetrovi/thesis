from random import randint
import numpy as np

def sizeof_fmt(num, suffix='B'):
    for unit in ['','Ki','Mi','Gi','Ti','Pi','Ei','Zi']:
        if abs(num) < 1024.0:
            return "%3i%s%s" % (num, unit, suffix)
        num /= 1024.0
    return "%.1f%s%s" % (num, 'Yi', suffix)


def read_file(_file, op):
	f = open(_file,op)
	s = f.read()
	f.close()
	return s

class Fragmented_file:
  def __init__(self,name, extents):
	self.name = name
	self.extents = extents
	self.optimally_allocated = True
	self.extents_size = []
	self.process_extents()
	self.file_size = sum(self.extents_size)

#fie output is in 512B blocks, we want to make it 1B
  def process_extents(self):
	self.extents = filter(lambda x: x.split(': ')[1:][1] != 'hole', self.extents)
	self.extents = map(lambda x: (int(x.split(': ')[1:][1].split('..')[0]),int(x.split(': ')[1:][1].split('..')[1])), self.extents)

	self.extents_size.append((self.extents[0][1]-self.extents[0][0])*512)
	for i in range(1,len(self.extents)):
		if self.extents[i][0] == self.extents[i-1][1]+1:
			self.extents_size[-1] += (self.extents[i][1]-self.extents[i][0])*512
		else:
			self.extents_size.append((self.extents[i][1]-self.extents[i][0])*512)
			self.optimally_allocated = False

def file_size_histogram(_file, destination):
	#files = reduce(lambda x, y: x+[y.file_size], frag_files, [])
#	files = [1,2,3]
#	print len(frag_files)
	contents = read_file(_file,'r').split('\n')[:-1]
	files = map(lambda x: int(x.split('\t')[0]), contents)
	#print 'sum '+str(sizeof_fmt(sum(files)))
	bins = [(2**i) for i in range(2,35)]
	fs_histogram, fs_bins = np.histogram(files, bins)
	fs_histogram = map(lambda x: int(x), fs_histogram)
	ticks = []
	for i in range(len(fs_bins)-1):
		ticks.append(sizeof_fmt(bins[i])+'-'+sizeof_fmt(bins[i+1]))
	#ticks = map(lambda x: sizeof_fmt(x), fs_bins)

	ID = 'fs_'+str(randint(0,10000)) #hash

	template = read_file('templates/fs_template.js','r')
	template = ID.join(template.split('XXX_NAME_XXX'))
	template = str(sum(fs_histogram)).join(template.split('XXX_FSUM_XXX'))
	template = str(ticks).join(template.split('XXX_BINS_XXX'))
	template = str(fs_histogram).join(template.split('XXX_FS_XXX'))
#	template = str(opt_histogram).join(template.split('XXX_OPT_XXX'))

	_file = open(destination+ID+'.js','w')
	_file.write(template)
	_file.close()
	return ID

def used_space_histogram(_file, destination):
	contents = read_file(_file,'r').split('\n')[:-1]
	#frag_files = []
	frag_data = []
	opt_data = []
	extents = []
	files = []
	for line in contents:
		if line.find('/') >= 0:
			if extents: 
				_ff = Fragmented_file(name, extents)
				if _ff.optimally_allocated: opt_data += _ff.extents_size
				else: frag_data += _ff.extents_size
				files.append(_ff.file_size)
			name = line
			extents = []
		else:
			extents.append(line)
	
	filenum = len(files)

	bins = [(2**i) for i in range(4,35)]

#	opt_files = filter(lambda x: x.optimally_allocated, frag_files)
#	frag_files = filter(lambda x: not x.optimally_allocated, frag_files)

#	frag_data = reduce(lambda x, y: x+y.extents_size, frag_files, [])

	frag_histogram, frag_bins = np.histogram(frag_data, bins)
	frag_histogram = map(lambda x: int(x), frag_histogram)
	
#	opt_data = reduce(lambda x, y: x+y.extents_size, opt_files, [])

	opt_histogram, opt_bins = np.histogram(opt_data,bins)
	opt_histogram = map(lambda x: int(x), opt_histogram)	
	ticks = []
	for i in range(len(bins)-1):
		ticks.append(sizeof_fmt(bins[i])+'-'+sizeof_fmt(bins[i+1]))

	ID = 'used_'+str(randint(0,10000)) #hash

	template = read_file('templates/used_space_template.js','r')
	template = ID.join(template.split('XXX_NAME_XXX'))
	template = str(sum(frag_histogram)).join(template.split('XXX_FRAGSUM_XXX'))
	
	print str(filenum)
	print str(len(opt_data))
	#more_info = ' '+str(sum(opt_histogram))+'/'+str(filenum)+' ('+str(int(100*float(sum(opt_histogram))/filenum))+'%)'
	more_info = ', fragments: '+str(len(frag_data))+', optimal files: '+str(int(100*float(len(opt_data))/filenum))+'%'
	template = more_info.join(template.split('XXX_MOREINFO_XXX'))


	template = str(ticks).join(template.split('XXX_BINS_XXX'))
	template = str(frag_histogram).join(template.split('XXX_FRAG_XXX'))
	template = str(opt_histogram).join(template.split('XXX_OPT_XXX'))
	_file = open(destination+ID+'.js','w')
	_file.write(template)
	_file.close()
	return ID

