---
id: ztna-connector-api
sidebar_label: ZTNA Connector APIs
title: ZTNA Connector APIs
keywords:
  - SASE
  - Reference
  - API
---

# ZTNA Connector Restful API: Introduction

This document provides a technical overview of the **ZTNA Connector Restful API** (Zero Trust Network Access Connector), which manages the connectivity and configuration of Secure Access Service Edge (SASE) connectors deployed within your environment.

The ZTNA Connector API allows administrators and automation tools to **programmatically manage, monitor, and troubleshoot** private application access rules and connector health without needing to use the centralized administrative portal.

---

## Key Functions

The API uses standard RESTful principles to execute four core operational groups:

1.  **Policy Management (Applications & Subnets):** Manage access rules for private applications and IP subnets. You use these operations to create, list, update, and delete connection policies for Fully Qualified Domain Names (**FQDNs**) and IP subnets, ensuring granular control over network access.
2.  **Connector and Group Management:** Manage the deployment lifecycle of the physical/virtual ZTNA connectors. You use these operations to organize connectors into logical **Connector Groups**, handle configuration updates, and manage scheduled software upgrades.
3.  **Cloud Account Discovery (CAD):** Manage the integration and feature state of associated cloud accounts. You use these endpoints to validate cloud roles and enable or disable target discovery features.
4.  **Diagnostics and Maintenance:** Remotely initiate and retrieve diagnostic information for connector instances. This includes operations to manage packet captures (**PCAPs**), generate tech support files, and toggle the connector's operational (quiesce) state for maintenance.

---

All of the functionality exposed by these APIs can also be performed using the
[Strata Cloud Manager user interface](https://docs.paloaltonetworks.com/prisma-access-browser/administration/use-the-prisma-access-browser-dashboards).

These APIs use the [common SASE authentication](/sase/docs/getstarted) for service access and authorization.