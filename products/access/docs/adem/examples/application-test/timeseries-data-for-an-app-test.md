---
id: timeseries-data-for-an-app-test
title: Get Timeseries Data for an Application Test
description: Timeseries Data for an Application Test
sidebar_label: Get Timeseries Data for an Application Test
---

This API retrieves the Timeseries data for a given application test.  

The attached screen is located in Monitor -> Applications -> Application details page in the Strata Cloud Manager UI.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3766-timeseries-data-for-an-app-test.png)


## Request

    GET https://api.sase.paloaltonetworks.com//adem/telemetry/v2/measure/application/score?timerange=last_30_day&filter=testUuid==3100bb11-dde4-4ab9-8503-d0c6ad5f9698&endpoint-type=muAgent&response-type=timeseries
     
    header = { "prisma-tenant": "<tenant-id>" }


## Response

    {
        "startTime": 1691010000,
        "endTime": 1693602000,
        "endpointType": "muAgent",
        "tenantServiceGroup": [
               "<tenant-id>:<subtenant-id>”    ],
        "samplePeriod": 10800,
        "series": [
            {
                "_rowCount": 352,
                "application": 79.3,   <<<<< beginning of the timeseries data
                "internet": 92.9,
                "sample": 1691010000
            },
            {
                "_rowCount": 322,
                "application": 86.5,   <<<<<<< after the app score increased for the first time
                "internet": 93.1,
                "sample": 1691020800
            },
             ………
            {
                "_rowCount": 573,
                "application": 89.8,   <<<<<<< present app score
                "internet": 92.4,
                "sample": 1693591200
            }
        ],
        "seriesEntityCount": []
    }

