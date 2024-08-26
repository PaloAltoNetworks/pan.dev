---
id: pagination-parameter
title: ADEM Pagination Parameter
description: Autonomous DEM API Pagination Parameter
hide_title: false
hide_table_of_contents: false
---

Autonomous DEM APIs require a `pagination` query parameter for endpoints that return a large number
of results. This parameter is used to limit the number of results in the response. It is used when
the response type is `grouped-summary`. It can contain the following fields:

| Field              | Description          |
| ---------------    | -------------------- |
| page               |  page number         |
| limit              |  page limit          |
| sortBy             |  sort by field       |
| sortOrder          |  can be in ascending or descending order: asc, desc   |
| enabled            |  boolean: true, false  |

Use the format

    page==<page>;limit==<limit>[;sortBy==<field>;sortOrder==asc] | none

For example, 

    page==0;limit==10;sortBy==application;sortOrder==asc

    page==0;limit==20

where page and limit are required and are the page number and number of results per page. sortBy / sortOrder are optional. If no pagination is specified, the default is page==0;limit=50. To disable paging, use pagination=none
