---
id: api-integration-config
title: Integration Configurations
sidebar_label: Integration Configurations
---

The Prisma Cloud integration API endpoints enable you to receive Prisma Cloud alerts in external systems. The [integration endpoint documentation](/prisma-cloud/api/cspm/integrations) describes request and response details for each endpoint.

The request body for some of the endpoints includes an `integrationConfig` parameter that is a map of key/value pairs. The type of integration defines the content of these key/value pairs. The information below provides the details for this `integrationConfig` parameter for each listed technology.

Note that most external systems require some configuration before you can use the Prisma Cloud API endpoints to add an integration to that system. For more details, see [Prisma Cloud Integrations](https://docs.prismacloud.io/en/classic/cspm-admin-guide/configure-external-integrations-on-prisma-cloud/prisma-cloud-integrations). If you are upgraded to the Darwin release, see [Prisma Cloud Integrations](https://docs.prismacloud.io/en/enterprise-edition/content-collections/administration/configure-external-integrations-on-prisma-cloud/prisma-cloud-integrations).


### AWS Security Hub

Prisma Cloud integrates with AWS Security Hub for centralized visibility into security and compliance risks associated with your cloud assets on the AWS Security Hub console.

As a part of the integration, Prisma Cloud monitors your AWS cloud assets. It sends alerts about resource misconfigurations, compliance violations, network security risks, and anomalous user activities directly to the AWS Security Hub console providing a centralized and comprehensive view of the cloud assets deployed on your AWS accounts.


Note: Prisma Cloud integration with AWS Security Hub is not supported for `US Gov Cloud` regions.


#### Add, Update, or Test an AWS Security Hub Integration


To add an AWS Security Hub integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter is `aws_security_hub`, and the `integrationConfig` parameter contains the following key/value pairs.


| Key            | Value Description                                                                                                 | Value Type | Default Value or Required |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------- |
| region         | List of Regions where Prisma Cloud on AWS Security Hub is enabled for your cloud account | List of Objects<br/>{<br/>String name;<br/>String apiIdentifier;<br/>String cloudType;<br/>String sdkId;<br/>Boolean enabled;<br/>}    | Required               |
| defaultRegion        | The region where you will receive alert notifications for global resources |  Object<br/>{<br/>String name;<br/>String apiIdentifier;<br/>String cloudType;<br/>String sdkId;<br/>Boolean enabled;<br/>}    | Required if the user wants to receive global alerts               |
| accountId     | The Account ID of the AWS account that you have onboarded on Prisma Cloud | string     | Required                |


To update an AWS Security Hub integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.


To test an AWS Security Hub, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).


##### Example Request Body to Add an Amazon Security Hub Integration


```json
{
   "description": "",
   "enabled": true,
   "integrationConfig": {
       "regions": [
           {
               "name": "",
               "apiIdentifier": "",
               "cloudType": "",
               "sdkId": "",
               "enabled": true
           },
           {
               "name": "",
               "apiIdentifier": "",
               "cloudType": "",
               "sdkId": "",
               "enabled": true
           }
       ],
       "defaultRegion": {
           "name": "",
           "apiIdentifier": "",
           "cloudType": "",
           "sdkId": "",
           "enabled": true
       },
       "accountId": ""
   },
   "integrationType": "",
   "name": "",
   "id": ""
}
```

### Amazon Security Lake

Prisma Cloud integrates with Amazon Security Lake to ingest Prisma Cloud Open Cybersecurity Schema Framework (OCSF) compliant vulnerability security data into Amazon Security Lake.

Note that you can configure only one Amazon Security Lake per customer.

#### Add, Update, or Test an Amazon Security Lake Integration

To add an Amazon Security Lake integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter is `aws_sdl`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key            | Value Description                                                                                                 | Value Type | Default Value or Required |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------- |
| s3Uri          | Amazon S3 bucket URI. Format: `s3://bucketname/ or s3://bucketname/foldername/`                                                                                              | string     | _required_                |
| region         | AWS region where the S3 bucket resides                                                                            | string     | _required_                |
| roleArn        | Role ARN associated with the IAM role on Prisma Cloud                                                             | string     | _required_                |
| externalId     | External ID associated with the IAM role on Prisma Cloud. Any new or updated value must be a unique 128-bit UUID. | string     | _required_                |

To update an Amazon Security Lake integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

