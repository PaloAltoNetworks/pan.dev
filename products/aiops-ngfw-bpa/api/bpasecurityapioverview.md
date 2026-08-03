---
id: bpasecurityapioverview
title: AIOps for NGFW Best Practice Assessment APIs
sidebar_label: AIOps NGFW BPA APIs
sidebar_position: 1
slug: /aiops-ngfw-bpa/api
keywords:
  - PAN-OS
  - Reference
  - AI Ops Security
  - API
---

The Palo Alto Networks Best Practice Assessment (BPA) measures your usage of our Next-Generation Firewall (NGFW) and Panorama™ security management capabilities across your deployment, enabling you to make adjustments that maximize your return on investment and strengthen security.

This API enables you to programmatically generate BPA data for both the free and premium instances of AIOps for NGFW.

With the API, you can:

1. [Generate a BPA Report.](/aiops-ngfw-bpa/api/post-bpa-v-1-requests/)
2. [Get the Status of a Generated BPA Report.](/aiops-ngfw-bpa/api/get-bpa-v-1-jobs-id/)
3. [Get the BPA Report in JSON Format.](/aiops-ngfw-bpa/get-bpa-v-1-reports-id/)

For more BPA-related privacy information, please refer to our [AIOps for NGFW](https://www.paloaltonetworks.com/resources/datasheets/privacy-aiops-for-ngfw).

Contact us at bpa@paloaltonetworks.com if you have any questions, concerns, or feature requests.

### Authentication

These APIs use the [common SASE authentication](/sase/docs/getstarted) for service access and authorization.

Once you have a TSG, you can create a [service account](/sase/docs/service-accounts) for it.
When you create a service account, you get a Client ID and Client Secret, which you need in order to
[get an access token](/sase/api/auth/post-auth-v-1-oauth-2-access-token).
You must also use your TSG's ID when you create an access token.