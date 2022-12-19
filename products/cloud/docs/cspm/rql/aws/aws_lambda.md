---
id: aws_lambda
title: AWS Lambda
sidebar_label: Lambda
description: AWS Lambda Queries
hide_title: true
---

## Sample AWS Lambda RQL Queries

:::note
The following guide will walk you through AWS Lambda RQL Query Examples
:::

### Unprotected (without a Compute Defender) Internet-accessible active AWS Lambda functions

```bash
config from cloud.resource where resource.status = Active AND api.name = 'aws-lambda-list-functions' 
AND json.rule = vpcConfig does not exist and handler does not equal "twistlock.handler" 
and environment.variables does not contain "TW_POLICY"
```