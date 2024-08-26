---
id: application-testuuid
title: Get an Application’s testUUID
description: Get an Application’s testUUID
sidebar_label: Get an Application’s testUUID
---

This API retrieves an application’s test UUID. This API does not have an impact on the UI as it only fetches the test ID and name.

## Request

    GET https://api.sase.paloaltonetworks.com//adem/telemetry/v2/measure/application/score?timerange=last_3_day&group=en.testName,en.test&endpoint-type=muAgent&response-type=grouped-summary
     
    header = { "prisma-tenant": "<tenant-id>" }


## Response

    {
        "startTime": 1693344600,
        "endTime": 1693603800,
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
         ……
            {
                "rowCount": 13166,
                "id": {
                    "test": "<test-id>",   <<<<<<
                    "testName": "Google"   <<<<<<
                },
                "average": {
                    "application": 91.6
                }
            },
        ……..
        ]
    }

