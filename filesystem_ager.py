import subprocess, sys, fio_config_generator as conf, random_deletor as deletor
from random import randint

size = sys.argv[1]
modificator = int(sys.argv[2])
sizeRange = sys.argv[3]
n = int(sys.argv[4])

for i in range(0,n):
  c = conf.fio_config_generator(size,sizeRange)
  subprocess.call('fio config.fio',shell=True)
  deletor.random_deletor(size,modificator,sizeRange,c)

