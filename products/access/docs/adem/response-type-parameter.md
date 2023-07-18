---
id: response-type-parameter
title: ADEM Response Type Parameter
description: Autonomous DEM API Response Type Parameter
hide_title: false
hide_table_of_contents: false
---

Autonomous DEM APIs require a `response-type` query parameter. Each endpoint supports one or more of the following responses, specified by the response-type query parameter.

| Response               | Description                          |
| ---------------        | -------------------- |
| summary                | A summary (aggregate) of the requested object (e.g. agent or application score)   |
| timeseries             | A timeseries of the requested object, with the each sample an aggregate over a sample period defined by the selected time interval    |
| distribution           | A distribution of objects, grouped by an entity and classified into good, fair, poor categories (e.g. distribution of agent scores by user or endpoint |
| grouped-summary        | As for summary, grouped by one or more entities e.g. agent scores grouped by user or endpoint |
| grouped-timeseries     | As for timeseries, grouped by one or more entities  |
| grouped-distribution   | As for distribution, grouped by one or more entities |
