---
id: aws_iam
title: IAM Security Queries for AWS
sidebar_label: IAM Queries - AWS
description: IAM Security Queries
hide_title: true
---

## Sample IAM Security RQL Queries

:::note
The following guide will walk you through IAM Security RQL Query Examples, based on the CIEM Module
:::

### IAM identities that can delete DynamoDB tables

```bash
config from iam where action.name = 'dynamodb:DeleteTable'
```

### IAM identities with AWS AdminAccess Policy assigned

```bash
config from iam where grantedby.cloud.policy.type = 'AWS Managed Policy' AND 
grantedby.cloud.policy.name = 'AdministratorAccess'
```

### Risky AWS actions assigned to subject

```bash
config from iam where action.name IN ( 'iam:CreateUser' , 'iam:AttachGroupPolicy' , 'iam:UpdateUser' , 'iam:DeleteVirtualMFADevice' )
```

### Identify Lambda functions that can delete S3 buckets

```bash
config from iam where dest.cloud.service.name = 's3' AND action.name IN ( 's3:deletebucket') and source.cloud.service.name = 'lambda'
```
