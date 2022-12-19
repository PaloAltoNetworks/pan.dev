---
id: access-api-saas
title: Access the API (SaaS)
sidebar_label: Access the API (SaaS)
---

To access the Compute API, you must first get your Compute Console's address.
Retrieve your Compute Console's address directly from the UI.
Go to **Compute > Manage > System > Utilities** and copy the **Path to Console**.
All example commands specify a variable called `CONSOLE`, which represents the address for your Console.

You can access the Compute API with your Prisma Cloud user credentials.
Note that only Prisma Cloud users with the System Admin role can access Compute.
By default, the Prisma Cloud System Admin role is mapped to the Prisma Cloud Compute Administrator role.

For automated workflows, you'll want to provision a service account with the minimum required permissions.

## Accessing the API using token authentication

Get your Compute Console's address, retrieve an token, then use the token to access the API.

The Prisma Cloud Compute token is valid for 60 minutes, and you can use it to access Compute APIs for 60 minutes.
Internally the token contains a Prisma Cloud platform token, which is only valid for 10 minutes.
To renew the Compute token, you must have a valid platform token, since Prisma Cloud platform handles all authentication.

As a result, you must renew your Compute token every 10 minutes.
We recommend that you renew the Compute token every 5 minutes (half the lifetime of the platform token).

1. Get the path to your Console.

   1. Go to **Compute > Manage > System > Utilities**.

   1. Under **Path to Console**, click **Copy**.

1. Retrieve a token from the api/vVERSION/authenticate endpoint with your user credentials.
Tokens are valid for 24 hours.

  ```bash
  $ curl \
    -H "Content-Type: application/json" \
    -d '{"username":"<PRISMA_CLOUD_USER>", "password":"<PASSWD>"}' \
    "https://<CONSOLE>/api/v<VERSION>/authenticate"
  {
   "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
  }
  ```

  If you integrated Prisma Cloud with Active Directory, and you're using the sAMAccountName _user identifier_, escape the backslash in `DOMAIN\sAMAccountName`.
  For example:

  ```bash
  $ curl \
    -H "Content-Type: application/json" \
    -d '{"username":"DOMAIN\\<USERNAME>", "password":"<PASSWORD>"}' \
    "https://<CONSOLE>/api/v<VERSION>/authenticate"
  {
   "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
  }
  ```

1. Call the Prisma Cloud API, submitting the token in the Authorization field of the HTTP header of your request.

  For example, test the connection by retrieving your compliance policies.

  ```bash
  $ curl \
    -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." \
    "https://<CONSOLE>/api/v<VERSION>/policies/compliance/container"
  ```

