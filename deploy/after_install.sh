#!/bin/sh
cd /home/ec2-user/code
npm install
CLOCKWORK_API_KEY=${CLOCKWORK_API_KEY}
npm start
