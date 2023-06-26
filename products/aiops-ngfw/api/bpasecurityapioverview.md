---
id: bpasecurityapioverview
title: AIOps Best Practice Assessment APIs for NGFW
sidebar_label: AIOps BPA APIs
sidebar_position: 1
slug: /aiops-ngfw/api
keywords:
  - PAN-OS
  - Reference
  - AI Ops Security
  - API
---

The Palo Alto Networks Best Practice Assessment (BPA) measures your usage of our Next-Generation Firewall and Panorama™ security management capabilities across your deployment, enabling you to make adjustments that maximize your return on investment and strengthen security.

This API enables you to programmatically generate BPA data without the need to provide an entire TSF (Technical Support File).

To get started with the API, we recommend you try to:

1. [Upload BPA config files.](/aiops-ngfw/api/post-bpa-report-uploadconfig/)
2. [Get task status.](/aiops-ngfw/api/get-bpa-report-taskstatus-task-id/)
3. [Get the results.](/aiops-ngfw/api/get-bpa-report-download-task-id/)

For more BPA-related privacy information, please refer to our [AIOps for NGFW](https://www.paloaltonetworks.com/resources/datasheets/privacy-aiops-for-ngfw).

We are always looking for ways to improve the user experience of our product, contact us at bpa@paloaltonetworks.com if you have any questions, concerns, or feature requests.




These APIs use the [common SASE authentication](/sase/docs/getstarted) for service access and authorization.

Once you have a TSG, you can create a [service account](/sase/docs/service-accounts) for it.
When you create a service account, you get a Client ID and Client Secret, which you need in order to
[get an access token](/sase/api/auth/post-auth-v-1-oauth-2-access-token).
You must also use your TSG's ID when you create an access token.