---
id: home
title: Strata Cloud Manager APIs
description: Strata Cloud Manager introduction
hide_title: false
hide_table_of_contents: false
keywords:
  - Strata Cloud Manager
  - scm
---

With Strata Cloud Manager, you can easily manage and monitor your network security infrastructure ━ 
your NGFWs and SASE environment ━ from a single, streamlined user interface. The new platform gives 
you:

- Shared security policy for SASE and your NGFWs, and a unified view into security effectiveness.
- Best practice recommendations and workflows to strengthen security posture and eliminate risk.
- A common alerting framework that identifies network disruptions, so you can maintain optimal health and performance.
- Enhanced user experience, with contextual and interactive use-case driven dashboards and license-aware data enrichment.

The Strata Cloud Manager APIs extend this platform vision by providing a unified and consistent API 
framework that enable developers to build automation and integration solutions for
the Strata network security platform.

Strata Cloud Manager offers the following APIs:

### Shared Services
- [Tenancy Service](/scm/api/tenancy/tenancy-api)
- [Identity and Access Management Service](/scm/api/iam/iam-api)
- [Authentication Service](/scm/api/auth/auth-api)
- [Subscription Service](/scm/api/subscription/subscription-api)

### Configuration Management
  - [SASE](/scm/api/config/sase/operations/config-operations/)
  - [NGFW](/scm/api/config/ngfw/operations/config-operations/)
  - [Cloud NGFW](/scm/api/config/cloudngfw/operations/config-operations/)
  - [ZTNA Connector](/access/api/ztna/ztna-connector-apis/)
  - [Prisma SD-WAN](/sdwan/docs)

### Monitoring Services
- [Strata Insights](/access/docs/insights)
- [Aggregate Monitoring](/scm/docs/mt-monitor)
- [Multitenant Notifications](/scm/api/mt-notifications)
- [Autonomous DEM](/access/docs/adem)

All Strata Cloud Manager APIs leverage a common authentication and authorization framework. See [Getting Started](/scm/docs/getstarted) for details.


The use of these APIs are governed by the Palo Alto Networks
[End User License](https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/legal/palo-alto-networks-end-user-license-agreement-eula.pdf).
