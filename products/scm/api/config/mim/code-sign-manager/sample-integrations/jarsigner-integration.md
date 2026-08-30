---
id: code-sign-client-jarsigner-integration
title: "Integrating with jarsigner"
sidebar_label: "Integrating with jarsigner"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

## Overview

This guide provides instructions on how to configure jarsigner to use keys and certificates from the Code Signing capability.

By following these steps, you can sign your Java applications using a centrally managed key without exposing the private key material on your local machine.

## Before you begin

Before you can integrate jarsigner, you must have the following prerequisites met:

- **Java Development Kit (JDK) Installed** - The jarsigner and keytool utilities are part of the JDK. Ensure the JDK is installed and the bin directory is in your system's PATH.
- **Code Sign Client installed** - This provides the necessary PKCS#11 library that jarsigner will use to communicate with the service.
- **JAR File to Sign** - Have a Java application (.jar file) ready for signing.

## How do I get started?

The integration process involves three main steps:

Example:

1. **Step 1: Create a PKCS#11 Configuration File** - You will create a simple text file that tells the Java security provider where to find the PKCS#11 library.

2. **Step 2: Sign the JAR File** - You wil run the jarsigner command, pointing it to your configuration file and specifying the key to use.

3. **Step 3: Verify the Signature** - After signing, you will use jarsigner's verification command to confirm the signature is valid.

## Linux Example Integration

**Additional Configuration Required**

This integration method will fail on modern JDKs (Java 9 or newer) without the following configuration.

1. **Set Java VM Options** - Modern JDKs hide the PKCS#11 provider by default. You must export an environment variable to expose it before running `keytool` or `jarsigner`.

For Bash/Zsh:

```
export _JAVA_OPTIONS="--add-opens=jdk.crypto.cryptoki/sun.security.pkcs11=ALL-UNNAMED"
```

2. **Add Client Binaries to the System PATH (Portable Package)** - If using the portable package, the PKCS#11 driver (`.so`) has dependencies that must be discoverable. You must add the client's `bin` and `lib` directories to your `PATH`.

For Bash/Zsh (Example):

```
export PATH=$PATH:/path/to/venafi-client/bin:/path/to/venafi-client/lib
```

**Create a Configuration File**

For example /root/venafipkcs11.conf. Sample configuration file:

```
name = VenafiPKCS11
library ="/opt/venafi/codesign/lib/venafipkcs11.so"
slot = 0
```
If you want to configure globally, add a provider to java.security, which applies to all use of Java on the system. For example:

```
...
security.provider.6=sun.security.jgss.SunProvider
security.provider.7=com.sun.security.sasl.Provider
security.provider.8=org.jcp.xml.dsig.internal.dom.XMLDSigRI
security.provider.9=sun.security.smartcardio.SunPCSC
security.provider.10=sun.security.pkcs11.SunPKCS11 /root/venafipkcs11.conf
...
```

**Sign JAR**

Use the jarsigner command to sign your JAR. Replace:
- `<your-jar-file>` with the JAR you want to sign
- `<your-key-label>` with the label of your signing key
- `<path-to-config>` with the path to your PKCS#11 configuration file

```
jarsigner \
 -verbose <your-jar-file> "<your-key-label>" \
 -keystore NONE \
 -storetype PKCS11 \
 -certs \
 -storepass none \
 -providerclass sun.security.pkcs11.SunPKCS11 \
 -providerArg <path-to-config>
```

**Verify a JAR with the Code Sign Client PKCS#11 library**

```
jarsigner -verify \
 -keystore NONE \
 -storetype PKCS11 \
 -storepass none \
 -providerclass sun.security.pkcs11.SunPKCS11 \
 -providerArg <path-to-config> <your-jar-file>
```

**Important Notes:**
- You may see warnings about an invalid certificate chain. This is expected as Java's default trust store does not include the Code Signing capability certificate chain. Signing is still successful
- If you run `jarsigner -verify <your-jar-file>` without PKCS11 options, it may fail due to trust chain issues. This does not affect signing.
- Troubleshooting:
    - Provider not found - Check _JAVA_OPTIONS export
    - Library not found - Verify the path in your configuration file
    - Alias not found - Ensure the key label matches what is configured in the Code Signing capability


## macOS Example Integration

**Additional Configuration Required**

This integration method will fail on modern JDKs (Java 9 or newer) without the following configuration.

1. **Set Java VM Options** - Modern JDKs hide the PKCS#11 provider by default. You must export an environment variable to expose it before running `keytool` or `jarsigner`.

For Bash/Zsh:

```
export _JAVA_OPTIONS="--add-opens=jdk.crypto.cryptoki/sun.security.pkcs11=ALL-UNNAMED"
```

2. **Add Client Binaries to the System PATH (Portable Package)** - If using the portable package, the PKCS#11 driver (`.so`) has dependencies that must be discoverable. You must add the client's `bin` and `lib` directories to your `PATH`.