To test an Amazon Security Lake integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add an Amazon Security Lake Integration

```json
{
  "integrationType": "aws_sdl",
  "name": "",
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "s3Uri": "",
    "region": "",
    "roleArn": "",
    "externalId": ""
  }
}
```

##### Example Request Body to Test an Amazon Security Lake Integration

```json
{
  "integrationType": "aws_sdl",
  "name": "",
  "integrationConfig": {
    "s3Uri": "",
    "region": "",
    "roleArn": "",
    "externalId": ""
  }
}
```

### Amazon S3

Prisma Cloud integrates with Amazon S3 to stream Prisma Cloud alerts to an Amazon S3 bucket or folder.

Note that Prisma Cloud supports this integration for only alerts 2.0-enabled tenants.

#### Add, Update, or Test an Amazon S3 Integration

To add an Amazon S3 integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter is `aws_s3`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key            | Value Description                                                                                                 | Value Type | Default Value or Required |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------- |
| s3Uri          | Amazon S3 bucket URI                                                                                              | string     | _required_                |
| region         | AWS region where the S3 bucket resides                                                                            | string     | _required_                |
| roleArn        | Role ARN associated with the IAM role on Prisma Cloud                                                             | string     | _required_                |
| externalId     | External ID associated with the IAM role on Prisma Cloud. Any new or updated value must be a unique 128-bit UUID. | string     | _required_                |
| rollUpInterval | Time at which batching of Prisma Cloud alerts would roll up. Valid values are in minutes: 15, 30, 60, 180.        | string     | Default is 60             |

To update an Amazon S3 integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

To test an Amazon S3 integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add an Amazon S3 Integration

```json
{
  "integrationType": "aws_s3",
  "name": "",
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "s3Uri": "",
    "region": "",
    "roleArn": "",
    "externalId": "",
    "rollUpInterval": 60
  }
}
```

##### Example Request Body to Test an Amazon S3 Integration

```json
{
  "integrationType": "aws_s3",
  "name": "",
  "integrationConfig": {
    "s3Uri": "",
    "region": "",
    "roleArn": "",
    "externalId": "",
    "rollUpInterval": 60
  }
}
```

### Amazon SQS

