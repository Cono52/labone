#!/bin/bash

#install Node.js
if [[ $(node -v) = *v* ]]; then
	echo "node is installed"
else
	echo " Couldn't find node installation...INSTALLING"
	curl https://deb.nodesource.com/setup_6.x | sudo -E bash -
	sudo apt-get install -y nodejs
fi
printf "\n\n"

#run server
node client text 
