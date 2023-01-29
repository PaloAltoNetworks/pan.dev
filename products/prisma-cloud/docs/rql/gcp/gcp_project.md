---
id: gcp_project
title: Google Project
sidebar_label: Google Project
description: Google Project Queries
hide_title: true
---

## Sample Google Project RQL Queries

:::note
The following guide will walk you through Google Project RQL Examples
:::

### List owners of GCP projects

```bash
config from cloud.resource where api.name  = 'gcloud-projects-get-iam-user' AND json.rule = roles[*] contains "owner"
```
