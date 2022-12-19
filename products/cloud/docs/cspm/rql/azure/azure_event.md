---
id: azure_event
title: Azure Event Queries
sidebar_label: Azure Events
description: Azure Event Queries
hide_title: true
---

## Sample Azure Events RQL Queries

:::note
The following guide will walk you through Azure Event RQL Query Examples, based on audit logs
:::

### Alert on suspicious Azure RDP login events

```bash
event from cloud.audit_logs where cloud.type = 'azure' AND operation IN ( 'Activate Alert (Suspicious incoming RDP network activity from multiple sources)', 
'Activate Alert ((Preview) Remote Desktop Login from unusual location)' )
```