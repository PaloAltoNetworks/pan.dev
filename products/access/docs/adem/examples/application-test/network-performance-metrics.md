---
id: network-performance-metrics
title: Get Network Performance Metrics
description: Network Performance Metrics
sidebar_label: Get Network Performance Metrics
---

This API retrieves the Network Performance Metrics.  

In the Response section, the values shown are the starting values shown in the graph for the first sample.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3763-network-performance-metrics.png)


## Request

```
    GET https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/internet/metric?timerange=last_30_day&endpoint-type=muAgent&response-type=timeseries
     
    header = { "prisma-tenant": "<tenant-id>" }
```

## Response

```
    {
        "startTime": 1691334000,
        "endTime": 1693926000,
        "endpointType": "muAgent",tenantServiceGroup
        "tenantServiceGroup": [
               "<tenant-id>:<subtenant-id>"   
        ],
        "samplePeriod": 10800,
        "series": [
            {
                "_rowCount": 3681,
                "availability": 99.5,
                "delay": 81472.1,   <<<<<<
                "maxDelay": 1151403,
                "jitter": 26321.4,   <<<<<<
                "maxJitter": 6596877,
                "loss": 0.6,   <<<<<<
                "maxLoss": 100,
                "sample": 1691334000
            },
            {
                "_rowCount": 3673,
                "availability": 99.5,
                "delay": 82811.9,
                "maxDelay": 938133,
                "jitter": 26913.5,
                "maxJitter": 6826693,
                "loss": 0.6,
                "maxLoss": 100,
                "sample": 1691344800
            },....
    ]
```
