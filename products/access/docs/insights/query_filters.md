---
id: query_filters
title: Query Language Filters
description: Prisma Access Insights API query language filters
sidebar_label: Filters
---

You can create queries against information that is available in your Prisma Access Insights tenant. These rules are supplied as boolean expressions
that are applied to information found in the dataset. Each such boolean expression includes a 
[numeric](#numeric-operators),
[string](#string-operators), 
or [date](#date-operators) 
operator. Multiple filter rules can also be evaluated using [boolean](#boolean-operators) operators. 

For example:

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
                "values":["gp"]}
             ]
    },


## Numeric Operators

When the field type requires a number, the following operators are supported. You cannot
include wildcards in these operators.

Example:

    "filter":{
                "rules":[{
                "property":"node_type",
                "operator":"equals",
                "values":[48]
              },


* equal &lt;_value_&gt;

  Match a value exactly.

* greater &lt;_value_&gt;

  Match a value greater than the specified number.

* greater\_or\_equal &lt;_value_&gt;

  Match a value greater than or equal to the specified number.
  
* in &lt;_value_&gt;[, &lt;_value_&gt; ...]

  Match a value that contains the specified number. To specify more than one number, separate them with commas.

* less &lt;_value_&gt;

  Match a value less than the specified number.

* less\_or\_equal &lt;_value_&gt;

  Match a value less than or equal to the specified number.

* not\_equal &lt;_value_&gt;

  Match all values except the specified number.

* not\_in &lt;_value_&gt;[, &lt;_value_&gt; ...]

  Match all values except those that contain the specified number. To specify more than one number,
  separate them with commas.

## String Operators

When the field type requires a text string, use one of the following supported operators. You cannot
include wildcards in these operators.

Example:

    {
       "property":"user_type",
       "operator":"in",
       "values":["gp"]
    }

* equal &lt;_value_&gt;

  Match a value exactly.

* in &lt;_value_&gt;[, &lt;_value_&gt; ...]

  Match a value in an array. To specify more than one number, separate them with commas.

* not\_equal &lt;_value_&gt;

  Match all values except the specified string.

* not\_in &lt;_value_&gt;[, &lt;_value_&gt; ...]

  Match all values except those that contain the specified string. To specify more than one string,
  separate them with commas.

## Date Operators

When the field type requires a date or time, use one of the following supported operators:

* between date1, date2 

  Time range, starting at date1 and ending at date2. Specify the date in the format epoc-time.

* last\_n\_days 

  Last number of days from the current time. For example, 

* last\_n\_hours 

  Last number of hours from the current time. For example, 
  
* last\_n\_weeks 

  Last number of weeks from the current time. 

## Boolean Operators

 - AND

   Record must match all rules.

 - OR
   
   Record must match at least one rule.

## State Filter Values

### Tunnel State

| State ID | State Name |
| ---------|------------|
| 0 | Init |
| 1 | Up |
| 2 | Inactive |
| 3 | Down |

### Site State

| State ID | State Name |
| ---------|------------|
| 0 | Down |
| 1 | Up |
| 2 | Warning |

### Location State 

| State ID | State Name |
| ---------|------------|
| 0 | Down |
| 1 | Up | 
| 2 | Warning |

### Instance/Node State

| State ID | State Name |
| ---------|------------|
| 0 | Down |
| 1 | Up | 
| 2 | Inactive |

### Node Types 

| Node Type ID  | Node Type Name |
| --------------|----------------|
| 47 | Hub |
| 48 | Firewall/remote network |
| 49 | Mobile user gateway |
| 50 | Mobile user portal |
| 51 | Service connection |
| 153 | Explicit proxy |

### Firewall HA

| State ID | State Name |
| ---------|------------|
| 0 | None |
| 1 | Passive |
| 2 | Active |

### Monitoring State 

| State ID | State Name |
| ---------|------------|
| 0 | Down |
| 1 | Up |
| 2 | Not configured |

### User Types

| User Type ID | User Type Name |
|--------------|----------------|
| ep | Explicit Proxy |
| gp | GlobalProtect |

### Edge Location Display Name

See [Prisma Access Locations](https://docs.paloaltonetworks.com/prisma/prisma-access/prisma-access-panorama-admin/prepare-the-prisma-access-infrastructure/list-of-prisma-access-locations).

### Mobile User Connection State

| Connection State | Mobile User State |
|------------------|-------------------|
| CONNECTED | Mobile user in connected state |
| CONNECT_CONTINUE | |

### Alert Severity

| Severity ID | Severity ID Mapping Values |
|-------------|----------------------------|
| High  | 4 |
| Medium  | 3 |
| Low | 2 |
| Informational | 1 |






 





