#!/bin/bash

# Provision instance with necessary stuff on boot
#!/bin/bash
yum update -y
yum install -y wget vim ruby unzip
cd /opt
wget https://nodejs.org/dist/v8.10.0/node-v8.10.0-linux-x64.tar.xz
tar -xf node-v8.10.0-linux-x64.tar.xz
mv node-v8.10.0-linux-x64.tar.xz/bin/* /usr/local/bin/
cd /home/ec2-user
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
aws s3 cp s3://aws-codedeploy-us-west-1/latest/install .
chmod +x ./install
./install auto
