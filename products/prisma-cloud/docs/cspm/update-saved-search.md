---
id: update-saved-search
title: Update an existing saved search
---

This guide shows how to update an existing **saved search** in three steps

First of all, obtain an authorization token by [Logging In](/prisma-cloud/api/cspm/app-login/) ![alt text](/icons/api-icon-pan-dev.svg)

:::info

- The token is only valid for 10 minutes, so [refresh it](/prisma-cloud/api/cspm/extend-session/) ![alt text](/icons/api-icon-pan-dev.svg) as needed if you believe your workflow might take longer than that.

- The base url in this guide is a generic `api.prismacloud.io`. Replace it with yours accordingly.

:::

## Action 1 

After a recent search (e.g. with `POST /search/config` endpoint), a user gets a response with a search id <my_search_id_1>, which becomes a recent search for the user:

```json
    /* RQL used
    * config from cloud.resource 
    * where api.name = 'aws-ec2-describe-instances' 
    *   AND json.rule = amiLaunchIndex equals \"bar\"
    */

    Request URL: https://api.prismacloud.io/search/config
    Request Method: POST

    Request Body: 
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

    Response Body:
    {
        "cloudType": "aws",
        "id": "84b809a9-5535-401a-8d78-e7264cdc3d9a", // recent search id
        "name": "",
        "description": "",
        "searchType": "config",
        "saved": false, // recent search
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

## Action 2

Call the `POST /search/history/{my-search-1-id}` endpoint with the search ID returned by the previous Action + add search name and description. The response will show the search updated as a saved search:

```json
    /* NOTE: we are using the search ID from Action-1 as part of URI
    * RQL used is still
    * config from cloud.resource 
    * where api.name = 'aws-ec2-describe-instances' 
    *   AND json.rule = amiLaunchIndex equals \"bar\"
    */

    Request URL: https://api.prismacloud.io/search/history/84b809a9-5535-401a-8d78-e7264cdc3d9a
    Request Method: POST

    Request Body: 
    {
        "cloudType":"aws",
        "id":"84b809a9-5535-401a-8d78-e7264cdc3d9a", // search id from action-1
        "name":"my-search-demo", // a name for saving a search
        "description":"demo for converting recent to saved search", // some description
        "searchType":"config", // config search type
        "saved": false, // still a recent search
        "timeRange":
            {
                "type":"relative",
                "value":
                    {
                        "unit":"hour",
                        "amount":24
                    },
                "relativeTimeType":"BACKWARD"
            },
        "query":"config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = amiLaunchIndex equals \"bar\"",
        "data":null
    }

    Response Body:
    {
        "cloudType":"aws",
        "id":"84b809a9-5535-401a-8d78-e7264cdc3d9a", // same search id
        "name":"my-search-demo", // search name added 
        "description":"demo for converting recent to saved search", // search description added
        "searchType":"config",
        "saved":true, // converted from recent to saved!!
        "timeRange":
            {
                "type":"relative",
                "value":
                    {
                        "unit":"hour",
                        "amount":24
                    },
                "relativeTimeType":"BACKWARD"
            },
        "query":"config from cloud.resource where api.name = \u0027aws-ec2-describe-instances\u0027 AND json.rule = amiLaunchIndex equals \"bar\""
    }
```

## Action 3
Call the `POST /search/history/{my-search-1-id}` endpoint with the same search ID and the same search Name. **Update** the RQL and/or description. The response will show the same search ID updated with the new RQL/description:

```json
    /* RQL used
    * config from cloud.resource 
    * where api.name = 'aws-ec2-describe-instances' 
    *   AND json.rule = amiLaunchIndex equals \"bar\"
    */

    Request URL: https://api-stage.prismacloud.io/search/config
    Request Method: POST

    /* RQL to be changed to
    * config from cloud.resource 
    * where api.name = 'aws-ec2-describe-instances' 
    *   AND json.rule = amiLaunchIndex equals \"foo\" :: "change from bar to foo"
    */

    Request Body: 
    {
        "cloudType":"aws",
        "id":"84b809a9-5535-401a-8d78-e7264cdc3d9a", // KEEP same search id
        "name":"my-search-demo", // KEEP same search name
        "description":"demo for changing RQL from bar to foo", // some description change
        "searchType":"config", // config search type
        "saved":true, // existing saved search
        "timeRange":
            {
                "type":"relative",
                "value":
                    {
                        "unit":"hour",
                        "amount":24
                    },
                "relativeTimeType":"BACKWARD"
            },
        // below query has 'foo' text instead of 'bar' so trying to update RQL
        "query":"config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = amiLaunchIndex equals \"foo\"",
        "data":null
    }

    Response Body:
    {
        "cloudType":"aws",
        "id":"84b809a9-5535-401a-8d78-e7264cdc3d9a", // same search id
        "name":"my-search-demo", // same search name 
        "description":"demo for changing RQL from bar to foo", // NEW search description!
        "searchType":"config",
        "saved":true, // still saved
        "timeRange":
            {
                "type":"relative",
                "value":
                    {
                        "unit":"hour",
                        "amount":24
                    },
                "relativeTimeType":"BACKWARD"
            },
        // NEW RQL with the same search id and name
        "query":"config from cloud.resource where api.name = \u0027aws-ec2-describe-instances\u0027 AND json.rule = amiLaunchIndex equals \"foo\""
    }
```