---
id: oauth-based-authentication
title: "Role-Based Access Control (RBAC) Roles"
sidebar_label: "Role-Based Access Control (RBAC) Roles"
keywords:
  - AIRS
  - Reference
  - Cloud
  - API
---

This page introduces you to using OAuth 2.0 tokens for authenticating with Prisma AIRS APIs. The goal is to provide a more secure and flexible authentication method that overcomes the limitations of using a single API key, such as a limited number of keys and the need for manual distribution. By using OAuth 2.0 tokens, you can adhere to modern security practices and streamline automation workflows.

Before you can use OAuth 2.0-based authentication, you must have the following in place:

## Service Account for Roles Testing in Strata Cloud Manager

The system uses specific app roles for the Prisma AIRS API. You must have a service account with the appropriate roles assigned in Strata Cloud Manager to generate and use OAuth 2.0 tokens. A low-privileged user, for example, cannot delete an API key.

1. Log in to [Strata Cloud Manager](http://stratacloudmanager.paloaltonetworks.com/).
2. Navigate to **Settings > Identity & Access**.
3. Select Add Identity.
4. In Identity Type, select User.
5. In Identity Type, select Service Account.

## Get an Auth Token with a Service Account

You will use a service account's Client ID (which is your API key) and a Client Secret to get an OAuth 2.0 token. This token acts as the authentication for your subsequent API calls.

1. To get the auth token, use a cURL command similar to the following:

```curl
curl -vk -XPOST "https://auth.appsvc.paloaltonetworks.com/auth/v1/oauth2/access_token" -H 'Content-Type: application/x-www-form-urlencoded' \
-H 'Accept: application/json' -d'client_id=demoTest@0000000000
.iam.panserviceaccount.com&client_secret=00000000-0000-0000-0000-000000000000
&grant_type=client_credentials&"scope":"tsg_id:xxxxxxxxxx"'
```

2. Once you have the token, export it as an environment variable:

```curl
export TOKEN=<output-of-above>
```

3. You can then use this token to call the management APIs. For example, to get an OAuth token via the Strata gateway, use a command similar to this:

```curl
curl -vk -XPOST "https://api.sase.paloaltonetworks.com/aisec/v1/mgmt/oauth/client_credential/accesstoken?tokenTtlInterval=1&tokenTtlUnit=hour" --data '{"client_id":"000000000000000000000000000000000000000000000000
", "customer_app":"scm-dev-new-1-app"}' -H"x-pan-aisec-tsg-id: xxxxxxxxxx" -H"Authorization:Bearer $TOKEN" | json_pp
```

4. The response from the POST request provides the OAuth 2.0 token that you will use for subsequent API calls.

```json
{
  "access_token" : "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "api_product_list" : "[aisec-api]",
  "api_product_list_json" : [
     "aisec-api"
  ],
  "application_name" : "1e2dcf13-6f4c-4984-850d-xxxxxxxxxxxx",
  "client_id" : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "developer.email" : "cspdev1.xxxxxxxxxx@paloaltonetworks.com",
  "expires_in" : "3599",
  "issued_at" : "1750104384641",
  "organization_name" : "airs-api-dev",
  "refresh_count" : "0",
  "refresh_token_expires_in" : "0",
  "scope" : "",
  "status" : "approved",
  "token_type" : "BearerToken"
}
```

### Role-Based Access Control (RBAC)

The RBAC role is set in Strata Cloud Manager by navigating to Identity and Access → Access Management. The following table lists the available roles and their permissions.

| User Role | Permission |
| --- | --- |
| Superuser | Access to all API endpoints, including the ability to perform CRUD (Create, Read, Update, Delete) operations on API keys, security profiles, and custom topics. |
| ViewOnly | Read-only access to entities like profiles, API keys, or custom apps. |
| CustomRole | Allows administrators to define custom roles and assign specific permissions to each role. |
