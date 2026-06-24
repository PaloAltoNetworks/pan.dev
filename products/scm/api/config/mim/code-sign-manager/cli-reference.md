---
id: code-sign-client-cli-reference
title: "Code Sign Client CLI reference"
sidebar_label: "Code Sign Client CLI reference"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

## Synopsis

For setting up the PKCS11 client (supported on all platforms):

```
pkcs11config [command] [--options]
```

For setting up the CSP/KSP client on Windows:

```
cspconfig [command] [--options]
```

## Configuration commands

| Command | Description|
| --- | --- | 
| `login`       | Authenticates to a NGTS server. |
| `checklogin`  | Checks the current authentication status.  |
| `logout`      | Revokes a grant. |
| `trust`       | Manages trust for the NGTS server. |
| `seturls`     | Detects or sets URLs. | 
| `option`      | Manages general configuration. |
| `proxy`       | Sets HTTP proxy options. |
| `reset`       | Resets the client configuration. |
| `update`      | Checks for and installs software updates. |  

## Signing and verification commands

| Command | Description|
| --- | --- | 
| `list`        | Lists all objects available to the user. |
| `sign`        | Creates a signature for a file. |
| `verify`      | Verifies a file signature. |

## Common commands

| Command | Description|
| --- | --- | 
| `getcertificate`  | Retrieves a certificate. |
| `getpublickey`    | Retrieves the public key of a certificate. |
| `trace`           | Manages trace settings for troubleshooting. |
| `health`          | Checks client configuration health. No additional options. |
| `version`         | Displays the version number and build timestamp. No additional options. |
| `help`            | Displays general usage information. To get specific command help, run `pkcs11config [command] -h`. |

## Command options

### `login` options

Authenticates to NGTS.

If previously authenticated, then the existing authentication values will be verified and refreshed if needed, ignoring any other provided credentials, unless `--force` is used.

If URL arguments are specified, the given URLs will be configured and used to authenticate.

Running `login` without any options will invoke interactive mode.

**Service account credential options:**

| Option | Description|
| --- | --- |
| `--clientid=<uuid>`   | The UUID of the service account. |
| `--keyfile=<file>`    | Path to a file that contains the private key in PEM format. Used when authenticating a service account using **Auto-generate a keypair and download the private key**. |
| `--generate`          | Generates a key pair for the service account. Used when authenticating a service account using **Generate your own keypair and upload the public key**. | 

**URL options:**

| Option | Description|
| --- | --- |
| `--hostname=<url>`    | API endpoint URL for your region. This option detects and automatically sets the URLs for `authurl`, `hsmurl`, and `updateurl`. For a list of regional endpoint URLs, see [API Endpoints](/scm/api/config/mim/tls-protect-cloud/control-plane-api-endpoints). | 
| `--authurl=<url>`     | Authentication server URL. This option is set automatically when using `--hostname`. |
| `--hsmurl=<url>`     | VedHsm backend URL. This option is set automatically when using `--hostname`. |
| `--updateurl=<url>`   | Update server URL. This option is set automatically when using `--hostname`. |

**Proxy options:**

| Option | Description|
| --- | --- |
| `--proxymode=<mode>`  | Enables or disables using a proxy server for communication (options: `auto`, `disable`, `url`). |
| `--proxyurl=<url>`    | URL of the proxy server to use (implies `--proxymode:url`). |
| `--noproxy=<list>`    | A list of hostnames that should not use the proxy. |
| `--show`              | Shows current proxy settings. | 

**Advanced options:**

| Option | Description|
| --- | --- |
| `--force` | Forces getting a new grant; never refreshes. |

---

### `checklogin` options

Verifies the currently stored authentication details with the NGTS server and displays details.

Return code `0` indicates a grant has been configured.

Return code `1` indicates a missing or expired grant.

| Option | Description|
| --- | --- |
| `--days=<count>` | Authentication is treated as *invalid* if it will expire within `<count>` days. This option is valid only for service account authentication. | 

---

### `logout` options

Logs the user or service account out.

| Option | Description|
| --- | --- |
| `--clear` | Completely removes any stored configuration after logging out. |
| `--force` | Forces logging out without confirmation. |

---

### `trust` options

Manages the certificate trust store. Trust is required to communicate with the NGTS server.

| Option | Description|
| --- | --- |
| `--check`             | Checks if the configured NGTS server is trusted. |
| `--delete=<name>`     | Removes trust for any certificate with a subject containing `<name>`. |
| `--filename=<file>`   | PEM certificate file to import certificates from. |
| `--force`             | Forces import without confirmation. |
| `--hostname=<url>`    | API endpoint URL for your region. This option detects and automatically sets the URLs for `authurl`, `hsmurl`, and `updateurl`. For a list of regional endpoint URLs, see [API Endpoints](/scm/api/config/mim/tls-protect-cloud/control-plane-api-endpoints). |
| `--show`              | Shows existing certificates in the trust store. |

---

### `seturls` options

Detects or sets the URLs that should be used for authentication, signing, and client updates. These same options are available from the `login` command.

| Option | Description|
| --- | --- |
| `--hostname=<url>`    | API endpoint URL for your region. This option detects and automatically sets the URLs for `authurl`, `hsmurl`, and `updateurl`. For a list of regional endpoint URLs, see [API Endpoints](/scm/api/config/mim/tls-protect-cloud/control-plane-api-endpoints). | 
| `--authurl=<url>`     | Authentication server URL. This option is set automatically when using `--hostname`. |
| `--hsmurl=<url>`     | VedHsm backend URL. This option is set automatically when using `--hostname`. |
| `--updateurl=<url>`   | Update server URL. This option is set automatically when using `--hostname`. |

