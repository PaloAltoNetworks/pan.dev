---
id: emaildlpoverview
title: Email Data Loss Prevention APIs
sidebar_label: Email Data Loss Prevention APIs
sidebar_position: 1
slug: /email-dlp/api
keywords:
  - PAN-OS
  - Reference
  - DLP
  - Email DLP
  - API
---

To prevent sensitive data exfiltration, Enterprise Data Loss Prevention Email DLP needs to perform inline inspection of all outbound emails. The service inspects inbound and outbound emails for verdict rendering. 

The API enables you to programtically review Email DLP incidents and further inspect the report in order to update verdicts.

To use the API:
1. Ensure you have activated [Email DLP](https://docs.paloaltonetworks.com/enterprise-dlp/enterprise-dlp-admin/configure-enterprise-dlp/email-dlp/activate-email-dlp).
2. Have captured Email DLP Incidents after [adding an Enterprise DLP Email Policy](https://docs.paloaltonetworks.com/enterprise-dlp/enterprise-dlp-admin/configure-enterprise-dlp/email-dlp/add-an-enterprise-dlp-email-policy).

Once you have captured Email DLP incidents, you can use the Email DLP API to [update verdicts of incident statuses](/email-dlp/api/patch-incident-api-v-1-incidents-incidentid-status/) or [retrieve and filter more details on Email Incidents](/email-dlp/api/get-incident-api-v-1-incidents/).

### Authentication

These APIs use the [common SASE authentication](/sase/docs/getstarted) for service access and authorization.

Once you have a TSG, you can create a [service account](/sase/docs/service-accounts) for it.
When you create a service account, you get a Client ID and Client Secret, which you need in order to
[get an access token](/sase/api/auth/post-auth-v-1-oauth-2-access-token).
You must also use your TSG's ID when you create an access token.

To use the Email DLP API, the service account must have a **role** assigned as Superuser role and the **Apps and Services** must have access to Next-Generation CASB.