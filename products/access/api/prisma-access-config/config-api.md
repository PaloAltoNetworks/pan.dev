---
id: config-api
title: Prisma Access Configuration APIs
sidebar_label: Prisma Access Configuration APIs
slug: /access/api/prisma-access-config
keywords:
  - SASE
  - Reference
  - API
---

Welcome to the Prisma Access Configuration APIs. To use these APIs, you must be a new Managed
Security Service Provider (MSSP) customer as of March 2022 and must have configured your multitenant
hierarchy for a new deployment of Prisma Access.

All of the functionality exposed by these APIs can also be performed using the
[Prisma Access user interface](https://docs.paloaltonetworks.com/prisma/prisma-access/prisma-access-cloud-managed-admin.html).

These APIs use the [common SASE authentication](/sase/docs/getstarted) for service access and authorization.

To configure your Prisma Access Cloud Managed tenant, use the configuration APIs described here to
create a _candidate_ configuration. Once you have finished creating your candidate configuration,
[push the candidate](/access/api/prisma-access-config/post-sse-config-v-1-config-versions-load).
This creates a configuration job. Once that job has finished, the candidate configuration becomes
the _running_ configuration.

An API exists to
[show the running configuration](/access/api/prisma-access-config/get-sse-config-v-1-config-versions-running/).
If you make a mistake creating your candidate configuration, you can
[rollback to the running configuration](/access/api/prisma-access-config/delete-sse-config-v-1-config-versions-candidate).
