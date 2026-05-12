---
id: code-sign-client-test-signing
title: "Perform a test signing"
sidebar_label: "Perform a test signing"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

After installing and authenticating the Code Sign Client, you can perform a simple test signing to confirm that everything is working correctly. This page walks you through listing available Signing Keys, signing a file, and verifying the signature.

## Before you begin

- The Code Sign Client is installed on your workstation or build machine.  
- The client is authenticated using a [service account](/scm/api/config/mim/code-sign-manager/code-sign-client-auth-service-account).  
- Your service account has access to at least one Signing Key in the Code Signing capability.

> All examples use the `pkcs11config` utility. If you are using the CSP/KSP client on Windows, replace `pkcs11config` with `cspconfig`.


## List available Signing Keys

Run the following command:

```bash
pkcs11config list
```

This lists the objects (certificates and keys) available to your authenticated identity.

Example output:

```text
Certificate 1:
Label:       Release Project-Release Signing Key
Subject:     CN=Release Signing Certificate
ID:          34353563356132632D333634392D343065652D616261302D306132623436326632333466
Environment: Certificate

Public Key 1:
Label:       Release Project-Release Signing Key
Key-Type:    RSA 2048
ID:          34353563356132632D333634392D343065652D616261302D306132623436326632333466
Environment: Certificate
```

Note the **Label** of the Signing Key you want to use. You will need this value in later steps.

If you see `INFO: No objects available.`, review the troubleshooting guidance in the authentication topics.


## Create a sample file to sign

In a temporary directory, create a file to use for the test:

```bash
echo "This is my test file" > signme.txt
```

You can use any file type, but a simple text file is sufficient for validation.


## Sign the file

Use the `sign` command to create a signature for the file.

You can either run the interactive wizard:

```bash
pkcs11config sign
```

or specify all options directly:

```bash
pkcs11config sign --filename signme.txt --label "<Signing Key Label>" --output signme.txt.sig
```

Replace `<Signing Key Label>` with the label you noted from the `pkcs11config list` output. For example:

```bash
pkcs11config sign --filename signme.txt --label "Release Project-Release Signing Key" --output signme.txt.sig
```

If the operation succeeds, you should see a message similar to:

```text
SUCCESS: Signed file 'signme.txt', signature written to 'signme.txt.sig'.
```

## Verify the signature

Use the `verify` command to confirm that the signature is valid:

```bash
pkcs11config verify --filename signme.txt --label "<Signing Key Label>" --input signme.txt.sig
```

If verification succeeds, you will see a confirmation message indicating that the signature is valid.

---

## Troubleshooting

### “Label not found”

This means the specified label does not match any Signing Key available to your authenticated identity.

- Re-run `pkcs11config list` and copy the label exactly as shown.  
- Make sure you are authenticated as the correct user or service account.

### Signature verification fails

Check the following:

- Ensure you are using the same file (`signme.txt`) and signature (`signme.txt.sig`) created during the signing step.  
- Confirm that the label used during verification matches the label used for signing.  
- Make sure the files were not modified between signing and verification.

---

## What's next

If the test signing and verification succeed, your environment is ready for integration.

- Explore the full CLI capabilities in the [Code Sign Client CLI reference](/scm/api/config/mim/code-sign-manager/code-sign-client-cli-reference).  
- Review [Sample integrations](/scm/api/config/mim/code-sign-manager/sample-integrations) for tool-specific examples (such as Signtool, jarsigner, or cosign).
