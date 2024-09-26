---
id: aws-cloud-account-onboarding
title: Automate AWS Cloud Account Onboarding
sidebar_position: 2
---

To successfully onboard an AWS account in Prisma Cloud, create an IAM Role in your AWS account that has a trusted relationship with Prisma Cloud AWS Account. Prisma Cloud uses IAM Role ARN to *AssumeRole* in to your AWS account and ingest various configurations and logs.

> **Recommended**: Use *Terraform* to onboard AWS cloud accounts. Refer to [AWS account onboarding](https://registry.terraform.io/providers/PaloAltoNetworks/prismacloud/latest/docs/resources/cloud_account_v2) guide.

To Onboard using other automation tools(such as python, etc), follow the steps listed below:

<details>
  <summary>A complete code example for AWS Cloud Account Onboarding</summary>

  ```python
  import sys, time, requests, json, boto3, urllib.parse
  ​
  ​
  # Function to wait till CloudFormation Stack is created
  def wait_till_stack_created(cloud_formation_client, stack_name, state):
      is_stack_created = False
      retry_count = 0
      max_retry_count = 4  # Increase If stack Creation is taking more time
      status = None
      while not is_stack_created or retry_count == max_retry_count:
          if retry_count > max_retry_count:
              break
          retry_count = retry_count + 1
          stack_summary = cloud_formation_client.describe_stacks(StackName=stack_name)
          status = stack_summary['Stacks'][0]['StackStatus']
          if status is not None:
              if state != status:
                  print("Waiting for 30 sec while stack {} is {}".format(stack_name, state))
                  time.sleep(30)
                  continue
              else:
                  is_stack_created = True
          print(f"stack status is {status}")
          return status
  ​
      print(f"final stack status is {status}")
      return status
  ​
  ​
  base_url = "https://api.prismacloud.io"
  customerName = None  # optional. customerName which is tenant Name
  username = "<username>"
  password = "<password>"
  ​
  # Prerequisite: Obtain an authorization token by Logging In.
  login_url = f"{base_url}/login"
  ​
  if customerName is not None:
      login_payload = json.dumps({
        "customerName": customerName,
        "username": username,
        "password": password
      })
  else:
      login_payload = json.dumps({
          "username": username,
          "password": password
      })
  ​
  login_headers = {
    'Content-Type': 'application/json'
  }
  ​
  response = requests.request("POST", login_url, headers=login_headers, data=login_payload, verify=False)
  YOUR_TOKEN = response.json()['token']
  ​
  # 1. Fetch Supported Features for cloud type and account type
  supported_features_url = f"{base_url}/cas/v1/features/cloud/aws"
  supported_features_payload = json.dumps({
    "accountType": "account"
  })
  supported_features_headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-redlock-auth': YOUR_TOKEN
  }
  ​
  response = requests.request("POST", supported_features_url, headers=supported_features_headers,
                              data=supported_features_payload, verify=False)
  features = response.json()['supportedFeatures']
  features.remove('Cloud Visibility Compliance and Governance')  # Remove the default feature
  ​
  # 2. Generate AWS CFT and create IAM Role
  cft_template_gen_url = f"{base_url}/cas/v1/aws_template/presigned_url"
  ​
  cft_template_gen_payload = json.dumps({
    "accountId": "<accountId>",
    "accountType": "account",
    "features": features
  })
  cft_template_gen_headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-redlock-auth': YOUR_TOKEN
  }
  ​
  response = requests.request("POST", cft_template_gen_url, headers=cft_template_gen_headers
                              , data=cft_template_gen_payload, verify=False)
  response = response.json()
  createStackLinkWithS3PresignedUrl = response['createStackLinkWithS3PresignedUrl']
  # Extract urldecoded s3 cft link
  s3_presigned_cft_link = urllib.parse.unquote(createStackLinkWithS3PresignedUrl.split("templateURL=")[-1])
  ​
  # Initialize boto3 client, Provide aws access key and secret access key for the account to be onboarded
  cloud_formation_client = boto3.client('cloudformation', aws_access_key_id="<aws_access_key_id>",
                                        aws_secret_access_key="<aws_secret_access_key>")
  ​
  stack_name = 'PrismaCloudRole'  # Change if needed
  parameters = [
      {
          'ParameterKey': "PrismaCloudRoleName",
          'ParameterValue': stack_name,
          'UsePreviousValue': False,
      }
  ]
  capabilities = ['CAPABILITY_NAMED_IAM']
  create_stack_resp = cloud_formation_client.create_stack(StackName=stack_name, TemplateURL=s3_presigned_cft_link,
                                                          Parameters=parameters, Capabilities=capabilities)
  ​
  # Wait till stack is created.
  sleep_time = 60*2  # Default wait time 2min
  time.sleep(sleep_time)
  stack_state = wait_till_stack_created(cloud_formation_client, stack_name, "CREATE_COMPLETE")
  ​
  # Get IAM role ARN If stack creation is complete
  if stack_state == "CREATE_COMPLETE":
      print(f"CREATED stack with name {stack_name}")
      describe_stack_resp = cloud_formation_client.describe_stacks(StackName=stack_name)
      stack_outputs = describe_stack_resp['Stacks'][0]['Outputs']
      outputs = dict()
      for output in stack_outputs:
          key = output.get('OutputKey')
          value = output.get('OutputValue')
          outputs[key] = value
  ​
      iam_role_arn = outputs.get('PrismaCloudRoleARN')
      if iam_role_arn is None:
          sys.exit(f"PrismaCloudRoleARN is not present in outputs for the stack: {stack_name}")
  ​
  ​
  # Login again, In case if the token is expired
  response = requests.request("POST", login_url, headers=login_headers, data=login_payload, verify=False)
  YOUR_TOKEN = response.json()['token']
  ​
  # 3. Onboard your AWS account to Prisma Cloud
  save_account_url = f"{base_url}/cas/v1/aws_account"
  ​
  save_account_payload = json.dumps({
    "accountId": "<accountId>",
    "accountType": "account",
    "enabled": True,
    "groupIds": [
      "<groupIds>"
    ],
    "name": "<account name to be added in prisma>",
    "roleArn": iam_role_arn,
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
  })
  save_account_headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-redlock-auth': YOUR_TOKEN
  }
  ​
  response = requests.request("POST", save_account_url, headers=save_account_headers, data=save_account_payload,
                              verify=False)
  ​
  if response.status_code == 200:
      print("Successfully onboarded account")
  else:
      print(f"failed to Onboard account. status_code: {response.status_code}")
      print(f"failed to Onboard account. response: {response.text}")
      print(f"failed to Onboard account. status: {response.headers.get('x-redlock-status')}")
  ```
</details>

***Prerequisite***: Obtain an authorization token by [Logging In](/prisma-cloud/api/cspm/app-login/) ![alt text](/icons/api-icon-pan-dev.svg)

:::info

- The token is only valid for 10 minutes, so [refresh it](/prisma-cloud/api/cspm/extend-session/) ![alt text](/icons/api-icon-pan-dev.svg) as needed if you believe your workflow might take longer than that.

- The base url in this guide is a generic `api.prismacloud.io`. Replace it with yours accordingly.

:::

There are **three** main steps to Onboard an AWS Account

- [1. Fetch *Supported Features* for cloud type and account type](#1-fetch-supported-features-for-cloud-type-and-account-type)
- [2. Generate AWS *CFT* and create *IAM Role*](#2-generate-aws-cft-and-create-iam-role)
  - [First option: via generating CFT s3 URL](#first-option-via-generating-cft-s3-url)
    - [Extract the S3 Presigned CFT URL](#extract-the-s3-presigned-cft-url)
  - [Second option: via obtaining CFT in the response](#second-option-via-obtaining-cft-in-the-response)
- [3. Onboard your AWS account to Prisma Cloud](#3-onboard-your-aws-account-to-prisma-cloud)

![](/img/aws-cloud-account-onboarding-workflow-automation.png)

## 1. Fetch *Supported Features* for cloud type and account type

To get the list of supported features, call [Fetch Supported Features](/prisma-cloud/api/cspm/fetch-supported-features/) ![alt text](/icons/api-icon-pan-dev.svg) and refer to the `supportedFeatures` field in the response body.<br/>

> **NOTE:** The `supportedFeatures` contain "*Cloud Visibility Compliance and Governance*" which is enabled by default. Hence, do not include this string as a feature in the request body param in any cloud account API(Like in Add AWS Cloud Account, Update AWS Cloud Account,Generate and Download the AWS CFT Template, etc).

*Sample Request* to get features for accountType: account: 

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

## 2. Generate AWS *CFT* and create *IAM Role*
There are two options here.

### First option: via generating CFT s3 URL

Call the [Generate the AWS CFT Template Link](/prisma-cloud/api/cspm/generate-cft-template-link-aws/) ![alt text](/icons/api-icon-pan-dev.svg) to generate CFT on S3 storage. The CFT will include Prisma Cloud generated `externalId` and the permissions based on selected features.

Use the value of `createStackLinkWithS3PresignedUrl` property in the response to create IAM role via AWS CloudFormation stack.

For example, to get CFT Quick create Stack link for `"accountType": "account"`, and required `features` selected from the supported features API:

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
    "https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?stackName=PrismaCloudApp&templateURL=https%3A%2F%2Fonboarding-templates-app-s3.s3.amazonaws.com%2F806775452214917120%2F375187248419%2Fprisma-cloud-aws-iam-role-1268a9df-5f25-4585-be8c-3ebcc03b1d1d.template%3FX-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEOj%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLWVhc3QtMiJHMEUCIQC94GEu53jRfuZbrpIaWHTCofG27p2CGIE1ob0I0Us36AIgR0HNScAWkWTEQcChWWwEOO7%252BHLNaBC04UuD%252BFoaADqcqmgIIkv%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAFGgwxODg2MTk5NDI3OTIiDG%252FM2%252FpFS97HXwnx0yruAR1VhsSiWGMF8AhNHRUHjcVfpdwa%252B4bJnpD4kgyK2anzh9TRaJILcTF384mg%252FkO71PYQYrOHzw3%252FyqRUGLmJ715%252FU9Lz%252BPynFx%252B6lx23M1CIvroaIBDqr9BFlcefepluy6xiso7oDMI46n8LCUBXUq5NGAcY4heDAVYXvwD5KSMiBytK%252Bct8r4G7R2bxrBm30GAkMhvPjEyhstrSFxheQqe3ZS429LYqpWgOoHiOFonn28R4NkJLEg027gPxpTKsqqiGysTymaDs4hHe7tRAG55L2YPsShoMe2SaWfTehivX%252BWbHO1%252FfIazMS7NPtqAwr%252Fv9nwY6nQEWKSoO7JUCkXAKDTIYrKV%252Bl5WG9YP2HLaL62OvMhicZE5lWLDeYL4%252Bo6qgCoH%252FxrbHAsY4LEmFNgxm2I%252FlK7KF6ugEsPHf33XnYgcN0a4VG7POoPyfk0RbNy6j002Guikcg3wieuROfF4NpnwrjvYfhbB2VM95Vpd1lhPRiqIxMJXIPNHwMQUu9t4ro6W0cRQUQVf5xpUBV1JC8%252BV1%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20230301T163039Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D3597%26X-Amz-Credential%3DASIASX2U75OEE4QNMK7F%252F20230301%252Fus-east-2%252Fs3%252Faws4_request%26X-Amz-Signature%3D75b43898503df3d757e8512d90a58c6f1c6de00b209403aa21cd28704fed7dfe",
      "externalId": "302bf9ab-b110-4588-8c8f-3bea9051a4d3"
}
```

#### Extract the S3 Presigned CFT URL
Extract the value of `templateURL` query string parameter from the `createStackLinkWithS3PresignedUrl` field of the response body.

In our case the **encoded** *S3 CFT URL* looks like this:

```
https%3A%2F%2Fonboarding-templates-app-s3.s3.amazonaws.com%2F806775452214917120%2F375187248419%2Fprisma-cloud-aws-iam-role-1268a9df-5f25-4585-be8c-3ebcc03b1d1d.template%3FX-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEOj%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLWVhc3QtMiJHMEUCIQC94GEu53jRfuZbrpIaWHTCofG27p2CGIE1ob0I0Us36AIgR0HNScAWkWTEQcChWWwEOO7%252BHLNaBC04UuD%252BFoaADqcqmgIIkv%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAFGgwxODg2MTk5NDI3OTIiDG%252FM2%252FpFS97HXwnx0yruAR1VhsSiWGMF8AhNHRUHjcVfpdwa%252B4bJnpD4kgyK2anzh9TRaJILcTF384mg%252FkO71PYQYrOHzw3%252FyqRUGLmJ715%252FU9Lz%252BPynFx%252B6lx23M1CIvroaIBDqr9BFlcefepluy6xiso7oDMI46n8LCUBXUq5NGAcY4heDAVYXvwD5KSMiBytK%252Bct8r4G7R2bxrBm30GAkMhvPjEyhstrSFxheQqe3ZS429LYqpWgOoHiOFonn28R4NkJLEg027gPxpTKsqqiGysTymaDs4hHe7tRAG55L2YPsShoMe2SaWfTehivX%252BWbHO1%252FfIazMS7NPtqAwr%252Fv9nwY6nQEWKSoO7JUCkXAKDTIYrKV%252Bl5WG9YP2HLaL62OvMhicZE5lWLDeYL4%252Bo6qgCoH%252FxrbHAsY4LEmFNgxm2I%252FlK7KF6ugEsPHf33XnYgcN0a4VG7POoPyfk0RbNy6j002Guikcg3wieuROfF4NpnwrjvYfhbB2VM95Vpd1lhPRiqIxMJXIPNHwMQUu9t4ro6W0cRQUQVf5xpUBV1JC8%252BV1%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20230301T163039Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D3597%26X-Amz-Credential%3DASIASX2U75OEE4QNMK7F%252F20230301%252Fus-east-2%252Fs3%252Faws4_request%26X-Amz-Signature%3D75b43898503df3d757e8512d90a58c6f1c6de00b209403aa21cd28704fed7dfe
```

After **url decoding** it, we get:

```     
https://onboarding-templates-app-s3.s3.amazonaws.com/123456789012345678/123456789012/prisma-cloud-aws-iam-role-1268a9df-5f25-4585-be8c-3ebcc03b1d1d.template?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQC94GEu53jRfuZbrpIaWHTCofG27p2CGIE1ob0I0Us36AIgR0HNScAWkWTEQcChWWwEOO7%2BHLNaBC04UuD%2BFoaADqcqmgIIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwxODg2MTk5NDI3OTIiDG%2FM2%2FpFS97HXwnx0yruAR1VhsSiWGMF8AhNHRUHjcVfpdwa%2B4bJnpD4kgyK2anzh9TRaJILcTF384mg%2FkO71PYQYrOHzw3%2FyqRUGLmJ715%2FU9Lz%2BPynFx%2B6lx23M1CIvroaIBDqr9BFlcefepluy6xiso7oDMI46n8LCUBXUq5NGAcY4heDAVYXvwD5KSMiBytK%2Bct8r4G7R2bxrBm30GAkMhvPjEyhstrSFxheQqe3ZS429LYqpWgOoHiOFonn28R4NkJLEg027gPxpTKsqqiGysTymaDs4hHe7tRAG55L2YPsShoMe2SaWfTehivX%2BWbHO1%2FfIazMS7NPtqAwr%2Fv9nwY6nQEWKSoO7JUCkXAKDTIYrKV%2Bl5WG9YP2HLaL62OvMhicZE5lWLDeYL4%2Bo6qgCoH%2FxrbHAsY4LEmFNgxm2I%2FlK7KF6ugEsPHf33XnYgcN0a4VG7POoPyfk0RbNy6j002Guikcg3wieuROfF4NpnwrjvYfhbB2VM95Vpd1lhPRiqIxMJXIPNHwMQUu9t4ro6W0cRQUQVf5xpUBV1JC8%2BV1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230301T163039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3597&X-Amz-Credential=ASIASX2U75OEE4QNMK7F%2F20230301%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=75b43898503df3d757e8512d90a58c6f1c6de00b209403aa21cd28704fed7dfe
```

<details>
  <summary>Sample Python code snippet to extract the S3 Presigned CFT URL</summary>

  ```python
  import urllib.parse

  # createStackLinkWithS3PresignedUrl from the API response.
  createStackLinkWithS3PresignedUrl = "https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?stackName=PrismaCloudApp&templateURL=https%3A%2F%2Fonboarding-templates-app-s3.s3.amazonaws.com%2F806775452214917120%2F375187248419%2Fprisma-cloud-aws-iam-role-1268a9df-5f25-4585-be8c-3ebcc03b1d1d.template%3FX-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEOj%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLWVhc3QtMiJHMEUCIQC94GEu53jRfuZbrpIaWHTCofG27p2CGIE1ob0I0Us36AIgR0HNScAWkWTEQcChWWwEOO7%252BHLNaBC04UuD%252BFoaADqcqmgIIkv%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAFGgwxODg2MTk5NDI3OTIiDG%252FM2%252FpFS97HXwnx0yruAR1VhsSiWGMF8AhNHRUHjcVfpdwa%252B4bJnpD4kgyK2anzh9TRaJILcTF384mg%252FkO71PYQYrOHzw3%252FyqRUGLmJ715%252FU9Lz%252BPynFx%252B6lx23M1CIvroaIBDqr9BFlcefepluy6xiso7oDMI46n8LCUBXUq5NGAcY4heDAVYXvwD5KSMiBytK%252Bct8r4G7R2bxrBm30GAkMhvPjEyhstrSFxheQqe3ZS429LYqpWgOoHiOFonn28R4NkJLEg027gPxpTKsqqiGysTymaDs4hHe7tRAG55L2YPsShoMe2SaWfTehivX%252BWbHO1%252FfIazMS7NPtqAwr%252Fv9nwY6nQEWKSoO7JUCkXAKDTIYrKV%252Bl5WG9YP2HLaL62OvMhicZE5lWLDeYL4%252Bo6qgCoH%252FxrbHAsY4LEmFNgxm2I%252FlK7KF6ugEsPHf33XnYgcN0a4VG7POoPyfk0RbNy6j002Guikcg3wieuROfF4NpnwrjvYfhbB2VM95Vpd1lhPRiqIxMJXIPNHwMQUu9t4ro6W0cRQUQVf5xpUBV1JC8%252BV1%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20230301T163039Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D3597%26X-Amz-Credential%3DASIASX2U75OEE4QNMK7F%252F20230301%252Fus-east-2%252Fs3%252Faws4_request%26X-Amz-Signature%3D75b43898503df3d757e8512d90a58c6f1c6de00b209403aa21cd28704fed7dfe"
  
  s3_presigned_cft_link = urllib.parse.unquote(createStackLinkWithS3PresignedUrl.split("templateURL=")[-1])
  ```
</details>

Use the **extracted s3 link** to create or update the *IAM role* using AWS *CloudFormation Stack*.

<details>
  <summary>Sample code snippet to create Cloudformation Stack using boto3</summary>

  ```python
  import boto3

  # Extracted urldecoded s3 cft link from previous 2.1.b step
  s3_urldecoded_cft_template_path = "https://onboarding-templates-app-s3.s3.amazonaws.com/123456789012345678/123456789012/prisma-cloud-aws-iam-role-1268a9df-5f25-4585-be8c-3ebcc03b1d1d.template?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQC94GEu53jRfuZbrpIaWHTCofG27p2CGIE1ob0I0Us36AIgR0HNScAWkWTEQcChWWwEOO7%2BHLNaBC04UuD%2BFoaADqcqmgIIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwxODg2MTk5NDI3OTIiDG%2FM2%2FpFS97HXwnx0yruAR1VhsSiWGMF8AhNHRUHjcVfpdwa%2B4bJnpD4kgyK2anzh9TRaJILcTF384mg%2FkO71PYQYrOHzw3%2FyqRUGLmJ715%2FU9Lz%2BPynFx%2B6lx23M1CIvroaIBDqr9BFlcefepluy6xiso7oDMI46n8LCUBXUq5NGAcY4heDAVYXvwD5KSMiBytK%2Bct8r4G7R2bxrBm30GAkMhvPjEyhstrSFxheQqe3ZS429LYqpWgOoHiOFonn28R4NkJLEg027gPxpTKsqqiGysTymaDs4hHe7tRAG55L2YPsShoMe2SaWfTehivX%2BWbHO1%2FfIazMS7NPtqAwr%2Fv9nwY6nQEWKSoO7JUCkXAKDTIYrKV%2Bl5WG9YP2HLaL62OvMhicZE5lWLDeYL4%2Bo6qgCoH%2FxrbHAsY4LEmFNgxm2I%2FlK7KF6ugEsPHf33XnYgcN0a4VG7POoPyfk0RbNy6j002Guikcg3wieuROfF4NpnwrjvYfhbB2VM95Vpd1lhPRiqIxMJXIPNHwMQUu9t4ro6W0cRQUQVf5xpUBV1JC8%2BV1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230301T163039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3597&X-Amz-Credential=ASIASX2U75OEE4QNMK7F%2F20230301%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=75b43898503df3d757e8512d90a58c6f1c6de00b209403aa21cd28704fed7dfe"
  
  cloud_formation_client = boto3.client('cloudformation')

  stack_name = 'PrismaCloudRole'  # Change if needed
  parameters = [
      {
          'ParameterKey': "PrismaCloudRoleName",
          'ParameterValue': stack_name,
          'UsePreviousValue': False,
      }
  ]
  capabilities = ['CAPABILITY_NAMED_IAM']

  cloud_formation_client.create_stack(StackName=stack_name, TemplateURL=s3_urldecoded_cft_template_path,Parameters=parameters, Capabilities=capabilities)
  ```
</details>


> **NOTE:** The link is valid for one hour. Regenerate the link if it expires.

### Second option: via obtaining CFT in the response

Use [Generate and Download the AWS CFT Template](/prisma-cloud/api/cspm/generate-cft-template-aws) ![alt text](/icons/api-icon-pan-dev.svg) to get the CFT template in the response instead of an s3 link.

For example, To get CFT for the required features selected from the previous supported features API and for `accountType: "account"`

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

The **response** will contain the actual CFT template. Save it with `*.template` extension and use it to create AWS cloudformation stack programmatically (e.g. using Boto3, Terraform)

<details>
  <summary>Sample Response</summary>

  ```json
  {
    "AWSTemplateFormatVersion" : "2010-09-09",
    "Mappings" : {
      "EventBridgeMap" : {
        "EventBridgeRuleNamePrefix" : {
          "Value" : "prisma-cloud-eb-o-123456789012345678-*"
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
        "Default" : "PrismaCloudRole-123456789012345678",
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
            }, ":policy/", "prisma_cloud_1-123456789012345678", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          }, {
            "Fn::Join" : [ "", [ "arn:aws:iam::", {
              "Ref" : "AWS::AccountId"
            }, ":policy/", "prisma_cloud_2-123456789012345678", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          }, {
            "Fn::Join" : [ "", [ "arn:aws:iam::", {
              "Ref" : "AWS::AccountId"
            }, ":policy/", "prisma_cloud_3-123456789012345678", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          }, {
            "Fn::Join" : [ "", [ "arn:aws:iam::", {
              "Ref" : "AWS::AccountId"
            }, ":policy/", "prisma_cloud_4-123456789012345678", "-", {
              "Ref" : "PrismaCloudRoleName"
            } ] ]
          }, {
            "Fn::Join" : [ "", [ "arn:aws:iam::", {
              "Ref" : "AWS::AccountId"
            }, ":policy/", "prisma_cloud_5-123456789012345678", "-", {
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
            "Fn::Join" : [ "", [ "prisma_cloud_1-123456789012345678", "-", {
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
            "Fn::Join" : [ "", [ "prisma_cloud_2-123456789012345678", "-", {
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
            "Fn::Join" : [ "", [ "prisma_cloud_3-123456789012345678", "-", {
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
            "Fn::Join" : [ "", [ "prisma_cloud_4-123456789012345678", "-", {
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
            "Fn::Join" : [ "", [ "prisma_cloud_5-123456789012345678", "-", {
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

## 3. Onboard your AWS account to Prisma Cloud
Invoke the [Add AWS Cloud Account](/prisma-cloud/api/cspm/add-aws-cloud-account/) ![alt text](/icons/api-icon-pan-dev.svg) with the *IAM Role ARN* created in the previous step, required features state, and other payload.

> The "Cloud Visibility Compliance and Governance" value of the `features` property in the request body is enabled by default. Hence, do not include this in the features field. An empty features list indicates that the default capabilities under "Cloud Visibility Compliance and Governance" are **enabled**.

<details>
  <summary>A sample request to onboard AWS account</summary>

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

Sample Response
```
  200 (Success)
```