---
id: azure_app_svc
title: Azure App Service
sidebar_label: App Service
description: App Service
hide_title: true
---

## Sample Azure App RQL Queries

:::note
The following guide will walk you through Azure App Service RQL Query Examples
:::

### Azure App Service has no Vnet Integration
> App Service has no Vnet Integration. Azure Virtual Networks (VNets) allow you to place many of your Azure resources in a non-internet routable network.
> VNet Integration gives your app access to resources in your virtual network but does not grant inbound private access to your app from the VNet

```bash
config from cloud.resource where cloud.type = 'azure' AND api.name = 'azure-app-service' AND json.rule = config.vnetName is empty
```


### Azure App Service is not Geo-Redundant
> A multi-region architecture can provide higher availability than deploying to a single region. If a regional outage affects the primary region, you can use Front Door to fail over to the secondary region. This architecture can also help if an individual subsystem of the application fails.

```bash
config from cloud.resource where cloud.type = 'azure' AND api.name = 'azure-app-service' AND json.rule = properties.redundancyMode exists and properties.redundancyMode does not equal 'GeoRedundant'
```