Prisma Cloud can send alerts to Amazon Simple Queue Service (SQS). Customers can consume these alerts through a Splunk add-on or through the AWS CloudFormation service. Once you [configure Amazon SQS to receive Prisma Cloud alerts](https://docs.prismacloud.io/en/classic/cspm-admin-guide/configure-external-integrations-on-prisma-cloud/integrate-prisma-cloud-with-amazon-sqs), you can use an API request to add the Amazon SQS integration to Prisma Cloud. If you are upgraded to Darwin, see [configure Amazon SQS to receive Prisma Cloud alerts](https://docs.prismacloud.io/en/enterprise-edition/content-collections/administration/configure-external-integrations-on-prisma-cloud/integrate-prisma-cloud-with-amazon-sqs).

#### Add, Update, or Test an Amazon SQS Integration

To add an Amazon SQS integration, make the request as described in [Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter for an SQS integration is `amazon_sqs`.

The `integrationConfig` parameter contains the following key/value pairs when you are using IAM access keys:

| Key       | Value Description                                                          | Value Type | Default Value or Required                                                                    |
| --------- | -------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------- |
| queueUrl  | The Queue URL you used when you configured Prisma Cloud in Amazon SQS      | string     | _required_                                                                                   |
| moreInfo  | true=specific IAM credentials are specified for SQS queue access           | boolean    | Default is **false**                                                                         |
| accessKey | AWS access key belonging to AWS IAM credentials meant for SQS queue access | string     | Default is access provided during onboarding of AWS cloud account to which SQS queue belongs |
| secretKey | AWS secret key for the given access key                                    | string     | Default is access provided during onboarding of AWS cloud account to which SQS queue belongs |

The `integrationConfig` parameter contains the following key/value pairs when you are using the IAM Role associated with Prisma Cloud:

| Key        | Value Description                                                                                            | Value Type | Default Value or Required |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ---------- | ------------------------- |
| queueUrl   | The Queue URL you used when you configured Prisma Cloud in Amazon SQS                                        | string     | _required_                |
| moreInfo   | true=specific IAM credentials are specified for SQS queue access                                             | boolean    | Default is **false**      |
| roleArn    | Role ARN associated with the IAM role on Prisma Cloud                                                        | string     | _required_                |
| externalId | External ID associated with the IAM role on Prisma Cloud. New or updated value must be a unique 128-bit UUID | string     | _required_                |

To update an Amazon SQS integration, make your request as described in [Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig.queueUrl` is mutable.

To test an Amazon SQS integration, make the request with the corresponding request body described in [Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add or Test an Amazon SQS Integration with IAM Access Keys

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "queueUrl": "",
    "moreInfo": true,
    "accessKey": "",
    "secretKey": ""
  },
  "integrationType": "amazon_sqs",
  "name": ""
}
```

##### Example Request Body to Add or Test an Amazon SQS Integration with IAM Role

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "queueUrl": "",
    "moreInfo": true,
    "roleArn": "",
    "externalId": ""
  },
  "integrationType": "amazon_sqs",
  "name": ""
}
```

### Azure Service Bus Queue

Prisma Cloud can send alerts to an Azure Service Bus messaging service. To authorize access, you can either (1) use a shared access signature to limit access permissions to the Service Bus namespace or queue or (2) use the service principal credentials associated with the Azure Cloud account you've on-boarded to Prisma Cloud. If you plan to use the service principal that uses Azure Active Directory to authorize requests, you must include the additional role _Azure Service Bus Data Sender_ and enable _send_ access to the Service Bus namespace and queues. For details about these prerequisites, see [Integrate Prisma Cloud with Azure Service Bus](https://docs.prismacloud.io/en/classic/cspm-admin-guide/configure-external-integrations-on-prisma-cloud/integrate-prisma-cloud-with-azure-service-bus-queue). If you are upgraded to the Darwin release, see [Integrate Prisma Cloud with Azure Service Bus](https://docs.prismacloud.io/en/enterprise-edition/content-collections/administration/configure-external-integrations-on-prisma-cloud/integrate-prisma-cloud-with-azure-service-bus-queue).

#### Add, Update, or Test an Azure Service Bus Queue Integration

To add an Azure Service Bus queue integration, make your request as described in [Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter for an Azure Service Bus queue integration is `azure_service_bus_queue`.

If you want to use the service principal-based access provided when the Azure cloud account was onboarded to Prisma Cloud, then the `integrationConfig` parameter contains the following key/value pairs.

| Key       | Value Description                                                                    | Value Type | Default Value or Required |
| --------- | ------------------------------------------------------------------------------------ | ---------- | ------------------------- |
| accountId | Azure account ID with service principal to which the Azure Service Bus queue belongs | string     | _required_                |
| queueUrl  | The URL configured in the Azure Service Bus queue where Prisma sends alerts          | string     | _required_                |

If you want to use a role with limited permissions, then the `integrationConfig` parameter contains the following key/value pairs.

| Key              | Value Description                                                           | Value Type | Default Value or Required |
| ---------------- | --------------------------------------------------------------------------- | ---------- | ------------------------- |
| connectionString | Azure Shared Access String connection string                                | string     | _required_                |
| queueUrl         | The URL configured in the Azure Service Bus queue where Prisma sends alerts | string     | _required_                |

To update an Azure Service Bus queue integration, make your request as described in [Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Only parameter `integrationConfig.queueUrl` is mutable.

To test an Azure Service Bus queue integration, make your request as described in [Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add or Test an Azure Service Bus Queue with Azure Account ID

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "accountId": "",
    "queueUrl": ""
  },
  "integrationType": "azure_service_bus_queue",
  "name": ""
}
```

##### Example Request Body to Add or Test an Azure Service Bus Queue with a Shared Access String

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "accountId": "",
    "queueUrl": ""
  },
  "integrationType": "azure_service_bus_queue",
  "name": ""
}
```

### Cortex XSOAR

Prisma Cloud integrates with Cortex XSOAR to send alerts to Cortex XSOAR for resource misconfigurations, compliance violations, network security risks, and anomalous user activities.

#### Add or Update a Cortex XSOAR Integration

To add a Cortex XSOAR integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter is `demisto`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key     | Value Description                                                                                                      | Value Type | Default Value or Required |
| ------- | ---------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------- |
| hostUrl | The Cortex XSOAR instance FQDN/IP&mdash;either the name or the IP address of the instance                              | string     | _required_                |
| apiKey  | The consumer key you configured when you created the Prisma Cloud application access in your Cortex XSOAR environment. | string     | _required_                |
| demistoVersion  | The Cortex XSOAR version. Possible values: 6.0 and 8.0.  | string     | _required_                |
| apiKeyID  | The key ID linked to the consumer key (apiKey). This parameter is required only for Cortex XSOAR 8.0. | string     | null                |


To update a Cortex XSOAR integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

##### Example Request Body to Add a Cortex XSOAR Integration

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "apiKey": "",
    "demistoVersion":"6.0",
    "hostUrl": ""
  },
  "integrationType": "demisto",
  "name": ""
}
```