For Bash/Zsh (Example):

```
export PATH=$PATH:/path/to/venafi-client/bin:/path/to/venafi-client/lib
```

**Create Configuration File**

For example /Users/signcode/venafipkcs11.conf. Sample configuration file:

```
name = VenafiPKCS11
#library = "/Library/Venafi/CodeSigning/lib/venafipkcs11spy.so"
library ="/Library/Venafi/CodeSigning/lib/venafipkcs11.so"
slot = 0
```

**Sign JAR**

```
jarsigner \
 -verbose /Users/codesign/tosign/test.jar Sample-Development-Environment \
 -keystore NONE \
 -storetype PKCS11 \
 -certs \
 -storepass none \
 -providerclass sun.security.pkcs11.SunPKCS11 \
 -providerArg /Users/codesign/venafipkcs11.conf
```

**Verify Jar**

To verify, use the same steps that are included in the Linux section.

## Windows PKCS11 Example Integration

**Prerequisites for PKCS#11**

This integration method is complex and will fail on modern systems without the following configuration. These steps are required when using a modern JDK (Java 9+) and/or the "Portable Package (.zip)" client.

1. **Set Java VM Options** - Before running `keytool` or `jarsigner`, you must set an environment variable to expose an internal Java module.

For Powershell:

```
$env:_JAVA_OPTIONS = "--add-opens=jdk.crypto.cryptoki/sun.security.pkcs11=ALL-UNNAMED"
```

For Windows CMD:

```
set _JAVA_OPTIONS=--add-opens=jdk.crypto.cryptoki/sun.security.pkcs11=ALL-UNNAMED
```

2. **Add Client Binaries to the System PATH (Portable Package)** - If using the portable package, the PKCS#11 driver (`venafipkcs11.dll`) has its own dependencies that must be discoverable. You must add the client's `bin` and `PKCS11` directories to your session's `PATH`.

For Powershell:

```
$env:Path = $env:Path + ";C:\path\to\venafi-client\bin;C:\path\to\venafi-client\PKCS11"
```

For Windows CMD:

```
set PATH=%PATH%;C:\path\to\venafi-client\bin;C:\path\to\venafi-client\PKCS11
```

**Create a Configuration File**

Example for `.msi` installer (Admin):

This points to the default installation directory.

```
name = VenafiPKCS11
library = "c:\\Program Files\\Venafi CodeSign Protect\\PKCS11\\VenafiPkcs11.dll"
slot = 0
```

Example for "Portable Package (zip)" (Non-Admin):

This example assumes the client was extracted to C:\venafi-client. Users must update the path to match their own extraction location.

```
name = VenafiPKCS11
library = "c:\\venafi-client\\PKCS11\\PKCS11\\venafipkcs11.dll"
slot = 0
```

**List Contents**

```
Keytool ^
 -list ^
 -keystore none ^
 -storetype PKCS11 ^
 -providerclass sun.security.pkcs11.SunPKCS11 ^
 -providerArg c:\venafipkcs11.conf
```

**List Alias Names**

```
keytool ^
 -keystore NONE ^
 -storetype PKCS11 -list
```

**Sign Jar**

```
jarsigner ^
 -verbose c:\tosign\jrt-fs.jar Sample-Development-Environment ^
 -keystore NONE ^
 -storetype PKCS11 ^
 -certs ^
 -storepass none ^
 -providerclass sun.security.pkcs11.SunPKCS11 ^
 -providerArg c:\venafipkcs11.conf
```

## Windows CSP Example Integration

**Important: Admin Priviliges Required**

The Windows CSP integration is the reccommended method for Windows, but it requires the full, system-wide installation of the Code Sign Client using the Installer (.msi).

This method is not compatible with the non-admin "Portable Package (.zip)". The CSP driver must be registered in the Windows system registry which is not possible with a non-admin portable installation.

Following is a sample command line for jarsigner. Use the correct path to jarsigner on your system:

```
cd "C:\\Program Files\\jdk\\microsoft_dist_openjdk_1.8.0.9\\bin"
jarsigner.exe^
 -verbose^
 -storetype Windows-My^
 -Keystore NONE c:\Source\android-rottentomatoes-demo-master\libs\picasso-2.1.1.jar "Sample Code Signers Are Us, LLC"^
 -tsa http://timestamp.digicert.com
```

In the example above, the -storetype parameter specifies the local trust store, which triggers the Code Sign Client CSP. The key being used has a common name of “Sample Code Signers Are Us, LLC”, and the binary being signed is thePicasso-2.1.1.jar file. This sample also uses a DigiCert timestamp server.

## What's next

You can now integrate this jarsigner command into your automated build and release pipelines to ensure all your Java applications are securely signed.

## Related information

- [Oracle Java SE Documentation - jarsigner](https://docs.oracle.com/javase/7/docs/technotes/tools/windows/jarsigner.html)