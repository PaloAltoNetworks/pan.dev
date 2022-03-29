---
id: tenancy-api
title: Tenancy Service APIs
sidebar_label: Tenancy Service APIs
slug: /api/tenancy-service
keywords:
  - Common Services
  - Reference
  - API
---

<head>
  <meta name="robots" content="noindex"/>
</head>

## Preview Documentation

** This documentation is in an early preview state. It is subject to change without notice. **

## Tenant APIs

The Tenancy Service is used to create [tenant service groups](/sase-services/docs/tenant-service-groups), 
or TSGs. A TSG is essentially a container that is used to build your tenant hierachy. You can use
the multitenant user interface to create a TSG (that is, to create a tenant), or you can use the
[tenant service API](/sase-services/api/identity-and-access-management/serviceaccounts#operation/createservice_account).

Once you have a TSG, you can create a [service account](/sase-services/docs/service-accounts) for it. 
When you create a service account, you get a Client ID and Client Secret. which you need in order to 
[get an access token](/sase-services/api/auth-service/authservice#operation/post-oauth2-access_token).
You must also use your TSG's ID when you create an access token.


