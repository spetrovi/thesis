#!/bin/bash
# vim: dict+=/usr/share/beakerlib/dictionary.vim cpt=.,w,b,u,t,i,k
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#
#   runtest.sh of /performance/recipe_fio
#   Description: Testing IO operations with multiple threads on different filesystems using given fio recipe
#   Author: Samuel Petrovic <spetrovi@redhat.com>
#
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#
#   Copyright (c) 2014 Red Hat, Inc.
#
#   This program is free software: you can redistribute it and/or
#   modify it under the terms of the GNU General Public License as
#   published by the Free Software Foundation, either version 2 of
#   the License, or (at your option) any later version.
#
#   This program is distributed in the hope that it will be
#   useful, but WITHOUT ANY WARRANTY; without even the implied
#   warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
#   PURPOSE.  See the GNU General Public License for more details.
#
#   You should have received a copy of the GNU General Public License
#   along with this program. If not, see http://www.gnu.org/licenses/.
#
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# Include Beaker environment
. /usr/bin/rhts-environment.sh || exit 1
. /usr/share/beakerlib/beakerlib.sh || exit 1



if [[ -n "${TEST_PARAM_RECIPE_FIO:+x}" ||  "$#" -gt 0 ]]; then  ## Fails if TEST_PARAM_RECIPE_FIO is unset or empty
    if [ "$#" -gt 0 ]; then
	FIOCMD="$@"
    else
	FIOCMD="$TEST_PARAM_RECIPE_FIO"
    fi
    
    ARGLIST=`getopt -o 's:n:r:' --long 'sync:,numjob:,recipe:' -n $0 -- $FIOCMD`
    if [ $? -ne 0 ]; then
	usage_msg;
	exit 1;
    fi
    eval set -- "${ARGLIST}"
    
    while true
    do
	echo ARGS $*
	case $1 in
            -s|--sync)        shift;    doRSYNC="$1";;
            -n|--numjob)      shift;    NUMJOB="$1";;
            -r|--recipe)      shift;    RECIPE="$1";;
	    -h|--help)		usage_msg;
    				exit 1;;
	    --)			break;;
    	esac
    	shift;
    done
fi


mkdir out
KERNELVERSION=$(uname -r)
TIME=$(date +%T)
DATE=$(date +"%b-%d-%Y")
HOSTNAME=$(hostname)
VAR=$(cat /etc/redhat-release)
RHEL=$(python func.py pv "${VAR}")
VAR=$(mount -v)
FSYSTEM=$(python func.py fs "${VAR}" "${RECIPE}")
RSYNC_SERVER="perf-desktop.brq.redhat.com::perf"
RSYNC_OPTIONS="-avz --no-owner --no-group --chmod=Da+r,a+w,a+X,Fa+r,a+w"
RESULTS_ROOT_DIRECTORY="/aging_fs/`hostname`/${KERNELVERSION}"
RESULT="./$TIME-$DATE-$FSYSTEM-$KERNELVERSION-$RHEL.tar.gz" 
RESULT=${RESULT//[[:space:]]/}

PACKAGE="recipe_fio"
echo "Running installFio">>./out/log.out
bash installFio.sh
echo "Running run_tests.py">>./out/log.out
python run_tests.py "${RECIPE}" "${NUMJOB}"
echo "Running gather_info.py">>./out/log.out
python gather_info.py "${VAR}" "${DEST}"
echo -n " --fsystem=$FSYSTEM" >> ./out/recipe

echo "Testing over, the result is: ">>./out/log.out
echo "$RESULT">>./out/log.out
tar zcvf $RESULT ./out
rhts_submit_log -S $RESULT_SERVER -T $TESTID -l $RESULT

cd out
echo "Sending output on server">>log.out
logs=${logs:-`ls *.out`}
for log in $logs;do
	rhts_submit_log -S $RESULT_SERVER -T $TESTID -l $log
done
cd ..

# check if there are any ressults, if yes then PASS and send logs to perf-desktop
if [[ ${doRSYNC} == 1  && -e out/OK ]]
  then
      RSYNC_DEST="${RSYNC_SERVER}/${RESULTS_ROOT_DIRECTORY}/"
      RSYNC_DEST=${RSYNC_DEST//[[:space:]]/}
      RSYNC_ARCH_COMMAND_LINE="rsync ${RSYNC_OPTIONS} ${RESULT} ${RSYNC_DEST}"
      ${RSYNC_ARCH_COMMAND_LINE}
      rhts-report-result $RESULT PASS "./out/log.out"
      rm -rf out
  else 
      rhts-report-result $RESULT FAIL "./out/log.out"
      rm -rf out
 fi  
 

