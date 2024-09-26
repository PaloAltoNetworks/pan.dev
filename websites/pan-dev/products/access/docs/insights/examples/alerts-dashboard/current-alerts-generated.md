---
id: current-alerts-generated
title: Current Alerts Generated
description: Current Alerts Generated
sidebar_label: Current Alerts Generated
---

You can view all currently generated alerts using the `prisma_sase_external_alerts_current` resource.

The information returned by this query can also be viewed in the UI, here:

![](/access/img/Alerts_detail_over_time.png)

## API Calls

### 1.0 Call

    POST /api/sase/v1.0/resource/tenant/{super_tenant_id}/query/prisma_sase_external_alerts_current

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

### 2.0 Call

    POST /api/sase/v2.0/resource/query/prisma_sase_external_alerts_current

    Prisma-Tenant:{{tsg_id}}

    Authorization: Bearer {{jwt_token}}

    Content-Type: application/json

## Request Payload

The following request payload uses the `severity` filter to find all events that are not
notifications. The values for the `severity` filter are:

- `4` : High severity
- `3` : Medium severity
- `2` : Low severity
- `1` : Informational alert

```json
{
  "properties": [
    {
      "property": "alert_id"
    },
    {
      "property": "severity"
    },
    {
      "property": "message",
      "alias": "Alert_Name"
    },
    {
      "property": "raised_time"
    },
    {
      "property": "updated_time",
      "sort": {
        "order": "desc",
        "sequence": 2
      }
    },
    {
      "property": "state",
      "sort": {
        "order": "desc",
        "sequence": 1
      }
    },
    {
      "property": "category"
    },
    {
      "property": "code"
    },
    {
      "property": "primary_impacted_objects",
      "alias": "Primary_Impacted_Objects",
      "function": "to_json_string"
    },
    {
      "property": "clear_reason"
    },
    {
      "property": "age"
    },
    {
      "property": "resource_context",
      "alias": "related_objects",
      "function": "to_json_string"
    }
  ],
  "filter": {
    "rules": [
      {
        "property": "severity",
        "operator": "not_in",
        "values": ["Notification"]
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
       "createdAt": "2022-10-17T16:28:15Z",
       "dataCount": 9,
       "requestId": "6c79b3db-50f6-4ed0-b264-359d011b169c",
       "status": {
           "subCode": 200
       }
   },
   "data": [
       {
           "alert_id": "cd74675f-72ab-42be-95db-213d8c2c4416",
           "severity": "High",
           "Alert_Name": "All tunnels for the Service Connection site xx-xxx xxx are down",
           "raised_time": 1665592836000,
           "updated_time": 1665592836000,
           "state": "Raised",
           "category": "SC",
           "code": "AL_SC_SITE_DOWN",
           "Primary_Impacted_Objects": "{\"tenant_id\":\"xxxxxxxxxx\",\"sub_tenant_id\":\"xxxxxxxxx\",\"location\":null,\"site_name\":\"xx-xxx xxx\",\"tunnel_name\":null,\"bgp_peer_name\":null}",
           "clear_reason": "",
           "age": 431258,
           "related_objects": "{\"location\":\"US East\",\"connection_type\":null,\"source_ip_address\":\"xxx.xx.xx.xxx\",\"destination_ip_address\":\"x.xx.xx.x\",\"bgp_peer_name\":null,\"serial_number\":null,\"user\":null}"
       },
       {
           "alert_id": "2e10cef0-6a0e-4577-bedc-4295f50052b3",
           "severity": "High",
           "Alert_Name": "All tunnels for the Remote Network site xxxx-xxx_xxxxxxxxxxxx_xx_xxxx are down",
           "raised_time": 1665783632000,
           "updated_time": 1665870381000,
           "state": "Cleared",
           "category": "RN",
           "code": "AL_RN_SITE_DOWN",
           "Primary_Impacted_Objects": "{\"tenant_id\":\"xxxxxxxxxx\",\"sub_tenant_id\":\"xxxxxxxxxx\",\"location\":null,\"site_name\":\"xxxx-xxx_xxxxxxxxxxxx_xx_xxxx\",\"tunnel_name\":null,\"bgp_peer_name\":null}",
           "clear_reason": "No Data Timeout",
           "age": 240462,
           "related_objects": "{\"location\":\"US Northwest\",\"connection_type\":null,\"source_ip_address\":\"xxx.xx.xx.xxx\",\"destination_ip_address\":\"x.xxx.xxx.xxx\",\"bgp_peer_name\":null,\"serial_number\":null,\"user\":null}"
       },
       {
           "alert_id": "94827ef7-2248-493f-8274-4787147fab1d",
           "severity": "High",
           "Alert_Name": "All tunnels for the Service Connection site xxxxxxxxx are down",
           "raised_time": 1665682832000,
           "updated_time": 1665689182000,
           "state": "Cleared",
           "category": "SC",
           "code": "AL_SC_SITE_DOWN",
           "Primary_Impacted_Objects": "{\"tenant_id\":\"xxxxxxxxxx\",\"sub_tenant_id\":\"xxxxxxxxxx\",\"location\":null,\"site_name\":\"xxxxxxxxx\",\"tunnel_name\":null,\"bgp_peer_name\":null}",
           "clear_reason": "Auto",
           "age": 341262,
           "related_objects": "{\"location\":\"US West\",\"connection_type\":null,\"source_ip_address\":\"xxx.xxx.xxx.xx\",\"destination_ip_address\":\"xx.xxx.xx.xxx\",\"bgp_peer_name\":null,\"serial_number\":null,\"user\":null}"
       },
       {
           "alert_id": "f9ef1a0a-e0f9-4352-a582-7a2c9b757dc7",
           "severity": "High",
           "Alert_Name": "All tunnels for the Service Connection site xxxxxxxxx are down",
           "raised_time": 1665616333000,
           "updated_time": 1665679174000,
           "state": "Cleared",
           "category": "SC",
           "code": "AL_SC_SITE_DOWN",
           "Primary_Impacted_Objects": "{\"tenant_id\":\"xxxxxxxxx\",\"sub_tenant_id\":\"xxxxxxxxx\",\"location\":null,\"site_name\":\"xxxxxxxxx\",\"tunnel_name\":null,\"bgp_peer_name\":null}",
           "clear_reason": "Auto",
           "age": 407761,
           "related_objects": "{\"location\":\"US West\",\"connection_type\":null,\"source_ip_address\":\"xxx.xxx.xxx.xx\",\"destination_ip_address\":\"xx.xxx.xx.xxx\",\"bgp_peer_name\":null,\"serial_number\":null,\"user\":null}"
       },
       {
           "alert_id": "f82aef39-5405-4281-9e1c-bc26b330ad93",
           "severity": "High",
           "Alert_Name": "All tunnels for the Service Connection site xxxxxxxxx are down",
           "raised_time": 1665596416000,
           "updated_time": 1665612611000,
           "state": "Cleared",
           "category": "SC",
           "code": "AL_SC_SITE_DOWN",
           "Primary_Impacted_Objects": "{\"tenant_id\":\"xxxxxxxxxx\",\"sub_tenant_id\":\"xxxxxxxxxx",\"location\":null,\"site_name\":\"xxxxxxxxx\",\"tunnel_name\":null,\"bgp_peer_name\":null}",
           "clear_reason": "Auto",
           "age": 427678,
           "related_objects": "{\"location\":\"US West\",\"connection_type\":null,\"source_ip_address\":\"xxx.xxx.xxx.xx\",\"destination_ip_address\":\"xx.xxx.xx.xxx\",\"bgp_peer_name\":null,\"serial_number\":null,\"user\":null}"
       },
       {
           "alert_id": "4664240e-7ba6-4870-a29d-a8f1b53d2089",
           "severity": "High",
           "Alert_Name": "All tunnels for the Service Connection site Datacenter are down",
           "raised_time": 1664995260000,
           "updated_time": 1665592707000,
           "state": "Cleared",
           "category": "SC",
           "code": "AL_SC_SITE_DOWN",
           "Primary_Impacted_Objects": "{\"tenant_id\":\"xxxxxxxxxx\",\"sub_tenant_id\":\"xxxxxxxxxx\",\"location\":null,\"site_name\":\"xxxxxxxxxx\",\"tunnel_name\":null,\"bgp_peer_name\":null}",
           "clear_reason": "Auto",
           "age": 1028834,
           "related_objects": "{\"location\":\"US West\",\"connection_type\":null,\"source_ip_address\":\"xxx.xxx.xxx.xx\",\"destination_ip_address\":\"xx.xxx.xx.xxx\",\"bgp_peer_name\":null,\"serial_number\":null,\"user\":null}"
       },
       {
           "alert_id": "d314777a-8af9-416c-a645-b1123be10142",
           "severity": "High",
           "Alert_Name": "All tunnels for the Remote Network site xx-xx are down",
           "raised_time": 1664992756000,
           "updated_time": 1665521507000,
           "state": "Cleared",
           "category": "RN",
           "code": "AL_RN_SITE_DOWN",
           "Primary_Impacted_Objects": "{\"tenant_id\":\"xxxxxxxxxx\",\"sub_tenant_id\":\"xxxxxxxxxx\",\"location\":null,\"site_name\":\"xx-xx\",\"tunnel_name\":null,\"bgp_peer_name\":null}",
           "clear_reason": "Auto",
           "age": 1031338,
           "related_objects": "{\"location\":\"US Central\",\"connection_type\":null,\"source_ip_address\":\"xxx.xx.xxx.xx\",\"destination_ip_address\":\"x.x.x.x\",\"bgp_peer_name\":null,\"serial_number\":null,\"user\":null}"
       },
       {
           "alert_id": "8e901690-8146-4bde-b0d5-1ae5e2c4b7dd",
           "severity": "High",
           "Alert_Name": "PRIMARY WAN tunnel xxx-xxxx for the Service Connection is down",
           "raised_time": 1664482314000,
           "updated_time": 1665076922000,
           "state": "Cleared",
           "category": "SC",
           "code": "AL_SC_PRIMARY_WAN_TUNNEL_DOWN",
           "Primary_Impacted_Objects": "{\"tenant_id\":\"xxxxxxxxxx\",\"sub_tenant_id\":\"xxxxxxxxxx\",\"location\":null,\"site_name\":\"xx-xxx xxx\",\"tunnel_name\":\"xxx-xxxx\",\"bgp_peer_name\":null}",
           "clear_reason": "No Data Timeout",
           "age": 1541780,
           "related_objects": "{\"location\":\"US East\",\"connection_type\":null,\"source_ip_address\":\"xxx.xx.xx.xxx\",\"destination_ip_address\":\"x.xx.xx.x\",\"bgp_peer_name\":null,\"serial_number\":null,\"user\":null}"
       },
       {
           "alert_id": "ee42f553-0252-468c-aaca-9c8c2273bbe9",
           "severity": "High",
           "Alert_Name": "All tunnels for the Service Connection site xx-xxx xxx are down",
           "raised_time": 1664475536000,
           "updated_time": 1664567934000,
           "state": "Cleared",
           "category": "SC",
           "code": "AL_SC_SITE_DOWN",
           "Primary_Impacted_Objects": "{\"tenant_id\":\"xxxxxxxxxx\",\"sub_tenant_id\":\"xxxxxxxxxx\",\"location\":null,\"site_name\":\"xx-xxx xxx\",\"tunnel_name\":null,\"bgp_peer_name\":null}",
           "clear_reason": "No Data Timeout",
           "age": 1548558,
           "related_objects": "{\"location\":\"US East\",\"connection_type\":null,\"source_ip_address\":\"xxx.xx.xx.xxx\",\"destination_ip_address\":\"x.xx.xx.x\",\"bgp_peer_name\":null,\"serial_number\":null,\"user\":null}"
       }
   ]
}
```
