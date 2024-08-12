---
id: auth-api
title: Authentication Service APIs
sidebar_label: Authentication Service APIs
keywords:
  - Common Services
  - Reference
  - API
---

You use the Authentication Service to obtain an access token using a Client ID and Client Secret
that you obtain when you [create a service account](/scm/docs/service-accounts).
You also need the [TSG ID](/scm/docs/tenant-service-groups) for the tenant service group
for which you want to create the access token.

You can also use the Authentication Service to retrieve oAuth 2.0 claims about the user who was
issued an access token.

Be aware that the authentication service uses a different FQDN that is used for other SASE APIs:

`https://auth.apps.paloaltonetworks.com`
