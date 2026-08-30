---
id: code-sign-client-apksigner-integration
title: "Signing Android Packages with apksigner"
sidebar_label: "Signing Android Packages with apksigner"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

## Overview

Android requires that all Android Package Kits (APKs) be digitally signed with a certificate before they are installed on a device or updated. The apksigner tool, available as part of the Android SDK Build Tools, lets you sign APKs and confirm that an APK's signature will be verified successfully on all versions of the Android platform supported by that APK.

Since Android packages are based on the Java framework, you can use apksigner and a PKCS#11 integration with NGTS to sign your applications. The diagram below shows how the Google Play signing workflow integrates with NGTS.

![Google Play Signing Workflow](/img/mim/codesignmanager/swimlane.png)

## Before you begin

Before proceeding, ensure you have the following:

- **A build/developer system**
- **The Code Sign Client installed**
- **The apksigner CLI (part of Android Studio and Android SDK Build Tools** 

## How do I get started?

The PKCS#11 integration will fail on modern systems without the following configuration.

1. **Set Java VM Options for Modern JDKs (Java 9+)** - Modern JDKs hide the PKCS#11 provider by default. You must set an environment variable to expose it before running `apksigner`.

For Powershell:

```
$env:_JAVA_OPTIONS = "--add-opens=jdk.crypto.cryptoki/sun.security.pkcs11=ALL-UNNAMED"
```

For Windows CMD:

```
set _JAVA_OPTIONS=--add-opens=jdk.crypto.cryptoki/sun.security.pkcs11=ALL-UNNAMED
```

For Linux/macOS (Bash/Zsh):

```
export _JAVA_OPTIONS="--add-opens=jdk.crypto.cryptoki/sun.security.pkcs11=ALL-UNNAMED"
```

2. **Add Client Binaries to the System PATH (Portable Package)** - If using the portable package, the PKCS#11 driver (.so) has dependencies that must be discoverable. You must add the client's bin and lib directories to your PATH.

For Windows CMD (Example):

```
set PATH=%PATH%;C:\path\to\venafi-client\bin;C:\path\to\venafi-client\PKCS11
```

For Linux/macOS (Example):

```
export PATH=$PATH:/path/to/venafi-client/bin:/path/to/venafi-client/lib
```

The integration process involves three main steps:

Example:

1. **Step 1: Create a PKCS#11 Configuration File** - You will create a text file that tells the Java security provider where to find the PKCS#11 library.

2. **Step 2: Find Your Signing Key's Label** - You will list the available keys to find the correct label for the key you want to use.

3. **Step 3: Sign the APK File** - You will run the apksigner command, pointing it to your configuration file and specifying the key.

## Step 1: Create a PKCS11 Configuration File

The Java security provider that apksigner uses needs to know how to communicate with NGTS via the Code Sign Client. You do this by creating a configuration file.

Create a new text file (e.g., `venafipkcs11.conf`) and add the following, ensuring the `library` path is correct for your operating system.

**File Content:**

```
name = VenafiPKCS11
library ="/opt/venafi/codesign/lib/venafipkcs11.so"
slot = 0
```

## Step 2: Find Your Signing Key's Label

To sign your package, you need to provide apksigner with the label of the key you wish to use.

Run the `pkcs11config listobjects` command to list the signing keys that are available. For the one you want to sign with, copy the `Label` value.

## Step 3: Sign the APK File

Now you can run the `apksigner sign` command to sign your Android package. Pass the Label value from the previous step in the `--ks-key-alias` argument.

```
apksigner sign \
  --ks NONE \
  --ks-pass pass:ignoreme \
  --provider-class sun.security.pkcs11.SunPKCS11 \
  --provider-arg ~/venafipkcs11.conf \
  --ks-type PKCS11 \
  --ks-key-alias <Label> ~/test.apk
```
Replace `~/test.apk` with the path to your Android package file.

## What's next

After your APK is successfully signed, you can proceed with the standard Google Play Console workflow:

1. Upload the signed APK to the Google Play Console.

2. Assign the upload key to your developer account.

3. Generate the app signing key.

4. Create a release and distribute your application.
