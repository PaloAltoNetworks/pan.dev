---
id: aws_cognito
title: Cognito
sidebar_label: Cognito
description: AWS Cognito Queries
hide_title: true
---

## Sample AWS Cognito RQL Queries

:::note
The following guide will walk you through AWS Cognito RQL Query Examples
:::

### Ensure Cognito Identity Pool exists

```bash
config from cloud.resource where cloud.type = 'aws' AND cloud.service = 'AWS Cognito' AND api.name = 'aws-cognito-identity-pool' AND json.rule = identityPoolName exists
```