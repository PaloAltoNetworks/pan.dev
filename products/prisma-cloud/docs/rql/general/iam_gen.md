---
id: iam_gen
title: IAM Security Queries - General
sidebar_label: IAM Queries - General
description: IAM Security Queries
hide_title: true
---

## Sample IAM Security RQL Queries

:::note
The following guide will walk you through IAM Security RQL Query Examples, based on the CIEM Module
:::

### Last accessed X days ago

```bash
config from iam where action.lastaccess.days > 5
```
