#script will install stable version of fio and some dependencies (libaio-devel unless installed this way wont work with fio)
echo "Welcome to installFIo">>./out/log.out

#First install deps
echo "Installing dependencies">>./out/log.out
yum install -y libaio-devel btrfs-progs

#Install fio from archive
echo "Installing fio">>./out/log.out
tar -zxf fio-2.13.tar.gz
cd fio-master
./configure
make
make install
