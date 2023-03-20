---
id: manage-saved-search
title: Manage a Saved Search
---

This guide shows how to update an existing **saved search** in three simple steps by going through a valid sample scenario.

First of all, obtain an authorization token by [Logging In](/prisma-cloud/api/cspm/app-login/) ![alt text](/icons/api-icon-pan-dev.svg)

:::info

- The token is only valid for 10 minutes, so [refresh it](/prisma-cloud/api/cspm/extend-session/) ![alt text](/icons/api-icon-pan-dev.svg) as needed if you believe your workflow might take longer than that.

- The base url in this guide is a generic `api.prismacloud.io`. Replace it with yours accordingly.

:::

## Create a new Recent Search 

Create a recent search (e.g. with [Perform Config Search](/prisma-cloud/api/cspm/search-config/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint) using the following RQL
```sql
config from cloud.resource 
where api.name = 'aws-ec2-describe-instances' 
AND json.rule = amiLaunchIndex equals \"bar\"
```
in the request body

**Request Body:**
```json
{
  "limit": 100,
  "withResourceJson": false,
  "query": "config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = amiLaunchIndex equals \"bar\"",
  "timeRange": {
    "relativeTimeType": "BACKWARD",
    "type": "relative",
    "value": {
      "amount": 24,
      "unit": "hour"
    }
  },
  "heuristicSearch": true
}
```


The response will contain an `id` field (i.e. **search id**).

In our sample case the value for **search id** is `"84b809a9-5535-401a-8d78-e7264cdc3d9a"` and the `saved` property is set to `false` indicating that the search is still **recent**

**Response:**
```json
{
  "cloudType": "aws",
  "id": "84b809a9-5535-401a-8d78-e7264cdc3d9a",
  "name": "",
  "description": "",
  "searchType": "config",
  "saved": false,
  "timeRange": {
    "type": "relative",
    "value": {
      "unit": "hour",
      "amount": 24
    },
    "relativeTimeType": "BACKWARD"
  },
  "query": "config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = amiLaunchIndex equals \"bar\"",
  "data": {
    "totalRows": 0,
    "items": [],
    "heuristicSearch": true,
    "preview": false
  }
}
```

## Update/Convert a Recent Search to a Saved Search by providing name/description

Pass the **search id** obtained in the previous step `"84b809a9-5535-401a-8d78-e7264cdc3d9a"` (along with the `name` and `description` you'd like for the new saved search) to the [Save Search Query](/prisma-cloud/api/cspm/search-history-manage/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint. 

> **NOTE:** the same **search id** is now a *path parameter*

```
Request URL: https://api.prismacloud.io/search/history/84b809a9-5535-401a-8d78-e7264cdc3d9a
Request Method: POST
```

RQL remains the same:
```sql
config from cloud.resource 
where api.name = 'aws-ec2-describe-instances' 
AND json.rule = amiLaunchIndex equals \"bar\"
```

Include the same **search id** in the Request Body along with your new `name` and `description`:
> Notice how the `saved` property is still set to `false`

**Request Body:**
```json
{
  "cloudType": "aws",
  "id": "84b809a9-5535-401a-8d78-e7264cdc3d9a",
  "name": "your-awesome-name-for-saved-search",
  "description": "your new amazing description for converting recent to saved search",
  "searchType": "config",
  "saved": false,
  "timeRange": {
    "type": "relative",
    "value": {
      "unit": "hour",
      "amount": 24
    },
    "relativeTimeType": "BACKWARD"
  },
  "query": "config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = amiLaunchIndex equals \"bar\"",
  "data": null
}
```

The response will show the search updated as a saved search:
> **Notice** how the `saved` property is now set to `true` indicating it is a **saved search**

**Response:**
```json
{
  "cloudType": "aws",
  "id": "84b809a9-5535-401a-8d78-e7264cdc3d9a",
  "name": "your-awesome-name-for-saved-search",
  "description": "your new amazing description for converting recent to saved search",
  "searchType": "config",
  "saved": true,
  "timeRange": {
    "type": "relative",
    "value": {
      "unit": "hour",
      "amount": 24
    },
    "relativeTimeType": "BACKWARD"
  },
  "query": "config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = amiLaunchIndex equals \"bar\""
}
```

## Update RQL or description for a Saved Search
Call the [Save Search Query](/prisma-cloud/api/cspm/search-history-manage/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint with the same **search id** `id` and the same `name`, but **update** the RQL and/or `description`. We're going to change `bar` to `foo` in the RQL query:

Current RQL:
```sql
config from cloud.resource 
where api.name = 'aws-ec2-describe-instances' 
AND json.rule = amiLaunchIndex equals \"bar\"
```

New RQL:
```sql
config from cloud.resource 
where api.name = 'aws-ec2-describe-instances' 
AND json.rule = amiLaunchIndex equals \"foo\"
```

**Request Body:**
```json
{
  "cloudType": "aws",
  "id": "84b809a9-5535-401a-8d78-e7264cdc3d9a",
  "name": "your-awesome-name-for-saved-search",
  "description": "changing RQL from bar to foo",
  "searchType": "config",
  "saved": true,
  "timeRange": {
    "type": "relative",
    "value": {
      "unit": "hour",
      "amount": 24
    },
    "relativeTimeType": "BACKWARD"
  },
  "query": "config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = amiLaunchIndex equals \"foo\"",
  "data": null
}
```

The **response** will show the same **search id** updated with the new RQL and `description`

**Response Body:**

```json
{
  "cloudType": "aws",
  "id": "84b809a9-5535-401a-8d78-e7264cdc3d9a",
  "name": "your-awesome-name-for-saved-search",
  "description": "changing RQL from bar to foo",
  "searchType": "config",
  "saved": true,
  "timeRange": {
    "type": "relative",
    "value": {
      "unit": "hour",
      "amount": 24
    },
    "relativeTimeType": "BACKWARD"
  },
  "query": "config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = amiLaunchIndex equals \"foo\""
}
```
