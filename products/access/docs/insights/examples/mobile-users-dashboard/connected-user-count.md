---
id: connected-user-count
title: Connected User Count
description: Connected User Count
sidebar_label: Connected User Count
---

You can view the number of Mobile Users connected in real time using the `connected_user_count` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/connected_user_count_img.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/custom/query/gp_mobileusers/connected_user_count

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/custom/query/gp_mobileusers/connected_user_count

    Prisma-Tenant:{{tenant_id}}

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

## Request Payload

```json
{
  "count": 5
}
```

## Request Response

```json
{
  "header": {
    "createdAt": "2022-10-13T18:28:45Z",
    "dataCount": 1,
    "requestId": "4c7d9811-59be-43e6-9e40-c59167acd69b",
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "user_count": 1
    }
  ]
}
```
