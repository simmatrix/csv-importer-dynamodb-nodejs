import dynamoose from 'dynamoose';

const TargetedCollection = dynamoose.model('MyOwnCollectionName', {
  id: String,
  code: String
});

export default TargetedCollection;
