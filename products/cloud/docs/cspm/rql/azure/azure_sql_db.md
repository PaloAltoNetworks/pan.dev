---
id: azure_sql_db
title: Azure SQL DB
sidebar_label: SQL DB
description: SQL DB
hide_title: true
---

## Sample Azure SQL DB RQL Queries

:::note
The following guide will walk you through Azure SQL DB RQL Query Examples
:::

### SQL Databases not using active geo-replication
> Active Geo-Replication enables the configuration of up to four (4) readable secondary databases in the same or different regions.
> Secondary databases are available in the case of a service disruption or the inability to connect to the primary database

```bash
config from cloud.resource where cloud.type = 'azure' AND api.name = 'azure-sql-db-list' 
AND json.rule = sqlDatabase.properties.defaultSecondaryLocation exists and sqlDatabase.properties.defaultSecondaryLocation is not empty
```
