---
id: set-up-console
title: Set Up Console
---

After first installing Prisma Cloud Compute console, you must create an initial admin user and set up your license.
The Prisma Cloud API provides endpoints to complete the set up of a freshly installed Console.

:::note
This section pertains to the Prisma Cloud Compute Edition consoles only.
:::

## Create your first admin user

After Console is first installed, you must create the first admin user.
To do this, use the [Signup](/compute/api/post-signup/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint.

The following example curl command creates the initial admin user named butterbean.

```bash
$ curl -k \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{"username": "butterbean", "password": "<PASSWORD>"}' \
  https://<CONSOLE>:8083/api/v1/signup
```

The signup process can only be executed once, whether from the Console UI or the API.
Calling this endpoint after the initial sign up has been completed results in a 400 error response.

## Set up your license

Console isn't functional until you provide your license key.
The Prisma Cloud API provides an endpoint for setting up your license.

In this procedure, you access the Prisma Cloud API using an auth token.

:::note
Prisma Cloud provides a single license that protects a specific number of nodes.
The number of nodes covered depends on your subscription.
You can use the same license to install multiple instances of Console.
There is need to get a new license when building out new environments with Prisma Cloud.

For example, if you have licensed 100 nodes and you have deployed to 10 separate tenants, each with its own Console, use the same license key for each instance of Console.
:::

1. Get an auth token from the [Authenticate](/prisma-cloud/api/cwpp/post-authenticate/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint.

```bash
$ curl -H "Content-Type: application/json" \
  -d '{"username":"admin", "password":"admin"}'  \
  https://localhost:8083/api/vVERSION/authenticate
{ "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." }
```

2. Set environment variables for your auth token and license key.

```bash
$ echo $LICENSE_KEY
{"key":"your license key here"}
```

```bash
$ echo $TOKEN
eyJ0eXAiOiJK...
```

3. Execute the command referencing these vars to set the license using the [License](/compute/api/post-settings-license/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint.

```bash
$ curl -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d $LICENSE_KEY \
  https://localhost:8083/api/v<VERSION>/settings/license
```

The result should be 200 OK with an empty body "{}".
