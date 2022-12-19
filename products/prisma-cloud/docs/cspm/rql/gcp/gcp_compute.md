---
id: gcp_compute
title: Compute Engine
sidebar_label: Compute Engine
description: GCP Compute Engine Queries
hide_title: true
---

## Sample GCP Compute RQL Queries

:::note
The following guide will walk you through GCP Compute Engine RQL Examples
:::

### List terminated Compute instances

```bash
config from cloud.resource where api.name = 'gcloud-compute-instances-list'  and json.rule = status contains TERMINATED
```

### List VPC subnetworks which are in use	

```bash
config from cloud.resource where api.name = 'gcloud-compute-instances-list' as X; config from cloud.resource where api.name = 'gcloud-compute-networks-subnets-list' as Y; filter '$.X.networkInterfaces[*].subnetwork contains $.Y.selfLink'; show Y;
 ```

### List VPC subnetworks which are NOT in-use

```bash
config from cloud.resource where api.name = 'gcloud-compute-instances-list' as X; config from cloud.resource where api.name = 'gcloud-compute-networks-subnets-list' as Y; filter 'not ($.X.networkInterfaces[*].subnetwork contains $.Y.selfLink)'; show Y; 
```

### Find subnetworks that do not have VPC flow logs enabled and Compute instances can forward IP's

```bash
config from cloud.resource where api.name = 'gcloud-compute-networks-subnets-list' AND json.rule = enableFlowLogs does not exist or enableFlowLogs is false as X; config from cloud.resource where api.name = 'gcloud-compute-instances-list' AND json.rule = canIpForward is true as Y; filter ' $.Y.networkInterfaces[*].network contains $.X.network '; show X;
```

### Find Compute instances with OS-Login enabled
```bash
config from cloud.resource where api.name = 'gcloud-compute-project-info' AND json.rule = "commonInstanceMetadata.items[?(@.key=='enable-oslogin' && @.value=='TRUE')] exists" 
```
