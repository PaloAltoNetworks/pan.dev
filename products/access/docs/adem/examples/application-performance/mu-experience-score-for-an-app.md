---
id: mu-experience-score-for-an-app
title: Get Mobile User Experience Score for an Application
description: GET Mobile User Experience Score for an Application
sidebar_label: Get Mobile User Experience Score for an Application
---

This API retrieves the Mobile User experience score for an application based on its app ID  

In the Response section, the lines that are followed by a comment (<<<<<<) correspond to the location in the UI (see attached screenshot) that is enclosed in a red box.  

The attached screen is located in Monitor -> Users -> User details page in the Strata Cloud Manager UI.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3765-mu-experience-score-for-an-app.png)


## Request

    GET https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/application/score?timerange=last_3_day&filter=testUuid==3100bb11-dde4-4ab9-8503-d0c6ad5f9698&endpoint-type=muAgent&response-type=summary
     
    header = { "prisma-tenant": "<tenant-id>" }


## Response

    {
        "startTime": 1692100200,
        "endTime": 1692111000,
        "endpointType": "muAgent",
        "tenantServiceGroup": [
            "<tenant-id>:<subtenant-id>”
        ],
        "rowCount": 462,
        "average": {
            "application": 90   <<<<<<
        }
    }

