---
id: location-gp-mobile-users-logins
title: GlobalProtect Mobile Users Logins
description: GlobalProtect Mobile Users Logins
sidebar_label: GlobalProtect Mobile Users Logins
---

You can view GlobalProtect mobile user logins using the `location_gp_mobile_users_logins` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/location_gp_mobile_users_img.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/custom/query/locations/location_gp_mobile_users_logins

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/custom/query/locations/location_gp_mobile_users_logins

    Prisma-Tenant:{{tenant_id}}

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

## Request Payload

The following request payload filters on both `event_time` and `edge_location_display_name`.

`event_time`:

- operator : `last_n_days` : Number of days.
- value : `90` : From 0 to 90 days.

`edge_location_display_name`

- operator : `not_equals`
- value : `no_data`

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
    "createdAt": "2022-10-13T18:22:16Z",
    "dataCount": 2,
    "requestId": "b54ae80d-aa53-4543-b336-3c23bbd63d20",
    "queryInput": {
      "time_range": "last 1 day(s)",
      "event_time": {
        "from": "2022-10-12T00:00:00Z",
        "to": "2022-10-13T18:21:59Z",
        "from_epoch": 1665532800000,
        "to_epoch": 1665685319000
      }
    },
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "edge_location_display_name": "Australia Southeast",
      "unique_users": 1
    },
    {
      "edge_location_display_name": "US Central",
      "unique_users": 2
    }
  ]
}
```
