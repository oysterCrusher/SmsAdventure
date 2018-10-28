#!/bin/sh
cd /home/ec2-user/code
npm install
sudo npm stop
sudo CLOCKWORK_API_KEY=$(cat /opt/CLOCKWORK_API_KEY) sh -c "npm start > /var/log/npm"
