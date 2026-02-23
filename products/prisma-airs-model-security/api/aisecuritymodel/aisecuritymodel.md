---
id: aisecuritymodel
title: "Prisma AIRS AI Model Security Introduction"
sidebar_label: "Introduction"
slug: /prisma-airs-model-security/api/aisecuritymodel/aisecuritymodel
keywords:
  - Prisma AIRS API
  - Reference
  - Cloud
  - API
---

# Prisma AIRS AI Model Security API Reference

Prisma AIRS AI Model Security is a product that allows customers to scan any top of AI model using custom security configurations known as **security groups.** Model Security’s public API is documented to enable customers to submit scans, retrieve results, and configure their security groups programmatically from their CI environments or other custom workloads.

## Quick Start
- **Base URL:** All interactions with the Prisma AIRS AI Model Security APIs must be directed at the following base URL to be routed appropriately. The base URL for AI Model Security is:`https://api.sase.paloaltonetworks.com/aims`

- **Authentication:** All Model Security APIs require OAuth2 bearer tokens for proper authentication. The format of the bearer token follows the standard authorization header: `Authorization: Bearer YOUR_TOKEN_HERE`. For instructions on how to obtain an OAuth 2.0 token, see the [Access Tokens ](https://pan.dev/scm/docs/access-tokens/)section.

## API Architecture
The API is divided into two distinct planes:

1.  **Management Plane:** Handles interactions with security groups and security rules.
2.  **Data Plane:** Handles submitting scans and retrieving scan results (rule evaluations, violations, and per-file results).

### Pagination
List endpoints use offset-based pagination:
* `limit`: Number of items per page.
* `skip`: Number of items to skip.