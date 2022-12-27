---
id: rn-bandwidth-allocated
title: Remote Network Bandwidth Allocated
description: Remote Network Bandwidth Allocated
sidebar_label: Remote Network Bandwidth Allocated
---

You can view the remote network bandwidth allocated per compute location in the Total Sites table using the `rn_bandwidth_allocated` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/rn_bandwidth_allocated_img.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/custom/query/remotenetworks/rn_bandwidth_allocated

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/custom/query/remotenetworks/rn_bandwidth_allocated

    Prisma-Tenant:{{tenant_id}}

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

## Request Payload

The following request payload filters on `event_time` and `edge_location_display_name`:

The operators for `event_time` are:

- `last_n_minutes` : n = 15.
- `last_n_hours` : n = 1, 3, 24, or 48.
- `last_n_days` : n = 7 or 30.

`edge_location_display_name`: String. The edge location display name is a location name.

```json
{
  "filter": {
    "rules": [
      {
        "property": "event_time",
        "operator": "last_n_days",
        "values": [90]
      },
      {
        "property": "edge_location_display_name",
        "operator": "not_equals",
        "values": ["no_data"]
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
    "createdAt": "2022-10-13T21:55:09Z",
    "dataCount": 1,
    "requestId": "446a9858-7991-430a-b0f0-b2427e2e8c51",
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "allocated_bw": 2500000.0,
      "allocated_aggregated_bw": 7000000.0
    }
  ]
}
```
