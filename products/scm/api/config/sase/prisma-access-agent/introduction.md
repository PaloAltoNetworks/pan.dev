---
id: introduction
title: Prisma Access Agent Inventory APIs
sidebar_label: Overview
keywords:
  - Prisma Access
  - GlobalProtect
  - Agent Inventory
  - Strata Cloud Manager
  - API
  - Reference
---

# Prisma Access Agent Inventory APIs

The Prisma Access Agent Inventory APIs provide programmatic access to the fleet of GlobalProtect agents deployed across your organization. These APIs expose the same capabilities that power the Inventory page in Strata Cloud Manager (SCM), enabling you to manage and monitor your endpoint fleet at scale through the SCM API Gateway.

## Why Use These APIs

Managing thousands of distributed endpoints through a console alone does not scale. Use these APIs to:

- **Automate fleet visibility** — Query agent status, versions, and health across your entire organization without navigating the UI.
- **Integrate with your toolchain** — Feed real-time agent data into your SIEM, CMDB, ITSM, or custom dashboards for a unified endpoint view.
- **Orchestrate lifecycle actions** — Trigger upgrades, downgrades, uninstalls, log collection, and diagnostics as part of automated workflows.
- **Reduce rollout risk** — Monitor and control staged upgrade rings to limit the blast radius of agent updates.
- **Accelerate incident response** — Pull diagnostics and HIP reports from specific endpoints on demand during active investigations.

## What You Can Do

These APIs organize into five functional areas:

| Area | Description |
|------|-------------|
| **Agent Inventory** | Search, filter, sort, and retrieve detailed records for individual agents or the entire fleet. Filter by hostname, user, OS, version, status, IP, gateway, upgrade ring, DLP state, and more. |
| **Agent Statistics** | Retrieve aggregate fleet health metrics grouped by connection status, without downloading individual records. |
| **Agent Actions** | Remotely initiate upgrade, downgrade, uninstall, log collection, HIP report, and diagnostics operations on one or more agents. |
| **Agent Binaries** | List available agent binary versions for upgrades and downgrades across supported platforms. |
| **Staged Rollout** | Start or stop staged upgrade campaigns that roll new agent versions across defined rings at a controlled pace. |

## When to Use These APIs

Use the Prisma Access Agent Inventory APIs when you need to:

- Build automated compliance and fleet health reports.
- Integrate agent status into change management or incident response workflows.
- Roll out or roll back agent versions across defined upgrade rings.
- Collect logs or diagnostics from targeted endpoints during troubleshooting.
- Populate internal dashboards with real-time agent connection and version data.
- Enforce organizational upgrade policies programmatically.

## Where to Send Requests

Send all API requests to the SCM API Gateway at the following base URL:

| Environment | Base URL |
|-------------|----------|
| Production | `https://api.sase.paloaltonetworks.com/sse/epm/v1` |

## Which Platforms Are Supported

| Platform | Actions Supported | DLP Support |
|----------|-------------------|-------------|
| Windows | All (upgrade, downgrade, uninstall, logs, HIP, diagnostics) | Yes (version 26.2.1.26+) |
| macOS | All | Yes (version 26.2.1.26+) |
| Linux | Upgrade, downgrade, uninstall, logs | No |
| iOS | None (mobile-managed) | No |
| Android | None (mobile-managed) | No |

## How to Authenticate

All endpoints require a Bearer JWT token obtained through the SCM OAuth2 flow. Include the token in the `Authorization` header of every request:

```
Authorization: Bearer <access_token>
```

**Role-based access requirements:**

- **Read-Only Admin** — Grants access to all GET endpoints (inventory queries, statistics, filter values, binaries).
- **Admin** — Required for all POST and DELETE endpoints (actions, staged rollout control).

## How Pagination Works

The Search Agents endpoint uses limit/offset pagination. Include `limit` (maximum results per page) and `offset` (number of results to skip) in your request body. The response returns `total`, `limit`, and `offset` fields so you can iterate through the full result set efficiently.

## Next Steps

Explore the endpoint reference pages in this section for request and response schemas, supported parameters, and example calls for each API.
