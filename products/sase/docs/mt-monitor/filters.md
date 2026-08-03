---
id: filters
title: Query Filters
description: Prisma SASE Aggregate Monitoring query filters
hide_title: true
slug: /sase/docs/filters
hide_table_of_contents: false
keywords:
  - sase
---

# About Query Filters

There are some filters and properties that are not visible in the
[Aggregate Monitoring API reference](/sase/api/mt-monitor),
so they're described here.

In a POST request body, you will provide a required filter. This is a json object that consists of a required `AND` operator and an array of rules objects. The filter rules basically build the "where clause" of your request. You can use one or more filter rules to customize your request, but you can also use most of the examples in the API reference just as they are.

In a POST request body, you will also provide required properties. This is an array of objects. Property field names will be returned in the API response. You can use one or more properties to customize the response, but you can also use most of the examples in the API reference just as they are.

For example, the following POST request body for
[List Threat Summary](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-threats-summary/)
contains a filter with rules of
[ThreatSummaryRule](#threatsummaryrule) and
[TimeFilter](#timefilter), and properties of
[ThreatSummaryProperty](#threatsummaryproperty):

    {
      "filter": {
        "operator": "AND",
        "rules": [
          {
            "operator": "in",
            "property": "severity",
            "values": [
              "Critical",
              "High",
              "Medium"
            ]
          },
          {
            "rule": "unblocked"
          }
        ]
      },
      "properties": [
        {
          "property": "total_threats"
        },
        {
          "property": "unblocked_count"
        }
      ]
    }

The filter, operator, rules, and properties in the example are combined to request a list of the total threats and unblocked count properties where the severity is critical, high, or medium, and unblocked.

The properties and rules are independent of each other. Though you see a rule name of `unblocked` and a property name of `unblocked_count` in the example, this does not have to be the case. You could use a rule of `blocked` and a property of `unblocked_count` if that's what you want to get from the database.

## Filter

A filter is a required json object. It consists of a required `AND` operator and an array of rules objects.

| Property | Type                 | Description                                          |
| -------- | -------------------- | ---------------------------------------------------- |
| filter   | required json object | Includes a required `operator` and optional `rules`. |
| operator | required string      | Operator to run on the rules. Must be `AND`.         |
| rules    | array                | Array of [filter rules](#filter-rules) objects.      |

## Filter Rules

For the rules, you can use an array of rule name objects, an array of time objects, or both objects. You can use one or more filter rules to customize your request, but you can also use most of the examples in the [API reference](/sase/api/mt-monitor) as they are.

Some of the parameters are predefined, so you must use exactly what you see in the tables that follow. Some parameters contain choices, so you can decide.

### AlertRule

Object with the following properties:

| Property | Type             | Description                                                                 |
| -------- | ---------------- | --------------------------------------------------------------------------- |
| operator | string           | Operator to run on the `property` field. Must be `in`.                      |
| property | string           | Property field name. Must be `domain`.                                      |
| values   | array of strings | Property values. Can be `External` or `external` when property is `domain`. |

For example:

    ...
    "rules": [
        {
          "operator": "in",
          "property": "domain",
          "values": [
            "External",
            "external"
          ]
        }
      ]...

### ApplicationRule

Object with the following properties:

| Property | Type   | Description                                  |
| -------- | ------ | -------------------------------------------- |
| rule     | string | Rule name. Must be `app_risky` or `blocked`. |

For example:

    ...
    "rules": [
      {
        "rule": "app_risky"
      }...

### AppSrcRule

Object with the following properties:

| Property | Type   | Description                     |
| -------- | ------ | ------------------------------- |
| rule     | string | Rule name. Must be `app_risky`. |

For example:

    ...
    "rules": [
      {
        "rule": "app_risky"
      }...

### AppSummaryRule

Object with the following properties:

| Property | Type   | Description                     |
| -------- | ------ | ------------------------------- |
| rule     | string | Rule name. Must be `app_risky`. |

For example:

    ...
    "rules": [
      {
        "rule": "app_risky"
      }...

### CDLStatusRule

Object with the following properties:

| Property | Type             | Description                                                      |
| -------- | ---------------- | ---------------------------------------------------------------- |
| property | string           | Property field name. Must be `status`.                           |
| operator | string           | Operator to run on the `property` field. Must be `in`.           |
| values   | array of strings | Property value. Can be `Up` or `Down` when property is `status`. |

For example:

    ...
    "rules": [
      {
        "operator": "in",
        "property": "status",
        "values": [
          "Up",
          "Down"
        ]
      }...

### IncidentRule

Object with the following properties:

| Property | Type             | Description                                                       |
| -------- | ---------------- | ----------------------------------------------------------------- |
| property | string           | Property field name. Must be `status`.                         |
| operator | string           | Operator to run on the `property` field. Must be `in`.            |
| values   | array of strings | Property value. Can be `Raised` or `Cleared` when property is `status`. |

For example:

    ...
    "rules": [
      {
        "operator": "in",
        "property": "status",
        "values": [
          Raised,
          Cleared
        ]
      }...

### OutlierRule

Object with the following properties:

| Property | Type             | Description                                                       |
| -------- | ---------------- | ----------------------------------------------------------------- |
| property | string           | Property field name. Must be `node_type`.                         |
| operator | string           | Operator to run on the `property` field. Must be `in`.            |
| values   | array of strings | Property value. Can be `48` or `49` when property is `node_type`. |

For example:

    ...
    "rules": [
      {
        "operator": "in",
        "property": "node_type",
        "values": [
          48,
          49
        ]
      }...

### ThreatRule

Object with the following properties:

| Property | Type             | Description                                                |
| -------- | ---------------- | ---------------------------------------------------------- |
| property | string           | Property field name. Must be `threat_severity`.            |
| operator | string           | Operator to run on the `property` field. Must be `equals`. |
| values   | array of strings | Property value. Must be `critical`.                        |

For example:

    ...
    "rules": [
      {
        "operator": "equals",
        "property": "threat_severity",
        "values": [
          "critical"
        ]
      }...

### ThreatSrcRule

Object with the following properties:

| Property | Type             | Description                                                                                                                                                                                                                 |
| -------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string           | Property field name. Must be `threat_severity`.                                                                                                                                                                             |
| operator | string           | Operator to run on the `property` field. Must be `in`.                                                                                                                                                                      |
| values   | array of strings | Property values. Can be one or more of the following when used with `threat_severity` and `in`: <ul><li>`Critical` - critical severity</li><li>`High` - high severity</li></ul><ul><li>`Medium` - medium severity</li></ul> |

For example:

    ...
    "rules": [
        {
          "operator": "in",
          "property": "severity",
          "values": [
            "Critical",
            "High",
            "Medium"
          ]
        }
    }...

### ThreatSummaryRule

Object with the following properties:

| Property | Type             | Description                                                                                                                                                                                                |
| -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string           | Property field name. Must be `severity`.                                                                                                                                                                   |
| operator | string           | Operator to run on the `property` field. Must be `in`.                                                                                                                                                     |
| values   | array of strings | Property value. Can be one or more of the following when used with `severity` and `in`: <ul><li>`Critical` - critical severity</li><li>`High` - high severity</li><li>`Medium` - medium severity</li></ul> |

For example:

    ...
    "rules": [
      {
        "operator": "in",
        "property": "severity",
        "values": [
          "Critical",
          "High",
          "Medium"
        ]
      }...

### UrlLogsRule

Object with the following properties:

| Property | Type             | Description                                                                                                                                        |
| -------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string           | Property field name. Must be `url_category_value`.                                                                                                 |
| operator | string           | Operator to run on the `property` field. Must be `in`.                                                                                             |
| values   | array of strings | Property value. Can be one or more of the following when used with `url_category_value` and `in`: <ul><li>`high-risk` </li><li>`malware`</li></ul> |

For example:

    ...
    "rules": [
      {
        "property": "url_category_value",
        "operator": "in",
        "values": [
          "high-risk",
          "malware"
        ]
      }...

### TimeFilter

Object with the following properties:

| Property | Type             | Description                                                                                                                                                                                                                                                                                |
| -------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| operator | string           | Operator to run on the `property` field. Can be one of the following: <ul><li>`gt` - greater than comparison</li><li>`lt` - less than comparison</li><li>`last_n_minutes` - minutes comparison</li><li>`last_n_hours` - hours comparison</li><li>`last_n_days` - days comparison</li></ul> |
| property | string           | Property field name. Can be one or more of the following: <ul><li>`event_time`</li><li>`update_time`</li><li>`updated_time`</li></ul>.                                                                                                                                                     |
| values   | array of strings | Property value. Can be any number that represents minute, hour, or day counts when `property` is `event_time`.                                                                                                                                                                             |

For example:

    ...
    "rules": [
      {
        "operator": "last_n_days",
        "property": "event_time",
        "values": [
          7
        ]
      }...

### UrlSummaryRule

Object with the following properties:

| Property | Type   | Description                                                                                                                |
| -------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| rule     | string | Rule name. Can be one or more the following: <ul><li>`url_high_risk` - risky URL</li><li>`blocked` - blocked URL</li></ul> |

For example:

    ...
    "rules": [
      {
        "rule": "url_high_risk"
      },
      {
        "rule": "blocked"
      }...

## Properties

Properties are a required array of objects. Properties are database field names that will be returned in the API response. You can use one or more properties to customize your request, but you can also use most of the examples in the [API reference](/sase/api/mt-monitor) as they are.

Some of the properties are predefined, so you must use exactly what you see. Some properties contain choices, so you can decide.

### AlertProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                                                                                                                             |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id` - tenant service group ID</li><li>`total_count` - total count of alerts</li><li>`mu_count` - count of mobile user alerts</li><li>`rn_count` - count of remote network alerts</li><li>`sc_count` - count of service connection alerts</li></ul> |

For example:

      "properties": [
        {
          "property": "sub_tenant_id"
        },
        {
          "property": "total_count"
        },
        {
          "property": "mu_count"
        },
        {
          "property": "rn_count"
        },
        {
          "property": "sc_count"
        }
      ]

### ApplicationProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                    |
| -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`tenant_id`</li><li>`tenant_name`</li><li>`app`</li><li>`unique_app_count`</li><li>`app_count`</li></ul>                                              |
| function | string | Operations to run on the property field. Operations can be run only on number properties. Can be one or more of the following: <ul><li>`count` - number of values</li><li>`sum` - sum of the data values </li><li>`avg` - average of the data values</li></ul> |
| sort     | object | Sort order for the property                                                                                                                                                                                                                                    |
| order    | string | Can be one of the following: <ul><li>`desc` - descending</li><li>`asc` - ascending</li></ul>                                                                                                                                                                   |

For example:

    {
      "properties": [
        {
          "property": "tenant_id"
        },
        {
          "property": "tenant_name"
        },
        {
          "property": "app"
        },
        {
          "function": "avg",
          "property": "unique_app_count"
        },
        {
          "function": "sum",
          "property": "app_count",
          "sort": {
            "order": "desc"
          }
        }
      ]
    }

### AppSrcProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id` - tenant service group</li><li>`total_app_count` - total app count</li><li>`total_app_remote_network` - total app count by remote network</li><li>`total_app_mobile_users` - total app count by mobile users</li><li>`total_app_proxy_nodes` - total app count by proxy nodes</li></ul> |

For example:

    "properties": [
        {
          "property": "sub_tenant_id"
        },
        {
          "property": "total_app_count"
        },
        {
          "property": "risk_of_app_count"
        }
      ]

### AppSummaryProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                      |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id`</li><li>`total_app_count`</li><li>`total_app_remote_network`</li><li>`total_app_mobile_users`</li><li>`total_app_proxy_nodes`</li></ul> |

For example:

    "properties": [
          {
          "property": "sub_tenant_id"
          },
          {
          "property": "total_app_count"
          },
          {
          "property": "risk_of_app_count"
          }
        ]

### CDLStatusProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                 |
| -------- | ------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alias    | string | Change a property field name to a different name of your choice.                                                                                                            |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id`</li><li>`state`</li><li>`location_count`</li></ul> |

For example:

    "properties": [
        {
          "property": "status"
        },
        {
          "property": "location_count"
        },
        {
          "property": "sub_tenant_id"
        }
      ]

### GatewayStatusProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                 |
| -------- | ------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alias    | string | Change a property field name to a different name of your choice.                                                                                                            |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id`</li><li>`status`</li><li>`gateway_count`</li></ul> |

For example:

    "properties": [
        {
        "property": "status"
        },
        {
        "property": "gateway_count"
        },
        {
        "property": "sub_tenant_id"
        }
      ]

### IncidentProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                 |
| -------- | ------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alias    | string | Change a property field name to a different name of your choice.                                                                                                            |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id`</li><li>`total_count`</li><li>`warning_count`</li><li>`critical_count`</li><li>`created_time`</li><li>`updated_time`</li><li>`category`</li><li>`status`</li><li>`raised_time`</li><li>`cleared_time`</li></ul> |

For example:

    "properties": [
        {
        "property": "critical_count"
        },
        {
        "property": "total_count"
        },
        {
        "property": "warning_count"
        }
      ]

### OutliersProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                |
| -------- | ------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alias    | string | Change a property field name to a different name of your choice.                                                                                                           |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`site_name`</li><li>`bandwidth_consumed`</li><li>`unit`</li></ul> |

For example:

    "properties": [
        {
          "property": "site_name"
        },
        {
          "property": "bandwidth_consumed"
        },
        {
          "property": "unit"
        }
      ]

### ResourceProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                               |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`severity`</li><li>`alert_id`</li><li>`node_type`</li><li>`node_count`</li></ul> |

For example:

    "properties": [
        {
          "property": "alert_id"
        },
        {
          "property": "node_type
        {
          "property": "node_count"
        }
      ]

### ThreatSrcProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id` - tenant service group ID</li><li>`total_app_count` - total app count</li><li>`total_app_remote_network` - total app count by remote network</li><li>`total_app_mobile_users` - total app count by mobile users</li><li>`total_app_proxy_nodes` - total app count by proxy nodes</li></ul> |

For example:

    "properties": [
        {
          "property": "sub_tenant_id"
        },
        {
          "property": "total_app_count"
        },
        {
          "property": "total_app_remote_network"
        },
        {
          "property": "total_app_mobile_users"
        },
        {
          "property": "total_app_proxy_nodes"
        }
      ]

### ThreatProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                                   |
| -------- | ------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alias    | string | Change a property field name to a different name of your choice.                                                                                                                                                                                                              |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`tenant_id`</li><li>`tenant_name`</li><li>`threat_severity`</li><li>`threat_severity_count`</li><li>`url_count`</li><li>`threat_id`</li><li>`threat_count`</li></ul> |
| function | string | Operations to run on the property field. Operations can be run only on number properties. Can be one of the following: <ul><li>`distinct_count` - used with `threat_id` property</li><li>`avg` - used with `threat_count` property</li></ul>                                  |
| sort     | object | Sort order for the property                                                                                                                                                                                                                                                   |
| order    | string | Can be one of the following: <ul><li>`desc` - descending</li><li>`asc` - ascending</li></ul>                                                                                                                                                                                  |

For example:

    "properties": [
        {
          "property": "tenant_id"
        },
        {
          "property": "tenant_name"
        },
        {
          "property": "threat_severity"
        },
        {
          "property": "threat_severity_count"
        },
        {
          "property": "url_type"
        },
        {
          "property": "url_count"
        },
        {
          "alias": "unique_threat_count",
          "function": "distinct_count",
          "property": "threat_id"
        },
        {
          "function": "avg",
          "property": "threat_count"
        }
      ]

### ThreatSummaryProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                      |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id` - tenant service group ID</li><li>`total_threats`</li><li>`blocked_count`</li><li>`unblocked_count`</li><li>`malicious_count`</li></ul> |

For example:

    "properties": [
        {
          "property": "total_threats"
        },
        {
          "property": "unblocked_count"
        }
      ]

### UniqueUserProperty

Object with the following properties:

| Property | Type   | Description                                                                                                   |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `user_count` |

For example:

    "properties": [
        {
          "property": "user_count"
        }
      ]

### UrlSummaryProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                    |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alias    | string | Change a property field name to a different name of your choice.                                                                                                               |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id` tenant service group ID</li><li>`uri_count`</li></ul> |
| function | string | Operations to run on the property field. Operations can be run only on number properties. Can be one of the following: `sum`                                                   |
| sort     | object | Sort order for the property                                                                                                                                                    |
| order    | string | Can be one of the following: <ul><li>`desc` - descending</li><li>`asc` - ascending</li></ul>                                                                                   |

For example:

    "properties": [
        {
          "property": "sub_tenant_id"
        },
        {
          "alias": "count",
          "function": "sum",
          "property": "uri_count",
          "sort": {
            "order": "desc"
          }
        }
      ]

### UpgradeListProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`tenant_id` - Tenant service group ID</li><li>`sub_tenant_id` - Child or sub tenant service group ID</li><li>`current_version` - Prisma Access versions, such as: PANOS-10.0.8-c1188.saas</li><li>`candidate_release_list` - The release list, such as: Preferred-10.0.8, latest </li><li>`customer_onboarded_locations` - The locations of the upgrade, such as: US East, Singapore, Ireland</li><li>`upgrade_ts` - The epoc time series such as epocTs from 1647241200000 to 1647414000000</li><li>`time_window` - The upgrade time window, such as: 10:00 AM to 11:00 PM</li><li>`compute_timezone` - The compute timezone, such as: NULL,HKT,GMT,CET,PDT,EDT,CDT,SGT,CST,EST</li><li>`upgrade_type` - The upgrade type, such as: full-upgrade, canary-upgrade</li><li>`upgrade_version` - The version of the next Prisma Access upgrade, such as: PANOS-10.2.4-ch39.saas</li><li>`status` - The last upgrade status, such as: scheduled, completed, failed</li></ul> |

For example:

    {
      "properties": [
        {
          "property":"tenant_id"
        },
        {
          "property":"sub_tenant_id"
        },
        {
          "property":"amiversion"
        },
        {
          "property":"candidate_release_list"
        },
        {
          "property":"customer_onboarded_locations"
        },
        {
          "property":"upgrade_ts"
        },
        {
          "property":"time_window"
        },
        {
          "property":"compute_timezone"
        },
        {
          "property":"upgrade_type"
        },
        {
          "property":"status"
        }
      ]
    }

