---
id: mu-agent-score-aggregated-across-all-endpoints
title: Get Mobile User Agent Score Aggregated Across All Endpoints
description: Mobile User Agent Score Aggregated Across All Endpoints
sidebar_label: Get Mobile User Agent Score Aggregated Across All Endpoints
---

This API retrieves the Mobile Users experience score. The score is aggregated across all the monitored mobile user devices.  

In the Response section, the lines that are followed by a comment (\<\<\<\<\<\<) correspond to the location in the UI (see attached screenshot) that is enclosed in a red box.  

The attached screen is located in Monitor -\> Users -\> User details page in the Strata Cloud Manager UI.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3754-mu-agent-score.png)


## Request

```
    GET https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/agent/score?timerange=last_30_days&endpoint-type=muAgent&response-type=summary
    
    header = { "prisma-tenant": "<tenant-id>" }
```

## Response

```
    { 
         "startTime": 1689616800,    
         "endTime": 1692208800,    
         "endpointType": "muAgent",    
         "tenantServiceGroup": [ "<tenant-id>:<subtenant-id>" ],    
         "rowCount": 101009,    
         "average": { "endpointScore": 95.5,        
         "wlan": 85.4,        
         "lan": 76.5,        
         "vpnUnderlay": 89.7,        
         "vpnOverlay": 79.4,        
         "application": 83.6,   <<<<<< Application Score for the MU agent highlighted in the screenshot        
         "internet": 88.9    
    }
```

