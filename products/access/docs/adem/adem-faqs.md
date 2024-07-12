---
id: adem-faqs
title: Autonomous DEM API FAQs
description: Autonomous DEM API FAQs
sidebar_label: ADEM API FAQs
---

## What are ADEM APIs used for?

This API provides access to Autonomous Digital Experience Management summary, distribution and
timeseries data.It helps fetch data such as application score and  Agent scores to help troubleshoot
if the issue is with the endpoint /application or the network. ADEM APIs can be additionally used to
fetch the zoom meeting data.

 For more information, see [Autonomous DEM API](/access/docs/adem/).

## What type of authorization do ADEM APIs use?

ADEM APIs are routed through the API GW which uses the OAuth2 authentication. A valid Bearer token
is required, which verifies tenant access described by the following header formats:

| Prisma-Tenant         | Prisma-SubTenant   |
| ---------------       | ------------------ |
| tenant_service_group  | Mobile User Agent  |
| \<tenant\>:\<subtenant\>  | Mobile User Probe  |


## What are the response types that the ADEM endpoint supports?

Each endpoint supports one or more of the following responses, specified by the response-type query
parameter:

| response-type         | Description                                                                                                                                             |
| ---------------       | ------------                                                                                                                                            |
| summary               | A summary (aggregate) of the requested object (for example, agent or application score)                                                                         |
| timeseries            | A timeseries of the requested object, with the each sample an aggregate over a sample period defined by the selected time interval                      |
| distribution          | A distribution of objects, grouped by an entity and classified into good, fair, poor categories, for example, distribution of agent scores by user or endpoint  |
| grouped-summary       | As for summary, grouped by one or more entities, for example, agent scores grouped by user or endpoint                                                           |
| grouped-timeseries    | As for timeseries, grouped by one or more entities                                                                                                      |
| grouped-distribution  | As for distribution, grouped by one or more entities                                                                                                    | 

For more information, see [ADEM Response Type Parameter](/access/docs/adem/response-type-parameter/).

## What are Groups used for?

Group parameter is used when the response-type is grouped-summary to specify which entity to group
by. The format is `Entity.<property>[,...]`. 

For example, `Entity.user, Entity.endpoint` would group
results by user and endpoint. `en` is an alias for Entity so `en.user, en.endpoint` is also valid.

## What are Filters used for?


A parameter of the form `<field><operator><value>`  is used to filter the ADEM query. The following operators are supported:  

```
>=
<=
==
!=
>
< 
```

Multiple filters are supported. They can be logically combined with semi-colon to describe AND and a
comma for OR. For example,

```
    agent_uuid==1234,agent_uuid==5678;application==Gmail,application==Zoom
```

would select records when the agent uuid is either 1234 OR 5678 AND the application is Gmail OR Zoom. 

For more information, see [ADEM Filter Parameter](/access/docs/adem/filter-parameter/).
  

## What is an include parameter?

The include parameter is used to include additional results in the  response - multiple includes can
be specified by comma separating. The format for this parameter is `<Include>.<property>[,..]`

| include            | Alias  | Description                       | Example                                  |            
| ---------------    | -----  | -----------                       | --------                                 |                                                                                                                                      
| EntityCounts       | ec     | include a count of given entities | EntityCounts.user,    ec.user, ec.endpoint  |                                                                        
| AgentProperties    | ap     | include agent properties          | ap.ComputerName                          |

For more information, see [ADEM Include Parameter](/access/docs/adem/include-parameter/).

## What are endpoint types?

The endpoint device is used to specify the source of the ADEM timeseries data.

| Name      | Description           |
| -----     | ------------          |
| muAgent   | Mobile User Agent     |
| muProbe   | Mobile User Probe     |
| rnAgent   | Remote Network Agent  |
| rnProbe   | Remote Network Probe  |

For more information, see [ADEM Endpoint Type Parameter](/access/docs/adem/endpoint-type-parameter/).


## What is a result filter?

A result filter is used to limit results by filtering the output of the query, and maps to a HAVING
statement ( as compared with the input, which maps to a SELECT ). The output is filtered by
requiring specified scores to be in a range defined by the score classification:

| Category      | Range                |
| --------      | -----                |
| poor          | less than 30         |
| fair          | 30 → 70              |
| good          | greater than 70      |


| Name          | Format                         | Type     | Description                     | Examples                                                                       |
| -----         | ------                         | ----     | -----------                     | --------                                                                       |
| result-filter | Score.\<field1\>==\<category\>,..; | string   | Limit score results by category | Score.endpointScore==fair,good    Score.application==good;Score.lan==fair,good |

For more information, see [ADEM Result Filter Parameter](/access/docs/adem/result-filter-parameter/).


## What are the valid values that can be used in a time series filter?

- start, end : timestamps in Unix timestamp format (seconds), for example, start=1686814360&end=1686900760
- timerange: 

  | Format        | Description                                                              | Example                                     |
  | ------        | -----------                                                              | --------                                    |
  | start,end     | timestamps in Unix timestamp format (seconds)                            | start=1686814360&end=1686900760             |
  | timerange     | human readable format: last_\<N\>_minutes | hours | days | weeks | months   | last_30_days last_30_minutes last_2_weeks |

For timeseries responses, records are aggregated over a sample period which is a function of the
time interval requested, such that the granularity decreases with increasing interval. This keeps
the number of sample returned to a reasonable number whilst still allowing higher resolution at
small intervals.

  | interval (days)   | sample period (minutes)   |
  | ---------------   | -----------------------   |
  | \<= 1              | 5                         |
  | \<= 3              | 15                        |
  | \<= 7              | 30                        |
  | \<= 14             | 60                        |
  | \<= 21             | 120                       |
  | \> 21              | 180                       |


## Is pagination supported?

Yes, pagination is supported for ADEM APIs. The following are the details of  pagination or sorting parameters.
A parameter used to limit the number of results in the response, used when the response type is grouped-summary

| Name         | Format                                                                 | Type   | Examples                                                                          |
| ----         | ------                                                                 | -----  | --------                                                                          |
| pagination   | page==\<page\>;limit==\<limit\>[;sortBy==\field\>;sortOrder==asc] | none    | string | page==0;limit==10;sortBy==application;sortOrder==ascpage==0;limit==20none   |

where page and limit are required and are the page number and number of results per page. sortBy / sortOrder are optional
If no pagination is specified, the default is page==0;limit=50. To disable paging, use pagination=none.

For more information, see [ADEM Pagination Parameter](/access/docs/adem/pagination-parameter/).


