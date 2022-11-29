---
id: insights
slug: /access/docs/insights
---

# Prisma Access Insights API

Welcome to the Prisma Access Insights APIs. These APIs allow you to query your Prisma Access
Insights tenants for data resources. The queries that you create are retrieving information 
from a large data lake. The APIs that you use identify the data resource that you want to query.
The payloads for these queries are JSON objects that define the actual query. For a description
of the query language, see [/access/docs/insights/pai_query_language/](Prisma Access Insights Query Language).
For examples of creating requests to retrieve specific information, see 
[Prisma Access Insights Examples](/access/docs/insights/examples/).

There are two versions of the APIs. The Prisma Access Insights 2.0 and 1.0 APIs both allow you to
query your Prisma Access tenant for the health of your Prisma Access network deployment.

The 1.0 APIs are intended for all cloud-managed single tenant customers, as well as Panorama-managed
single-tenant and multitenant customers.

The 2.0 APIs are intended for cloud-managed Prisma Access customers, where the tenants have been
onboarded by Palo Alto Networks using a Tenant Service Group (TSG) identifier.

To see whether your tenant uses TSG IDs, go to the Prisma Access Hub, click on the Prisma Access
Insights application name, and look in the **Manage Apps** section.

For more information regarding 1.0 APIs, see [Getting Started with the 1.0 APIs](/access/docs/insights/getting_started-10).

For more information regarding 2.0 APIs, see [Getting Started with the 2.0 APIs](/access/docs/insights/getting_started-20).

Single tenant customers should begin with [Getting Started with the 1.0 APIs](/access/docs/insights/getting_started-10/).
