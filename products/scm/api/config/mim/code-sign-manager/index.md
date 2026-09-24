---
id: code-sign-client-landing
title: "Code Sign Client Overview"
sidebar_label: "Code Sign Client Overview"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

The Next-Gen Trust Security (NGTS) Code Sign Client is the command-line tool that developers, release engineers, and CI/CD systems use to sync signing key references from NGTS to a signing workstation. The keys themselves always stay in their designated storage location, and the use of the keys is governed by TSG access set NGTS.

> The Code Sign Client does include native sign and verify capability, but these are intended primarily for testing purposes.

This section helps you install the client, authenticate it, and sync the signing key references to your signing workstations. It also provides several sample integrations for a number of common code signing applications, such as signtool, jarsigner, and apksigner.


> If you are new to the code signing capability in NGTS, start with the product tutorials:

> - [**Sign using a Built-in Account**](https://docs.cyberark.com/mis-saas/CSH_csm_service_account_tutorial/)  
> 
> This tutorial shows how the Code Sign Client fits into the complete end-to-end signing process.

Administrative tasks, such as creating TSGs, Signing Keys, and Built-in Accounts are documented in the [NGTS code signing documentation](https://docs.cyberark.com/mis-saas/CSH_csm_landing/).

## Clients available for signing

The Code Sign Client is available in two forms:

- **PKCS#11 client (`pkcs11config`)** — available on Linux, macOS, and Windows  
- **CSP/KSP client (`cspconfig`)** — available on Windows only

Both clients provide the same signing capabilities and support the same command options. The primary difference is the underlying cryptographic provider they integrate with:

- **pkcs11config** uses a PKCS#11 module for signing  
- **cspconfig** integrates with the Windows Cryptographic Service Provider (CSP) and Key Storage Provider (KSP) frameworks

### Which client should I use?

Most users and CI/CD systems can use the **PKCS#11 client** (`pkcs11config`) regardless of operating system. All examples in this documentation use `pkcs11config` for consistency.

If you are signing on Windows and prefer to use the CSP/KSP ecosystem, you may use the **CSP/KSP client** (`cspconfig`) instead of `pkcs11config`.  

> The examples in this documentation all use `pkcs11config`. Other than the command name itself, all other command options are identical between the two clients.

## Get started

- [Install the Code Sign Client](/scm/api/config/mim/code-sign-manager/code-sign-client-install) — download and install the client on your workstation or build server  
- [Authenticate using a service account](/scm/api/config/mim/code-sign-manager/code-sign-client-auth-service-account) — connect the client to NGTS  
- [Configure the Code Sign Client](/scm/api/config/mim/code-sign-manager/code-sign-client-configuration) — set host URLs, proxy settings, and trace logging  
- [Perform a test signing](/scm/api/config/mim/code-sign-manager/code-sign-client-test-signing) — verify end-to-end signing and signature verification  
- [Code Sign Client CLI reference](/scm/api/config/mim/code-sign-manager/code-sign-client-cli-reference) — complete reference for all commands and options  
- [Sample integrations](/scm/api/config/mim/code-sign-manager/sample-integrations) — examples for common signing tools and CI/CD pipelines  

