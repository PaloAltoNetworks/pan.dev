---
id: distribution-of-mu-agent-scores-by-endpoint-across-all-tests
title: Get Distribution of Mobile User Agent Scores by Endpoint Across All Tests
description: Get a distribution of MU agent scores by endpoint (across all tests)
sidebar_label: Get Distribution of Mobile User Agent Scores by Endpoint Across All Tests
---

This API retrieves the distribution of monitored mobile user scores by endpoint across all application tests. The icons are represented in one of three colors, red, orange, or green, that indicate the health of the segment based on the experience score.  
Red (poor) - experience score <30  
Orange (fair) - experience score >=30 but <=70  
Green (good) - experince score is >70  

The attached screen is located in Monitor -> Applications-> Application details page in the Strata Cloud Manager UI.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3757-distribution-of-mu-agent-scores-by-endpoint.png)


## Request

    GET https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/agent/score?timerange=last_30_days&endpoint-type=muAgent&response-type=summary
     
    header = { "prisma-tenant": "<tenant-id>" }


## Response

    {
        "startTime": 1689616800,
        "endTime": 1692208800,
        "endpointType": "muAgent",
        "tenantServiceGroup": [
                "<tenant-id>:<subtenant-id>"   
     ],
        "classifier": "poor:[0 - 30],fair:[30 - 70],good:[70 - 100]",
        "entityCounts": {},
        "collection": [
            {
                "id": "endpointScore",
                "distribution": {
                    "clients": 22,
                    "score": 96,
                    "poor": 0,
                    "fair": 0,
                    "good": 22
                }
            },
            {
                "id": "wlan",
                "distribution": {
                    "clients": 3,
                    "score": 85,
                    "poor": 0,
                    "fair": 0,
                    "good": 3
                }
            },
            {
                "id": "lan",   <<<<<<
                "distribution": {
                    "clients": 17,
                    "score": 81,   <<<<<<
                    "poor": 0,   <<<<<<
                    "fair": 5,   <<<<<<
                    "good": 12   <<<<<<
                }
            },
            {
                "id": "vpnUnderlay",
                "distribution": {
                    "clients": 19,
                    "score": 90,
                    "poor": 0,
                    "fair": 2,
                    "good": 17
                }
            },
            {
                "id": "vpnOverlay",
                "distribution": {
                    "clients": 14,
                    "score": 85,
                    "poor": 0,
                    "fair": 2,
                    "good": 12
                }
            },
            {
                "id": "application",
                "distribution": {
                    "clients": 22,
                    "score": 81,
                    "poor": 1,
                    "fair": 3,
                    "good": 18
                }
            },
            {
                "id": "internet",   <<<<<<
                "distribution": {
                    "clients": 22,
                    "score": 89,   <<<<<<
                    "poor": 0,   <<<<<<
                    "fair": 1,   <<<<<<
                    "good": 21   <<<<<<
                }
            }
        ]
    }}

