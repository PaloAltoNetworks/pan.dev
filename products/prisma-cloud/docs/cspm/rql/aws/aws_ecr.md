---
id: aws_ecr
title: Amazon Elastic Container Registry
sidebar_label: ECR
description: Amazon Elastic Container Registry Queries
hide_title: true
---

## Sample AWS ECR RQL Queries

:::note
The following guide will walk you through Amazon Elastic Container Registry RQL Query Examples
:::

### ECR has images with vulnerabilities 

```bash
config from cloud.resource where api.name = 'aws-ecr-image' AND json.rule = imageScanFindingsSummary exists 
```