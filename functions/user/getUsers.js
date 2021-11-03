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
  
  let params = {
    TableName: process.env.USER_TABLE
  }

  let dynamoUsers = await docClient.scan(params).promise();

  response.body = JSON.stringify(dynamoUsers.Items);
  
  return response;
};
