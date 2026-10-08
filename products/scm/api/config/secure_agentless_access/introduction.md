---
id: introduction
title: Secure Agentless Access (SAA) Configuration
sidebar_label: Overview
keywords:
  - API
  - Reference
---

# Secure Agentless Access (SAA) Configuration

Secure Agentless Access (SAA) lets your users reach private applications securely — including web, RDP, SSH, VNC, and SaaS apps — without installing a VPN client or endpoint agent. Users connect through a session brokered and enforced by the SAA portal. IT teams configure and manage the entire setup through the SAA Configuration API in Strata Cloud Manager.

## What you can do with this API

The SAA Configuration API is organized into five resource groups:

| Resource | What you manage |
|---|---|
| **Applications** | Define the applications that SAA should protect — hostname, port, and protocol. |
| **Application Groups** | Bundle applications into logical groups for easier policy assignment. |
| **Application Policies** | Create rules that control which users or groups can access which applications or application groups. |
| **Application Profiles** | Configure allowed actions for SAA applications. |
| **Sessions** | List and terminate active user sessions in real time. |

## Key workflows

**Publish a new internal application:**
1. Create an **Application** with the app's hostname and protocol.
2. (Optional) Add it to an **Application Group** if it shares policy with other apps.
3. Create an **Application Profile** if required (relevant for RDP, SSH, and VNC apps).
4. Create or update an **Application Policy** that grants users or user groups access to the application or application group, with the relevant profile.

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
