---
id: global-distribution-of-application-experience-scores-for-mu-devices
title: Get Global Distribution of Application Experience Scores for Mobile User Devices
description: Global Distribution of Application Experience Scores for Mobile User Devices
sidebar_label: Get Global Distribution of Application Experience Scores for Mobile User Devices
---

The API retrieves the Global Distribution of application experience scores for all monitored Mobile User devices.  

In the Response section, the lines that are followed by a comment (<<<<<<) correspond to the location in the UI (see attached screenshot) that is enclosed in a red box. The US Southeast location displays a green circle indicating that it has a good score (85.4), whereas the US Central displays an orange circle indicating a fair score (61.2).  

The attached screen is located in Monitor -> Applications -> Application details page in the Strata Cloud Manager UI.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3759-global-dist-of-app-exp-scores-for-mu-devices.png)


## Request

    GET https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/application/score/ ?timerange=last_30_days&include=ec.test,ec.endpoint-type&endpoint-type=muAgent&response-type=grouped-summary&group=en.location
     
    header = { "prisma-tenant": "<tenant-id>" }


## Response

    {
        "startTime": 1689627600,
        "endTime": 1692219600,
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
                "rowCount": 46738,
                "id": {
                    "location": "US Southeast"   <<<<<<
                },
                "average": {
                    "application": 85.4   <<<<<<
                },
                "entityCounts": {
                    "location": "US Southeast",
                    "test": 8
                }
            },
            {
                "rowCount": 112123,
                "id": {
                    "location": "UK"   <<<<<<
                },
                "average": {
                    "application": 94.4   <<<<<<
                },
                "entityCounts": {
                    "location": "UK",
                    "test": 6
                }
            },
            {
                "rowCount": 42516,
                "id": {
                    "location": ""
                },
                "average": {
                    "application": 70.3
                },
                "entityCounts": {
                    "location": "",
                    "test": 6
                }
            },
            {
                "rowCount": 203,
                "id": {
                    "location": "India West"
                },
                "average": {
                    "application": 80.4
                },
                "entityCounts": {
                    "location": "India West",
                    "test": 6
                }
            },
            {
                "rowCount": 35042,
                "id": {
                    "location": null
                },
                "average": {
                    "application": 62.5
                },
                "entityCounts": {
                    "location": null,
                    "test": 9
                }
            },
            {
                "rowCount": 146669,
                "id": {
                    "location": "US Northeast"
                },
                "average": {
                    "application": 96.7
                },
                "entityCounts": {
                    "location": "US Northeast",
                    "test": 8
                }
            },
            {
                "rowCount": 109845,
                "id": {
                    "location": "US West"
                },
                "average": {
                    "application": 84.8
                },
                "entityCounts": {
                    "location": "US West",
                    "test": 10
                }
            },
            {
                "rowCount": 2055,
                "id": {
                    "location": "US Central"   <<<<<<
                },
                "average": {
                    "application": 61.2.    <<<<< marked in orange in the UI
                },
                "entityCounts": {
                    "location": "US Central",
                    "test": 7
                }
            },
            {
                "rowCount": 201617,
                "id": {
                    "location": "Australia Southeast"
                },
                "average": {
                    "application": 76.4
                },
                "entityCounts": {
                    "location": "Australia Southeast",
                    "test": 11
                }
            }
        ]
    }

