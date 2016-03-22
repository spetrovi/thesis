#If argument pv and cat /etc/redhat-release provided, script prints RHEL version
#If argument fs, output from "mount -v" and partition provided, script prints fileSystem name
import  re,sys, logging, subprocess

def parseVersion(str):
    str=re.sub('[^0-9.]','',str)
    output="RHEL-" + str
    return output


def fileSystem(fs,recipe):
    dest = filter(lambda x: x.split('=')[0] == 'directory' or x.split('=')[0] == 'filename', recipe.split('-'))[0].split('=')[1].split('/')[1]
    string = dest + " type "
    output = ""
    i = fs.find(string)+len(string)
    while (fs[i] != " "):	
      output += fs[i]
      i += 1;
      
    block = ""
    i = fs.find(dest[1:]) - 9
    while (fs[i] != ' '):
	block += fs[i]
	i += 1;
    block = block[:len(block)-1]
    elevator = "cat /sys/block/" + block + "/queue/scheduler > ./out/elevator"
    logging.info("elevator: " + elevator)
    subprocess.call(elevator, shell=True)
    return output

logging.basicConfig(filename='./out/log.out',level=logging.DEBUG)

#logging.info("Welcome to func.py, we have obtained these arguments:")
#for i in range (0, len(sys.argv)):
    #logging.info(sys.argv[i])
    
if (sys.argv[1] == "pv"):
    version=sys.argv[2]
    print parseVersion(version)
 
if (sys.argv[1] == "fs"): 
    fs = sys.argv[2]
    recipe = sys.argv[3]
    fsystem = fileSystem(fs, recipe)
    print fsystem