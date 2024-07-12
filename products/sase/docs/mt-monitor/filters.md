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

```
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
```

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

```
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
```

### ApplicationRule

Object with the following properties:

| Property | Type   | Description                                  |
| -------- | ------ | -------------------------------------------- |
| rule     | string | Rule name. Must be `app_risky` or `blocked`. |

For example:

```
    ...
    "rules": [
      {
        "rule": "app_risky"
      }...
```

### AppSrcRule

Object with the following properties:

| Property | Type   | Description                     |
| -------- | ------ | ------------------------------- |
| rule     | string | Rule name. Must be `app_risky`. |

For example:

```
    ...
    "rules": [
      {
        "rule": "app_risky"
      }...
```

### AppSummaryRule

Object with the following properties:

| Property | Type   | Description                     |
| -------- | ------ | ------------------------------- |
| rule     | string | Rule name. Must be `app_risky`. |

For example:

```
    ...
    "rules": [
      {
        "rule": "app_risky"
      }...
```

### CDLStatusRule

Object with the following properties:

| Property | Type             | Description                                                      |
| -------- | ---------------- | ---------------------------------------------------------------- |
| property | string           | Property field name. Must be `status`.                           |
| operator | string           | Operator to run on the `property` field. Must be `in`.           |
| values   | array of strings | Property value. Can be `Up` or `Down` when property is `status`. |

For example:

```
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
```

### IncidentRule

Object with the following properties:

| Property | Type             | Description                                                       |
| -------- | ---------------- | ----------------------------------------------------------------- |
| property | string           | Property field name. Must be `status`.                         |
| operator | string           | Operator to run on the `property` field. Must be `in`.            |
| values   | array of strings | Property value. Can be `Raised` or `Cleared` when property is `status`. |

For example:


```
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
```

### OutlierRule

Object with the following properties:

| Property | Type             | Description                                                       |
| -------- | ---------------- | ----------------------------------------------------------------- |
| property | string           | Property field name. Must be `node_type`.                         |
| operator | string           | Operator to run on the `property` field. Must be `in`.            |
| values   | array of strings | Property value. Can be `48` or `49` when property is `node_type`. |

For example:


```
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
```

### ThreatRule

Object with the following properties:

| Property | Type             | Description                                                |
| -------- | ---------------- | ---------------------------------------------------------- |
| property | string           | Property field name. Must be `threat_severity`.            |
| operator | string           | Operator to run on the `property` field. Must be `equals`. |
| values   | array of strings | Property value. Must be `critical`.                        |

For example:

```
    ...
    "rules": [
      {
        "operator": "equals",
        "property": "threat_severity",
        "values": [
          "critical"
        ]
      }...
```

### ThreatSrcRule

Object with the following properties:

| Property | Type             | Description                                                                                                                                                                                                                 |
| -------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string           | Property field name. Must be `threat_severity`.                                                                                                                                                                             |
| operator | string           | Operator to run on the `property` field. Must be `in`.                                                                                                                                                                      |
| values   | array of strings | Property values. Can be one or more of the following when used with `threat_severity` and `in`: `Critical` - critical severity`High` - high severity\<`Medium` - medium severity |

For example:

```
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
```

### ThreatSummaryRule

Object with the following properties:

| Property | Type             | Description                                                                                                                                                                                                |
| -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string           | Property field name. Must be `severity`.                                                                                                                                                                   |
| operator | string           | Operator to run on the `property` field. Must be `in`.                                                                                                                                                     |
| values   | array of strings | Property value. Can be one or more of the following when used with `severity` and `in`: `Critical` - critical severity`High` - high severity`Medium` - medium severity |

For example:

```
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
```

### UrlLogsRule

Object with the following properties:

| Property | Type             | Description                                                                                                                                        |
| -------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string           | Property field name. Must be `url_category_value`.                                                                                                 |
| operator | string           | Operator to run on the `property` field. Must be `in`.                                                                                             |
| values   | array of strings | Property value. Can be one or more of the following when used with `url_category_value` and `in`: `high-risk` `malware` |

For example:

```
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
```

### TimeFilter

Object with the following properties:

| Property | Type             | Description                                                                                                                                                                                                                                                                                |
| -------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| operator | string           | Operator to run on the `property` field. Can be one of the following: `gt` - greater than comparison`lt` - less than comparison`last_n_minutes` - minutes comparison`last_n_hours` - hours comparison`last_n_days` - days comparison |
| property | string           | Property field name. Can be one or more of the following: `event_time``update_time``updated_time`.                                                                                                                                                     |
| values   | array of strings | Property value. Can be any number that represents minute, hour, or day counts when `property` is `event_time`.                                                                                                                                                                             |

For example:

```
    ...
    "rules": [
      {
        "operator": "last_n_days",
        "property": "event_time",
        "values": [
          7
        ]
      }...
```

### UrlSummaryRule

Object with the following properties:

| Property | Type   | Description                                                                                                                |
| -------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| rule     | string | Rule name. Can be one or more the following: `url_high_risk` - risky URL`blocked` - blocked URL |

For example:

```
    ...
    "rules": [
      {
        "rule": "url_high_risk"
      },
      {
        "rule": "blocked"
      }...
```

## Properties

Properties are a required array of objects. Properties are database field names that will be returned in the API response. You can use one or more properties to customize your request, but you can also use most of the examples in the [API reference](/sase/api/mt-monitor) as they are.

