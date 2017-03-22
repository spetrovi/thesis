#!/bin/bash
# vim: dict+=/usr/share/beakerlib/dictionary.vim cpt=.,w,b,u,t,i,k
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#
#   runtest.sh of /performance/drift_job
#   Description: Use fs-drift as workload generator to age file system. Create a metadata image and store.
#   Author: Samuel Petrovic <spetrovi@redhat.com>
#
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#
#   Copyright (c) 2017 Red Hat, Inc.
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

if [[ -n "${TEST_PARAM_DRIFT_JOB:+x}" ||  "$#" -gt 0 ]]; then  ## Fails if TEST_PARAM_DRIFT_JOB is unset or empty
    if [ "$#" -gt 0 ]; then
	DRIFTCMD="$@"
    else
	DRIFTCMD="$TEST_PARAM_DRIFT_JOB"
    fi   

    ARGLIST=`getopt -o 's:r:d:m:t:' --long 'sync:,recipe:,disk:,mountpoint:,tag:' -n $0 -- $DRIFTCMD`
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
            -r|--recipe)      shift;    RECIPE="$1";;
	    -d|--disk)        shift;    DISK="$1";;
       	    -m|--mountpoint)  shift;	MOUNTPOINT="$1";;
            -t|--tag)         shift;    TAG="$1";;
	    -h|--help)		usage_msg;
    				exit 1;;
	    --)			break;;
    	esac
    	shift;
    done
fi

if [[ -e /root/storagePASS ]] 
    then
	mkdir out
	python -c "execfile('func.py'); gather_info()"
	KERNELVERSION=$(uname -r)
	TIME=$(date +%T)
	DATE=$(date +"%b-%d-%Y")
	HOSTNAME=$(hostname)
	FSYSTEM=$(python -c "execfile('func.py'); get_fs('$MOUNTPOINT')")
	HOST=$(python -c "execfile('func.py'); nice_hostname('$HOSTNAME')")
	
	RESULT="./$(date '+%Y-%b-%d_%Hh%Mm%Ss')-drift_job-$FSYSTEM-$TAG"
	RESULT=${RESULT//[[:space:]]/}

	JOBID=$(python -c "execfile('func.py'); get_jobid()")

	PACKAGE="drift_job"
	echo "Extracting fs-drift">>./out/log.out
	tar -zxvf ./fs-drift.tar.gz
	echo "Running run_drift.py">>./out/log.out

	echo "run_drift.py -R ${RECIPE} -D ${DISK} -M ${MOUNTPOINT}"

	python run_drift.py -R ${RECIPE} -D ${DISK} -M ${MOUNTPOINT}
	  
	echo -n " --fsystem=$FSYSTEM" >> ./out/recipe #carefull
	
	echo -n "create image" >> ./out/log.out
	umount $DISK
	if [ "$FSYSTEM" == "ext4" ]
		then
			e2image -Q $DISK $RESULT.qcow2; bzip2 -z $RESULT.qcow2
		else
			xfs_metadump -o $DISK - |bzip2 > $RESULT
	fi
	#echo "$RESULT">>./out/log.out

	XZ_OPT=-T0 tar -Jcvhf $RESULT.tar.xz ./out
	rhts_submit_log -S $RESULT_SERVER -T $TESTID -l $RESULT

	echo -e "storage_info=`cat /root/generator_name.txt`\nbenchmark=fs_drift\nrecipe=${RECIPE}\nbuild=${DISTRO}\nkernel=${KERNELVERSION}\nhostname=${HOSTNAME}\nresult_time=${DATE}_${TIME}\nfilesystem=${FSYSTEM}\nmountpoint=\nwhiteboard={$BEAKER_JOB_WHITEBOARD}\n`rpm -q -i kernel-$(uname -r) | grep Source`\n" >> ${RESULT}.properties
	sestatus | grep "SELinux status" | echo "SELinux status="`awk '{print $3}'` >> ${RESULT}.properties
	sestatus | grep "Current mode:" | echo "Current mode="`awk '{print $3}'`  >> ${RESULT}.properties

	cd out
	echo "Sending output on server" >> log.out
	logs = ${logs:-`ls *.out`}
	for log in $logs;do
		rhts_submit_log -S $RESULT_SERVER -T $TESTID -l $log
	done
	cd ..

	RSYNC_SERVER="saturnv.tpb.lab.eng.brq.redhat.com::perf"
	RESULTS_ROOT_DIRECTORY="${KERNELVERSION}_${DISTRO}/"
	  
	# check if there are any results, if yes then PASS and send logs to perf-desktop
	if [[ ${doRSYNC} == 1  && -e ./out/log.out ]]
	  then
               RSYNC_OPTIONS=" -az --no-owner --no-group --recursive --chmod=a+r,a+w,a+X"
	       #crete directories for sync
	       TMPD=$(mktemp -d -t)
	       rsync ${RSYNC_OPTIONS} ${TMPD}/ ${RSYNC_SERVER}/fsage_thesis/${RESULTS_ROOT_DIRECTORY}
	       rsync ${RSYNC_OPTIONS} ${TMPD}/ ${RSYNC_SERVER}/fsage_thesis/${RESULTS_ROOT_DIRECTORY}/${JOBID}_${HOST}
	       rsync ${RSYNC_OPTIONS} ${TMPD}/ ${RSYNC_SERVER}/fsage_thesis/${RESULTS_ROOT_DIRECTORY}/images

	       rsync ${RSYNC_OPTIONS} *.bz2 ${RSYNC_SERVER}/fsage_thesis/${RESULTS_ROOT_DIRECTORY}/images

	       RSYNC_DEST="${RSYNC_SERVER}/fsage_thesis/${RESULTS_ROOT_DIRECTORY}/${JOBID}_${HOST}"
	       RSYNC_DEST=${RSYNC_DEST//[[:space:]]/}
	       echo "${RSYNC_DEST}" > /tmp/rsync_dest
	       rsync ${RSYNC_OPTIONS} $RESULT.tar.xz ${RSYNC_DEST}
	       rsync ${RSYNC_OPTIONS} $RESULT.properties ${RSYNC_DEST}
	       
	       
       	       rhts-report-result $RESULT PASS "./out/log.out"
	       rm -rf out
	  else 
	      rhts-report-result $RESULT FAIL "./out/log.out"
	      rm -rf out
	 fi  
   else
        echo "No storagePASS, exiting" >> faillog.out   
        rhts-report-result "drift_job" FAIL "faillog.out"
        exit 
fi

#every so often asynchronously store fragmenation info?





