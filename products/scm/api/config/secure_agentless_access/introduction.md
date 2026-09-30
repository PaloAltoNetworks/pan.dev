---
id: introduction
title: Secure Agentless Access (SAA) Configuration
sidebar_label: Overview
keywords:
  - API
  - Reference
---

# Secure Agentless Access (SAA) Configuration

Secure Agentless Access (SAA) lets your users reach private web applications securely — without installing a VPN client or endpoint agent. Users connect through a browser session that Strata Cloud Manager brokers, enforces policy on, and terminates at the edge. IT teams configure and manage the entire setup through the SAA Configuration API.

## What you can do with this API

The SAA Configuration API is organized into five resource groups:

| Resource | What you manage |
|---|---|
| **Applications** | Define the private web apps that SAA should protect — hostname, port, protocol, and access profile. |
| **Application Groups** | Bundle applications into logical groups for easier policy assignment. |
| **Application Policies** | Create rules that control which users or groups can access which applications or application groups. |
| **Application Profiles** | Configure connection behaviour for an application — timeouts, session limits, and security settings. |
| **Sessions** | List and terminate active user sessions in real time. |

## Key workflows

**Publish a new internal application:**
1. Create an **Application** with the app's hostname and protocol.
2. Assign it an **Application Profile** that sets session and security parameters.
3. Add it to an **Application Group** if it shares policy with other apps.
4. Create or update an **Application Policy** to grant user or group access.

**Revoke access immediately:**
Call `GET /secure-agentless-access/v1/active-sessions` to find live sessions for a user or app, then call `POST /secure-agentless-access/v1/active-sessions:disconnect` to terminate them without waiting for the session to expire.

**Bulk-clean up decommissioned apps:**
Call `POST /secure-agentless-access/v1/applications:delete` with a list of `app_id` values to remove multiple applications in a single request.

## Base URL

All SAA Configuration API requests are made to:

```
https://api.strata.paloaltonetworks.com
```

## Versioning

All SAA Configuration API endpoints are versioned under `/secure-agentless-access/v1/`. The current version is **1.0.0**.
