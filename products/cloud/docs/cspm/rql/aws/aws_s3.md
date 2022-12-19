---
id: aws_s3
title: S3
sidebar_label: S3
description: AWS S3 rql
hide_title: true
---

## Sample AWS S3 RQL Queries

:::note
The following guide will walk you through AWS RQL Query Examples
:::

### S3 public bucket and exclude buckets with tag key is "DataClassification" and tag value is "Public"

```bash
config from cloud.resource where cloud.type = 'aws' AND api.name='aws-s3api-get-bucket-acl' AND 
json.rule = "((((acl.grants[?(@.grantee=='AllUsers')] size > 0) or policyStatus.isPublic is true) 
and publicAccessBlockConfiguration does not exist and accountLevelPublicAccessBlockConfiguration does not exist) or 
((acl.grants[?(@.grantee=='AllUsers')] size > 0) and ((publicAccessBlockConfiguration.ignorePublicAcls is false and 
accountLevelPublicAccessBlockConfiguration does not exist) or (publicAccessBlockConfiguration does not exist and 
accountLevelPublicAccessBlockConfiguration.ignorePublicAcls is false) or 
(publicAccessBlockConfiguration.ignorePublicAcls is false and 
accountLevelPublicAccessBlockConfiguration.ignorePublicAcls is false))) or 
(policyStatus.isPublic is true and ((publicAccessBlockConfiguration.restrictPublicBuckets is false and 
accountLevelPublicAccessBlockConfiguration does not exist) or (publicAccessBlockConfiguration does not exist and 
accountLevelPublicAccessBlockConfiguration.restrictPublicBuckets is false) or 
(publicAccessBlockConfiguration.restrictPublicBuckets is false and 
accountLevelPublicAccessBlockConfiguration.restrictPublicBuckets is false)))) and websiteConfiguration does not exist 
and tagSets.DataClassification != Public"
```

### S3 buckets connected to Cloudfront distribution

```bash
config from cloud.resource where api.name = 'aws-cloudfront-list-distributions' as X; config from cloud.resource where api.name = 'aws-s3api-get-bucket-acl' as Y; filter '$.X.origins.items[*].id contains $.Y.bucketName'; show Y;
```

### S3 buckets that have PUT actions with ALLOW effects to external AWS accounts (that are not monitored by Prisma Cloud)

```bash
config from cloud.resource where api.name='aws-s3api-get-bucket-acl' AND json.rule = policy.Statement[*].Principal.AWS[*] exists and _AWSCloudAccount.isRedLockMonitored(policy.Statement[*].Principal.AWS[*]) is false and policy.Statement[?(@.Effect=='Allow')].Action any equal s3:PutObject
```