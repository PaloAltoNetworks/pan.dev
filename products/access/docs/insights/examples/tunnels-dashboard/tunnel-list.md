---
id: tunnel_list
title: Tunnel List
description: Tunnel List
sidebar_label: Tunnel List
---

You can query the state of a tunnel for the last 30 days using the `tunnel_list` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/tunnel-list-img.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/custom/query/tunnels/tunnel_list

    Authorization: Bearer {{jwt_token}}
    
    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/custom/query/tunnels/tunnel_list

    Prisma-Tenant:{{tenant_id}}

    Authorization: Bearer {{jwt_token}}
    
    Content-Type: application/json

## Request Payload

The following request payload filters on `event_time` and `tunnel_state`.

The operators for `event_time` are:

* `last_n_minutes` : n = 15.
* `last_n_hours` : n = 1, 3, 24, or 48.
* `last_n_days` : n = 7 or 30.


`tunnel_state`: The values for this filter are:
* `0` : Initializing
* `1` : Up


    {
      "filter": {
        "operator": "AND",
        "rules": [
          {
            "property": "event_time",
            "operator": "last_n_days",
            "values": [
              30
            ]
          },
          {
            "property": "tunnel_state",
            "operator": "in",
            "values": [
              1
            ]
          }
        ]
      }
    }


## Request Response

In the following example response, `dataCount` indicates the number of elements in the `data`
array. However, this example truncates the data array for brevity and readability so the 
`dataCount` value does not match the number of elements in the example response.

    {
       "header": {
           "createdAt": "2022-10-14T18:21:23Z",
           "dataCount": 41,
           "requestId": "a887f67a-688c-4d35-a240-5232fc74dada",
           "queryInput": {
               "time_range": "last 30 day(s)",
               "event_time": {
                   "from": "2022-09-14T00:00:00Z",
                   "to": "2022-10-14T18:20:59Z",
                   "from_epoch": 1663113600000,
                   "to_epoch": 1665771659000
               }
           },
           "status": {
               "subCode": 200
           }
       },
       "data": [
           {
               "node_type": 48,
               "okyo_tunnel_type": 0,
               "tunnel_name": "xxxxxxxxxxxxx",
               "node_type_name": "Remote Network",
               "site_name": "xxxx-xxxx-xxxx-xxxx-xxx",
               "edge_location_display_name": "US Central",
               "instance_name": "xxxxxxxxxxxxxxx",
               "cloud_region_name": "us-east-2",
               "cloud_provider": "gcp",
               "instance_state": 1,
               "instance_state_name": "Up",
               "instance_public_ip": "xx.xx.xx.xxx",
               "sub_node_type": 0,
               "tunnel_disconnection": 7,
               "tunnel_connection_duration": 746520000,
               "avg_throughput": 0.0,
               "peak_throughput": 0.0,
               "tunnel_state": 1,
               "tunnel_state_name": "Up",
               "tunnel_monitoring_state": 2,
               "tunnel_monitoring_state_name": "Not Configured",
               "tunnel_type_name": "Remote Network"
           },
           {
               "node_type": 48,
               "okyo_tunnel_type": 0,
               "tunnel_name": "xxxxxxxxxxx",
               "node_type_name": "Remote Network",
               "site_name": "xxxxxxxxxxx",
               "edge_location_display_name": "Panama",
               "instance_name": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
               "cloud_region_name": "us-southeast",
               "cloud_provider": "gcp",
               "instance_state": 1,
               "instance_state_name": "Up",
               "instance_public_ip": "xx.xxx.xx.xx",
               "sub_node_type": 0,
               "tunnel_disconnection": 5,
               "tunnel_connection_duration": 400320000,
               "avg_throughput": 0.0,
               "peak_throughput": 0.0,
               "tunnel_state": 1,
               "tunnel_state_name": "Up",
               "tunnel_monitoring_state": 2,
               "tunnel_monitoring_state_name": "Not Configured",
               "tunnel_type_name": "Remote Network"
           },

             ... output truncated for brevity ...
          {
           "node_type": 48,
           "okyo_tunnel_type": 0,
           "tunnel_name": "xxxxxxxxxxxxxxxxxx",
           "node_type_name": "Remote Network",
           "site_name": "xxxxxxxxxxxxxxxxxxx",
           "edge_location_display_name": "US Central",
           "instance_name": "xxxxxxxxxxxxxxxxxxxxxx",
           "cloud_region_name": "us-east-2",
           "cloud_provider": "gcp",
           "instance_state": 1,
           "instance_state_name": "Up",
           "instance_public_ip": "xx.xx.xx.xxx",
           "sub_node_type": 0,
           "tunnel_disconnection": 7,
           "tunnel_connection_duration": 746400000,
           "avg_throughput": 0.0,
           "peak_throughput": 0.0,
           "tunnel_state": 1,
           "tunnel_state_name": "Up",
           "tunnel_monitoring_state": 2,
           "tunnel_monitoring_state_name": "Not Configured",
           "tunnel_type_name": "Remote Network"
       }
       ]
    }
    