---

### `option` options

Manages and displays configuration options.

| Option | Description|
| --- | --- |
| `--clear=<name>`  | Clears the value for `<name>`. |
| `--show`          | Displays the value for `<name>` or all if no `--name` specified. |
| `--name=<name>`   | Name to set, show, or clear. |
| `--value=<value>` | Value to set. |

---

### `proxy` options

Configures proxy settings to use when communicating with backend APIs. These same options are available from the `login` command.

| Option | Description|
| --- | --- |
| `--proxymode=<mode>`  | Enables or disables using a proxy server for communication (options: `auto`, `disable`, `url`). |
| `--proxyurl=<url>`    | URL of the proxy server to use (implies `--proxymode:url`). |
| `--noproxy=<list>`    | A list of hostnames that should not use the proxy. |
| `--show`              | Shows current proxy settings. | 

---

### `reset` options

Resets the client configuration.

| Option | Description|
| --- | --- |
| `--all`       | Resets all configuration. |
| `--current`   | Resets only the current configuration (default). |
| `--preserve`  | Preserves configured URLs. |

---

### `update` options

Checks for and displays available client software updates.

| Option | Description|
| --- | --- |
| `--latest`                | Downloads and installs the latest available version unless it is already installed. |
| `--architecture=<arch>`   | Overrides the detected architecture (options: `x86_64`, `x86_32`, `arm64`). |
| `--type=<type>`           | Overrides the detected package type (options: `msi`, `rpm`, `deb`, `dmg`). |
| `--out=<file>`            | Stores the package in the specified output directory and does not install it. |
| `--updateurl=<url>`       | Sets the client update server URL. |

---

### `list` options

Displays a list of all available objects. Defaults to listing certificates and public keys from all available environments.

Use `list` to find object labels.

| Option | Description|
| --- | --- |
| `--env=<type-list>`   | Shows only environments of the specified types (options: `all`, `certificate`, `keypair`). |
| `--type=<type-list>`  | Shows only objects of the specified types (options: `all`, `private`, `public`, `certificate`). |
| `--sort=<column>`     | Sorts by the specified column (options: `label`, `environment`, `object`, `keytype`, `detail`, `context`, `keyid`, `handle`). |
| `--grouped`           | Groups related objects. |
| `--table`             | Outputs in table format. |
| `--number`            | Displays a number for each item when used with `--table`. |
| `--reverse`           | Reverses the sort order. |
| `--force`             | Does not wait and reload if objects are pending creation. |

---

### `sign` options

Creates a signature for a file using the NGTS server directly.

> This command hashes the specified file, signs the hash, and stores the raw resulting signature. The format of the signature is intended to test key access only and is not compatible with most other tools.

| Option | Description|
| --- | --- |
| `--filename=<file>`   | File to sign. |
| `--output=<file>`     | Filename to store the signature in. |
| `--label=<label>`     | Label of the key to use for signing. |
| `--force`             | Overwrites the output file if it already exists. |
| `--hashalg`           | Hash algorithm to use for post-quantum (default: `SHA2_256`) (options: `SHA2_256`, `SHA2_384`, `SHA2_512`, `SHA3_256`, `SHA3_384`, `SHA3_512`, `SHAKE_128`, `SHAKE_256`, `PURE`). |

---

### `verify` options

Verifies a signature created by the `sign` command.

> This command cannot verify a signature created with external tools.

| Option | Description|
| --- | --- |
| `--filename=<file>`   | File to verify. |
| `--input=<file>`      | File that holds the signature. |
| `--label=<label>`     | Label of the key to use for verification. |
| `--hashalg`           | Hash algorithm to use for post quantum (default: `SHA2_256`) (options: `SHA2_256`, `SHA2_384`, `SHA2_512`, `SHA3_256`, `SHA3_384`, `SHA3_512`, `SHAKE_128`, `SHAKE_256`, `PURE`). |

---

### `getcertificate` options

Retrieves a certificate and/or certificate chain.

| Option | Description |
| --- | --- |
| `--filename=<file>`   | Output file for the certificate. |
| `--chainfile=<file>`  | Output file for the certificate chain (not available with `--format:DER`). |
| `--format=<format>`   | Output file format (default: `PEM`) (options: `PEM`, `DER`). |
| `--label=<label>`     | Label of the certificate to retrieve. |
| `--rootfirst`         | Writes the chain in root→intermediate order (default is intermediate→root). |
| `--split`             | Splits the chain file so each certificate is written to a separate file. |
| `--force`             | Overwrites output files if they already exist. |

---

### `getpublickey` options

Retrieves a public key.

| Option | Description |
| --- | --- |
| `--filename=<file>`   | Output file for the public key. |
| `--format=<format>`   | Output file format (default: `PEM`) (options: `PEM`, `DER`). |
| `--label=<label>`     | Label of the public key to retrieve. |
| `--force`             | Overwrites output files if they already exist. |

---

### `trace` options

Manages settings for diagnostics and troubleshooting.

| Option | Description |
| --- | --- |
| `--console`                   | Enables or disables tracing for console output. |
| `--log`                       | Enables or disables tracing for the trace log. |
| `--disable`                   | Disables console or file tracing. |
| `--enable`                    | Enables console or file tracing. |
| `--filename=<file>`           | Sets the trace log file path and filename prefix. |
| `--output=<stderr\|stdout>`   | Sets the console output target. |
| `--show`                      | Displays existing trace settings. |
| `--module=<file>`             | Sets the location of the PKCS#11 library. |
| `--pkcs11=<file>`             | Sets the PKCS#11 API trace file path and filename prefix. |
