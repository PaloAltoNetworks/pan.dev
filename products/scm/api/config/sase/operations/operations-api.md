---
id: operations-api
title: Configuration Operations APIs
sidebar_label: Configuration Operations APIs
keywords:
  - Strata Cloud Manager
  - Configuration
  - Objects
  - Reference
  - API
---

The Operations APIs are used to manage Strata Cloud Manager configurations. You use these APIs to
create candidate configurations, load configuration versions, push configurations, and manage
configuration jobs.

To configure your Strata Cloud Manager-managed tenant, use the platform configuration APIs to
create a _candidate_ configuration. Once you have finished creating your candidate configuration,
[push the candidate](/scm/api/config/sase/operations/push-candidate-config-versions/).
This creates a configuration job. Once that job has finished, the candidate configuration becomes
the _running_ configuration.

These APIs use the [common authentication mechanism](/scm/docs/getstarted) for service access and authorization.
