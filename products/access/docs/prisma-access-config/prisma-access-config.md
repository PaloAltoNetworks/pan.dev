---
id: prisma-access-config
title: Welcome to Prisma Access Configuration APIs
description: Prisma Access Configuration APIs
hide_title: false
hide_table_of_contents: false
slug: /access/docs/prisma-access-config
keywords:
  - sase
---

Welcome to the Prisma Access Configuration APIs. These APIs are available to Prisma Access tenants that utilize
Prisma Access Cloud Management for service onboarding, configuration, and operations. Panorama managed tenants
will continue to utilize the [Prisma Access APIs for Panorama](https://docs.paloaltonetworks.com/prisma/prisma-access/prisma-access-panorama-admin/prisma-access-overview/prisma-access-apis).

The Prisma Access Configuration APIs use [Authentication Service](/sase/api/auth) for API authorization and access.
After you obtain an [access token](/sase/docs/access-tokens),
you can use these APIs to configure your Prisma Access deployments.

Generally, to perform a configuration change, you issue one or more configuration
changes using the [configuration APIs](/access/api/prisma-access-config). This creates
a _candidate_ configuration. Once you have completed creating your candidate configuration,
you can [push your candidate](/access/api/prisma-access-config/post-sse-config-v-1-config-versions-candidate-push). This creates a [configuration job](/access/api/prisma-access-config/get-sse-config-v-1-jobs-id).
Once this job is complete, your candidate configuration becomes your _running_ configuration.
