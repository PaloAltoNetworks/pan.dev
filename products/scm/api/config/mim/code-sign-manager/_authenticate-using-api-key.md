---
title: Authenticate using a user API key
id: code-sign-client-auth-user
slug: /dev-docs/code-sign-client-auth-user
sidebar_position: 3
---

You can authenticate the CyberArk Code Sign Client using a user API key when signing operations should run on behalf of an individual developer or engineer. Once authenticated, the client can list and use any Signing Keys the user has been authorized to access in CyberArk Code Sign Manager – SaaS.

> See the [API key authentication end-to-end tutorial](https://docs.cyberark.com/mis-saas/CSH_csm_api_key_tutorial/) for an overview of the entire process.

## Before you begin

Make sure:

- You have a CyberArk Certificate Manager – SaaS account.
- Your administrator has assigned you as an Authorized Signer on at least one Project in Code Sign Manager – SaaS.
- You have [generated or retrieved your API key](https://docs.cyberark.com/mis-saas/CSH_get_api_key/) from the Certificate Manager – SaaS UI.
- You must have the [Code Sign Client installed](/scm/api/config/mim/code-sign-manager/code-sign-client-install).  

## Authenticate using API key

**Obtain your API key**
1. [Sign in](https://docs.cyberark.com/mis-saas/CSH_sign_in/) to Certificate Manager – SaaS. 
1. Select your avatar in the top-right corner, and then click **Preferences**.
1. From **API keys**, copy your API key. 

    !!! note
        If you do not have an API key yet, select **Generate** at the bottom of the screen.

**Authenticate from your client**

1. On your signing workstation, run the following to sign in using the Code Sign Client:

    ```bash
    pkcs11config login
    ```
    This launches the interactive configuration wizard.

    1. Enter the hostname of the Code Sign Manager server for [your region](/scm/api/config/mim/tls-protect-cloud/control-plane-api-endpoints).
    1. When prompted for an authentication method, select **API key**.
    1. Enter your API key.

1. (Optional) Verify your configuration.

    ```bash
    pkcs11config option show
    ```

    Your result should look similar to the following:
    ```
    Name             │ Value
    ─────────────────┼───────────────────────────────────────────────────
    HSM SERVER URL   │ https://api.venafi.cloud/vedhsm/
    SUPPORTS API KEY │ true
    AUTH SERVER URL  │ https://api.venafi.cloud/
    API KEY          │ xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    CSC SERVER URL   │ https://dl.venafi.cloud/cyberark-code-sign-client/
    ```

**List your keys and certificates**

If your administrator has given your user identity access to a Project that contains one or more Signing Keys, you should be able to list those signing objects now.

```bash
pkcs11config list
```

Your result should look similar to the following:
```
Certificate 1:
Label:       Project Name-Key Name
Subject:     CN=Example\, Inc.
ID:          34353563356132632D333634392D343065652D616261302D306132623436326632333466
Environment: Certificate

Public Key 1:
Label:       Project Name-Key Name
Key-Type:    RSA 2048
ID:          34353563356132632D333634392D343065652D616261302D306132623436326632333466
Environment: Certificate
```

If you do not see any objects, confirm that you are assigned as an Authorized Signer on the Project.


## Troubleshooting

### “INFO: No objects available.”
This means the client authenticated successfully, but your user is not authorized to use any Signing Keys.

Verify that:

- You are assigned as an Authorized Signer on the Project
- You belong to a Team that is assigned as an Authorized Signer.

### “Authentication failed”
Check the following:

- Confirm you entered the [regional API hostname](/scm/api/config/mim/tls-protect-cloud/control-plane-api-endpoints), not a tenant URL.
- Make sure the API key is valid and has not been regenerated or revoked.

---

## What's next

After authenticating with your user API key, you can:

- [Perform a test signing](/scm/api/config/mim/code-sign-manager/code-sign-client-test-signing)
- Integrate signing into your build tools. See the sample integrations in this section. 
