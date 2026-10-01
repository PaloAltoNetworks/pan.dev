---
id: posture-check-apis-introduction
title: Posture Check APIs
sidebar_label: Introduction
sidebar_position: 0
keywords:
  - Strata Cloud Manager
  - Posture
  - Best Practice Assessment
  - BPA
  - Config Upload
  - Custom Posture Checks
  - API
---

# Posture Check APIs

The Posture Check APIs give you programmatic control over two complementary capabilities: uploading device configuration files for automated Best Practice Assessment (BPA), and managing custom posture checks that enforce your organization's specific security policies.

## Config File Upload

Use the Config File Upload endpoints to submit Panorama or NGFW configuration files for a BPA without using the Strata Cloud Manager UI. The upload follows a two-step flow:

1. **Initiate the upload.** Send a `POST` request with your device metadata to receive a tracking ID and a time-limited presigned Google Cloud Storage (GCS) URL.
2. **Upload your config file.** Send a `PUT` request directly to the presigned URL with your gzip-compressed XML configuration file.

After upload, the BPA engine processes the configuration asynchronously and returns a structured JSON assessment with findings organized by security category, each with a verdict, severity, and recommendation.

**Common use cases:**
- Trigger security assessments automatically as part of change management workflows.
- Feed BPA results into SIEMs, dashboards, or ticketing systems.
- Submit configurations from multiple devices and correlate results across your fleet.

:::tip
Poll `GET /reports/{id}/bpa-result` every 30 seconds until the status reaches `COMPLETED`. Avoid polling more frequently than every 10 seconds.
:::

## Custom Posture Checks

Use the Custom Posture Checks endpoints to define, manage, and report on security checks that go beyond Palo Alto Networks built-in best practices. Each check evaluates a specific aspect of your device or policy configuration against a condition you define, and returns a pass/fail verdict.

Custom checks support the full CRUD lifecycle, plus cloning and batch operations, so you can manage your check library from code and deploy changes through a CI/CD pipeline.

**Common use cases:**
- Enforce internal naming conventions, required security profile groups, or mandatory log forwarding settings.
- Clone a check to replicate a baseline across multiple tenants.
- Use Batch Upsert and Batch Delete to onboard or retire checks at scale.

:::note
Creating and modifying custom checks requires an **SCM Pro license**.
:::

## Authentication

All endpoints require a Bearer JWT access token obtained through the SCM OAuth2 flow:

```
Authorization: Bearer <access_token>
```

## Base URL

```
https://api.strata.paloaltonetworks.com/posture
```
