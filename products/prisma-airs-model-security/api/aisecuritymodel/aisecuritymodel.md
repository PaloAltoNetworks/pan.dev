---
id: aisecuritymodel
title: "Prisma AIRS AI Supply Chain Security"
sidebar_label: "Introduction"
slug: /prisma-airs-model-security/api/aisecuritymodel/aisecuritymodel
keywords:
  - Prisma AIRS API
  - Reference
  - Cloud
  - API
---

# Prisma AIRS AI Supply Chain Security API Reference

Prisma AIRS AI Supply Chain Security lets customers scan AI artifacts - models and Agent Skills - against a single unified policy: the **Supply Chain Security Group (SCSG)**. Rather than maintaining separate configurations per artifact type, customers define one SCSG per workspace that governs scanning and enforcement across every artifact type it covers. The Supply Chain Security public API exposes this unified model end to end, letting customers submit scans, retrieve results, and manage their SCSGs programmatically from CI pipelines or any other custom workload.

## Quick Start
- **Base URL:** All interactions with the Prisma AIRS AI Supply Chain Security APIs must be directed at the following base URL to be routed appropriately. The base URL is: `https://api.sase.paloaltonetworks.com/aims`

- **Authentication:** All Supply Chain Security APIs require OAuth2 bearer tokens for proper authentication. The format of the bearer token follows the standard authorization header: `Authorization: Bearer YOUR_TOKEN_HERE`. For instructions on how to obtain an OAuth 2.0 token, see the [Access Tokens](https://pan.dev/scm/docs/access-tokens/) section.

## API Architecture
The API is divided into two distinct planes:

- **Management Plane:** Handles interactions with Supply Chain Security Groups (SCSGs), security rules, and per-artifact overrides. Customers can configure multiple security groups per tenant, each with its own combination of built-in and custom rules and attach a given custom rule to one or more groups, so different policies can be maintained side by side.

- **Data Plane:** Handles submitting scans and retrieving scan results, rule evaluations, violations, findings, attack chains, and per-file results for any artifact type covered by a Supply Chain Security Group. Every scan is submitted against a specific SCSG, so customers choose which policy a scan is evaluated under simply by selecting a SCSG while initiating a scan.

### Workspaces
- Workspaces serve as logical subdivisions inside a tenant, allowing organizations to segregate Supply Chain Security Groups (SCSGs), scan submissions, and security evaluations. Any API call can explicitly target a dedicated workspace; requests omitting this detail fall back to the default scope, `workspace_default`.
- To direct requests toward a designated workspace, include the `x-workspace-id` request header containing the identifier (max 32 characters). All assets generated within a given workspace, including policy rules, SCSGs, scan evaluations, and rule overrides remain strictly isolated to that specific workspace, ensuring scan outcomes from one environment stay invisible to queries executed under another.
- When utilizing the SDK, set the `MODEL_SECURITY_SCOPE_NAME` environment variable on versions >1.1.10 to automatically scope outbound API traffic instead of populating HTTP headers manually. When unconfigured, SDK interactions default to `workspace_default`.

### Pagination
List endpoints use offset-based pagination:
* `limit`: Number of items per page.
* `skip`: Number of items to skip.

See each endpoint's reference for its specific default and maximum values.
