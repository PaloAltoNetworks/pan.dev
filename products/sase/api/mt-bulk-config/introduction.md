---
id: introduction
title: Multitenant Bulk Configuration API
sidebar_label: Overview
keywords:
  - SASE
  - Reference
  - API
---

## Overview

The Multitenant Bulk Configuration API enables Managed Security Service Providers (MSSPs) and large enterprises to push security configurations across multiple Prisma SASE tenants from a single management point in Strata Cloud Manager. Instead of configuring each tenant individually, you can define configuration snippets once and deploy them to any number of child tenants simultaneously.

You can use this API to manage configuration snippets, assign them to groups of tenants, track bulk deployment job progress, and handle failure recovery. The API supports the full lifecycle of multitenant configuration management — from initial snippet assignment through monitoring, rollback, and retry operations.

This API is designed for platform engineers and network security administrators who operate in a multitenant environment and need programmatic control over configuration distribution at scale.

## Authentication

The Multitenant Bulk Configuration API uses Bearer token authentication. You must include a valid access token in the `Authorization` header of every request.

```
Authorization: Bearer <ACCESS_TOKEN>
```

These APIs use the [common SASE authentication](/sase/docs/getstarted) for service access and authorization.

## Base URL

All API requests are made to:

```
https://stratacloudmanager.paloaltonetworks.com/mt/config/v1/
```

## Primary Use Cases

- Push a global security policy snippet to all managed tenants in a single operation
- Monitor the status and progress of bulk configuration deployments across your tenant hierarchy
- Roll back a tenant's configuration to its previous known good state after a failed push
- Assign or unassign configuration snippets to specific subsets of tenants without affecting others
- Retry failed configuration pushes for individual tenants without re-triggering the entire bulk job

## Quick Start Example

Retrieve all tenants and their current configuration sync status:

```bash
curl -X GET "https://stratacloudmanager.paloaltonetworks.com/mt/config/v1/tenants" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json"
```

Example response:

```json
{
  "data": [
    {
      "configSyncStatus": "READY",
      "id": "2daaaf38-4e10-4ede-a0ee-4ccc6d361452",
      "lastPushedTs": 1655572263120,
      "snippetsAssociated": [
        {
          "id": "5fed9517-77f6-4186-83d5-79831064b571",
          "name": "GlobalSnippet",
          "version": {
            "current": "1.0",
            "latest": "2.0"
          }
        }
      ],
      "tenantId": "1269138971"
    }
  ],
  "header": {
    "createdAt": "2022-09-08T19:01:47Z",
    "dataCount": 1,
    "status": {
      "subCode": 200
    }
  }
}
```

## Related Resources

- [API Reference](/sase/api/mt-bulk-config/) — Full endpoint documentation for jobs, snippets, and tenants
- [Get Started with SASE APIs](/sase/docs/getstarted) — Authentication and onboarding guide
