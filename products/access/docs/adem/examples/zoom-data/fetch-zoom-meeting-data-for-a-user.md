---
id: fetch-zoom-meeting-data-for-a-user
title: Get Zoom Meeting Data for a User
description: Fetch zoom meeting data for a particular user
sidebar_label: Get Zoom Meeting Data for a User
---

This API retrieves zoom meeting data for a particular user.  

The attached screen is located in Monitor -> Users -> User details page (Zoom Performance Analysis tab) in the Strata Cloud Manager UI.

The following shows the portions of the UI widget where the data is displayed for this example:

![](/sase/img/adem/DOCS-3773-zoom-meeting-data-for-a-particular-user.png)


## Request

```
    GET https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/internet/metric? timerange=last_30_day&filter=email=auntyjack@panwsase.com
     
    header = { "prisma-tenant": "<tenant-id>" }
```

## Response

```
    [
       {
            "meetingUuid": "fa05d660556b49e7b979bb1bd2171328",
            "email": "xxxx@xxxxx.com",
            "recordId": "1f5ef19d-e890-4520-9517-cccc6bc55a2a",
            "accountId": "Oc9Dz_jJTPiiczkAOkA_RQ",
            "duration": 0,
            "startTime": "2023-08-31T02:00:09Z",
            "timezone": "Australia/Sydney",
            "topic": null,
            "meetingId": "89183316435",
            "userId": "16778240",
            "userName": "xxxxx@xxxxx.com",
            "joinTime": "2023-08-31T02:00:09Z",
            "leaveTime": "2023-08-31T02:10:01Z",
            "actualDuration": 592,
            "meetingHostId": "d6CeI4iER_qzaSNgnzVf6Q",
            "eventTimeEpoch": 1693447804010,
            "eventTime": "2023-08-31T02:10:04Z",
            "pcName": "DESKTOP-VELG4SR",
            "macAddress": "xx:xx:xx:xx:xx:xx",
            "domain": "NA",
            "harddiskId": "NA",
            "destinationIpPort": "443",
            "destinationIpDomain": "zoomsyt50mmr.sy.zoom.us",
            "dataCenter": "SY (Top)",
            "networkType": "others",
            "location": "Brisbane(AU)",
            "microphone": "Microphone (Realtek(R) Audio)",
            "signalingInternalIpAddress": "xxx.xx.xx.xx",
            "version": "5.15.7.20303",
            "device": "Windows",
            "signalingInternalIpPort": "51758",
            "asInternalIpAddress": "xxx.xx.xx.xx",
            "asInternalIpPort": "62528",
            "speaker": "Speakers (Realtek(R) Audio)",
            "videoInternalIpAddress": "xxx.xx.xx.xx",
            "videoInternalIpPort": "62523",
            "audioInternalIpPort": "62525",
            "audioInternalIpAddress": "xxx.xx.xx.xx",
            "camera": null,
            "tenantId": "1359465673",
            "subTenantId": "1359465673",
            "tenantServiceGroup": "1359465673:1359465673",
            "agentUuid": "dbf9a4d0-1ac5-436c-91a2-c44a8cdbe8f6",
            "score": 100
    },
    {
            "meetingUuid": "bda1594d8f4a40ea88cf6e6c28142378",
            "email": "xxxxx@xxxxxx.com",
            "recordId": "35991287-0dcd-40d3-a8de-abb34ca656e3",
            "accountId": "Oc9Dz_jJTPiiczkAOkA_RQ",
            "duration": 0,
            "startTime": "2023-09-04T06:00:14Z",
            "timezone": "Australia/Sydney",
            "topic": null,
            "meetingId": "81505431105",
            "userId": "16778240",
            "userName": "xxxxxx@xxxxxx.com",
            "joinTime": "2023-09-04T05:59:11Z",
            "leaveTime": "2023-09-04T06:37:30Z",
            "actualDuration": 2299,
            "meetingHostId": "d6CeI4iER_qzaSNgnzVf6Q",
            "eventTimeEpoch": 1693809515656,
            "eventTime": "2023-09-04T06:38:35Z",
            "pcName": "DESKTOP-VELG4SR",
            "macAddress": "xx:xx:xx:xx:xx:xx",
            "domain": "NA",
            "harddiskId": "NA",
            "destinationIpPort": "443",
            "destinationIpDomain": "zoommeltd100mmr.mel.zoom.us",
            "dataCenter": "MEL (Top)",
            "networkType": "others",
            "location": null,
            "microphone": "Microphone (Realtek(R) Audio)",
            "signalingInternalIpAddress": "xxx.xx.xx.xx",
            "version": "5.15.7.20303",
            "device": "Windows",
            "signalingInternalIpPort": "56024",
            "asInternalIpAddress": "xxx.xx.xx.xx",
            "asInternalIpPort": "56141",
            "speaker": "Speakers (Realtek(R) Audio)",
            "videoInternalIpAddress": "xxx.xx.xx.xx",
            "videoInternalIpPort": "56136",
            "audioInternalIpPort": "56139",
            "audioInternalIpAddress": "xxx.xx.xx.xx",
            "camera": null,
            "tenantId": "1359465673",
            "subTenantId": "1359465673",
            "tenantServiceGroup": "1359465673:1359465673",
            "agentUuid": "dbf9a4d0-1ac5-436c-91a2-c44a8cdbe8f6",
            "score": 40
        },…..
    ]
```
