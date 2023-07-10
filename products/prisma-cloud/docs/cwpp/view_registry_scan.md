---
id: vuln-registry-scan
title: Get Vulnerability Report for a Registry Scan
sidebar_position: 7
---

Prisma Cloud scans container images in public and private repositories stored on public and private registries.

A registry is a system that stores and distributes container images.

You can configure the following registries:

* Amazon EC2 Container Registry: `aws`
* Azure Container Registry: `azure`
* CoreOS Quay: `coreos`
* Docker Registry v2: `2`
* Docker Trusted Registry: `dtr`
* Google Container Registry: `gcr`
* GitLab Container Registry: `gitlab`
* IBM Cloud Container Registry: `bluemix`
* JFrog Artifactory: `jfrog`
* Red Hat OpenShift: `redhat`
* Sonatype Nexus: `sonatype`

> **Note:** For the latest list of supported registries, see [Add Registry Settings](/prisma-cloud/api/cwpp/post-settings-registry/).

After you configure, Prisma Cloud automatically scans images for vulnerabilities in the following steps:

1. Scans the configured registry settings one by one in a sequential order.
2. Discovers the repositories based on the registry configuration.
3. Discovers the images using tags within each configured repository.
4. Scans the discovered images.

This guide shows how to get vulnerability report for container images stored in different registries. For more information about registry scan, see [Configure Registry Scan](https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin-compute/vulnerability_management/registry_scanning/configure_registry_scanning).


***Prerequisite***:

* Make sure that you have deployed a Defender. For more details, see the [Deploying Defender](/prisma-cloud/docs/cwpp/deploy-defenders/) worlflow.

* Obtain an authorization token by [Authenticating a user](/prisma-cloud/api/cwpp/post-authenticate/) ![alt text](/icons/api-icon-pan-dev.svg)

  :::info

  - The token is only valid for 30 minutes.

  :::

**Follow these steps:**
1. [Set Up and Add Registry Settings](#set-up-and-add-registry-settings)
2. [Initiate Registry Scan](#initiate-registry-scan)
3. [View Registry Scan Progress](#view-registry-scan-progress)
4. [Check Scan Status (Available only for Regular or Periodic Scans)](#check-regular-or-periodic-scan-status)
5. [Retrieve Scan Reports](#retrieve-the-registry-scan-reports)

## Set Up and Add Registry Settings

Add the registry entries to set up the scan by using the [POST, registry settings](/prisma-cloud/api/cwpp/post-settings-registry/) ![alt text](/icons/api-icon-pan-dev.svg):

**cURL Request**
  ```bash
  curl -k \
    -u <USER> \
    -H 'Content-Type: application/json' \
    -X POST \
    -d '
    {
      "version": "2",
      "registry": "",
      "repository": "library/ubuntu",
      "tag": "16.04",
      "os": "linux",
      "cap": 5,
      "hostname": "",
      "scanners": 2,
      "collections": ["All"]
    } ' \
    'https://<CONSOLE>/api/v<VERSION>/settings/registry'
  ```

> **Note:** You can view the settings by using [GET, registry settings](/prisma-cloud/api/cwpp/get-settings-registry/) ![alt text](/icons/api-icon-pan-dev.svg) and update by using [PUT, registry settings](prisma-cloud/api/cwpp/put-settings-registry/) ![alt text](/icons/api-icon-pan-dev.svg) if needed.

## Initiate Registry Scan

Start the on-demand registry scan by adding the required request parameters in [POST, registry scan](/prisma-cloud/api/cwpp/post-registry-scan/) ![alt text](/icons/api-icon-pan-dev.svg):

**cURL Request**
  ```bash
  curl -sSL --header "authorization: Bearer access_token" \
    -H 'Content-Type: application/json' \
    -X POST \
  -d '{“onDemandScan”:true,“tag”:{“repo”:“library/alpine”,“tag” :“3.16”}}' \
  "https://<CONSOLE>/api/v<VERSION>/registry/scan"
  ```
> **Note:** You can initiate a regular or periodic scan with the same API by not using the `onDemandScan` parameter or setting it up to `false` in the request body. 


## View Registry Scan Progress

View the on-demand registry scan progress by using the same request parameters in [GET, registry scan progress](/prisma-cloud/api/cwpp/get-registry-progress/) ![alt text](/icons/api-icon-pan-dev.svg).

**cURL Request**
  ```bash
  curl -sSL --header "authorization: Bearer access_token" \
    -H 'Content-Type: application/json' \
    -X GET \
    "https://<CONSOLE>/api/v<VERSION>/registry/progress?onDemand=true&repo=library/alpine&tag=3.16"
  ```

**Response**
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
> **Note:** You can view the progress of a regular or periodic registry scan without using the query parameters.

## Check Scan Status  

Check the status of a regular registry scan with [GET, registry status](/prisma-cloud/api/cwpp/get-statuses-registry/) ![alt text](/icons/api-icon-pan-dev.svg):

**cURL Request**
  ```bash
  curl -k \
    -u <USER> \
    -H 'Content-Type: application/json' \
    -X GET \
    https://<CONSOLE>/api/v<VERSION>/statuses/registry
  ```

**Response**
  ```bash
  {
  "scanTime": "2019-07-31T19:42:49.036311567Z",
  "completed": true
  }
  ```

> **Note:** You can also stop an ongoing registry scan with [POST, stop registry scan](/prisma-cloud/api/cwpp/post-registry-stop/) ![alt text](/icons/api-icon-pan-dev.svg) if needed.


## Retrieve the Registry Scan Reports

Retrieve the registry scan reports with [GET, download registry scan results](/prisma-cloud/api/cwpp/get-registry-download/) ![alt text](/icons/api-icon-pan-dev.svg).

**Response**
  ```bash
  curl -k \
    -u <USER> \
    -H 'Content-Type: application/json' \
    -X GET \
    "https://<CONSOLE>/api/v<VERSION>/registry/download" \
    > registry_report.csv
  ```

> **Note:** You can also view the registry scan report in JSON format with [GET, registry scan results](/prisma-cloud/api/cwpp/get-registry/) ![alt text](/icons/api-icon-pan-dev.svg).
