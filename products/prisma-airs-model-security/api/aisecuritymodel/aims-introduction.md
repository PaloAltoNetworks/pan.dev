---
id: aims-introduction
title: "Prisma AIRS AI Model Security Introduction"
sidebar_label: "Introduction"
keywords:
  - Prisma AIRS API
  - Reference
  - Cloud
  - API
---

# Prisma AIRS AI Model Security API Reference

Prisma AIRS AI Model Security allows customers to scan AI models using custom security configurations known as **Security Groups**. This API enables programmatic scanning, result retrieval, and configuration from CI/CD environments or custom workloads.

---

## Quick Start
- **Base URL:** `https://api.sase.paloaltonetworks.com/aims`
- **Authentication:** OAuth2 Bearer Token
  - Header: `Authorization: Bearer YOUR_TOKEN_HERE`

---

## API Architecture
The API is divided into two distinct planes:

1.  **Management Plane:** Handles interactions with security groups and security rules.
2.  **Data Plane:** Handles submitting scans and retrieving scan results (rule evaluations, violations, and per-file results).

### Pagination
List endpoints use offset-based pagination:
* `limit`: Number of items per page.
* `skip`: Number of items to skip.