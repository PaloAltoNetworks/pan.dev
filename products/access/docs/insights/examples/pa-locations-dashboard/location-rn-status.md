---
id: location-rn-status
title: Remote Network Status
description: Remote Network Status
sidebar_label: Remote Network Status
---

You can view the status of the remote networks managed by a specific Prisma Access location using the `edge_location_current_status` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/location_rn_status_img.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/query/edge_location_current_status

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/query/edge_location_current_status

    Prisma-Tenant:{{tenant_id}}

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

## Request Payload

The following request payload filters on `rn_state_instance`. The values for this filter are:

- `0` : Instance is down.
- `1` : Instance is up.
- `2` : Instance is in a warning state.

```json
{
  "properties": [
    {
      "property": "rn_state_instance"
    },
    {
      "property": "edge_location_display_name"
    }
  ],
  "filter": {
    "rules": [
      {
        "property": "rn_state_instance",
        "operator": "in",
        "values": [0, 1, 2]
      }
    ]
  },
  "count": 100
}
```

## Request Response

```json
{
  "header": {
    "createdAt": "2022-10-13T17:01:01Z",
    "dataCount": 3,
    "requestId": "9c88f446-903c-4a23-8041-6dce0ad0cd6b",
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "rn_state_instance": 1,
      "edge_location_display_name": "US East"
    },
    {
      "rn_state_instance": 1,
      "edge_location_display_name": "US Central"
    },
    {
      "rn_state_instance": 1,
      "edge_location_display_name": "US Northwest"
    }
  ]
}
```
