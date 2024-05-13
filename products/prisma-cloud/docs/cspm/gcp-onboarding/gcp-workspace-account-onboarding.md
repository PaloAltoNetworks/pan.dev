---
id: gcp-workspace-account-onboarding
title: Onboard GCP Workspace Account 
sidebar_position: 3
---

Onboard your Google Workspace account to Prisma Cloud to monitor your users, groups, and group memberships.

If you use Workspace as an IdP for your user and group management and you want visibility and security of those accounts, onboard the Workspace accounts to Prisma Cloud. After completing onboarding, you can configure alert rules on Workspace related MFA policies (identifying Workspace users that have MFA enabled or disabled).

> **Prerequisite**: 
> - Obtain a [Prisma Cloud API authorization token](/prisma-cloud/api/cspm/app-login/) ![alt text](/icons/api-icon-pan-dev.svg), which will be used in all the APIs. 

:::info

- The token is valid for only 10 minutes. If your session extends beyond that limit, [refresh the session](/prisma-cloud/api/cspm/extend-session/) ![alt text](/icons/api-icon-pan-dev.svg).
- Replace the generic `api.prismacloud.io` base URL used in the example APIs with your URL.

:::

To onboard GCP Accounts, such as GCP Project, GCP Organization, or Master Service Account:

  [1. Fetch the supported features based on the cloud type and account type.](#1-fetch-the-supported-features)

  [2. Configure your workspace account.](#2-configure-your-workspace-account)
  
  [3. Add your GCP Account to Prisma Cloud.](#3-add-the-gcp-workspace-to-prisma-cloud)

  ## 1. Fetch the Supported Features

Get the list of supported features based on the cloud type, account type, and deployment type by using the [Fetch Supported Features API](/prisma-cloud/api/cspm/fetch-supported-features/) ![alt text](/icons/api-icon-pan-dev.svg). The `supportedFeatures` parameter in the response body contains the list of supported features.

> **NOTE:** By default, the supported features list contains **Cloud Visibility Compliance and Governance**. Do not include it as a feature in the supported feature request body parameter of any cloud APIs, such as Add GCP Cloud Account, Update GCP Cloud Account, GCP Template Generation and so on.

**Sample Request and Response for GCP Workspace**  

<details>
  <summary>Sample Request</summary>

   ```bash
        curl --request POST 'https://api.prismacloud.io/cas/v1/features/cloud/gcp' \
        --header 'accept: application/json' \
        --header 'content-type: application/json' \
        --header 'x-redlock-auth: <YOUR_TOKEN>' \
        --data-raw '{
        "accountType": "workspaceDomain"
        }'

```
  </details>

<details>
  <summary> Sample Response </summary>

  ```json
    {
    "cloudType": "gcp",
    "deploymentType": "global",
    "accountType": "workspaceDomain",
    "licenseType": "ENTERPRISE",
    "supportedFeatures": [
        "Cloud Visibility Compliance and Governance"
    ]
    }
 
  ```
  </details>

  ## 2. Configure Your Workspace Account

  You must configure a workspace account and connect the workspace account to Prisma Cloud. To configure your workspace account, see STEP 1: Configure your Workspace Account in [Onboard Your Google Workspace](https://docs.prismacloud.io/en/enterprise-edition/content-collections/connect/connect-cloud-accounts/onboard-gcp/onboard-gcp-workspace).

 ## 3. Add the GCP Workspace to Prisma Cloud 

 Add GCP Account by using [Add GCP Account API](/prisma-cloud/api/cspm/add-gcp-cloud-account/) ![alt text](/icons/api-icon-pan-dev.svg). Use the credentials, features, and states obtained in the previous steps in the request payload.

 > **Note:** By default, the supported features list will contain **Cloud Visibility Compliance and Governance**. Do not include it as a feature in the supported feature request body parameter. An empty features list indicates that the default capabilities under **Cloud Visibility Compliance and Governance** are enabled.

 <details>
<summary>Sample Request for GCP Workspace</summary> 

```bash
    curl -v --request POST 'https://api.prismacloud.io/cas/v1/gcp_account' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'x-redlock-auth: <YOUR_TOKEN>' \
    --data-raw '{
         "cloudAccount": {
            "accountId": "<domain_name>",
            "accountType": "workspace_domain",
            "enabled": true,
            "name": "<account-name-to-be-onboarded>",
            "groupIds": [<List of account groups>]
        },
         "credentials": {
            <content-of-the-json-file-from-step-2>  
        },
        "features": []
        }'
```
</details>

<details>
  <summary> Sample Response </summary>

```
  200 (Success)
```
</details>

Verify that the GCP cloud account is onboarded successfully either by using the [List Cloud Account API](/prisma-cloud/api/cspm/get-cloud-accounts/) or by navigating to **Cloud Accounts** in the Prisma Cloud UI.