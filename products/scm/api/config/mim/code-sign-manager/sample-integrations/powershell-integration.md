---
id: code-sign-client-powershell-integration
title: "Integrating with PowerShell"
sidebar_label: "Integrating with PowerShell"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

## Overview

You can sign PowerShell scripts using the standard `Set-AuthenticodeSignature` cmdlet. This integration method works with the Code Sign Client, which makes your code signing certificates available directly in the native Windows Certificate Store.

This guide will show you how to find the correct certificate provided by the Code Sign client and use it to sign your PowerShell scripts.

## Before you begin

Before proceeding, ensure you have the following:

- **A PowerShell script file** - A script file (e.g., `hello.ps1`) that you will be signing.
- **The Code Sign Client** - The Code Sign Client installed and running on a Windows machine.

## How do I get started?

The process involves two main steps, with the optional third step for handling certificate trust:

1. **Step 1: Find Your Signing Certificate** - Locate the code signing certificate in the Windows Certificate Store using PowerShell.

2. **Step 2: Sign Your Powershell Script** - Use the `Set-AuthenticodeSignature` cmdlet with the certificate you found to sign your file.

3. **Step 3: Handle Certificate Chain Trust** - Ensure the certificate's trust chain is properly installed to avoid warnings.

## Step 1: Find Your Signing Certificate

First, you need to get a reference to the code signing certificate you want to use. You can list all available code signing certificates in the current user's store with the following command:

```
dir Cert:\CurrentUser\My\ -CodeSigningCert
```

To select a specific certificate, you can filter the results by its subject name. The result is stored in a variable for use in the next step.

```
$devcert=(dir Cert:\CurrentUser\My\ |Where-Object { $_.Subject -match "My Signing Cert" })
```
*Replace "My Signing Cert" with a unique part of your certificate's subject name.*

## Step 2: Sign Your PowerShell Script

With the certificate stored in a variable, use the `Set-AuthenticodeSignature` cmdlet to sign your script file.

```
Set-AuthenticodeSignature -Certificate $devcert -FilePath .\hello.ps1
```

A successfull command will return a status of "Valid" for the signed file.

![PowerShell Signing Result](/img/mim/codesignmanager/powershell.png)

## Step 3: Handle Certificate Chain Trust

For a signature's status to show as "Valid," the system must trust the entire certificate chain. The Code Sign client has a setting to automatically install the root chain for you.

This setting is found on the **Rules & Restrictions** page of the Code Signing Project in the Code Signing capability.

![Rules & Restrictions Setting](/img/mim/codesignmanager/install-chain.png)

Without having the Install Certificate Chain option selected, the PowerShell signing status would return “UnknownError," but the code would still be signed successfully. This is because the root certificate used to create the signing key/certificate is not trusted. If an internally-trusted Microsoft CA or a public CA would have been used to sign, checking this box would not have been needed.

If you did not push the root chain in the environment, but still want to get around this error message, you can solve it for the system you are on by issuing the following commands:

```
Export-Certificate -FilePath export-cert.cer -Cert $devcert

Import-Certificate -FilePath .\export-cert.cer -CertStoreLocation Cert:\CurrentUser\Root
```
Here is the result of these commands:

![PowerShell Command Results](/img/mim/codesignmanager/powershell2.png)

**NOTE** *The error message does not prevent the script from being signed, and the signing still completes successfully. It is just warning you that it is signed by an untrusted CA.*

## What's next?

You can now incorporate these PowerShell commands into your automated CI/CD pipelines or build scripts on Windows to sign your application files and scripts.