---
id: control-plane-forwarding-logged-events
title: "Forwarding logged events to another service"
sidebar_label: "Forwarding logged events to another service"
keywords:
  - Machine Identity Management
  - Certificate Manager SaaS
---

Sharing logged activity adds another layer of visibility to your machine identity management strategy.

The `Connectors` API lets you forward logged CyberArk Certificate Manager - SaaS events to other services. Using simple JSON, you might send events to your security information and event management (SIEM) environment, or to Slack or Microsoft Teams channels.

For example, you could send all event log data to your SIEM tools to aggregate and analyze so you can take appropriate action in a timely manner.

## What logged data can be shared?

<a href="https://docs.cyberark.com/mis-saas/CSH_event_logging/" target="_blank">Event logging</a> captures many data points that you can then share via webhooks.

While all filter categories and criteria are available on the Certificate Manager - SaaS Event Log page, the current version of the API exposes the following:

- Criticality
- Event
- Event Types (and all filter criteria within it)

## Setting up event log sharing using the Connector API

The steps below walk you through how to use the `Connectors` API to integrate event logging using either one of the following connectors:

- *Generic webhook*: specify your own URIs where you want to send logged data, such as to your SIEM or other security systems.
- *Slack*: send logged events to a Slack channel for monitoring and sharing activities that are happening in your Certificate Manager - SaaS account.
- *Microsoft Teams*: send logged events to a Teams channel to improve monitoring and sharing activities happening in your Certificate Manager - SaaS account.

<div markdown="1" class="prereqs">

## Before you begin

- Become familiar with available event log categories and criteria, which you can see from the <a href="https://ui.venafi.cloud/platform-settings/event-log" target="_blank">Event log page in Certificate Manager - SaaS</a>.

- You'll need a copy of your Certificate Manager - SaaS API key. You can <a href="https://ui.venafi.cloud/platform-settings/user-preferences?key=api-keys" target="_blank">copy your key here</a>. <a href="https://docs.cyberark.com/mis-saas/CSH_get_api_key/" target="_blank">Learn more</a>.

- If you're going to use the Slack connector and you've never set up a webhook in Slack, review <a href="https://api.slack.com/messaging/webhooks" target="_blank">Slack's documentation about sending messages using incoming webhooks here</a> before you continue.

- If you're going to use the Microsoft Teams connector and you've never set up a webhook in Teams, review <a href="https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet" target="_blank">Microsoft's incoming webhooks documentation</a> before you continue.

</div>

## To set up event log sharing

Forward logged events in three simple steps:

1. Decide *which* logged events you want to forward, and *where* you want them delivered (your target URI).
1. Write your JSON.
1. Give it a try!

### Step 1: Decide what logged data you want to forward

Take a look at the available event log filters and categories so you have an idea of the data you can retrieve and share.

In fact, it's a best practice to play with filtering event logs so you have a clearer idea of what you want to include when you forward logged events. <a href="https://docs.cyberark.com/mis-saas/CSH_logging_filter" target="_blank">Learn more</a>

#### To view event log categories and criteria in Certificate Manager - SaaS

1. Log in to Certificate Manager - SaaS.

1. Click **Settings** > **Event Log**.

1. Click **Add Criteria** to see the list of available filter categories.

1. Select a category and then click the **Event** list to see all criteria for the category you selected.

    ![screenshot of Event Log page](/img/mim/control-plane/ani-eventLog-filtering-example.gif)

1. (Optional) If you want to see what logged events are returned based on your selections, click **Apply Filter**.

<details>

<summary>Another way to see filter categories all at once</summary>

Another way to see a full list of filter categories and criteria all at once is through the `/v1/activitytypes` API endpoint. This can be executed directly from Developer Hub by following these steps:

1. If you haven't already done so, [copy your API key](https://docs.cyberark.com/mis-saas/CSH_get_api_key/).

1. Go to [Retrieve types of activities used for event logging](/api-endpoints/saas/activitylogtypes-get).

1. In the **Authentication** section on the right, paste your API key into the **Header** field. Click **Try It**.

1. All available categories and criteria are listed in the **Response** section.

</details>

### Step 2: Write your JSON

Write your own JSON and be sure to include the following:

- Specify your target type: Slack or Generic connectors.
- Add the URL of your chosen target.
- Specify the filter category and criteria you want sent to the target.

**Quick Reference: Filter categories available via API**

While all filter categories and criteria are available on the Certificate Manager - SaaS Event Log page, the current version of the API exposes the following:

- Criticality
- Event
- Event Types (and all filter criteria within it)

Other categories will continue to be added in future updates.

