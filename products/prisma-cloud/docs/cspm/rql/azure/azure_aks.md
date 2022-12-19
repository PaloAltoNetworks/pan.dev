---
id: azure_aks
title: Azure Kubernetes Service
sidebar_label: AKS
description: AKS
hide_title: true
---

## Sample Azure AKS RQL Queries

:::note
The following guide will walk you through Azure Kubernetes Service RQL Query Examples
:::

### Authorized IPs that will connect to the cluster are not set

```bash
config from cloud.resource where cloud.type = 'azure' AND api.name = 'azure-kubernetes-cluster' AND json.rule = properties.apiServerAuthorizedIPRanges does not exist or properties.apiServerAuthorizedIPRanges is empty
```
### Pod Security Policies are not used

```bash
config from cloud.resource where cloud.type = 'azure' AND api.name = 'azure-kubernetes-cluster' AND json.rule = properties.enablePodSecurityPolicy does not exist or properties.enablePodSecurityPolicy is false
```

### AKS cluster not integrated with AAD

```bash
config from cloud.resource where cloud.type = 'azure' AND api.name = 'azure-kubernetes-cluster' AND json.rule = properties.aadProfile exists
```