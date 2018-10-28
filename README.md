# CSV Importer for AWS DynamoDB with NodeJS

## Setup

- Make sure to have created your table (collection) in DynamoDB AWS Management Console
- Update your collection name in `model.js` (Rename `MyOwnCollectionName` to your own collection's name)
- Key in your AWS credentials in `config.js`
- Update the file `data.csv` with the data you wish to import
- Run `npm install` (FYI, the Node version I used to build this is v10.11.0)
- Run `babel-node index.js`

## Common Issues

- When running `babel-node index.js`, if you encounter the error of missing region in config for AWS, do run `export AWS_SDK_LOAD_CONFIG=1` in your terminal, else whatever that you have set in `config.js` file won't take effect.

## Side Note

- As ES6 is being used, hence when running the script, please use `babel-node index.js` instead of the typical `node index.js`
- Dynamoose is being used to deal with AWS DynamoDB. Dynamoose is inspired by Mongoose, which is used for MongoDB.
