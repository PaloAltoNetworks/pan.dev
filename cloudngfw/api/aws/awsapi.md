---
id: awsapi
title: Using Cloud NGFW for AWS REST APIs
sidebar_label: Cloud NGFW for AWS API
slug: /aws/api
keywords:
  - NGFW
  - Reference
  - Cloud
  - API
---

Cloud NGFW Programmatic access allows you to create and manage NGFWs and rulestacks using REST
APIs. Using these APIs, you can invoke actions on Cloud NGFW resources (NGFW and rulestacks)
through an application or third-party tool. These APIs also enable you to use Infrastructure-as-code (IAC)
tools such as Cloud Formation Templates (CFT) and Terraform templates. You can install and run these
IAC tools in workloads inside or outside the AWS environment.  

Since Programmatic access is powerful, Cloud NGFW does not provide another access key or secret key
to sign requests for authorization. Instead, you can use the IAM role in your AWS account to access the
Cloud NGFW APIs, then configure which IAM resources can assume this role. This approach improves
the general security posture by using temporary credentials and rotating them automatically.  

Cloud NGFW Programmatic access is disabled by default.

## Enable Programmatic Access

1. [Add an AWS account to Cloud NGFW](https://docs.paloaltonetworks.com/cloud-ngfw/aws/cloud-ngfw-on-aws/getting-started-with-cloud-ngfw-for-aws/onboard-an-account).

2. Enable programmatic access.
    1. Select **Tenant** in the **Cloud NGFW Tenant** console.
	2. Under **General**, click **Programmatic Access** slider.
	3. Click **Enable** to confirm.
	
	![](/cloudngfw/img/enable-programmatic-access.png)
	
3. Sign in to the AWS Management Console and [create an IAM Role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html).  

	Following is the permission policy needed to enable full access to the API gateway.
	
	```
	{
		"Version": "2012-10-17",
		"Statement": [
			{
				"Effect": "Allow",
				"Action": "execute-api:Invoke",
				"Resource": "arn:aws:execute-api:*:*:*"
			}
		]
	}
	```
	![](/cloudngfw/img/iam-role-permission.png)
    
4. [Enable API gateway permission to invoke APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/permissions.html).
	
	Assume roles under the conditions mentioned in Trust relationships.
	
	![](/cloudngfw/img/iam-role-trust-relationship.png)
	
5. Add the following tags (consisting of a key and value) to the IAM role to provide permission policies as needed.

	|Usage                                | TagKey                        | TagValue            |
    | ----------------------------------- | -----------------------       | ------------------- |
    | Create and manage firewalls         | CloudNGFWFirewallAdmin        | Yes                 |                 
    | Create and manage local rulestacks  | CloudNGFWRulestackAdmin       | Yes                 |
	| Create and manage global rulestacks | CloudNGFWGlobalRulestackAdmin | Yes                 |
	
	![](/cloudngfw/img/iam-role-tags.png)
	
	Multiple tags can be assigned to the same role, and can be used to access different Cloud NGFW programmatic access role tokens.
	
6. (**Skip steps 7 through 9 if you choose to use Cloud NGFW Programmatic Access examples**) Use examples in the API and CFT folders under the [Git repository](https://github.com/PaloAltoNetworks/CloudNGFW-AWS-Examples) to access programmatic access tool and CFTs respectively.  

	The tool internally assumes the role and generates Access Key and Secret Key for your role, and generates SigV4 header. It also calls the specific endpoint role to get programmatic access token for Cloud NGFW.
   
7. Assume roles with tag key-pair value mentioned in Step 5 as needed using AWS CLI. 
	
	```
	$ aws sts assume-role --role-arn arn:aws:iam::<AWS-ACCOUNT-ID>:role/<ROLE-NAME> --profile <AWS-PROFILE-TO-ASSUME> --role-session-name <SESSION-NAME>
	
	{
	 "Credentials": {
	 "AccessKeyId": "<ACCESS-KEY>",
	 "SecretAccessKey": "<SECRET-ACCESS-KEY>",
	 "SessionToken": "<SESSION-TOKEN>",
	 "Expiration": "<CREDENTIALS-EXPIRATION>"
	},
	 "AssumedRoleUser": {
	 "AssumedRoleId": "<ROLE-ID>:<SESSION-NAME>",
	 "Arn": "arn:aws:iam::<AWS-ACCOUNT-ID>:role/<ROLE-NAME>/<SESSION-NAME>"
	 }
	}
	
	```
	
	When you assume the role, a temporary Access Key and Secret Key are generated for your account. For more information, see [assume roles that have a specific tag](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_iam-assume-tagged-role.html).

8. Generate Signature Version 4 header using the temporary credentials obtained in Step 7. For more information, see [signing AWS requests with SigV4](https://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html).
	
	Following is an example of AWS SigV4 signed header.
	
	```
	AWS4-HMAC-SHA256 Credential=<ACCESS-KEY>/20220421/<REGION>/execute-api/aws4_request, SignedHeaders=host;x-amz-date;x-amz-security-token, Signature=<SIGNATURE>
	```

9. Generate SubcriptionKey and TokenID.  

	To access Cloud NGFW using REST APIs, use this path before the API call—`api.<regionname>.aws.cloudngfw.paloaltonetworks.com`. For more information, see [Manage API Tokens](/cloudngfw/api/aws/manageapitokens).  
	
	* For cloud firewall admin role—`GET https://api.<regionname>.aws.cloudngfw.paloaltonetworks.com/v1/mgmt/tokens/cloudfirewalladmin`
	* For cloud rulestack admin role—`GET https://api.<regionname>.aws.cloudngfw.paloaltonetworks.com/v1/mgmt/tokens/cloudrulestackadmin`
	* For cloud global rulestack admin role—`GET https://api.<regionname>.aws.cloudngfw.paloaltonetworks.com/v1/mgmt/tokens/cloudglobalrulestackadmin`
	
	For information about roles and permissions, see [Cloud NGFW roles and permissions](https://docs.paloaltonetworks.com/cloud-ngfw/aws/cloud-ngfw-on-aws/getting-started-with-cloud-ngfw-for-aws/invite-users) table. 
	
	***Get Token***
	
	Following is an example of the curl command to get token.
	
	```
	$ curl --location --request GET 'https://api.us-east-1.aws.cloudngfw.paloaltonetworks.com/v1/mgmt/tokens/cloudfirewalladmin' \
    > --header 'X-Amz-Security-Token: <SESSION-TOKEN>' \
    > --header 'X-Amz-Date: <CREDENTIALS-EXPIRATION-AMZ-DATE-FORMAT>' \
    > --header 'Authorization: <AWS-V4-SIGNED-HEADER>'
	```
	
	***Response***
	
	```
	{"Response": {
		"TokenId": "<CLOUD-NGFW-PROGRAMMATIC-ACCESS-TOKEN>",
		"SubscriptionKey": "<SUBSCRIPTION-KEY>", 
		"ExpiryTime": 30, 
		"Enabled": true
		},
		"ResponseStatus": {
			"ErrorCode": 0
		}
	}
    ```
	
10. Add the response data to the **Header** section in the Cloud NGFW console.

	|Header            | Value               |
    | ---------------- | ------------------- |
    | `Authorization`  | `<TokenID>`         |                  
    | `x-api-key`      | `<SubscriptionKey>` |
	
	Following is a sample Cloud NGFW API call.
	
	```
	curl --location --request GET 'https://api.us-east-1.aws.cloudngfw.paloaltonetworks.com/v1/config/rulestacks/rs-1' \
	> --header 'Authorization: <CLOUD-NGFW-PROGRAMMATIC-ACCESS-TOKEN>' \
	> --data-raw ''
	```
	
	***Response***
	
	```
	{"Response": {
		"RuleStackName": "rs-1", 
		"RuleStackCandidate": {
			"Scope": "Local",
			"MinAppIdVersion": "8433-6838", 
			"Profiles": {
				"AntiSpywareProfile": "BestPractice",
				"AntiVirusProfile": "BestPractice", 
				"VulnerabilityProfile": "BestPractice", 
				"URLFilteringProfile":"None", 
				"FileBlockingProfile": "BestPractice"
				}, 
			"UpdateToken": "1"
			}, 
		"RuleStackState":"Uncommitted"}, 
		"ResponseStatus": {
			"ErrorCode": 0
		}
	}
    ```
10.	To revoke programmatic access, use the Access Key, Secret Key, and Subscription Key to call the Token API—`DELETE https://:<region-name>.aws.cloudngfw.paloaltonetworks.comv1/mgmt/tokens/{TokenID}`. 

	>**Note:**Access Key and Secret Key are temporary. Generate new Access Key and Secret Key if they expire.
	
	  
	



