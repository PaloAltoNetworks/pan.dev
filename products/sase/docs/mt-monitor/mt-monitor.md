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

Welcome to the Aggregate Monitoring APIs. These APIs are available to customers that utilize Cloud
Management for service onboarding, configuration, and operations.

After you [create a tenant service group](/sase/docs/tenant-service-groups),
[create a service account](/sase/docs/service-accounts),
and [obtain an access token](/sase/docs/access-tokens),
you can use the [Aggregate Monitoring API Reference](/sase/api/mt-monitor) to discover how to
perform aggregated monitoring queries for the following resources:

- [Data Resource API](/sase/api/mt-monitor/data-resource-api/): retrieve aggregated summaries and counts
  across all your tenants of a Prisma Access instance for threats, alerts, risky applications, URLs,
  and connectivity status.
- [Insights Resource API](/sase/api/mt-monitor/insights-resource-api/): retrieve an aggregated list of insights, such as all upgrade statuses across tenants.
- [License Resource API](/sase/api/mt-monitor/license-resource-api/): retrieve aggregated lists across
  Prisma Access tenants for license quotas, setup status, and utilization.
- [Tenant Resources API](/sase/api/mt-monitor/tenant-resources-api/): list all Prisma Access tenants in
  the hierarchy.
- [Application Monitoring Resource API](/sase/api/mt-monitor/): Application Monitoring support for MSP includes public APIs that seamlessly integrate with the MSP UI and are available for use by end users.


The monitoring functionality exposed by these APIs can also be performed using the Prisma SASE Platform's
[Multitentant Portal user interface](https://docs.paloaltonetworks.com/sase/prisma-sase-multitenant-platform/monitor-tenants).

## Authentication

See the [Prisma SASE API Get Started](/sase/docs/getstarted) for information about base URLs, authentication, and obtaining access tokens.

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

This API requires the x-panw-region header. See [About x-panw-region](/sase/docs/api-call/#about-x-panw-region) for usage information.

