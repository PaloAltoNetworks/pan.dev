---
id: adem-apis-for-rns
title: Autonomous DEM Retrieve RNs
description: Autonomous DEM Remote Networks Metrics API Example
sidebar_label: ADEM Retrieve RN Metrics
---

You can retrieve all the same metrics for Remote Networks that you can retrieve for your Mobile Users. All the APIs for Mobile Users can be used for endpoint Remote Networks by using endpoint-type=rnAgent. In each of the Mobile User APIs, replace endpoint-type=muAgent with endpoint-type=rnAgent. Remote Agent Score is aggregated across all Remote Networks

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3772-remote-agent-score-aggregated-across-all-rn.png)


## Request

    GET https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/agent/score?timerange=last_30_days&endpoint-type=rnAgent&response-type=summary
     
    header = { "prisma-tenant": "<tenant-id>" }


## Response

    {
        "startTime": 1691334000,
        "endTime": 1693926000,
        "endpointType": "rnAgent",
        "tenantServiceGroup": [
             "<tenant-id>:<subtenant-id>”
        ],
        "rowCount": 51590,
        "average": {
            "endpointScore": 67.1,
            "wlan": null,
            "lan": null,
            "vpnUnderlay": 74.5,
            "vpnOverlay": 76,
            "application": 64.2,   <<<<<<
            "internet": 68.1
        }
    }

