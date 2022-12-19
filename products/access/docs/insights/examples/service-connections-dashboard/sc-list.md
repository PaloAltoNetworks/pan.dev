---
id: sc_list
title: Service Connection List
description: Service Connection List example
sidebar_label: Service Connection List
---

You can view service connections status and metrics in the Total Service Connections table using the `sc_list` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/sc_list_img.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/custom/query/serviceconnections/sc_list

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/custom/query/serviceconnections/sc_list

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

```json
{
  "filter": {
    "operator": "AND",
    "rules": [
      {
        "property": "node_type",
        "operator": "equals",
        "values": [51]
      },
      {
        "property": "event_time",
        "operator": "last_n_days",
        "values": [30]
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
    "createdAt": "2022-10-14T18:11:04Z",
    "dataCount": 3,
    "requestId": "50b1b64d-e143-48da-a128-03d8747c7d20",
    "queryInput": {
      "time_range": "last 30 day(s)",
      "event_time": {
        "from": "2022-09-14T00:00:00Z",
        "to": "2022-10-14T18:10:59Z",
        "from_epoch": 1663113600000,
        "to_epoch": 1665771059000
      }
    },
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "node_type": 51,
      "site_name": "xx-xx",
      "node_type_name": "Service Connection",
      "edge_location_display_name": "US West",
      "cloud_region_name": "sa-west-1",
      "cloud_provider": "gcp",
      "instance_state": 1,
      "instance_state_name": "Up",
      "instance_public_ip": "xx.xxx.xxx.xxx",
      "site_capacity": 0,
      "site_aggregate_capacity": 0,
      "site_disconnection": 0,
      "site_connection_duration": 2507910059,
      "event_time": 1665013411000,
      "avg_throughput": 0.0,
      "peak_throughput": 0.0,
      "avg_ingress": 0.0,
      "avg_egress": 0.0,
      "source_ip": [],
      "destination_ip": [],
      "site_state": 3,
      "site_state_name": "Down",
      "site_up_tunnels": 0,
      "site_all_tunnels": 1
    },
    {
      "node_type": 51,
      "site_name": "xxx-xxxxx-xxxxxxxxx",
      "node_type_name": "Service Connection",
      "edge_location_display_name": "US West",
      "cloud_region_name": "sa-west-1",
      "cloud_provider": "gcp",
      "instance_state": 1,
      "instance_state_name": "Up",
      "instance_public_ip": "xx.xxx.xxx.xx",
      "site_capacity": 0,
      "site_aggregate_capacity": 0,
      "site_disconnection": 8,
      "site_connection_duration": 240302978,
      "event_time": 1665771008000,
      "avg_throughput": 3.84,
      "peak_throughput": 218.98,
      "avg_ingress": 2.82,
      "avg_egress": 3.66,
      "source_ip": ["xx.xxx.xxx.xx"],
      "destination_ip": ["x.xx.xx.x", "x.x.x.x"],
      "source_ip_string": "xx.xxx.xxx.xx",
      "destination_ip_string": "x.xx.xx.x x.x.x.x",
      "site_state": 2,
      "site_state_name": "Up",
      "site_up_tunnels": 1,
      "site_all_tunnels": 1
    }
  ]
}
```
