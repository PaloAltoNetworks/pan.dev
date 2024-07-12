---
id: top-20-applications-lowest-to-highest-experience-score
title: Get Top 20 Applications with Lowest to Highest Experience Score
description: Top 20 applications with lowest to highest experience score
sidebar_label: Get Top 20 Applications with Lowest to Highest Experience Score
---

This API retrieves the top 20 applications with lowest to highest experience score.  

In the Response section, the lines that are followed by a comment (\<\<\<\<\<\<) correspond to the location in the UI (see attached screenshot) that is enclosed in a red box. For example, the Dropbox application has a score of 31, which is above 30 but less than 70. So, its icon is represented in orange, which indicates a fair experience score.  

The attached screen is located in Monitor -> Users -> User details page in the Strata Cloud Manager UI.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3758-top-20-apps-with-lowest-to-highest-experience-score.png)


## Request

```
    GET https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/application/score?timerange=last_30_days&endpoint-type=muAgent&response-type=grouped-summary&pagination=page==0;limit==500;sortBy==application;sortOrder==asc&group=en.testName,en.test
     
    header = { "prisma-tenant": "<tenant-id>" }
```

## Response

```
    {
        "startTime": 1689627600,
        "endTime": 1692219600,
        "endpointType": "muAgent",
        "tenantServiceGroup": [
                        "<tenant-id>:<subtenant-id>"       ],
        "pagination": {
            "page": 0,
            "limit": 500,
            "sortBy": "application",
            "sortOrder": "ASC",
            "enabled": true
        },
        "collection": [
            {
                "rowCount": 1,
                "id": {
                    "test": "9114bf6b-f86d-44\u0000\u00002b-\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u00000c5e",
                    "testName": null
                },
                "average": {
                    "application": 0
                }
            },
            {
                "rowCount": 23132,
                "id": {
                    "test": "<test-id>",
                    "testName": "Dropbox"   <<<<<<
                },
                "average": {
                    "application": 31   <<<<<<
                }
            },
            {
                "rowCount": 7781,
                "id": {
                    "test": "<test-id>",
                    "testName": "AWS"   <<<<<<
                },
                "average": {
                    "application": 34.7   <<<<<<
                }
            },
            {
                "rowCount": 100636,
                "id": {
                    "test": "<test-id>",
                    "testName": "Zoom - PANWSASE"
                },
                "average": {
                    "application": 77.1
                }
            },
            {
                "rowCount": 86717,
                "id": {
                    "test": "<test-id>",
                    "testName": "MS Teams"
                },
                "average": {
                    "application": 83.9
                }
            },
            {
                "rowCount": 100597,
                "id": {
                    "test": "<test-id>",
                    "testName": "Webex"
                },
                "average": {
                    "application": 84.1
                }
            },
            {
                "rowCount": 27348,
                "id": {
                    "test": "<test-id>",
                    "testName": "SuperSaaSApp"
                },
                "average": {
                    "application": 87.1
                }
            },
            {
                "rowCount": 100623,
                "id": {
                    "test": "<test-id>",
                    "testName": "Google"
                },
                "average": {
                    "application": 88.6
                }
            },
            {
                "rowCount": 100596,
                "id": {
                    "test": "<test-id>",
                    "testName": "Slack"
                },
                "average": {
                    "application": 89.3
                }
            },
            {
                "rowCount": 48693,
                "id": {
                    "test": "<test-id>",
                    "testName": "Salesforce"
                },
                "average": {
                    "application": 93.6
                }
            },
            {
                "rowCount": 100640,
                "id": {
                    "test": "<test-id>",
                    "testName": "MS Office"
                },
                "average": {
                    "application": 94
                }
            },
            {
                "rowCount": 9,
                "id": {
                    "test": "<test-id>",
                    "testName": null
                },
                "average": {
                    "application": 99.7
                }
            }
        ]
    }
```
