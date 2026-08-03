---
id: insights
slug: /access/docs/insights
---

# Prisma Access Insights API

Welcome to the Prisma Access Insights APIs. These APIs allow you to query your Prisma Access
Insights tenants for data resources. The queries that you create are retrieving information
from a large data lake. The APIs that you use identify the data resource that you want to query.
The payloads for these queries are JSON objects that define the actual query. For a description
of the query language, see [Prisma Access Insights Query Language](/access/docs/insights/pai_query_language/).
For examples of creating requests to retrieve specific information, see
[Prisma Access Insights Examples](/access/docs/insights/examples/).

There are two versions of the APIs. The Prisma Access Insights 2.0 and 1.0 APIs both allow you to
query your Prisma Access tenant for the health of your Prisma Access network deployment.
Which API you should use is determined by whether your tenant has been migrated to use TSG IDs.

To see whether your tenant uses TSG IDs, go to the Prisma Access Hub, click on the Prisma Access
Insights application name, and look in the **Manage Apps** section.

## 3.0 APIs

The 3.0 APIs are intended for cloud-managed Prisma Access customers, where the tenants have been
onboarded by Palo Alto Networks using a Tenant Service Group (TSG) identifier.

For Panorama managed, the 3.0 APIs can be used to query only the super tenant because subtenants
have not migrated to v3.0. However, you can still query subtenant information by placing the
following header on your call:

    Prisma-Tenant:{tsg_id}:{sub_tenant_id}

For more information regarding the 3.0 APIs, see [Getting Started with the 3.0 APIs](/access/docs/insights/getting_started-30).

## 2.0 APIs

The 2.0 APIs are intended for cloud-managed Prisma Access customers, where the tenants have been
onboarded by Palo Alto Networks using a Tenant Service Group (TSG) identifier.

For Panorama managed, the 2.0 APIs can be used to query only the super tenant because subtenants
have not migrated to v2.0. However, you can still query subtenant information by placing the
following header on your call:

    Prisma-Tenant:{tsg_id}:{sub_tenant_id}

For more information regarding the 2.0 APIs, see [Getting Started with the 2.0 APIs](/access/docs/insights/getting_started-20).

## 1.0 APIs

The 1.0 APIs are intended for all cloud-managed single tenant customers, as well as Panorama-managed
single-tenant and multitenant customers.

If you want to query for a subtenant information using the 1.0 APIs, include the super tenant ID on
the endpoint:

    /api/sase/v1.0/resource/tenant/{super_tenant_id}/

And also include the following header on the call:

    Prisma-Tenant:{tenant_id}:{sub_tenant_id}

For more information regarding the 1.0 APIs, see [Getting Started with the 1.0 APIs](/access/docs/insights/getting_started-10).


