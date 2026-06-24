---
title: Ephemeral build server example
categorySlug: code-sign-client-sample-integrations
parentDocSlug: code-sign-client-sample-integrations-landing
slug: code-sign-client-ephemeral-build-server-example
order: 10
hidden: true
---

Code Signing Manager – SaaS supports signing from short-lived, on-demand build servers such as ephemeral VMs or container-based CI runners. In this model, the build environment is created for a single job, performs signing operations using centrally managed keys, and is then destroyed.

This example demonstrates how to authenticate the Code Sign Client on an ephemeral build server using a service account, perform signing with standard signing tools, and then cleanly remove authentication state before the machine is terminated.

> This example focuses on authentication and signing flow. It assumes that administrative setup (Projects, Signing Keys, service account, and Authorized Signers) has already been completed.

## Important notes about ephemeral authentication

At this time, fully ephemeral service account authentication has some limitations:

- Code Signing Manager – SaaS requires a service account to have a registered public key.
- When the Code Sign Client generates a keypair locally, the public key must be uploaded to the service account **before** authentication can complete.
- Because of this, the most reliable way to support ephemeral build servers today is to:
  - Generate the service account keypair in the UI, and
  - Store the private key securely with the build system (for example, in a CI secret store).

Future versions of the client are expected to improve this flow by allowing keypair generation and public key registration as separate steps.

## Authentication model used in this example

This example uses service account authentication, which is the recommended approach for automated and ephemeral environments.

Authentication is performed using:
- A **Client ID** issued by Code Signing Manager – SaaS
- A **private key** associated with the service account

No user credentials or passwords are used.


## CSP/KSP example (Windows)

### Boot the build server

Examples:
- Launch a Windows VM from a template
- Start a Windows-based CI runner

### Authenticate the client

Authenticate using the service account Client ID and private key:

```powershell
cspconfig login `
  --host api.venafi.cloud `
  --clientid <SERVICE_ACCOUNT_CLIENT_ID> `
  --keyfile <PATH_TO_PRIVATE_KEY>
