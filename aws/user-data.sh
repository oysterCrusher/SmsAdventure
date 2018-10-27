#!/bin/bash

# Provision instance with necessary stuff on boot
yum update -y
yum install -y wget vim ruby unzip git
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum install -y nodejs
cd /home/ec2-user
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
aws s3 cp s3://aws-codedeploy-us-west-1/latest/install .
chmod +x ./install
./install auto
