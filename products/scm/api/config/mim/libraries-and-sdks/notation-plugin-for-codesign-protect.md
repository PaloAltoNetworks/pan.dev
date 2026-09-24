---
id: libraries-and-sdks-notationplugincsp
title: "Notation Plugin for Code Sign Manager - Self-Hosted"
sidebar_label: "Notation Plugin for Code Sign Manager - Self-Hosted"
keywords:
  - Machine Identity Management
  - Libraries and SDKs
---

# Overview

## Introduction

In addition to signing and verifying container images with Sigstore [cosign](https://github.com/sigstore/cosign), CyberArk Code Sign Manager - Self-Hosted also supports an integration with [Notation](https://github.com/notaryproject/notation), an open source Notary project within the Cloud Native Computing Foundation (CNCF).  Notary is an open standard and client implementation that allows for vendor-specific plugins for key management and other integrations.  Code Sign Manager - Self-Hosted manages the complete lifecycle of container signing identities and is integrated with Notation through a plugin that provides a seamless client-based workflow.

## Background

Container images are designed in such a way that integrity checks are already in place.  This enables clients to consistenly verify the integrity of a given image's manifest as it moves through the environment.  

So why is signing critical?  Signing provides authenticity and provenance giving the user the ability to ensure software comes from an authorized and trustworthy source.

The container image signing approach in Notation leverages a simple mechanism to cryptographically sign an image manifest.  Image manifests are verifiable records of image content and contain hashed digests of all layers of the image they describe.  Once a signature is created, it is encoded as an OCI artifact and pushed to the image repository alongside the container image.

Container image verification provides a critical gate for enforcing trusted content policies for deployments.  In this document we will focus on integrations with [Kyverno](https://github.com/kyverno/kyverno) and [Ratify](https://github.com/deislabs/ratify).  This ensures only authorized images from trusted registries or repositories can be deployed.

# Container Image Signing with Code Sign Manager - Self-Hosted

## Getting started

To get started with container image signing with Notation and the Code Sign Manager - Self-Hosted plugin, you will need to ensure the necessary Code Sign Manager - Self-Hosted pre-requisites have been met, such as configuring an appropriate certificate environment.  You will need to install the Notation client along with the Code Sign Manager - Self-Hosted plugin and configure it to point to a specific signing identity.

## Solution Overview

In this section we will dive deeper into container image signing with Notation and Code Sign Manager - Self-Hosted.

### Use case - Signing Github container images with Notation and Code Sign Manager - Self-Hosted

In this example, we demonstrate how to use the Notation CLI to sign container images in GitHub Container Registry.  The signing identities are managed within Code Sign Manager - Self-Hosted.

The first step is to install the Notation CLI and the required Code Sign Manager - Self-Hosted plugin.  Refer to the Notation [documentation](https://notaryproject.dev/docs/user-guides/installation/cli/) for specific installation and configuration documentation based on the OS.

For example, to install on macOS or Linux with [Homebrew](https://brew.sh/):

`brew install notation`

To install the Code Sign Manager - Self-Hosted plugin, refer to the GitHub [documentation](https://github.com/Venafi/notation-venafi-csp).

Here is an example on Linux:

```shell
notation plugin install --url https://github.com/Venafi/notation-venafi-csp/releases/download/v0.3.0/notation-venafi-csp-linux-amd64.tar.gz --sha256sum 03771794643f18c286b6db3a25a4d0b8e7c401e685b1e95a19f03c9356344f5a
```

Next you will need to configure the plugin to use a specific signing identity, which can obtained by using the Code Sign Manager - Self-Hosted client such as pkcs11config:

`pkcs11config listobjects`

You should use the certificate label that matches the Code Sign Manager - Self-Hosted environment that you want to use as the signing identity.  This value will be used for the `--id` parameter when configuring the plugin:

```shell
notation key add --default "vsign-rsa2048-cert" --plugin venafi-csp --id "vsign-rsa2048-cert" --plugin-config "config"="/path/to/vsign/config.ini"
notation certificate add --type ca --store example.com /path/to/chain.crt`
```

List the keys and certificates to confirm:

```shell
notation key list
notation certificate list
```

Now sign the container image:

`notation sign --key "vsign-rsa2048-cert" $IMAGE`

Confirm that there is one signature:

```shell
notation ls localhost:5001/net-monitor:v1
localhost:5001/net-monitor@sha256:073b75987e95b89f187a89809f08a32033972bb63cda279db8a9ca16b7ff555a
└── application/vnd.cncf.notary.v2.signature
    └── sha256:ba3a68a28648ba18c51a479145fca60d96b43dc96c6ab22f412c89ac56a9038b
```

You can also inspect the signature, including certificate chains and thumbprints with the `notation inspect` command:

```shell
notation inspect ghcr.io/zosocanuck/net-monitor@sha256:fcc8a5d24fcc9619b80e2e86695d2a792108add778439ac0a0647c9cae745176
Inspecting all signatures for signed artifact
ghcr.io/zosocanuck/net-monitor@sha256:fcc8a5d24fcc9619b80e2e86695d2a792108add778439ac0a0647c9cae745176
└── application/vnd.cncf.notary.signature
    └── sha256:0e649dc4e22f4562043c27d0f26a2454ed1c57748698d62c22028b0dc945716a
        ├── media type: application/jose+json
        ├── signature algorithm: RSASSA-PSS-SHA-256
        ├── signed attributes
        │   ├── signingScheme: notary.x509
        │   ├── signingTime: Thu Feb  1 14:44:53 2024
        │   ├── io.cncf.notary.verificationPlugin: venafi-csp
        │   ├── io.cncf.notary.verificationPluginMinVersion: 0.3.0-release
        │   └── com.venafi.notation.plugin.x5u: https://vh.venafilab.com/pks/lookup/pem/22282
        ├── user defined attributes
        │   └── (empty)
        ├── unsigned attributes
        │   └── signingAgent: notation-venafi-csp
        ├── certificates
        │   ├── SHA256 fingerprint: ca2db00afebe93bf2ddbe9ad2639b5c71b48d3713891a0cf9f34a333d29297a8
        │   │   ├── issued to: CN=notation.venafidemo.com,O=Venafi,L=San Jose,ST=CA,C=US
        │   │   ├── issued by: CN=ZTPKI Demo RSA ICA 1,O=Venafi,C=US
        │   │   └── expiry: Mon Jul 17 03:56:56 2028
        │   ├── SHA256 fingerprint: 0e496aaa47ca5876121dcd9ca1654b3077cde896a563b139fb0200b2bc7253e4
        │   │   ├── issued to: CN=ZTPKI Demo RSA ICA 1,O=Venafi,C=US
        │   │   ├── issued by: CN=ZTPKI Demo RSA Root CA 1,O=Venafi,C=US
        │   │   └── expiry: Fri Jan 17 01:55:36 2031
        │   └── SHA256 fingerprint: 9c4edcbc506994ed56550ea2f556ef75a7763cc9d9935512853b0d5a0b72660d
        │       ├── issued to: CN=ZTPKI Demo RSA Root CA 1,O=Venafi,C=US
        │       ├── issued by: CN=ZTPKI Demo RSA Root CA 1,O=Venafi,C=US
        │       └── expiry: Sun Jan 13 23:55:39 2041
        └── signed artifact
            ├── media type: application/vnd.docker.distribution.manifest.v2+json
            ├── digest: sha256:fcc8a5d24fcc9619b80e2e86695d2a792108add778439ac0a0647c9cae745176
            └── size: 942
```

Verify the container image signature:

> 📘 Note
> You will need to create a trust policy in order to verify the container image signature.  Follow the [Manage trust policies](https://notaryproject.dev/docs/user-guides/how-to/manage-trust-policy/) guide to understand and implement Notation trust policy.

```shell
notation verify localhost:5001/net-monitor:v1`
Signature verification succeeded for sha256:73b3c3f2200bc6c161663b88b1fde3b3ed486518d6b6453fccdfdbbaefa09c7b
```

> 📘 Note
> The Code Sign Manager - Self-Hosted plugin verification capability performs additional checks, such as verifying the revocation status of the code signing certificate, as well as validating that the certificate exists in Code Sign Manager - Self-Hosted via PKS for identity validation purposes when using Trust Protection Foundation 23.1 and later.

### Use case - Container image verification with Kyverno

We can leverage Kubernetes Dynamic Admission Controllers via the Kyverno policy engine to perform image signature validation and enforcement.  You can learn more about the [Kyverno-notation-venafi extension service](https://github.com/nirmata/kyverno-notation-venafi).  To get started, you must have a Kubernetes cluster in which to run Kyverno as part of this solution.

Here are the high-level steps:
1. Install the [Kyverno](https://kyverno.io/docs/installation/methods/) policy engine.
2. Install the [kyverno-notation-venafi](https://github.com/nirmata/kyverno-notation-venafi#install) service extension.
3. Apply the Kubernetes CRDs for the Notation TrustPolicy and TrustStore resources.

#### Configure Kyverno

Make sure to apply the correct `TrustStore` resouce based on this example:

```yaml
apiVersion: notation.nirmata.io/v1alpha1
kind: TrustStore
metadata:
  name: venafi-signer-ts
spec:
  trustStoreName: example.com
  type: ca
  caBundle: |-
    -----BEGIN CERTIFICATE-----
    MIIFczCCA1ug...
    -----END CERTIFICATE-----
```
> 📘 Note
> The caBundle element represents the trusted chain (e.g. Root CA in the case of an internal private CA).

Next you need to apply the correct `TrustPolicy` resource to ensure that Kyverno uses the correct `TrustStore`.

Here is an example:

```yaml
apiVersion: notation.nirmata.io/v1alpha1
kind: TrustPolicy
metadata:
  name: venafi-trustpolicy-sample
spec:
  version: '1.0'
  trustPolicyName: tp-venafi-test-notation
  trustPolicies:
  - name: venafi-signer-tp
    registryScopes:
    - "*"
    signatureVerification:
      level: strict
      override: {}
    trustStores:
    - ca:example.com
    trustedIdentities:
    - "*"
```

Apply the custom `TrustStore`, `TrustPolicy`, and `ClusterPolicy`:

```shell
kubectl apply -f example-truststore.yaml
kubectl apply -f example-trustpolicy.yaml
kubectl apply -f example-kyverno-policy.yaml
```

Follow the [documentation](https://github.com/nirmata/kyverno-notation-venafi#install) to test signed and unsigned images and validate your results.

If you run into any issues, please review the [troubleshooting](https://github.com/nirmata/kyverno-notation-venafi#troubleshoot) section.

### Use case - Container image verification with Ratify

Ratify is an extensible verification framework for container images and other artifacts that can examine and author policies to audit existing resources in Kubernetes. Ratify can use and manage any number of custom verifiers for image metadata like signatures, SBOMs, vulnerability scan reports, and so on.

It helps users to validate the image integrity and authenticity in containers secure supply chain, ensuring your deployments are built from a trusted entity and that images haven't been tampered with since their creation.  

Ratify also supports Notation signature verification through its extensible plugin design, which means that the Code Sign Manager - Self-Hosted plugin for Notation is fully supported.

Detailed installation and configuration [instructions](https://ratify.dev/docs/quickstarts/ratify-with-venafi) can be found on the Ratify docs site.
