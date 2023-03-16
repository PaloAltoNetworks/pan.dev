---
id: aws-cloud-organization-onboarding
title: Automate AWS Cloud Organization Onboarding
---

To successfully onboard an AWS Organization in Prisma Cloud, create an IAM Roles in your AWS Organization account and member accounts that has a trusted relationship with Prisma Cloud AWS Account. Prisma Cloud uses IAM Role ARN to *AssumeRole* in to your AWS Organization and member accounts and ingest various configurations and logs.

> **Recommended**: Use *Terraform* to onboard AWS cloud accounts. Refer
[AWS organization](https://registry.terraform.io/providers/PaloAltoNetworks/prismacloud/latest/docs/resources/org_cloud_account_v2) onboarding guide.

To Onboard using other automation tools(such as python, etc), follow the steps listed below:


***Prerequisite***: Obtain an authorization token by [Logging In](/prisma-cloud/api/cspm/app-login/) ![alt text](/icons/api-icon-pan-dev.svg)

:::info

- The token is only valid for 10 minutes, so [refresh it](/prisma-cloud/api/cspm/extend-session/) ![alt text](/icons/api-icon-pan-dev.svg) as needed if you believe your workflow might take longer than that.

- The base url in this guide is a generic `api.prismacloud.io`. Replace it with yours accordingly.

:::

## The steps to Onboard AWS Organization
- [The steps to Onboard AWS Organization](#the-steps-to-onboard-aws-organization)
  - [1. Fetch *Supported Features* for cloud type and account type](#1-fetch-supported-features-for-cloud-type-and-account-type)
  - [2. Generate AWS *CFT* and create *IAM Role*](#2-generate-aws-cft-and-create-iam-role)
  - [3. Onboard your AWS Organization on to Prisma Cloud](#3-onboard-your-aws-organization-on-to-prisma-cloud)

![](/img/aws-cloud-account-onboarding-workflow-automation.png)

### 1. Fetch *Supported Features* for cloud type and account type

To get the list of supported features, call [Fetch Supported Features](/prisma-cloud/api/cspm/fetch-supported-features/) ![alt text](/icons/api-icon-pan-dev.svg) and refer to the `supportedFeatures` field in the response body.<br/>

> **NOTE:** The `supportedFeatures` contain "*Cloud Visibility Compliance and Governance*" feature string and Security capabilities under this feature are enabled by default. Hence, Do not include this string as a feature in the request body param in any cloud account API(Like in Add AWS Cloud Account, Update AWS Cloud Account,Generate and Download the AWS CFT Template, etc).

*Sample Request* to get features for accountType: organization on app stack: 

```bash
curl --request POST 'https://api.prismacloud.io/cas/v1/features/cloud/aws' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'x-redlock-auth: <YOUR_TOKEN>' \
--data-raw '{
   "accountType": "organization"
}'
```

*Sample Response*
```json
{
    "cloudType": "aws",
    "deploymentType": "global",
    "accountType": "organization",
    "licenseType": "ENTERPRISE",
    "supportedFeatures": [
        "Agentless Scanning",
        "Auto Protect",
        "Cloud Visibility Compliance and Governance",
        "Remediation",
        "Serverless Function Scanning"
    ]
}
```

### 2. Generate AWS *CFT* and create *IAM Role*
Generate *CFT* and *External ID* using Prisma Cloud *CFT Generation API* and create *IAM Role* using the generated CFT.

**2.1**. To generate the AWS CFT and External ID, call [Generate the AWS CFT Template Link](/prisma-cloud/api/cspm/generate-cft-template-link-aws/) ![alt text](/icons/api-icon-pan-dev.svg). The Generated CFT template will include Prisma Cloud generated externalId and the permissions based on selected features.<br /> 
The response contains `createStackLinkWithS3PresignedUrl` key whose value can be used to create IAM role via AWS CloudFormation stack.<br /> 

For example, to get CFT stack creation Quick create Stack link for accountType:organization, and required features selected from the supported features API:

*Sample Request*
```bash
curl --request POST 'https://api.prismacloud.io/cas/v1/aws_template/presigned_url' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'x-redlock-auth: <YOUR_TOKEN>' \
--data-raw '{
  "accountId": "<accountId>",
  "accountType": "organization",
  "features": [
      "Agentless Scanning",
      "Auto Protect",
      "Remediation",
      "Serverless Function Scanning"
  ]
}'
```

*Sample Response*
```json
{
    "createStackLinkWithS3PresignedUrl":
    "https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?stackName=PrismaCloudApp&templateURL=https%3A%2F%2Fonboarding-templates-app-s3.s3.amazonaws.com%2F806775452214917120%2F375187248419%2Fprisma-cloud-aws-iam-role-1268a9df-5f25-4585-be8c-3ebcc03b1d1d.template%3FX-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEOj%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLWVhc3QtMiJHMEUCIQC94GEu53jRfuZbrpIaWHTCofG27p2CGIE1ob0I0Us36AIgR0HNScAWkWTEQcChWWwEOO7%252BHLNaBC04UuD%252BFoaADqcqmgIIkv%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAFGgwxODg2MTk5NDI3OTIiDG%252FM2%252FpFS97HXwnx0yruAR1VhsSiWGMF8AhNHRUHjcVfpdwa%252B4bJnpD4kgyK2anzh9TRaJILcTF384mg%252FkO71PYQYrOHzw3%252FyqRUGLmJ715%252FU9Lz%252BPynFx%252B6lx23M1CIvroaIBDqr9BFlcefepluy6xiso7oDMI46n8LCUBXUq5NGAcY4heDAVYXvwD5KSMiBytK%252Bct8r4G7R2bxrBm30GAkMhvPjEyhstrSFxheQqe3ZS429LYqpWgOoHiOFonn28R4NkJLEg027gPxpTKsqqiGysTymaDs4hHe7tRAG55L2YPsShoMe2SaWfTehivX%252BWbHO1%252FfIazMS7NPtqAwr%252Fv9nwY6nQEWKSoO7JUCkXAKDTIYrKV%252Bl5WG9YP2HLaL62OvMhicZE5lWLDeYL4%252Bo6qgCoH%252FxrbHAsY4LEmFNgxm2I%252FlK7KF6ugEsPHf33XnYgcN0a4VG7POoPyfk0RbNy6j002Guikcg3wieuROfF4NpnwrjvYfhbB2VM95Vpd1lhPRiqIxMJXIPNHwMQUu9t4ro6W0cRQUQVf5xpUBV1JC8%252BV1%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20230301T163039Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D3597%26X-Amz-Credential%3DASIASX2U75OEE4QNMK7F%252F20230301%252Fus-east-2%252Fs3%252Faws4_request%26X-Amz-Signature%3D75b43898503df3d757e8512d90a58c6f1c6de00b209403aa21cd28704fed7dfe",
      "externalId": "302bf9ab-b110-4588-8c8f-3bea9051a4d3",
      "eventBridgeRuleNamePrefix":
    "prisma-cloud-eb-o-123456789012345678-*"
}
```

Extract the S3 Presigned CFT URL from the `createStackLinkWithS3PresignedUrl` key by splitting at *templateURL=* and decoding the last index value of the split (right side of the split). You can use the extracted decoded S3 CFT link to create or update the IAM role CloudFormation stack.

The extraction steps are shown below:<br /> 
**2.1.a**.  Split `createStackLinkWithS3PresignedUrl` at *templateURL=* and get the last index value of the split (i.e right side of the split) to get urlencoded link.<br/><br/>
    *Sample encoded S3 CFT URL*<br /> 

```
https%3A%2F%2Fonboarding-templates-app-s3.s3.amazonaws.com%2F806775452214917120%2F375187248419%2Fprisma-cloud-aws-iam-role-1268a9df-5f25-4585-be8c-3ebcc03b1d1d.template%3FX-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEOj%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLWVhc3QtMiJHMEUCIQC94GEu53jRfuZbrpIaWHTCofG27p2CGIE1ob0I0Us36AIgR0HNScAWkWTEQcChWWwEOO7%252BHLNaBC04UuD%252BFoaADqcqmgIIkv%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAFGgwxODg2MTk5NDI3OTIiDG%252FM2%252FpFS97HXwnx0yruAR1VhsSiWGMF8AhNHRUHjcVfpdwa%252B4bJnpD4kgyK2anzh9TRaJILcTF384mg%252FkO71PYQYrOHzw3%252FyqRUGLmJ715%252FU9Lz%252BPynFx%252B6lx23M1CIvroaIBDqr9BFlcefepluy6xiso7oDMI46n8LCUBXUq5NGAcY4heDAVYXvwD5KSMiBytK%252Bct8r4G7R2bxrBm30GAkMhvPjEyhstrSFxheQqe3ZS429LYqpWgOoHiOFonn28R4NkJLEg027gPxpTKsqqiGysTymaDs4hHe7tRAG55L2YPsShoMe2SaWfTehivX%252BWbHO1%252FfIazMS7NPtqAwr%252Fv9nwY6nQEWKSoO7JUCkXAKDTIYrKV%252Bl5WG9YP2HLaL62OvMhicZE5lWLDeYL4%252Bo6qgCoH%252FxrbHAsY4LEmFNgxm2I%252FlK7KF6ugEsPHf33XnYgcN0a4VG7POoPyfk0RbNy6j002Guikcg3wieuROfF4NpnwrjvYfhbB2VM95Vpd1lhPRiqIxMJXIPNHwMQUu9t4ro6W0cRQUQVf5xpUBV1JC8%252BV1%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20230301T163039Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D3597%26X-Amz-Credential%3DASIASX2U75OEE4QNMK7F%252F20230301%252Fus-east-2%252Fs3%252Faws4_request%26X-Amz-Signature%3D75b43898503df3d757e8512d90a58c6f1c6de00b209403aa21cd28704fed7dfe
```

**2.1.b**. *urldecode* the above link to get S3 link for AWS CFT <br/><br/>

*Sample URL decoded S3 CFT Link*:

```     
https://onboarding-templates-app-s3.s3.amazonaws.com/123456789012345678/123456789012/prisma-cloud-aws-iam-role-1268a9df-5f25-4585-be8c-3ebcc03b1d1d.template?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQC94GEu53jRfuZbrpIaWHTCofG27p2CGIE1ob0I0Us36AIgR0HNScAWkWTEQcChWWwEOO7%2BHLNaBC04UuD%2BFoaADqcqmgIIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwxODg2MTk5NDI3OTIiDG%2FM2%2FpFS97HXwnx0yruAR1VhsSiWGMF8AhNHRUHjcVfpdwa%2B4bJnpD4kgyK2anzh9TRaJILcTF384mg%2FkO71PYQYrOHzw3%2FyqRUGLmJ715%2FU9Lz%2BPynFx%2B6lx23M1CIvroaIBDqr9BFlcefepluy6xiso7oDMI46n8LCUBXUq5NGAcY4heDAVYXvwD5KSMiBytK%2Bct8r4G7R2bxrBm30GAkMhvPjEyhstrSFxheQqe3ZS429LYqpWgOoHiOFonn28R4NkJLEg027gPxpTKsqqiGysTymaDs4hHe7tRAG55L2YPsShoMe2SaWfTehivX%2BWbHO1%2FfIazMS7NPtqAwr%2Fv9nwY6nQEWKSoO7JUCkXAKDTIYrKV%2Bl5WG9YP2HLaL62OvMhicZE5lWLDeYL4%2Bo6qgCoH%2FxrbHAsY4LEmFNgxm2I%2FlK7KF6ugEsPHf33XnYgcN0a4VG7POoPyfk0RbNy6j002Guikcg3wieuROfF4NpnwrjvYfhbB2VM95Vpd1lhPRiqIxMJXIPNHwMQUu9t4ro6W0cRQUQVf5xpUBV1JC8%2BV1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230301T163039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3597&X-Amz-Credential=ASIASX2U75OEE4QNMK7F%2F20230301%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=75b43898503df3d757e8512d90a58c6f1c6de00b209403aa21cd28704fed7dfe
```

  **2.1.c**. Use the above extracted decoded s3 link to create or update the *IAM role* using AWS *CloudFormation Stack*. Boto3, Terraform, or any other programming tools can be used to create Cloudformation Stack.<br/><br/>
  `OrganizationalUnitIds` param should be provided for Organization stack creation in the CFT for creating member roles on the specified OrganizationalUnitIds. Provide the organizational root OU ID (prefix r-) to run it for all the accounts under the Organization, else provide a comma-separated list of OU IDs (prefix ou-). Refer [AWS Organization details Guide](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_details.html#orgs_view_root) for more info.<br/>
  Example: OrganizationalUnitIds = "r-abcd" // r-abcd is the AWS organizational root OU ID for the ORG account which indicates that member role should get created on all the accounts that the organization has access to.

  :::info

  - The IAM roles created in member accounts will be of the format: `*<Organization-iam-role-name>-member*`

  :::

<details>
  <summary>Sample code snippet to create Cloudformation Stack using boto3</summary>

  ```python
  import boto3

  # Extracted urldecoded s3 cft link from previous 2.1.b step
  s3_urldecoded_cft_template_path = "https://onboarding-templates-app-s3.s3.amazonaws.com/123456789012345678/123456789012/prisma-cloud-aws-iam-role-1268a9df-5f25-4585-be8c-3ebcc03b1d1d.template?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQC94GEu53jRfuZbrpIaWHTCofG27p2CGIE1ob0I0Us36AIgR0HNScAWkWTEQcChWWwEOO7%2BHLNaBC04UuD%2BFoaADqcqmgIIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwxODg2MTk5NDI3OTIiDG%2FM2%2FpFS97HXwnx0yruAR1VhsSiWGMF8AhNHRUHjcVfpdwa%2B4bJnpD4kgyK2anzh9TRaJILcTF384mg%2FkO71PYQYrOHzw3%2FyqRUGLmJ715%2FU9Lz%2BPynFx%2B6lx23M1CIvroaIBDqr9BFlcefepluy6xiso7oDMI46n8LCUBXUq5NGAcY4heDAVYXvwD5KSMiBytK%2Bct8r4G7R2bxrBm30GAkMhvPjEyhstrSFxheQqe3ZS429LYqpWgOoHiOFonn28R4NkJLEg027gPxpTKsqqiGysTymaDs4hHe7tRAG55L2YPsShoMe2SaWfTehivX%2BWbHO1%2FfIazMS7NPtqAwr%2Fv9nwY6nQEWKSoO7JUCkXAKDTIYrKV%2Bl5WG9YP2HLaL62OvMhicZE5lWLDeYL4%2Bo6qgCoH%2FxrbHAsY4LEmFNgxm2I%2FlK7KF6ugEsPHf33XnYgcN0a4VG7POoPyfk0RbNy6j002Guikcg3wieuROfF4NpnwrjvYfhbB2VM95Vpd1lhPRiqIxMJXIPNHwMQUu9t4ro6W0cRQUQVf5xpUBV1JC8%2BV1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230301T163039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3597&X-Amz-Credential=ASIASX2U75OEE4QNMK7F%2F20230301%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=75b43898503df3d757e8512d90a58c6f1c6de00b209403aa21cd28704fed7dfe"

  stack_name = 'PrismaCloudOrganizationRole'  # Change if needed

  cloud_formation_client = boto3.client('cloudformation')
  #  Provide the organizational root OU ID (prefix r-) to create IAM role for all the member accounts under the Organization,
  #  else provide a comma-separated list of OU IDs (prefix ou-)
  OrganizationalUnitIds = "<OrganizationalUnitIds>" 
  cloud_formation_client = boto3.client('cloudformation')
  parameters = [
      {
          'ParameterKey': "PrismaCloudRoleName",
          'ParameterValue': stack_name,
          'UsePreviousValue': False,
      },
      {
          'ParameterKey': "OrganizationalUnitIds",
          'ParameterValue': OrganizationalUnitIds,
          'UsePreviousValue': False,
      }
  ]
  capabilities = ['CAPABILITY_NAMED_IAM']

  cloud_formation_client.create_stack(StackName=stack_name, TemplateURL=s3_urldecoded_cft_template_path,
                                                  Parameters=parameters, Capabilities=capabilities)
  ```
</details>
  
> **Note:** The link is valid for one hour. Regenerate the link if it expires.

**2.2**. Alternatively, use [Generate and Download the AWS CFT Template](/prisma-cloud/api/cspm/generate-cft-template-aws) ![alt text](/icons/api-icon-pan-dev.svg) to get the CFT template in response.<br/> 
For example, To get CFT for the required features selected from the previous supported features API and for accountType="organization"

<details>
  <summary>Sample Request</summary>

  ```bash
  curl --request POST 'https://api.prismacloud.io/cas/v1/aws_template' \
  --header 'accept: */*' \
  --header 'content-type: application/json' \
  --header 'x-redlock-auth: <YOUR_TOKEN>' \
  --data-raw '{
    "accountId": "<accountId>",
    "accountType": "organization",
    "features": [
        "Agentless Scanning",
        "Auto Protect",
        "Remediation",
        "Serverless Function Scanning"
    ]
  }'
  ```
</details>

The **response** contains CFT content. Save it with `*.template` extension and use it to create AWS cloudformation stack programmatically (e.g. using Boto3, Terraform)

<details>
  <summary>Sample Response</summary>

  ```json
  {
  "AWSTemplateFormatVersion": "2010-09-09",
  "Mappings": {
    "EventBridgeMap": {
      "EventBridgeRuleNamePrefix": {
        "Value": "prisma-cloud-eb-o-123456789012345678-*"
      }
    }
  },
  "Description": "Prisma Cloud IAM Role to set permissions",
  "Metadata": {
    "DownloadDate": "2023-03-16 00:41"
  },
  "Parameters": {
    "PrismaCloudRoleName": {
      "Type": "String",
      "Description": "Provide an role ARN name (Example: PrismaCloudRole). Maximum 57 characters allowed",
      "AllowedPattern": "[-_a-zA-Z0-9]+",
      "Default": "PrismaCloudRole-123456789012345678",
      "MaxLength": 57,
      "MinLength": 1
    },
    "OrganizationalUnitIds": {
      "Type": "CommaDelimitedList",
      "Description": "Provide the organizational root OU ID (Prefix like: r-) if you want to run it for all the accounts under this Organization. Else provide a comma-separated list of OU ids(Prefix like: ou-).",
      "AllowedPattern": "^(ou-|r-)[a-z0-9-]+(?:,( )*(ou-|r-)[a-z0-9-]+)*$"
    }
  },
  "Resources": {
    "PrismaCloudRoleStackSetMember": {
      "Properties": {
        "AutoDeployment": {
          "RetainStacksOnAccountRemoval": "False",
          "Enabled": "True"
        },
        "Capabilities": [
          "CAPABILITY_NAMED_IAM"
        ],
        "OperationPreferences": {
          "FailureTolerancePercentage": 100,
          "RegionConcurrencyType": "PARALLEL"
        },
        "Parameters": [
          {
            "ParameterKey": "PrismaCloudRoleName",
            "ParameterValue": {
              "Fn::Join": [
                "",
                [
                  {
                    "Ref": "PrismaCloudRoleName"
                  },
                  "-member"
                ]
              ]
            }
          }
        ],
        "PermissionModel": "SERVICE_MANAGED",
        "StackInstancesGroup": [
          {
            "DeploymentTargets": {
              "OrganizationalUnitIds": {
                "Ref": "OrganizationalUnitIds"
              }
            },
            "Regions": [
              {
                "Ref": "AWS::Region"
              }
            ]
          }
        ],
        "StackSetName": {
          "Fn::Join": [
            "",
            [
              "PrismaCloudRolesStackSetMember-",
              {
                "Ref": "AWS::StackName"
              }
            ]
          ]
        },
        "TemplateBody": "{\n  \"AWSTemplateFormatVersion\": \"2010-09-09\",\n  \"Mappings\": {\n    \"EventBridgeMap\": {\n      \"EventBridgeRuleNamePrefix\": {\n        \"Value\": \"prisma-cloud-eb-o-123456789012345678-*\"\n      }\n    }\n  },\n  \"Description\": \"Prisma Cloud IAM Role to set permissions\",\n  \"Metadata\": {\n    \"DownloadDate\": \"2023-03-16 00:41\"\n  },\n  \"Parameters\": {\n    \"PrismaCloudRoleName\": {\n      \"Type\": \"String\",\n      \"Description\": \"Provide an role ARN name (Example: PrismaCloudRole). Maximum 64 characters allowed\",\n      \"AllowedPattern\": \"[-_a-zA-Z0-9]+\",\n      \"Default\": \"PrismaCloudRole-123456789012345678-member\",\n      \"MaxLength\": 64,\n      \"MinLength\": 1\n    }\n  },\n  \"Resources\": {\n    \"PrismaCloudRole\": {\n      \"Type\": \"AWS::IAM::Role\",\n      \"Properties\": {\n        \"ManagedPolicyArns\": [\n          {\n            \"Fn::Join\": [\n              \"\",\n              [\n                \"arn:aws:iam::aws:policy/SecurityAudit\"\n              ]\n            ]\n          },\n          {\n            \"Fn::Join\": [\n              \"\",\n              [\n                \"arn:aws:iam::\",\n                {\n                  \"Ref\": \"AWS::AccountId\"\n                },\n                \":policy/\",\n                \"prisma_cloud_1-123456789012345678\",\n                \"-\",\n                {\n                  \"Ref\": \"PrismaCloudRoleName\"\n                }\n              ]\n            ]\n          },\n          {\n            \"Fn::Join\": [\n              \"\",\n              [\n                \"arn:aws:iam::\",\n                {\n                  \"Ref\": \"AWS::AccountId\"\n                },\n                \":policy/\",\n                \"prisma_cloud_2-123456789012345678\",\n                \"-\",\n                {\n                  \"Ref\": \"PrismaCloudRoleName\"\n                }\n              ]\n            ]\n          },\n          {\n            \"Fn::Join\": [\n              \"\",\n              [\n                \"arn:aws:iam::\",\n                {\n                  \"Ref\": \"AWS::AccountId\"\n                },\n                \":policy/\",\n                \"prisma_cloud_3-123456789012345678\",\n                \"-\",\n                {\n                  \"Ref\": \"PrismaCloudRoleName\"\n                }\n              ]\n            ]\n          },\n          {\n            \"Fn::Join\": [\n              \"\",\n              [\n                \"arn:aws:iam::\",\n                {\n                  \"Ref\": \"AWS::AccountId\"\n                },\n                \":policy/\",\n                \"prisma_cloud_4-123456789012345678\",\n                \"-\",\n                {\n                  \"Ref\": \"PrismaCloudRoleName\"\n                }\n              ]\n            ]\n          },\n          {\n            \"Fn::Join\": [\n              \"\",\n              [\n                \"arn:aws:iam::\",\n                {\n                  \"Ref\": \"AWS::AccountId\"\n                },\n                \":policy/\",\n                \"prisma_cloud_5-123456789012345678\",\n                \"-\",\n                {\n                  \"Ref\": \"PrismaCloudRoleName\"\n                }\n              ]\n            ]\n          }\n        ],\n        \"MaxSessionDuration\": 43200,\n        \"AssumeRolePolicyDocument\": {\n          \"Version\": \"2012-10-17\",\n          \"Statement\": [\n            {\n              \"Effect\": \"Allow\",\n              \"Principal\": {\n                \"AWS\": [\n                  \"arn:aws:iam::188619942792:root\"\n                ]\n              },\n              \"Action\": [\n                \"sts:AssumeRole\"\n              ],\n              \"Condition\": {\n                \"StringEquals\": {\n                  \"sts:ExternalId\": \"Bhb\"\n                }\n              }\n            }\n          ]\n        },\n        \"RoleName\": {\n          \"Ref\": \"PrismaCloudRoleName\"\n        }\n      },\n      \"DependsOn\": [\n        \"prismacloud5\",\n        \"prismacloud1\",\n        \"prismacloud2\",\n        \"prismacloud3\",\n        \"prismacloud4\"\n      ]\n    },\n    \"prismacloud1\": {\n      \"Type\": \"AWS::IAM::ManagedPolicy\",\n      \"Properties\": {\n        \"ManagedPolicyName\": {\n          \"Fn::Join\": [\n            \"\",\n            [\n              \"prisma_cloud_1-123456789012345678\",\n              \"-\",\n              {\n                \"Ref\": \"PrismaCloudRoleName\"\n              }\n            ]\n          ]\n        },\n        \"PolicyDocument\": {\n          \"Version\": \"2012-10-17\",\n          \"Statement\": [\n            {\n              \"Sid\": \"PrismaCloudFlowlogs1\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"logs:GetLogEvents\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudAuditEventsCloudTrail1\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"cloudtrail:LookupEvents\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudPCCAgentlessSSM6\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"ssm:GetParameter\",\n                \"ssm:GetParameters\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudEBOrganizationManagementPermissions1\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"organizations:ListRoots\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudPCCAgentlessSTS7\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"sts:DecodeAuthorizationMessage\",\n                \"sts:GetCallerIdentity\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudElasticBeanstalk4\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"s3:GetObject\"\n              ],\n              \"Resource\": {\n                \"Fn::Join\": [\n                  \"\",\n                  [\n                    \"arn:\",\n                    {\n                      \"Ref\": \"AWS::Partition\"\n                    },\n                    \":s3:::elasticbeanstalk-*/*\"\n                  ]\n                ]\n              }\n            },\n            {\n              \"Sid\": \"PrismaCloudGuardduty1\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"guardduty:GetDetector\",\n                \"guardduty:GetFindings\",\n                \"guardduty:ListDetectors\",\n                \"guardduty:ListFindings\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudPCCAgentlessKMS5\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"kms:CreateGrant\",\n                \"kms:Decrypt\",\n                \"kms:DescribeKey\",\n                \"kms:Encrypt\",\n                \"kms:GenerateDataKeyWithoutPlaintext\",\n                \"kms:ReEncryptFrom\",\n                \"kms:ReEncryptTo\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudPCCAgentlessNetworkActions9\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"ec2:CreateInternetGateway\",\n                \"ec2:CreateSubnet\",\n                \"ec2:CreateVpc\"\n              ],\n              \"Condition\": {\n                \"StringEquals\": {\n                  \"aws:RequestTag/created-by\": \"prismacloud-agentless-scan\"\n                }\n              },\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudComputeAgentless1\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"ec2:CreateRoute\",\n                \"ec2:DeleteNetworkInterface\",\n                \"ec2:DescribeInternetGateways\",\n                \"ec2:DescribeNetworkInterfaces\",\n                \"ec2:DescribeRouteTables\",\n                \"ec2:DescribeVpcs\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudPCCAgentlessServiceLinkedRole4\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"iam:CreateServiceLinkedRole\"\n              ],\n              \"Condition\": {\n                \"StringLike\": {\n                  \"iam:AWSServiceName\": \"spot.amazonaws.com\"\n                }\n              },\n              \"Resource\": [\n                {\n                  \"Fn::Join\": [\n                    \"\",\n                    [\n                      \"arn:\",\n                      {\n                        \"Ref\": \"AWS::Partition\"\n                      },\n                      \":iam::*:role/aws-service-role/spot.amazonaws.com/*\"\n                    ]\n                  ]\n                }\n              ]\n            },\n            {\n              \"Sid\": \"PrismaCloudBridgecrew1\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"cloudformation:DescribeStackResources\",\n                \"cloudformation:GetTemplate\",\n                \"cloudformation:ListStacks\",\n                \"lambda:GetEventSourceMapping\",\n                \"lambda:GetFunction\",\n                \"lambda:GetLayerVersion\",\n                \"s3:ListBucket\",\n                \"sns:GetSubscriptionAttributes\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudEBRuleStatusPermissions3\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"cloudtrail:DescribeTrails\",\n                \"cloudtrail:GetEventSelectors\",\n                \"cloudtrail:GetTrailStatus\",\n                \"ec2:DescribeRegions\",\n                \"events:DescribeApiDestination\",\n                \"events:DescribeConnection\",\n                \"events:DescribeRule\",\n                \"events:ListTargetsByRule\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudPCCAgentlessRW3\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"ec2:CreateSnapshot\",\n                \"ec2:CreateSnapshots\",\n                \"ec2:DescribeInstanceStatus\",\n                \"ec2:DescribeInstances\",\n                \"ec2:DescribeSecurityGroups\",\n                \"ec2:DescribeSnapshots\",\n                \"ec2:DescribeSubnets\",\n                \"ec2:DescribeVolumes\",\n                \"ec2:RunInstances\",\n                \"iam:SimulatePrincipalPolicy\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudInspector1\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"inspector:DescribeAssessmentTemplates\",\n                \"inspector:DescribeFindings\",\n                \"inspector:DescribeRulesPackages\",\n                \"inspector:ListAssessmentRunAgents\",\n                \"inspector:ListAssessmentRuns\",\n                \"inspector:ListAssessmentTemplates\",\n                \"inspector:ListFindings\",\n                \"inspector:ListRulesPackages\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudEBRuleManagementPermissions2\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"events:DeleteRule\",\n                \"events:DisableRule\",\n                \"events:EnableRule\",\n                \"events:PutRule\",\n                \"events:RemoveTargets\"\n              ],\n              \"Resource\": [\n                {\n                  \"Fn::Join\": [\n                    \"\",\n                    [\n                      \"arn:\",\n                      {\n                        \"Ref\": \"AWS::Partition\"\n                      },\n                      \":events:*:\",\n                      {\n                        \"Ref\": \"AWS::AccountId\"\n                      },\n                      \":rule/\",\n                      {\n                        \"Fn::FindInMap\": [\n                          \"EventBridgeMap\",\n                          \"EventBridgeRuleNamePrefix\",\n                          \"Value\"\n                        ]\n                      }\n                    ]\n                  ]\n                }\n              ]\n            },\n            {\n              \"Sid\": \"PrismaCloudPCCAgentlessRM2\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"ec2:AttachInternetGateway\",\n                \"ec2:CreateSubnet\",\n                \"ec2:DeleteInternetGateway\",\n                \"ec2:DeleteSnapshot\",\n                \"ec2:DeleteSubnet\",\n                \"ec2:DeleteVpc\",\n                \"ec2:DetachInternetGateway\",\n                \"ec2:ModifySnapshotAttribute\",\n                \"ec2:TerminateInstances\"\n              ],\n              \"Condition\": {\n                \"StringEquals\": {\n                  \"ec2:ResourceTag/created-by\": \"prismacloud-agentless-scan\"\n                }\n              },\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudComputeServerlessScan1\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"ec2:DescribeImages\",\n                \"iam:GetPolicy\",\n                \"iam:GetPolicyVersion\",\n                \"iam:GetRole\",\n                \"iam:GetRolePolicy\",\n                \"iam:ListAttachedRolePolicies\",\n                \"iam:ListRolePolicies\",\n                \"iam:SimulatePrincipalPolicy\",\n                \"kms:Decrypt\",\n                \"lambda:DeleteLayerVersion\",\n                \"lambda:GetFunction\",\n                \"lambda:GetFunctionConfiguration\",\n                \"lambda:GetLayerVersion\",\n                \"lambda:ListFunctions\",\n                \"lambda:ListLayerVersions\",\n                \"lambda:ListLayers\",\n                \"lambda:PublishLayerVersion\",\n                \"lambda:UpdateFunctionConfiguration\"\n              ],\n              \"Resource\": \"*\"\n            }\n          ]\n        }\n      }\n    },\n    \"prismacloud2\": {\n      \"Type\": \"AWS::IAM::ManagedPolicy\",\n      \"Properties\": {\n        \"ManagedPolicyName\": {\n          \"Fn::Join\": [\n            \"\",\n            [\n              \"prisma_cloud_2-123456789012345678\",\n              \"-\",\n              {\n                \"Ref\": \"PrismaCloudRoleName\"\n              }\n            ]\n          ]\n        },\n        \"PolicyDocument\": {\n          \"Version\": \"2012-10-17\",\n          \"Statement\": [\n            {\n              \"Sid\": \"PrismaCloudPCCAgentlessTags8\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"ec2:CreateTags\"\n              ],\n              \"Condition\": {\n                \"StringEquals\": {\n                  \"aws:RequestTag/created-by\": \"prismacloud-agentless-scan\"\n                }\n              },\n              \"Resource\": [\n                {\n                  \"Fn::Join\": [\n                    \"\",\n                    [\n                      \"arn:\",\n                      {\n                        \"Ref\": \"AWS::Partition\"\n                      },\n                      \":ec2:*::snapshot/*\"\n                    ]\n                  ]\n                },\n                {\n                  \"Fn::Join\": [\n                    \"\",\n                    [\n                      \"arn:\",\n                      {\n                        \"Ref\": \"AWS::Partition\"\n                      },\n                      \":ec2:*:*:instance/*\"\n                    ]\n                  ]\n                },\n                {\n                  \"Fn::Join\": [\n                    \"\",\n                    [\n                      \"arn:\",\n                      {\n                        \"Ref\": \"AWS::Partition\"\n                      },\n                      \":ec2:*:*:vpc/*\"\n                    ]\n                  ]\n                },\n                {\n                  \"Fn::Join\": [\n                    \"\",\n                    [\n                      \"arn:\",\n                      {\n                        \"Ref\": \"AWS::Partition\"\n                      },\n                      \":ec2:*:*:subnet/*\"\n                    ]\n                  ]\n                },\n                {\n                  \"Fn::Join\": [\n                    \"\",\n                    [\n                      \"arn:\",\n                      {\n                        \"Ref\": \"AWS::Partition\"\n                      },\n                      \":ec2:*:*:internet-gateway/*\"\n                    ]\n                  ]\n                },\n                {\n                  \"Fn::Join\": [\n                    \"\",\n                    [\n                      \"arn:\",\n                      {\n                        \"Ref\": \"AWS::Partition\"\n                      },\n                      \":ec2:*:*:volume/*\"\n                    ]\n                  ]\n                }\n              ]\n            },\n            {\n              \"Sid\": \"PrismaCloudRemediation1\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"acm:UpdateCertificateOptions\",\n                \"cloudtrail:StartLogging\",\n                \"cloudtrail:UpdateTrail\",\n                \"ec2:ModifyImageAttribute\",\n                \"ec2:ModifySnapshotAttribute\",\n                \"ec2:ModifySubnetAttribute\",\n                \"ec2:RevokeSecurityGroupEgress\",\n                \"ec2:RevokeSecurityGroupIngress\",\n                \"ecs:UpdateClusterSettings\",\n                \"eks:UpdateClusterConfig\",\n                \"elasticache:ModifyReplicationGroup\",\n                \"elasticloadbalancing:ModifyLoadBalancerAttributes\",\n                \"iam:UpdateAccountPasswordPolicy\",\n                \"kms:EnableKeyRotation\",\n                \"lambda:UpdateFunctionConfiguration\",\n                \"rds:ModifyDBCluster\",\n                \"rds:ModifyDBClusterSnapshotAttribute\",\n                \"rds:ModifyDBInstance\",\n                \"rds:ModifyDBSnapshotAttribute\",\n                \"rds:ModifyEventSubscription\",\n                \"redshift:ModifyCluster\",\n                \"s3:PutBucketAcl\",\n                \"s3:PutBucketPublicAccessBlock\",\n                \"s3:PutBucketVersioning\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudComputeDiscovery1\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"apigateway:GET\",\n                \"cloudfront:ListDistributions\",\n                \"cloudwatch:DescribeAlarms\",\n                \"ec2:DescribeTags\",\n                \"elasticloadbalancing:DescribeListenerCertificates\",\n                \"elasticloadbalancing:DescribeListeners\",\n                \"elasticloadbalancing:DescribeRules\",\n                \"elasticloadbalancing:DescribeTargetGroups\",\n                \"events:ListRules\",\n                \"iam:GetPolicy\",\n                \"iam:GetPolicyVersion\",\n                \"iam:GetRole\",\n                \"iam:GetRolePolicy\",\n                \"iam:ListAttachedRolePolicies\",\n                \"iam:ListRolePolicies\",\n                \"kms:Decrypt\",\n                \"lambda:GetFunction\",\n                \"lambda:GetFunctionConfiguration\",\n                \"lambda:GetFunctionUrlConfig\",\n                \"lambda:GetPolicy\",\n                \"lambda:ListAliases\",\n                \"lambda:ListEventSourceMappings\",\n                \"lambda:ListFunctions\",\n                \"logs:DescribeSubscriptionFilters\",\n                \"s3:GetBucketNotification\",\n                \"secretsmanager:GetSecretValue\",\n                \"ssm:GetParameter\"\n              ],\n              \"Resource\": \"*\"\n            },\n            {\n              \"Sid\": \"PrismaCloudComputeAutoProtect1\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"ec2:AuthorizeSecurityGroupEgress\",\n                \"ec2:AuthorizeSecurityGroupIngress\",\n                \"ec2:CreateSecurityGroup\",\n                \"ec2:CreateTags\",\n                \"ec2:DeleteSecurityGroup\",\n                \"ec2:DescribeImages\",\n                \"ec2:DescribeInstanceTypeOfferings\",\n                \"ec2:DescribeInstances\",\n                \"ec2:DescribeSecurityGroups\",\n                \"ec2:DescribeSubnets\",\n                \"ec2:DescribeVpcs\",\n                \"ec2:RevokeSecurityGroupEgress\",\n                \"ec2:RunInstances\",\n                \"ec2:TerminateInstances\",\n                \"ecr:BatchCheckLayerAvailability\",\n                \"ecr:BatchGetImage\",\n                \"ecr:DescribeImageScanFindings\",\n                \"ecr:DescribeImages\",\n                \"ecr:DescribeRepositories\",\n                \"ecr:GetAuthorizationToken\",\n                \"ecr:GetDownloadUrlForLayer\",\n                \"ecr:GetLifecyclePolicy\",\n                \"ecr:GetLifecyclePolicyPreview\",\n                \"ecr:GetRepositoryPolicy\",\n                \"ecr:ListImages\",\n                \"ecr:ListTagsForResource\",\n                \"lambda:GetFunctionConfiguration\",\n                \"lambda:GetLayerVersion\",\n                \"logs:GetQueryResults\",\n                \"logs:StartQuery\",\n                \"securityhub:BatchImportFindings\",\n                \"ssm:CancelCommand\",\n                \"ssm:CreateAssociation\",\n                \"ssm:DescribeInstanceInformation\",\n                \"ssm:ListCommandInvocations\",\n                \"ssm:SendCommand\"\n              ],\n              \"Resource\": \"*\"\n            }\n          ]\n        }\n      }\n    },\n    \"prismacloud3\": {\n      \"Type\": \"AWS::IAM::ManagedPolicy\",\n      \"Properties\": {\n        \"ManagedPolicyName\": {\n          \"Fn::Join\": [\n            \"\",\n            [\n              \"prisma_cloud_3-123456789012345678\",\n              \"-\",\n              {\n                \"Ref\": \"PrismaCloudRoleName\"\n              }\n            ]\n          ]\n        },\n        \"PolicyDocument\": {\n          \"Version\": \"2012-10-17\",\n          \"Statement\": [\n            {\n              \"Sid\": \"PrismaCloudConfig3\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"memorydb:DescribeClusters\",\n                \"memorydb:DescribeParameterGroups\",\n                \"memorydb:DescribeParameters\",\n                \"memorydb:ListTags\",\n                \"mobiletargeting:GetApps\",\n                \"mobiletargeting:GetEmailChannel\",\n                \"mobiletargeting:GetSmsChannel\",\n                \"mq:DescribeBroker\",\n                \"mq:ListBrokers\",\n                \"organizations:DescribeAccount\",\n                \"organizations:DescribeOrganization\",\n                \"organizations:DescribeOrganizationalUnit\",\n                \"organizations:DescribePolicy\",\n                \"organizations:ListAccounts\",\n                \"organizations:ListAccountsForParent\",\n                \"organizations:ListChildren\",\n                \"organizations:ListOrganizationalUnitsForParent\",\n                \"organizations:ListParents\",\n                \"organizations:ListPolicies\",\n                \"organizations:ListPoliciesForTarget\",\n                \"organizations:ListRoots\",\n                \"organizations:ListTagsForResource\",\n                \"qldb:DescribeLedger\",\n                \"qldb:ListLedgers\",\n                \"qldb:ListTagsForResource\",\n                \"quicksight:DescribeAccountSettings\",\n                \"quicksight:ListDataSets\",\n                \"quicksight:ListDataSources\",\n                \"quicksight:ListTagsForResource\",\n                \"ram:GetResourceShares\",\n                \"ram:ListPrincipals\",\n                \"ram:ListResources\",\n                \"rds:DescribeDBClusterParameterGroups\",\n                \"rds:DescribeDBClusterParameters\",\n                \"rds:DescribeDBClusterSnapshotAttributes\",\n                \"rds:DescribeDBClusterSnapshots\",\n                \"rds:DescribeDBClusters\",\n                \"rds:DescribeDBInstances\",\n                \"rds:DescribeDBParameterGroups\",\n                \"rds:DescribeDBParameters\",\n                \"rds:DescribeDBSnapshotAttributes\",\n                \"rds:DescribeDBSnapshots\",\n                \"rds:DescribeEventSubscriptions\",\n                \"rds:DescribeOptionGroups\",\n                \"rds:ListTagsForResource\",\n                \"redshift:DescribeClusterParameters\",\n                \"redshift:DescribeClusters\",\n                \"redshift:DescribeLoggingStatus\",\n                \"route53:ListHostedZones\",\n                \"route53:ListQueryLoggingConfigs\",\n                \"route53:ListResourceRecordSets\",\n                \"route53:ListTagsForResource\",\n                \"route53domains:GetDomainDetail\",\n                \"route53domains:ListDomains\",\n                \"route53domains:ListTagsForDomain\",\n                \"route53resolver:ListResolverQueryLogConfigAssociations\",\n                \"route53resolver:ListResolverQueryLogConfigs\",\n                \"route53resolver:ListTagsForResource\",\n                \"s3:DescribeJob\",\n                \"s3:GetAccessPoint\",\n                \"s3:GetAccessPointPolicy\",\n                \"s3:GetAccessPointPolicyStatus\",\n                \"s3:GetAccountPublicAccessBlock\",\n                \"s3:GetBucketAcl\",\n                \"s3:GetBucketCORS\",\n                \"s3:GetBucketLocation\",\n                \"s3:GetBucketLogging\",\n                \"s3:GetBucketOwnershipControls\",\n                \"s3:GetBucketPolicy\",\n                \"s3:GetBucketPolicyStatus\",\n                \"s3:GetBucketPublicAccessBlock\",\n                \"s3:GetBucketTagging\",\n                \"s3:GetBucketVersioning\",\n                \"s3:GetBucketWebsite\",\n                \"s3:GetEncryptionConfiguration\",\n                \"s3:GetJobTagging\",\n                \"s3:GetLifecycleConfiguration\",\n                \"s3:GetReplicationConfiguration\",\n                \"s3:ListAccessPoints\",\n                \"s3:ListAllMyBuckets\",\n                \"s3:ListJobs\",\n                \"sagemaker:DescribeDomain\",\n                \"sagemaker:DescribeEndpoint\",\n                \"sagemaker:DescribeEndpointConfig\",\n                \"sagemaker:DescribeModel\",\n                \"sagemaker:DescribeNotebookInstance\",\n                \"sagemaker:DescribeTrainingJob\",\n                \"sagemaker:DescribeUserProfile\",\n                \"sagemaker:ListDomains\",\n                \"sagemaker:ListEndpointConfigs\",\n                \"sagemaker:ListEndpoints\",\n                \"sagemaker:ListModels\",\n                \"sagemaker:ListNotebookInstances\",\n                \"sagemaker:ListTags\",\n                \"sagemaker:ListTrainingJobs\",\n                \"sagemaker:ListUserProfiles\",\n                \"secretsmanager:DescribeSecret\",\n                \"secretsmanager:GetResourcePolicy\",\n                \"secretsmanager:ListSecrets\",\n                \"ses:GetIdentityDkimAttributes\",\n                \"ses:GetIdentityPolicies\",\n                \"ses:ListIdentities\",\n                \"ses:ListIdentityPolicies\",\n                \"shield:GetSubscriptionState\",\n                \"shield:ListProtectionGroups\",\n                \"shield:ListProtections\",\n                \"shield:ListResourcesInProtectionGroup\",\n                \"shield:ListTagsForResource\",\n                \"sns:GetTopicAttributes\",\n                \"sns:ListPlatformApplications\",\n                \"sns:ListSubscriptions\",\n                \"sns:ListTagsForResource\",\n                \"sns:ListTopics\",\n                \"sqs:GetQueueAttributes\",\n                \"sqs:ListQueueTags\",\n                \"sqs:ListQueues\",\n                \"ssm:DescribeAssociation\",\n                \"ssm:DescribeDocument\",\n                \"ssm:DescribeDocumentPermission\",\n                \"ssm:DescribeInstanceInformation\",\n                \"ssm:DescribeParameters\",\n                \"ssm:GetDocument\",\n                \"ssm:GetInventory\",\n                \"ssm:GetParameters\",\n                \"ssm:ListAssociations\",\n                \"ssm:ListDocuments\",\n                \"ssm:ListTagsForResource\",\n                \"sso:DescribePermissionSet\",\n                \"sso:ListAccountAssignments\",\n                \"sso:ListAccountsForProvisionedPermissionSet\",\n                \"sso:ListInstances\",\n                \"sso:ListPermissionSets\",\n                \"states:DescribeStateMachine\",\n                \"states:ListStateMachines\",\n                \"states:ListTagsForResource\",\n                \"storagegateway:DescribeCachediSCSIVolumes\",\n                \"storagegateway:DescribeGatewayInformation\",\n                \"storagegateway:DescribeNFSFileShares\",\n                \"storagegateway:DescribeSMBFileShares\",\n                \"storagegateway:DescribeSMBSettings\",\n                \"storagegateway:DescribeTapes\",\n                \"storagegateway:ListFileShares\",\n                \"storagegateway:ListGateways\",\n                \"storagegateway:ListTapes\",\n                \"storagegateway:ListVolumes\",\n                \"transcribe:ListLanguageModels\",\n                \"transcribe:ListTagsForResource\",\n                \"transfer:DescribeAccess\",\n                \"transfer:DescribeServer\",\n                \"transfer:ListAccesses\",\n                \"transfer:ListServers\",\n                \"translate:GetTerminology\",\n                \"translate:ListTerminologies\",\n                \"waf-regional:GetLoggingConfiguration\",\n                \"waf-regional:GetWebACL\",\n                \"waf-regional:ListResourcesForWebACL\",\n                \"waf-regional:ListTagsForResource\",\n                \"waf-regional:ListWebACLs\",\n                \"waf:GetLoggingConfiguration\",\n                \"waf:GetWebACL\",\n                \"waf:ListTagsForResource\",\n                \"waf:ListWebACLs\",\n                \"wafv2:GetLoggingConfiguration\",\n                \"wafv2:GetWebACL\",\n                \"wafv2:ListResourcesForWebACL\",\n                \"wafv2:ListTagsForResource\",\n                \"wafv2:ListWebACLs\",\n                \"workspaces:DescribeIpGroups\",\n                \"workspaces:DescribeTags\",\n                \"workspaces:DescribeWorkspaceBundles\",\n                \"workspaces:DescribeWorkspaceDirectories\",\n                \"workspaces:DescribeWorkspaces\",\n                \"xray:GetEncryptionConfig\"\n              ],\n              \"Resource\": \"*\"\n            }\n          ]\n        }\n      }\n    },\n    \"prismacloud4\": {\n      \"Type\": \"AWS::IAM::ManagedPolicy\",\n      \"Properties\": {\n        \"ManagedPolicyName\": {\n          \"Fn::Join\": [\n            \"\",\n            [\n              \"prisma_cloud_4-123456789012345678\",\n              \"-\",\n              {\n                \"Ref\": \"PrismaCloudRoleName\"\n              }\n            ]\n          ]\n        },\n        \"PolicyDocument\": {\n          \"Version\": \"2012-10-17\",\n          \"Statement\": [\n            {\n              \"Sid\": \"PrismaCloudConfig1\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"access-analyzer:GetAnalyzer\",\n                \"access-analyzer:ListAnalyzers\",\n                \"account:GetAlternateContact\",\n                \"acm-pca:GetPolicy\",\n                \"acm-pca:ListCertificateAuthorities\",\n                \"acm-pca:ListTags\",\n                \"acm:DescribeCertificate\",\n                \"acm:ListCertificates\",\n                \"acm:ListTagsForCertificate\",\n                \"airflow:GetEnvironment\",\n                \"airflow:ListEnvironments\",\n                \"amplify:ListApps\",\n                \"apigateway:GET\",\n                \"appflow:DescribeFlow\",\n                \"appflow:ListFlows\",\n                \"appmesh:DescribeMesh\",\n                \"appmesh:DescribeVirtualGateway\",\n                \"appmesh:ListMeshes\",\n                \"appmesh:ListTagsForResource\",\n                \"appmesh:ListVirtualGateways\",\n                \"apprunner:DescribeAutoScalingConfiguration\",\n                \"apprunner:DescribeCustomDomains\",\n                \"apprunner:DescribeService\",\n                \"apprunner:ListAutoScalingConfigurations\",\n                \"apprunner:ListServices\",\n                \"apprunner:ListTagsForResource\",\n                \"appstream:DescribeFleets\",\n                \"appstream:DescribeImages\",\n                \"appstream:DescribeStacks\",\n                \"appstream:DescribeUsageReportSubscriptions\",\n                \"appstream:ListTagsForResource\",\n                \"appsync:GetGraphqlApi\",\n                \"appsync:ListGraphqlApis\",\n                \"aps:DescribeLoggingConfiguration\",\n                \"aps:ListWorkspaces\",\n                \"athena:GetWorkGroup\",\n                \"athena:ListWorkGroups\",\n                \"autoscaling:DescribeAutoScalingGroups\",\n                \"autoscaling:DescribeLaunchConfigurations\",\n                \"backup:GetBackupVaultAccessPolicy\",\n                \"backup:ListBackupVaults\",\n                \"backup:ListTags\",\n                \"batch:DescribeComputeEnvironments\",\n                \"chime:GetVoiceConnectorLoggingConfiguration\",\n                \"chime:ListVoiceConnectors\",\n                \"cloud9:DescribeEnvironmentMemberships\",\n                \"cloud9:DescribeEnvironments\",\n                \"cloud9:ListEnvironments\",\n                \"cloud9:ListTagsForResource\",\n                \"cloudformation:DescribeStackResources\",\n                \"cloudformation:DescribeStacks\",\n                \"cloudformation:GetStackPolicy\",\n                \"cloudformation:GetTemplate\",\n                \"cloudformation:ListStackResources\",\n                \"cloudformation:ListStacks\",\n                \"cloudfront:GetDistribution\",\n                \"cloudfront:GetDistributionConfig\",\n                \"cloudfront:ListDistributions\",\n                \"cloudfront:ListOriginAccessControls\",\n                \"cloudfront:ListTagsForResource\",\n                \"cloudsearch:DescribeDomains\",\n                \"cloudtrail:DescribeTrails\",\n                \"cloudtrail:GetEventSelectors\",\n                \"cloudtrail:GetTrailStatus\",\n                \"cloudtrail:ListTags\",\n                \"cloudwatch:DescribeAlarms\",\n                \"cloudwatch:DescribeInsightRules\",\n                \"cloudwatch:ListTagsForResource\",\n                \"codeartifact:DescribeDomain\",\n                \"codeartifact:DescribeRepository\",\n                \"codeartifact:GetDomainPermissionsPolicy\",\n                \"codeartifact:GetRepositoryPermissionsPolicy\",\n                \"codeartifact:ListDomains\",\n                \"codeartifact:ListRepositories\",\n                \"codeartifact:ListTagsForResource\",\n                \"codebuild:BatchGetProjects\",\n                \"codebuild:ListProjects\",\n                \"codepipeline:GetPipeline\",\n                \"codepipeline:ListPipelines\",\n                \"codepipeline:ListTagsForResource\",\n                \"cognito-identity:DescribeIdentityPool\",\n                \"cognito-identity:ListIdentityPools\",\n                \"cognito-identity:ListTagsForResource\",\n                \"cognito-idp:ListResourcesForWebACL\",\n                \"cognito-idp:ListTagsForResource\",\n                \"cognito-idp:ListUserPools\",\n                \"config:DescribeConfigRules\",\n                \"config:DescribeConfigurationRecorderStatus\",\n                \"config:DescribeConfigurationRecorders\",\n                \"config:DescribeDeliveryChannels\",\n                \"config:GetComplianceDetailsByConfigRule\",\n                \"config:ListTagsForResource\",\n                \"connect:ListInstanceAttributes\",\n                \"connect:ListInstanceStorageConfigs\",\n                \"connect:ListInstances\",\n                \"databrew:DescribeJob\",\n                \"databrew:ListJobs\",\n                \"datapipeline:DescribePipelines\",\n                \"datapipeline:GetPipelineDefinition\",\n                \"datapipeline:ListPipelines\",\n                \"datasync:DescribeLocationEfs\",\n                \"datasync:DescribeLocationFsxLustre\",\n                \"datasync:DescribeLocationFsxOntap\",\n                \"datasync:DescribeLocationFsxOpenZfs\",\n                \"datasync:DescribeLocationFsxWindows\",\n                \"datasync:DescribeLocationHdfs\",\n                \"datasync:DescribeLocationNfs\",\n                \"datasync:DescribeLocationObjectStorage\",\n                \"datasync:DescribeLocationS3\",\n                \"datasync:DescribeLocationSmb\",\n                \"datasync:ListLocations\",\n                \"datasync:ListTagsForResource\",\n                \"datasync:ListTasks\",\n                \"dax:DescribeClusters\",\n                \"dax:ListTags\",\n                \"devops-guru:DescribeServiceIntegration\",\n                \"directconnect:DescribeConnections\",\n                \"directconnect:DescribeDirectConnectGateways\",\n                \"directconnect:DescribeVirtualInterfaces\",\n                \"dms:DescribeCertificates\",\n                \"dms:DescribeEndpoints\",\n                \"dms:DescribeReplicationInstances\",\n                \"dms:ListTagsForResource\",\n                \"ds:DescribeDirectories\",\n                \"ds:ListTagsForResource\",\n                \"dynamodb:DescribeTable\",\n                \"dynamodb:ListTables\",\n                \"dynamodb:ListTagsOfResource\",\n                \"ec2:DescribeAccountAttributes\",\n                \"ec2:DescribeAddresses\",\n                \"ec2:DescribeClientVpnAuthorizationRules\",\n                \"ec2:DescribeClientVpnEndpoints\",\n                \"ec2:DescribeDhcpOptions\",\n                \"ec2:DescribeFlowLogs\",\n                \"ec2:DescribeImages\",\n                \"ec2:DescribeInstanceAttribute\",\n                \"ec2:DescribeInstanceStatus\",\n                \"ec2:DescribeInstances\",\n                \"ec2:DescribeInternetGateways\",\n                \"ec2:DescribeKeyPairs\",\n                \"ec2:DescribeManagedPrefixLists\",\n                \"ec2:DescribeNatGateways\",\n                \"ec2:DescribeNetworkAcls\",\n                \"ec2:DescribeNetworkInterfaceAttribute\",\n                \"ec2:DescribeNetworkInterfaces\",\n                \"ec2:DescribeRegions\",\n                \"ec2:DescribeRouteTables\",\n                \"ec2:DescribeSecurityGroups\",\n                \"ec2:DescribeSnapshotAttribute\",\n                \"ec2:DescribeSnapshots\",\n                \"ec2:DescribeSubnets\",\n                \"ec2:DescribeTags\",\n                \"ec2:DescribeTransitGatewayAttachments\",\n                \"ec2:DescribeTransitGatewayRouteTables\",\n                \"ec2:DescribeTransitGatewayVpcAttachments\",\n                \"ec2:DescribeTransitGateways\",\n                \"ec2:DescribeVolumes\",\n                \"ec2:DescribeVpcEndpointServiceConfigurations\",\n                \"ec2:DescribeVpcEndpointServices\",\n                \"ec2:DescribeVpcEndpoints\",\n                \"ec2:DescribeVpcPeeringConnections\",\n                \"ec2:DescribeVpcs\",\n                \"ec2:DescribeVpnConnections\",\n                \"ec2:DescribeVpnGateways\",\n                \"ec2:GetEbsEncryptionByDefault\",\n                \"ec2:GetManagedPrefixListEntries\",\n                \"ec2:SearchTransitGatewayRoutes\",\n                \"ecr-public:DescribeRepositories\",\n                \"ecr-public:GetRepositoryCatalogData\",\n                \"ecr-public:GetRepositoryPolicy\",\n                \"ecr-public:ListTagsForResource\",\n                \"ecr:DescribeImages\",\n                \"ecr:DescribePullThroughCacheRules\",\n                \"ecr:DescribeRegistry\",\n                \"ecr:DescribeRepositories\",\n                \"ecr:GetLifecyclePolicy\",\n                \"ecr:GetRegistryPolicy\",\n                \"ecr:GetRegistryScanningConfiguration\",\n                \"ecr:GetRepositoryPolicy\",\n                \"ecr:ListTagsForResource\",\n                \"ecs:DescribeClusters\"\n              ],\n              \"Resource\": \"*\"\n            }\n          ]\n        }\n      }\n    },\n    \"prismacloud5\": {\n      \"Type\": \"AWS::IAM::ManagedPolicy\",\n      \"Properties\": {\n        \"ManagedPolicyName\": {\n          \"Fn::Join\": [\n            \"\",\n            [\n              \"prisma_cloud_5-123456789012345678\",\n              \"-\",\n              {\n                \"Ref\": \"PrismaCloudRoleName\"\n              }\n            ]\n          ]\n        },\n        \"PolicyDocument\": {\n          \"Version\": \"2012-10-17\",\n          \"Statement\": [\n            {\n              \"Sid\": \"PrismaCloudConfig2\",\n              \"Effect\": \"Allow\",\n              \"Action\": [\n                \"ecs:DescribeContainerInstances\",\n                \"ecs:DescribeServices\",\n                \"ecs:DescribeTaskDefinition\",\n                \"ecs:DescribeTasks\",\n                \"ecs:ListClusters\",\n                \"ecs:ListContainerInstances\",\n                \"ecs:ListServices\",\n                \"ecs:ListTagsForResource\",\n                \"ecs:ListTaskDefinitions\",\n                \"ecs:ListTasks\",\n                \"eks:DescribeCluster\",\n                \"eks:DescribeFargateProfile\",\n                \"eks:DescribeNodegroup\",\n                \"eks:ListClusters\",\n                \"eks:ListFargateProfiles\",\n                \"eks:ListNodegroups\",\n                \"eks:ListTagsForResource\",\n                \"elasticache:DescribeCacheClusters\",\n                \"elasticache:DescribeCacheEngineVersions\",\n                \"elasticache:DescribeCacheSubnetGroups\",\n                \"elasticache:DescribeReplicationGroups\",\n                \"elasticache:DescribeReservedCacheNodes\",\n                \"elasticache:DescribeSnapshots\",\n                \"elasticache:ListTagsForResource\",\n                \"elasticbeanstalk:DescribeConfigurationSettings\",\n                \"elasticbeanstalk:DescribeEnvironmentResources\",\n                \"elasticbeanstalk:DescribeEnvironments\",\n                \"elasticbeanstalk:ListTagsForResource\",\n                \"elasticfilesystem:DescribeFileSystemPolicy\",\n                \"elasticfilesystem:DescribeFileSystems\",\n                \"elasticfilesystem:DescribeMountTargetSecurityGroups\",\n                \"elasticfilesystem:DescribeMountTargets\",\n                \"elasticfilesystem:DescribeTags\",\n                \"elasticloadbalancing:DescribeListeners\",\n                \"elasticloadbalancing:DescribeLoadBalancerAttributes\",\n                \"elasticloadbalancing:DescribeLoadBalancerPolicies\",\n                \"elasticloadbalancing:DescribeLoadBalancers\",\n                \"elasticloadbalancing:DescribeSSLPolicies\",\n                \"elasticloadbalancing:DescribeTags\",\n                \"elasticloadbalancing:DescribeTargetGroups\",\n                \"elasticloadbalancing:DescribeTargetHealth\",\n                \"elasticmapreduce:DescribeCluster\",\n                \"elasticmapreduce:DescribeSecurityConfiguration\",\n                \"elasticmapreduce:GetBlockPublicAccessConfiguration\",\n                \"elasticmapreduce:ListClusters\",\n                \"elasticmapreduce:ListSecurityConfigurations\",\n                \"es:DescribeElasticsearchDomains\",\n                \"es:ListDomainNames\",\n                \"es:ListTags\",\n                \"events:ListEventBuses\",\n                \"events:ListRules\",\n                \"events:ListTagsForResource\",\n                \"events:ListTargetsByRule\",\n                \"firehose:DescribeDeliveryStream\",\n                \"firehose:ListDeliveryStreams\",\n                \"firehose:ListTagsForDeliveryStream\",\n                \"forecast:DescribeAutoPredictor\",\n                \"forecast:DescribeDataset\",\n                \"forecast:DescribePredictor\",\n                \"forecast:ListDatasets\",\n                \"forecast:ListPredictors\",\n                \"forecast:ListTagsForResource\",\n                \"fsx:DescribeFileSystems\",\n                \"glacier:GetVaultAccessPolicy\",\n                \"glacier:GetVaultLock\",\n                \"glacier:ListTagsForVault\",\n                \"glacier:ListVaults\",\n                \"globalaccelerator:DescribeAcceleratorAttributes\",\n                \"globalaccelerator:ListAccelerators\",\n                \"globalaccelerator:ListTagsForResource\",\n                \"glue:GetConnection\",\n                \"glue:GetConnections\",\n                \"glue:GetDataCatalogEncryptionSettings\",\n                \"glue:GetDatabases\",\n                \"glue:GetSecurityConfigurations\",\n                \"grafana:DescribeWorkspace\",\n                \"grafana:DescribeWorkspaceAuthentication\",\n                \"grafana:ListWorkspaces\",\n                \"guardduty:GetDetector\",\n                \"guardduty:GetFindings\",\n                \"guardduty:GetMasterAccount\",\n                \"guardduty:ListDetectors\",\n                \"guardduty:ListFindings\",\n                \"iam:GenerateCredentialReport\",\n                \"iam:GenerateServiceLastAccessedDetails\",\n                \"iam:GetAccountAuthorizationDetails\",\n                \"iam:GetAccountPasswordPolicy\",\n                \"iam:GetAccountSummary\",\n                \"iam:GetCredentialReport\",\n                \"iam:GetGroupPolicy\",\n                \"iam:GetOpenIDConnectProvider\",\n                \"iam:GetPolicyVersion\",\n                \"iam:GetRole\",\n                \"iam:GetRolePolicy\",\n                \"iam:GetSAMLProvider\",\n                \"iam:GetServiceLastAccessedDetails\",\n                \"iam:GetUserPolicy\",\n                \"iam:ListAccessKeys\",\n                \"iam:ListAttachedGroupPolicies\",\n                \"iam:ListAttachedRolePolicies\",\n                \"iam:ListAttachedUserPolicies\",\n                \"iam:ListEntitiesForPolicy\",\n                \"iam:ListGroupPolicies\",\n                \"iam:ListGroups\",\n                \"iam:ListGroupsForUser\",\n                \"iam:ListInstanceProfilesForRole\",\n                \"iam:ListMFADeviceTags\",\n                \"iam:ListMFADevices\",\n                \"iam:ListOpenIDConnectProviders\",\n                \"iam:ListPolicies\",\n                \"iam:ListPolicyTags\",\n                \"iam:ListPolicyVersions\",\n                \"iam:ListRolePolicies\",\n                \"iam:ListRoleTags\",\n                \"iam:ListRoles\",\n                \"iam:ListSAMLProviderTags\",\n                \"iam:ListSAMLProviders\",\n                \"iam:ListSSHPublicKeys\",\n                \"iam:ListServerCertificateTags\",\n                \"iam:ListServerCertificates\",\n                \"iam:ListUserPolicies\",\n                \"iam:ListUserTags\",\n                \"iam:ListUsers\",\n                \"iam:ListVirtualMFADevices\",\n                \"identitystore:ListGroupMemberships\",\n                \"identitystore:ListGroups\",\n                \"identitystore:ListUsers\",\n                \"inspector:DescribeAssessmentTemplates\",\n                \"inspector:DescribeFindings\",\n                \"inspector:DescribeRulesPackages\",\n                \"inspector:ListAssessmentRunAgents\",\n                \"inspector:ListAssessmentRuns\",\n                \"inspector:ListAssessmentTemplates\",\n                \"inspector:ListFindings\",\n                \"inspector:ListRulesPackages\",\n                \"iot:DescribeAccountAuditConfiguration\",\n                \"iot:DescribeDomainConfiguration\",\n                \"iot:ListDomainConfigurations\",\n                \"iot:ListTagsForResource\",\n                \"kafka:ListClusters\",\n                \"kendra:DescribeIndex\",\n                \"kendra:ListTagsForResource\",\n                \"kinesis:DescribeStream\",\n                \"kinesis:ListStreams\",\n                \"kinesis:ListTagsForStream\",\n                \"kinesisanalytics:DescribeApplication\",\n                \"kinesisanalytics:ListApplications\",\n                \"kinesisanalytics:ListTagsForResource\",\n                \"kinesisvideo:DescribeNotificationConfiguration\",\n                \"kinesisvideo:ListStreams\",\n                \"kinesisvideo:ListTagsForStream\",\n                \"kms:DescribeKey\",\n                \"kms:GetKeyPolicy\",\n                \"kms:GetKeyRotationStatus\",\n                \"kms:ListAliases\",\n                \"kms:ListKeyPolicies\",\n                \"kms:ListKeys\",\n                \"kms:ListResourceTags\",\n                \"lakeformation:GetDataLakeSettings\",\n                \"lambda:GetFunctionUrlConfig\",\n                \"lambda:GetLayerVersionPolicy\",\n                \"lambda:GetPolicy\",\n                \"lambda:ListCodeSigningConfigs\",\n                \"lambda:ListFunctions\",\n                \"lambda:ListLayerVersions\",\n                \"lambda:ListLayers\",\n                \"lambda:ListTags\",\n                \"lex:DescribeBot\",\n                \"lex:DescribeBotVersion\",\n                \"lex:GetBot\",\n                \"lex:GetBotVersions\",\n                \"lex:GetBots\",\n                \"lex:ListBotVersions\",\n                \"lex:ListBots\",\n                \"lex:ListTagsForResource\",\n                \"lightsail:GetInstances\",\n                \"logs:DescribeLogGroups\",\n                \"logs:DescribeLogStreams\",\n                \"logs:DescribeMetricFilters\",\n                \"logs:DescribeSubscriptionFilters\",\n                \"logs:GetLogEvents\",\n                \"logs:ListTagsLogGroup\",\n                \"macie2:GetClassificationExportConfiguration\",\n                \"macie2:GetFindingsPublicationConfiguration\",\n                \"macie2:GetMacieSession\",\n                \"macie2:GetRevealConfiguration\",\n                \"mediastore:GetContainerPolicy\",\n                \"mediastore:GetCorsPolicy\",\n                \"mediastore:ListContainers\",\n                \"mediastore:ListTagsForResource\"\n              ],\n              \"Resource\": \"*\"\n            }\n          ]\n        }\n      }\n    }\n  },\n  \"Outputs\": {\n    \"PrismaCloudRoleARN\": {\n      \"Description\": \"Information about the value\",\n      \"Value\": {\n        \"Fn::GetAtt\": [\n          \"PrismaCloudRole\",\n          \"Arn\"\n        ]\n      }\n    }\n  }\n}"
      },
      "Type": "AWS::CloudFormation::StackSet"
    },
    "PrismaCloudRole": {
      "Type": "AWS::IAM::Role",
      "Properties": {
        "ManagedPolicyArns": [
          {
            "Fn::Join": [
              "",
              [
                "arn:aws:iam::aws:policy/SecurityAudit"
              ]
            ]
          },
          {
            "Fn::Join": [
              "",
              [
                "arn:aws:iam::",
                {
                  "Ref": "AWS::AccountId"
                },
                ":policy/",
                "prisma_cloud_1-123456789012345678",
                "-",
                {
                  "Ref": "PrismaCloudRoleName"
                }
              ]
            ]
          },
          {
            "Fn::Join": [
              "",
              [
                "arn:aws:iam::",
                {
                  "Ref": "AWS::AccountId"
                },
                ":policy/",
                "prisma_cloud_2-123456789012345678",
                "-",
                {
                  "Ref": "PrismaCloudRoleName"
                }
              ]
            ]
          },
          {
            "Fn::Join": [
              "",
              [
                "arn:aws:iam::",
                {
                  "Ref": "AWS::AccountId"
                },
                ":policy/",
                "prisma_cloud_3-123456789012345678",
                "-",
                {
                  "Ref": "PrismaCloudRoleName"
                }
              ]
            ]
          },
          {
            "Fn::Join": [
              "",
              [
                "arn:aws:iam::",
                {
                  "Ref": "AWS::AccountId"
                },
                ":policy/",
                "prisma_cloud_4-123456789012345678",
                "-",
                {
                  "Ref": "PrismaCloudRoleName"
                }
              ]
            ]
          },
          {
            "Fn::Join": [
              "",
              [
                "arn:aws:iam::",
                {
                  "Ref": "AWS::AccountId"
                },
                ":policy/",
                "prisma_cloud_5-123456789012345678",
                "-",
                {
                  "Ref": "PrismaCloudRoleName"
                }
              ]
            ]
          }
        ],
        "MaxSessionDuration": 43200,
        "AssumeRolePolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Principal": {
                "AWS": [
                  "arn:aws:iam::188619942792:root"
                ]
              },
              "Action": [
                "sts:AssumeRole"
              ],
              "Condition": {
                "StringEquals": {
                  "sts:ExternalId": "a1ea8fe3-85d8-4ed9-93da-02d68670bc61"
                }
              }
            }
          ]
        },
        "RoleName": {
          "Ref": "PrismaCloudRoleName"
        }
      },
      "DependsOn": [
        "prismacloud5",
        "prismacloud1",
        "prismacloud2",
        "prismacloud3",
        "prismacloud4"
      ]
    },
    "prismacloud1": {
      "Type": "AWS::IAM::ManagedPolicy",
      "Properties": {
        "ManagedPolicyName": {
          "Fn::Join": [
            "",
            [
              "prisma_cloud_1-123456789012345678",
              "-",
              {
                "Ref": "PrismaCloudRoleName"
              }
            ]
          ]
        },
        "PolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Sid": "PrismaCloudFlowlogs1",
              "Effect": "Allow",
              "Action": [
                "logs:GetLogEvents"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudAuditEventsCloudTrail1",
              "Effect": "Allow",
              "Action": [
                "cloudtrail:LookupEvents"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudPCCAgentlessSSM6",
              "Effect": "Allow",
              "Action": [
                "ssm:GetParameter",
                "ssm:GetParameters"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudEBOrganizationManagementPermissions1",
              "Effect": "Allow",
              "Action": [
                "organizations:ListRoots"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudPCCAgentlessSTS7",
              "Effect": "Allow",
              "Action": [
                "sts:DecodeAuthorizationMessage",
                "sts:GetCallerIdentity"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudElasticBeanstalk4",
              "Effect": "Allow",
              "Action": [
                "s3:GetObject"
              ],
              "Resource": {
                "Fn::Join": [
                  "",
                  [
                    "arn:",
                    {
                      "Ref": "AWS::Partition"
                    },
                    ":s3:::elasticbeanstalk-*/*"
                  ]
                ]
              }
            },
            {
              "Sid": "PrismaCloudGuardduty1",
              "Effect": "Allow",
              "Action": [
                "guardduty:GetDetector",
                "guardduty:GetFindings",
                "guardduty:ListDetectors",
                "guardduty:ListFindings"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudPCCAgentlessKMS5",
              "Effect": "Allow",
              "Action": [
                "kms:CreateGrant",
                "kms:Decrypt",
                "kms:DescribeKey",
                "kms:Encrypt",
                "kms:GenerateDataKeyWithoutPlaintext",
                "kms:ReEncryptFrom",
                "kms:ReEncryptTo"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudPCCAgentlessNetworkActions9",
              "Effect": "Allow",
              "Action": [
                "ec2:CreateInternetGateway",
                "ec2:CreateSubnet",
                "ec2:CreateVpc"
              ],
              "Condition": {
                "StringEquals": {
                  "aws:RequestTag/created-by": "prismacloud-agentless-scan"
                }
              },
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudComputeAgentless1",
              "Effect": "Allow",
              "Action": [
                "ec2:CreateRoute",
                "ec2:DeleteNetworkInterface",
                "ec2:DescribeInternetGateways",
                "ec2:DescribeNetworkInterfaces",
                "ec2:DescribeRouteTables",
                "ec2:DescribeVpcs"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudPCCAgentlessServiceLinkedRole4",
              "Effect": "Allow",
              "Action": [
                "iam:CreateServiceLinkedRole"
              ],
              "Condition": {
                "StringLike": {
                  "iam:AWSServiceName": "spot.amazonaws.com"
                }
              },
              "Resource": [
                {
                  "Fn::Join": [
                    "",
                    [
                      "arn:",
                      {
                        "Ref": "AWS::Partition"
                      },
                      ":iam::*:role/aws-service-role/spot.amazonaws.com/*"
                    ]
                  ]
                }
              ]
            },
            {
              "Sid": "PrismaCloudBridgecrew1",
              "Effect": "Allow",
              "Action": [
                "cloudformation:DescribeStackResources",
                "cloudformation:GetTemplate",
                "cloudformation:ListStacks",
                "lambda:GetEventSourceMapping",
                "lambda:GetFunction",
                "lambda:GetLayerVersion",
                "s3:ListBucket",
                "sns:GetSubscriptionAttributes"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudEBRuleStatusPermissions3",
              "Effect": "Allow",
              "Action": [
                "cloudtrail:DescribeTrails",
                "cloudtrail:GetEventSelectors",
                "cloudtrail:GetTrailStatus",
                "ec2:DescribeRegions",
                "events:DescribeApiDestination",
                "events:DescribeConnection",
                "events:DescribeRule",
                "events:ListTargetsByRule"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudPCCAgentlessRW3",
              "Effect": "Allow",
              "Action": [
                "ec2:CreateSnapshot",
                "ec2:CreateSnapshots",
                "ec2:DescribeInstanceStatus",
                "ec2:DescribeInstances",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSnapshots",
                "ec2:DescribeSubnets",
                "ec2:DescribeVolumes",
                "ec2:RunInstances",
                "iam:SimulatePrincipalPolicy"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudInspector1",
              "Effect": "Allow",
              "Action": [
                "inspector:DescribeAssessmentTemplates",
                "inspector:DescribeFindings",
                "inspector:DescribeRulesPackages",
                "inspector:ListAssessmentRunAgents",
                "inspector:ListAssessmentRuns",
                "inspector:ListAssessmentTemplates",
                "inspector:ListFindings",
                "inspector:ListRulesPackages"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudEBRuleManagementPermissions2",
              "Effect": "Allow",
              "Action": [
                "events:DeleteRule",
                "events:DisableRule",
                "events:EnableRule",
                "events:PutRule",
                "events:RemoveTargets"
              ],
              "Resource": [
                {
                  "Fn::Join": [
                    "",
                    [
                      "arn:",
                      {
                        "Ref": "AWS::Partition"
                      },
                      ":events:*:",
                      {
                        "Ref": "AWS::AccountId"
                      },
                      ":rule/",
                      {
                        "Fn::FindInMap": [
                          "EventBridgeMap",
                          "EventBridgeRuleNamePrefix",
                          "Value"
                        ]
                      }
                    ]
                  ]
                }
              ]
            },
            {
              "Sid": "PrismaCloudPCCAgentlessRM2",
              "Effect": "Allow",
              "Action": [
                "ec2:AttachInternetGateway",
                "ec2:CreateSubnet",
                "ec2:DeleteInternetGateway",
                "ec2:DeleteSnapshot",
                "ec2:DeleteSubnet",
                "ec2:DeleteVpc",
                "ec2:DetachInternetGateway",
                "ec2:ModifySnapshotAttribute",
                "ec2:TerminateInstances"
              ],
              "Condition": {
                "StringEquals": {
                  "ec2:ResourceTag/created-by": "prismacloud-agentless-scan"
                }
              },
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudComputeServerlessScan1",
              "Effect": "Allow",
              "Action": [
                "ec2:DescribeImages",
                "iam:GetPolicy",
                "iam:GetPolicyVersion",
                "iam:GetRole",
                "iam:GetRolePolicy",
                "iam:ListAttachedRolePolicies",
                "iam:ListRolePolicies",
                "iam:SimulatePrincipalPolicy",
                "kms:Decrypt",
                "lambda:DeleteLayerVersion",
                "lambda:GetFunction",
                "lambda:GetFunctionConfiguration",
                "lambda:GetLayerVersion",
                "lambda:ListFunctions",
                "lambda:ListLayerVersions",
                "lambda:ListLayers",
                "lambda:PublishLayerVersion",
                "lambda:UpdateFunctionConfiguration"
              ],
              "Resource": "*"
            }
          ]
        }
      }
    },
    "prismacloud2": {
      "Type": "AWS::IAM::ManagedPolicy",
      "Properties": {
        "ManagedPolicyName": {
          "Fn::Join": [
            "",
            [
              "prisma_cloud_2-123456789012345678",
              "-",
              {
                "Ref": "PrismaCloudRoleName"
              }
            ]
          ]
        },
        "PolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Sid": "PrismaCloudPCCAgentlessTags8",
              "Effect": "Allow",
              "Action": [
                "ec2:CreateTags"
              ],
              "Condition": {
                "StringEquals": {
                  "aws:RequestTag/created-by": "prismacloud-agentless-scan"
                }
              },
              "Resource": [
                {
                  "Fn::Join": [
                    "",
                    [
                      "arn:",
                      {
                        "Ref": "AWS::Partition"
                      },
                      ":ec2:*::snapshot/*"
                    ]
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    [
                      "arn:",
                      {
                        "Ref": "AWS::Partition"
                      },
                      ":ec2:*:*:instance/*"
                    ]
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    [
                      "arn:",
                      {
                        "Ref": "AWS::Partition"
                      },
                      ":ec2:*:*:vpc/*"
                    ]
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    [
                      "arn:",
                      {
                        "Ref": "AWS::Partition"
                      },
                      ":ec2:*:*:subnet/*"
                    ]
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    [
                      "arn:",
                      {
                        "Ref": "AWS::Partition"
                      },
                      ":ec2:*:*:internet-gateway/*"
                    ]
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    [
                      "arn:",
                      {
                        "Ref": "AWS::Partition"
                      },
                      ":ec2:*:*:volume/*"
                    ]
                  ]
                }
              ]
            },
            {
              "Sid": "PrismaCloudRemediation1",
              "Effect": "Allow",
              "Action": [
                "acm:UpdateCertificateOptions",
                "cloudtrail:StartLogging",
                "cloudtrail:UpdateTrail",
                "ec2:ModifyImageAttribute",
                "ec2:ModifySnapshotAttribute",
                "ec2:ModifySubnetAttribute",
                "ec2:RevokeSecurityGroupEgress",
                "ec2:RevokeSecurityGroupIngress",
                "ecs:UpdateClusterSettings",
                "eks:UpdateClusterConfig",
                "elasticache:ModifyReplicationGroup",
                "elasticloadbalancing:ModifyLoadBalancerAttributes",
                "iam:UpdateAccountPasswordPolicy",
                "kms:EnableKeyRotation",
                "lambda:UpdateFunctionConfiguration",
                "rds:ModifyDBCluster",
                "rds:ModifyDBClusterSnapshotAttribute",
                "rds:ModifyDBInstance",
                "rds:ModifyDBSnapshotAttribute",
                "rds:ModifyEventSubscription",
                "redshift:ModifyCluster",
                "s3:PutBucketAcl",
                "s3:PutBucketPublicAccessBlock",
                "s3:PutBucketVersioning"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudComputeDiscovery1",
              "Effect": "Allow",
              "Action": [
                "apigateway:GET",
                "cloudfront:ListDistributions",
                "cloudwatch:DescribeAlarms",
                "ec2:DescribeTags",
                "elasticloadbalancing:DescribeListenerCertificates",
                "elasticloadbalancing:DescribeListeners",
                "elasticloadbalancing:DescribeRules",
                "elasticloadbalancing:DescribeTargetGroups",
                "events:ListRules",
                "iam:GetPolicy",
                "iam:GetPolicyVersion",
                "iam:GetRole",
                "iam:GetRolePolicy",
                "iam:ListAttachedRolePolicies",
                "iam:ListRolePolicies",
                "kms:Decrypt",
                "lambda:GetFunction",
                "lambda:GetFunctionConfiguration",
                "lambda:GetFunctionUrlConfig",
                "lambda:GetPolicy",
                "lambda:ListAliases",
                "lambda:ListEventSourceMappings",
                "lambda:ListFunctions",
                "logs:DescribeSubscriptionFilters",
                "s3:GetBucketNotification",
                "secretsmanager:GetSecretValue",
                "ssm:GetParameter"
              ],
              "Resource": "*"
            },
            {
              "Sid": "PrismaCloudComputeAutoProtect1",
              "Effect": "Allow",
              "Action": [
                "ec2:AuthorizeSecurityGroupEgress",
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:CreateSecurityGroup",
                "ec2:CreateTags",
                "ec2:DeleteSecurityGroup",
                "ec2:DescribeImages",
                "ec2:DescribeInstanceTypeOfferings",
                "ec2:DescribeInstances",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSubnets",
                "ec2:DescribeVpcs",
                "ec2:RevokeSecurityGroupEgress",
                "ec2:RunInstances",
                "ec2:TerminateInstances",
                "ecr:BatchCheckLayerAvailability",
                "ecr:BatchGetImage",
                "ecr:DescribeImageScanFindings",
                "ecr:DescribeImages",
                "ecr:DescribeRepositories",
                "ecr:GetAuthorizationToken",
                "ecr:GetDownloadUrlForLayer",
                "ecr:GetLifecyclePolicy",
                "ecr:GetLifecyclePolicyPreview",
                "ecr:GetRepositoryPolicy",
                "ecr:ListImages",
                "ecr:ListTagsForResource",
                "lambda:GetFunctionConfiguration",
                "lambda:GetLayerVersion",
                "logs:GetQueryResults",
                "logs:StartQuery",
                "securityhub:BatchImportFindings",
                "ssm:CancelCommand",
                "ssm:CreateAssociation",
                "ssm:DescribeInstanceInformation",
                "ssm:ListCommandInvocations",
                "ssm:SendCommand"
              ],
              "Resource": "*"
            }
          ]
        }
      }
    },
    "prismacloud3": {
      "Type": "AWS::IAM::ManagedPolicy",
      "Properties": {
        "ManagedPolicyName": {
          "Fn::Join": [
            "",
            [
              "prisma_cloud_3-123456789012345678",
              "-",
              {
                "Ref": "PrismaCloudRoleName"
              }
            ]
          ]
        },
        "PolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Sid": "PrismaCloudConfig3",
              "Effect": "Allow",
              "Action": [
                "memorydb:DescribeClusters",
                "memorydb:DescribeParameterGroups",
                "memorydb:DescribeParameters",
                "memorydb:ListTags",
                "mobiletargeting:GetApps",
                "mobiletargeting:GetEmailChannel",
                "mobiletargeting:GetSmsChannel",
                "mq:DescribeBroker",
                "mq:ListBrokers",
                "organizations:DescribeAccount",
                "organizations:DescribeOrganization",
                "organizations:DescribeOrganizationalUnit",
                "organizations:DescribePolicy",
                "organizations:ListAccounts",
                "organizations:ListAccountsForParent",
                "organizations:ListChildren",
                "organizations:ListOrganizationalUnitsForParent",
                "organizations:ListParents",
                "organizations:ListPolicies",
                "organizations:ListPoliciesForTarget",
                "organizations:ListRoots",
                "organizations:ListTagsForResource",
                "qldb:DescribeLedger",
                "qldb:ListLedgers",
                "qldb:ListTagsForResource",
                "quicksight:DescribeAccountSettings",
                "quicksight:ListDataSets",
                "quicksight:ListDataSources",
                "quicksight:ListTagsForResource",
                "ram:GetResourceShares",
                "ram:ListPrincipals",
                "ram:ListResources",
                "rds:DescribeDBClusterParameterGroups",
                "rds:DescribeDBClusterParameters",
                "rds:DescribeDBClusterSnapshotAttributes",
                "rds:DescribeDBClusterSnapshots",
                "rds:DescribeDBClusters",
                "rds:DescribeDBInstances",
                "rds:DescribeDBParameterGroups",
                "rds:DescribeDBParameters",
                "rds:DescribeDBSnapshotAttributes",
                "rds:DescribeDBSnapshots",
                "rds:DescribeEventSubscriptions",
                "rds:DescribeOptionGroups",
                "rds:ListTagsForResource",
                "redshift:DescribeClusterParameters",
                "redshift:DescribeClusters",
                "redshift:DescribeLoggingStatus",
                "route53:ListHostedZones",
                "route53:ListQueryLoggingConfigs",
                "route53:ListResourceRecordSets",
                "route53:ListTagsForResource",
                "route53domains:GetDomainDetail",
                "route53domains:ListDomains",
                "route53domains:ListTagsForDomain",
                "route53resolver:ListResolverQueryLogConfigAssociations",
                "route53resolver:ListResolverQueryLogConfigs",
                "route53resolver:ListTagsForResource",
                "s3:DescribeJob",
                "s3:GetAccessPoint",
                "s3:GetAccessPointPolicy",
                "s3:GetAccessPointPolicyStatus",
                "s3:GetAccountPublicAccessBlock",
                "s3:GetBucketAcl",
                "s3:GetBucketCORS",
                "s3:GetBucketLocation",
                "s3:GetBucketLogging",
                "s3:GetBucketOwnershipControls",
                "s3:GetBucketPolicy",
                "s3:GetBucketPolicyStatus",
                "s3:GetBucketPublicAccessBlock",
                "s3:GetBucketTagging",
                "s3:GetBucketVersioning",
                "s3:GetBucketWebsite",
                "s3:GetEncryptionConfiguration",
                "s3:GetJobTagging",
                "s3:GetLifecycleConfiguration",
                "s3:GetReplicationConfiguration",
                "s3:ListAccessPoints",
                "s3:ListAllMyBuckets",
                "s3:ListJobs",
                "sagemaker:DescribeDomain",
                "sagemaker:DescribeEndpoint",
                "sagemaker:DescribeEndpointConfig",
                "sagemaker:DescribeModel",
                "sagemaker:DescribeNotebookInstance",
                "sagemaker:DescribeTrainingJob",
                "sagemaker:DescribeUserProfile",
                "sagemaker:ListDomains",
                "sagemaker:ListEndpointConfigs",
                "sagemaker:ListEndpoints",
                "sagemaker:ListModels",
                "sagemaker:ListNotebookInstances",
                "sagemaker:ListTags",
                "sagemaker:ListTrainingJobs",
                "sagemaker:ListUserProfiles",
                "secretsmanager:DescribeSecret",
                "secretsmanager:GetResourcePolicy",
                "secretsmanager:ListSecrets",
                "ses:GetIdentityDkimAttributes",
                "ses:GetIdentityPolicies",
                "ses:ListIdentities",
                "ses:ListIdentityPolicies",
                "shield:GetSubscriptionState",
                "shield:ListProtectionGroups",
                "shield:ListProtections",
                "shield:ListResourcesInProtectionGroup",
                "shield:ListTagsForResource",
                "sns:GetTopicAttributes",
                "sns:ListPlatformApplications",
                "sns:ListSubscriptions",
                "sns:ListTagsForResource",
                "sns:ListTopics",
                "sqs:GetQueueAttributes",
                "sqs:ListQueueTags",
                "sqs:ListQueues",
                "ssm:DescribeAssociation",
                "ssm:DescribeDocument",
                "ssm:DescribeDocumentPermission",
                "ssm:DescribeInstanceInformation",
                "ssm:DescribeParameters",
                "ssm:GetDocument",
                "ssm:GetInventory",
                "ssm:GetParameters",
                "ssm:ListAssociations",
                "ssm:ListDocuments",
                "ssm:ListTagsForResource",
                "sso:DescribePermissionSet",
                "sso:ListAccountAssignments",
                "sso:ListAccountsForProvisionedPermissionSet",
                "sso:ListInstances",
                "sso:ListPermissionSets",
                "states:DescribeStateMachine",
                "states:ListStateMachines",
                "states:ListTagsForResource",
                "storagegateway:DescribeCachediSCSIVolumes",
                "storagegateway:DescribeGatewayInformation",
                "storagegateway:DescribeNFSFileShares",
                "storagegateway:DescribeSMBFileShares",
                "storagegateway:DescribeSMBSettings",
                "storagegateway:DescribeTapes",
                "storagegateway:ListFileShares",
                "storagegateway:ListGateways",
                "storagegateway:ListTapes",
                "storagegateway:ListVolumes",
                "transcribe:ListLanguageModels",
                "transcribe:ListTagsForResource",
                "transfer:DescribeAccess",
                "transfer:DescribeServer",
                "transfer:ListAccesses",
                "transfer:ListServers",
                "translate:GetTerminology",
                "translate:ListTerminologies",
                "waf-regional:GetLoggingConfiguration",
                "waf-regional:GetWebACL",
                "waf-regional:ListResourcesForWebACL",
                "waf-regional:ListTagsForResource",
                "waf-regional:ListWebACLs",
                "waf:GetLoggingConfiguration",
                "waf:GetWebACL",
                "waf:ListTagsForResource",
                "waf:ListWebACLs",
                "wafv2:GetLoggingConfiguration",
                "wafv2:GetWebACL",
                "wafv2:ListResourcesForWebACL",
                "wafv2:ListTagsForResource",
                "wafv2:ListWebACLs",
                "workspaces:DescribeIpGroups",
                "workspaces:DescribeTags",
                "workspaces:DescribeWorkspaceBundles",
                "workspaces:DescribeWorkspaceDirectories",
                "workspaces:DescribeWorkspaces",
                "xray:GetEncryptionConfig"
              ],
              "Resource": "*"
            }
          ]
        }
      }
    },
    "prismacloud4": {
      "Type": "AWS::IAM::ManagedPolicy",
      "Properties": {
        "ManagedPolicyName": {
          "Fn::Join": [
            "",
            [
              "prisma_cloud_4-123456789012345678",
              "-",
              {
                "Ref": "PrismaCloudRoleName"
              }
            ]
          ]
        },
        "PolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Sid": "PrismaCloudConfig1",
              "Effect": "Allow",
              "Action": [
                "access-analyzer:GetAnalyzer",
                "access-analyzer:ListAnalyzers",
                "account:GetAlternateContact",
                "acm-pca:GetPolicy",
                "acm-pca:ListCertificateAuthorities",
                "acm-pca:ListTags",
                "acm:DescribeCertificate",
                "acm:ListCertificates",
                "acm:ListTagsForCertificate",
                "airflow:GetEnvironment",
                "airflow:ListEnvironments",
                "amplify:ListApps",
                "apigateway:GET",
                "appflow:DescribeFlow",
                "appflow:ListFlows",
                "appmesh:DescribeMesh",
                "appmesh:DescribeVirtualGateway",
                "appmesh:ListMeshes",
                "appmesh:ListTagsForResource",
                "appmesh:ListVirtualGateways",
                "apprunner:DescribeAutoScalingConfiguration",
                "apprunner:DescribeCustomDomains",
                "apprunner:DescribeService",
                "apprunner:ListAutoScalingConfigurations",
                "apprunner:ListServices",
                "apprunner:ListTagsForResource",
                "appstream:DescribeFleets",
                "appstream:DescribeImages",
                "appstream:DescribeStacks",
                "appstream:DescribeUsageReportSubscriptions",
                "appstream:ListTagsForResource",
                "appsync:GetGraphqlApi",
                "appsync:ListGraphqlApis",
                "aps:DescribeLoggingConfiguration",
                "aps:ListWorkspaces",
                "athena:GetWorkGroup",
                "athena:ListWorkGroups",
                "autoscaling:DescribeAutoScalingGroups",
                "autoscaling:DescribeLaunchConfigurations",
                "backup:GetBackupVaultAccessPolicy",
                "backup:ListBackupVaults",
                "backup:ListTags",
                "batch:DescribeComputeEnvironments",
                "chime:GetVoiceConnectorLoggingConfiguration",
                "chime:ListVoiceConnectors",
                "cloud9:DescribeEnvironmentMemberships",
                "cloud9:DescribeEnvironments",
                "cloud9:ListEnvironments",
                "cloud9:ListTagsForResource",
                "cloudformation:DescribeStackResources",
                "cloudformation:DescribeStacks",
                "cloudformation:GetStackPolicy",
                "cloudformation:GetTemplate",
                "cloudformation:ListStackResources",
                "cloudformation:ListStacks",
                "cloudfront:GetDistribution",
                "cloudfront:GetDistributionConfig",
                "cloudfront:ListDistributions",
                "cloudfront:ListOriginAccessControls",
                "cloudfront:ListTagsForResource",
                "cloudsearch:DescribeDomains",
                "cloudtrail:DescribeTrails",
                "cloudtrail:GetEventSelectors",
                "cloudtrail:GetTrailStatus",
                "cloudtrail:ListTags",
                "cloudwatch:DescribeAlarms",
                "cloudwatch:DescribeInsightRules",
                "cloudwatch:ListTagsForResource",
                "codeartifact:DescribeDomain",
                "codeartifact:DescribeRepository",
                "codeartifact:GetDomainPermissionsPolicy",
                "codeartifact:GetRepositoryPermissionsPolicy",
                "codeartifact:ListDomains",
                "codeartifact:ListRepositories",
                "codeartifact:ListTagsForResource",
                "codebuild:BatchGetProjects",
                "codebuild:ListProjects",
                "codepipeline:GetPipeline",
                "codepipeline:ListPipelines",
                "codepipeline:ListTagsForResource",
                "cognito-identity:DescribeIdentityPool",
                "cognito-identity:ListIdentityPools",
                "cognito-identity:ListTagsForResource",
                "cognito-idp:ListResourcesForWebACL",
                "cognito-idp:ListTagsForResource",
                "cognito-idp:ListUserPools",
                "config:DescribeConfigRules",
                "config:DescribeConfigurationRecorderStatus",
                "config:DescribeConfigurationRecorders",
                "config:DescribeDeliveryChannels",
                "config:GetComplianceDetailsByConfigRule",
                "config:ListTagsForResource",
                "connect:ListInstanceAttributes",
                "connect:ListInstanceStorageConfigs",
                "connect:ListInstances",
                "databrew:DescribeJob",
                "databrew:ListJobs",
                "datapipeline:DescribePipelines",
                "datapipeline:GetPipelineDefinition",
                "datapipeline:ListPipelines",
                "datasync:DescribeLocationEfs",
                "datasync:DescribeLocationFsxLustre",
                "datasync:DescribeLocationFsxOntap",
                "datasync:DescribeLocationFsxOpenZfs",
                "datasync:DescribeLocationFsxWindows",
                "datasync:DescribeLocationHdfs",
                "datasync:DescribeLocationNfs",
                "datasync:DescribeLocationObjectStorage",
                "datasync:DescribeLocationS3",
                "datasync:DescribeLocationSmb",
                "datasync:ListLocations",
                "datasync:ListTagsForResource",
                "datasync:ListTasks",
                "dax:DescribeClusters",
                "dax:ListTags",
                "devops-guru:DescribeServiceIntegration",
                "directconnect:DescribeConnections",
                "directconnect:DescribeDirectConnectGateways",
                "directconnect:DescribeVirtualInterfaces",
                "dms:DescribeCertificates",
                "dms:DescribeEndpoints",
                "dms:DescribeReplicationInstances",
                "dms:ListTagsForResource",
                "ds:DescribeDirectories",
                "ds:ListTagsForResource",
                "dynamodb:DescribeTable",
                "dynamodb:ListTables",
                "dynamodb:ListTagsOfResource",
                "ec2:DescribeAccountAttributes",
                "ec2:DescribeAddresses",
                "ec2:DescribeClientVpnAuthorizationRules",
                "ec2:DescribeClientVpnEndpoints",
                "ec2:DescribeDhcpOptions",
                "ec2:DescribeFlowLogs",
                "ec2:DescribeImages",
                "ec2:DescribeInstanceAttribute",
                "ec2:DescribeInstanceStatus",
                "ec2:DescribeInstances",
                "ec2:DescribeInternetGateways",
                "ec2:DescribeKeyPairs",
                "ec2:DescribeManagedPrefixLists",
                "ec2:DescribeNatGateways",
                "ec2:DescribeNetworkAcls",
                "ec2:DescribeNetworkInterfaceAttribute",
                "ec2:DescribeNetworkInterfaces",
                "ec2:DescribeRegions",
                "ec2:DescribeRouteTables",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSnapshotAttribute",
                "ec2:DescribeSnapshots",
                "ec2:DescribeSubnets",
                "ec2:DescribeTags",
                "ec2:DescribeTransitGatewayAttachments",
                "ec2:DescribeTransitGatewayRouteTables",
                "ec2:DescribeTransitGatewayVpcAttachments",
                "ec2:DescribeTransitGateways",
                "ec2:DescribeVolumes",
                "ec2:DescribeVpcEndpointServiceConfigurations",
                "ec2:DescribeVpcEndpointServices",
                "ec2:DescribeVpcEndpoints",
                "ec2:DescribeVpcPeeringConnections",
                "ec2:DescribeVpcs",
                "ec2:DescribeVpnConnections",
                "ec2:DescribeVpnGateways",
                "ec2:GetEbsEncryptionByDefault",
                "ec2:GetManagedPrefixListEntries",
                "ec2:SearchTransitGatewayRoutes",
                "ecr-public:DescribeRepositories",
                "ecr-public:GetRepositoryCatalogData",
                "ecr-public:GetRepositoryPolicy",
                "ecr-public:ListTagsForResource",
                "ecr:DescribeImages",
                "ecr:DescribePullThroughCacheRules",
                "ecr:DescribeRegistry",
                "ecr:DescribeRepositories",
                "ecr:GetLifecyclePolicy",
                "ecr:GetRegistryPolicy",
                "ecr:GetRegistryScanningConfiguration",
                "ecr:GetRepositoryPolicy",
                "ecr:ListTagsForResource",
                "ecs:DescribeClusters"
              ],
              "Resource": "*"
            }
          ]
        }
      }
    },
    "prismacloud5": {
      "Type": "AWS::IAM::ManagedPolicy",
      "Properties": {
        "ManagedPolicyName": {
          "Fn::Join": [
            "",
            [
              "prisma_cloud_5-123456789012345678",
              "-",
              {
                "Ref": "PrismaCloudRoleName"
              }
            ]
          ]
        },
        "PolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Sid": "PrismaCloudConfig2",
              "Effect": "Allow",
              "Action": [
                "ecs:DescribeContainerInstances",
                "ecs:DescribeServices",
                "ecs:DescribeTaskDefinition",
                "ecs:DescribeTasks",
                "ecs:ListClusters",
                "ecs:ListContainerInstances",
                "ecs:ListServices",
                "ecs:ListTagsForResource",
                "ecs:ListTaskDefinitions",
                "ecs:ListTasks",
                "eks:DescribeCluster",
                "eks:DescribeFargateProfile",
                "eks:DescribeNodegroup",
                "eks:ListClusters",
                "eks:ListFargateProfiles",
                "eks:ListNodegroups",
                "eks:ListTagsForResource",
                "elasticache:DescribeCacheClusters",
                "elasticache:DescribeCacheEngineVersions",
                "elasticache:DescribeCacheSubnetGroups",
                "elasticache:DescribeReplicationGroups",
                "elasticache:DescribeReservedCacheNodes",
                "elasticache:DescribeSnapshots",
                "elasticache:ListTagsForResource",
                "elasticbeanstalk:DescribeConfigurationSettings",
                "elasticbeanstalk:DescribeEnvironmentResources",
                "elasticbeanstalk:DescribeEnvironments",
                "elasticbeanstalk:ListTagsForResource",
                "elasticfilesystem:DescribeFileSystemPolicy",
                "elasticfilesystem:DescribeFileSystems",
                "elasticfilesystem:DescribeMountTargetSecurityGroups",
                "elasticfilesystem:DescribeMountTargets",
                "elasticfilesystem:DescribeTags",
                "elasticloadbalancing:DescribeListeners",
                "elasticloadbalancing:DescribeLoadBalancerAttributes",
                "elasticloadbalancing:DescribeLoadBalancerPolicies",
                "elasticloadbalancing:DescribeLoadBalancers",
                "elasticloadbalancing:DescribeSSLPolicies",
                "elasticloadbalancing:DescribeTags",
                "elasticloadbalancing:DescribeTargetGroups",
                "elasticloadbalancing:DescribeTargetHealth",
                "elasticmapreduce:DescribeCluster",
                "elasticmapreduce:DescribeSecurityConfiguration",
                "elasticmapreduce:GetBlockPublicAccessConfiguration",
                "elasticmapreduce:ListClusters",
                "elasticmapreduce:ListSecurityConfigurations",
                "es:DescribeElasticsearchDomains",
                "es:ListDomainNames",
                "es:ListTags",
                "events:ListEventBuses",
                "events:ListRules",
                "events:ListTagsForResource",
                "events:ListTargetsByRule",
                "firehose:DescribeDeliveryStream",
                "firehose:ListDeliveryStreams",
                "firehose:ListTagsForDeliveryStream",
                "forecast:DescribeAutoPredictor",
                "forecast:DescribeDataset",
                "forecast:DescribePredictor",
                "forecast:ListDatasets",
                "forecast:ListPredictors",
                "forecast:ListTagsForResource",
                "fsx:DescribeFileSystems",
                "glacier:GetVaultAccessPolicy",
                "glacier:GetVaultLock",
                "glacier:ListTagsForVault",
                "glacier:ListVaults",
                "globalaccelerator:DescribeAcceleratorAttributes",
                "globalaccelerator:ListAccelerators",
                "globalaccelerator:ListTagsForResource",
                "glue:GetConnection",
                "glue:GetConnections",
                "glue:GetDataCatalogEncryptionSettings",
                "glue:GetDatabases",
                "glue:GetSecurityConfigurations",
                "grafana:DescribeWorkspace",
                "grafana:DescribeWorkspaceAuthentication",
                "grafana:ListWorkspaces",
                "guardduty:GetDetector",
                "guardduty:GetFindings",
                "guardduty:GetMasterAccount",
                "guardduty:ListDetectors",
                "guardduty:ListFindings",
                "iam:GenerateCredentialReport",
                "iam:GenerateServiceLastAccessedDetails",
                "iam:GetAccountAuthorizationDetails",
                "iam:GetAccountPasswordPolicy",
                "iam:GetAccountSummary",
                "iam:GetCredentialReport",
                "iam:GetGroupPolicy",
                "iam:GetOpenIDConnectProvider",
                "iam:GetPolicyVersion",
                "iam:GetRole",
                "iam:GetRolePolicy",
                "iam:GetSAMLProvider",
                "iam:GetServiceLastAccessedDetails",
                "iam:GetUserPolicy",
                "iam:ListAccessKeys",
                "iam:ListAttachedGroupPolicies",
                "iam:ListAttachedRolePolicies",
                "iam:ListAttachedUserPolicies",
                "iam:ListEntitiesForPolicy",
                "iam:ListGroupPolicies",
                "iam:ListGroups",
                "iam:ListGroupsForUser",
                "iam:ListInstanceProfilesForRole",
                "iam:ListMFADeviceTags",
                "iam:ListMFADevices",
                "iam:ListOpenIDConnectProviders",
                "iam:ListPolicies",
                "iam:ListPolicyTags",
                "iam:ListPolicyVersions",
                "iam:ListRolePolicies",
                "iam:ListRoleTags",
                "iam:ListRoles",
                "iam:ListSAMLProviderTags",
                "iam:ListSAMLProviders",
                "iam:ListSSHPublicKeys",
                "iam:ListServerCertificateTags",
                "iam:ListServerCertificates",
                "iam:ListUserPolicies",
                "iam:ListUserTags",
                "iam:ListUsers",
                "iam:ListVirtualMFADevices",
                "identitystore:ListGroupMemberships",
                "identitystore:ListGroups",
                "identitystore:ListUsers",
                "inspector:DescribeAssessmentTemplates",
                "inspector:DescribeFindings",
                "inspector:DescribeRulesPackages",
                "inspector:ListAssessmentRunAgents",
                "inspector:ListAssessmentRuns",
                "inspector:ListAssessmentTemplates",
                "inspector:ListFindings",
                "inspector:ListRulesPackages",
                "iot:DescribeAccountAuditConfiguration",
                "iot:DescribeDomainConfiguration",
                "iot:ListDomainConfigurations",
                "iot:ListTagsForResource",
                "kafka:ListClusters",
                "kendra:DescribeIndex",
                "kendra:ListTagsForResource",
                "kinesis:DescribeStream",
                "kinesis:ListStreams",
                "kinesis:ListTagsForStream",
                "kinesisanalytics:DescribeApplication",
                "kinesisanalytics:ListApplications",
                "kinesisanalytics:ListTagsForResource",
                "kinesisvideo:DescribeNotificationConfiguration",
                "kinesisvideo:ListStreams",
                "kinesisvideo:ListTagsForStream",
                "kms:DescribeKey",
                "kms:GetKeyPolicy",
                "kms:GetKeyRotationStatus",
                "kms:ListAliases",
                "kms:ListKeyPolicies",
                "kms:ListKeys",
                "kms:ListResourceTags",
                "lakeformation:GetDataLakeSettings",
                "lambda:GetFunctionUrlConfig",
                "lambda:GetLayerVersionPolicy",
                "lambda:GetPolicy",
                "lambda:ListCodeSigningConfigs",
                "lambda:ListFunctions",
                "lambda:ListLayerVersions",
                "lambda:ListLayers",
                "lambda:ListTags",
                "lex:DescribeBot",
                "lex:DescribeBotVersion",
                "lex:GetBot",
                "lex:GetBotVersions",
                "lex:GetBots",
                "lex:ListBotVersions",
                "lex:ListBots",
                "lex:ListTagsForResource",
                "lightsail:GetInstances",
                "logs:DescribeLogGroups",
                "logs:DescribeLogStreams",
                "logs:DescribeMetricFilters",
                "logs:DescribeSubscriptionFilters",
                "logs:GetLogEvents",
                "logs:ListTagsLogGroup",
                "macie2:GetClassificationExportConfiguration",
                "macie2:GetFindingsPublicationConfiguration",
                "macie2:GetMacieSession",
                "macie2:GetRevealConfiguration",
                "mediastore:GetContainerPolicy",
                "mediastore:GetCorsPolicy",
                "mediastore:ListContainers",
                "mediastore:ListTagsForResource"
              ],
              "Resource": "*"
            }
          ]
        }
      }
    }
  },
  "Outputs": {
    "PrismaCloudRoleARN": {
      "Description": "Information about the value",
      "Value": {
        "Fn::GetAtt": [
          "PrismaCloudRole",
          "Arn"
        ]
      }
    }
  }
}
  ```
</details>


### 3. Onboard your AWS Organization on to Prisma Cloud
Invoke the [Add AWS Cloud Account](/prisma-cloud/api/cspm/add-aws-cloud-account/) ![alt text](/icons/api-icon-pan-dev.svg) with the *IAM Role ARN* created in the previous step, required features state, and other payload.

`features` param in request payload: The Security Capabilities under "*Cloud Visibility Compliance and Governance*" feature are enabled by default. Hence, Do not include this in features. An empty features list can also be sent which indicates that the default capabilities under "*Cloud Visibility Compliance and Governance*" feature are enabled.

<details>
  <summary>A sample request to onboard an AWS Organization</summary>

  ```bash
  curl -v --request POST 'https://api.prismacloud.io/cas/v1/aws_account' \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --header 'x-redlock-auth: <YOUR_TOKEN>' \
  --data-raw '{
    "accountId": "<accountId>",
    "accountType": "organization",
    "enabled": true,
    "groupIds": [
        "<groupId>"
    ],
    "defaultAccountGroupId": "<default-groupId-for-organization-and-member_accounts>",
    "name": "<Organization name to be added in prisma>",
    "roleArn": "<iam-role-arn>",
    "features": [
        {
            "name": "Agentless Scanning",
            "state": "enabled"
        },
        {
            "name": "Auto Protect",
            "state": "disabled"
        },
        {
            "name": "Remediation",
            "state": "disabled"
        },
        {
            "name": "Serverless Function Scanning",
            "state": "enabled"
        }
    ],
    hierarchySelection": [
      {
        "displayName": "Root",
        "nodeType": "ORG",
        "resourceId": "root",
        "selectionType": "ALL"
      }
    ],
  }'
  ```
</details>

<details>
  <summary>Sample Response</summary>

  200 (Success)

</details>