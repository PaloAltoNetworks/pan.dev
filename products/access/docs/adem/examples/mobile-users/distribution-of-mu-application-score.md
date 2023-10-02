---
id: distribution-of-mu-application-score
title: Get Distribution of Mobile User Application Score
description: Distribution of Mobile User Application Score
sidebar_label: Get Distribution of Mobile User Application Score
---

This API retrieves the experience score distribution (Good, Fair, Poor) across all monitored Mobile User devices.  

In the Response section, the lines that are followed by a comment (<<<<<<) correspond to the location in the UI (see attached screenshot) that is enclosed in a red box.  

The attached screen is located in Monitor -> Users -> User details page in the Strata Cloud Manager UI.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3755-distribution-of-mu-app-score.png)


## Request

    GET https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/agent/score?timerange=last_30_days&endpoint-type=muAgent&response-type=summary
     
    header = { "prisma-tenant": "<tenant-id>" }


## Response

    {
        "startTime": 1689627600,
        "endTime": 1692219600,
        "endpointType": "muAgent",
        "tenantServiceGroup": [
            "<tenant-id>:<subtenant-id>"
        ],
        "id": "tests",
        "classifier": "poor:[0 - 30],fair:[30 - 70],good:[70 - 100]",
        "distribution": {
            "clients": 11,
            "score": 69,
            "poor": 1,   <<<<<< Distribution of Mobile User Application Score
            "fair": 2,   <<<<<< Distribution of Mobile User Application Score
            "good": 8    <<<<<< Distribution of Mobile User Application Score
         }
    }

