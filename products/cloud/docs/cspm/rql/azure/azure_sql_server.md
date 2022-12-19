---
id: azure_sql_server
title: Azure SQL Server
sidebar_label: SQL Server
description: SQL Server
hide_title: true
---

## Sample Azure SQL Server RQL Queries

:::note
The following guide will walk you through Azure SQL Server RQL Query Examples
:::

### SQL Servers not using firewall rules
> Lock down your SQL Servers to a subset of resources / limit accessibility

```bash
config from cloud.resource where cloud.type = 'azure' AND api.name = 'azure-sql-server-list' AND json.rule = firewallRules is empty
```