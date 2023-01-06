---
id: location-rn-bandwidth
title: Remote Network Bandwidth
description: Remote Network Bandwidth
sidebar_label: Remote Network Bandwidth
---

You can view remote network bandwidth for a specified Prisma Access location using the `location_rn_bandwidth` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/location_rn_bandwidth_img.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/custom/query/locations/location_rn_bandwidth

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/custom/query/locations/location_rn_bandwidth

    Prisma-Tenant:{{super_tenant_id}}

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

## Request Payload

The following request payload filters on `event_time` and `edge_location_display_name`:

`event_time`: The operators for this filter are:

- `last_n_minutes` : n = 15.
- `last_n_hours` : n = 1, 3, 24, or 48.
- `last_n_days` : n = 7 or 30.

`edge_location_display_name`: String. A location name, such as US East, Japan, and so on.

```json
{
  "properties": [
    {
      "property": "edge_location_display_name",
      "alias": "location_name"
    },
    {
      "property": "total_consumption"
    }
  ],
  "filter": {
    "rules": [
      {
        "property": "event_time",
        "operator": "last_n_days",
        "values": [30]
      },
      {
        "property": "edge_location_display_name",
        "operator": "equals",
        "values": ["US East"]
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
    "createdAt": "2022-10-10T17:42:53Z",
    "dataCount": 1,
    "requestId": "742b98e8-5544-4c93-98f2-64ea15cb8432",
    "queryInput": {
      "time_range": "last 30 day(s)",
      "event_time": {
        "from": "2022-09-10T00:00:00Z",
        "to": "2022-10-10T17:41:59Z",
        "from_epoch": 1662768000000,
        "to_epoch": 1665423719000
      }
    },
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "location_name": "Japan Central",
      "total_consumption": 0.0
    }
  ]
}
```
