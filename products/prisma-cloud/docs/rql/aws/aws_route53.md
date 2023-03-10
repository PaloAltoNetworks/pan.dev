---
id: aws_route53
title: Route53
sidebar_label: Route53
description: AWS Route53 Queries
hide_title: true
---

## Sample AWS Route53 RQL Queries

:::note
The following guide will walk you through AWS Route53 RQL Query Examples
:::

### Dangling NS records in route 53

```bash
config from cloud.resource where api.name = 'aws-route53-list-hosted-zones' as X; config from cloud.resource where api.name = 'aws-route53-list-hosted-zones' as Y; filter "not ($.X.resourceRecordSet[*] size equals 0 or $.X.resourceRecordSet[?(@.type=='NS')].name == $.Y.hostedZone.name)"; show X;
```
