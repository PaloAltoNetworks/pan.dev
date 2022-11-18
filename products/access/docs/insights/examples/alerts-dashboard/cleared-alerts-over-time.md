---
id: cleared-alerts-over-time
title: Cleared Alerts Over Time
description: Cleared Alerts Over Time
sidebar_label: Cleared Alerts Over Time
---

You can view alerts that have been cleared over time using the `prisma_sase_external_alerts_current` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/Alerts_cleared_open_raised_over_time.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/query/prisma_sase_external_alerts_current

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/query/prisma_sase_external_alerts_current

    Prisma-Tenant:{{tenant_id}}

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

## Request Payload

```json
{
  "properties": [
    {
      "property": "alert_id",
      "function": "distinct_count",
      "alias": "count"
    }
  ],
  "histogram": {
    "property": "updated_time",
    "enableEmptyInterval": true,
    "range": "hour",
    "value": "1"
  },
  "filter": {
    "rules": [
      {
        "property": "state",
        "operator": "equals",
        "values": ["Cleared"]
      },
      {
        "property": "severity",
        "operator": "not_in",
        "values": ["Notification"]
      },
      {
        "property": "updated_time",
        "operator": "between",
        "values": [1665783815889, 1665784714889]
      }
    ]
  }
}
```

## Request Response

```json
{
  "header": {
    "createdAt": "2022-10-17T16:46:01Z",
    "dataCount": 1,
    "requestId": "5933b6f9-2345-403b-891a-02ba6b12b65c",
    "queryInput": {
      "time_range": "custom",
      "event_time": {
        "from": "2022-10-14T21:43:35Z",
        "to": "2022-10-14T21:58:34Z",
        "from_epoch": 1665783815000,
        "to_epoch": 1665784714000
      },
      "histogram": true,
      "histogram_range": "hour",
      "histogram_value": "1"
    },
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "histogram_time": 1665783815000
    }
  ]
}
```
