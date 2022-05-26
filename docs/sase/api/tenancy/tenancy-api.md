---
id: tenancy-api
title: Tenancy Service APIs
sidebar_label: Tenancy Service APIs
slug: /sase/api/tenancy
keywords:
  - Common Services
  - Reference
  - API
---

The Tenancy Service is used to create [tenant service groups](/sase/docs/tenant-service-groups),
or TSGs. A TSG is essentially a container that is used to build your tenant hierachy. You can use
the multitenant user interface to create a TSG (that is, to create a tenant), or you can use the
[Identity and Access Management API](/sase/api/iam/create-a-service-account).

Once you have a TSG, you can create a [service account](/sase/docs/service-accounts) for it.
When you create a service account, you get a Client ID and Client Secret. which you need in order to
[get an access token](/sase/api/auth/create-an-access-token).
You must also use your TSG's ID when you create an access token.

These APIs use the [common SASE authentication](/sase/docs/getstarted) for service access and authorization.
