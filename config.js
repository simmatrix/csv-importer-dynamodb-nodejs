import dynamoose from 'dynamoose';

const initDynamoDB = () => {
  dynamoose.AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-west-2'
  });
};

export default initDynamoDB;
