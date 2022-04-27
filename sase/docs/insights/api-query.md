---
id: pai_query_language
title: Prisma Access Insights Query Language
description: Prisma Access Insights Query Language
sidebar_label: Language Introduction
---

# Prisma Access Insights Query Language

Prisma Access allows you to monitor your Prisma Access environment continually. Prisma Access
Insights also offers you an overall view of your entire environment. 

The Prisma Access Insights query language allows you to retrieve selected
information from your Prisma Access environment. This language is JSON-based. You submit queries
and retrieve query results using the following Prisma Access Insights APIs.

| Customer | API Version | API |
-----------|-------------|------
| MSSP | 2.0 | [Resource Query](/sase/api/insights/2.0/dataresource#operation/post-api-sase-v2.0-resource-query-resource_name)<br />[Resource Custom Query](/sase/api/insights/2.0/dataresourcecustom#operation/post-api-sase-v2.0-resource-custom-query-feature_name-request_name) |
| Single Tenant | 1.0 | [Resource Query](/sase/api/insights/1.0/dataresource#operation/post-api-sase-v1.0-resource-tenant-tenant_id-query-resource_name)<br />[Resource Custom Query](/sase/api/insights/1.0/dataresourcecustom#operation/post-api-sase-v1.0-resource-tenant-tenant_id-custom-query-feature_name-request_name) |

Before using the Insights API, you'll need to generate an access token. Depending on the API version
that you're using, see Getting Started:

| Customer | API Version | API |
-----------|-------------|------
| MSSP     | 2.0 | [Get Started with Prisma Access Insights 2.0 API](getting_started-20) |
| Single Tenant     | 1.0 | [Get Started with Prisma Access Insights 1.0 API](getting_started-10) |


## Query Language Usage

You express queries as JSON objects that you submit as the payload on a REST API. For each such
object, you specify the name or names of the fields whose values you want to retrieve, filter
conditions including the retrieval time range, and the order in which to sort the retrieved
data. 

For example, the following query retrieves a list of all the login user names in descending order
that accessed Global Protect in the US West region. No more than 100 records will be returned in
the query response.


    POST https://{{host}}/api/sase/v1.0/resource/tenant/{{tenant_id}}/query/gp_logs
    Authorization: Bearer {{jwt_token}}
    Content-Type: application/json

    {
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
      "filter": {                                            
        "rules": [
          {
            "property": "event_time",                         
            "operator": "last_n_days",
            "values": [
              30
            ]
          },
          {
            "property": "edge_location_display_name",         
            "operator": "in",
            "values": [
              "US Northwest"
            ]
          }
        ]
      },
      "count": 100                                          
    }


## Query Components

Queries are submitted against [resources](query_language_resources) that are available to your
Prisma Access Insights tenant. Each query consists of the following:

- [properties](query_properties) 

  Identify the data to output for the query. This begins by identifying
  the data fields to include in the query output, but then also
  includes sorting information, and any functions that you want to
  apply to the query data.

- [filters](query_filters)

  Limit the information included in your query results by applying boolean expressions to information found in the dataset.


- count 

  Integer identifying the maximum number of records to retrieve.
  
