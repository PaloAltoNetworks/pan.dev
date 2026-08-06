---
id: introduction
title: Activation Service APIs
sidebar_label: Activation Service APIs
keywords:
  - Common Services
  - Reference
  - API
---

The Activation Service API enables you to manage the full lifecycle of Prisma Access tenant activation within the IBM MSP (Managed Service Provider) model. You can use this API to share Cloud Identity Engine (CIE) instances across tenant service groups, activate and amend Prisma Access licenses, and offboard product instances when they are no longer needed.

This API is designed for MSP administrators and automation teams managing multi-tenant Prisma Access deployments. It supports programmatic onboarding of child tenants, license capacity management, and controlled decommissioning — all scoped to the TSG hierarchy enforced by the platform.

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

## Primary Use Cases

- Share a parent TSG's Cloud Identity Engine instance with child TSGs during multi-tenant onboarding
- Activate Prisma Access licenses for child TSGs with specific entitlement quantities (MU, SLS, RN)
- Amend allocated license quantities for existing child tenant activations
- Validate whether a product instance is eligible for offboarding before decommissioning
- Offboard and deprovision product instances when tenants are decommissioned

## Quick Start Example

Retrieve entitlement groups to get the required IDs for activation:

```bash
curl -X GET "https://api.sase.paloaltonetworks.com/asset/api/v1/entitlement-groups" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "x-tsg-id: 1216154794" \
  -H "Content-Type: application/json"
```

Activate Prisma Access for a child TSG:

```bash
curl -X POST "https://api.sase.paloaltonetworks.com/activation/api/v1/activate" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "entitlement_group_id": "EG550016",
    "region": "americas",
    "entitlements": [
      {
        "entitlement_id": "ENT550016",
        "entitlement_version": 1,
        "quantity": 2000
      }
    ],
    "extra": {
      "management_mode": "cloud_managed",
      "pba": false
    }
  }'
```

## Related Resources

- [Strata Cloud Manager Getting Started](/scm/docs/getstarted)
- [Subscription Service APIs](/scm/api/subscription/subscription-api)
