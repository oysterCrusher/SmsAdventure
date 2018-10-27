#!/bin/bash

# Provision instance with necessary stuff on boot
yum update -y
yum install -y wget vim ruby
cd /opt
wget https://nodejs.org/dist/v8.10.0/node-v8.10.0-linux-x64.tar.xz
tar -xf node-v8.10.0-linux-x64.tar.xz
cd /home/ec2-user
aws s3 cp s3://aws-codedeploy-us-west-1/latest/install .
chmod +x ./install
./install auto
