#!/bin/sh
cd /home/ec2-user/code
npm install
sudo CLOCKWORK_API_KEY=$(cat /opt/CLOCKWORK_API_KEY) npm start &
