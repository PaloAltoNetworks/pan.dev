---
id: location-mu-status
title: GlobalProtect Mobile User Edge Location Status
description: GlobalProtect Mobile Edge Location User Status
sidebar_label: GlobalProtect Mobile User Edge Location Status
---

You can view the status of the mobile users managed for a specific Prisma Access location using the `edge_location_current_status` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/location_mu_status_img.png)

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

The following request payload filters on `mu_state_instance`. The values for this filter are:

- `0` : Instance is down.
- `1` : Instance is up.
- `2` : Instance is in a warning state.

```json
{
  "properties": [
    {
      "property": "mu_state_instance"
    },
    {
      "property": "edge_location_display_name"
    }
  ],
  "filter": {
    "rules": [
      {
        "property": "mu_state_instance",
        "operator": "in",
        "values": [0, 1]
      }
    ]
  }
}
```

## Request Response

```json
{
  "header": {
    "createdAt": "2022-10-07T20:53:46Z",
    "dataCount": 1,
    "requestId": "8dee86a7-5745-428f-8d0f-19dff1b9eb00",
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "mu_state_instance": 1,
      "edge_location_display_name": "US West"
    }
  ]
}
```
