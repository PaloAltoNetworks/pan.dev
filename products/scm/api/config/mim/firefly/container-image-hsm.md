---
id: firefly-container-image-hsm
title: "Building a container image for Workload Identity Manager that uses an HSM"
sidebar_label: "Building a container image for Workload Identity Manager that uses an HSM"
keywords:
  - Machine Identity Management
  - Workload Identity Manager
---

## Introduction

> 📘 Note
>
> For an updated version of this tutorial see [Building a container image for Workload Identity Manager that uses an HSM](https://docs.cyberark.com/mis-saas/firefly/c-pkcs11-hsm)


*Workload Identity Manager* (formerly known as *Firefly*) is distributed as an executable binary for use cases that require HSM key protection due to the dependency on third-party software separately licensed and distributed by HSM vendors.  Regardless, Kubernetes is the recommended execution environment for production *Workload Identity Manager* instances. So it is important for Venafi customers to understand how to build their own *Workload Identity Manager* container images.

> 📘 Note
>
> The `firefly-pkcs11` binary supports Red Hat Enterprise Linux versions 8 and 9, and Ubuntu Server LTS versions 20.04 and 22.04.

## PKCS#11 Client

Review the instructions provided by your HSM vendor for building Linux container images that work with their product.  You will need to acquire the applicable HSM client software that includes a PKCS#11 library.

- Thales: [Installing Luna Minimal Client on Linux using Docker](https://thalesdocs.com/gphsm/luna/7/docs/network/Content/install/client_install/linux_docker_minimal_extended.htm)
- AWS: [How to run AWS CloudHSM workloads in container environments](https://aws.amazon.com/blogs/security/how-to-run-aws-cloudhsm-workloads-on-docker-containers/)
- Entrust: [nShield Container Option Pack: Application Containers](https://nshielddocs.entrust.com/ncop-docs/v1.1.2/app-containers.html)


## Sample: Luna Network HSM using Red Hat Universal Base Image (UBI)

### Download the latest *Workload Identity Manager* PKCS#11 binary

To retrieve the *Workload Identity Manager* PKCS#11 binary, navigate to the [*Workload Identity Manager* releases](https://docs.venafi.cloud/firefly/deploy/releases/) page and download either the latest version, or the version you prefer.

### Build the image using Docker

Prepare a `Dockerfile` that looks something like this for a [UBI](https://catalog.redhat.com/software/containers/ubi9/ubi-minimal/615bd9b4075b022acc111bf5?architecture=amd64&image=66588236649603783682fcb3&container-tabs=gti) based image:

```dockerfile
ARG BASE_IMAGE=registry.access.redhat.com/ubi9/ubi-minimal
ARG BASE_IMAGE_DIGEST=sha256:82fad27b91361473d919522a01a1198f327230bf8d2b569a8995bdcd6ac7cb94

FROM ${BASE_IMAGE}@${BASE_IMAGE_DIGEST}

RUN microdnf update -y
RUN microdnf install -y tar glibc.i686

WORKDIR /tmp
COPY ./610-000401-010_SW_Linux_Luna_Minimal_Client_V10.7.0_RevA.tar lunaclient.tar

RUN mkdir -p /usr/local/luna
RUN tar xvf /tmp/lunaclient.tar --strip 1 -C /usr/local/luna
RUN rm /tmp/lunaclient.tar
ENV ChrystokiConfigurationPath=/usr/local/luna/config
ENV PATH="/usr/local/luna/bin/64:${PATH}"

USER 1001:1001

LABEL org.opencontainers.image.base.digest=${BASE_IMAGE_DIGEST}
LABEL org.opencontainers.image.base.name=${BASE_IMAGE}
LABEL org.opencontainers.image.documentation="firefly/about-hsm/"
LABEL org.opencontainers.image.licenses="Venafi EULA https://venafi.com/end-user-license-agreement"
LABEL org.opencontainers.image.title="Venafi Firefly"
LABEL org.opencontainers.image.url="https://venafi.com/firefly/"

COPY ./firefly-pkcs11 /bin/firefly-pkcs11

ENTRYPOINT [ "/bin/firefly-pkcs11" ]
```

Then build the container image by executing the following command which assumes the `Dockerfile` is in the current directory along with the tarball containing the HSM client software and the `firefly-pkcs11` binary:

```sh
docker build . --tag firefly-luna-network-hsm:sample
```

### Test the image using Docker

Prepare a *Workload Identity Manager* `config.yaml` that looks something like this:

```yaml
bootstrap:
  vaas:
    auth:
      privateKeyFile: /etc/firefly/svc-acct.pvk
      clientID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    csr:
      instanceNaming: Firefly-Docker
    pkcs11:
      clientLibraryPath: /usr/local/luna/libs/64/libCryptoki2_64.so
server:
  grpc:
    port: 8081
    tls:
      dnsNames:
      - firefly.example.com
      ipAddress: 10.20.30.40
  rest:
    port: 8281
    tls:
      dnsNames:
      - firefly.example.com
      ipAddress: 10.20.30.40
```

Then run the container by executing the following command which assumes the *Workload Identity Manager* `config.yaml` and CyberArk Certificate Manager - SaaS service account private key file are located in the "firefly" subdirectory, and the `Chrystoki.conf` and client/server certificate files for accessing the HSM are located in the "luna" subdirectory. 

```sh
docker run --rm -e ACCEPT_TERMS=Y \
           -p 8081:8081 --p 8281:8281 \
           -v ./firefly:/etc/firefly:ro \
           -v ./luna:/usr/local/luna/config:ro \
           firefly-luna-network-hsm:sample \
           run --disable-mlock -c /etc/firefly/config.yaml &
```
