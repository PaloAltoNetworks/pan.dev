---
id: config-file-upload-introduction
title: Config File Upload API
sidebar_label: Introduction
sidebar_position: 0
keywords:
  - Strata Cloud Manager
  - Posture
  - Best Practice Assessment
  - BPA
  - Config Upload
  - API
---

# Config File Upload API

The Config File Upload API lets you programmatically submit Panorama or NGFW configuration files for a Best Practice Assessment (BPA). Use this API to integrate security assessments into your CI/CD pipelines, automated compliance workflows, or custom dashboards — without requiring manual uploads through the Strata Cloud Manager UI.

## How It Works

The upload process follows a two-step flow:

1. **Initiate the upload.** Send a `POST` request with your device metadata to receive a tracking ID and a time-limited presigned Google Cloud Storage (GCS) URL.
2. **Upload your config file.** Send a `PUT` request directly to the presigned URL with your compressed configuration file. You don't need to send another API call to SCM — the file goes straight to the storage backend.

Once the upload completes, the BPA engine processes the configuration asynchronously and produces a structured JSON assessment against Palo Alto Networks best practices.

## Use Cases

- **Automate security audits.** Trigger assessments as part of change management workflows whenever a configuration is modified.
- **Integrate with SIEMs and dashboards.** Pull BPA results into Splunk, Elastic, or a custom portal to surface risk findings to your security operations team.
- **Enable multi-device reporting.** Programmatically submit configurations from multiple devices and correlate results across your fleet.
- **Track posture over time.** Archive BPA results and poll for status changes to build a historical record of security improvements.

## Workflow

```
POST /reports/config-file-upload
  └─► Receive { tracking_id, upload_url }

PUT <upload_url>
  └─► Upload gzip-compressed config XML

GET /reports/{id}/bpa-result
  └─► Poll until status = COMPLETED
  └─► Retrieve structured JSON assessment
```

## Prerequisites

- An active Strata Cloud Manager tenant.
- A Bearer JWT access token obtained through the SCM OAuth2 flow.
- A valid Panorama or NGFW configuration file in XML format, compressed with gzip.

## What to Expect in the Response

After processing completes, the BPA result contains findings organized by security category (e.g., Security Profiles, URL Filtering, DNS Security). Each finding includes a verdict, a severity level, and a recommendation. You can use these results to prioritize remediation tasks or feed them into ticketing systems.

:::tip
Poll `GET /reports/{id}/bpa-result` at a reasonable interval (for example, every 30 seconds). The status field moves through `QUEUED` → `IN_PROGRESS` → `COMPLETED` (or `FAILED`). Avoid polling more frequently than every 10 seconds to prevent rate limiting.
:::

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/reports/config-file-upload` | Initiate a config upload and receive a presigned URL |
| `GET` | `/reports/{id}/bpa-result` | Poll for BPA processing status and retrieve results |
