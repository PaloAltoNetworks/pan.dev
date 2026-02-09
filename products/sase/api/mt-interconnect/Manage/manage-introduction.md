---
id: manage-introduction
title: Multitenant Interconnect Manage APIs
sidebar_label: Multitenant Interconnect Manage APIs
keywords:
  - SASE
  - Reference
  - API
---

The **SP Interconnect Manage** API allows you to configure and manage the lifecycle of your service provider connectivity. 

## Key Management Functions
* **Interconnect Models**: Configure **Shared Interconnects** for multi-tenant egress or **Per-Tenant Interconnects** for isolated child tenant ingress.
* **VlanAttachment Lifecycle**: Provision virtual circuits within specific regions and retrieve **Vlan Pairing Keys** for co-location providers.
* **IP Pool Management**: Manage **IPPools** for traffic routing, including **Bring Your Own IP (BYOIP)** support.
* **Egress Paths**: Define if egress traffic returns to the SP network or uses Prisma Access egress.

These APIs use the [common SASE authentication](/sase/docs/getstarted) for service access and authorization.
