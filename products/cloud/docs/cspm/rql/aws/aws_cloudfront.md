---
id: aws_cloudfront
title: CloudFront
sidebar_label: CloudFront
description: AWS CloudFront Queries
hide_title: true
---

## Sample AWS CloudFront RQL Queries

:::note
The following guide will walk you through AWS CloudFront RQL Query Examples
:::

### AWS Cloudfront Distribution with S3 have Origin Access set

```bash
config from cloud.resource where cloud.type = 'aws' AND api.name = 'aws-cloudfront-list-distributions' AND json.rule = 'origins.items[*].s3OriginConfig exists and origins.items[*].s3OriginConfig.originAccessIdentity is empty'
```