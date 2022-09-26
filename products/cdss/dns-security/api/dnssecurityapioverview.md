---
id: dnssecurityapioverview
title: DNS Security APIs
sidebar_label: DNS Security API
sidebar_position: 1
keywords:
  - PAN-OS
  - Reference
  - DNS Security
  - API
---

The DNS Security API provides Palo Alto Networks customers with an active [DNS Security](https://www.paloaltonetworks.com/network-security/dns-security) subscription with the ability to access and access the domains processed by DNS Security through a programmatic RESTful API.

Before using the DNS Security API, please refer to [Cloud-Delivered Security Services API Developer's docs](/cdss/threat-vault/docs/) for more information about using the API, including authentication details, access limits, and examples.

:::note
The DNS Security API is currently in `BETA`. To inquire about joining the beta or to receive support or provide suggestions, please contact dns-api@paloaltonetworks.com.
:::

Things to consider:

- To make DNS Security API POST requests, you must [retrieve your DNS Security API key](/cdss/threat-vault/docs/authentication), which is used to authenticate API calls. An organization (and corresponding superuser) can have a single API key at any given time, regardless of the number of users tied to the account.
- You must have an activated and unexpired DNS Security subscription to access a DNS Security API key.
- The number of API requests that can be submitted is throttled on a per API key basis. To control the number of requests you can make, you need to observe [DNS Security API Access Limits](/cdss/threat-vault/docs/access-limits/threat-vault).
