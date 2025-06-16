---
id: iot-public-api-new
title: IoT Public API Authentication
sidebar_position: 1
sidebar_label: IoT Public API Authentication
---

# Get Started with the IoT Security Public API

IoT Security uses the Strata™ Cloud Manager authentication and
authorization framework for all API requests. To use the
IoT Security public APIs via Strata Cloud Manager,
[create a service account in Strata Cloud Manager](https://docs.paloaltonetworks.com/common-services/identity-and-access-access-management/manage-identity-and-access/add-service-accounts).
Use the Client ID and Secret pair for the service account to request an
[access token from Strata Cloud Manager](https://pan.dev/scm/docs/access-tokens/) to include in
all API calls.

> **NOTE**: From June 2025 onwards, all new IoT Security clients must use the
> Strata Cloud Manager authentication and authorization framework for
> IoT Security public API requests.

## Create a Service Account for the IoT Security Public API

The first time you create a service account, you must use the web interface,
following the steps below. 

1.  Log in to the Strata Cloud Manager you use for IoT Security, with a
    Strata Cloud Manager role that has write access.  
2.  Go to **Settings \> Identity & Access \> Access Management**.  
3.  Click **Add Identity** to bring up the Add New Identity pop-up.  
4.  Configure the Identity Information. When finished, go to the **Next** screen.  
    1. Identity Type: **Service Account**  
    2. Service Account Name: Name for the service account  
5.  Copy the **Client ID** and **Client Secret** from the Client Credentials
    screen. When finished, go to the **Next** screen.  
6.  Assign roles to your service account.  
    1. Apps & Services: **IoT Security**  
    2. Role: **Superuser**  
7.  Click **Submit** to create the new service account, and then verify that your
    service account appears in the Access Management table.

After you’ve created at least one service account in the web interface, you can
create more service accounts using the
[create a service account API](https://pan.dev/scm/api/iam/post-iam-v-1-service-accounts/).

## Get an Access Token and Call the IoT Security Public API

After you create the [service account](https://pan.dev/scm/docs/service-accounts/)
and have the Client ID and Client Secret, get an
[access token from Strata Cloud Manager](https://pan.dev/scm/docs/access-tokens/)
using the following cURL request, replacing the variables with your respective TSG ID, Client ID, and Client Secret.

```shell
curl -d "grant_type=client_credentials&scope=tsg_id:<tsg-id>" \
-u <client-id>:<client-secret> \
-H "Content-Type: application/x-www-form-urlencoded" \
-X POST https://auth.apps.paloaltonetworks.com/oauth2/access_token
```

The request returns an access token, such as:

```shell
{
"access_token":"eyJ0eXAiOiJKV1QiLCJraWQiOiJyc2Etc2lnbi1wa2NzMS0yMDQ4LXNoYTI1Ni8xIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1YTZjOTVjNy1mYzA2LTQ0YzAtYThkYS01ZmI3ZDk1MWYzYmUiLCJjdHMiOiJPQVVUSDJfU1RBVEVMRVNTX0dSQU5UIiwiYXV
...
...
...",
"scope":"profile tsg_id: 0123456789 email",
"token_type":"Bearer",
"expires_in":899
}
```

Once you have the [access token](https://pan.dev/scm/docs/access-tokens/),
you're ready to [make an API call to Strata Cloud Manager](https://pan.dev/scm/docs/api-call/).
The example below makes a `GET` request for the IoT Security asset inventory.

```shell
curl --location 'https://api.strata.paloaltonetworks.com/iot/pub/v1/device/list?detail=true&pagelength=100' \
--header 'Authorization: Bearer <access-token>'
```