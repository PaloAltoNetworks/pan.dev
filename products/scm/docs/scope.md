---
id: scope
title: Access Token Scopes
description: Access token scopes identify the tenant service group that an access token can access.
hide_title: false
hide_table_of_contents: false
keywords:
  - Strata Cloud Manager
  - scm
---

You use a [service account](/scm/docs/service-accounts) to identify the tenant service
group (TSG) to which you want to perform API access. If the TSG or tenant does not have
a service account, then you cannot perform API access against it.

For example, if you have a tenant, `Tenant 1A`, with a service account named `1A_svc`, then you use that service account to obtain an access token. That access token cannot be used to perform API calls against any other tenant. All API requests made using that access token are routed to the tenant based on the TSG ID contained in the access token.

Note that one TSG may have many service accounts, and one service account may have many tokens.

**Note:** The TSG IDs used here are intentionally fake. Real TSG IDs are 10-digit integers (e.g., 1000000001). The examples in this documentation use simplified IDs for clarity.

![](/sase/img/access_token_routing.png)

**Note:** There is no functional difference between a tenant service group and a tenant. The terms
are often used interchangeably.

## Scope within a TSG hierarchy

When you use multiple tenants, you will organize them in a hierarchy of TSGs and tenants.
You can, if you want, create a dedicated service account for every TSG and tenant in your hierarchy.
This is the simplest case, but it isn't necessary. The service account for a TSG can specify
the TSG ID of any descendent of that TSG when it creates an access token.

Consider the following diagram. `TSG A` is the root tenant service group, and it has two
tenants: `Tenant 1A` and `Tenant 2A`. It also has a child TSG, `TSG B`, with two tenants:
`Tenant 1B` and `Tenant 2B`:

![](/sase/img/tenant_hierarchy.png)

In this scenario, assume that service accounts `a_svc` and `b_svc` were created with the superuser
role for their respective TSGs (TSG A and TSG B). If this is true, then:

- `a_svc` service account can be used to create an access token that specifies any TSG_ID in the hierarchy, because every tenant and TSG is a child of TSG A.
- Tenant 1A, Tenant 2A, Tenant 1B, and Tenant 2B do not have service accounts directly, so only the service accounts in their parent TSGs can be used to generate access tokens for them.
- `b_svc` service account can be used to create access tokens for TSG B, plus Tenant 1B and Tenant 2B because those are children of TSG B.
- `b_svc` _cannot_ create access tokens for TSG A, Tenant 1A, or Tenant 2A because they are either peers or ancestors in the hierarchy.

![](/sase/img/hierarchy_scope.png)

## Create access policies for cross-hierarchy access

In the previous scenario, we showed that `b_svc` could not be used to create an access token for Tenant 1A. But there might be situations where you need to do this. To work around the TSG hierarchy restrictions, you can create an access policy for Tenant 1A using the Client ID for the `b_svc` service account. This will allow the `b_svc` service account to create an access token for API access to `Tenant 1A`.

You can accomplish this task using the multitenant UI, or you can use the Identity and Access
Management [create an access policy](/scm/api/iam/post-iam-v-1-access-policies) API.

The following example creates an access policy that grants superuser permissions to the `b_svc` service account for Tenant 1A (represented by TSG ID 18 in this example):

```bash
curl -d '{"role":"superuser","resource":"prn:18::::","principal":"b_svc@15.iam.panserviceaccount.com"}' \
-H "Authorization: Bearer <YOUR_ACCESS_TOKEN_WITH_TSG_15>" \
-H "Content-Type: application/json" \
-X POST https://api.sase.paloaltonetworks.com/access_policies
```
