---
id: code-sign-client-auth-service-account
title: "Authenticate using a service account"
sidebar_label: "Authenticate using a service account"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

Service accounts allow the Code Sign Client to authenticate as a machine identity rather than a user. This is the recommended approach for automated signing environments such as CI/CD pipelines or build servers.

Because the service account setup requires interaction with the Strata Cloud Manager UI, the full procedure is documented in the main product documentation.

> For the complete end-to-end process, see the **[service account authentication tutorial](https://docs.cyberark.com/mis-saas/CSH_csm_service_account_tutorial/)**.

## Before you begin

- An administrator has created a service account for NGTS  
- You are a member of the service account’s Owning Team  
- The service account is assigned as an Authorized Signer on at least one Project  
- The Code Sign Client is installed on the signing machine  

## How service account authentication works

Here is a high-level view of the workflow, regardless of platform:

1. An administrator configures the Project, Signing Key, Team, and service account.  
2. The Code Sign Client generates a key pair on the signing machine.  
3. You paste the public key into the service account configuration in Strata Cloud Manager.  
4. Strata Cloud Manager issues a **Client ID** for the service account.  
5. You provide this Client ID to the Code Sign Client.  
6. The client authenticates using the Client ID and the locally stored private key.

After these steps, the Code Sign Client is authenticated as the service account.

## Authenticate the service account

The detailed configuration steps are provided in the main documentation, as they require UI interaction. See [Using a service account](https://docs.cyberark.com/mis-saas/CSH_csm_service_account/) for complete setup and authentication instructions.

Once the UI configuration is finished, the Code Sign Client can authenticate and begin syncing Signing Keys.

## What's next

After authenticating using a service account, you can:

- List available Signing Keys with `pkcs11config list`
- [Perform a test signing](/scm/api/config/mim/code-sign-manager/code-sign-client-test-signing)
- [Integrate with signing applications](/scm/api/config/mim/code-sign-manager)
