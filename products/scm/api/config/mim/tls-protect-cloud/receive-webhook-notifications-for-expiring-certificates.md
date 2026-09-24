---
id: control-plane-receive-webhook-notifications
title: "Receive webhook notifications for expiring certificates"
sidebar_label: "Receive webhook notifications for expiring certificates"
keywords:
  - Machine Identity Management
  - Certificate Manager SaaS
---

Staying aware of expiring certificates is critical to protect machine identities and reduce the likelihood of certificate-related outages. CyberArk Certificate Manager - SaaS allows you to configure notifications to be sent to services that allow incoming webhooks, such as Slack or ServiceNow. 

In addition to webhooks, notifications can be sent via email. See our documentation on how to [configure email notifications](https://docs.cyberark.com/mis-saas/CSH_expiration_notifications). 

> Currently, the number of webhook connections is limited to 10, per tenant account.

This guide takes you through how to set up certificate expiration notifications using webhooks. We'll use the `Connectors` and `InventoryMonitoringConfig` APIs to set up a webhook and configure the global monitoring defaults.

The `Connectors` API allows you to integrate using the following connectors:

- Generic: specify your own URIs where you want to send notifications, such as to your SIEM or other security systems.

- Slack: send logged events to a Slack channel for monitoring and sharing activities that are happening in your Certificate Manager - SaaS account.

<div markdown="1" class="prereqs">

## Before you begin 

To complete this guide, you'll need a webhook URL where Certificate Manager - SaaS can send notifications. 

- If you're going to use the Slack connector and you've never set up a webhook in Slack, review <a href="https://api.slack.com/messaging/webhooks" target="_blank">Slack's documentation about sending messages using incoming webhooks here</a> before you continue.

- For a generic webhook, review your vendor documentation for setting up incoming webhooks. 

</div>

## Step 1: Set up the global inventory monitoring configuration {#global}

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

- `id` - The unique ID of this inventory monitoring configuration
- `companyId` - The unique ID of your company
- `inventoryMonitoringConfigurationType` - The configuration type. For the purposes of this guide, the value should be `CERTIFICATE_EXPIRATION`.
- `enabled` - Boolean that enables or disables this inventory monitor.
- `thresholds` - Array of certificate expiration thresholds, in days, for when notifications will be sent. Limit is 3 values.
- `applicationIds` - Array of application IDs that the webhook applies to. Leaving this field blank enables notifications for all applications. Notifications aren't sent for applications that aren't monitored, even if the application is specified in the webhook configuration (below). We strongly recommend monitoring all applications. 
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

## Step 2: Create the webhook {#create}

First, create a webhook by sending a request to the `POST /v1/connectors` endpoint. 

**Parameter descriptions**

- `name` - The name of the webhook you're creating
- `connectorKind` - Must be set to `WEBHOOK`
- `filterType` - Must be set to `EXPIRATION`
- `applicationIds` - The Certificate Manager - SaaS application IDs that you want this webhook to apply to. 
    
    > 📘 Note
    > - Leaving this array blank defaults to the global inventory monitoring settings (which you configured in the previous step). 
    > - If the certificate monitoring settings specify specific application IDs, then the IDs passed here must match at least one of those IDs in order for the webhook to work.

- `type` - Either `slack` or `generic`. Use `slack` for setting up notifications in a slack channel. Use `generic` for any other service.
- `url` - The incoming webhook URL for the service you want to send notifications to.

**Example 1: Slack request with specific application IDs**

This request creates a webhook that monitors certificate expiration for certificates assigned to applications listed in the `applicationIds` array, and sends those notifications to a Slack channel. The applications IDs will need to be included in [Step 2: Set up the global inventory monitoring configuration](#global).

```json
POST https://api.venafi.cloud/v1/connectors
tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Content-Type: application/json

{
  "name":"Sample slack webhook",
  "properties":{
    "connectorKind":"WEBHOOK",
    "filter":{
      "filterType":"EXPIRATION",
      "applicationIds":[
        "4b7e4cd0-9009-11ed-95eb-4397cbb5e509",
        "56c28f10-9009-11ed-bb6f-1142ca678b4b"
      ]
    },
    "target":{
      "type":"slack",
      "connection":{
        "url":"https://hooks.slack.com/services/..."
      }
    }
  }
}
```

**Example 2: Generic request with no application IDs**

This request creates a webhook that monitors certificate expiration for the applications set in the global configuration, and sends the notifications to a generic webhook URL.

```json
POST https://api.venafi.cloud/v1/connectors
tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Content-Type: application/json

{
  "name":"Sample generic webhook",
  "properties":{
    "connectorKind":"WEBHOOK",
    "filter":{
      "filterType":"EXPIRATION",
      "applicationIds":[

      ]
    },
    "target":{
      "type":"generic",
      "connection":{
        "url":"https://webhook.site/..."
      }
    }
  }
}
```


## Step 3: Run the certificate monitoring job

At this point, the webhook will run automatically every day at 10:00 a.m. UTC. If you'd like to trigger the job to run manually, send the following request:

```
PUT /outagedetection/v1/inventorymonitoringconfig/CERTIFICATE_EXPIRATION/scheduler?runNow=true HTTP/1.1
Host: api.venafi.cloud
tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

## What's Next

This webhook configuration is now ready to use. You will start receiving notifications for upcoming certificate expirations. 

## Related information 

Have a look at the following endpoint documentation for more certificate monitoring configuration options:

- [Retrieve all your company's webhooks](/api-endpoints/saas/connectors-get-all)
- [Retrieve a webhook by id](/api-endpoints/saas/connectors-get-all)
- [Update webhook properties](/api-endpoints/saas/connectors-update)
- [Delete a webhook](/api-endpoints/saas/connectors-delete)
