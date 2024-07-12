---
id: query_properties
title: Query Language Properties
description: Prisma Access Insights API query language properties
sidebar_label: Properties
---

Every Prisma Access Insights query must contain at least one property, and each property
represents a data field that you want included in your query results. You provide
your properties as an array of objects. For example:

```
    "properties": [
        {
          "property": "edge_location_display_name"
        },
        {

          "property": "login_user_name",
          "function": "distinct_count",
          "sort": {
            "order": "desc",
            "sequence": 1
          }
        }
      ],
```

The data field identified in each property must be available in the resource you are querying.

Each property can include an alias for the property, a function to apply to the property, as well as sorting information.

## Alias

You can give a property an alias, which is used as a replacement name in the query's output. For
example:

```
    {
        "property":"state_instance",
        "alias":"mu_state_instance"
    }
```

## Properties Functions

Functions can be applied to specified properties. For example:

```
    {
      "property": "login_user_name",
      "function": "distinct_count"
    }
```

The following functions can be used with the properties portion of the query:

- sum

  Returns the sum of the values found for a property in the query set. Must
  be used with a property that contains a number.

- min

  Returns the smallest value found for a property in the query set. Must
  be used with a property that contains a number.

- max

  Returns the largest value found for a property in the query set. Must
  be used with a property that contains a number.

- avg

  Returns the averages of the values found for a property in the query set. Must
  be used with a property that contains a number.

- count

  Returns a count of the number of times the identified property is seen in the query set.

- distinct_count

  Returns a count of the number of distinct (unique) values seen for the identified property
  in the query set.

- distinct

  Returns all the distinct (unique) values seen for the identified property in the query set.

## Properties Sort

You can order the results of a function in either descending (`desc`) or ascending (`asc`) order.
For example:

```
    {

      "property": "login_user_name",
      "function": "distinct_count",
      "sort": {
        "order": "desc",
        "sequence": 1
      }
    }
```
