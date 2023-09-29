---
id: experience-score-for-top-monitored-mu-devices
title: Get Experience Score for Top Monitored Mobile User Devices
description: Experience Score for Top Monitored Mobile User Devices
sidebar_label: Get Experience Score for Top Monitored Mobile User Devices
---

This API retrieves the experience score for top monitored Mobile User devices.  

In the Response section, the lines that are followed by a comment (<<<<<<) correspond to the location in the UI (see attached screenshot) that is enclosed in a red box. "endpoint" represents the device that the user is using.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3760-exp-score-for-top-monitored-mu-devices.png)


## Request

    GET https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/agent/score?timerange=last_30_days&endpoint-type=muAgent&response-type=grouped-summary&group=en.endpoint&include=ap.username
     
    header = { "prisma-tenant": "<tenant-id>" }


## Response

    {
        "startTime": 1689692400,
        "endTime": 1692284400,
        "endpointType": "muAgent",
        "tenantServiceGroup": [
               "<tenant-id>:<subtenant-id>"   
        ],
        "pagination": {
            "page": 0,
            "limit": 50,
            "sortOrder": "DESC",
            "enabled": true
        },
        "collection": [
            {
                "rowCount": 6102,
                "id": {
                    "endpoint": "<id-of-endpoint>"   <<<<<<
                },
                "average": {
                    "endpointScore": 91.1,
                    "wlan": null,
                    "lan": 68.7,
                    "vpnUnderlay": null,
                    "vpnOverlay": null,
                    "application": 84.7,   <<<<<<
                    "internet": 88.5
                },
                "agentProperties": {
                    "username": "xxxxxx@xxxxxx.com"   <<<<<<
                }
            },
            {
                "rowCount": 4753,
                "id": {
                    "endpoint": "<id-of-endpoint>"   <<<<<<
                },
                "average": {
                    "endpointScore": 99.4,
                    "wlan": null,
                    "lan": 73.8,
                    "vpnUnderlay": 51.5,
                    "vpnOverlay": 53.2,
                    "application": 67.9,   <<<<<<
                    "internet": 75.2
                },
                "agentProperties": {
                    "username": "xxxxxx@xxxxxx.com"
                }
            },
            },……
        ]
    }

