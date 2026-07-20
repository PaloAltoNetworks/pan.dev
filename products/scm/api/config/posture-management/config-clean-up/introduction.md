---
id: introduction
title: Configuration Cleanup
sidebar_label: Configuration Cleanup
keywords:
  - Strata Cloud Manager
  - Configuration
  - Cleanup
  - Zero-Hit Rules
  - Posture
  - API
---

# Introduction

The Configuration Cleanup API helps you identify and manage unused or redundant configuration objects in your environment. Over time, security policies accumulate rules that no longer match any traffic—these "zero-hit" rules add complexity, increase the attack surface, and make audits harder. This API gives you programmatic access to detect them so you can take action.

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posture/config-cleanup/v1/zerohit-rules` | Retrieve security rules that have never been hit |

## Base URLs

| Environment | Base URL |
|-------------|----------|
| Current | `https://api.strata.paloaltonetworks.com/config/deployment/v1` |
| Legacy | `https://api.sase.paloaltonetworks.com/sse/config/v1` |

## Authentication

All API requests require an OAuth 2.0 bearer token. Include the token in the `Authorization` header:

```bash
curl -X GET "https://api.strata.paloaltonetworks.com/config/deployment/v1/posture/config-cleanup/v1/zerohit-rules?manager_hostname=SCM" \
  -H "Authorization: Bearer <ACCESS_TOKEN>"
```

To generate an access token, follow the steps in the
[Strata Cloud Manager authentication guide](/scm/docs/getstarted).

## Key Concepts

- **Manager Hostname**: Use `"SCM"` to query rules managed by Strata Cloud Manager, or provide your Panorama hostname for Panorama-managed rules.
- **Location**: Filter results by folder (SCM) or device group (Panorama).
- **Pagination**: Use `limit` (max 200) and `offset` parameters to page through large result sets.