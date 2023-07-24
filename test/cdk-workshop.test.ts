import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as CdkWorkshop from '../lib/cdk-workshop-stack';

test('SQS Queue and SNS Topic Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkWorkshop.CdkWorkshopStack(app, 'MyTestStack');
  // THEN
});
