---
id: console-defender-health
title: Check Health of Prisma Cloud Compute and Defender
sidebar_position: 8
---

This guide shows how to check the health or current status of Prisma Cloud Compute and Defender. 
This ensures that the Prisma Cloud Compute is running and is able to detect vulnerabilities.

# Prerequisite

First of all, obtain an authorization token by [Authenticating a user](/prisma-cloud/api/cwpp/post-authenticate/) ![alt text](/icons/api-icon-pan-dev.svg)

:::info

- The token is only valid for 30 minutes.

:::

## Check Prisma Cloud Compute

First step is to check the Prisma Cloud Compute Console.

Use the [GET, _Ping](prisma-cloud/api/cwpp/get-ping/) ![alt text](/icons/api-icon-pan-dev.svg) to get the status:

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

## Check Defender Status

The next step is to check the status of the deployed Defenders.

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
