import fs from 'fs';
import parse from 'csv-parse/lib/sync';
import initDynamoDB from './config';
import TargetedCollection from './model';

// Initialize AWS DynamoDb
initDynamoDB();

// Read the CSV file
const contents = fs.readFileSync(__dirname + '/data.csv', 'utf-8');
const data = parse(contents, { columns: true });

// Import it into DynamoDB
TargetedCollection.batchPut(data);
