---
id: parameters
title: Query Parameters
description: Prisma SASE Platform query parameters
slug: /sase/docs/parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - sase
---

Query parameters are optional for aggregating query results by tenant or by license. The request body filters and parameters can be used with either query parameter.

## agg_by query parameter

The `agg_by` query value is `tenant`. Using the query parameter returns all the aggregated responses for the current parent tenant and its child tenants. If the query parameter is not used, the query returns the current single tenant response.

For example, using curl:

    curl -X POST "https://api.sase.paloaltonetworks.com/mt/monitor/v1/agg/alerts/list?agg_by=tenant" \
    -H 'accept: application/json' \
    -H "Authorization: Bearer <ACCESS_TOKEN>" \
    -H "Content-Type: application/json" \
    -H "X-PANW-Region: de" \
    -d '{"properties":[{"property":"sub_tenant_id"},{"property":"total_count"}],"filter":{"operator":"AND","rules":[{"property":"domain","operator":"in","values":["External","external"]},{"property":"event_time","operator":"last_n_days","values":[7]}]}}'

See [Query Filters and Properties](/sase/docs/filters) for more information about the request body.
