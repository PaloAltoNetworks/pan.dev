---
id: location-sc-bandwidth
title: Service Connection Bandwidth Consumption
description: Service Connection Bandwidth Consumption
sidebar_label: Service Connection Bandwidth Consumption
---

You can view the service connection bandwidth consumption managed by a specific Prisma Access location
using the `location_sc_bandwidth` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/location-sc-bw.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/custom/query/locations/location_sc_bandwidth

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/custom/query/locations/location_sc_bandwidth

    Prisma-Tenant:{{tenant_id}}

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

## Request Payload

The following request payload filters on `event_time`. The operators for this filter are:

- `last_n_minutes` : n = 15.
- `last_n_hours` : n = 1, 3, 24, or 48.
- `last_n_days` : n = 7 or 30.

```json
{
  "properties": [
    {
      "property": "edge_location_display_name",
      "alias": "location_name",
      "sort": {
        "order": "asc",
        "sequence": 2
      }
    },
    {
      "property": "total_consumption",
      "sort": {
        "order": "desc",
        "sequence": 1
      }
    }
  ],
  "filter": {
    "rules": [
      {
        "property": "event_time",
        "operator": "last_n_hours",
        "values": [24]
      }
    ]
  },
  "count": 5
}
```

## Request Response

```json
{
  "header": {
    "createdAt": "2022-10-14T18:02:52Z",
    "dataCount": 1,
    "requestId": "0e1bf29f-5c91-4f0d-aec6-55e704d9b252",
    "queryInput": {
      "time_range": "last 24 hour(s)",
      "event_time": {
        "from": "2022-10-13T18:00:00Z",
        "to": "2022-10-14T18:01:59Z",
        "from_epoch": 1665684000000,
        "to_epoch": 1665770519000
      }
    },
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "location_name": "Costa Rica",
      "total_consumption": 1.19
    }
  ]
}
```
