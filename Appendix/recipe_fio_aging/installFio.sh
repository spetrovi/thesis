#script will install stable version of fio and some dependencies (libaio-devel unless installed this way wont work with fio)
echo "Welcome to installFIo">>./out/log.out

#First install deps
echo "Installing dependencies">>./out/log.out
yum install -y libaio-devel btrfs-progs
yum install -y zlib-devel.x86_64

#Install fio from archive
echo "Installing fio">>./out/log.out
tar -Jxf ./fio.tar.xz
cd fio
./configure
make
make install
