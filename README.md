# Server name here
[![Dependency Status](https://david-dm.org/blumoon/hapi-boilerplate.svg)](https://david-dm.org/blumoon/hapi-boilerplate)
[![Known Vulnerabilities](https://snyk.io/test/github/blumoon/hapi-boilerplate/badge.svg)](https://snyk.io/test/github/blumoon/hapi-boilerplate)

Server description here

### Development
Fix the package name first before installing dependencies.

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

Remove `private: true` on `package.json` to publish.
