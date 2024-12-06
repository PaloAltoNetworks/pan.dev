---
id: tenant-service-groups
title: Tenant Service Groups
description: Tenant Service Groups (TSGs) are used to contain service accounts.
hide_title: False
hide_table_of_contents: False
keywords:
  - Strata Cloud Manager
  - scm
---

A tenant service group (TSG) is used by the Strata Cloud Manager to provide a logical
container which contains Strata Cloud Manager tenants and other TSGs. It is the building block for a multitenancy
hierarchy. Generally, this hierarchy is described as a series of nested tenants, where a tenant is
used to manage, monitor, and license Strata Cloud Manager products such as Prisma Access. But mechanically, a tenant
is just a TSG. The terms are often used interchangeably.

You can examine the TSG hierarchy for your installation:

- [List all tenant service groups](/scm/api/tenancy/get-tenancy-v-1-tenant-service-groups)
- [List tenant service group children](/scm/api/tenancy/post-tenancy-v-1-tenant-service-groups-tsg-id-operations-list-children)
- [List tenant service group ancestors](/scm/api/tenancy/post-tenancy-v-1-tenant-service-groups-tsg-id-operations-list-ancestors)

TSGs serve two purposes:

1. They are used to identify the [scope](/scm/docs/scope) of an access token.

2. You create one or more [service accounts](/scm/docs/service-accounts) for TSGs, and
   then assign [roles](/scm/docs/roles-overview) to the service account in order to define the API
   access that the account can perform.

[Access tokens](/scm/docs/access-tokens) are oAuth 2.0 compliant, which means that you
limit their reach by specifying a scope. For the Authentication Service, scope is specified in terms of TSGs.
That is, access tokens are limited to just the specified TSG (which the service account must have
access to), and the tenants that are children of the TSG.

## Create a Tenant Service Group

There are two ways to create a TSG:

1. By using the Strata Cloud Manager user interface. The first time you create a TSG,
   you must use the user interface because there's no other way for you to get an access token.

2. By using the [create a tenant service
   group](/scm/api/tenancy/post-tenancy-v-1-tenant-service-groups)
   API. You can only do this if you have created a service account and generated an access token.

Either way, when you create a TSG, a TSG ID is generated. You need this unique ID when you generate
service tokens, so make a note of it.

Once you have at least one TSG, you can [create a service account](/scm/docs/service-accounts).
