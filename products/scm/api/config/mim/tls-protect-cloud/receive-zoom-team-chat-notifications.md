---
id: receive-zoom-team-chat-notifications
title: "Receive notifications in Zoom Team Chat"
sidebar_label: "Receive notifications in Zoom Team Chat"
keywords:
  - Machine Identity Management
  - Certificate Manager SaaS
---

Staying aware of expiring certificates and unhealthy certificate issuers is critical to protect machine identities and reduce the likelihood of certificate-related outages. Venafi Control Plane allows you to configure such notifications to be sent to Zoom Team Chat so that you can stay aware of potential problems.

This article describes how to configure Venafi Control Plane to send notifications to public or private Zoom Team Chat channels for the following issues:

- **Cert-manager unhealthy issuer state** - Notifications when the cert-manager issuer enters an unhealthy state.
- **Cert-manager issuer health state restored** - Notification when the cert-manager issuer is returned to a healthy state. 
- **Cert-manager certificate resource unhealthy** - Notification when the cert-issuer certificate resource is unhealthy.
- **Cert-manager certificate resource healthy state restored** - Notification when the cert-manager certificate resource is returned to a healthy state.
- **Certificate expiration** - Notification when a certificate is approaching configurable expiration thresholds.

This page walks you through the steps to integrate Venafi Control Plane with Zoom Team Chat and set up these notifications.

## Configuration overview

To send notifications to Zoom Team Chat, you first need to set up an incoming webhook in Zoom Team Chat. Each Zoom Team Chat channel that will receive notifications requires its own incoming webhook.

After setting up the webhook, create a Zoom Team Chat provider in Venafi Control Plane. This step links Venafi Control Plane to the Zoom webhook. If you're sending notifications to multiple channels, you'll need to create a separate provider for each one.

> ✅ Example
> If you want to send cert-issuer notifications to one channel and certificate expiration notifications to another, set up a separate incoming webhook in Zoom for each channel. Then, create a corresponding provider in Venafi Control Plane for each webhook.

These two steps apply to all notification types. The final step depends on the specific type of notification you're configuring. Step 3 provides detailed instructions and examples for each type.

## Before you begin

- Add the [Zoom Incoming Webhook extension][zoom-webhook] to your organization. This needs to be done only once for your organization.

<a name="stepa"></a>

## Step 1: Configure an Incoming Webhook in Zoom Team Chat  

