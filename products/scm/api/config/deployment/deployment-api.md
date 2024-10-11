---
id: deployment-api
title: Network Deployment APIs
sidebar_label: Network Deployment
keywords:
  - Strata Cloud Manager
  - Configuration
  - Deployment
  - Reference
  - API
---

Welcome to the Configuration Deployment APIs. You use these APIs to configure your deployments.
Here, you can configure:

* [Application Defaults](/scm/api/config/deployment/create-application-defaults/)
* [Bandwidth Allocations](https://docs.paloaltonetworks.com/prisma-access/administration/prisma-access-remote-networks/allocate-remote-network-bandwidth)
* [BGP Routing](https://docs.paloaltonetworks.com/ngfw/administration/set-up-firewalls/routing-and-interfaces/configure-routing-profiles/configure-a-bgp-filtering-profile)
* [Internal DNS Servers](https://docs.paloaltonetworks.com/prisma-access/administration/prisma-access-setup/dns-for-prisma-access)
* [Network Locations](https://docs.paloaltonetworks.com/prisma/prisma-access/3-2/prisma-access-panorama-admin/prepare-the-prisma-access-infrastructure/list-of-prisma-access-locations)
* [Remote Networks](https://docs.paloaltonetworks.com/prisma-access/administration/prisma-access-remote-networks)
* [Service Connections and Service Connection Groups](https://docs.paloaltonetworks.com/prisma-access/administration/prisma-access-service-connections/configure-a-service-connection)
* [Shared Infrastructure Settings](https://docs.paloaltonetworks.com/prisma-access/administration/prisma-access-setup/configure-the-prisma-access-service-infrastructure)
* [Sites](/scm/api/config/deployment/list-sites/)
* [Traffic Steering Rules](https://docs.paloaltonetworks.com/prisma/prisma-access/3-2/prisma-access-panorama-admin/prisma-access-advanced-deployments/service-connection-advanced-deployments/use-traffic-forwarding-rules-with-service-connections/configure-traffic-steering)

These APIs use the [common authentication mechanism](/scm/docs/getstarted) for service access and authorization.

You must use the [Configuration Operations API](/scm/api/config/operations/operations-api) to push
configurations made using these APIs to your deployments.
