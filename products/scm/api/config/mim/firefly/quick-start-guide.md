---
id: firefly-quick-start-guide
title: "Quick start guide for DevOps"
sidebar_label: "Quick start guide for DevOps"
keywords:
  - Machine Identity Management
  - Workload Identity Manager
---

## Purpose

This guide is intended for Platform Engineers and Developers seeking to integrate *Workload Identity Manager* (formerly known as *Firefly*) into applications and deployment processes.  In only a few minutes you'll be able to start evaluating *Workload Identity Manager* and its capabilities by following the provided steps.  

This guide does **not** speak to how *Workload Identity Manager* should be architected or deployed, especially for production scenarios where *Workload Identity Manager* is designed to enforce enterprise security managed using Certificate Manager - SaaS.  [Learn more about information how *Workload Identity Manager* works with CyberArk Certificate Manager - SaaS.](https://docs.venafi.cloud/firefly/overview/)

## Prerequisites 

- A Linux machine with `curl`, `unzip`, `tar`, `mkdir`, `chmod`, `grep`, `awk`, `ps`, `kill`, and Docker installed/working.  Docker installation is documented [here](https://docs.docker.com/engine/install/) for various distributions.

- **jwt-this** [Identity Provider Simulator for Testing & Evalulation](https://github.com/tr1ck3r/jwt-this#readme)
  ```
  curl -sLo jwt-this.zip https://github.com/tr1ck3r/jwt-this/releases/latest/download/jwt-this_linux.zip && unzip -d /usr/local/bin -o jwt-this.zip
  ```

- **grpcurl** [Command Line gRPC Client Utility](https://github.com/fullstorydev/grpcurl#readme)
  ```
  curl -sLo grpcurl.tgz https://github.com/fullstorydev/grpcurl/releases/download/v1.9.3/grpcurl_1.9.3_linux_x86_64.tar.gz && tar -xvz --no-same-owner -C /usr/local/bin -f grpcurl.tgz grpcurl
  ```

## Quick Start

1. Go to the command line of the Linux machine and start the Identity Provider Simulator (run in background):
    ```
    jwt-this --config-name "Demo Config" --policy-names "Demo Policy" &
    ```

2. Create a `config.yaml` file with the following content representing a minimum required configuration (click [here](/scm/api/config/mim/firefly/firefly-config-yaml-reference) to learn more about configuring *Workload Identity Manager*).  Note the `server` section may contain `grpc`, `rest`, or both depending upon which protocols the *Workload Identity Manager* needs to offer for requesting certificates.
    ```yaml config.yaml
    bootstrap:
      selfSigned:
        csr:
          commonName: My Firefly
          privateKey:
            algorithm: ECDSA
            size: 256
          duration: 720h
        trustRootDirectory: /etc/firefly/trust
    signer:
      inMemory: true
    server:
      grpc:
        port: 8001
        tls:
          ipAddress: {REPLACE_WITH_EXTERNAL_IP_ADDRESS_OF_LINUX_MACHINE}
      rest:
        port: 8002
        tls:
          ipAddress: {REPLACE_WITH_EXTERNAL_IP_ADDRESS_OF_LINUX_MACHINE}
      authentication:
        jwt:
          jwks:
            urls:
            - {REPLACE_WITH_JWKS_URL_FROM_IDP_SIMULATOR}
      authorization:
        configuration: Demo Config
    policies:
    - name: Demo Policy
      keyUsages:
      - digitalSignature
      - keyEncipherment
      extendedKeyUsages:
      - SERVER_AUTH
      keyAlgorithm:
        allowedValues:
        - EC_P256
        - RSA_2048
        defaultValue: EC_P256
      validityPeriod: P7D
    ```

    1. Replace the `{REPLACE_WITH_EXTERNAL_IP_ADDRESS_OF_LINUX_MACHINE}` placeholders with the IP address of the Linux machine.  *Workload Identity Manager* will generate a server certificate for each of its API interfaces with this IP address as a Subject Alternative Name (SAN).
    
    2. Swap `{REPLACE_WITH_JWKS_URL_FROM_IDP_SIMULATOR}` for the `JWKS URL` value output by step 1 but substitute the IP address of the host running the simulator for "localhost" (note: the *Workload Identity Manager* container needs to be able to access the simulator endpoint).

3. Create a subdirectory called "trust" and grant everyone access to it (this is where the *Workload Identity Manager* container will write the CA certificate it generates when it starts; clients would need to trust this in order to properly use certificates issued by the *Workload Identity Manager* instance):

    ```
    mkdir -p trust && chmod a+rwx trust
    ```

4. Review the [Venafi Terms of Use](https://venafi.com/terms-of-use-for-cloud-services/) and, if you agree to them, start *Workload Identity Manager* by running the following command (note: this will automatically download the *Workload Identity Manager* container image if not previously downloaded and cached locally; only `-p` mappings for ports specified in the `server` section of the `config.yaml` should be included in the command line):
    ```
    docker run -e ACCEPT_TERMS=Y -p 8001:8001 -p 8002:8002 --cap-add=IPC_LOCK \
               -v ${PWD}/config.yaml:/etc/firefly/config.yaml:ro \
               -v ${PWD}/trust:/etc/firefly/trust:rw \
               registry.venafi.cloud/public/venafi-images/firefly:latest run -c /etc/firefly/config.yaml &
    ```

5. Request a certificate from *Workload Identity Manager* using one of the enabled protocols.  Insert the `TOKEN` output in step 1 in place of the `{REPLACE_WITH_TOKEN_OUTPUT_BY_IDP_SIMULATOR}` placeholder:
    ```sh gRPC
    grpcurl -insecure \
      -rpc-header "authorization: Bearer {REPLACE_WITH_TOKEN_OUTPUT_BY_IDP_SIMULATOR}" \
      -d "{ \"request\":{ \"subject\":{ \"common_name\":\"my.demo.example\" }, \"alt_names\":{ \"dns_names\":[ \"my.demo.example\" ] }, \"key_type\":\"EC_P256\", \"policy_name\":\"Demo Policy\" } }" \
      localhost:8001 certificates.service.v1alpha1.CertificateRequestService.Create
    ```
    ```sh REST
    curl -s --insecure \
      -H "authorization: Bearer {REPLACE_WITH_TOKEN_OUTPUT_BY_IDP_SIMULATOR}" \
      -H "content-type: application/json" \
      -d "{ \"subject\":{ \"commonName\":\"my.demo.example\" }, \"altNames\":{ \"dnsNames\":[ \"my.demo.example\" ] }, \"keytype\":\"EC_P256\", \"policyName\":\"Demo Policy\" }" \
      https://localhost:8003/v1/certificaterequest
    ```

Click [here](/scm/api/config/mim/firefly/firefly-api-reference-clients) for complete details on API methods for requesting certificates from *Workload Identity Manager*.

## Starting Over or Shutting Down

In the previous section, `jwt-this` and *Workload Identity Manager* `docker` container were started in the background to allow for continued use of the command prompt for subsequent steps.

To stop *Workload Identity Manager* execute the following command:
```
docker stop $(docker ps | grep [f]irefly | awk '{print $1}') 
```

To stop `jwt-this` execute the following command:
```
kill $(ps aux | grep [j]wt-this | awk '{print $2}')
```