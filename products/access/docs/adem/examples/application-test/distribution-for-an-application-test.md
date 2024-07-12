---
id: distribution-for-an-application-test
title: Get the Distribution for an Application Test (Summary)
description: Fetching the distribution for a particular application test (summary)
sidebar_label: Get the Distribution for an Application Test (Summary)
---

This API retrieves the distribution for a particular application test.  

In the Response section, the lines that are followed by a comment (\<\<\<\<\<\<) correspond to the location in the UI (see attached screenshot) that is enclosed in a red box.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3767-distribution-for-an-app-test.png)


## Request

```
    GET https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/agent/score?timerange=last_30_day&filter=testUuid==3100bb11-dde4-4ab9-8503-d0c6ad5f9698&endpoint-type=muAgent&response-type=distribution
     
    header = { "prisma-tenant": "<tenant-id>" }
```


## Response

```
    {
        "startTime": 1691010000,
        "endTime": 1693602000,
        "endpointType": "muAgent",
        "tenantServiceGroup": [
               "<tenant-id>:<subtenant-id>”    ],
        "classifier": "poor:[0 - 30],fair:[30 - 70],good:[70 - 100]",
        "entityCounts": {},
        "collection": [   <<<<<<
            {
                "id": "endpointScore",   <<<<<<
                "distribution": {
                    "clients": 16,   <<<<<<
                    "score": 90,   <<<<<<
                    "poor": 0,   <<<<<<
                    "fair": 2,   <<<<<<
                    "good": 14   <<<<<<
                }
            },
            {
                "id": "wlan",
                "distribution": {
                    "clients": 5,
                    "score": 87,
                    "poor": 0,
                    "fair": 0,
                    "good": 5
                }
            },
    ….    ]
    }
```

