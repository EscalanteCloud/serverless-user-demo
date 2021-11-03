# serverless-user-demo
An example project for demonstrating Serverless Framework for manipulating users stored in DynamoDB in AWS.

## Prerequisites
1. NodeJS 14 or higher w/ NPM (https://nodejs.org/en/download/)
2. Serverless Framework (https://www.serverless.com/framework/docs/providers/aws/guide/installation)
3. AWS CLI configured with profile (https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

## Setup
`npm i`

## Run locally
`sls offline`

## Deploy to AWS
`sls deploy --stage {dev|test|prod} --aws-profile {aws_profile_name}`

## Testing
Import the postman collection from the postman folder included in the project.  Once imported, modify the collection and change the base_api variable to the appropriate value (http://localhost:3000 for local) or the provided API base URL AWS generates on a successful deploy.