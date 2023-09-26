---
id: fetch-all-mu-adem-agents-logged-in-for-last-30-days
title: Get All the Mobile User ADEM Agents Logged in for the Last 30 Days
description: Fetch all the Mobile Users ADEM agents logged in for the last 30 days
sidebar_label: Get all the Mobile Users ADEM agents logged in for the last 30 days
---

This API retrieves all the Mobile Users ADEM agents logged in for the last 30 days.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3761-mu-adem-agents-logged-in-the-last-30-days.png)


## Request

    https://api.sase.paloaltonetworks.com/agent/v2/measure/agent/score?timerange=last_30_days&group=en.endpoint,en.user&endpoint-type=muAgent&response-type=grouped-summary
     
    header = { "prisma-tenant": "<tenant-id>" }


## Response

    {
        "startTime": 1687262400,
        "endTime": 1689854400,
        "endpointType": "muAgent",
        "tenantServiceGroup": [
                      "<tenant-id>:<subtenant-id>"       ],
        "pagination": {
            "page": 0,
            "limit": 50,
            "sortOrder": "DESC",
            "enabled": true
        },
        "collection": [
            {
                "rowCount": 87,
                "id": {
                    "endpoint": "<id-of-endpoint>",
                    "user": "adem.testks2@gmail.com"
                },
                "average": {
                    "endpointScore": 99.6,
                    "wlan": 84.5,
                    "lan": 62.9,
                    "vpnUnderlay": 88.2,
                    "vpnOverlay": 93.3,
                    "application": 65.2,
                    "internet": 64
                },
                "agentProperties": {}
            },
        ]

