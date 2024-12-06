---
id: getstarted
title: Getting Started
description: Getting Started
hide_title: false
hide_table_of_contents: false
keywords:
  - Strata Cloud Manager
  - scm
---

Strata Cloud Manager APIs utilize a common authentication and authorization framework for all API requests.
An [OAuth 2.0 client credential flow](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4) is used to 
request a JWT access token for a specific service account principal. This access token must accompany all 
API calls in the `Authorization` header field.  While the access token provides authentication to the API 
gateway, the actions being performed on API resources are also scoped and authorized based on the permissions 
associated with the service account's role.

To request an access token for use with Strata Cloud Manager API requests, you must do the following:

1. Identify the [Tenant Service Group (TSG)](/scm/docs/tenant-service-groups) that you will use for the 
   scope of the access token request. This TSG identifier will be used in the `scope` of the access token 
   request.

2. Identify the [service account](/scm/docs/service-accounts) that will be used for the access token request. 
   This is the security principal that will be associated with the API calls.  When creating a service account, 
   a Client ID and Secret pair is created.  These values will be used in the `client_id` and `client_secret` that 
   you use to obtain the access token.

3. Ensure that the service account has a [role assignment](/scm/docs/roles-overview) that provides the permissions 
   necessary to perform the actions you intend to perform on API resources within Strata Cloud Manager. You can 
   review the available roles and permissions in the [Identity and Access Management]
   (https://docs.paloaltonetworks.com/strata-cloud-manager/getting-started/access-control) common service.

4. Make an [access token request](/scm/docs/access-tokens) to the Strata Cloud Manager token service using the 
   `client_id`, `client_secret`, `scope` and `grant_type` values.
```
curl -X POST https://auth.apps.paloaltonetworks.com/oauth2/access_token \
-H "Content-Type: application/json" \
-d '{"client_id": "<CLIENT_ID>", "client_secret": "<CLIENT_SECRET>", "scope": "tsg_id:<TSG_ID>", "grant_type": "client_credentials"}' \'
```

Once you have successfully retrieved an access token, you can make requests against the tenants that are 
within the scope of your access token. Provide the access token using the `Authorization` header, with 
the `Bearer` keyword, on your HTTPS request. For example:
```
curl "https://api.strata.paloaltonetworks.com/config/security/v1/security-rules" \
-H "Authorization: Bearer <ACCESS_TOKEN>" \
-H "Content-Type: application/json"
```

