---
id: code-sign-client-sample-integrations-landing
title: "Sample integrations"
sidebar_label: "Sample integrations"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

This section provides example integrations that show how to use the Code Sign Client with common signing tools and build systems. These examples are designed to help you get started quickly by demonstrating how to configure the client, reference Signing Keys, and perform signing operations in real-world environments.

## What these examples are — and what they are not

The examples in this section illustrate how to use the Code Sign Client with popular signing tools such as Signtool, jarsigner, apksigner, openssl, and others. They are meant to:

- Demonstrate typical configuration patterns  
- Show how Signing Keys are accessed through the Code Sign Client  
- Help you adapt the approach to your own tools and workflows    

The examples do not represent a list of officially supported signing applications. Because the Code Sign Client exposes keys through standard cryptographic interfaces (PKCS#11 or CSP/KSP), it can work with any signing tool that supports those interfaces. You can use these samples as templates and apply the same concepts to other tools in your environment.

## Before you begin

These examples assume:

- The Code Sign Client is installed  
- The client has been authenticated using a [service account](/scm/api/config/mim/code-sign-manager/code-sign-client-auth-service-account)  
- You have access to at least one Signing Key  

If you have not completed installation or authentication, start here:

- [Install the Code Sign Client](/scm/api/config/mim/code-sign-manager/code-sign-client-install)
- [Authenticate using a service account](/scm/api/config/mim/code-sign-manager/code-sign-client-auth-service-account)

## Available examples

- [apksigner](/scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-apksigner-integration) — sign Android packages  
- [jarsigner](/scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-jarsigner-integration) — sign Java JARs  
- [SignTool](/scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-signtool-integration) — sign Windows executables, DLLs, and installers  
- [OpenSSL](/scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-openssl-integration) — sign using the OpenSSL PKCS#11 engine  
- [pkcs11-tool](/scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-pkcs11-tool-integration) — low-level PKCS#11 operations  
- [PowerShell](/scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-powershell-integration) — sign PowerShell scripts  
- [Sigstore cosign](/scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-sigstore-cosign-integration) — sign container images  
- [U-Boot mkimage](/scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-uboot-mkimage-integration) — sign bootloader firmware images  
