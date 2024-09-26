---
id: cleared-alerts
title: Cleared Alerts Over Time
description: Cleared Alerts Over Time
sidebar_label: Cleared Alerts Over Time
---

You can view new cleared alerts using the `prisma_sase_external_alerts_current` resource.

The information returned by this query can also be viewed in the UI, here:

![](/sase/img/cleared_alerts_img.png)

## API Call

### 2.0 Call

    POST /api/sase/v2.0/resource/query/prisma_sase_external_alerts_current

    Prisma-Tenant:{{tsg_id}}

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

## Request Payload

The following request payload uses the `alert_id`, `cleared_time`, `state,` and `severity` filters:

`alert_id` : Unique alert ID.

`cleared_time` : string, format example `2021-07-02 23:12:13 UTC`

`state` : The values for this filter are:

- `Raised` : The alert has been raised to an IT specialist's attention.
- `Cleared` : The alert has been cleared.

`severity` : The values for this filter are:

- `4` : High severity
- `3` : Medium severity
- `2` : Low severity
- `1` : Informational alert

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
    "property": "cleared_time",
    "enableEmptyInterval": true,
    "range": "hour",
    "value": "3"
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
        "property": "cleared_time",
        "operator": "between",
        "values": [1671868800000, 1674516687000]
      }
    ]
  }
}
```

## Request Response

```json
{
  "header": {
    "createdAt": "2022-12-16T23:42:23Z",
    "rowCount": 1,
    "requestId": "6f33c730-138c-43d4-8a9f-f6c1c4bde3a6"
  },
  "data": [
    {
      "header": {
        "createdAt": "2022-12-16T23:42:23Z",
        "rowCount": 2,
        "requestId": "6f33c730-138c-43d4-8a9f-f6c1c4bde3a6:1",
        "name": "clearedAlerts",
        "queryInput": {
          "time_range": "custom",
          "event_time": {
            "from": "2022-12-07T08:17:10Z",
            "to": "2022-12-07T11:17:10Z",
            "from_epoch": 1670401030000,
            "to_epoch": 1670411830000
          },
          "histogram": true,
          "histogram_range": "hour",
          "histogram_value": "3"
        }
      },
      "data": [
        {
          "histogram_time": 1670401030000,
          "cleared_time": 1670401030000,
          "count": 3
        },
        {
          "histogram_time": 1670411830000
        }
      ]
    }
  ]
}
```
