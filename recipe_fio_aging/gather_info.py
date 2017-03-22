#This script will gather general info about tested system and save it to "out" folder
#Note: this script should be executed after makeConfig.sh to succesfully report example of fio config
import subprocess, sys, glob


subprocess.call('sysctl -a > ./out/kernel_info',shell=True)
subprocess.call('fdisk -l > ./out/disk_info',shell=True)
subprocess.call('mount -v > ./out/mount_info',shell=True)
subprocess.call('uname -a > ./out/system_info',shell=True)
subprocess.call('cat /../proc/meminfo > ./out/proc_mem_info',shell=True)
subprocess.call('cat /../proc/cpuinfo > ./out/cpu_info',shell=True)
subprocess.call('printenv > ./out/system_variable',shell=True)
fioVer = glob.glob('fio*.tar.gz')
fioVer = fioVer[0][:-7]
f = open('./out/fioVer', 'w+')
f.write(fioVer)
f.close
