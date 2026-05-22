---
id: introduction-adnsr
title: Configuration Operations APIs for Advanced DNS Security Resolver
sidebar_label: Configuration Operations APIs
keywords:
  - Strata Cloud Manager
  - Configuration
  - ADNSR
  - Advanced DNS Security Resolver
  - DNS Security
  - Reference
  - API
---

The Advanced DNS Security Resolver Configuration APIs enable you to programmatically configure and manage your Advanced DNS Security Resolver deployments through Strata Cloud Manager. These APIs provide the same configuration capabilities available through the Strata Cloud Manager user interface, now accessible as customer-facing APIs.

Use these APIs to manage DNS security profiles, connection sources, custom FQDNs, EDL definitions, internal domains, misconfigured domains, sinkhole settings, and other resolver configurations. These APIs allow you to automate DNS security policy management, integrate with your existing DevOps workflows, and maintain consistent security postures across your organization.

## Key Configuration Areas

The Advanced DNS Security Resolver APIs support configuration management for:

- **Profiles** - Configure DNS Security profiles with threat protection categories, actions, and logging settings
- **Connection Sources** - Define network sources and subnets that connect to your DNS resolver
- **Custom FQDNs** - Manage custom fully qualified domain names for specialized DNS handling
- **EDL Definitions** - Configure External Dynamic Lists (EDLs) for dynamic threat intelligence integration, including CA certificate management
- **Internal Domains** - Specify internal domain names that should bypass external DNS resolution
- **Misconfigured Domains** - Identify and manage domains with known DNS misconfigurations
- **Sinkhole** - Configure sinkhole settings to redirect malicious DNS queries
- **Resolver Information** - Retrieve resolver status and configuration details

## Authentication and Authorization

These APIs use the [common authentication mechanism](/scm/docs/getstarted) for service access and authorization. Advanced DNS Security Resolver APIs authenticate client requests using the OAuth 2.0 Client Credentials flow with a scope value of `tsg_id:XXXXXXXXXX`, where `XXXXXXXXXX` is your Tenant Service Group (TSG) ID.

The resulting JWT access token should be attached to all API calls as a `Bearer` token in the `Authorization` header.

## Getting Started

To begin using the Advanced DNS Security Resolver Configuration APIs:

1. Set up a [service account](/scm/docs/service-accounts) with appropriate permissions
2. Obtain an [access token](/scm/docs/access-tokens) using your client credentials
3. Use the configuration APIs to manage your DNS Security Resolver settings
4. Monitor resolver status and configuration using the retrieval APIs

For best practices on using these APIs effectively, refer to the [Strata Cloud Manager API Best Practices](/scm/docs/api-best-practices) guide.