Event Log Filter Category | Criteria | Available via API | Available in VaaS UI
------------------------- | -------- | ----------------- | ---------------------
Criticality | 0 or 1 | YES | YES 
Description | (user-defined) | NO | YES
Event | NA | YES | YES
Event Type | All criteria are included when forwarding this category. Refer to the list of criteria as described above in the *Before you begin* section. | YES (all) | YES 
Timestamp | NA | NO | YES

<!-- #### Example 1: forward all available event types

Send all event types to your SIEM or other security service tools, where you create your own triggers for responding to Certificate Manager - SaaS events.

```json
{
    "name": "someName",
    "properties": {
        "connectorKind": "WEBHOOK",
        "target": {
            "type": "generic",
            "connection": {
                "url": "https://my.secops.com/services/"
            }
        },
        "filter": {
            "activityTypes": []
        }
    }
}
```

Note that leaving `"activityTypes": []` empty returns all available event logs within the Event Types category:

```json
},
        "filter": {
            "activityTypes": []
        }
```

#### Example 2: forward all critical events

Forward all critical events related to all event types. For example, you could forward all critical events to your SIEM or other security service tools, where you create your own triggers for responding to Certificate Manager - SaaS events.

```json
{
    "name": "someName",
    "properties": {
        "connectorKind": "WEBHOOK",
        "target": {
            "type": "generic",
            "connection": {
                "url": "https://my.secops.com/services/"
            }
        },
        "filter": {
            "criticality": 1
        }
    }
}
``` -->

#### Example 1: forward critical events for a specific event type to a Slack channel

Forward all critical events for a *specific* event type. For example, you could forward all failed attempts to log into Certificate Manager - SaaS to a Slack channel.

```json
{
    "name": "someName",
    "properties": {
        "connectorKind": "WEBHOOK",
        "target": {
            "type": "slack",
            "connection": {
                "url": "https://hooks.slack.com/services/"
            }
        },
        "filter": {
            "activityTypes": ["Authentication"]
            "criticality": 1
        }
    }
}
```

#### Example 2: forward specific event types to your security service tools

Forward all critical events related to all event types. For example, you could forward all critical events to your SIEM or other security service tools, where you create your own triggers for responding to Certificate Manager - SaaS events.

```json
{
    "name": "someName",
    "properties": {
        "connectorKind": "WEBHOOK",
        "target": {
            "type": "generic",
            "connection": {
                "url": "https://my.secops.com/services/"
            }
        },
        "filter": {
            "criticality": 1
        }
    }
}
```

#### Example 3: forward a *specific activity* to a team in Microsoft Teams

Send a specific event--in this example, `Login Succeeded`--to a channel in Microsoft Teams for a quick method of notification about the activity.

```json
{
    "name": "someName",
    "properties": {
        "connectorKind": "WEBHOOK",
        "target": {
            "type": "teams",
            "connection": {
                "url": "https://mycompany.webhook.office.com/webhookb2/..."
            }
        },
        "filter": {
            "activities": ["Login Succeeded"]
        }
    }
}
```

### Step 3: Send your JSON data to the API

In this step, you will send your JSON data to the API. Use a tool such as Postman to send a `POST` request, as shown below:


```
POST https://api.venafi.cloud/v1/connectors
tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Content-Type: application/json
```

The response body should look something like this:

```json
{
    "name": "someName",
    "properties": {
        "connectorKind": "WEBHOOK",
        "target": {
            "type": "slack",
            "connection": {
                "url": "https://hooks.slack.com/services/"
            }
        },
        "filter": {
            "activityTypes": ["Authentication"]
            "criticality": 0
        }
    }
}

```

### Step 4: Give it a try

Now, try creating new logged events for the filter categories you chose by logging into Certificate Manager - SaaS and performing actions that create those event logs. 

As a simple example, suppose you selected the following configuration:

- Target: *Slack*
- Filter category: *Event Type*
- Category criteria: *Authentication*
- Criticality: 0


Then you should see something like this appear in your Slack channel:

![screenshot of Slack channel](/img/mim/control-plane/ss-eventLogging-webhook-slack.png)

## Related links

- <a href="/api-endpoints/saas/connectors-create" target="_blank">Create a Connector</a>
- <a href="https://docs.cyberark.com/mis-saas/CSH_get_api_key/" target="_blank">Copying your API key</a>
- <a href="https://docs.cyberark.com/mis-saas/CSH_event_logging" target="_blank">About event logging</a>
- <a href="https://api.slack.com/messaging/webhooks" target="_blank">Slack's incoming webhook documentation</a>
- <a href="https://docs.cyberark.com/mis-saas/CSH_logging_filter" target="_blank">Filter for logged events</a>
- <a href="https://docs.cyberark.com/mis-saas/CSH_export_logging" target="_blank">Export logged events as an API endpoint</a>
