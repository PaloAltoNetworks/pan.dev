---
id: code-sign-client-signtool-integration
title: "Integrating with SignTool"
sidebar_label: "Integrating with SignTool"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

## Overview

`SignTool.exe` is the standard Microsoft command-line tool for applying Authenticode digital signatures to Windows files such as executables (`.exe`), libraries (`.dll`), and installers (`.msi`).

The Code Sign Client integrates with SignTool by making your signing certificates available in the native Windows Certificate Store, where SignTool automatically finds them.

This guide will walk you through the process of signing a file and will show you how to handle the common scenario where multiple certificates are available.

## Before you begin

Before proceeding, ensure you have the following:

- **SignTool.exe installed** - It is included as part of the Windows SDK.
- **The Code Sign Client** - The Code Sign Client installed and running on a Windows machine.
- **A file to sign** - Some file (e.g., `myfile.exe`) that you want to sign.

## How do I get started?

The process involves running the `signtool.exe sign` command. However, if you have access to more than one code signing certificate, you must explicitly tell SignTool which one to use.

1. **Step 1: Try to Sign the File** - Run the basic signing command.

2. **Step 2: Select a Specific Certificate** - If the first command fails because multiple certificates are found, re-run the command with a flag to specify your desired certificate.

## Step 1: Try to Sign the File

To sign a file, use the below command. By default, SignTool will try and find & use a single valid code signing certificate in your Windows Certificate Store.

```
signtool.exe sign c:\temp\myfile.exe
```
If you only have one certificate, this command will succeed. However, if you have multiple, it will fail with an error.

## Step 2: Select a Specific Certificate

If you have access to more than one certificate, SignTool will stop and prompt you to be more specific. The output will look like this:

![Available Keys](/img/mim/codesignmanager/signtool.png)

To resolve this, you must re-run the command and specify which certificate to use. You can do this by using the certificate's Subject Name (`/n`).

```
signtool.exe sign /n "Sample, Inc" c:\temp\myfile.exe
```
*In this example, we select the certificate where the "Issued To" field is "Sample, Inc"*

A successful command will produce the following output:

```
C:\temp>signtool.exe sign /n "Sample, Inc" myfile.exe
Done Adding Additional Store
Successfully signed: myfile.exe 
```

