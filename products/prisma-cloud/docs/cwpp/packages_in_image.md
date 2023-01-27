---
id: list-vulnerable-package
title: List vulnerable package names in an image
sidebar_position: 3
---

This guide shows how to retrieve a list of packages in a particular image.

First of all, obtain an authorization token by [Authenticating a user](/cwpp/api/post-authenticate/) ![alt text](/icons/api-icon-pan-dev.svg)

:::info

- The token is only valid for 30 minutes.

:::

Start by [Get Image Scan Results](/cwpp/api/get-images/) ![alt text](/icons/api-icon-pan-dev.svg):

```console
curl -sSL --header "authorization: Bearer access_token" \
  -H 'Content-Type: application/json' \
  -X GET \
  "https://<CONSOLE>/api/v<VERSION>/images"
```

Let's say, you're interested in viewing contents for _sha256:abd4f451ddb707c8e68a36d695456a515cdd6f9581b7a8348a380030a6fd7689_:

```json
...
    [
  {
    "_id": "sha256:abd4f451ddb707c8e68a36d695456a515cdd6f9581b7a8348a380030a6fd7689",
    "type": "image",
    "hostname": "",
    "scanTime": "2023-01-12T11:42:57.349Z",
    "binaries": [
      {
        "name": "bash",
        "path": "/opt/bash/bin/bash",
        "md5": "3fb95c7348791e4b4ff70e17367c9d22",
        "cveCount": 0,
        "missingPkg": true
      },
      ...
  }
  ...
    ]
```

Pick an image id name **sha256:abd4f451ddb707c8e68a36d695456a515cdd6f9581b7a8348a380030a6fd7689** from the returned array, use this as `id` and pass it as a query parameter along with **layers** set to _true_ to [Download Image Scan Results](/cwpp/api/get-images-download/) ![alt text](/icons/api-icon-pan-dev.svg):

```
curl -sSL --header "authorization: Bearer access_token" \
-H 'Content-Type: application/json' \
  -X GET \
  "https://<CONSOLE>/api/v<VERSION>/images/download?id=sha256:abd4f451ddb707c8e68a36d695456a515cdd6f9581b7a8348a380030a6fd7689&layers=true"
```

This will generate a CSV file that lists all vulnerable packages in a given image, organized by layer, with both the affected and fixed versions.
