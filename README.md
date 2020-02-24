# Server name here 
Server description here

### Development
Put sensitive dev keys and local configs to `/config.json` which is merged inside `/config.js`. All keys must be on first level.
```json
{
  "awsAccessKeyId": "AWSACCESSKEYID",
  "awsSecretAccessKey": "aWsS3crEtAcCes5KEy",
  "appIndex": "http://localhost:8080",
  "s3Bucket": "porns"
}
```
Recomended code change watcher is [nodemon](https://nodemon.io/).
```shell
npm install -g nodemon
nodemon .
```

### Deployment
Includes `ebs/.ebextensions` for AWS Elastic Beanstalk archives
