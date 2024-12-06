---
id: service-accounts
title: Service Accounts
description: Service Accounts are used to obtain access tokens and limit access to Strata Cloud Manager APIs.
hide_title: False
hide_table_of_contents: false
keywords:
  - Strata Cloud Manager
  - scm
---

A service account is used to provide the credentials needed for generating an access token.
You also assign [roles](/scm/docs/roles-overview) to service accounts to identify what API actions
they can take.

Before you create a service account, you must have
[created at least one TSG](/scm/docs/tenant-service-groups). The service
account is added as a user to that TSG.

There are two ways to create a service account:

- By using the Strata Cloud Manager user interface.

  To do this, follow the procedure described in
  [Add a Service Account through Common Services](https://docs.paloaltonetworks.com/common-services/identity-and-access-access-management/manage-identity-and-access/add-service-accounts).

- By using the Identity and Access Management APIs.

  To create a service account using the Identity and Access Management API, you must have already
  created at least one service account using the User Interface, and then obtained an access token for
  that account.

  To create a service account using the Identity and Access Management API, use the
  [create a Service Account
  API](/scm/api/iam/post-iam-v-1-service-accounts).
  The Client ID and Client Secret for this account is returned in the response payload:

        {
        "id": "xxxxxxxxxxxxxxxxxxxxx",
        "name": "xxxxxxxxxx",
        "tsg_id": "1111111111",
        "contact_email": "user@example.com",
        "identity_email": "xxxxxxxxxx@1111111111.iam.panServiceAccounts.com",
        "description": "Some descriptive text",
        "client_id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "client_secret": "xxxxxxxxxxxxxxxxxxxxx"
        }

  Be aware that the new service account is created within the tenant service group (TSG)
  that is identified in the access token used on the request to create the service
  account. If you don't want to use your root TSG for this purpose,
  [create a new TSG](/scm/api/tenancy/post-tenancy-v-1-tenant-service-groups)
  before you create your service account.

Regardless of the method that you use to create a service account, be sure to record the
Client Secret because you can't get it again after the account has been created.
