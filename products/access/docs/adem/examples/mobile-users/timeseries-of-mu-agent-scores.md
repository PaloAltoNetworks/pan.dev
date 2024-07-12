---
id: timeseries-of-mu-agent-scores
title: Get Timeseries of Mobile User Agent Scores
description: Timeseries of Mobile User Agent Scores
sidebar_label: Get Timeseries of Mobile User Agent Scores
---

This API retrieves the timeseries for the application experience score trend for all monitored mobile user devices.  

In the Response section, the lines that are followed by a comment (\<\<\<\<\<\<) correspond to the experience score recorded at the start time of the timeseries segment. In the graph shown in the screenshot, the trend line is green since the score at all times shown is over 70 which represents a good score.  

The attached screen is located in Monitor -\> Applications-\> Application details page in the Strata Cloud Manager UI.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3756-timeseries-of-mu-agent-scores.png)


## Request

```
    GET https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/agent/score?timerange=last_30_days&endpoint-type=muAgent&response-type=timeseries
     
    header = { "prisma-tenant": "<tenant-id>" }
```

## Response

```
    {
        "startTime": 1689627600,
        "endTime": 1692219600,
        "endpointType": "muAgent",
        "tenantServiceGroup": [
               "<tenant-id>:<subtenant-id>"
        ],
        "samplePeriod": 10800,
        "series": [
            {
                "_rowCount": 288,
                "endpointScore": 95.2,
                "wlan": 86.3,
                "lan": 61.1,
                "vpnUnderlay": 83.5,
                "vpnOverlay": 73.9,
                "internet": 84.7,
                "application": 81.7,   <<<<<<
                "sample": 1689627600   <<<<<<
            },
            {
                "_rowCount": 262,
                "endpointScore": 96.6,
                "wlan": 84.5,
                "lan": 72.1,
                "vpnUnderlay": 94.6,
                "vpnOverlay": 81.4,
                "internet": 87.8,
                "application": 86,   <<<<<<
                "sample": 1689638400   <<<<<<
            },
            …..
             {
                "_rowCount": 430,
                "endpointScore": 96.5,
                "wlan": 86.2,
                "lan": 85.1,
                "vpnUnderlay": 90.5,
                "vpnOverlay": 68.2,
                "internet": 88.9,
                "application": 84.4,   <<<<<<
                "sample": 1692208800   <<<<<<
            }
        ],
        "seriesEntityCount": []
    }
```
