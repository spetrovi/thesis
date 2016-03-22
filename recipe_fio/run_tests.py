$ cat run_tests.py 
#/bin/python
#Tests generates workloads using fio(flexible input/output tool).
#These tests are aimed at testing loads with multiple threads
#script takes recipe in *-* format and desired number of iterations
#TODO add name of lvm group as new parameter

import os, subprocess, sys, logging
logging.basicConfig(filename='./out/log.out',level=logging.DEBUG)

recipe=sys.argv[1]
numjob=sys.argv[2]

recipe = recipe.split('-')

recipeString = ""
for i in range (0,len(recipe)):
  recipeString = recipeString + ' --'+recipe[i]
  if recipe[i].find('directory=') == 0:
    dest = recipe[i][10:]
    
  if recipe[i].find('filename=') == 0:
    dest = '/' + recipe[i][10:-6]

subprocess.call("echo -n "+recipeString+" >> ./out/recipe",shell=True)

for i in range(0,int(numjob)):					
	 test ='fio' + recipeString + ' --write_bw_log=./out/job_' + str(i) + ' --output=./out/job_'+str(i)+'.out'
	 logging.info('initializing')
	 mkdir = "mkdir " + dest
	 rmdir = "rm -rf " + dest
	 #subprocess.call(mkdir, shell=True)
	 subprocess.call('umount '+dest+'; rm -rf '+dest,shell=True)
	 subprocess.call('mke2fs -t ext4 /dev/mapper/agingfs_group-agingfs_50g ; mkdir '+dest+'; mount /dev/mapper/agingfs_group-agingfs_50g '+dest,shell=True)
	 logging.info(test)
	 subprocess.call(test,shell=True)	
	 #subprocess.call(rmdir,shell=True)
	 #subprocess.call('umount '+dest+'; rm -rf '+dest,shell=True)
	 logging.info('test over')
	 
logging.info('All jobs iterated, script ends')
subprocess.call("touch ./out/OK",shell=True)