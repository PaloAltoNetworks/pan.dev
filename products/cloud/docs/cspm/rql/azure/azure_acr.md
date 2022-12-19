---
id: azure_acr
title: Azure Container Registry
sidebar_label: ACR
description: ACR
hide_title: true
---

## Sample Azure ACR RQL Queries

:::note
The following guide will walk you through Azure Container Registry RQL Query Examples
:::

### Azure ACR with an enabled admin user (i.e. not using AD)

```bash
config from cloud.resource where cloud.type='azure' and api.name= 'azure-container-registry' AND json.rule = properties.adminUserEnabled is false
```