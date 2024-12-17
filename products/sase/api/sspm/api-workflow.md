---
id: api-workflow
title: SaaS Security Posture Management APIs
sidebar_label: ecurity Posture Management APIs
keywords:
  - SASE
  - Reference
  - API
---

# API Workflow for SaaS Security Posture Management (SSPM)

Use this guide to interact with SSPM APIs to manage onboarded SaaS applications, retrieve configuration details, and handle integrations efficiently.

---

## Workflow Steps

### 1. Retrieve the List of Onboarded Apps
Use the `/sspm/api/v1/apps` API to fetch all onboarded SaaS applications. Each application includes an `app_id`, which you will use in subsequent API calls. For more information on how to onboard SaaS applications, read the [SaaS Onboarding guide](https://docs.paloaltonetworks.com/saas-security/saas-security-admin/saas-security-sspm/onboard-saas-apps-supported-by-sspm/onboarding-overview-for-supported-saas-apps).

---

### 2. Fetch Details for an Onboarded App
Use the `app_id` from the previous step to access detailed information about a specific onboarded app:
- Use `/sspm/api/v1/apps/{app_id}` to fetch the application's basic details.
- Use `/sspm/api/v1/apps/{app_id}/configs` to retrieve the app's configuration details.
- Use `/sspm/api/v1/apps/{app_id}/settings` to access specific app settings.

---

### 3. Retrieve the Catalog of Supported SSPM Apps
Call the `/sspm/api/v1/catalog/apps` API to get a catalog of all supported SSPM apps. Each catalog entry includes an app name, which you will use in subsequent API calls.

---

### 4. Fetch details for a Catalog App
Use the app name from the catalog to retrieve additional details about a specific app:
- Use `/sspm/api/v1/catalog/apps/{app}` to get general information about the app.
- Use `/sspm/api/v1/catalog/apps/{app}/configs` to fetch configuration details.
- Use `/sspm/api/v1/catalog/apps/{app}/scopes` to access scope information for the app.
- Use `/sspm/api/v1/auth/{app}/info` to retrieve authentication details.

---

### 5. Retrieve Common Control Details
Find the `common_control` or `common_control_id` values in the responses of the following APIs:
- `/sspm/api/v1/apps/{app_id}/configs`
- `/sspm/api/v1/catalog/apps/{app}/configs`

Use the `/sspm/api/v1/catalog/controls/{common_control_id}` API to retrieve detailed information about the common control.

---

### 6. Retrieve Integration Projects
Call `/sspm/api/v1/integration/integrations/{integration_id}/{integrationType}/projects` to get a list of integration projects for a specific `integration_id`. The response includes project keys for further actions.

---

### 7. Fetch Details for a Specific Project
Use `/sspm/api/v1/integration/integrations/{integration_id}/{integrationType}/project/{key}` to retrieve detailed information about a project. The response includes issue keys that you can use in the next step.

---

### 8. Fetch Details for a Specific Issue
Call `/sspm/api/v1/integration/integrations/{integration_id}/{integrationType}/issue/{key}` to retrieve detailed information about a specific issue using the issue key.

---

## Summary
This workflow provides a structured way to:
- Retrieve onboarded and cataloged apps.
- Access detailed app configurations and settings.
- Manage common controls for enhanced security.
- Handle integration projects and resolve issues.