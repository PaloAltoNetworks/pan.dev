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

The Prisma AIRS management APIs are designed to give you powerful, automated control over your Prisma AIRS AI Runtime: API intercept. You can use these APIs to programmatically manage API key management, AI applications, API security profiles, and custom topics.

With management APIs, you can manage applications, API keys, security profiles, and custom topics programmatically, instead of [through Strata Cloud Manager](https://docs.paloaltonetworks.com/ai-runtime-security/administration/prevent-network-security-threats/airs-apirs-manage-api-keys-profile-apps) as before.

This makes it much easier to integrate Prisma AIRS with your existing systems and manage security for many AI applications efficiently.

## Base URL

All interactions with the Prisma AIRS management APIs begin at the base URL: 

```bash
https://api.sase.paloaltonetworks.com/aisec
```

## Authentication

This API uses OAuth 2.0 bearer token authentication, and your token must be included in the Authorization header:

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

## Prerequisites to Use the Management APIs

1. **Configure a Service Account**: Set up a service account in Strata Cloud Manager to act as the identity for your application or script.
2. **Obtain a Token**: Use your client ID and client secret to retrieve an OAuth 2.0 token.
3. **Make API Calls**: Use the acquired token in the `Authorization: Bearer <token>` header for all your API requests.

For detailed steps on this process, refer to the [Strata Cloud Management APIs](https://pan.dev/scm/docs/getstarted/) documentation. The next step is to understand the roles that govern what your service account is permitted to do with those tokens.
