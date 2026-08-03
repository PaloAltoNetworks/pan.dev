---
id: snippet-sharing
title: Snippet Sharing APIs
sidebar_label: Snippet Sharing
keywords:
  - Strata Cloud Manager
  - Configuration
  - Security Profiles
  - Reference
  - API
---

Welcome to the configuration Snippet Sharing APIs For Strata Cloud Manager and Prisma Access.
These APIs use the [common authentication mechanism](/scm/docs/getstarted) for service access and authorization.
You must use the [Configuration Operations API](/scm/api/config/cloudngfw/operations/operations-api-cloud-ngfw) to push
configurations made using these APIs to your deployments.

In today's interconnected and dynamic environments, managing and synchronizing configurations across multiple tenants can be a complex and error-prone task. The Snippet Sharing API is designed to simplify this process, enabling administrators to efficiently share and synchronize configuration snippets between different tenants. This API provides a robust and secure mechanism for configuration sharing, ensuring consistency and reducing manual overhead.

## Key features ##

**Configuration Sharing:** Administrators can select specific configuration snippets from a tenant and share them across multiple other tenants. This feature allows for targeted updates, ensuring that only the intended tenants receive the shared configuration.

**Synchronization:** The API supports keeping specific configurations in sync across tenants. Administrators can perform explicit actions to share and sync configurations, ensuring that updates are consistently propagated to recipient tenants.

**Versioning:** The Snippet Sharing API includes a versioning mechanism, allowing administrators to track and audit the sync state of configuration snippets. Only the latest version of a snippet can be shared, ensuring that recipients always receive the most up-to-date configuration.

**Visibility and Auditing:** Administrators can view detailed information about shared snippets, including the tenants they are associated with, the version of the snippet, and the last sync timestamp. Audit logs are generated for all sharing and sync operations, providing transparency and traceability.

**Trust and Verification:** The API supports establishing trust relationships between donor and recipient tenants. Recipient tenants must accept donor tenants as trusted sources before configuration sharing can occur. Trust relationships can be terminated at any time, converting shared snippets to local snippets if referenced in the recipient tenant.

**Configuration Operations:** The API facilitates various configuration operations, including pushing, reverting, and loading configurations. Administrators can manage configurations effectively, ensuring that shared snippets are included or excluded as needed during these operations.

The Snippet Sharing API is designed to streamline configuration management, enhance operational efficiency, and provide a secure and reliable way to share and synchronize configurations across multiple tenants. By leveraging this API, administrators can reduce manual errors, ensure consistency, and maintain control over their configuration environments.