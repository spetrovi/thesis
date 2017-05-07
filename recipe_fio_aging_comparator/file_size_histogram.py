from random import randint
import numpy as np

def sizeof_fmt(num, suffix='B'):
    for unit in ['','Ki','Mi','Gi','Ti','Pi','Ei','Zi']:
        if abs(num) < 1024.0:
            return "%3.1f%s%s" % (num, unit, suffix)
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

#512-byte blocks->1kb blocks
  def process_extents(self):
	self.extents = filter(lambda x: x.split(': ')[1:][1] != 'hole', self.extents)
	self.extents = map(lambda x: (int(x.split(': ')[1:][1].split('..')[0]),int(x.split(': ')[1:][1].split('..')[1])), self.extents)
	self.extents_size.append(self.extents[0][1]-self.extents[0][0])
	for i in range(1,len(self.extents)):
		if self.extents[i][0] == self.extents[i-1][1]+1:
			self.extents_size[-1] += self.extents[i][1]-self.extents[i][0]
		else:
			self.extents_size.append(self.extents[i][1]-self.extents[i][0])
			self.optimally_allocated = False

def used_space_histogram(_file, destination):
	contents = read_file(_file,'r').split('\n')[:-1]
	frag_files = []
	extents = []
	for line in contents:
		if line.find('/') >= 0:
			if extents: frag_files.append(Fragmented_file(name, extents))
			name = line
			extents = []
		else:
			extents.append(line)

	filenum = len(frag_files)
	opt_files = filter(lambda x: x.optimally_allocated, frag_files)
	frag_files = filter(lambda x: not x.optimally_allocated, frag_files)
#TODO skontrolovat, ci neni zoznam naopak
	frag_data = reduce(lambda x, y: x+y.extents_size, frag_files, [])
	frag_histogram, frag_bins = np.histogram(frag_data,bins=20)
	frag_histogram = map(lambda x: int(x), frag_histogram)

	opt_data = reduce(lambda x, y: x+y.extents_size, opt_files, [])
	opt_histogram, opt_bins = np.histogram(opt_data,bins=frag_bins)
	opt_histogram = map(lambda x: int(x), opt_histogram)	

	ticks = map(lambda x: sizeof_fmt(x*512), frag_bins)
	
	ID = 'used_'+str(randint(0,10000)) #hash
	template = read_file('used_space_template.js','r')
	template = ID.join(template.split('XXX_NAME_XXX'))
	template = str(sum(frag_histogram)).join(template.split('XXX_FRAGSUM_XXX'))
	template = str(sum(opt_histogram)).join(template.split('XXX_OPTNUM_XXX'))
	template = str(filenum).join(template.split('XXX_OPTSUM_XXX'))
	template = str(ticks).join(template.split('XXX_BINS_XXX'))
	template = str(frag_histogram).join(template.split('XXX_FRAG_XXX'))
	template = str(opt_histogram).join(template.split('XXX_OPT_XXX'))
	_file = open(destination+ID+'.js','w')
	_file.write(template)
	_file.close()
	return ID

