---
id: mt-monitor
title: Aggregate Monitoring APIs
description: Aggregate Monitoring APIs
hide_title: true
slug: /sase/docs/mt-monitor
hide_table_of_contents: false
keywords:
  - sase
---

# Welcome to the Aggregate Monitoring APIs

Welcome to the Aggregate Monitoring APIs. To use these APIs, you must be a new Managed
Security Service Provider (MSSP) customer as of March 2022 and must have configured your multitenant
hierarchy for a new deployment of Prisma Access.

After you [create a tenant service group](/sase/docs/tenant-service-groups),
[create a service account](/sase/docs/service-accounts),
and [obtain an access token](/sase/docs/access-tokens),
you can use the [Aggregate Monitoring API Reference](/sase/api/mt-monitor) to discover how to
perform aggregated monitoring queries for the following resources:

- [Data Resource API](/category/sase/api/mt-monitor/data-resources/): retrieve aggregated summaries and counts
  across all your tenants of a Prisma Access instance for threats, alerts, risky applications, URLs,
  and upgrades.
- [License Resource API](/category/sase/api/mt-monitor/license-resources/): retrieve aggregated lists across
  Prisma Access tenants for license quotas, setup status, and utilization.
- [Tenant Resources API](/category/sase/api/mt-monitor/tenant-resources/): list all Prisma Access tenants in
  the hierarchy.

The monitoring functionality exposed by these APIs can also be performed using the [Prisma SASE
Multitenant Platform user
interface](https://docs.paloaltonetworks.com/sase/prisma-sase-multitenant-platform/monitor-tenants).

## Authentication

Use the [Prisma SASE API Quick Start](/sase/docs/getstarted) for information about the Authentication Service
common authentication mechanism and base URL.

## API Requests

Send all API requests to the base URL plus the path and parameter of
`/mt/monitor/v1/agg/<path>?<query_parameter>`.

For example, using curl:

    curl -X POST "https://api.sase.paloaltonetworks.com/mt/monitor/v1/agg/alerts/list?agg_by=tenant" \
    -H 'accept: application/json' \
    -H "Authorization: Bearer <ACCESS_TOKEN>" \
    -H "Content-Type: application/json" \
    -H "X-PANW-Region: de" \
    -d '{"properties":[{"property":"sub_tenant_id"},{"property":"total_count"}],"filter":{"operator":"AND","rules":[{"property":"domain","operator":"in","values":["External","external"]},{"property":"event_time","operator":"last_n_days","values":[7]}]}}'

Depending on the query and the [query parameter](/sase/docs/parameters), there are also [query
filters and properties](/sase/docs/filters) that you need to use in the request body.

## X-PANW-Region Header Parameter

The `X-PANW-Region` header parameter is the region you chose when setting up your tenant. It must be one of the following: `de`, `americas`, `europe`, `uk`, `sg`, `ca`, `jp`, `au`, `in`. Returns details from the Cortex Data Lake (CDL) region specified.

If you need to verify which region to use, you can [list tenant hierarchy](/sase/api/mt-monitor/get-mt-monitor-v-1-agg-custom-tenant-hierarchy) to see the region in the response.
