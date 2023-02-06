---
id: pai-faqs
title: Prisma Access Insights API FAQs
description: Prisma Access Insights API FAQs
sidebar_label: API FAQs
---

## What do Prisma Access Insights (PAI) APIs do?

The Prisma Access Insights APIs enable automation and integration solutions for Prisma SASE products and services. For more information, see [Prisma Access Insights API](/access/docs/insights/).

## What are the Prisma Access Insights API versions?

There are two versions of the APIs. Both versions are functionally identical. They both allow you to
query your Prisma Access tenant for the health of your Prisma Access network deployment.
However, these API versions use different access tokens, and the mechanism by which you obtain an
access token is different for each version.

The 2.0 APIs are for customers who use TSG IDs. This includes all customers using the Prisma SASE Multitenant Support.
For more information, see [Get Started with Prisma Access Insights 2.0 API](/access/docs/insights/getting_started-20/).

The 1.0 APIs support legacy single tenant customers.
For more information, see [Get Started with Prisma Access Insights 1.0 API](/access/docs/insights/getting_started-10/).

## How do I identify whether my tenant has been migrated to TSG ID?

To see whether your tenant uses tenant service group (TSG) IDs:

1. Go to the Prisma Access Hub.
1. Select the **Prisma Access Insights** application name.
1. Go to the **Manage Apps** section.
1. Select the tenant icon > Common Service > Tenant Management.
1. If you see a TSG ID under the name of your tenant, the tenant has been migrated, and you can use version 2.0 APIs with that tenant.

## Why migrate from version 1.0 APIs to version 2.0 APIs?

Version 2.0 is capable of supporting TSG IDs. The list of tenants and subtenants can be mentioned in
the header, as opposed to concatenating tenants and subtenants in the URI.

In version 1.0, the tenant ID that is present in the header always refers to the super tenant.

### Version 1.0 example

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/query/edge_location_current_status

### Version 2.0 example

    POST /api/sase/v2.0/resource/query/edge_location_current_status

### Version 2.0 API request header:

    TSG_ID:{prisma-subTenant/PANORAMA_SUB_TENANT_ID}

## How do I get the base URL for fetching data using Prisma Access Insights APIs?

See **Base URLs** in [Get Started with Prisma Access Insights 2.0 API](/access/docs/insights/getting_started-20/).

## How do I generate an API key for version 1.0 APIs?

**Note**: After your tenant migrates to TSG ID use, we recommend that you migrate to version 2.0 APIs.

See **Generate an API Key** in [Get Started with Prisma Access Insights 1.0 API](/access/docs/insights/getting_started-10/).

## How do I generate an access token for version 2.0 APIs?

To generate an access token for version 2.0 APIs, see [Access Tokens](/sase/docs/access-tokens/).

## What are the API URLs for API version 1.0 and version 2.0?

The full URL for an API request includes the base URL, plus the API URI described in the API
reference documentation. For example, a customer using the US region can query for external alerts
using:

For version 1.0:

    https://pa-us01.api.prismaaccess.com/api/sase/v1.0/resource/tenant/{super_tenant_id}/query/prisma_sase_external_alerts_current

For version 2.0:

    https://pa-us01.api.prismaaccess.com/api/sase/v2.0/resource/query/prisma_sase_external_alerts_current

For more complete information about forming Prisma Access queries, see
[Get Started with Prisma Access Insights 2.0 API](/access/docs/insights/getting_started-20/)
or
[Get Started with Prisma Access Insights 1.0 API](/access/docs/insights/getting_started-20/).

## How are version 2.0 API headers populated?

See [Get Started with Prisma Access Insights 2.0 API](/access/docs/insights/getting_started-20/).

## What does a typical query look like?

To see examples of typical queries, see [Prisma Access Insights API Examples](/access/docs/insights/examples/).

## What are query components?

For details about query components, see [Prisma Access Insights Query Language](/access/docs/insights/pai_query_language/).

## What are the possible filter values?

For information about filter values, see [Query Language Filters](/access/docs/insights/query_filters/).

## How can I ensure that the access token is using the correct credentials?

If the access token is incorrect, the API request may not go through, and the resulting error code indicates an invalid authorization code. To test an access token for the correct credentials, see [Access Tokens](/sase/docs/access-tokens/).
