---
id: introduction
title: Activation Service APIs
sidebar_label: Activation Service APIs
keywords:
  - Common Services
  - Reference
  - API
---

The Activation Service API enables you to manage the full lifecycle of tenant activation within the MSP (Managed Service Provider) model. You can use this API to share Cloud Identity Engine (CIE) instances across tenant service groups, activate and amend licenses, and offboard product instances when they are no longer needed.

This API is designed for MSP administrators and automation teams managing multi-tenant deployments. It supports programmatic onboarding of child tenants, license capacity management, and controlled decommissioning — all scoped to the TSG hierarchy enforced by the platform.

## Authentication

The Activation Service API uses OAuth 2.0 client credentials flow. Obtain an access token from:

```
https://iam.apps.paloaltonetworks.com/oauth2/access_token
```

Include the token in the `Authorization` header:

```bash
Authorization: Bearer <ACCESS_TOKEN>
```

Required OAuth scopes vary by operation:

| Operation | Scope |
|-----------|-------|
| Share CIE instance | `activation_service.shared_instances.create` |
| Activate/amend license | `activation_service.activate.create` |
| Validate offboard | `activation_service.offboard.validate` |
| Offboard instance | `activation_service.offboard.create` |

For detailed authentication steps, refer to the [Strata Cloud Manager authentication guide](/scm/docs/getstarted).

## Base URL

```
https://api.sase.paloaltonetworks.com
```

