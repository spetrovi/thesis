import subprocess, sys, fio_config_generator as conf, random_deletor as deletor, logging
from random import randint
import functions as fun



logging.basicConfig(filename='./log.out',level=logging.DEBUG)


size = sys.argv[1]
modificator = int(sys.argv[2])
sizeRange = sys.argv[3]
n = int(sys.argv[4])

logging.info('Size='+size+', modificator='+str(modificator)+', size range='+sizeRange+', repetition='+str(n)+' times\n')

totalFilesCreated = 0
totalVolumeCreated = 0
totalFilesDeleted = 0
totalVolumeDeleted = 0

for i in range(0,n):
  logging.info('Cycle number '+str(i)+':')
  listOfCreated = conf.fio_config_generator(size,sizeRange)
  
  subprocess.call('fio config.fio',shell=True)
  listOfDeleted = deletor.random_deletor(size,modificator,sizeRange,len(listOfCreated))
  deletedVolume = sum(map(lambda x: int(x.split('.')[0]), listOfDeleted))
  
  
  totalFilesCreated += len(listOfCreated)
  totalVolumeCreated += sum(listOfCreated)
  totalFilesDeleted += len(listOfDeleted)
  totalVolumeDeleted += deletedVolume
  
  
  logging.info('Number of generated files: '+str(len(listOfCreated)))
  logging.info('Generated volume: '+str(sum(listOfCreated))+'kB')
  logging.info('Number of deleted files: '+str(len(listOfDeleted)))
  logging.info('Deleted volume: '+str(deletedVolume)+'kB\n')
  
  fun.store_image('./','../cycle_'+str(i))
  
logging.info('Total files created: '+str(totalFilesCreated))
logging.info('Total volume created: '+str(totalVolumeCreated)+'kB')
logging.info('Total files deleted: '+str(totalFilesDeleted))
logging.info('Total volume deleted: '+str(totalVolumeDeleted)+'kB')