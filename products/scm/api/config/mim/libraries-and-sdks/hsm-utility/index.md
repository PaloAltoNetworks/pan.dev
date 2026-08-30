---
id: libraries-sdks-tools-hsm-utility
title: "HSM Utility"
sidebar_label: "HSM Utility"
keywords:
  - Machine Identity Management
  - Libraries and SDKs
---

#  HSM Validation Utility

Venafi TLS Protect Datacenter (formerly known as Trust Protection Platform) supports integrations with Hardware Security Modules (HSMs) to encrypt private keys, credentials, and other secrets stored in the database.
Users can also use the HSM integration for the central generation of private keys.

To be listed in the Venafi documentation as a compatible HSM provider, it's important to test and validate each use case that your HSM supports:

- [x] **Encrypt Secrets -** Supports creation and storage of the Venafi database encryption key
- [x] **Private Key Generation -** Supports creation and storage of private keys used for certificate generation
- [x] **Private Key Export -** Supports *export* of private keys used for certificates
- [x] **Code Signing Certificate Private Key Generation & Storage** 

:::tip Certify Your HSM Solution!
Venafi makes it fast and easy to certify your HSM solution for use with Venafi.
If you are interested in getting access to the HSM Validation Utility, **Please [email the Ecosystem team](mailto:ecosystem@venafi.com?subject=HSM%20Validation%20Utility%20Request).**
:::