In this step, you'll set up one or more Zoom Team Chat channels to receive notifications. For more details about Zoom Team Chat webhooks, see [Zoom's documentation](https://support.zoom.us/hc/en-us/articles/4418193782029).  

1. Sign in to the Zoom desktop client and click the **Messages** tab.  
2. Select a public or private channel where you want to send notifications.  
3. In the selected channel, run the following command:  

   ```sh
   /inc connect <connectionName>
   ```

  Replace `<connectionName>` with a descriptive name for your connection. 

  This command creates a connection and generates an **Endpoint** and a **Verification token**, which you'll need in the next step.  

> 📘 Note
> To send notifications to multiple Zoom Team Chat channels, repeat these steps for each channel, using a unique `connectionName` for each.

## Step 2: Create a Zoom Team Chat integration in Venafi Control Plane

This step integrates Venafi Control Plane with Zoom Team Chat. To set up the integration, use the **Endpoint** and **Verification token** generated in the previous step.  

Each integration is linked to a single Zoom Team Chat channel. If you need to send notifications to multiple channels, repeat the steps below for each channel, using the unique **Endpoint** and **Verification token** created earlier.  

Create the provider by submitting the following API request, replacing the variables with the values for your configuration. 

**Variable descriptions**

- `name` - The name this channel will use in Venafi Control Plane.  
- `verificationToken` - The verification token of the Zoom Team Chat channel.
- `webhookURL` - The URL of the endpoint of the Zoom Team Chat channel.

```json 
POST https://api.venafi.cloud/graphql
tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Content-Type: application/json

{
  "query": "mutation CreateZoomTeamChatIntegration(  $input: CreateZoomTeamChatIntegrationInput!) {  createZoomTeamChatIntegration(input: $input) {    id    name  }}",
  "variables": {
    "input": {
      "name": "<Channel Name>",
      "zoomTeamChatParams": {
        "verificationToken": "<verification-token>",
        "webhookURL": "<endpoint>"
      }
    }
  }
}
```



Your response should look similar to the following:

```json
{
	"data": {
		"createZoomTeamChatIntegration": {
			"id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
			"name": "Channel Name"
		}
	}
}
```

You will use the `id` value in the response as the `notificationRouterIntegrationID` value in the following step.

Perform this step for each Zoom Team Chat channel that you want to send notifications to, using the unique endpoint and verification tokens for each channel.

## Step 3: Create the routing configuration

In this step, you'll define the rules that must be met for a notification to be sent and specify which integration should receive the notifications.  

Routing configuration uses [CEL expressions](https://cel.dev/). The sections below outline the available data for building CEL expressions and provide several examples to help you get started.  

> ✅ **Best practice**  
> Use the [CEL playground](https://playcel.undistro.io/) to validate your CEL expressions. Invalid CEL expressions won't trigger notifications.  
>  
> To use the playground, copy the JSON from the **Event details** section below into the **Input** field. Then, copy your CEL expression into the **CEL expression** field.  
>  
> **Note:** On the playground, rename `type` to `_type` in both the Input and the CEL expression for the validation to work.  
>  
> Once you've completed the fields, click **Run**. Your expression must evaluate to `true` for notifications to be triggered.  
 
### Routing configuration API request

The following API request will be used for each routing configuration, regardless of the notification type. You'll replace the following parameters to specify the type of notification you want to receive and what channel you want the notification sent to:

- `notificationRouterCelExpression` - The CEL expression that defines what conditions must be satisfied before a notification is sent. See the **Event details** and **Unhealthy issuer CEL expression examples** sections below for help with building your CEL expression.
- `notificationRouterIntegrationID` - The `id` of the integration that the notification should be sent to. The `id` was generated in the previous step.

**API request**

```json
POST https://api.venafi.cloud/graphql
tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Content-Type: application/json

{
  "query": "mutation CreateNotificationRoutingConfiguration(  $notificationRouterFilterConfig: NotificationRouterFilterConfigInput!  $notificationRouterIntegrationConfig: NotificationRouterIntegrationConfigInput!) {  createNotificationRoutingConfiguration(    notificationRouterFilterConfig: $notificationRouterFilterConfig    notificationRouterIntegrationConfig: $notificationRouterIntegrationConfig  ) {    id    notificationRouterIntegrationConfig {      notificationRouterIntegrationID      notificationRouterTemplateID    }    notificationRouterFilterConfig {      notificationRouterCelExpression    }  }}",
  "variables": {
    "notificationRouterFilterConfig": {
      "notificationRouterCelExpression": "<CEL-expression>"
    },
    "notificationRouterIntegrationConfig": {
      "notificationRouterIntegrationID": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    }
  }
}

```

> 📘 **Note**  
> Thie API request validates that the ``notificationRouterCelExpression` compiles without errors. If it fails it returns an error and the notification router is not created. This validation also happens also when updating the notification router. 

See the following sections for the type of notification you're configuring. Each section provide example CEL expressions.

- [Cert-manager issuer unhealthy status](#unhealthy-issuer)
- [Cert-manager issuer health state restored](#healthy-issuer)
- [Cert-manager certificate resource unhealthy](#certificate-resource-unhealthy)
- [Cert-manager certificate resource healthy state restored](#certificate-resource-healthy)
- [Certificate expiration](#cert-expiry)

<!-- ##########################################-->
<!-- Cert-manager unhealthy issuer status      -->
<!-- ##########################################-->



### Cert-manager unhealthy issuer status {#unhealthy-issuer}

**Event details**

Use the following details the event data that are available for filtering purposes in your CEL expression. See below the data example for specific examples.

```json
{
  "type": "evt.healthstatus.cert-manager-issuer.notready",
  "data": {
    "clusterId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "clusterName": "demo-cluster",
    "issuerName": "demo-issuer",
    "namespace": "demo-namespace",
    "resourceId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "internalStatusReason": "",
    "statusMessage": "Failed to register ACME account: Get \"https://invalid-url\": dial tcp: lookup invalid-url on 10.96.0.10:53: no such host",
    "statusReason": "ErrRegisterACMEAccount",
    "statusTransition": "2025-03-05T15:53:51Z"
  }
}
```

**Unhealthy issuer CEL expression examples**

| Example | Description |
| --- | --- |
| `type == 'evt.healthstatus.cert-manager-issuer.notready'` | All unhealthy certificate manager issuer notifications |
| `type == 'evt.healthstatus.cert-manager-issuer.notready' && (data.clusterId == 'cluster-1' \|\| data.clusterId == 'cluster-2')` |  Issuers in an unhealthy state for specific clusters |
| `type == 'evt.healthstatus.cert-manager-issuer.notready' && data.clusterId in ['xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx']'` | Unhealthy cert-manager issuer that occurs on a specific cluster |
| `type == 'evt.healthstatus.cert-manager-issuer.notready' && data.namespace == 'demo-namespace'` | Unhealthy cert-manager issuer deployed in a specific namespace |
| `type.startsWith('evt.healthstatus.cert-manager-issuer')` | All cert-manager unhealthy _and_ healthy state restored events |




<!-- ##########################################-->
<!-- Cert-manager issuer health state restored -->
<!-- ##########################################-->



### Cert-manager issuer health state restored {#healthy-issuer}

**Event details**

Use the following details the event data that are available for filtering purposes in your CEL expression. See below the data example for specific examples.

```json
{
  "type": "evt.healthstatus.cert-manager-issuer.active",
  "data": {
    "clusterId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "clusterName": "demo-cluster",
    "issuerName": "demo-issuer",
    "namespace": "demo-namespace",
    "resourceId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "internalStatusReason": "",
    "statusMessage": "The ACME account was registered with the ACME server",
    "statusReason": "ACMEAccountRegistered",
    "statusTransition": "2025-03-05T16:24:46Z",
  "unhealthyDuration": "30m13.049891s"
  }
}
```

**Healthy issuer restored CEL expression examples**

| Example | Description |
| --- | --- |
| `type == 'evt.healthstatus.cert-manager-issuer.active'` | All health state restored cert-manager issuer notifications |
| `type == 'evt.healthstatus.cert-manager-issuer.notready' && data.issuerName == 'my-issuer'` | Specific issuer restored to healthy status |
| `type.startsWith('evt.healthstatus.cert-manager-issuer')` | All cert-manager unhealthy _and_ healthy state restored events |





<!-- ##########################################-->
<!-- Certificate resource unhealthy            -->
<!-- ##########################################-->



### Cert-manager certificate resource unhealthy {#certificate-resource-unhealthy}

Use the following details the event data that are available for filtering purposes in your CEL expression. See below the data example for specific examples.

**Event details**

```json
{
	"type": "evt.healthstatus.cert-manager-certificate-resource.notready",
	"data": {
		"clusterName": "My Cluster",
		"clusterId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
		"certificateName": "test-cert",
		"namespace": "my-namespace",
		"issuerName": "missing-issuer",
		"internalStatusReason": "Certificate is Missing an Issuer",
		"statusMessage": "Issuing certificate as Secret does not exist",
		"unhealthyDuration": "166h51m46.031628918s",
		"statusReason": "DoesNotExist",
		"statusTransition": "2025-02-10T08:12:22Z",
		"subject": {
			"Countries": null,
			"Localities": null,
			"OrganizationalUnits": null,
			"Organizations": null,
			"PostalCodes": null,
			"Provinces": null,
			"SerialNumber": "",
			"StreetAddresses": null
		},
		"SANs": {
			"DNS Names": [
				"example.com"
			]
		},
		"duration": ""
	}
}
```

**Certificate resource unhealthy CEL examples**

| Example | Description |
| --- | --- |
| `type == 'evt.healthstatus.cert-manager-certificate-resource.notready'` | All cert-manager certificate resource unhealthy notifications |
| `type == 'evt.healthstatus.cert-manager-certificate-resource.notready' && data.clusterName == 'My Cluster'` | All cert-manager certificate resource unhealthy notifications for `My Cluster` |
| `type.startsWith('evt.healthstatus.cert-manager-certificate-resource')` | All cert-manager certificate resource unhealthy _and_ healthy state restored events |




<!-- ##########################################-->
<!-- Certificate resource health status restored-->
<!-- ##########################################-->



### Cert-manager certificate resource healthy state restored {#certificate-resource-healthy}

Use the following details the event data that are available for filtering purposes in your CEL expression. See below the data example for specific examples.

**Event details**

```json
{
	"type": "evt.healthstatus.cert-manager-certificate-resource.active",
    "data": {
      "SANs": {},
      "certificateName": "example-cert",
      "clusterId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "clusterName": "My Cluster",
      "duration": "",
      "internalStatusReason": "",
      "issuerName": "my-selfsigned-issuer",
      "namespace": "default",
      "resourceId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "statusMessage": "Certificate is up to date and has not expired",
      "statusReason": "Ready",
      "statusTransition": "2025-03-06T15:48:33Z",
      "subject": {
        "commonName": "example-service",
        "countries": [
          "NL",
          "US"
        ],
        "localities": [
          "Amsterdam"
        ],
        "organizationalUnits": [
          "Engineering"
        ],
        "organizations": [
          "My Company"
        ],
        "provinces": [
          "North Holland"
        ]
      },
      "unhealthyDuration": "6m24.21461s"
    }
}
```

**Certificate resource healthy state restored CEL examples**

| Example | Description |
| --- | --- |
| `type == 'evt.healthstatus.cert-manager-certificate-resource.active'` | All cert-manager certificate resource healthy state restored |
| `type == 'evt.healthstatus.cert-manager-certificate-resource.active' && data.clusterName == 'My Cluster'` | All cert-manager certificate resource healthy notifications for `My Cluster`|
| `type.startsWith('evt.healthstatus.cert-manager-certificate-resource')` | All cert-manager certificate resource unhealthy _and_ healthy state restored events |




<!-- ##########################################-->
<!-- Certificate expiration                    -->
<!-- ##########################################-->



### Certificate expiration {#cert-expiry}

Certificate expiration notifications require the certificate monitoring service to be enabled and configured in Venafi Control Plane. After you verify your monitoring service configuration, you'll set up the routing for the notifications to be received in Zoom Team Chat.

**Enable and configure the global certificate monitoring service**

> Setting up the monitoring configuration can also be [done in the UI](https://docs.cyberark.com/mis-saas/CSH_expiration_notifications). Note that any changes made to the monitoring configuration affects email and webhook notifications.

Before making any changes to the global configuration, let's first view the current configuration to see what needs to be updated.

You can view the current configuration by sending the following request:

```
GET https://api.venafi.cloud/outagedetection/v1/inventorymonitoringconfig/CERTIFICATE_EXPIRATION
tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

The response body should look something like this:

```json
{
  "id":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "companyId":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "configuration":{
    "inventoryMonitoringConfigurationType":"CERTIFICATE_EXPIRATION",
    "enabled":false,
    "thresholds":[],
    "applicationIds":[],
    "includeUnassignedCertificates":false
  }
}
```

**Parameter descriptions**

- `id` - The unique ID of this inventory monitoring configuration.
- `companyId` - The unique ID of your company.
- `inventoryMonitoringConfigurationType` - The configuration type. For the purposes of this guide, the value should be `CERTIFICATE_EXPIRATION`.
- `enabled` - Boolean that enables or disables this inventory monitor.
- `thresholds` - Array of certificate expiration thresholds, in days, for when notifications will be sent. Limit is 3 values.
- `applicationIds` - Array of application IDs that the webhook applies to. If blank, all applications are monitored. Notifications aren't sent for applications that aren't monitored, even if the application is specified in the webhook configuration (below). We strongly recommend monitoring all applications. 
- `includeUnassignedCertificates` - Boolean that enables or disables notifications for certificates that aren't assigned to an application.

Now that we've viewed the current configuration, we'll edit and enable the configuration. In this example, we'll do the following:

- Enable certificate monitoring
- Set notification thresholds of 5, 30, and 90 days
- Specify two application IDs that this configuration should apply to
- Disable notifications for unassigned certificates

We'll do this by sending the following request:

```json
PUT https://api.venafi.cloud/outagedetection/v1/inventorymonitoringconfig/CERTIFICATE_EXPIRATION
tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Content-Type: application/json

{
  "inventoryMonitoringConfiguration":{
    "inventoryMonitoringConfigurationType":"CERTIFICATE_EXPIRATION",
    "enabled":true,
    "thresholds":[
      5,
      30,
      90
    ],
    "applicationIds":[
      "4b7e4cd0-9009-11ed-95eb-4397cbb5e509",
      "56c28f10-9009-11ed-bb6f-1142ca678b4b"
    ],
    "includeUnassignedCertificates":false
  }
}
```

<details>
<summary>See additional request body examples</summary>

Monitor all applications

```json
{
  "inventoryMonitoringConfiguration":{
    "inventoryMonitoringConfigurationType":"CERTIFICATE_EXPIRATION",
    "enabled":true,
    "thresholds":[
      5,
      30,
      90
    ],
    "applicationIds":[

    ],
    "includeUnassignedCertificates":true
  }
}
```

Monitor only certificates assigned to any application

```json
{
  "inventoryMonitoringConfiguration":{
    "inventoryMonitoringConfigurationType":"CERTIFICATE_EXPIRATION",
    "enabled":true,
    "thresholds":[
      5,
      30,
      90
    ],
    "applicationIds":[

    ],
    "includeUnassignedCertificates":false
  }
}
```

Monitor all certificates assigned to specific applications and certificates not assigned

```json
{
  "inventoryMonitoringConfiguration":{
    "inventoryMonitoringConfigurationType":"CERTIFICATE_EXPIRATION",
    "enabled":true,
    "thresholds":[
      5,
      30,
      90
    ],
    "applicationIds":[
      "application-id-1",
      "application-id-2"
    ],
    "includeUnassignedCertificates":true
  }
}
```
</details>


**Set up the routing configuration**

**Event Details**

```json
{
  "type": "evt.policy.expiringcertificates.failed",
  "data": {
    "name": "Certificate Expiration Notification",
    "applicationIds": [
      "6ab46c90-acd7-11ef-8b23-f5be1d4bb686"
    ],
    "message": "Certificate Example.com, with id: 6f42f560-acd7-11ef-a386-5be8e97f7088, serial number: 00853F3D26CE90A8007B170DF85462F285, issued by: cn=example.com - 177115678443066294238404735833232044677,o=Example Co., assigned to: [Example-App] has 30 day(s) until expiration. Valid until: 2025-01-01 01:01:01. Please renew and provision the certificate to avoid a potential outage.",
    "notificationDate": "2024-11-27T16:38:38.212+00:00"
  }
}
```
**CEL expression examples**

| Examples | Description |
| --- | --- |
| `type == 'evt.policy.expiringcertificates.failed'` | All certificate expiration notifications for every monitored application |
| `type == 'evt.policy.expiringcertificates.failed' && '6ab46c90-acd7-11ef-8b23-f5be1d4bb686' in data.applicationIds` | Certificate expiration notifications assigned to a particular application |



## Other useful GraphQL requests

List all configured notification providers

```bash
curl --request POST \
  --url https://api.venafi.cloud/graphql \
  --header 'tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --header 'Content-Type: application/json' \
  -data '{"query":"query GetIntegrationsListData {\n\tintegrations {\n\t\tnodes {\n\t\t\tid\n\t\t\tname\n\t\t\tenabled\n\t\t}\n\t}\n}\n","operationName":"GetIntegrationsListData"}'
```

Delete a notification provider

```bash
curl --request POST \
  --url https://api.venafi.cloud/graphql \
  --header 'tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --header 'Content-Type: application/json' \
  --data '{
  "query": "mutation DeleteIntegrations($ids: [UUID!]!) {\n\tdeleteIntegrations(ids: $ids) {\n\t\tids\n\t\t__typename\n\t}\n}\n",
  "operationName": "DeleteIntegrations",
  "variables": {
    "ids": [
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    ]
  }
}'
```

List routing configurations

```bash
curl --request POST \
  --url https://api.venafi.cloud/graphql \
  --header 'tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --header 'Content-Type: application/json' \
  --data '{"query":"query SearchNotificationRoutingConfigurations {\n\tsearchNotificationRoutingConfigurations {\n\t\tnodes {\n\t\t\tid\n\t\t\tenabled\n\t\t\tnotificationRouterFilterConfig {\n\t\t\t\tnotificationRouterCelExpression\n\t\t\t}\n\t\t}\n\t}\n}\n","operationName":"SearchNotificationRoutingConfigurations"}'
```

Disable routing configurations

```bash
curl --request POST \
  --url https://api.venafi.cloud/graphql \
  --header 'tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --header 'Content-Type: application/json' \
  --data '{"query":"mutation UpdateNotificationRouter($id: UUID!, $enabled: Boolean) {\n\tupdateNotificationRoutingConfiguration(id: $id, enabled: $enabled) {\n\t\tid\n\t\tenabled\n\t}\n}\n","operationName":"UpdateNotificationRouter","variables":{"id":"<NOTIFICATION_ROUTING_ID>","enabled":false}}'
```

Delete routing configurations

```bash
curl --request POST \
  --url https://api.venafi.cloud/graphql \
  --header 'tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --header 'Content-Type: application/json' \
  --data '{
  "query": "mutation DeleteNotificationRouting($deleteNotificationRoutingId: UUID!) {\n\tdeleteNotificationRouting(id: $deleteNotificationRoutingId) {\n\t\tid\n\t}\n}\n",
  "operationName": "DeleteNotificationRouting",
  "variables": {
    "deleteNotificationRoutingId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  }
}'
```



[zoom-webhook]:https://marketplace.zoom.us/apps/eH_dLuquRd-VYcOsNGy-hQ