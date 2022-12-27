---
id: sc-bandwidth-consumption
title: Service Connection Bandwidth Consumption Over Time
description: Service Connection Bandwidth Consumption
sidebar_label: Service Connection Bandwidth Consumption Over Time
---

You can view service connection bandwidth consumption for the past 24 hours using the `tunnel_status` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/sc-bandwidth-consumption-img.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/query/tunnel_status

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/query/tunnel_status

    Prisma-Tenant:{{tenant_id}}

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

## Request Payload

The following request payload filters on `event_time` and
[node_type](/access/docs/insights/query_filters/#node-types).

The operators for `event_time` are:

- `last_n_minutes` : n = 15.
- `last_n_hours` : n = 1, 3, 24, or 48.
- `last_n_days` : n = 7 or 30.

````json
    {
     "properties": [
       {
         "function": "avg",
         "format": {
           "function": "round",
           "value": 2
         },
         "property": "tunnel_throughput_ingress",
         "alias": "avg_ingress"
       },
       {
         "function": "avg",
         "format": {
           "function": "round",
           "value": 2
         },
         "property": "tunnel_throughput_egress",
         "alias": "avg_egress"
       },
       {
         "function": "max",
         "format": {
           "function": "round",
           "value": 2
         },
         "property": "tunnel_throughput_ingress",
         "alias": "peak_ingress"
       },
       {
         "function": "max",
         "format": {
           "function": "round",
           "value": 2
         },
         "property": "tunnel_throughput_egress",
         "alias": "peak_egress"
       }
     ],
     "histogram": {
       "property": "event_time",
       "range": "hour"
     },
     "filter": {
       "rules": [
         {
           "property": "node_type",
           "operator": "equals",
           "values": [
             51
           ]
         },
         {
           "property": "event_time",
           "operator": "last_n_hours",
           "values": [
             24
           ]
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
           "createdAt": "2022-10-14T18:15:49Z",
           "dataCount": 25,
           "requestId": "25af2191-503f-4647-8090-53587a38fd46",
           "queryInput": {
               "time_range": "last 24 hour(s)",
               "event_time": {
                   "from": "2022-10-13T18:00:00Z",
                   "to": "2022-10-14T18:14:59Z",
                   "from_epoch": 1665684000000,
                   "to_epoch": 1665771299000
               }
           },
           "status": {
               "subCode": 200
           }
       },
       "data": [
           {
               "event_time": 1665684000000,
               "avg_ingress": 0.15,
               "avg_egress": 0.24,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665687600000,
               "avg_ingress": 0.16,
               "avg_egress": 0.24,
               "peak_ingress": 5.98,
               "peak_egress": 2.72
           },
           {
               "event_time": 1665691200000,
               "avg_ingress": 0.6,
               "avg_egress": 0.82,
               "peak_ingress": 81.3,
               "peak_egress": 114.21
           },
           {
               "event_time": 1665694800000,
               "avg_ingress": 0.15,
               "avg_egress": 0.24,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665698400000,
               "avg_ingress": 0.16,
               "avg_egress": 0.24,
               "peak_ingress": 9.1,
               "peak_egress": 2.99
           },
           {
               "event_time": 1665702000000,
               "avg_ingress": 0.16,
               "avg_egress": 0.24,
               "peak_ingress": 6.62,
               "peak_egress": 2.87
           },
           {
               "event_time": 1665705600000,
               "avg_ingress": 0.15,
               "avg_egress": 0.24,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665709200000,
               "avg_ingress": 0.15,
               "avg_egress": 0.24,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665712800000,
               "avg_ingress": 0.59,
               "avg_egress": 0.83,
               "peak_ingress": 81.02,
               "peak_egress": 115.25
           },
           {
               "event_time": 1665716400000,
               "avg_ingress": 0.15,
               "avg_egress": 0.24,
               "peak_ingress": 5.64,
               "peak_egress": 2.65
           },
           {
               "event_time": 1665720000000,
               "avg_ingress": 0.15,
               "avg_egress": 0.24,
               "peak_ingress": 4.15,
               "peak_egress": 2.53
           },
           {
               "event_time": 1665723600000,
               "avg_ingress": 0.16,
               "avg_egress": 0.24,
               "peak_ingress": 6.53,
               "peak_egress": 2.88
           },
           {
               "event_time": 1665727200000,
               "avg_ingress": 0.15,
               "avg_egress": 0.24,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665730800000,
               "avg_ingress": 0.15,
               "avg_egress": 0.24,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665734400000,
               "avg_ingress": 0.15,
               "avg_egress": 0.24,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665738000000,
               "avg_ingress": 0.15,
               "avg_egress": 0.24,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665741600000,
               "avg_ingress": 0.15,
               "avg_egress": 0.24,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665745200000,
               "avg_ingress": 0.58,
               "avg_egress": 0.82,
               "peak_ingress": 81.4,
               "peak_egress": 114.97
           },
           {
               "event_time": 1665748800000,
               "avg_ingress": 0.14,
               "avg_egress": 0.21,
               "peak_ingress": 5.73,
               "peak_egress": 2.81
           },
           {
               "event_time": 1665752400000,
               "avg_ingress": 0.13,
               "avg_egress": 0.21,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665756000000,
               "avg_ingress": 0.14,
               "avg_egress": 0.21,
               "peak_ingress": 10.19,
               "peak_egress": 3.01
           },
           {
               "event_time": 1665759600000,
               "avg_ingress": 0.13,
               "avg_egress": 0.21,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665763200000,
               "avg_ingress": 0.13,
               "avg_egress": 0.21,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665766800000,
               "avg_ingress": 0.13,
               "avg_egress": 0.21,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           },
           {
               "event_time": 1665770400000,
               "avg_ingress": 0.13,
               "avg_egress": 0.21,
               "peak_ingress": 1.32,
               "peak_egress": 2.41
           }
       ]
    }
````
