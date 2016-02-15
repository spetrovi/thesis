import subprocess, sys, logging

def generate_parameters(top_directory, duration, max_files, max_file_size, levels, directories, random_writes):
  return 'fs-drift.py -t '+top_directory+' -d '+duration+' -f '+max_files+' -s '+max_file_size+' -l '+levels+' -D '+directories+' -W '+random_writes

def name_run(i,j,k,l,m):
  return str(i)+'_'+str(j)+'_'+str(k)+'_'+str(l)+'_'+str(m)
#logging.basicConfig(filename='./log.out',level=logging.DEBUG)


top_directory = '/lun1/fs-drift/test_'

#To fill up a filesystem, just specify a --max-files and a mean file size such that the product is much greater than the filesystem's space.
#Right now, lun1 is 4GB, and we dont want to have files bigger than 100MB, mean therefore would be 50MB. 4000/50 = 80 ---> minimal number of files, so we have to have *much* more
#operation count (try not to specify at first)
#These parameters will vary:
#max files 500 1000 1500
#max file size 100MB 150MB 200MB
#max random writes (?) Unspecified
#levels 5 10 15
#directories 5 10 15

duration = '120'

max_files = ['50000000','100000000','150000000']
max_file_size = ['5000','15000','20000']
levels = ['5']
directories = ['5']
random_writes = ['2']

#so matrix 3x3x3x3x3
for i in range(0,len(max_files)):
  for j in range(0,len(max_file_size)):
    for k in range(0,len(levels)):
      for l in range(0,len(directories)):
	for m in range(0,len(random_writes)):
	  name = name_run(i,j,k,l,m)
	  print name
	  subprocess.call('rm -rf /lun1/fs-drift/test_/; mkdir /lun1/fs-drift/test_/',shell=True)
	  subprocess.call(generate_parameters(top_directory, duration, max_files[i], max_file_size[j], levels[k], directories[l], random_writes[m])+' > ./log/'+name,shell=True)
	  subprocess.call('df > ./log/'+name+'.df',shell=True)
	  subprocess.call('python extent_distribution.py \''+top_directory+'\' \''+name+'\'',shell=True)
	  subprocess.call('python free_space_fragmentation.py \''+name+'\'',shell=True)
