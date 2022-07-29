---
id: query_language_resources
title: Query Language Resources
description: Prisma Access Insights API query language resources
sidebar_label: Resources
---

You can create queries against information that is available to your Prisma Access Insights tenant. Your
tenant can contain both general and custom resources. Custom resources are automatically
created for you based on your usage patterns.

You use different REST calls, depending on whether you are querying for
general or custom resources:

| Customer      | API Version | API                                                                                                                                                                                                                                    |
| ------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MSSP          | 2.0         | [Resource Query](/sase/api/insights/2.0/get-api-sase-v-2-0-resource-resource-name)<br />[Resource Custom Query](/sase/api/insights/2.0/get-api-sase-v-2-0-resource-custom-feature-name-request-name)                                   |
| Single Tenant | 1.0         | [Resource Query](/sase/api/insights/1.0/get-api-sase-v-1-0-resource-tenant-tenant-id-resource-name)<br />[Resource Custom Query](/sase/api/insights/1.0/get-api-sase-v-1-0-resource-tenant-tenant-id-custom-feature-name-request-name) |

## General Resources

The following _general_ resource queries are supported:

### Connection status per remote network

Use `site_current_status` with the following payload.

    POST https://{{host}}/api/sase/v1.0/resource/tenant/{{tenant_id}}/query/site_current_status
    Authorization: Bearer {{jwt_token}}
    Content-Type: application/json
    {
        "properties":[
            {"property":"site_state"},
            { "function":"distinct_count",
              "property":"site_name" }
         ],
         "filter":{
            "rules":[
                      {
                        "property":"node_type",
                        "operator":"equals",
                        "values":[48]
                      },
                      {
                        "property":"site_name",
                        "operator":"in",
                        “values”:[“{{site_name}}”]
                      }
                   ]},
         "count":100
    }

### Connection status per service connection

Use `site_current_status` with the following payload.

    POST https://{{host}}/api/sase/v1.0/resource/tenant/{{tenant_id}}/query/site_current_status
    Authorization: Bearer {{jwt_token}}
    Content-Type: application/json
    {
        "properties":[
              {"property":"site_state"},
              { "function":"distinct_count",
                "property":"site_name"}
        ],
        "filter":{
            "rules":[
                {
                    "property":"node_type",
                    "operator":"equals",
                    "values":[51]
                }]
         },
         "count":100
    }

### Total number of alerts across the tenant

Use `alerts` with the following payload.

    POST : https://{{host}}/api/sase/v1.0/resource/tenant/{{tenant_id}}/query/alerts
    {
       "properties":[
           {"property":"alert_id"},
           {
             "property":"alert_severity_id",
             "sort":{"order":"desc","sequence":1}
           },
           {"property":"alert_severity_name"},
           {"property":"alert_name"},
           {"property":"alert_type_display"},
           {"property":"edge_location_display_name"},
           {"property":"impact_display"},
           {
             "property":"create_time",
             "sort": { "order":"desc", "sequence":2}
           },
           { "property":"alert_status_name" }
       ],
       "filter":{
            "rules":[
                {
                    "property":"create_time",
                    "operator":"last_n_minutes",
                    "values":["60"]
                }
       }

}

## Custom Resources

The following _custom_ resource queries are supported:

### Concurrent mobile users

Use `mobileusers/mu_concurrent_connected_status` with the following payload.

    POST https://{{host}}/api/sase/v1.0/resource/tenant/{{tenant_id}}/custom/query/mobileusers/mu_current_connected_status
    Authorization: Bearer {{jwt_token}}
    Content-Type: application/json

    {
     "count": 1
    }

### Concurent mobile users per location

Use `mobileusers/mu_concurrent_connected_status` with the following payload.

    POST : https://{{host}}/api/sase/v1.0/resource/tenant/{{tenant_id}}/custom/query/mobileusers/mu_current_connected_status

    Authorization: Bearer {{jwt_token}}
    Content-Type: application/json
    {
       "count":1,
       "filter":{
           "rules":[
               {
                   "property":"user_type",
                   "operator":"in",
                   "values":["gp"]
               },
               {
                   "property":"edge_location_display_name",
                   “operator”:”in”,"values":["{{loc}}"]
               }
           ]
       }
    }

### Mobile users service availability

Use `locations/location_mobilegateways_status` with the following payload.

    POST : https://{{host}}/api/sase/v1.0/resource/tenant/{{tenant_id}}/custom/query/locations/location_mobilegateways_status

    Authorization: Bearer {{jwt_token}}
    Content-Type: application/json
        {
           "properties":[
                          {
                             "property":"state_instance",
                             "alias":"mu_state_instance"
                          },
                          {
                             "property":"edge_location_display_name",
                             "alias":"current_mu_locations"
                          }
            ],
            "filter":{
                "rules":[
                          {
                             "property":"state_instance",
                             "operator":"in",
                             "values":[0,1,2]
                          },
                          {
                             "property":"user_type",
                             "operator":"in",
                             "values":["gp"]
                          }
                ]
            },
                           "count":10
    }

### Mobile users service availability per location

Use `locations/location_mobilegateways_status` with the following payload.

    POST: https://{{host}}/api/sase/v1.0/resource/tenant/{{tenant_id}}/custom/query/locations/location_mobilegateways_status
    Authorization: Bearer {{jwt_token}}
    Content-Type: application/json
    {
       "properties":[
           {
               "property":"state_instance",
               "alias":"mu_state_instance"
           },
           {
               "property":"edge_location_display_name",
               "alias":"current_mu_locations"
           }
       ],
       "filter":{
            "rules":[
                      {
                       "property":"state_instance",
                       "operator":"in","values":[0,1,2]
                      },
                     {
                       "property":"user_type",
                       "operator":"in",
                       "values":["gp"]
                     },
                     {
                        "property":"edge_location_display_name",
                        "operator":"in",
                        “values”:[“{{loc1}}”,”{{loc2}}}“]}]},
                        "count":10
                     }
            ]
       }
    }
