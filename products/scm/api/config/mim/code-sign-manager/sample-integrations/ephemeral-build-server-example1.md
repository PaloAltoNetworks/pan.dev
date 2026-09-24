---
id: code-sign-client-ephemeral-build-server
title: "Ephemeral build server example"
sidebar_label: "Ephemeral build server example"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

## Overview

The Code Signing capability supports signing from short-lived, on-demand build servers such as ephemeral VMs or container-based CI runners. In this model, the build environment is created for a single job, performs signing operations using centrally managed keys, and is then destroyed.

This example demonstrates how to authenticate the Code Sign Client on an ephemeral build server using a service account, perform signing with standard signing tools, and then cleanly remove authentication state before the machine is terminated.

> This example focuses on authentication and signing flow. It assumes that administrative setup (Projects, Signing Keys, service account, and Authorized Signers) has already been completed.

## Authentication model used in this example

This example uses service account authentication, which is the recommended approach for automated and ephemeral environments.

Authentication is performed using:
- A Client ID issued by the Code Signing capability
- A private key associated with the service account

No user credentials or passwords are used.

## Service account configuration

Service accounts are used to authenticate build machines to NGTS. To get started, you first need to configure a service account in Strata Cloud Manager. 

As you walk through the service account create steps, note the following:

- When configuring the service account, be sure to to select the **Key pair - Auto-generate a keypair and download the private key** authentication method. 
- When creating your service account, the Code Signing capability will generate a key pair, and you'll be prompted to copy your service account's private key. You'll need to store that private key in a location where your signing workstation can access it.
- After the service account is created, the Code Signing capability will assign your service account a _Client ID_. This can be copied from the UI, and it also needs to be stored in a location where your signing workstation can access it.

## Authenticate the client

To authenticate the client, use the following command:

```bash
pkcs11config login -host api.venafi.cloud -clientid xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx -keyfile /path/to/key.pem -force
```

This command authenticates the Code Sign Client as the service account. Once authenticated, the signing keys available to the service account become available for use.

## List signing keys

This step isn't required, but listing the signing keys provides the key _label_, which is what is used to identify the key in most signing applications.

```bash
pkcs11config list
```

## Build your code

Run your existing build steps to produce the artifact to be signed.

## Sign the artifact

See our [sample integrations](/scm/api/config/mim/code-sign-manager/sample-integrations) for examples on integrating with common code signing applications. 

For testing purposes, you can also use `pkcs11config sign`.

## Clear authentication state

Before destroying the machine, remove the local authentication configuration:

```bash
pkcs11config logout -force
```


