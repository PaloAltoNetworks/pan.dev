---
id: api-call
title: Make an API Call
description: Example of a simple Prisma SASE API call.
hide_title: false
hide_table_of_contents: false
keywords:
  - sase
---

You can make an API call to a SASE service when you have done all of the following:

1. Created at least one [TSG](/sase/docs/tenant-service-groups).
2. Created at least one [service account](/sase/docs/service-accounts).
3. Assigned a [role](/sase/docs/roles) to the service account.
4. Obtained an [access token](/sase/docs/access-tokens).

To make an API call, use the base URL:

    https://api.sase.paloaltonetworks.com

plus the URI identified for the API in its API reference page. You must also 
provide your access token on the request using the `Authorization` HTTP
header using the `Bearer` keyword.

For example, using curl:

    curl -o --location "https://api.sase.paloaltonetworks.com/config/v1/jobs" \
    -H "Authorization: Bearer <ACCESS_TOKEN>" \
    -H "Content-Type: application/json"

### Unified Prisma SD-WAN Usage
For [Unified Prisma SD-WAN API](/sdwan/api/)
calls, immediately after generating an access token, you must make a call to

    GET /sdwan/v2.1/api/profile

If this isn't done, subsequent calls to the SD-WAN API endpoints will return a 403.

## About x-panw-region ##

Several services require an additional `x-panw-region` header on their API calls to identify the
region where your data is stored. Most SASE services do not require this header because the
information is available in the access token that you use to authorize the call.

The services that do require an `x-panw-region` header in their APIs are: 

* [Aggregate Monitoring APIs](/sase/api/mt-monitor/)
* [ZTNA Connector APIs](/access/api/ztna/ztna-connector-apis/)
* [Autonomous DEM APIs](/access/api/adem/autonomous-dem-api/)

For example:

    curl -X POST "https://api.sase.paloaltonetworks.com/mt/monitor/v1/agg/alerts/list?agg_by=tenant" \
    -H 'accept: application/json' \
    -H "Authorization: Bearer <ACCESS_TOKEN>" \
    -H "Content-Type: application/json" \
    -H "X-PANW-Region: de" \
    -d '{"properties":[{"property":"sub_tenant_id"},{"property":"total_count"}],"filter":{"operator":"AND","rules":[{"property":"domain","operator":"in","values":["External","external"]},{"property":"event_time","operator":"last_n_days","values":[7]}]}}'

When making calls to these services, it is an error to not include this header.

**NOTE:** It is an error to include the `x-panw-region` header on calls to a service that
does not require it.

### x-panw-region values ###

The `X-PANW-Region` header parameter is the region you chose when setting up your tenant. It must be one of the following:

| Region    | Country                      |
| --------- | ---------------------------- |
| americas  | United States                |
| au        | Australia                    |
| ca        | Canada                       |
| de        | Germany                      |
| europe    | European Union               |
| in        | India                        |
| jp        | Japan                        |
| sg        | Southeast Asia               |
| uk        | United Kingdom               |


If you need to verify which region to use, you can 
use the Aggregate Monitoring APIs to 
[list the tenant hierarchy](/sase/api/mt-monitor/get-mt-monitor-v-1-agg-custom-tenant-hierarchy).
The appropriate region is in the response.
