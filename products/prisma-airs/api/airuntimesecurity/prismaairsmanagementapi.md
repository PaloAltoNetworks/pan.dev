---
id: prismaairsmanagementapi
title: "Prisma AIRS AI Runtime Management APIs Overview"
sidebar_label: "Prisma AIRS Management APIs"
slug: /prisma-airs/api/management/
keywords:
  - AIRS
  - Reference
  - Cloud
  - API
---

The Prisma AIRS Management API provides comprehensive management capabilities for AI Runtime Security, including API key management, security profiles, and policy configuration.

## Base URL

```bash
https://api.sase.paloaltonetworks.com/aisec
```

## Authentication

This API uses OAuth 2.0 bearer token authentication. Include your token in the Authorization header:

```bash
Authorization: Bearer YOUR_TOKEN_HERE
```

For detailed instructions on how to obtain an OAuth 2.0 token, see [Enable OAuth-Based Authentication](/prisma-airs/api/airuntimesecurity/oauth-based-authentication).

## API Categories

The Management API includes the following categories:

- **API Key Management** - Create, manage, and rotate API keys
- **AI Security Profiles** - Configure and manage AI security profiles  
- **Custom Topics** - Create and manage custom threat detection topics
- **Customer Applications** - Manage customer application configurations
- **Scan Logs** - Retrieve and analyze security scan results
- **OAuth** - Manage OAuth tokens and authentication
- **DLP Profiles** - Access data loss prevention configurations
- **Deployment Profiles** - Manage deployment configurations

## Getting Started

Browse the API reference documentation in the sidebar to explore available endpoints and their usage.
