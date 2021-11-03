'use strict';

// Declare dependencies
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

module.exports.handler = async (event) => {
  
  // Prepare Lambda response
  let response = {
    statusCode: 200,
    body: '{}',
    headers: {
        'Access-Control-Allow-Origin' : '*', 
        'Access-Control-Allow-Credentials' : true 
    }
  };
  
  // Access the id param from path
  let userId = event.pathParameters.id;

  // Build up DynamoDB params for Get item request
  let params = {
    TableName: process.env.USER_TABLE,
    Key: {
      id: Number(userId)
    }
  }

  let dynamoUser = await docClient.get(params).promise();

  response.body = JSON.stringify(dynamoUser.Item);
  
  return response;
};
