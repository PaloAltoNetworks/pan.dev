---
id: certificates-operations-using-vcert-and-a-service-account
title: "Certificate operations using vCert and a Certificate Manager - SaaS Service Account"
sidebar_label: "Certificate operations using vCert and a Certificate Manager - SaaS Service Account"
keywords:
  - Machine Identity Management
  - Certificate Manager SaaS
---

# Overview
This topic provides instructions on how to use vCert with a Certificate Manager, SaaS service account to authenticate through an Identity Provider (IdP) and perform certificate operations, such as issuing and renewing certificates. You'll create a service account, exchange tokens, and run commands for automated certificate management.

## Before you begin
Ensure you have the below prerequisites before starting this procedure.

  - You will need a Windows system, running Windows 10, Windows Server 2012 R2, Windows Server 2012, Windows 8, Windows 8.1, Windows Server 2016, Windows Server 2019, or Windows 11.
  - An active instance of Certificate Manager - SaaS. A free 30-day trial account may be requested at: [Venafi free trial](https://venafi.com/try-venafi/try-venafi/)

## Step 1: Create the service account
In Certificate Manager - SaaS:

1. Navigate to **Settings > Service Accounts > New**.
2. Select **Custom API Integration - Securely authenticate with Certificate Manager SaaS APIs using Workload Identity Federation**.
3. Enter a **Name** for the service account.
4. Select an **Owning Team**.
5. Select **Applications** for the service account
6. Enter a **Scope**. For example, Certificate Issuance.
7. Click **Continue**.
8. Enter the Identity Provider (IdP) details:
    
    - Issuer URL
    - JWKS URI (from your IdP)
    - Subject Identifier: `{OKTA_CLIENT_ID}` (your IdP client or app ID)
    - Audience: `{EXPECTED_AUDIENCE}` (from your IdP)

9. Click **Finish**. 
10. Open the new service account details by selecting its name, and copy the **Token Endpoint URL**.

> 📘 Note
> Only one service account per Subject and Issuer URL pair is allowed.

## Step 2: Authenticate with vCert

> 📘 Note 
> The following commands assume vCert is installed on your host.

### Get a token from your IdP

> 📘 Note
> The following command example shows Okta placeholders for the Token Endpoint, Client ID, Client Secret, and Scope. Depending on your IdP, replace the values with those from your IdP.

1. In your terminal, enter:

```bash
./vcert getcred -platform oidc \
-u '{OKTA_TOKEN_ENDPOINT}' \
-client-id '{OKTA_CLIENT_ID}' \
-client-secret '{OKTA_CLIENT_SECRET}' \
-scope '{OKTA_SCOPE}'
```

2. From the JSON response, copy the access_token value. Refer to it as `{IDP_ACCESS_TOKEN}` in the next step.

### Exchange the IdP token for a Certificate Manager - SaaS access token

1. In your terminal, enter:

```bash
./vcert getcred -p {{vcp}} \
  --token-url 'https://api.venafi.cloud/v1/oauth2/v2.0/{TENANT_UUID}/token' \
  --external-jwt '{IDP_ACCESS_TOKEN}'
```
> 📘 Note 
> Replace the value of `--token-url` with the Token Endpoint URL copied from Step 10 of the "Step 1: Create the service account" section above.

2. From the response, copy the access_token value. Use this as `{CM_SAAS_TOKEN}` in future steps.

> 📘 Note
> Certificate Manager - SaaS access tokens typically expire after about 15 minutes.

## Step 3: Issue and renew certificates

### Issue a certificate

1. In your terminal, enter:

```bash
./vcert enroll -p Venafi Control Plane --csr service \
  -t '{CM_SAAS_TOKEN}' \
  -z '{APPLICATION\ISSUING_TEMPLATE_ALIAS}' \
  --cn '{CERT_CN}'
```
> 📘 Note  
> You can specify additional certificate request details using optional parameters such as `--san-dns`, `--key-type`, and `--key-size`, depending on your certificate requirements. To view all supported options, run `vcert enroll -h`.

> 📘 Note
vCert access tokens typically expire after about 15 minutes.

### Renew a certificate

1. In your terminal, enter:

```bash
./vcert renew -p {{vcp}} \
  -t '{CM_SAAS_TOKEN}' \
  --thumbprint '{CERT_THUMBPRINT}'
```