Some of the properties are predefined, so you must use exactly what you see. Some properties contain choices, so you can decide.

### AlertProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                                                                                                                             |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `sub_tenant_id` - tenant service group ID`total_count` - total count of alerts`mu_count` - count of mobile user alerts`rn_count` - count of remote network alerts`sc_count` - count of service connection alerts |

For example:

```
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
```

### ApplicationProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                    |
| -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `tenant_id``tenant_name``app``unique_app_count``app_count`                                              |
| function | string | Operations to run on the property field. Operations can be run only on number properties. Can be one or more of the following: `count` - number of values`sum` - sum of the data values `avg` - average of the data values |
| sort     | object | Sort order for the property                                                                                                                                                                                                                                    |
| order    | string | Can be one of the following: `desc` - descending`asc` - ascending                                                                                                                                                                   |

For example:

```
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
```

### AppSrcProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `sub_tenant_id` - tenant service group`total_app_count` - total app count`total_app_remote_network` - total app count by remote network`total_app_mobile_users` - total app count by mobile users`total_app_proxy_nodes` - total app count by proxy nodes |

For example:

```
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
```

### AppSummaryProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                      |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `sub_tenant_id``total_app_count``total_app_remote_network``total_app_mobile_users``total_app_proxy_nodes` |

For example:

```
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
```

### CDLStatusProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                 |
| -------- | ------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alias    | string | Change a property field name to a different name of your choice.                                                                                                            |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `sub_tenant_id``state``location_count` |

For example:


```
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
```

### GatewayStatusProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                 |
| -------- | ------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alias    | string | Change a property field name to a different name of your choice.                                                                                                            |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `sub_tenant_id``status``gateway_count` |

For example:


```
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
```

### IncidentProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                 |
| -------- | ------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alias    | string | Change a property field name to a different name of your choice.                                                                                                            |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `sub_tenant_id``total_count``warning_count``critical_count``created_time``updated_time``category``status``raised_time``cleared_time` |

For example:


```
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
```

### OutliersProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                |
| -------- | ------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alias    | string | Change a property field name to a different name of your choice.                                                                                                           |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `site_name``bandwidth_consumed``unit` |

For example:

```
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
```

### ResourceProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                               |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `severity``alert_id``node_type``node_count` |

For example:

```
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
```

### ThreatSrcProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `sub_tenant_id` - tenant service group ID`total_app_count` - total app count`total_app_remote_network` - total app count by remote network`total_app_mobile_users` - total app count by mobile users`total_app_proxy_nodes` - total app count by proxy nodes |

For example:

```
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
```

### ThreatProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                                   |
| -------- | ------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alias    | string | Change a property field name to a different name of your choice.                                                                                                                                                                                                              |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `tenant_id``tenant_name``threat_severity``threat_severity_count``url_count``threat_id``threat_count` |
| function | string | Operations to run on the property field. Operations can be run only on number properties. Can be one of the following: `distinct_count` - used with `threat_id` property`avg` - used with `threat_count` property                                  |
| sort     | object | Sort order for the property                                                                                                                                                                                                                                                   |
| order    | string | Can be one of the following: `desc` - descending`asc` - ascending                                                                                                                                                                                  |

For example:

```
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
```

### ThreatSummaryProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                      |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `sub_tenant_id` - tenant service group ID`total_threats``blocked_count``unblocked_count``malicious_count` |

For example:

```
    "properties": [
        {
          "property": "total_threats"
        },
        {
          "property": "unblocked_count"
        }
      ]
```

### UniqueUserProperty

Object with the following properties:

| Property | Type   | Description                                                                                                   |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `user_count` |

For example:

```
    "properties": [
        {
          "property": "user_count"
        }
      ]
```

### UrlSummaryProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                    |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alias    | string | Change a property field name to a different name of your choice.                                                                                                               |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `sub_tenant_id` tenant service group ID`uri_count` |
| function | string | Operations to run on the property field. Operations can be run only on number properties. Can be one of the following: `sum`                                                   |
| sort     | object | Sort order for the property                                                                                                                                                    |
| order    | string | Can be one of the following: `desc` - descending`asc` - ascending                                                                                   |

For example:

```
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
```

### UpgradeListProperty

Object with the following properties:

| Property | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: `tenant_id` - Tenant service group ID`sub_tenant_id` - Child or sub tenant service group ID`current_version` - Prisma Access versions, such as: PANOS-10.0.8-c1188.saas`candidate_release_list` - The release list, such as: Preferred-10.0.8, latest `customer_onboarded_locations` - The locations of the upgrade, such as: US East, Singapore, Ireland`upgrade_ts` - The epoc time series such as epocTs from 1647241200000 to 1647414000000`time_window` - The upgrade time window, such as: 10:00 AM to 11:00 PM`compute_timezone` - The compute timezone, such as: NULL,HKT,GMT,CET,PDT,EDT,CDT,SGT,CST,EST`upgrade_type` - The upgrade type, such as: full-upgrade, canary-upgrade`upgrade_version` - The version of the next Prisma Access upgrade, such as: PANOS-10.2.4-ch39.saas`status` - The last upgrade status, such as: scheduled, completed, failed |

For example:

```
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
```

