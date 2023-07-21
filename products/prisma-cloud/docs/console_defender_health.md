---
id: howto-defender-health
title: How To Determine Defender's Health Status?
sidebar_position: 1
---

Prisma Cloud Defender is important and quintessential for the well being of Prisma Cloud. 
It is imperative that Defender's health status is tracked and monitored regularly.
This ensures that the Prisma Cloud Compute is configured and running properly and is able to detect vulnerabilities.

This guide shows how to check the health status of Prisma Cloud Defender. 


# Prerequisite

First of all, obtain an authorization token by [Authenticating a user](/prisma-cloud/api/cwpp/post-authenticate/) ![alt text](/icons/api-icon-pan-dev.svg)

:::info

- The token is only valid for 30 minutes.

:::

(Optional) Check the Prisma Cloud Compute Console.

Use the [GET, _Ping](prisma-cloud/api/cwpp/get-ping/) ![alt text](/icons/api-icon-pan-dev.svg) to get the status if it's alive:

```bash
curl -sSL --header "authorization: Bearer access_token" \
  -H 'Content-Type: application/json' \
  -so /dev/null -w "%{http_code}\n" \
  -X GET \
  "https://<CONSOLE>/api/v<VERSION>/_ping"
```

**Response**

If you get the `200: OK` response as below, it means the Prisma Cloud Compute is alive and running:

```json
    [
        { 
            "200": "OK"
        }
    ]
```

## Defender Health Parameters

 The health parameters in the API endpoint [GET, Deployed Defenders](/compute/api/get-defenders/) ![alt text](/icons/api-icon-pan-dev.svg) response are a good indicator for a Defender's overall health.

You can scope your cURL request based on the query parameters available in the API endpoint.

The following query parameters are useful depending upon the use-case of a Defender:
- connected
- latest
- role
- type
- cluster
- accountID
- provider
- tasClusterIDs
- tasBlobstoreScanner
- tasFoundations
- usingOldCA
- usingExpiredCA
- isARM64
- isVPCObserver

Refer to the `status` object in the response parameters to verify the current health status of a Defender:

    appFirewall object
    FeatureStatus holds data about defender features

        enabled boolean
I       ndicates if the feature is enabled (true) or not (false).

        err string
        Error string, if an error occurred.

        hostname string
        Name of host where Defender runs.

    container object
    ScanStatus represents the status of current scan

        completed boolean
        Indicates if scanning has successfully completed (true) or not (false).

        errors string[]
        List of errors that occurred during the last scan.

        hostname string
        Name of the host where Defender runs.

        scanTime date-time
        Datetime of the last completed scan.

        scanning boolean
        Indicates whether scanning is in progress (true) or not (false).

        selective boolean
        Indicates if the scan is for a specific resource (true) or not (false).

    containerNetworkFirewall object
    FeatureStatus holds data about defender features

        enabled boolean
        Indicates if the feature is enabled (true) or not (false).

        err string
        Error string, if an error occurred.

        hostname string
        Name of host where Defender runs.

    features object
    FeatureStatus holds data about defender features

        enabled boolean
        Indicates if the feature is enabled (true) or not (false).

        err string
        Error string, if an error occurred.

        hostname string
        Name of host where Defender runs.

    filesystem object
    FeatureStatus holds data about defender features

        enabled boolean
        Indicates if the feature is enabled (true) or not (false).

        err string
        Error string, if an error occurred.

        hostname string
        Name of host where Defender runs.

    hostCustomCompliance object
    FeatureStatus holds data about defender features

        enabled boolean
        Indicates if the feature is enabled (true) or not (false).

        err string
        Error string, if an error occurred.

        hostname string
        Name of host where Defender runs.

    hostNetworkFirewall object
    FeatureStatus holds data about defender features

        enabled boolean
        Indicates if the feature is enabled (true) or not (false).

        err string
        Error string, if an error occurred.

        hostname string
        Name of host where Defender runs.

    image object
    ScanStatus represents the status of current scan

        completed boolean
        Indicates if scanning has successfully completed (true) or not (false).

        errors string[]
        List of errors that occurred during the last scan.

        hostname string
        Name of the host where Defender runs.

        scanTime date-time
        Datetime of the last completed scan.

        scanning boolean
        Indicates whether scanning is in progress (true) or not (false).

        selective boolean
        Indicates if the scan is for a specific resource (true) or not (false).

        lastModified date-time
        Datetime the status was last modified.

    network object
    FeatureStatus holds data about defender features

        enabled boolean
        Indicates if the feature is enabled (true) or not (false).

        err string
        Error string, if an error occurred.

        hostname string
        Name of host where Defender runs.

    outOfBandAppFirewall object
    FeatureStatus holds data about defender features

        enabled boolean
        Indicates if the feature is enabled (true) or not (false).

        err string
        Error string, if an error occurred.

        hostname string
        Name of host where Defender runs.

    process object
    FeatureStatus holds data about defender features

        enabled boolean
        Indicates if the feature is enabled (true) or not (false).

        err string
        Error string, if an error occurred.

        hostname string
        Name of host where Defender runs.

    runc object
    FeatureStatus holds data about defender features

        enabled boolean
        Indicates if the feature is enabled (true) or not (false).

        err string
        Error string, if an error occurred.

        hostname string
        Name of host where Defender runs.

    runtime object
    FeatureStatus holds data about defender features

        enabled boolean
        Indicates if the feature is enabled (true) or not (false).

        err string
        Error string, if an error occurred.

        hostname string
        Name of host where Defender runs.

    tasDroplets object
    ScanStatus represents the status of current scan

        completed boolean
        Indicates if scanning has successfully completed (true) or not (false).

        errors string[]
        List of errors that occurred during the last scan.

        hostname string
        Name of the host where Defender runs.

        scanTime date-time
        Datetime of the last completed scan.

        scanning boolean
        Indicates whether scanning is in progress (true) or not (false).

        selective boolean
        Indicates if the scan is for a specific resource (true) or not (false).

    upgrade object
    UpgradeStatus represents the status of current twistlock defender upgrade

        err string
        Error string, if an error occurred.

        hostname string
        Name of the host where Defender runs.

        lastModified date-time
        Datetime of the last upgrade.

        progress integer
        Upgrade progress.

