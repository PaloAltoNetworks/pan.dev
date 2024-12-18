---
id: sspm-api-workflow
title: API Workflow 
sidebar_label: SaaS Security Posture Management API workflow
keywords:
  - SASE
  - Reference
  - API
---
SSPM APIs enable you to manage onboarded SaaS applications, retrieve configuration details, and handle integrations efficiently.

## Summary
This guide provides a structured workflow to:
- Retrieve onboarded and cataloged applications.
- Access detailed app configurations and settings.
- Manage common controls for enhanced security.
- Handle integration projects and resolve issues.

### 1. Retrieve the List of Onboarded Applications
Use the [List of Applications](/sase/api/sspm/get-sspm-api-v-1-apps/) API to fetch all onboarded SaaS applications. Each application includes an `app_id`, which you will use in subsequent API calls. Refer to the [SaaS Onboarding Guide](https://docs.paloaltonetworks.com/saas-security/saas-security-admin/saas-security-sspm/onboard-saas-apps-supported-by-sspm/onboarding-overview-for-supported-saas-apps) for onboarding details.

#### Request Example
```bash
curl -L 'https://api.sase.paloaltonetworks.com/sspm/api/v1/apps' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>'
```

### 2. Fetch Details for an Onboarded Application
Use the `app_id` from the previous step to access detailed information about a specific onboarded application.

#### Fetch Basic Details
Use the [Application Details](/sase/api/sspm/get-sspm-api-v-1-apps-app-id/) API to retrieve the application's basic details.

#### Request Example
```bash
curl -L 'https://api.sase.paloaltonetworks.com/sspm/api/v1/apps/:app_id' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>'
```

#### Retrieve Configuration Details
Call [Application Configuration](/sase/api/sspm/get-sspm-api-v-1-apps-app-id-configs/) to fetch configuration details.

#### Request Example
```bash
curl -L 'https://api.sase.paloaltonetworks.com/sspm/api/v1/apps/:app_id/configs' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>'
```

#### Access Application Settings
Use the [Application Settings](/sase/api/sspm/get-sspm-api-v-1-apps-app-id-settings/) API to access specific settings.

#### Request Example
```bash
curl -L 'https://api.sase.paloaltonetworks.com/sspm/api/v1/apps/:app_id/settings' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>'
```

### 3. Retrieve the Catalog of Supported SSPM Applications
Use the [Supported SSPM Application Catalog](/sase/api/sspm/get-sspm-api-v-1-catalog-apps/) API to fetch a list of all supported applications. Each catalog entry includes an app name for further API calls.

#### Request Example
```bash
curl -L 'https://api.sase.paloaltonetworks.com/sspm/api/v1/catalog/apps' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>'
```

#### Fetch Catalog App Details
Retrieve detailed information about a specific app using the app name.

#### Request Example
```bash
curl -L 'https://api.sase.paloaltonetworks.com/sspm/api/v1/catalog/apps/:app' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>'
```

#### Fetch Configuration Details
Call the [Configuration Details](/sase/api/sspm/get-sspm-api-v-1-catalog-apps-app-configs/) API to retrieve configuration settings.

#### Request Example
```bash
curl -L 'https://api.sase.paloaltonetworks.com/sspm/api/v1/catalog/apps/:app/configs' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>'
```

#### Retrieve Scope Information
Use the [Application Catalog Scope](/sase/api/sspm/get-sspm-api-v-1-catalog-apps-app-scopes/) API to access scope details.

#### Request Example
```bash
curl -L 'https://api.sase.paloaltonetworks.com/sspm/api/v1/catalog/apps/:app/scopes' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>'
```

#### Fetch Authentication Details
Call [Application Authorization](/sase/api/sspm/get-sspm-api-v-1-auth-app-info/) to retrieve authentication details.

#### Request Example
```bash
curl -L 'https://api.sase.paloaltonetworks.com/sspm/api/v1/auth/:app/info' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>'
```

### 4. Retrieve Common Control Details
Find `common_control` or `common_control_id` values in the responses from:
- `/sspm/api/v1/apps/{app_id}/configs`
- `/sspm/api/v1/catalog/apps/{app}/configs`

Then, call the `/sspm/api/v1/catalog/controls/{common_control_id}` API to retrieve detailed information about the common control.

### 5. Retrieve Integration Projects
Call [JIRA Ticket Details](/sase/api/sspm/get-sspm-api-v-1-integration-integrations-integration-id-integration-type-projects/) to get a list of integration projects for a specific `integration_id`. The response includes project keys for further actions.

#### Request Example
```bash
curl -L 'https://api.sase.paloaltonetworks.com/sspm/api/v1/integration/integrations/:integration_id/:integration_type/projects' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>'
```

#### Fetch Specific Project Details
Use [Specific Project Details](/sase/api/sspm/get-sspm-api-v-1-integration-integrations-integration-id-integration-type-project-key/) to retrieve details about a project. The response includes issue keys for further steps.

#### Request Example
```bash
curl -L 'https://api.sase.paloaltonetworks.com/sspm/api/v1/integration/integrations/:integration_id/:integration_type/project/:key' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>'
```

### 6. Fetch Details for a Specific Issue
Call [Specific Issue Details](/sase/api/sspm/get-sspm-api-v-1-integration-integrations-integration-id-integration-type-issue-key/) to retrieve information about a specific issue using the issue key.

#### Request Example
```bash
curl -L 'https://api.sase.paloaltonetworks.com/sspm/api/v1/integration/integrations/:integration_id/:integration_type/issue/:key' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer <TOKEN>'