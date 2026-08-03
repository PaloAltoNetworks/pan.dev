---
id: introduction
title: Cleanup
sidebar_label: Overview
keywords:
  - SCM
  - Reference
  - API
---

# Config Cleanup API

The Config Cleanup API enables you to identify unused or redundant configuration objects across your Palo Alto Networks security infrastructure. By surfacing security rules that have never matched any traffic (zero-hit rules), this API helps you reduce policy bloat, minimize your attack surface, and maintain a clean, auditable configuration.

You can use this API to query zero-hit rules from both Strata Cloud Manager and Panorama-managed environments, giving you a unified view of unused policies regardless of your management platform.

## Authentication

The Config Cleanup API uses OAuth 2.0 for authentication. You must obtain a Bearer token from the Strata Cloud Manager identity service before making requests.

To generate credentials:

1. Log in to [Strata Cloud Manager](https://stratacloud.paloaltonetworks.com).
2. Navigate to **Settings** > **Identity & Access** > **Service Accounts**.
3. Create a service account with the appropriate role for posture management access.
4. Use the generated `client_id` and `client_secret` to request an access token.

## Base URL

```
https://api.strata.paloaltonetworks.com/posture/config-cleanup/v1
```

Legacy base URL:

```
https://api.sase.paloaltonetworks.com/posture/config-cleanup/v1
```

## Primary Use Cases

- Identify security rules that have never matched any traffic to reduce policy bloat
- Audit Panorama device groups or Strata Cloud Manager folders for stale rules
- Generate reports of zero-hit rules to prioritize cleanup during maintenance windows
- Track how long rules have remained unused to support compliance workflows
- Compare zero-hit rules across SCM and Panorama-managed environments

## Quick Start Example

Retrieve zero-hit security rules from Strata Cloud Manager:

```bash
curl -X GET "https://api.strata.paloaltonetworks.com/posture/config-cleanup/v1/zerohit-rules?manager_hostname=SCM" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json"
```

Example response:

```json
{
  "ok": true,
  "result": {
    "status": "success",
    "platform": "scm",
    "data": [
      {
        "name": "Allow-All-Traffic",
        "uuid": "550e8400-e29b-41d4-a716-446655440000",
        "type": "security",
        "location": "Shared",
        "platform": "scm",
        "days_with_zero_hits": 106,
        "action": "allow",
        "from": ["trust"],
        "to": ["untrust"],
        "source": ["any"],
        "destination": ["any"]
      }
    ],
    "total": 1,
    "limit": 200,
    "offset": 0
  }
}
```

To query rules from a Panorama-managed environment, replace the `manager_hostname` with your Panorama hostname:

```bash
curl -X GET "https://api.strata.paloaltonetworks.com/posture/config-cleanup/v1/zerohit-rules?manager_hostname=panorama.example.com&location=US-West-DG" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json"
```

## Related Resources

- [Strata Cloud Manager Configuration APIs](/scm/api/config)
- [Posture Management APIs](/scm/api/config/posture-management)
