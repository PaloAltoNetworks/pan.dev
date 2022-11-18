---
id: location-sc-status
title: Service Connection Status
description: Service Connection Status
sidebar_label: Service Connection Status
---

You can view the number of users connected in real time to Prisma Access using the `edge_location_current_status` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/location_sc_status_img.png)

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

The following request payload filters on `sc_state_instance`. The values for this filter are:

- `0` : Instance is down.
- `1` : Instance is up.
- `2` : Instance is in a warning state.

```json
{
  "properties": [
    {
      "property": "sc_state_instance"
    },
    {
      "property": "edge_location_display_name"
    }
  ],
  "filter": {
    "rules": [
      {
        "property": "sc_state_instance",
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
    "createdAt": "2022-10-13T17:43:36Z",
    "dataCount": 2,
    "requestId": "22a06a26-6520-410b-a575-72d8fe03f181",
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "sc_state_instance": 1,
      "edge_location_display_name": "US East"
    },
    {
      "sc_state_instance": 1,
      "edge_location_display_name": "US West"
    }
  ]
}
```
