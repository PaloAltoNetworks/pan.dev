---
id: setup-api
title: Configuration Setup APIs
sidebar_label: Configuration Setup APIs
keywords:
  - Strata Cloud Manager
  - Configuration
  - Setup
  - Reference
  - API
---

Welcome to the Configuration Setup APIs. You use these APIs to create and manage devices, folders,
labels, snippets, and variables.


A [device](https://docs.paloaltonetworks.com/strata-cloud-manager/getting-started/manage-configuration-ngfw-and-prisma-access/device-settings) 
is a cloud-managed firewall.

[Folders](https://docs.paloaltonetworks.com/strata-cloud-manager/getting-started/workflows/workflows-ngfw-setup/folder-management)
are used to logically group your firewalls or deployment types (Prisma Access mobile users,
remote networks, or service connections) for simplified configuration management.

You use snippets to 
[group configurations that you can quickly push to your firewalls or deployments](https://docs.paloaltonetworks.com/strata-cloud-manager/getting-started/manage-configuration-ngfw-and-prisma-access/configuration-scope/snippets). 
A snippet is a configuration object, which can't fit into a hierarchy, or grouping of configuration
objects, that you can associate with a folder, deployment, or device. When you create a snippet, you
can assign it a label.

[Variables](https://docs.paloaltonetworks.com/strata-cloud-manager/getting-started/manage-configuration-ngfw-and-prisma-access/configuration-scope/variables)
allow you to standardize (using snippets) your configurations while giving you the
flexibility to accommodate unique configuration values that are device or deployment specific.

These APIs use the [common authentication mechanism](/scm/docs/getstarted) for service access and authorization.

You must use the [Configuration Operations API](/scm/api/config/sase/operations/operations-api) to push
configurations made using these APIs to your deployments.
