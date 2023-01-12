---
id: list-vulnerable-package
title: List vulnerable package names in an image
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
      {
        "name": "[",
        "path": "/usr/bin/[",
        "md5": "5ef2c8a4b7cd8a7e7436cabbed73ff70",
        "cveCount": 0
      },
      ...
    ],
    "osDistro": "redhat",
    "osDistroVersion": "7",
    "osDistroRelease": "RHEL7",
    "distro": "CentOS Linux release 7.4.1708 (Core)",
    "packages": [
      {
        "pkgsType": "package",
        "pkgs": [
          {
            "version": "1.6.12-17.el7",
            "name": "dbus-libs",
            "cveCount": 28,
            "license": "GPLv2+ or AFL",
            "layerTime": 1509562126
          }
          ...
          ],
    "files": [],
    "packageManager": true,
    "applications": [
      {
        "name": "node",
        "version": "0.10.41",
        "path": "/opt/nodejs/bin/node",
        "layerTime": 1509562557,
        "knownVulnerabilities": 102
      },
      {
        "name": "java",
        "version": "1.8.0_91",
        "path": "/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.91-0.b14.el7_2.x86_64/jre/bin/java",
        "layerTime": 1505313819,
        "knownVulnerabilities": 842
      }
    ],
    "rhelRepos": [
      "CentOS",
      "base",
      "updates"
    ],
    "isARM64": false,
    "image": {
      "entrypoint": [
        "/bin/sh",
        "-c",
        "echo 'Vulnerable image' && /bin/false"
      ],
      "created": "2017-11-01T18:58:26.736Z"
    },
    "history": [
      {
        "created": 1505313808,
        "instruction": "MAINTAINER The CentOS Project <cloud-ops@centos.org>",
        "id": "<missing>",
        "emptyLayer": true
      }
      ...
    {
        "tags": [
          "imiell/bad-dockerfile:latest",
          "test/test-image:0.1"
        ],
        "created": 1509562706,
        "instruction": "LABEL org.label-schema.name=bad-dockerfile org....",
        "id": "sha256:abd4f451ddb707c8e68a36d695456a515cdd6f9581b7a8348a380030a6fd7689",
        "emptyLayer": true
      }
    ]
    "id": "sha256:abd4f451ddb707c8e68a36d695456a515cdd6f9581b7a8348a380030a6fd7689",
    "complianceIssues": [
      {
        "text": "",
        "id": 41,
        "severity": "high",
        "cvss": 0,
        "status": "",
        "cve": "",
        "cause": "",
        "description": "It is a good practice to run the container as a non-root user, if possible. Though user\nnamespace mapping is now available, if a user is already defined in the container image, the\ncontainer is run as that user by default and specific user namespace remapping is not\nrequired",
        "title": "(CIS_Docker_v1.3.1 - 4.1) Image should be created with a non-root user",
        "vecStr": "",
        "exploit": "",
        "riskFactors": null,
        "link": "",
        "type": "image",
        "packageName": "",
        "packageVersion": "",
        "layerTime": 0,
        "templates": [
          "PCI",
          "DISA STIG"
        ],
        "twistlock": false,
        "cri": false,
        "published": 0,
        "fixDate": 0,
        "discovered": "0001-01-01T00:00:00Z",
        "functionLayer": ""
      }
    ],
    "allCompliance": {},
    "vulnerabilities": [
      {
        "text": "",
        "id": 49,
        "severity": "high",
        "cvss": 7,
        "status": "fixed in 1.4.4",
        "cve": "CVE-2015-8851",
        "cause": "",
        "description": "node-uuid before 1.4.4 uses insufficiently random data to create a GUID, which could make it easier for attackers to have unspecified impact via brute force guessing.",
        "title": "",
        "vecStr": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
        "exploit": "",
        "riskFactors": {
          "Has fix": {},
          "High severity": {}
        },
        "link": "https://nvd.nist.gov/vuln/detail/CVE-2015-8851",
        "type": "image",
        "packageName": "node-uuid",
        "packageVersion": "1.4.1",
        "layerTime": 1509562557,
        "templates": null,
        "twistlock": false,
        "cri": false,
        "published": 1580418900,
        "fixDate": 1587006890,
        "applicableRules": [
          "<1.4.4"
        ],
        "discovered": "2022-09-01T03:44:42Z",
        "functionLayer": ""
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
