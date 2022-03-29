---
id: config-api
title: Prisma Access Configuration APIs
sidebar_label: Prisma Access Configuration APIs
slug: /api/prisma-access-config
keywords:
  - SASE
  - Reference
  - API
---
<head>
  <meta name="robots" content="noindex"/>
</head>

## Preview Documentation

** This documentation is in an early preview state. It is subject to change without notice. **

## Early Access Preview ##

Welcome to the Prisma Access Configuration APIs. **These APIs are in an early access
preview state.** As such, actual usage of these APIs is not yet generally available.

This documentation is subject to change without notice.

All of the functionality exposed by these APIs can also be performed using the 
[Prisma Access user interface](https://docs.paloaltonetworks.com/prisma/prisma-access/prisma-access-cloud-managed-admin.html).

These APIs use the [SASE Services](/sase-services/docs) for service access and authorization. 

To configure your Prisma Access Cloud Managed tenant, use the configuration APIs described here to
create a _candidate_ configuration. Once you have finished creating your candidate configuration,
[push the candidate](/sase/api/prisma-access-config/configuration-management#operation/post-config-v1-config-versions-running-push).
This creates a configuration job. Once that job has finished, the candidate configuration becomes
the _running_ configuration.

An API exists to 
[show the running configuration](/sase/api/prisma-access-config/configuration-management#operation/get-config-v1-config-versions-candidate). 
If you make a mistake creating your candidate configuration, you can 
[rollback to the running configuration](/sase/api/prisma-access-config/configuration-management#operation/delete-config-v1-config-versions-candidate).