### Google Cloud SCC

Prisma Cloud integrates with Google Cloud Security Command Center (SCC) to send alerts to Google Cloud SCC for resource misconfigurations, compliance violations, network security risks, and anomalous user activities.

#### Add, Update, or Test a Google Cloud SCC Integration

To add a Google Cloud SCC integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter is `google_cscc`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key      | Value Description                                                                               | Value Type | Default Value or Required |
| -------- | ----------------------------------------------------------------------------------------------- | ---------- | ------------------------- |
| orgId    | GCP organization ID                                                                             | string     | _required_                |
| sourceId | GCP source ID for the service account you used to onboard your GCP organization to Prisma Cloud | string     | _required_                |

To update a Google Cloud SCC integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

To test a Google Cloud SCC integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add or Test a Google Cloud SCC Integration

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "orgId": "",
    "sourceId": ""
  },
  "integrationType": "google_cscc",
  "name": ""
}
```

### Microsoft Teams

Prisma Cloud integrates with Microsoft Teams to send Microsoft Teams alerts for resource misconfigurations, compliance violations, network security risks, and anomalous user activities.

#### Add, Update, or Test a Microsoft Teams Integration

To add a Microsoft Teams integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter is `microsoft_teams`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key | Value Description | Value Type | Default Value or Required |
| --- | ----------------- | ---------- | ------------------------- |
| url | Webhook URL       | string     | _required_                |

To update a Microsoft Teams integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

To test a Microsoft Teams integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add or Test a Microsoft Teams Integration

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "url": ""
  },
  "integrationType": "microsoft_teams",
  "name": ""
}
```

### Okta

Prisma Cloud integrates with Okta to send alerts to Okta for resource misconfigurations, compliance violations, network security risks, and anomalous user activities.

#### Add, Update, or Test a Okta Integration

To add an Okta integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter is `okta`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key      | Value Description                                                                 | Value Type | Default Value or Required |
| -------- | --------------------------------------------------------------------------------- | ---------- | ------------------------- |
| domain   | Okta domain name                                                                  | string     | _required_                |
| apiToken | The authentication API token for Okta. The token must be of type Read-Only Admin. | string     | _required_                |

To update an Okta integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

To test an Okta integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add or Test an Okta Integration

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "domain": "",
    "apiToken": ""
  },
  "integrationType": "okta",
  "name": ""
}
```

### PagerDuty

Integration with PagerDuty aids alerting, on-call scheduling, escalation policies and incident tracking to increase uptime of your apps, servers, websites and databases. The Prisma Cloud alerts are sent to the PagerDuty service. Your incident response teams are notified to investigate and remediate the security incidents.

#### Add, Update, or Test a PagerDuty Integration

To add a PagerDuty integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter for a PagerDuty integration is `pager_duty`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key            | Value Description         | Value Type | Default Value or Required |
| -------------- | ------------------------- | ---------- | ------------------------- |
| integrationKey | PagerDuty integration key | string     | _required_                |

To update a PagerDuty integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

To test a PagerDuty integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add a PagerDuty Integration

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "integrationKey": ""
  },
  "integrationType": "pager_duty",
  "name": ""
}
```

##### Example Request Body to Test a PagerDuty Integration

```json
{
  "name": "",
  "integrationType": "pager_duty",
  "integrationConfig": {
    "integrationKey": ""
  }
}
```

### Qualys

Prisma Cloud integrates with the Qualys platform to ingest and visualize vulnerability data for your resources that are deployed on the AWS and Azure cloud platforms. You need to get the API URL from your Qualys account and configure settings in Qualys, like Qualys user privileges, before you can use the REST API to set up the Qualys integration in Prisma Cloud.

#### Add, Update, or Test a Qualys Integration

