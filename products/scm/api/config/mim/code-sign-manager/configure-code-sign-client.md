---
id: code-sign-client-configuration
title: "Configure the Code Sign Client"
sidebar_label: "Configure the Code Sign Client"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

The Code Sign Client provides several configuration options to control how it connects to NGTS, uses proxies, and produces diagnostic output. This page summarizes the most commonly used commands and options.

See the complete [CLI reference](/scm/api/config/mim/code-sign-manager/code-sign-client-cli-reference) for all configuration options.

> All examples use the `pkcs11config` utility. If you are using the CSP/KSP client on Windows, replace `pkcs11config` with `cspconfig`. Command options are the same.

## View current configuration

To see the current configuration values stored by the client, run:

```bash
pkcs11config option show
```

This displays settings such as:

- Authentication server URL  
- HSM server URL  
- Client ID  
- Credential and access expiration times  

## Configure host URLs

Normally, host URLs are set automatically when you authenticate using the interactive login flow. If you need to explicitly set or correct the URLs, use the `seturls` command.

```bash
pkcs11config seturls --hostname <region-endpoint>
```

For example:

```bash
pkcs11config seturls --hostname api.venafi.cloud
```

This sets all required URLs (authentication, HSM, and update service) based on the regional endpoint.

> Do not use your tenant URL. Always use the [regional API hostname](/scm/api/config/mim/tls-protect-cloud/control-plane-api-endpoints).


## Configure proxy settings

If your environment requires outbound traffic to go through an HTTP proxy, you can configure proxy settings with the `proxy` command.

```bash
pkcs11config proxy --proxymode <mode> --proxyurl <url> --noproxy <host-list>
```

Common options:

- `--proxymode auto` – Automatically detect proxy settings.  
- `--proxymode disable` – Disable proxy usage.  
- `--proxymode url` – Use the proxy defined by `--proxyurl`.  
- `--proxyurl <url>` – URL of the proxy server (for example, `http://proxy.internal:8080`).  
- `--noproxy <list>` – Comma-separated list of hostnames that should bypass the proxy.  

To view the current proxy configuration:

```bash
pkcs11config proxy --show
```

## Enable trace logging

Trace logging can help troubleshoot connectivity or configuration issues. Use the `trace` command to enable or disable tracing, and to configure where trace output is written.

### Enable trace logging to a file

```bash
pkcs11config trace --enable --log --filename <path-prefix>
```

Example:

```bash
pkcs11config trace --enable --log --filename /var/log/codesign/trace
```

This creates trace log files with the specified prefix.

### Enable console tracing

```bash
pkcs11config trace --enable --console --output stdout
```

### Disable tracing

```bash
pkcs11config trace --disable
```

### View current trace settings

```bash
pkcs11config trace --show
```

## Reset client configuration

If you need to clear or reset the client configuration, use the `reset` command.

```bash
pkcs11config reset --current
```

This resets the configuration for the current user while preserving URLs.

To reset everything, including stored URLs:

```bash
pkcs11config reset --all
```

> Use reset with caution. After resetting, you will need to authenticate again.

## What's next

After configuring the Code Sign Client:

- Ensure authentication is working by running `pkcs11config option show`.  
- [Perform a test signing](/scm/api/config/mim/code-sign-manager/code-sign-client-test-signing) to verify end-to-end connectivity.  
- If you encounter issues, see [Troubleshooting the Code Sign Client](/scm/api/config/mim/code-sign-manager/code-sign-client-troubleshooting).
