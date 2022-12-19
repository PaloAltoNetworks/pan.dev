---
id: azure_storage
title: Azure Storage
sidebar_label: Azure Storage
description: Azure Storage
hide_title: true
---

## Sample Azure Storage RQL Queries

:::note
The following guide will walk you through Azure Storage RQL Query Examples
:::

### Azure Storage Not Geo-Redundant
> The storage is not Geo-redundant. Your data is not durable in the case of a complete regional outage or a disaster in which the primary region is not recoverable

```bash
config from cloud.resource where cloud.type = 'azure' AND api.name = 'azure-storage-account-list' 
AND json.rule = properties.secondaryLocation does not exist
```
