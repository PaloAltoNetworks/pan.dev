---
id: tp-public-api-headers
title: Threat Vault API Authentication
sidebar_position: 2
sidebar_label: Threat Vault API Authentication
---

The Threat Vault API uses an API key generated on the Palo Alto Networks Customer Support Portal to authenticate API queries and ensure that only valid users can access the Threat Vault database. This API key is tied to your license and is used to enforce usage limits and endpoint accessibility — API key retrieval and management is performed entirely through the Customer Service Portal. It is important that you do not share or distribute your API key credentials unnecessarily, as they can result in compromised data, account, and application information. By default, the Customer Support Portal periodically synchronizes the API key with the expiration date of your license. As such, the expiration date of the API key is the same date as that of the latest subscription in your support account. If you renew your current subscriptions, you may need to reset the expiration date of the API key, by either regenerating a key or by contacting Palo Alto Networks support for assistance with extending the term of your existing API key.

:::note
The Threat Vault API key is displayed in the Palo Alto Networks Customer Support Portal as `Threat Prevention Public API`, however, this API key provides functionality for both Threat Prevention and Advanced Threat Prevention subscription holders.
:::

To retrieve your Threat Vault API key:

1. Log in to the Palo Alto Networks Customer Service Portal (https://support.paloaltonetworks.com) with an account that has Super User privileges.
2. Select `Assets` and then `API Key Management`.
3. From the `Select an API key` drop down, select the Threat Prevention Public API key.
4. Click `Enable` to view your API key and copy it for use. After you generate an API key, the API key is enabled until you disable or regenerate the key.
