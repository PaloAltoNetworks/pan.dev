---
id: gcp_gke
title: Google Kubernetes Engine
sidebar_label: GKE
description: Google Kubernetes Engine Queries
hide_title: true
---

## Sample GCP Kubernetes Engine RQL Queries

:::note
The following guide will walk you through GCP Kubernetes Engine RQL Examples
:::

### List Kubernetes clusters which have "Automatic node repair" disabled 

```bash
config from cloud.resource where api.name = 'gcloud-container-describe-clusters' AND json.rule = nodePools[*].management.autoRepair does not exists or nodePools[*].management.autoRepair any false 
```

### List Kubernetes clusters which have "Automatic node upgrades" disabled

```bash
config from cloud.resource where api.name = 'gcloud-container-describe-clusters' AND json.rule = nodePools[*].management.autoUpgrade does not exist or nodePools[*].management.autoUpgrade any false
```