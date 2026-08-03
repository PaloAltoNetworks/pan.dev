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

For [Email DLP](/email-dlp/api/), visit the the Email DLP API reference guide.


### Using the API

If you have not already enabled DLP, [setup prerequisites for Enterprise DLP](https://docs.paloaltonetworks.com/enterprise-dlp/enterprise-dlp-admin/enterprise-dlp-overview/setup-prerequisites-for-enterprise-dlp).

The [Enterprise DLP API](https://docs.paloaltonetworks.com/enterprise-dlp/enterprise-dlp-api/enterprise-dlp-api-overview/get-started-with-enterprise-dlp-api) enables you to programtically review DLP incidents captured by the patterns you define, view those incidents in a report, [assign members of your team](/dlp/api/put-v-1-api-incidents-incidentid-assignee/) to review incidents, and [update the incident notes](dlp/api/put-v-1-api-incidents-incidentid-notes/). 

You can start by [retrieving all the incidents in your tenant](/dlp/api/get-v-2-api-incidents/) to get an overall view of incidents or [retrieve a specific report](/dlp/api/put-v-1-api-incidents-incidentid-notes/).


### Authentication

These APIs use the [common SASE authentication](/sase/docs/getstarted) for service access and authorization.

Once you have a TSG (Tenant Service Group), you can create a [service account](/sase/docs/service-accounts) for it.
When you create a service account, you get a Client ID and Client Secret, which you need in order to
[get an access token](/sase/api/auth/post-auth-v-1-oauth-2-access-token).
You must also use your TSG's ID when you create an access token.

To use the DLP API, the service account must have a **role** assigned as either Superuser or DLP Incident Administrator and the **Apps and Services** must have access to Enterprise DLP.