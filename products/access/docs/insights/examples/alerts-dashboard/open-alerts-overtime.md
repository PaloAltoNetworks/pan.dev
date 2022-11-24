---
id: open-alerts-overtime
title: Open Alerts Over Time
description: Open Alerts Over Time
sidebar_label: Open Alerts Over Time
---

You can view the new raised alert list totals over time using the `prisma_sase_external_alerts_current` resource.

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

The following request payload uses the `severity_id` and `raised-time` filters:

`severity_id` : The values for this filter are:
* `High` : 4
* `Medium` : 3
* `Low` : 2
* `Informational` : 1

`raised-time` : string, format example `2021-07-03 23:12:13 UTC`


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
            "values": [
              "Raised"
            ]
          },
          {
            "property": "severity",
            "operator": "not_in",
            "values": [
              "Notification"
            ]      },
          {
            "property": "updated_time",
            "operator": "between",
            "values": [
              1665783815889,
              1665784714889
            ]
          }
        ]
      }
    }


## Request Response

    {
       "header": {
           "createdAt": "2022-10-17T16:44:21Z",
           "dataCount": 3,
           "requestId": "72125f60-90bd-4a99-bb45-2fc22ed1eddd",
           "queryInput": {
               "time_range": "custom",
               "event_time": {
                   "from": "2022-09-14T19:39:37Z",
                   "to": "2022-09-14T21:39:37Z",
                   "from_epoch": 1663184377000,
                   "to_epoch": 1663191577000
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
               "histogram_time": 1663184377000
           },
           {
               "histogram_time": 1663187977000
           },
           {
               "histogram_time": 1663191577000
           }
       ]
    }