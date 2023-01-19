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

Welcome to the Prisma Access Configuration APIs. These APIs are available to Prisma Access tenants
that utilize Prisma Access Cloud Management for service onboarding, configuration, and operations.
Panorama managed tenants will continue to utilize the
[Prisma Access APIs for Panorama](https://docs.paloaltonetworks.com/prisma/prisma-access/prisma-access-panorama-admin/prisma-access-overview/prisma-access-apis).

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
