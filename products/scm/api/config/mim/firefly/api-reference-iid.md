---
id: firefly-api-reference-cloud-workloads
title: "API reference for cloud workloads"
sidebar_label: "API reference for cloud workloads"
keywords:
  - Machine Identity Management
  - Workload Identity Manager
---

## Introduction

*Workload Identity Manager* (formerly known as *Firefly*)provides [REST endpoints](#rest-methods) for cloud workloads to request certificates using an instance identity document (IID) issued to them that is signed by their provider (e.g., [Amazon Web Services](https://aws.amazon.com/), [Microsoft Azure](https://azure.microsoft.com/), and [Google Cloud](https://cloud.google.com/)).  This approach is particularly useful for enabling mutual TLS (mTLS) for cloud workloads because they can easily exchange IIDs for the X.509 certificates mTLS requires and avoid the step of authenticating with an external identity provider before interacting with *Workload Identity Manager*.

## Authentication & Authorization

*Workload Identity Manager* authenticates and authorizes workloads by validating the IID they present is signed by an authorized cloud provider.  No further authentication is required or necessary.

- **Amazon Web Services**

  [AWS IIDs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-identity-documents.html) are provided in PKCS#7 format.  You can obtain a *Workload Identity Manager*-compatible IID for an [EC2 Instance](https://aws.amazon.com/ec2/) running in AWS by executing the following from the instance's command line:

  ```sh
  TOKEN=`curl -s -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"` && curl -s -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/dynamic/instance-identity/rsa2048 | awk 1 ORS='\\n' | awk '$0="-----BEGIN PKCS7-----\\n"$0"-----END PKCS7-----"'
  ```

  Use the output of the preceding command (with linebreaks) for the `instanceIdentityDocumentRSA2048` parameter when requesting a certificate from *Workload Identity Manager*.

- **Microsoft Azure**

  [Azure IIDs](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/how-to-use-vm-token) are JSON Web Tokens (JWTs).  You can obtain a *Workload Identity Manager*-compatible IID for a [Virtual Machine](https://azure.microsoft.com/en-us/products/virtual-machines) running in Azure by executing the following from the instance's command line:

  ```sh
  curl -s -H "Metadata:true" 'http://169.254.169.254/metadata/identity/oauth2/token?api-version=2018-02-01&resource=https%3A%2F%2Fmanagement.azure.com%2F'
  ```

  Use the output of the preceding command for the `instanceIdentityDocument` parameter when requesting a certificate from *Workload Identity Manager*.

- **Google Cloud**

  [Google Cloud IIDs](https://cloud.google.com/docs/authentication/get-id-token) are JSON Web Tokens (JWTs).  You can obtain a *Workload Identity Manager*-compatible IID for a [Virtual Machine](https://cloud.google.com/compute) running in Google Cloud by executing the following from the instance's command line:

  ```sh
  curl -H "Metadata-Flavor: Google" 'http://metadata/computeMetadata/v1/instance/service-accounts/default/identity?audience=WHATEVER&format=full&licenses=TRUE'
  ```

  Use the output of the preceding command for the `instanceIdentityDocument` parameter when requesting a certificate from *Workload Identity Manager*.

## Request Variables

| Name | Details | Variable |
|------|---------|----------|
| Instance Identity Document (JWT) | Applicable to Microsoft Azure &amp; Google Cloud | `instanceIdentityDocument` |
| Instance Identity Document (PKCS#7) | Applicable to Amazon Web Services | `instanceIdentityDocumentRSA2048` |
| Key Type | Key algorithm and size or elliptic curve for the certificate.  Valid values are: `RSA_2048`, `RSA_3072`, `RSA_4096`, `EC_P256`, `EC_P384`, `EC_P521`, and `EC_ED25519` | `keyType` |
| Validity Period | Desired validity of the certificate expressed as an [ISO 8601 duration](https://en.wikipedia.org/wiki/ISO_8601#Durations) (e.g., "P90D" for 90 days or "PT36H" for 36 hours) | `validityPeriod` |
| Policy Name | Name of the policy for which the certificate is being requested.  Policy is defined by CyberArk Certificate Manager - SaaS when *Workload Identity Manager* is running in **Control Plane Mode** and is defined in the `config.yaml` when running in **Developer Mode**. | `policyName` |

## Response Variables

| Name | Details | Variable |
|------|---------|----------|
| Certificate Chain | PEM formatted X.509 certificates starting with the end-entity and ending with the root (trust anchor) | `certificateChain` |
| Private Key | PKCS#8, non-encrypted | `privateKey` |

## REST Methods

All *Workload Identity Manager* interfaces are secured by TLS using a self-issued certificate signed by the CA certificate it generated or obtained when it started.  Clients should be configured to trust the *Workload Identity Manager* trust anchor but may also be configured to ignore TLS validation for testing.

REST requests and responses are JSON formatted so it is proper to set both `Accept` and `Content-Type` HTTP headers to "application/json".  When requests are successful *Workload Identity Manager* responds with `HTTP 200 OK` and a payload that includes the certificate chain and, if applicable, the private key.

- **POST /v1/iidcertificaterequest/aws** - request a certificate and private key using an AWS IID
  ```json Request Body
  {
      "instanceIdentityDocumentRSA2048": "-----BEGIN PKCS7-----\nMIAGCSqGSIb3DQE...",
      "keyType": "EC_P256",
      "validityPeriod": "P7D",
      "policyName": "Sample Policy"
  }
  ```

- **POST /v1/iidcertificaterequest/azure** - request a certificate and private key using an Azure IID
  ```json Request Body
  {
      "instanceIdentityDocument": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LST...",
      "keyType": "EC_P256",
      "validityPeriod": "P7D",
      "policyName": "Sample Policy"
  }
  ```

- **POST /v1/iidcertificaterequest/google** - request a certificate and private key using a Google Cloud IID
  ```json Request Body
  {
      "instanceIdentityDocument": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzYWZlN2E5YmRhNDZiYW...",
      "keyType": "EC_P256",
      "validityPeriod": "P7D",
      "policyName": "Sample Policy"
  }
  ```