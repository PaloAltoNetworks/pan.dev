---
id: code-sign-client-sigstore-cosign-integration
title: "Integrating with Sigstore cosign"
sidebar_label: "Integrating with Sigstore cosign"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

## Overview

As a component of the Sigstore project, the cosign command supports container signing, verification, and storage in an Open Container Initiative (OCI) registry to move data center operations towards a signatures invisible infrastructure. The stated purpose for the sigstore project is to empower developers to securely sign software artifacts, such as release files, binaries, container images, binaries, bill of material manifests, and more. See [Sigstore Overview](https://docs.sigstore.dev/), [Cosign Overview](https://docs.sigstore.dev/cosign/overview), and [Cosign on GitHub](https://github.com/sigstore/cosign).

The Sigstore > cosign project supports PKCS#11 so signing operations can happen within PKCS#11-enabled environments, such as NGTS and other HSM solutions. NGTS certificate and key pair environments have been tested and verified as compatible.

The following guide provides environment-specific commands and examples for setting up and using cosign. Make sure to replace the example names, paths, and variables with those appropriate for your environment.

## Before you begin

Before proceeding, ensure you have the following:

- **Sigstore cosign 1.3 or newer** - You must use a version of cosign that is built with PKCS#11 support.
    - Make sure the version has support enabled for PKCS11key, which is specified by pivkey-pkcs11key in its filename. For example, https://github.com/sigstore/cosign/releases/download/v1.8.0/cosign-linux-pivkey-pkcs11key-amd64.
- **Code Sign Client 21.4 or newer** - This provides the necessary PKCS#11 library.
- **Access to container registry** - For example, Docker Hub.

## How do I get started?

The integration process involves three main steps:

1. **Step 1: Find Your Signing Key URI** - Use a cosign helper tool to list available PKCS#11 keys and find the unique URI for the key you wish to use.

2. **Step 2: Sign a Container Image** - Run the `cosign sign` command, providing the key URI and the path to your container image.

3. **Step 3: Verify the Signature** - Use the `cosign verify` command to confirm that the image has been successfully signed with the correct key.

## Step 1: Find Your Signing Key URI

To sign, you first need the unique PKCS#11 URI that identifies your signing key. Cosign provides a helper command to list available keys and their URIs.

List tokens:

```
cosign pkcs11-tool list-tokens --module-path /usr/local/lib/venafipkcs11.so
```

List key URIs:

```
cosign pkcs11-tool list-keys-uris --module-path /Library/Venafi/CodeSigning/lib/venafipkcs11.so
```

Example output:

```
Object 0
Label: MyLabel
ID: 446576656c6f706d7669726f6e6d656e
URI: pkcs11:token=Remote%20Token;slot-id=0;id=%44%65%76%65%6c%6f%70%6d%65%6e%74;object=Development?module-path=/usr/local/lib/venafipkcs11.so&pin-value=34
```

## Step 2: Sign a Container Image

Now use the `cosign sign` command to sign your container image. Provide the key URI you copied from the previous step to the `--key` flag.

```
./cosign sign --key "pkcs11:token=Remote%20Token;slot-id=0;id=%44%65%76%65%6c%6f%70%6d%65%6e%74;object=MyLabel?module-path=/usr/local/lib/venafi/venafipkcs11.so&pin-value=sdf" pathname/my-dashboard
```

## Step 3: Verify the Signature

Finally, verify that the signature was applied correctly using the `cosign verify` command. You must again provide the key URI so cosign knows which key to verify against.

```
./cosign verify --key "pkcs11:token=Remote%20Token;slot-id=0;id=%44%65%76%65%6c%6f%70%6d%65%6e%74;object=MyLabel?module-path=/usr/local/lib/venafi/venafipkcs11.so&pin-value=sdf" pathname/my-dashboard
```