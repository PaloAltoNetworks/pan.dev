---
id: aws-cloud-account-onboarding
title: Automate AWS Cloud Onboarding
---

To successfully onboard an AWS account in Prisma Cloud, create an IAM Role in your AWS account that has a trusted relationship with Prisma Cloud AWS Account. Prisma Cloud uses IAM Role ARN to *AssumeRole* in to your AWS account and ingest various configurations and logs.

First of all, obtain an authorization token by [Logging In](/prisma-cloud/api/cspm/app-login/) ![alt text](/icons/api-icon-pan-dev.svg)

:::info

- The token is only valid for 10 minutes, so [refresh it](/prisma-cloud/api/cspm/extend-session/) ![alt text](/icons/api-icon-pan-dev.svg) as needed if you believe your workflow might take longer than that.

- The base url in this guide is a generic `api.prismacloud.io`. Replace it with yours accordingly.
- To Onboard the AWS cloud account using *Terraform*, Follow
[AWS organization](https://github.com/PaloAltoNetworks/terraform-provider-prismacloud/tree/master/docs/resources/org_cloud_account_v2.md) or [AWS account](https://github.com/PaloAltoNetworks/terraform-provider-prismacloud/tree/master/docs/resources/cloud_account_v2.md) guides.

:::

## The steps to Onboard AWS Account/Organization
- [The steps to Onboard AWS Account/Organization](#the-steps-to-onboard-aws-accountorganization)
  - [1. Fetch *Supported Features* for cloud type and account type](#1-fetch-supported-features-for-cloud-type-and-account-type)
  - [2. Generate AWS *CFT* and create *IAM Role*](#2-generate-aws-cft-and-create-iam-role)
  - [3. Onboard your AWS account on to Prisma Cloud](#3-onboard-your-aws-account-on-to-prisma-cloud)

![](/img/aws-cloud-account-onboarding-workflow-automation.png)

### 1. Fetch *Supported Features* for cloud type and account type

To get the list of supported features, call [Fetch Supported Features](/prisma-cloud/api/cspm/fetch-supported-features/) ![alt text](/icons/api-icon-pan-dev.svg) and refer to the `supportedFeatures` field in the response body.<br/>

> **NOTE:** The supportedFeatures returns "*Cloud Visibility Compliance and Governance*" string by default. Do not explicitly pass this string as a feature in the request body param in any cloud account API(Like in Add AWS Cloud Account, Update AWS Cloud Account,Generate and Download the AWS CFT Template, etc).

*Sample Request* to get features for accountType: account on app stack: 

```bash
curl --request POST 'https://api.prismacloud.io/cas/v1/features/cloud/aws' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'x-redlock-auth: <YOUR_TOKEN>' \
--data-raw '{
   "accountType": "account"
}'
```

*Sample Response*
```json
{
    "cloudType": "aws",
    "deploymentType": "global",
    "accountType": "account",
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

**1**. To generate the AWS CFT and External ID, call [Generate the AWS CFT Template Link](/prisma-cloud/api/cspm/generate-cft-template-link-aws/) ![alt text](/icons/api-icon-pan-dev.svg). The Generated CFT template will include Prisma Cloud generated externalId and the permissions based on selected features.<br /> 
The response contains createStackLinkWithS3PresignedUrl key whose value can be used to create IAM role via AWS CloudFormation stack.<br /> 

For example, to get CFT stack creation Quick create Stack link for accountType:account, and required features selected from the supported features API:

*Sample Request*
```bash
curl --request POST 'https://api.prismacloud.io/cas/v1/aws_template/presigned_url' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'x-redlock-auth: <YOUR_TOKEN>' \
--data-raw '{
  "accountId": "<accountId>",
  "accountType": "account",
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
    "https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?stackName=PrismaCloudApp&templateURL=https%3A%2F%2Fonboarding-templates-app2-s3.s3.us-east-2.amazonaws.com%2F806775452214917120%2F375187248419%2Fprisma-cloud-aws-iam-role-1268a9df-5f25-4585-be8c-3ebcc03b1d1d.template%3FX-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEOj%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLWVhc3QtMiJHMEUCIQC94GEu53jRfuZbrpIaWHTCofG27p2CGIE1ob0I0Us36AIgR0HNScAWkWTEQcChWWwEOO7%252BHLNaBC04UuD%252BFoaADqcqmgIIkv%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAFGgwxODg2MTk5NDI3OTIiDG%252FM2%252FpFS97HXwnx0yruAR1VhsSiWGMF8AhNHRUHjcVfpdwa%252B4bJnpD4kgyK2anzh9TRaJILcTF384mg%252FkO71PYQYrOHzw3%252FyqRUGLmJ715%252FU9Lz%252BPynFx%252B6lx23M1CIvroaIBDqr9BFlcefepluy6xiso7oDMI46n8LCUBXUq5NGAcY4heDAVYXvwD5KSMiBytK%252Bct8r4G7R2bxrBm30GAkMhvPjEyhstrSFxheQqe3ZS429LYqpWgOoHiOFonn28R4NkJLEg027gPxpTKsqqiGysTymaDs4hHe7tRAG55L2YPsShoMe2SaWfTehivX%252BWbHO1%252FfIazMS7NPtqAwr%252Fv9nwY6nQEWKSoO7JUCkXAKDTIYrKV%252Bl5WG9YP2HLaL62OvMhicZE5lWLDeYL4%252Bo6qgCoH%252FxrbHAsY4LEmFNgxm2I%252FlK7KF6ugEsPHf33XnYgcN0a4VG7POoPyfk0RbNy6j002Guikcg3wieuROfF4NpnwrjvYfhbB2VM95Vpd1lhPRiqIxMJXIPNHwMQUu9t4ro6W0cRQUQVf5xpUBV1JC8%252BV1%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20230301T163039Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D3597%26X-Amz-Credential%3DASIASX2U75OEE4QNMK7F%252F20230301%252Fus-east-2%252Fs3%252Faws4_request%26X-Amz-Signature%3D75b43898503df3d757e8512d90a58c6f1c6de00b209403aa21cd28704fed7dfe",
      "externalId": "302bf9ab-b110-4588-8c8f-3bea9051a4d3",
      "eventBridgeRuleNamePrefix":
    "prisma-cloud-eb-o-806775452214917120-*"
}
```

Extract the S3 Presigned CFT URL from the *createStackLinkWithS3PresignedUrl* key by splitting at *templateURL=* and decoding the last index value of the split (right side of the split). You can use the extracted decoded S3 CFT link to create or update the IAM role CloudFormation stack.

The extraction steps are shown below:<br /> 
**a**.  Split *createStackLinkWithS3PresignedUrl* at *templateURL=* and get the last index value of the split (i.e right side of the split) to get urlencoded link.<br/><br/>
    *Sample encoded S3 CFT URL*<br /> 

```
https%3A%2F%2Fonboarding-templates-app2-s3.s3.us-east-2.amazonaws.com%2F806775452214917120%2F375187248419%2Fprisma-cloud-aws-iam-role-1268a9df-5f25-4585-be8c-3ebcc03b1d1d.template%3FX-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEOj%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLWVhc3QtMiJHMEUCIQC94GEu53jRfuZbrpIaWHTCofG27p2CGIE1ob0I0Us36AIgR0HNScAWkWTEQcChWWwEOO7%252BHLNaBC04UuD%252BFoaADqcqmgIIkv%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAFGgwxODg2MTk5NDI3OTIiDG%252FM2%252FpFS97HXwnx0yruAR1VhsSiWGMF8AhNHRUHjcVfpdwa%252B4bJnpD4kgyK2anzh9TRaJILcTF384mg%252FkO71PYQYrOHzw3%252FyqRUGLmJ715%252FU9Lz%252BPynFx%252B6lx23M1CIvroaIBDqr9BFlcefepluy6xiso7oDMI46n8LCUBXUq5NGAcY4heDAVYXvwD5KSMiBytK%252Bct8r4G7R2bxrBm30GAkMhvPjEyhstrSFxheQqe3ZS429LYqpWgOoHiOFonn28R4NkJLEg027gPxpTKsqqiGysTymaDs4hHe7tRAG55L2YPsShoMe2SaWfTehivX%252BWbHO1%252FfIazMS7NPtqAwr%252Fv9nwY6nQEWKSoO7JUCkXAKDTIYrKV%252Bl5WG9YP2HLaL62OvMhicZE5lWLDeYL4%252Bo6qgCoH%252FxrbHAsY4LEmFNgxm2I%252FlK7KF6ugEsPHf33XnYgcN0a4VG7POoPyfk0RbNy6j002Guikcg3wieuROfF4NpnwrjvYfhbB2VM95Vpd1lhPRiqIxMJXIPNHwMQUu9t4ro6W0cRQUQVf5xpUBV1JC8%252BV1%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20230301T163039Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D3597%26X-Amz-Credential%3DASIASX2U75OEE4QNMK7F%252F20230301%252Fus-east-2%252Fs3%252Faws4_request%26X-Amz-Signature%3D75b43898503df3d757e8512d90a58c6f1c6de00b209403aa21cd28704fed7dfe
```

**b**. *urldecode* the above link to get S3 link for AWS CFT <br/><br/>

*Sample URL decoded S3 CFT Link*:

```     
https://onboarding-templates-app2-s3.s3.us-east-2.amazonaws.com/806775452214917120/375187248419/prisma-cloud-aws-iam-role-1268a9df-5f25-4585-be8c-3ebcc03b1d1d.template?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQC94GEu53jRfuZbrpIaWHTCofG27p2CGIE1ob0I0Us36AIgR0HNScAWkWTEQcChWWwEOO7%2BHLNaBC04UuD%2BFoaADqcqmgIIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwxODg2MTk5NDI3OTIiDG%2FM2%2FpFS97HXwnx0yruAR1VhsSiWGMF8AhNHRUHjcVfpdwa%2B4bJnpD4kgyK2anzh9TRaJILcTF384mg%2FkO71PYQYrOHzw3%2FyqRUGLmJ715%2FU9Lz%2BPynFx%2B6lx23M1CIvroaIBDqr9BFlcefepluy6xiso7oDMI46n8LCUBXUq5NGAcY4heDAVYXvwD5KSMiBytK%2Bct8r4G7R2bxrBm30GAkMhvPjEyhstrSFxheQqe3ZS429LYqpWgOoHiOFonn28R4NkJLEg027gPxpTKsqqiGysTymaDs4hHe7tRAG55L2YPsShoMe2SaWfTehivX%2BWbHO1%2FfIazMS7NPtqAwr%2Fv9nwY6nQEWKSoO7JUCkXAKDTIYrKV%2Bl5WG9YP2HLaL62OvMhicZE5lWLDeYL4%2Bo6qgCoH%2FxrbHAsY4LEmFNgxm2I%2FlK7KF6ugEsPHf33XnYgcN0a4VG7POoPyfk0RbNy6j002Guikcg3wieuROfF4NpnwrjvYfhbB2VM95Vpd1lhPRiqIxMJXIPNHwMQUu9t4ro6W0cRQUQVf5xpUBV1JC8%2BV1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230301T163039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3597&X-Amz-Credential=ASIASX2U75OEE4QNMK7F%2F20230301%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=75b43898503df3d757e8512d90a58c6f1c6de00b209403aa21cd28704fed7dfe
```

  **c**. Use the above extracted decoded s3 link to create or update the *IAM role* using AWS *CloudFormation Stack*. Boto3, Terraform, or any other programming tools can be used to create Cloudformation Stack.<br/><br/>
    If you are onboarding AWS organization, then *OrganizationalUnitIds* param should be provided for Organization stack creation in the CFT for creating member roles on the specified OrganizationalUnitIds. Provide the organizational root OU ID (prefix r-) to run it for all the accounts under the Organization, else provide a comma-separated list of OU IDs (prefix ou-). Refer https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_details.html#orgs_view_root link for more info.<br/>
    Example: OrganizationalUnitIds = "r-abcd" // r-abcd is the AWS organizational root OU ID for the ORG account which indicates that member role should get created on all the accounts the organization has access to.
  
> **Note:** The link is valid for one hour. Regenerate the link if it expires.

**2**. Alternatively, use [Generate and Download the AWS CFT Template](/prisma-cloud/api/cspm/generate-cft-template-aws) ![alt text](/icons/api-icon-pan-dev.svg) to get the CFT template in response.<br/> 
For example, To get CFT for the required features selected from the previous supported features API and for accountType="account"

<details>
  <summary>Sample Request</summary>

  ```bash
  curl --request POST 'https://api.prismacloud.io/cas/v1/aws_template' \
  --header 'accept: */*' \
  --header 'content-type: application/json' \
  --header 'x-redlock-auth: <YOUR_TOKEN>' \
  --data-raw '{
    "accountId": "<accountId>",
    "accountType": "account",
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
    "AWSTemplateFormatVersion" : "2010-09-09",
    "Mappings" : {
      "EventBridgeMap" : {
        "EventBridgeRuleNamePrefix" : {
          "Value" : "prisma-cloud-eb-o-806775452214917120-*"
        }
      }
    },
    "Description" : "Prisma Cloud IAM Role to set permissions",
    "Metadata" : {
      "DownloadDate" : "2023-03-02 01:20"
    },
    "Parameters" : {
      "PrismaCloudRoleName" : {
        "Type" : "String",
        "Description" : "Provide an role ARN name (Example: PrismaCloudRole). Maximum 64 characters allowed",
        "AllowedPattern" : "[-_a-zA-Z0-9]+",
        "Default" : "PrismaCloudRole-806775452214917120",
        "MaxLength" : 64,
        "MinLength" : 1
      }
    },
    "Resources" : {
      "PrismaCloudRole" : {
        "Type" : "AWS::IAM::Role",
        "Properties" : {
          "ManagedPolicyArns" : [ {
            "Fn::Join" : [ "", [ "arn:aws:iam::aws:policy/SecurityAudit" ] ]
          }, {
            "Fn::Join" : [ "", [ "arn:aws:iam::", {
              "Ref" : "AWS::AccountId"
            }, ":policy/", "prisma_cloud_1-806775452214917120", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          }, {
            "Fn::Join" : [ "", [ "arn:aws:iam::", {
              "Ref" : "AWS::AccountId"
            }, ":policy/", "prisma_cloud_2-806775452214917120", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          }, {
            "Fn::Join" : [ "", [ "arn:aws:iam::", {
              "Ref" : "AWS::AccountId"
            }, ":policy/", "prisma_cloud_3-806775452214917120", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          }, {
            "Fn::Join" : [ "", [ "arn:aws:iam::", {
              "Ref" : "AWS::AccountId"
            }, ":policy/", "prisma_cloud_4-806775452214917120", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          }, {
            "Fn::Join" : [ "", [ "arn:aws:iam::", {
              "Ref" : "AWS::AccountId"
            }, ":policy/", "prisma_cloud_5-806775452214917120", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          } ],
          "MaxSessionDuration" : 43200,
          "AssumeRolePolicyDocument" : {
            "Version" : "2012-10-17",
            "Statement" : [ {
              "Effect" : "Allow",
              "Principal" : {
                "AWS" : [ "arn:aws:iam::188619942792:root" ]
              },
              "Action" : [ "sts:AssumeRole" ],
              "Condition" : {
                "StringEquals" : {
                  "sts:ExternalId" : "302bf9ab-b110-4588-8c8f-3bea9051a4d3"
                }
              }
            } ]
          },
          "RoleName" : {
            "Ref" : "PrismaCloudRoleName"
          }
        },
        "DependsOn" : [ "prismacloud5", "prismacloud1", "prismacloud2", "prismacloud3", "prismacloud4" ]
      },
      "prismacloud1" : {
        "Type" : "AWS::IAM::ManagedPolicy",
        "Properties" : {
          "ManagedPolicyName" : {
            "Fn::Join" : [ "", [ "prisma_cloud_1-806775452214917120", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          },
          "PolicyDocument" : {
            "Version" : "2012-10-17",
            "Statement" : [ {
              "Sid" : "PrismaCloudFlowlogs1",
              "Effect" : "Allow",
              "Action" : [ "logs:GetLogEvents" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudAuditEventsCloudTrail1",
              "Effect" : "Allow",
              "Action" : [ "cloudtrail:LookupEvents" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudPCCAgentlessSSM6",
              "Effect" : "Allow",
              "Action" : [ "ssm:GetParameter", "ssm:GetParameters" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudPCCAgentlessSTS7",
              "Effect" : "Allow",
              "Action" : [ "sts:DecodeAuthorizationMessage", "sts:GetCallerIdentity" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudElasticBeanstalk4",
              "Effect" : "Allow",
              "Action" : [ "s3:GetObject" ],
              "Resource" : {
                "Fn::Join" : [ "", [ "arn:", {
                  "Ref" : "AWS::Partition"
                }, ":s3:::elasticbeanstalk-*/*" ] ]
              }
            }, {
              "Sid" : "PrismaCloudGuardduty1",
              "Effect" : "Allow",
              "Action" : [ "guardduty:GetDetector", "guardduty:GetFindings", "guardduty:ListDetectors", "guardduty:ListFindings" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudPCCAgentlessKMS5",
              "Effect" : "Allow",
              "Action" : [ "kms:CreateGrant", "kms:Decrypt", "kms:DescribeKey", "kms:Encrypt", "kms:GenerateDataKeyWithoutPlaintext", "kms:ReEncryptFrom", "kms:ReEncryptTo" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudPCCAgentlessNetworkActions9",
              "Effect" : "Allow",
              "Action" : [ "ec2:CreateInternetGateway", "ec2:CreateSubnet", "ec2:CreateVpc" ],
              "Condition" : {
                "StringEquals" : {
                  "aws:RequestTag/created-by" : "prismacloud-agentless-scan"
                }
              },
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudComputeAgentless1",
              "Effect" : "Allow",
              "Action" : [ "ec2:CreateRoute", "ec2:DeleteNetworkInterface", "ec2:DescribeInternetGateways", "ec2:DescribeNetworkInterfaces", "ec2:DescribeRouteTables", "ec2:DescribeVpcs" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudPCCAgentlessServiceLinkedRole4",
              "Effect" : "Allow",
              "Action" : [ "iam:CreateServiceLinkedRole" ],
              "Condition" : {
                "StringLike" : {
                  "iam:AWSServiceName" : "spot.amazonaws.com"
                }
              },
              "Resource" : [ {
                "Fn::Join" : [ "", [ "arn:", {
                  "Ref" : "AWS::Partition"
                }, ":iam::*:role/aws-service-role/spot.amazonaws.com/*" ] ]
              } ]
            }, {
              "Sid" : "PrismaCloudBridgecrew1",
              "Effect" : "Allow",
              "Action" : [ "cloudformation:DescribeStackResources", "cloudformation:GetTemplate", "cloudformation:ListStacks", "lambda:GetEventSourceMapping", "lambda:GetFunction", "lambda:GetLayerVersion", "s3:ListBucket", "sns:GetSubscriptionAttributes" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudEBRuleStatusPermissions2",
              "Effect" : "Allow",
              "Action" : [ "cloudtrail:DescribeTrails", "cloudtrail:GetEventSelectors", "cloudtrail:GetTrailStatus", "ec2:DescribeRegions", "events:DescribeApiDestination", "events:DescribeConnection", "events:DescribeRule", "events:ListTargetsByRule" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudPCCAgentlessRW3",
              "Effect" : "Allow",
              "Action" : [ "ec2:CreateSnapshot", "ec2:CreateSnapshots", "ec2:DescribeInstanceStatus", "ec2:DescribeInstances", "ec2:DescribeSecurityGroups", "ec2:DescribeSnapshots", "ec2:DescribeSubnets", "ec2:DescribeVolumes", "ec2:RunInstances", "iam:SimulatePrincipalPolicy" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudInspector1",
              "Effect" : "Allow",
              "Action" : [ "inspector:DescribeAssessmentTemplates", "inspector:DescribeFindings", "inspector:DescribeRulesPackages", "inspector:ListAssessmentRunAgents", "inspector:ListAssessmentRuns", "inspector:ListAssessmentTemplates", "inspector:ListFindings", "inspector:ListRulesPackages" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudEBRuleManagementPermissions1",
              "Effect" : "Allow",
              "Action" : [ "events:DeleteRule", "events:DisableRule", "events:EnableRule", "events:PutRule", "events:RemoveTargets" ],
              "Resource" : [ {
                "Fn::Join" : [ "", [ "arn:", {
                  "Ref" : "AWS::Partition"
                }, ":events:*:", {
                  "Ref" : "AWS::AccountId"
                }, ":rule/", {
                  "Fn::FindInMap" : [ "EventBridgeMap", "EventBridgeRuleNamePrefix", "Value" ]
                } ] ]
              } ]
            }, {
              "Sid" : "PrismaCloudPCCAgentlessRM2",
              "Effect" : "Allow",
              "Action" : [ "ec2:AttachInternetGateway", "ec2:CreateSubnet", "ec2:DeleteInternetGateway", "ec2:DeleteSnapshot", "ec2:DeleteSubnet", "ec2:DeleteVpc", "ec2:DetachInternetGateway", "ec2:ModifySnapshotAttribute", "ec2:TerminateInstances" ],
              "Condition" : {
                "StringEquals" : {
                  "ec2:ResourceTag/created-by" : "prismacloud-agentless-scan"
                }
              },
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudComputeServerlessScan1",
              "Effect" : "Allow",
              "Action" : [ "iam:GetPolicy", "iam:GetPolicyVersion", "iam:GetRole", "iam:GetRolePolicy", "iam:ListAttachedRolePolicies", "iam:ListRolePolicies", "iam:SimulatePrincipalPolicy", "kms:Decrypt", "lambda:DeleteLayerVersion", "lambda:GetFunction", "lambda:GetFunctionConfiguration", "lambda:GetLayerVersion", "lambda:ListFunctions", "lambda:ListLayerVersions", "lambda:ListLayers", "lambda:PublishLayerVersion", "lambda:UpdateFunctionConfiguration" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudPCCAgentlessTags8",
              "Effect" : "Allow",
              "Action" : [ "ec2:CreateTags" ],
              "Condition" : {
                "StringEquals" : {
                  "aws:RequestTag/created-by" : "prismacloud-agentless-scan"
                }
              },
              "Resource" : [ {
                "Fn::Join" : [ "", [ "arn:", {
                  "Ref" : "AWS::Partition"
                }, ":ec2:*::snapshot/*" ] ]
              }, {
                "Fn::Join" : [ "", [ "arn:", {
                  "Ref" : "AWS::Partition"
                }, ":ec2:*:*:instance/*" ] ]
              }, {
                "Fn::Join" : [ "", [ "arn:", {
                  "Ref" : "AWS::Partition"
                }, ":ec2:*:*:vpc/*" ] ]
              }, {
                "Fn::Join" : [ "", [ "arn:", {
                  "Ref" : "AWS::Partition"
                }, ":ec2:*:*:subnet/*" ] ]
              }, {
                "Fn::Join" : [ "", [ "arn:", {
                  "Ref" : "AWS::Partition"
                }, ":ec2:*:*:internet-gateway/*" ] ]
              }, {
                "Fn::Join" : [ "", [ "arn:", {
                  "Ref" : "AWS::Partition"
                }, ":ec2:*:*:volume/*" ] ]
              } ]
            } ]
          }
        }
      },
      "prismacloud2" : {
        "Type" : "AWS::IAM::ManagedPolicy",
        "Properties" : {
          "ManagedPolicyName" : {
            "Fn::Join" : [ "", [ "prisma_cloud_2-806775452214917120", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          },
          "PolicyDocument" : {
            "Version" : "2012-10-17",
            "Statement" : [ {
              "Sid" : "PrismaCloudRemediation1",
              "Effect" : "Allow",
              "Action" : [ "acm:UpdateCertificateOptions", "cloudtrail:StartLogging", "cloudtrail:UpdateTrail", "ec2:ModifyImageAttribute", "ec2:ModifySnapshotAttribute", "ec2:ModifySubnetAttribute", "ec2:RevokeSecurityGroupEgress", "ec2:RevokeSecurityGroupIngress", "ecs:UpdateClusterSettings", "eks:UpdateClusterConfig", "elasticache:ModifyReplicationGroup", "elasticloadbalancing:ModifyLoadBalancerAttributes", "iam:UpdateAccountPasswordPolicy", "kms:EnableKeyRotation", "lambda:UpdateFunctionConfiguration", "rds:ModifyDBCluster", "rds:ModifyDBClusterSnapshotAttribute", "rds:ModifyDBInstance", "rds:ModifyDBSnapshotAttribute", "rds:ModifyEventSubscription", "redshift:ModifyCluster", "s3:PutBucketAcl", "s3:PutBucketPublicAccessBlock", "s3:PutBucketVersioning" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudComputeDiscovery1",
              "Effect" : "Allow",
              "Action" : [ "apigateway:GET", "cloudfront:ListDistributions", "cloudwatch:DescribeAlarms", "ec2:DescribeTags", "elasticloadbalancing:DescribeListenerCertificates", "elasticloadbalancing:DescribeListeners", "elasticloadbalancing:DescribeRules", "elasticloadbalancing:DescribeTargetGroups", "events:ListRules", "iam:GetPolicy", "iam:GetPolicyVersion", "iam:GetRole", "iam:GetRolePolicy", "iam:ListAttachedRolePolicies", "iam:ListRolePolicies", "kms:Decrypt", "lambda:GetFunction", "lambda:GetFunctionConfiguration", "lambda:GetFunctionUrlConfig", "lambda:GetPolicy", "lambda:ListAliases", "lambda:ListEventSourceMappings", "lambda:ListFunctions", "logs:DescribeSubscriptionFilters", "s3:GetBucketNotification", "secretsmanager:GetSecretValue", "ssm:GetParameter" ],
              "Resource" : "*"
            }, {
              "Sid" : "PrismaCloudComputeAutoProtect1",
              "Effect" : "Allow",
              "Action" : [ "ec2:AuthorizeSecurityGroupEgress", "ec2:AuthorizeSecurityGroupIngress", "ec2:CreateSecurityGroup", "ec2:CreateTags", "ec2:DeleteSecurityGroup", "ec2:DescribeImages", "ec2:DescribeInstanceTypeOfferings", "ec2:DescribeInstances", "ec2:DescribeSecurityGroups", "ec2:DescribeSubnets", "ec2:DescribeVpcs", "ec2:RevokeSecurityGroupEgress", "ec2:RunInstances", "ec2:TerminateInstances", "ecr:BatchCheckLayerAvailability", "ecr:BatchGetImage", "ecr:DescribeImageScanFindings", "ecr:DescribeImages", "ecr:DescribeRepositories", "ecr:GetAuthorizationToken", "ecr:GetDownloadUrlForLayer", "ecr:GetLifecyclePolicy", "ecr:GetLifecyclePolicyPreview", "ecr:GetRepositoryPolicy", "ecr:ListImages", "ecr:ListTagsForResource", "lambda:GetFunctionConfiguration", "lambda:GetLayerVersion", "logs:GetQueryResults", "logs:StartQuery", "securityhub:BatchImportFindings", "ssm:CancelCommand", "ssm:CreateAssociation", "ssm:DescribeInstanceInformation", "ssm:ListCommandInvocations", "ssm:SendCommand" ],
              "Resource" : "*"
            } ]
          }
        }
      },
      "prismacloud3" : {
        "Type" : "AWS::IAM::ManagedPolicy",
        "Properties" : {
          "ManagedPolicyName" : {
            "Fn::Join" : [ "", [ "prisma_cloud_3-806775452214917120", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          },
          "PolicyDocument" : {
            "Version" : "2012-10-17",
            "Statement" : [ {
              "Sid" : "PrismaCloudConfig3",
              "Effect" : "Allow",
              "Action" : [ "mq:ListBrokers", "organizations:DescribeAccount", "organizations:DescribeOrganization", "qldb:DescribeLedger", "qldb:ListLedgers", "qldb:ListTagsForResource", "quicksight:DescribeAccountSettings", "quicksight:ListDataSets", "quicksight:ListDataSources", "quicksight:ListTagsForResource", "ram:GetResourceShares", "ram:ListPrincipals", "ram:ListResources", "rds:DescribeDBClusterParameterGroups", "rds:DescribeDBClusterParameters", "rds:DescribeDBClusterSnapshotAttributes", "rds:DescribeDBClusterSnapshots", "rds:DescribeDBClusters", "rds:DescribeDBInstances", "rds:DescribeDBParameterGroups", "rds:DescribeDBParameters", "rds:DescribeDBSnapshotAttributes", "rds:DescribeDBSnapshots", "rds:DescribeEventSubscriptions", "rds:DescribeOptionGroups", "rds:ListTagsForResource", "redshift:DescribeClusterParameters", "redshift:DescribeClusters", "redshift:DescribeLoggingStatus", "route53:ListHostedZones", "route53:ListQueryLoggingConfigs", "route53:ListResourceRecordSets", "route53:ListTagsForResource", "route53domains:GetDomainDetail", "route53domains:ListDomains", "route53domains:ListTagsForDomain", "route53resolver:ListResolverQueryLogConfigAssociations", "route53resolver:ListResolverQueryLogConfigs", "route53resolver:ListTagsForResource", "s3:DescribeJob", "s3:GetAccessPoint", "s3:GetAccessPointPolicy", "s3:GetAccessPointPolicyStatus", "s3:GetAccountPublicAccessBlock", "s3:GetBucketAcl", "s3:GetBucketCORS", "s3:GetBucketLocation", "s3:GetBucketLogging", "s3:GetBucketOwnershipControls", "s3:GetBucketPolicy", "s3:GetBucketPolicyStatus", "s3:GetBucketPublicAccessBlock", "s3:GetBucketTagging", "s3:GetBucketVersioning", "s3:GetBucketWebsite", "s3:GetEncryptionConfiguration", "s3:GetJobTagging", "s3:GetLifecycleConfiguration", "s3:GetReplicationConfiguration", "s3:ListAccessPoints", "s3:ListAllMyBuckets", "s3:ListJobs", "sagemaker:DescribeDomain", "sagemaker:DescribeEndpoint", "sagemaker:DescribeEndpointConfig", "sagemaker:DescribeModel", "sagemaker:DescribeNotebookInstance", "sagemaker:DescribeTrainingJob", "sagemaker:DescribeUserProfile", "sagemaker:ListDomains", "sagemaker:ListEndpointConfigs", "sagemaker:ListEndpoints", "sagemaker:ListModels", "sagemaker:ListNotebookInstances", "sagemaker:ListTags", "sagemaker:ListTrainingJobs", "sagemaker:ListUserProfiles", "secretsmanager:DescribeSecret", "secretsmanager:GetResourcePolicy", "secretsmanager:ListSecrets", "ses:GetIdentityDkimAttributes", "ses:GetIdentityPolicies", "ses:ListIdentities", "ses:ListIdentityPolicies", "shield:GetSubscriptionState", "shield:ListProtectionGroups", "shield:ListProtections", "shield:ListResourcesInProtectionGroup", "shield:ListTagsForResource", "sns:GetTopicAttributes", "sns:ListPlatformApplications", "sns:ListSubscriptions", "sns:ListTagsForResource", "sns:ListTopics", "sqs:GetQueueAttributes", "sqs:ListQueueTags", "sqs:ListQueues", "ssm:DescribeAssociation", "ssm:DescribeDocument", "ssm:DescribeDocumentPermission", "ssm:DescribeInstanceInformation", "ssm:DescribeParameters", "ssm:GetDocument", "ssm:GetInventory", "ssm:GetParameters", "ssm:ListAssociations", "ssm:ListDocuments", "ssm:ListTagsForResource", "sso:DescribePermissionSet", "sso:ListAccountAssignments", "sso:ListAccountsForProvisionedPermissionSet", "sso:ListInstances", "sso:ListPermissionSets", "states:DescribeStateMachine", "states:ListStateMachines", "states:ListTagsForResource", "storagegateway:DescribeCachediSCSIVolumes", "storagegateway:DescribeGatewayInformation", "storagegateway:DescribeNFSFileShares", "storagegateway:DescribeSMBFileShares", "storagegateway:DescribeSMBSettings", "storagegateway:DescribeTapes", "storagegateway:ListFileShares", "storagegateway:ListGateways", "storagegateway:ListTapes", "storagegateway:ListVolumes", "transcribe:ListLanguageModels", "transcribe:ListTagsForResource", "transfer:DescribeAccess", "transfer:DescribeServer", "transfer:ListAccesses", "transfer:ListServers", "translate:GetTerminology", "translate:ListTerminologies", "waf-regional:GetLoggingConfiguration", "waf-regional:GetWebACL", "waf-regional:ListResourcesForWebACL", "waf-regional:ListTagsForResource", "waf-regional:ListWebACLs", "waf:GetLoggingConfiguration", "waf:GetWebACL", "waf:ListTagsForResource", "waf:ListWebACLs", "wafv2:GetLoggingConfiguration", "wafv2:GetWebACL", "wafv2:ListResourcesForWebACL", "wafv2:ListTagsForResource", "wafv2:ListWebACLs", "workspaces:DescribeIpGroups", "workspaces:DescribeTags", "workspaces:DescribeWorkspaceBundles", "workspaces:DescribeWorkspaceDirectories", "workspaces:DescribeWorkspaces", "xray:GetEncryptionConfig" ],
              "Resource" : "*"
            } ]
          }
        }
      },
      "prismacloud4" : {
        "Type" : "AWS::IAM::ManagedPolicy",
        "Properties" : {
          "ManagedPolicyName" : {
            "Fn::Join" : [ "", [ "prisma_cloud_4-806775452214917120", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          },
          "PolicyDocument" : {
            "Version" : "2012-10-17",
            "Statement" : [ {
              "Sid" : "PrismaCloudConfig1",
              "Effect" : "Allow",
              "Action" : [ "access-analyzer:GetAnalyzer", "access-analyzer:ListAnalyzers", "account:GetAlternateContact", "acm-pca:GetPolicy", "acm-pca:ListCertificateAuthorities", "acm-pca:ListTags", "acm:DescribeCertificate", "acm:ListCertificates", "acm:ListTagsForCertificate", "airflow:GetEnvironment", "airflow:ListEnvironments", "amplify:ListApps", "apigateway:GET", "appflow:DescribeFlow", "appflow:ListFlows", "appmesh:DescribeMesh", "appmesh:DescribeVirtualGateway", "appmesh:ListMeshes", "appmesh:ListTagsForResource", "appmesh:ListVirtualGateways", "apprunner:DescribeAutoScalingConfiguration", "apprunner:DescribeCustomDomains", "apprunner:DescribeService", "apprunner:ListAutoScalingConfigurations", "apprunner:ListServices", "apprunner:ListTagsForResource", "appstream:DescribeFleets", "appstream:DescribeImages", "appstream:DescribeStacks", "appstream:DescribeUsageReportSubscriptions", "appstream:ListTagsForResource", "appsync:GetGraphqlApi", "appsync:ListGraphqlApis", "aps:DescribeLoggingConfiguration", "aps:ListWorkspaces", "athena:GetWorkGroup", "athena:ListWorkGroups", "autoscaling:DescribeAutoScalingGroups", "autoscaling:DescribeLaunchConfigurations", "backup:GetBackupVaultAccessPolicy", "backup:ListBackupVaults", "backup:ListTags", "batch:DescribeComputeEnvironments", "cloud9:DescribeEnvironmentMemberships", "cloud9:DescribeEnvironments", "cloud9:ListEnvironments", "cloud9:ListTagsForResource", "cloudformation:DescribeStackResources", "cloudformation:DescribeStacks", "cloudformation:GetStackPolicy", "cloudformation:GetTemplate", "cloudformation:ListStackResources", "cloudformation:ListStacks", "cloudfront:GetDistribution", "cloudfront:GetDistributionConfig", "cloudfront:ListDistributions", "cloudfront:ListOriginAccessControls", "cloudfront:ListTagsForResource", "cloudsearch:DescribeDomains", "cloudtrail:DescribeTrails", "cloudtrail:GetEventSelectors", "cloudtrail:GetTrailStatus", "cloudtrail:ListTags", "cloudwatch:DescribeAlarms", "cloudwatch:DescribeInsightRules", "cloudwatch:ListTagsForResource", "codeartifact:DescribeDomain", "codeartifact:DescribeRepository", "codeartifact:GetDomainPermissionsPolicy", "codeartifact:GetRepositoryPermissionsPolicy", "codeartifact:ListDomains", "codeartifact:ListRepositories", "codeartifact:ListTagsForResource", "codebuild:BatchGetProjects", "codebuild:ListProjects", "codepipeline:GetPipeline", "codepipeline:ListPipelines", "codepipeline:ListTagsForResource", "cognito-identity:DescribeIdentityPool", "cognito-identity:ListIdentityPools", "cognito-identity:ListTagsForResource", "cognito-idp:ListTagsForResource", "cognito-idp:ListUserPools", "config:DescribeConfigRules", "config:DescribeConfigurationRecorderStatus", "config:DescribeConfigurationRecorders", "config:DescribeDeliveryChannels", "config:GetComplianceDetailsByConfigRule", "config:ListTagsForResource", "connect:ListInstanceAttributes", "connect:ListInstanceStorageConfigs", "connect:ListInstances", "databrew:DescribeJob", "databrew:ListJobs", "datapipeline:DescribePipelines", "datapipeline:GetPipelineDefinition", "datapipeline:ListPipelines", "datasync:DescribeLocationEfs", "datasync:DescribeLocationFsxLustre", "datasync:DescribeLocationFsxOntap", "datasync:DescribeLocationFsxOpenZfs", "datasync:DescribeLocationFsxWindows", "datasync:DescribeLocationHdfs", "datasync:DescribeLocationNfs", "datasync:DescribeLocationObjectStorage", "datasync:DescribeLocationS3", "datasync:DescribeLocationSmb", "datasync:ListLocations", "datasync:ListTagsForResource", "datasync:ListTasks", "dax:DescribeClusters", "dax:ListTags", "devops-guru:DescribeServiceIntegration", "directconnect:DescribeConnections", "directconnect:DescribeDirectConnectGateways", "directconnect:DescribeVirtualInterfaces", "dms:DescribeCertificates", "dms:DescribeEndpoints", "dms:DescribeReplicationInstances", "dms:ListTagsForResource", "ds:DescribeDirectories", "ds:ListTagsForResource", "dynamodb:DescribeTable", "dynamodb:ListTables", "dynamodb:ListTagsOfResource", "ec2:DescribeAccountAttributes", "ec2:DescribeAddresses", "ec2:DescribeClientVpnAuthorizationRules", "ec2:DescribeClientVpnEndpoints", "ec2:DescribeDhcpOptions", "ec2:DescribeFlowLogs", "ec2:DescribeImages", "ec2:DescribeInstanceAttribute", "ec2:DescribeInstanceStatus", "ec2:DescribeInstances", "ec2:DescribeInternetGateways", "ec2:DescribeKeyPairs", "ec2:DescribeManagedPrefixLists", "ec2:DescribeNatGateways", "ec2:DescribeNetworkAcls", "ec2:DescribeNetworkInterfaceAttribute", "ec2:DescribeNetworkInterfaces", "ec2:DescribeRegions", "ec2:DescribeRouteTables", "ec2:DescribeSecurityGroups", "ec2:DescribeSnapshotAttribute", "ec2:DescribeSnapshots", "ec2:DescribeSubnets", "ec2:DescribeTags", "ec2:DescribeTransitGatewayAttachments", "ec2:DescribeTransitGatewayRouteTables", "ec2:DescribeTransitGatewayVpcAttachments", "ec2:DescribeTransitGateways", "ec2:DescribeVolumes", "ec2:DescribeVpcEndpointServiceConfigurations", "ec2:DescribeVpcEndpointServices", "ec2:DescribeVpcEndpoints", "ec2:DescribeVpcPeeringConnections", "ec2:DescribeVpcs", "ec2:DescribeVpnConnections", "ec2:DescribeVpnGateways", "ec2:GetEbsEncryptionByDefault", "ec2:GetManagedPrefixListEntries", "ec2:SearchTransitGatewayRoutes", "ecr-public:DescribeRepositories", "ecr-public:GetRepositoryCatalogData", "ecr-public:GetRepositoryPolicy", "ecr-public:ListTagsForResource", "ecr:DescribeImages", "ecr:DescribeRepositories", "ecr:GetLifecyclePolicy", "ecr:GetRegistryScanningConfiguration", "ecr:GetRepositoryPolicy", "ecr:ListTagsForResource", "ecs:DescribeClusters", "ecs:DescribeContainerInstances", "ecs:DescribeServices", "ecs:DescribeTaskDefinition", "ecs:DescribeTasks", "ecs:ListClusters", "ecs:ListContainerInstances", "ecs:ListServices", "ecs:ListTagsForResource", "ecs:ListTaskDefinitions" ],
              "Resource" : "*"
            } ]
          }
        }
      },
      "prismacloud5" : {
        "Type" : "AWS::IAM::ManagedPolicy",
        "Properties" : {
          "ManagedPolicyName" : {
            "Fn::Join" : [ "", [ "prisma_cloud_5-806775452214917120", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          },
          "PolicyDocument" : {
            "Version" : "2012-10-17",
            "Statement" : [ {
              "Sid" : "PrismaCloudConfig2",
              "Effect" : "Allow",
              "Action" : [ "ecs:ListTasks", "eks:DescribeCluster", "eks:DescribeFargateProfile", "eks:DescribeNodegroup", "eks:ListClusters", "eks:ListFargateProfiles", "eks:ListNodegroups", "eks:ListTagsForResource", "elasticache:DescribeCacheClusters", "elasticache:DescribeCacheEngineVersions", "elasticache:DescribeCacheSubnetGroups", "elasticache:DescribeReplicationGroups", "elasticache:DescribeReservedCacheNodes", "elasticache:DescribeSnapshots", "elasticache:ListTagsForResource", "elasticbeanstalk:DescribeConfigurationSettings", "elasticbeanstalk:DescribeEnvironmentResources", "elasticbeanstalk:DescribeEnvironments", "elasticbeanstalk:ListTagsForResource", "elasticfilesystem:DescribeFileSystemPolicy", "elasticfilesystem:DescribeFileSystems", "elasticfilesystem:DescribeMountTargetSecurityGroups", "elasticfilesystem:DescribeMountTargets", "elasticfilesystem:DescribeTags", "elasticloadbalancing:DescribeListeners", "elasticloadbalancing:DescribeLoadBalancerAttributes", "elasticloadbalancing:DescribeLoadBalancerPolicies", "elasticloadbalancing:DescribeLoadBalancers", "elasticloadbalancing:DescribeSSLPolicies", "elasticloadbalancing:DescribeTags", "elasticloadbalancing:DescribeTargetGroups", "elasticloadbalancing:DescribeTargetHealth", "elasticmapreduce:DescribeCluster", "elasticmapreduce:DescribeSecurityConfiguration", "elasticmapreduce:GetBlockPublicAccessConfiguration", "elasticmapreduce:ListClusters", "elasticmapreduce:ListSecurityConfigurations", "es:DescribeElasticsearchDomains", "es:ListDomainNames", "es:ListTags", "events:ListEventBuses", "events:ListRules", "events:ListTagsForResource", "events:ListTargetsByRule", "firehose:DescribeDeliveryStream", "firehose:ListDeliveryStreams", "firehose:ListTagsForDeliveryStream", "forecast:DescribeAutoPredictor", "forecast:DescribeDataset", "forecast:DescribePredictor", "forecast:ListDatasets", "forecast:ListPredictors", "forecast:ListTagsForResource", "fsx:DescribeFileSystems", "glacier:GetVaultAccessPolicy", "glacier:GetVaultLock", "glacier:ListTagsForVault", "glacier:ListVaults", "globalaccelerator:DescribeAcceleratorAttributes", "globalaccelerator:ListAccelerators", "globalaccelerator:ListTagsForResource", "glue:GetConnection", "glue:GetConnections", "glue:GetDataCatalogEncryptionSettings", "glue:GetDatabases", "glue:GetSecurityConfigurations", "grafana:DescribeWorkspace", "grafana:DescribeWorkspaceAuthentication", "grafana:ListWorkspaces", "guardduty:GetDetector", "guardduty:GetFindings", "guardduty:GetMasterAccount", "guardduty:ListDetectors", "guardduty:ListFindings", "iam:GenerateCredentialReport", "iam:GenerateServiceLastAccessedDetails", "iam:GetAccountAuthorizationDetails", "iam:GetAccountPasswordPolicy", "iam:GetAccountSummary", "iam:GetCredentialReport", "iam:GetGroupPolicy", "iam:GetOpenIDConnectProvider", "iam:GetPolicyVersion", "iam:GetRolePolicy", "iam:GetSAMLProvider", "iam:GetServiceLastAccessedDetails", "iam:GetUserPolicy", "iam:ListAccessKeys", "iam:ListAttachedGroupPolicies", "iam:ListAttachedRolePolicies", "iam:ListAttachedUserPolicies", "iam:ListEntitiesForPolicy", "iam:ListGroupPolicies", "iam:ListGroups", "iam:ListGroupsForUser", "iam:ListInstanceProfilesForRole", "iam:ListMFADeviceTags", "iam:ListMFADevices", "iam:ListOpenIDConnectProviders", "iam:ListPolicies", "iam:ListPolicyTags", "iam:ListPolicyVersions", "iam:ListRolePolicies", "iam:ListRoleTags", "iam:ListRoles", "iam:ListSAMLProviderTags", "iam:ListSAMLProviders", "iam:ListSSHPublicKeys", "iam:ListServerCertificateTags", "iam:ListServerCertificates", "iam:ListUserPolicies", "iam:ListUserTags", "iam:ListUsers", "iam:ListVirtualMFADevices", "identitystore:ListGroupMemberships", "identitystore:ListGroups", "identitystore:ListUsers", "inspector:DescribeAssessmentTemplates", "inspector:DescribeFindings", "inspector:DescribeRulesPackages", "inspector:ListAssessmentRunAgents", "inspector:ListAssessmentRuns", "inspector:ListAssessmentTemplates", "inspector:ListFindings", "inspector:ListRulesPackages", "iot:DescribeAccountAuditConfiguration", "iot:DescribeDomainConfiguration", "iot:ListDomainConfigurations", "iot:ListTagsForResource", "kafka:ListClusters", "kendra:DescribeIndex", "kendra:ListTagsForResource", "kinesis:DescribeStream", "kinesis:ListStreams", "kinesis:ListTagsForStream", "kinesisanalytics:DescribeApplication", "kinesisanalytics:ListApplications", "kinesisanalytics:ListTagsForResource", "kinesisvideo:DescribeNotificationConfiguration", "kinesisvideo:ListStreams", "kinesisvideo:ListTagsForStream", "kms:DescribeKey", "kms:GetKeyPolicy", "kms:GetKeyRotationStatus", "kms:ListAliases", "kms:ListKeyPolicies", "kms:ListKeys", "kms:ListResourceTags", "lakeformation:GetDataLakeSettings", "lambda:GetFunctionUrlConfig", "lambda:GetLayerVersionPolicy", "lambda:GetPolicy", "lambda:ListCodeSigningConfigs", "lambda:ListFunctions", "lambda:ListLayerVersions", "lambda:ListLayers", "lambda:ListTags", "lex:DescribeBot", "lex:DescribeBotVersion", "lex:GetBot", "lex:GetBotVersions", "lex:GetBots", "lex:ListBotVersions", "lex:ListBots", "lex:ListTagsForResource", "lightsail:GetInstances", "logs:DescribeLogGroups", "logs:DescribeLogStreams", "logs:DescribeMetricFilters", "logs:DescribeSubscriptionFilters", "logs:GetLogEvents", "logs:ListTagsLogGroup", "macie2:GetClassificationExportConfiguration", "macie2:GetFindingsPublicationConfiguration", "macie2:GetMacieSession", "macie2:GetRevealConfiguration", "mediastore:GetContainerPolicy", "mediastore:GetCorsPolicy", "mediastore:ListContainers", "mediastore:ListTagsForResource", "memorydb:DescribeClusters", "memorydb:DescribeParameterGroups", "memorydb:DescribeParameters", "memorydb:ListTags", "mobiletargeting:GetApps", "mobiletargeting:GetEmailChannel", "mobiletargeting:GetSmsChannel", "mq:DescribeBroker" ],
              "Resource" : "*"
            } ]
          }
        }
      }
    },
    "Outputs" : {
      "PrismaCloudRoleARN" : {
        "Description" : "Information about the value",
        "Value" : {
          "Fn::GetAtt" : [ "PrismaCloudRole", "Arn" ]
        }
      }
    }
  }
  ```
</details>


### 3. Onboard your AWS account on to Prisma Cloud
Use Prisma Cloud *Save API* to onboard the account by passing the *IAM Role ARN* and other parameters in the request payload.

Invoke the [Add AWS Cloud Account](/prisma-cloud/api/cspm/add-aws-cloud-account/) ![alt text](/icons/api-icon-pan-dev.svg) with the IAM Role ARN created in the previous step, required features state, and other payload.

<details>
  <summary>A sample request to onboard a standalone AWS account</summary>

  ```bash
  curl -v --request POST 'https://api.prismacloud.io/cas/v1/aws_account' \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --header 'x-redlock-auth: <YOUR_TOKEN>' \
  --data-raw '{
    "accountId": "<accountId>",
    "accountType": "account",
    "enabled": true,
    "groupIds": [
        "<groupId>"
    ],
    "name": "<account name to be added in prisma>",
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
    ]
  }'
  ```
</details>

<details>
  <summary>Sample Response</summary>

  200 (Success)

</details>