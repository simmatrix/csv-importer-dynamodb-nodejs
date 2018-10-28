import dynamoose from 'dynamoose';

const TestCollection = dynamoose.model('TestCollection', {
  id: String,
  code: String
});

export default TestCollection;
