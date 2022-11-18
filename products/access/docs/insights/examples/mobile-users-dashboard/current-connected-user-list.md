---
id: current-connected-user-list
title: Current Connected User List
description: Current Connected User List
sidebar_label: Current Connected User List
---

You can view a list of currently connected Mobile Users using the `current_connected_user_list` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/current_connected_user_list_img.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/custom/query/gp_mobileusers/current_connected_user_list

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/custom/query/gp_mobileusers/current_connected_user_list

    Prisma-Tenant:{{tenant_id}}

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

## Request Payload

The following request payload uses the following filter:

- `edge_location_display_name` : String. The edge location display name is a location name.

```json
{
  "filter": {
    "rules": [
      {
        "property": "edge_location_display_name",
        "operator": "equals",
        "values": ["US Central"]
      }
    ]
  }
}
```

## Request Response

```json
{
  "header": {
    "createdAt": "2022-10-13T18:33:16Z",
    "dataCount": 2,
    "requestId": "c12ab550-e3ea-453e-8ece-2aa8bf599751",
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "gpuser_name": "xxxxx@xxxxxx.xxxxx.com",
      "num_connections": 1,
      "user_location": "San Jose",
      "pa_location": "US Central",
      "user_location_country": "United States"
    },
    {
      "gpuser_name": "xxxx@xxxxx.com",
      "num_connections": 1,
      "user_location": "Santa Clara",
      "pa_location": "US Central",
      "user_location_country": "United States"
    }
  ]
}
```
