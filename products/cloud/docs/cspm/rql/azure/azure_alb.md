---
id: azure_alb
title: Azure Load Balancer
sidebar_label: ALB
description: ALB
hide_title: true
---

## Sample Azure ALB RQL Queries

:::note
The following guide will walk you through Azure Load Balancer RQL Query Examples
:::

### ALB Networking Load Balancer Health Probe Missing
> When using load-balancing rules with Azure Load Balancer, you need to specify health probes to allow Load Balancer to detect the backend endpoint status.
> The configuration of the health probe and probe responses determine which backend pool instances will receive new flows

```bash
config from cloud.resource where cloud.type = 'azure' AND api.name = 'azure-network-lb-list' AND json.rule = ['properties.probes'][*] does not exist
```