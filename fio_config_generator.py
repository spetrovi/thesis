#bin/python

import subprocess, sys
from random import randint

def fio_config_generator(size,sizeRange):
  sizeBit = int(size[:-1])*1000
  sizeRange = sizeRange.split(':')
  lowSizeBit = int(sizeRange[0][:-1])
  highSizeBit = int(sizeRange[1][:-1])

  globalSet = '''[global]
rw=randwrite
ioengine=libaio
bs=64k
thread
direct=1
directory=./
runtime=60\n
'''

  config = open('./config.fio','w+')
  config.write(globalSet)
  
  filesToWrite = []
  fileSizes = []
  total = 0
  while total < sizeBit-lowSizeBit:
      fileSize = randint(lowSizeBit,highSizeBit)
      if total+fileSize < sizeBit:
	fileSizes.append(fileSize)
	total += fileSize
	config.write('['+str(fileSize)+']\n'+'filesize='+str(fileSize)+'k\n\n')
  return fileSizes

