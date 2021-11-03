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

1. Run the 'Create User' request several times to create a few test users.
2. Run 'Get users' to see a list of all users.  Note the ID of one user for the next 2 commands.
3. Open 'Get user by id' and modify the id in the URL to a User ID (/users/{{user id}}).  Run the command to view one user.
4. Open 'Delete user' and modify the id in the URL to a User ID (/users/{{user id}}).  Run the command to delete one user. 
5. Re-run 'Get user' or 'Get user by id' to confirm the item has been removed.