---
id: location-ep-status
title: Explicit Proxy Mobile Users Status
description: Explicit Proxy Mobile Users Status
sidebar_label: Explicit Proxy Mobile Users Status
---

You can view the status of the explicit proxy mobile users managed for a specific Prisma Access location
using the `edge_location_current_status` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/location_ep_status_img.png)

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

The following request payload filters on `ep_state_instance`. The
values for this filter are:

- `0` : Instance is down.
- `1` : Instance is up.
- `2` : Instance is in a warning state.

```json
{
  "properties": [
    {
      "property": "ep_state_instance"
    },
    {
      "property": "edge_location_display_name"
    }
  ],
  "filter": {
    "rules": [
      {
        "property": "ep_state_instance",
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
    "createdAt": "2022-10-13T17:31:23Z",
    "dataCount": 9,
    "requestId": "4d83cec6-40db-4c16-b1a5-4bb703663018",
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "ep_state_instance": 1,
      "edge_location_display_name": "US Central"
    },
    {
      "ep_state_instance": 1,
      "edge_location_display_name": "US Northwest"
    },
    {
      "ep_state_instance": 1,
      "edge_location_display_name": "Australia Southeast"
    },
    {
      "ep_state_instance": 1,
      "edge_location_display_name": "Bahrain"
    },
    {
      "ep_state_instance": 1,
      "edge_location_display_name": "Brazil South"
    },
    {
      "ep_state_instance": 1,
      "edge_location_display_name": "India West"
    },
    {
      "ep_state_instance": 1,
      "edge_location_display_name": "Japan Central"
    },
    {
      "ep_state_instance": 1,
      "edge_location_display_name": "South Africa West"
    },
    {
      "ep_state_instance": 1,
      "edge_location_display_name": "UK"
    }
  ]
}
```
