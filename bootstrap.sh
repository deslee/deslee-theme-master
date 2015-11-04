#!/usr/bin/env bash

apt-get update
apt-get install -y git
wget https://nodejs.org/dist/v5.0.0/node-v5.0.0-linux-x86.tar.gz
tar -xvf node-v5.0.0-linux-x86.tar.gz
cd node-v5.0.0-linux-x86
rm CHANGELOG.md LICENSE README.md
rsync -avi ./* /usr