## Check Defender Status

It's fairly easy to check the status of the deployed Defenders if you know which parameters you need to look for.

Use the [GET, Deployed Defenders](/prisma-cloud/api/cwpp/get-defenders/) ![alt text](/icons/api-icon-pan-dev.svg) to get the status:

```bash
$ curl -k \
  -u <USER> \
  -H 'Content-Type: application/json' \
  -X GET \
  https://<CONSOLE>/api/v<VERSION>/defenders
```
**Response**

```bash
{
    "hostname": "node-test-com",
    "version": "22.12.415",
    "lastModified": "2023-02-18T03:25:50.854Z",
    "type": "daemonset",
    "category": "container",
    "connected": true,
    "features": {
        "proxyListenerType": "none",
        "clusterMonitoring": true
    },
    "status": {
        "lastModified": "0001-01-01T00:00:00Z",
            "filesystem": {
                "enabled": true
            },
    "network": {
        "enabled": true
    },
    "process": {
        "enabled": true
    },
    "runtime": {
        "enabled": true
    },
    "appFirewall": {
        "enabled": true
    },
    "outOfBandAppFirewall": {
        "enabled": true
    },
    "containerNetworkFirewall": {
        "enabled": true
    },
    "hostNetworkFirewall": {
        "enabled": true
    },
    "image": {
        "scanTime": "2023-02-18T03:26:18.451Z",
        "completed": true
    },
    "container": {
        "scanTime": "2023-02-18T03:26:05.362Z",
        "completed": true
    },
    "features": {},
    "hostCustomCompliance": {
        "enabled": true
    }
},
"fqdn": "node-test-com.c.cto-sandbox.internal",
    "collections": [
        "All",
        "K8s-Cluster"
    ],
"cloudMetadata": {
    "resourceID": "3802527763726704280",
    "provider": "gcp",
    "name": "node-test-com",
    "region": "us-central1-a",
    "accountID": "cto-sandbox",
    "image": "demo-build"
},
"clusterID": "ff8b6e95-0e82-1b0c-728b-ebd765237aec",
"cluster": "demo-build",
"tasBlobstoreScanner": false,
"certificateExpiration": "2026-01-23T18:21:00Z",
"systemInfo": {
    "cpuCount": 2,
    "kernelVersion": "4.15.0-1049-gcp",
    "totalDiskSpaceGB": 9,
    "freeDiskSpaceGB": 2,
    "memoryGB": 7.297939300537109
},
"remoteMgmtSupported": false,
"remoteLoggingSupported": true,
"firewallProtection": {
    "enabled": false,
    "supported": false,
    "outOfBandMode": ""
},
"proxy": {
    "httpProxy": "",
    "noProxy": "",
    "ca": "",
    "user": "",
    "password": {
    "encrypted": ""
    }
},
"port": 8084,
"compatibleVersion": true,
"usingOldCA": false,
"isARM64": false
}
```
The above sample JSON response displays the information about the deployed Defenders.

> **Note:** In case, Defender is unable to connect to Prisma Cloud Compute, you must check the logs to understand what went wrong. 
