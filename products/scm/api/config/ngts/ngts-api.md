---
id: ngts-api
title: NGTS API
sidebar_label: NGTS API
keywords:
  - Strata Cloud Manager
  - NGTS
  - Certificates
  - Reference
  - API
---

Welcome to the NGTS API reference section. This reference is your key to a comprehensive understanding of the NGTS APIs. Here you can start working with NGTS APIs as quickly as possible. Developers can try out our APIs right from our docs and see what's working (or not) with real-time logs. So let's jump right in!

The NGTS APIs are designed for administrators to perform critical tasks, such as discovering and monitoring TLS keys and certificates and managing your TLS machine identities. This section provides detailed information about these APIs, including operations, types, inputs and outputs, and error codes.

:::note
Using the navigation on the left, you'll find details for each endpoint and type of object used in the API.
:::

## NGTS REST APIs

The NGTS REST API provides programmatic access to functionality that is available via the NGTS web user interface (UI). Any task that can be performed using the UI can also be accomplished using the REST API. This feature allows you to automate operations that are present in the UI for greater consistency and scale.

The REST API follows best practices in API design. For example, it uses JSON for encapsulating objects returned by the API, proper HTTP request verbs and status codes, and comprehensive error messages in failed requests to aid developers in diagnosing issues.

## Common use cases

- Auditing your organization's NGTS account to understand what certificates are in inventory.
- Requesting certificates from NGTS for use by applications, such as HTTPS-enabled web servers. (Certificate request API)
- Searching NGTS to understand what certificates have been issued by your organization.
- Extracting data for custom reports based on certificate data and summary information to help track key and certificate management policy compliance.

## Authentication

The NGTS APIs use OAuth 2.0 Client Credentials flow for authentication. To get started:

1. Create a [Tenant Service Group (TSG)](/scm/docs/tenant-service-groups) and a [service account](/scm/docs/service-accounts) with the appropriate roles.
2. Use the service account's **Client ID** and **Client Secret** to [request an access token](/scm/docs/access-tokens).
3. Include the token as a `Bearer` token in the `Authorization` header of every API call.

The API endpoint pages let you authorize and run API calls directly from the docs.

## Base URL

All API requests use the following base URL. HTTPS is required for all requests.

```
https://api.strata.paloaltonetworks.com
```

## JSON

Request and response bodies are encoded as JSON.

- Top-level resources have an "object" property. This property can be used to determine the type of resource (e.g., "database," "user," etc.)
- Property names are in camelCase (not snake_case or kebab-case).

## Code samples

Samples requests and responses are shown for each endpoint. Requests are shown using cURL, Go, Java, JavaScript, Python, and more. These samples make it easy to copy, paste, and modify as you build your integration.
