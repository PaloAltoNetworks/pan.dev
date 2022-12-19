---
id: aws_guardduty
title: Guardduty
sidebar_label: Guardduty
description: AWS Guardduty Queries
hide_title: true
---

## Sample AWS Guardduty RQL Queries

:::note
The following guide will walk you through AWS Guardduty RQL Query Examples
:::

### AWS Guardduty Host looking for Trojan using Blackholed DNS traffic

```bash
config from cloud.resource where finding.type = 'AWS GuardDuty Host' AND finding.name = 'Trojan:EC2/BlackholeTraffic!DNS'
```