To add a Qualys integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter for a Qualys integration is `qualys`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key      | Value Description                                                      | Value Type | Default Value or Required |
| -------- | ---------------------------------------------------------------------- | ---------- | ------------------------- |
| login    | Qualys login                                                           | string     | _required_                |
| baseUrl  | Qualys Security Operations Center server API URL (without **http(s)**) | string     | _required_                |
| password | Qualys password                                                        | string     | _required_                |

To update a Qualys integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

To test a Qualys integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add or Test a Qualys Integration

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "baseUrl": "",
    "login": "",
    "password": ""
  },
  "integrationType": "qualys",
  "name": ""
}
```

### ServiceNow

Integrate Prisma Cloud with ServiceNow and get automatically notified about Prisma Cloud alerts through ServiceNow tickets to prioritize incidents and vulnerabilities that impact your business. Prisma Cloud integrates with the ITSM module (incident table), the Security Incident Response module (sn_si_incident table), and the Event Management modules (em_event table) on ServiceNow to generate alerts in the form of ITSM Incident, Security Incident, and Event tickets.

#### Add, Update, or Test a ServiceNow Integration

To add a ServiceNow integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter for a ServiceNow integration is `service_now`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key      | Value Description                                                                                                                                                                                                       | Value Type       | Default Value or Required                                                             |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------- |
| hostUrl  | ServiceNow URL                                                                                                                                                                                                          | string           | _required_. For [Update](/prisma-cloud/api/cspm/update-integration-v-1), not mutable. |
| login    | ServiceNow login                                                                                                                                                                                                        | string           | _required_                                                                            |
| password | ServiceNow password for login                                                                                                                                                                                           | string           | _required_                                                                            |
| tables   | Array of key/value pairs that identify the ServiceNow module tables with which to integrate. The possible keys are: `incident`, `sn_si_incident`, `em_event`.<br/>The possible values for each key are: `true`, `false` | array of objects | _required_                                                                            |

To update a ServicNow integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable except for
`integrationConfig.hostUrl`.

To test a ServiceNow integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add a ServiceNow Integration

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "hostUrl": "",
    "login": "",
    "password": "",
    "tables": [
      { "incident": false },
      { "sn_si_incident": false },
      { "em_event": false }
    ]
  },
  "integrationType": "service_now",
  "name": ""
}
```

##### Example Request Body to Test a ServiceNow Integration

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "hostUrl": "",
    "login": "",
    "password": "",
    "tables": [
      { "incident": false },
      { "sn_si_incident": false },
      { "em_event": false }
    ]
  },
  "integrationType": "service_now",
  "name": ""
}
```

### Slack

Prisma Cloud integrates with Slack to post instant messages to your Slack channels.

#### Add, Update, or Test a Slack Integration

To add a Slack integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter is `slack`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key        | Value Description                                          | Value Type | Default Value or Required |
| ---------- | ---------------------------------------------------------- | ---------- | ------------------------- |
| webhookUrl | Slack webhook URL starting with `https://hooks.slack.com/` | string     | _required_                |

To update a Slack integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

