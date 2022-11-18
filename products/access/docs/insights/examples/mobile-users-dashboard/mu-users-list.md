---
id: mu-users-list
title: GlobalProtect Mobile Users List
description: GlobalProtect Mobile Users List
sidebar_label: GlobalProtect Mobile Users List
---

You can view the list of GlobalProtect Mobile Users who were connected in the last 30 days with the `user_list` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/mu_users_list_img.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/export/schedule/custom/query/gp_mobileusers/user_list

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/export/schedule/custom/query/gp_mobileusers/user_list

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
  "filter": {
    "rules": [
      {
        "property": "event_time",
        "operator": "last_n_days",
        "values": [30]
      }
    ]
  },
  "count": 10
}
```

## Request Response

```json
{
  "header": {
    "createdAt": "2022-10-13T18:39:20Z",
    "dataCount": 5,
    "requestId": "e1916fb7-50b9-42ea-a9c2-0b6ef669522c",
    "queryInput": {
      "time_range": "last 30 day(s)",
      "event_time": {
        "from": "2022-09-13T00:00:00Z",
        "to": "2022-10-13T18:38:59Z",
        "from_epoch": 1663027200000,
        "to_epoch": 1665686339000
      }
    },
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "gpuser_name": "xxxxx@xxxxxxx.com",
      "num_connections": 2,
      "user_location": "Brisbane",
      "pa_location": "Australia Southeast",
      "user_location_country": "Australia"
    },
    {
      "gpuser_name": "xxxxxx@xxxxxxx.com",
      "num_connections": 1,
      "user_location": "Malvern",
      "pa_location": "Australia Southeast",
      "user_location_country": "Australia"
    },
    {
      "gpuser_name": "xxxx@xxxxxxxx.com",
      "num_connections": 1,
      "user_location": "Santa Clara",
      "pa_location": "US Central",
      "user_location_country": "United States"
    },
    {
      "gpuser_name": "xxxx@xxxxx.xxxxx.com",
      "num_connections": 2,
      "user_location": "San Jose",
      "pa_location": "US Central",
      "user_location_country": "United States"
    },
    {
      "gpuser_name": "xxx@xxxxx.xxxxx.com",
      "num_connections": 1,
      "user_location": "Malvern",
      "pa_location": "Australia Southeast",
      "user_location_country": "Australia"
    }
  ]
}
```
