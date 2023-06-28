---
id: view-registry-scan
title: View Registry Scan Progress
sidebar_position: 7
---

This guide shows how to initiate a registry scan and then view its progress.

1. Obtain an authorization token by [Authenticating a user](/prisma-cloud/api/cwpp/post-authenticate/) ![alt text](/icons/api-icon-pan-dev.svg)

:::info

- The token is only valid for 30 minutes.

:::

## View On-demand Registry Scan Progress

2. Start the on-demand registry scan by adding the required request parameters in [POST, registry scan](/prisma-cloud/api/cwpp/post-registry-scan/) ![alt text](/icons/api-icon-pan-dev.svg):

```bash
curl -sSL --header "authorization: Bearer access_token" \
  -H 'Content-Type: application/json' \
  -X POST \
 -d '{“onDemandScan”:true,“tag”:{“repo”:“library/alpine”,“tag” :“3.16”}}' \
 "https://<CONSOLE>/api/v<VERSION>/registry/scan"
```

3. View the on-demand registry scan progress by using the same request parameters in [GET, registry scan progress](/prisma-cloud/api/cwpp/get-registry-progress/) ![alt text](/icons/api-icon-pan-dev.svg).

**cURL Request**:

```bash
curl -sSL --header "authorization: Bearer access_token" \
  -H 'Content-Type: application/json' \
  -X GET \
  "https://<CONSOLE>/api/v<VERSION>/registry/progress?onDemand=true&repo=library/alpine&tag=3.16"
```

**cURL Response**:

```bash
[
  {
        "discovery": {
            "hostname": "",
            "id": "",
            "scanTime": "0001-01-01T00:00:00Z",
            "type": "",
            "discovery": false,
            "total": 1,
            "scanned": 1,
            "title": "Step 1/2 discovering tags in repository: library/alpine, tag: 3.16"
        },
        "imageScan": {
            "hostname": "",
            "id": "",
            "scanTime": "0001-01-01T00:00:00Z",
            "type": "",
            "discovery": false,
            "total": 1,
            "scanned": 1,
            "title": "Step 2/2 scanning images in repository: library/alpine, tag: 3.16"
        },
        "isScanOngoing": false
    }
]
```

## View Regular Registry Scan Progress

2. Start the regular registry scan with [POST, registry scan](/prisma-cloud/api/cwpp/post-registry-scan/) ![alt text](/icons/api-icon-pan-dev.svg):

```bash
curl -sSL --header "authorization: Bearer access_token" \
  -H 'Content-Type: application/json' \
  -X POST \
 "https://<CONSOLE>/api/v<VERSION>/registry/scan"
```

3. View the regular registry scan progress by using the [GET, registry scan progress](/prisma-cloud/api/cwpp/get-registry-progress/) ![alt text](/icons/api-icon-pan-dev.svg).

**cURL Request**:

```bash
curl -sSL --header "authorization: Bearer access_token" \
  -H 'Content-Type: application/json' \
  -X GET \
  "https://<CONSOLE>/api/v<VERSION>/registry/progress"
```

**cURL Response**:

```bash
[
    {
        "discovery": {
            "hostname": "",
            "id": "",
            "scanTime": "0001-01-01T00:00:00Z",
            "type": "",
            "discovery": false,
            "total": 4,
            "scanned": 2,
            "title": "Step 1/2 discovering tags in registry us-west2-docker.pkg.dev: Discovered tags in 2/4 repositories with 1 Defenders"
        },
        "imageScan": {
            "hostname": "",
            "id": "",
            "scanTime": "0001-01-01T00:00:00Z",
            "type": "",
            "discovery": false,
            "total": 2,
            "scanned": 0,
            "title": "Step 2/2 scanning images in registry us-west2-docker.pkg.dev: Scanned 0/2 images with 1 Defender"
        },
        "isScanOngoing": true
    }
]
```
