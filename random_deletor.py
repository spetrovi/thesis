#bin/python
import subprocess, sys, glob
from random import randint

def random_deletor(size,modificator,sizeRange,c):
  if modificator != 0:
    sizeBit = (int(size[:-1])*1000)/modificator
  else:
    return []
  sizeRange = sizeRange.split(':')
  lowSizeBit = int(sizeRange[0][:-1])
  highSizeBit = int(sizeRange[1][:-1])

  files_to_delete = []
  total = 0
  while (total < sizeBit-highSizeBit or total > sizeBit+highSizeBit):
    fileNum = randint(0,c)
    file_to_delete = glob.glob('*.'+str(fileNum)+'.*')
    if len(file_to_delete)!=0:
      file_to_delete = file_to_delete[randint(0,len(file_to_delete))]
      fileSize = int(file_to_delete.split('.')[0])
      if (total+fileSize < sizeBit+highSizeBit):
	total += fileSize
	files_to_delete.append(file_to_delete[0])
	subprocess.call('rm '+file_to_delete[0],shell=True)
  return files_to_delete
