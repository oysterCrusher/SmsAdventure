Read me. Please.

On a new server:
- run `user-data.sh` in aws/ folder from repo
- `sudo sh -c "echo -e SMS_PORT=80\nCLOCKWORK_API_KEY=23d33dcc233882e10a9817b752a09b3fd0d409f0 >> /etc/environment"`

Deployment:
- Get access keys for your IAM user from the console
- go to ~/.aws/credentials and add something like

[sms-server]
aws_access_key_id = AKIAhfhfkhsfjkdkfjkd
aws_secret_access_key = Vfoifjeirofjerifjreiofjroijfirojf

  to deploy:

 [you@box:git-repo]$  NEWEST_COMMIT=$(git log | awk 'NR==1{print $2}') ; aws --region eu-west-1 --profile sms-server deploy create-deployment --application-name sms-server --deployment-config-name CodeDeployDefault.AllAtOnce --deployment-group-name sms-server-ec2 --description "Third attempt" --github-location repository=oysterCrusher/SmsAdventure,commitId=${NEWEST_COMMIT}
{

