---
id: introduction
title: AI Gateway Onboarding
sidebar_label: Overview
keywords:
  - API
  - Reference
---

# AI Gateway Onboarding

Use the AI Gateway Onboarding API to configure and manage the AI Gateway within Strata Cloud Manager. The AI Gateway inspects and secures traffic to AI and machine learning services by applying access controls, security policies, and decryption to both internet-bound and private network traffic.

## What the API does

The AI Gateway Onboarding API lets you:

- **Enable or disable traffic inspection** — Control whether the AI Gateway inspects internet-bound and private network-bound AI traffic independently.
- **Configure the security policy** — Define which endpoints the AI Gateway secures by specifying source IP ranges, destination addresses (by IP, FQDN, or URL category), and HIP profile requirements for endpoint compliance.
- **Apply decryption and security profiles** — Assign a decryption profile and a security profile group to traffic flowing through the AI Gateway.

## Singleton resource

The AI Gateway Onboarding configuration is a singleton — each folder, snippet, or device container holds at most one entry. You scope all requests to a container using the `folder`, `snippet`, or `device` query parameter. There is no separate resource ID in the URL path.

## API endpoint

```
https://api.strata.paloaltonetworks.com/config/ai-gateway/v1
```

## Authentication

All endpoints require a Bearer JWT token obtained through the OAuth 2.0 Client Credentials flow. Request a token with your service account credentials and a scope of `tsg_id:{your-tsg-id}`, then include the token in the `Authorization` header of every request:

```
Authorization: Bearer <access_token>
```

See the [authentication guide](/scm/docs/getstarted) for full details on obtaining and using access tokens.

## Push configuration changes

Creating, updating, or deleting an AI Gateway Onboarding entry stages the change in Strata Cloud Manager. To apply the change to your deployment, use the [Configuration Operations API](/scm/api/config/sase/operations/operations-api) to push the staged configuration.
