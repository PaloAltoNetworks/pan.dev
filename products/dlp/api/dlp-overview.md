---
id: dlpoverview
title: Data Loss Prevention APIs
sidebar_label: Data Loss Prevention APIs
sidebar_position: 1
slug: /dlp/api
keywords:
  - PAN-OS
  - Reference
  - DLP
  - API
---

[Enterprise Data Loss Prevention (E-DLP)](https://www.paloaltonetworks.com/network-security/enterprise-data-loss-prevention) is a set of tools and processes that allow you to protect sensitive information against unauthorized access, misuse, extraction, or sharing.
Enterprise DLP is a cloud-based service that uses supervised machine learning algorithms to sort sensitive documents into Financial, Legal, Healthcare, and other categories for document classification to guard against exposures, data loss, and data exfiltration. These patterns can identify the sensitive information in traffic flowing through your network and protect them from exposure. 

The [Enterprise DLP API](https://docs.paloaltonetworks.com/enterprise-dlp/enterprise-dlp-api/enterprise-dlp-api-overview/get-started-with-enterprise-dlp-api) enables you to programtically review DLP incidents captured by the patterns you define, view those incidents in a report, assign members of your team to review incidents, and update the incident notes. You can start by [retrieving all the incidents in your tenant](/dlp/api/get-v-2-api-incidents/) to get an overall view or [retrieving a specific report](/dlp/api/get-v-1-public-report-reportid/).

If you have not already enabled DLP, [Setup Prerequisites for Enterprise DLP](https://docs.paloaltonetworks.com/enterprise-dlp/enterprise-dlp-admin/enterprise-dlp-overview/setup-prerequisites-for-enterprise-dlp).

### Using the API
* Retrieve incidents
* Retrieve report that incidents are a part of
* Update the note and assignee for an incident.
* Update assigneee for an incident.
* Update the resolution status for an incident.


### Authentication

These APIs use the [common SASE authentication](/sase/docs/getstarted) for service access and authorization.

Once you have a TSG, you can create a [service account](/sase/docs/service-accounts) for it.
When you create a service account, you get a Client ID and Client Secret, which you need in order to
[get an access token](/sase/api/auth/post-auth-v-1-oauth-2-access-token).
You must also use your TSG's ID when you create an access token.
