---
id: code-sign-client-openssl-integration
title: "Integrating with OpenSSL"
sidebar_label: "Integrating with OpenSSL"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

## Overview

OpenSSL can be extended using an **engine**, which acts as a plugin to allow OpenSSL to communicate with external cryptographic hardware or services. This guide will show you how to configure the `pkcs11` engine to connect OpenSSL with NGTS.

By following these steps, you can use standard OpenSSL commands to perform signing operations using keys that are securely managed by the Code Sign service.

## Before you begin

Before proceeding, ensure the following prerequisites are met:

- **OpenSSL is installed** - You must have a standard OpenSSL installation on your system.
- **The Code Sign Client is installed** - This provides the core PKCS#11 library that the engine will use.
- **The PKCS#11 Engine is installed** - This engine will be the bridge between OpenSSL and the PKCS#11 standard. On Red Hat-based systems like CentOS, you may need to install it from the EPEL repository.
    - **On CentOS 7 / Red Hat 7:**

    ```
    sudo yum install epel-release
    sudo yum install openssl-pkcs11
    ```
    - **On CentOS 8 / Red Hat 8:** The `openssl-pkcs11` is part of the base OS.

## How do I get started?

If you are using the Portable Package (.zip), add the client's `bin` and `lib` directories (Linux/macOS) or `bin` and `PKCS11` directories (Windows) to your session's `PATH`. This ensures the PKCS#11 library dependencies are discoverable.

For Windows CMD (Example):

```
set PATH=%PATH%;C:\path\to\venafi-client\bin;C:\path\to\venafi-client\PKCS11
```

For Linux/macOS (Bash/Zsh Example):

```
export PATH=$PATH:/path/to/venafi-client/bin:/path/to/venafi-client/lib
```

The integration process involves two main steps:

1. **Step 1: Configure the OpenSSL Engine** - You will create your OpenSSL configuration file (`openssl.conf`) to define and load the PKCS#11 engine.

2. **Step 2: Perform Signing Operations** - You will use standard `openssl` commands with the `-engine pkcs11` flag to perform various signing and verification tasks.

## Step 1: Configure the OpenSSL Engine

Create a new OpenSSL configuration file (for example, `openssl.cnf`) instead of modifying the system default. This file will define and load the PKCS#11 engine.

```
openssl_conf = openssl_def
 
[openssl_def]
engines = engine_section
 
[engine_section]
pkcs11 = pkcs11_section
 
[pkcs11_section]
dynamic_path = /usr/lib/engines/engine_pkcs11.so
engine_id = pkcs11

MODULE_PATH = <path-to-pkcs11-library>
PIN = none
default_algorithms = ALL
init = 1
```
In the configuration above, set `MODULE_PATH` to the Code Sign Client PKCS#11 library path for your operating system:
- **Linux:** /opt/venafi/codesign/lib/venafipkcs11.so
- **macOS:** /usr/local/lib/venafipkcs11.so
- **Windows:** C:\Program Files\Venafi CodeSign Protect\PKCS11\VenafiPKCS11.dll

**Troubleshooting:** If you see `Invalid engine "pkcs11"`, ensure:
- The PKCS11 engine is installed (run `openssl engine pkcs11` to confirm the engine is available)
- The dynamic path in your config file points to the correct engine library (e.g., `/usr/lib/engines-1.1/engine_pkcs11.so` on Linux)

## Step 2: Perform Signing Operations

**Important:** OpenSSL PKCS#11 integration is not supported on Windows with the Code Sign Client. Do not attempt manual installation of third-party PKCS#11 engines.

The base version of OpenSSL for Windows does not include a PKCS#11 engine loader. A separate, third-party OpenSSL engine (such as `engine_pkcs11.dll`) must be manually compiled and installed.

**NOTE** *There are two formats available to identify which key to use:*

**Old OpenSSL format**
- Slot identifier: slot_#- (this will be 0 most of the time)
- Label identifier: label_label
- Example: slot_0-label_Sample-Development-Environment

**RFC 7512 format**
- Mechanism: In this case pkcs11
- Object: The object name (in this case the label) of the key you want to work with
- Example: pkcs11:object=Sample-Development-Environment\

The examples below use the RFC 7512 format.

**NOTE** *The command examples below use the backslash (\) as the line continuation character, which is valid for Linux and macOS clients. If you're using Windows, use the caret (^) instead.*

Use private key to sign:

```
OPENSSL_CONF=./openssl.cnf openssl dgst \
-engine pkcs11 \
-sign "pkcs11:object=Sample-Development-Environment" \
-keyform engine \
-sha256 \
-out test.signed.ossl test
```

Obtain public key:

```
pkcs11config getpublickey \
-label sample-development-environment \
-file sample-development-environment.pub
```

Verify signature with public key:

```
openssl dgst \
-verify sample-development-environment.pub \
-sha256 \
-signature test.signed.ossl test
```

Verify signature with private key:

```
OPENSSL_CONF=./openssl.cnf openssl dgst \
-engine pkcs11 \
-prverify "pkcs11:object=Sample-Development-Environment" \
-keyform engine \
-signature test.signed.ossl test
```
