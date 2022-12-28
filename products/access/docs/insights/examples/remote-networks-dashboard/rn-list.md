---
id: rn-list
title: Remote Network Site List
description: Remote Network Site List
sidebar_label: Remote Network Site List
---

This example shows a total remote network site list of your remote networks' status and metrics for the last 30 days using the `rn_list` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/rn_list_img.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/custom/query/remotenetworks/rn_list

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/custom/query/remotenetworks/rn_list

    Prisma-Tenant:{{tenant_id}}

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

## Request Payload

The following request payload filters on `event_time`. The
operators for this filter are:

- `last_n_minutes` : n = 15.
- `last_n_hours` : n = 1, 3, 24, or 48.
- `last_n_days` : n = 7 or 30.

```json
{
  "filter": {
    "operator": "AND",
    "rules": [
      {
        "property": "event_time",
        "operator": "last_n_days",
        "values": [30]
      }
    ]
  }
}
```

## Request Response

```json
{
  "header": {
    "createdAt": "2022-10-13T21:52:39Z",
    "dataCount": 3,
    "requestId": "b29249c7-25c1-4593-8bf6-bb22eff2fb7a",
    "queryInput": {
      "time_range": "last 30 day(s)",
      "event_time": {
        "from": "2022-09-13T00:00:00Z",
        "to": "2022-10-13T21:51:59Z",
        "from_epoch": 1663027200000,
        "to_epoch": 1665697919000
      }
    },
    "status": {
      "subCode": 200
    }
  },
  "data": [
    {
      "node_type": 48,
      "site_name": "xxxx-xxxx-xxxx_xx_xxxx",
      "node_type_name": "Remote Network",
      "edge_location_display_name": "US East",
      "cloud_region_name": "us-east4",
      "cloud_provider": "gcp",
      "instance_state": 1,
      "instance_state_name": "Up",
      "instance_public_ip": "xxx.xx.xxx.xxx",
      "ipsec_node": "us-east-xxxxx",
      "compute_location_display_name": "US East",
      "site_capacity": 1000000,
      "site_aggregate_capacity": 3000000,
      "latest_site_capacity": 1000000,
      "latest_site_aggregate_capacity": 3000000,
      "site_disconnection": 567,
      "site_connection_duration": 99650583,
      "event_time": 1665697909000,
      "avg_throughput": 151.82,
      "peak_throughput": 53359.63,
      "avg_ingress": 15.83,
      "avg_egress": 151.82,
      "source_ip": ["xxx.xx.xxx.xxx"],
      "destination_ip": ["xxx.xxx.xx.xx"],
      "source_ip_string": "xxx.xx.xxx.xxx",
      "destination_ip_string": "xxx.xxx.xx.xx",
      "site_state": 1,
      "site_state_name": "Up",
      "site_up_tunnels": 1,
      "site_all_tunnels": 1
    },
    {
      "node_type": 48,
      "site_name": "xxxx-xxx_xxxxxx_xx_xxxx",
      "node_type_name": "Remote Network",
      "edge_location_display_name": "US Northwest",
      "cloud_region_name": "us-west1",
      "cloud_provider": "gcp",
      "instance_state": 1,
      "instance_state_name": "Up",
      "instance_public_ip": "xxx.xx.xx.xxx",
      "ipsec_node": "us-northwest-xxxxx",
      "compute_location_display_name": "US Northwest",
      "site_capacity": 1000000,
      "site_aggregate_capacity": 2000000,
      "latest_site_capacity": 1000000,
      "latest_site_aggregate_capacity": 2000000,
      "site_disconnection": 2,
      "site_connection_duration": 399443,
      "event_time": 1665697850000,
      "avg_throughput": 287.34,
      "peak_throughput": 1923.08,
      "avg_ingress": 29.13,
      "avg_egress": 287.34,
      "source_ip": ["xxx.xx.xx.xxx"],
      "destination_ip": ["x.xxx.xxx.xxx"],
      "source_ip_string": "xxx.xx.xx.xxx",
      "destination_ip_string": "x.xxx.xxx.xxx",
      "site_state": 1,
      "site_state_name": "Up",
      "site_up_tunnels": 1,
      "site_all_tunnels": 1
    },
    {
      "node_type": 48,
      "site_name": "xx-xx",
      "node_type_name": "Remote Network",
      "edge_location_display_name": "US Central",
      "cloud_region_name": "us-central1",
      "cloud_provider": "gcp",
      "instance_state": 1,
      "instance_state_name": "Up",
      "instance_public_ip": "xxx.xx.xxx.xx",
      "ipsec_node": "us-central-xxxx",
      "compute_location_display_name": "US Central",
      "site_capacity": 500000,
      "site_aggregate_capacity": 2000000,
      "latest_site_capacity": 500000,
      "latest_site_aggregate_capacity": 2000000,
      "site_disconnection": 1,
      "site_connection_duration": 364911397,
      "event_time": 1665697891000,
      "avg_throughput": 0.0,
      "peak_throughput": 0.22,
      "avg_ingress": 0.0,
      "avg_egress": 0.0,
      "source_ip": ["xxx.xx.xxx.xx"],
      "destination_ip": ["x.xxx.xx.x"],
      "source_ip_string": "xxx.xx.xxx.xx",
      "destination_ip_string": "x.xxx.xx.x",
      "site_state": 1,
      "site_state_name": "Up",
      "site_up_tunnels": 1,
      "site_all_tunnels": 1
    }
  ]
}
```
