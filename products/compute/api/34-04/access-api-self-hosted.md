---
id: access-api-self-hosted
title: Access the Prisma Cloud Compute Edition (PCCE) APIs
---

The Prisma Cloud Compute API is exposed on the host that runs Console on port 8083 (HTTPS).
The port is specified at install time in _twistlock.cfg_.

All example commands specify a variable called `CONSOLE`, which represents the address for your Console.
The address for your Console depends on how you installed it.

For Onebox installs, where you install Console on a stand-alone host, the value for `CONSOLE` is the IP address or DNS name of the host.
HTTPS access to Console is servered on port 8083, so the full address would be:

```bash
CONSOLE = https://<IPADDR>:8083
```

For the default Kubernetes installation procedure, the Console service is exposed by a LoadBalancer, and so the address for `CONSOLE` is

```bash
CONSLE = https://<LOAD_BALANCER>:8083
```

Access to the API requires authentication.
You can either:

- Retrieve a token, then pass the token in the Authorization field of all subsequent requests.
- Use Basic HTTP authentication for each request.

:::note
The default install of Prisma Cloud Compute Edition uses self-signed certificates.
By default, curl validates the server's certificate.
Because the certificate for the CA that signed the server's cert isn't in your CA store, curl can't validate the server's cert.

You've got two options:

- Pass the --insecure flag to curl.
  With this flag, validation that the server is who it claims to be is bypassed.
  The connection is still encrypted.

- Configure Prisma Cloud Compute to use your own custom certs.
  :::

## Accessing the API using Basic authentication

The basic token is a Base64 encoded string of type username:password.

1. Generate the Base64 encoding of your username and password.
   Assume your username is api, and your password is api.

```bash
$ echo -n "api:api" | openssl base64
YXBpOmFwaQ==
```

2. To access any other endpoint, set the Authorization field of your HTTP header to Basic and add the encoded string.
   For example, to get all your runtime container policies:

```bash
$ curl --insecure \
  -H 'Authorization: Basic YWRtaW46YWRtaW4=' \
  "https://<CONSOLE>/api/v<VERSION>/policies/runtime/container
```

:::note
The curl command can handle basic auth for you with the `--user` option.
:::

## Accessing the API using token authentication

To access the API using a token:

1. Retrieve a token from the [Authenticate](/prisma-cloud/api/cwpp/post-authenticate/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint with your user credentials.

By default, access tokens are valid for 30 minutes. You can set the validity period in Console under **Manage** > **Authentication** > **Logon**.

You can also retrieve tokens using client certificates.

```bash
$ curl \
  -H "Content-Type: application/json" \
  -d '{"username":"admin", "password":"admin"}' \
  "https://<CONSOLE>/api/v<VERSION>/authenticate"
{
 "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

If you integrated Prisma Cloud Compute Console with Active Directory, and you're using the sAMAccountName _user identifier_, escape the backslash in the `DOMAIN\sAMAccountName` username value.
For example:

```bash
$ curl \
  -H "Content-Type: application/json" \
  -d '{"username":"DOMAIN\\admin", "password":"admin"}' \
  "https://<CONSOLE>/api/v<VERSION>/authenticate"
{
 "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

2. Call the Prisma Cloud Compute API, submitting the token in the Authorization field in the HTTP header of your request.
   For example, test connection to the API using the [Get Runtime Container Policies](/compute/api/get-policies-runtime-container/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint:

```bash
$ curl --insecure \
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." \
  "https://<CONSOLE>/api/v<VERSION>/policies/runtime/container"
```

## Accessing the API using a client certificate

You can retrieve a token using client certificates issued by your public key infrastructure.

**Prerequisites:**

- You have configured Prisma Cloud Compute Console with your server certificate.
  Go to **Manage > Authentication > Certificates > TLS certificate for Console**, and upload your certificate (cat the cert and private key into a single file).

1. Install your client certificate on your local machine.

2. Request a token using your client certificate.

```bash
$ curl --insecure \
  -X POST \
  --cert cert.pem \
  "https://<CONSOLE>/api/v<VERSION>/authenticate-client"
{
 "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

3. Call the Prisma Cloud Compute API, submitting the token in the Authorization field in the HTTP header of your request.
   For example, to get all policies:

```bash
$ curl --insecure \
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." \
  "https://<CONSOLE>/api/v<VERSION>/policies/runtime/container"
```

## Accessing the API in a Multi-Tenant Environment

Requests to the Prisma Cloud Compute API with Projects enabled will be made against all available tenants. To query for a specific tenant, include the `project=name` query parameter to restrict requests to the given tenant. (This does not apply to authentication endpoints.)

:::note
This parameter is required if the authenticated user does not have access to all tenants.
:::
