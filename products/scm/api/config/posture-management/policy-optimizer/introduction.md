---
id: introduction
title: Policy Optimizer
sidebar_label: Overview
keywords:
  - SCM
  - Reference
  - API
---

The Policy Optimizer API enables you to retrieve security rules that have optimization recommendations and their suggested replacement rules. You can use this API to programmatically identify overly broad security rules and obtain narrowed, application-specific replacements that maintain the same security intent while following best practices.

This API is designed for network security engineers and automation teams who manage security policies at scale across Strata Cloud Manager and Panorama-managed firewalls. It helps you reduce your attack surface by converting permissive "allow any" rules into precise, application-aware policies based on actual observed traffic.

## Authentication

The Policy Optimizer API uses OAuth 2.0 for authentication. You can obtain credentials from the Strata Cloud Manager portal under **Settings** > **Identity & Access** > **Service Accounts**.

Include the access token in the `Authorization` header:

```bash
Authorization: Bearer <ACCESS_TOKEN>
```

For detailed authentication steps, refer to the [Strata Cloud Manager authentication guide](/scm/docs/getstarted).

## Base URL

```
https://api.strata.paloaltonetworks.com/posture/policy-optimizer/v1
```

Legacy base URL:

```
https://api.sase.paloaltonetworks.com/posture/policy-optimizer/v1
```

## Primary Use Cases

- Identify security rules with overly broad application or service definitions that should be tightened
- Retrieve recommended replacement rules generated from observed traffic patterns
- Filter rules by traffic volume or session count to prioritize optimization of high-impact policies
- Integrate policy optimization checks into CI/CD pipelines for security policy governance
- Audit security posture across multiple Panorama instances and Strata Cloud Manager folders

## Quick Start Example

List security rules with optimization recommendations for Strata Cloud Manager:

```bash
curl -X GET "https://api.strata.paloaltonetworks.com/posture/policy-optimizer/v1/security-rules?manager_hostname=cloud_managed&limit=10" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json"
```

Retrieve recommendations for a specific rule:

```bash
curl -X GET "https://api.strata.paloaltonetworks.com/posture/policy-optimizer/v1/security-rules/550e8400-e29b-41d4-a716-446655440000?manager_hostname=cloud_managed" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json"
```

## Related Resources

- [Strata Cloud Manager Getting Started](/scm/docs/getstarted)
- [Security Posture Management](/scm/docs/security-posture)
