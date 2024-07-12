---
id: distribution-for-an-app-test-per-segment
title: Get Distribution for an Application Test Per Segment
description: Fetch the distribution for a particular application test per segment
sidebar_label: Get Distribution for an Application Test Per Segment
---

This API retrieves the distribution for a particular application test within a segment.  


The attached screen is located in Monitor -> Applications -> Application details page in the Strata Cloud Manager UI.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3768-distribution-for-an-app-test-per-segment.png)


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
        "collection": [
            {
                 …..
                
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
          {
                "id": "lan",   <<<<<
                "distribution": {
                    "clients": 17,
                    "score": 82,   <<<<<< lan segment green indicating a good score
                    "poor": 0,
                    "fair": 6,
                    "good": 11
                }
            }, ……..
            {
                "id": "application",   <<<<<<
                "distribution": {
                    "clients": 22,
                    "score": 90,  <<<<<< google base app segment green indicating a good score
                    "poor": 0,
                    "fair": 3,
                    "good": 19
                }
            },
            {
                "id": "internet",
                "distribution": {
                    "clients": 22,
                    "score": 92, <<<<<< internet segment green indicating a good score
                    "poor": 0,
                    "fair": 2,
                    "good": 20
                }
            }
      ]
    }
```

