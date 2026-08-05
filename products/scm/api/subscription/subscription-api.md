---
id: subscription-api
title: Subscription Service APIs
sidebar_label: Subscription Service APIs
keywords:
  - Common Services
  - Reference
  - API
---

The Subscription Service API enables you to manage licenses and application instances assigned to your tenant service groups (TSGs). You can use this API to retrieve license details, allocate licenses to child tenants, and provision new application instances programmatically.

This API is designed for cloud administrators and automation teams who manage multi-tenant Palo Alto Networks deployments. It supports workflows such as onboarding new tenants, tracking license consumption across your TSG hierarchy, and automating instance provisioning for services like Prisma Access, Cortex Data Lake, and Cloud Identity Engine.

## Authentication

The Subscription Service API uses OAuth 2.0 Bearer token authentication. Obtain an access token through the [common authentication mechanism](/scm/docs/getstarted) for service access and authorization.

Include the token in the `Authorization` header:

```bash
Authorization: Bearer <ACCESS_TOKEN>
```

The access token identifies the TSG context for the request. License and instance operations are scoped to the TSG encoded in the token.

## Base URL

```
https://api.sase.paloaltonetworks.com
```

## Primary Use Cases

- Retrieve all license details allocated to a tenant service group to audit entitlements and expiration dates
- Allocate licenses from a parent TSG to child tenants during multi-tenant onboarding
- Provision new application instances (Prisma Access, Cortex Data Lake, Cloud Identity Engine) for child TSGs
- Monitor instance provisioning status and health across your tenant hierarchy
- Track license consumption including purchased size and remaining capacity

## Quick Start Example

List all licenses for your TSG:

```bash
curl -X GET "https://api.sase.paloaltonetworks.com/subscription/v1/licenses" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json"
```

List all application instances, including child TSGs:

```bash
curl -X GET "https://api.sase.paloaltonetworks.com/subscription/v1/instances?with_children=true" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json"
```

## Related Resources

- [Getting Started with Strata Cloud Manager](/scm/docs/getstarted)
- [Subscription and Tenant Management](https://docs.paloaltonetworks.com/common-services/subscription-and-tenant-management/get-started)