To test a Slack integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add or Test a Slack Integration

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "webhookUrl": "https://hooks.slack.com/services/ABC123"
  },
  "integrationType": "slack",
  "name": ""
}
```

### Snowflake

Prisma Cloud integrates with Snowflake.

#### Add, Update, or Test an Snowflake Integration

To add a Snowflake integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter is `snowflake`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key                  | Value Description                                                                                | Value Type | Default Value or Required |
| -------------------- | ------------------------------------------------------------------------------------------------ | ---------- | ------------------------- |
| hostUrl              | Snowflake user name                                                                              | string     | _required_                |
| pipename             | Snowpipe name                                                                                    | string     | _required_                |
| stagingIntegrationId | Integration ID of staging S3 integration                                                         | string     | _required_                |
| privateKey           | Snowflake user private key                                                                       | string     | _required_                |
| passphrase           | Private key passphrase. For encryption.                                                          | string     | _optional_                |
| rollUpInterval       | Defined time in minutes on which batching of alerts would roll up. Valid values: 15, 30, 60, 180 | integer    | Default is 60             |

To update a Snowflake integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

To test a Snowflake integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add a Snowflake Integration

```json
{
  "integrationType": "snowflake",
  "name": "",
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "stagingIntegrationId": "",
    "hostUrl": "",
    "username": "",
    "pipename": "",
    "privateKey": "",
    "passphrase": "",
    "rollUpInterval": 60
  }
}
```

##### Example Request Body to Test a Snowflake Integration

```json
{
  "integrationType": "snowflake",
  "name": "",
  "integrationConfig": {
    "stagingIntegrationId": "",
    "hostUrl": "",
    "username": "",
    "pipename": "",
    "privateKey": "",
    "passphrase": "",
    "rollUpInterval": 60
  }
}
```

### Splunk

Prisma Cloud integrates with Splunk to send Splunk alerts for resource misconfigurations, compliance violations, network security risks, and anomalous user activities.

#### Add, Update, or Test a Splunk Integration

To add a Splunk integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter is `splunk`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key        | Value Description               | Value Type | Default Value or Required |
| ---------- | ------------------------------- | ---------- | ------------------------- |
| authToken  | Splunk HTTP event collector     | string     | _required_                |
| url        | Splunk HTTP event collector URL | string     | _required_                |
| sourceType | Splunk source type              | string     | Default is **\_json**     |

To update a Splunk integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

To test a Splunk integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add or Test a Splunk Integration

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "authToken": "",
    "url": ""
  },
  "integrationType": "splunk",
  "name": ""
}
```

### Tenable

Prisma Cloud integrates with Tenable to send alerts to Tenable for resource misconfigurations, compliance violations, network security risks, and anomalous user activities.

#### Add, Update, or Test a Tenable Integration

To add a Tenable integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter is `tenable`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key       | Value Description          | Value Type | Default Value or Required |
| --------- | -------------------------- | ---------- | ------------------------- |
| accessKey | Access key from Tenable.io | string     | _required_                |
| secretKey | Secret key from Tenable.io | string     | _required_                |

To update a Tenable integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

To test a Tenable integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration).

##### Example Request Body to Add or Test a Tenable Integration

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "accessKey": "",
    "secretKey": ""
  },
  "integrationType": "tenable",
  "name": ""
}
```

### Webhook

The webhook integration enables you to pass information in a JSON format to any third-party integrations that are not natively supported on the Prisma Cloud service. With a webhook integration, you can configure the Prisma Cloud service to send alerts to the webhook URL as an HTTP POST request, so that any services or applications that subscribe to the webhook URL can receive alert notifications in real time.

#### Add, Update, or Test a Webhook Integration

To add a webhook integration, make your request as described in
[Add Integration](/prisma-cloud/api/cspm/create-integration-v-1). As part of the request body, the `integrationType` parameter for a webhook integration is `webhook`, and the `integrationConfig` parameter contains the following key/value pairs.

| Key       | Value Description                                | Value Type | Default Value or Required |
| --------- | ------------------------------------------------ | ---------- | ------------------------- |
| url       | Webhook URL                                      | string     | _required_                |
| authToken | The authentication token for the event collector | string     | _required_                |
| isCustomPayloadEnabled | Set to true to accept custom alert payload. | boolean     | Default is **false**.                |
| customPayloads | Contains detailed information about an alert, such as the cloud account, resource, compliance standard, and policy.<br/>Currently, it is supported only for Config Scanner(CS) policy type. Therefore, specify the value for customPayloads in the following format and the value for CS must be a string:<br/> _"customPayloads": { "CS": "[{custom payload }]" }_ <br/>**Example:** _"customPayloads": { "CS": "[{\"resourceId\":\"${ResourceId}\"}]"}_ | JSON array     | Required if **isCustomPayloadEnabled** is set to **true**.                |

To update a webhook integration, make your request as described in
[Update Integration](/prisma-cloud/api/cspm/update-integration-v-1). Parameter `integrationConfig` is mutable.

To test a webhook integration, make your request as described in
[Test Integration](/prisma-cloud/api/cspm/test-integration). You must also include the `integrationConfig.url` parameter in your request body.

##### Example Request Body to Add a Webhook Integration

```json
{
  "description": "",
  "enabled": true,
  "integrationConfig": {
    "authToken": "",
    "url": ""
  },
  "integrationType": "webhook",
  "name": ""
}
```

##### Example Request Body to Test a Webhook Integration

```json
{
  "name": "",
  "integrationType": "webhook",
  "integrationConfig": {
    "url": ""
  }
}
```
