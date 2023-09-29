---
id: global-distribution-of-app-score-for-an-app-test
title: Get Global Distribution of App Score for an Application Test
description: Global distribution of App score for a given application test
sidebar_label: Get Global Distribution of App Score for an Application Test
---

This API retrieves the global distribution of application scores for a given application test.  

In the Response code, the lines that are marked with (<<<<<<) correspond to the area in the UI (see attached screenshot) that are marked with red arrows.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3769-global-distribution-of-app-score-for-an-app-test.png)


## Request

    GET https://api.sase.paloaltonetworks.com//adem/telemetry/v2/measure/application/score?timerange=last_30_day&filter=testUuid==3100bb11-dde4-4ab9-8503-d0c6ad5f9698&include=ec.test,ec.endpoint&endpoint-type=muAgent&response-type=grouped-summary&group=en.location
     
    header = { "prisma-tenant": "<tenant-id>" }


## Response

    {
        "startTime": 1691010000,
        "endTime": 1693602000,
        "endpointType": "muAgent",
        "tenantServiceGroup": [
               "<tenant-id>:<subtenant-id>”
        ],
        "pagination": {
            "page": 0,
            "limit": 50,
            "sortOrder": "DESC",
            "enabled": true
        },
        "collection": [
            {
                "rowCount": 9389,
                "id": {
                    "location": "Australia Southeast"   <<<<<<
                },
                "average": {
                    "application": 82.8   <<<<<<
                },
                "entityCounts": {
                    "endpoint": 4,   <<<<<<
                    "location": "Australia Southeast",
                    "test": 1   <<<<<<
                }
            },
         
            {
                "rowCount": 40616,
                "id": {
                    "location": "US West"
                },
                "average": {
                    "application": 93.1   <<<<<<
                },
                "entityCounts": {
                    "endpoint": 9, <<<<<<
                     "location": "US West",  <<<<<<
                     "test": 1   <<<<<<
                }
            }, ……..
            {
                "rowCount": 14089,
                "id": {
                    "location": "UK"
                },
                "average": {
                    "application": 96.6   <<<<<<
                },
                "entityCounts": {
                    "endpoint": 2,   <<<<<<
                    "location": "UK",   <<<<<<
                    "test": 1   <<<<<<
                }
            }
        ]
    }

