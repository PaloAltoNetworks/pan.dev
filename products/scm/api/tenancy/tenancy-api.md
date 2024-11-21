---
id: tenancy-api
title: Tenancy Service APIs
sidebar_label: Tenancy Service APIs
keywords:
  - Common Services
  - Reference
  - API
---

The Tenancy Service is used to create [tenant service groups](/scm/docs/tenant-service-groups),
or TSGs. A TSG is essentially a container that is used to build your tenant hierachy. You can use
the multitenant user interface to create a TSG (that is, to create a tenant), or you can use the
[Identity and Access Management API](/scm/api/iam/post-iam-v-1-service-accounts).

Once you have a TSG, you can create a [service account](/scm/docs/service-accounts) for it.
When you create a service account, you get a Client ID and Client Secret, which you need in order to
[get an access token](/scm/api/auth/post-auth-v-1-oauth-2-access-token).
You must also use your TSG's ID when you create an access token.

These APIs use the [common authentication mechanism](/scm/docs/getstarted) for service access and authorization.
