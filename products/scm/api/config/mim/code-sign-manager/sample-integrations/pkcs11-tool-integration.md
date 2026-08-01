---
id: code-sign-client-pkcs11-tool-integration
title: "Integrating with pkcs11-tool"
sidebar_label: "Integrating with pkcs11-tool"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

## Overview

`pkcs11-tool` is a command-line utility for managing and testing PKCS#11 modules. It allows you to perform low-level operations directly, such as listing available keys and certificates, signing data, and verifying module configuration.

This guide provides common commands for using `pkcs11-tool` to interact with the Code Sign Client.

## Before you begin

Before proceeding, ensure you have the following:

- **OpenSC is installed** - The `pkcs11-tool` utility is part of the OpenSC package. You must install OpenSC on your system to make the tool available.
- **The Code Sign Client is installed** - This provides the PKCS#11 library that the tool will interact with.

## How do I get started?

If you are using the Portable Package (.zip), the OpenSSL engine driver (`.so` or `.dll`) has its own dependencies. You must add the client's `bin` and `PKCS11` (Windows) or `lib` (Linux/macOS) directories to your session's `PATH`.

For Windows CMD (Example):

```
set PATH=%PATH%;C:\path\to\venafi-client\bin;C:\path\to\venafi-client\PKCS11
```

For Linux/macOS (Bash/Zsh Example):

```
export PATH=$PATH:/path/to/venafi-client/bin:/path/to/venafi-client/lib
```

The process involves three main steps:

1. **Step 1: List Details**

2. **Step 2: Export Certificate & Convert to PEM Format** 

3. **Step 3: Sign a File**

## Windows Integration Example

**List Details:**

```
pkcs11-tool.exe --module "C:\Program Files\Venafi CodeSign Protect\PKCS11\VenafiPKCS11.dll" -O -I -M -L -T --login --login-type user --pin none
```

**Export Certificate and Convert to PEM:**

```
pkcs11-tool --module "C:\Program Files\Venafi CodeSign Protect\PKCS11\VenafiPKCS11.dll" --login --pin none --read-object --type cert --label  --output-file c:\tosign\sample.crt
 
openssl x509 -inform der -in sample.crt -out sample.pem
```

**Sign File:**

```
pkcs11-tool.exe --module "C:\Program Files\Venafi CodeSign Protect\PKCS11\VenafiPKCS11.dll" -O -I -M -L -T --login --login-type user --pin none --sign --id 53616d706c652d446576656c6f706d656e742d456e7669726f6e6d656e74 -i c:\tosign\test.txt -o c:\tosign\test.text.sig -m SHA512-RSA-PKCS
```

## Linux Integration Example

**List Details:**

```
pkcs11-tool --module /opt/venafi/codesign/lib/venafipkcs11.so -I -O -M --login --pin none
```

**Export Certificate and Convert to PEM:**

```
pkcs11-tool --module /opt/venafi/codesign/lib/venafipkcs11.so --login --pin none --read-object --type cert --label Sample-Development-Environment --output-file sample.crt
 
openssl x509 -inform der -in sample.crt -out sample.pem
```

**Sign File:**

```
pkcs11-tool --module /opt/venafi/codesign/lib/venafipkcs11spy.so  -I -M -L -T -O  \
--login --login-type user --pin none --sign --id 53616d706c652d446576656c6f706d656e742d456e7669726f6e6d656e74 \
-i /tmp/test -o /tmp/test.txt.sig -m SHA512-RSA-PKCS
```

## macOS Integration Example

**List Details:**

```
pkcs11-tool --module /usr/local/lib/venafipkcs11.so -I -O -M --login --pin none
```

**Export Certificate and Convert to PEM:**

```
pkcs11-tool --module /usr/local/venafipkcs11.so --login --pin none --read-object --type cert --label Sample-Development-Environment --output-file sample.crt
 
openssl x509 -inform der -in sample.crt -out sample.pem
```

**Sign File:**

```
pkcs11-tool --module /usr/local/lib/venafipkcs11.so  -I -M -L -T -O  \
--login --login-type user --pin none --sign --id 53616d706c652d446576656c6f706d656e742d456e7669726f6e6d656e74 \
-i /tmp/test -o /tmp/test.txt.sig -m SHA512-RSA-PKCS
```