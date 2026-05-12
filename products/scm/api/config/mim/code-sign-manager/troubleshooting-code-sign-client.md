---
id: code-sign-client-troubleshooting
title: "Troubleshooting the Code Sign Client"
sidebar_label: "Troubleshooting the Code Sign Client"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

This page lists common issues you may encounter when using the Code Sign Client and provides suggestions for resolving them.

> All examples use the `pkcs11config` utility. If you are using the CSP/KSP client on Windows, replace `pkcs11config` with `cspconfig`.

---

## Authentication issues

### “Authentication failed”

This message indicates that the client could not authenticate with NGTS.

Check the following:

- **Hostname** – Ensure you used the correct regional API endpoint (for example, `api.venafi.cloud`), not a tenant URL.  
- **Credentials** – Confirm that your Client ID and key pair (service account) are valid and have not been revoked or changed.  
- **Time skew** – Make sure the system clock on the signing machine is reasonably accurate. Significant time differences can cause token validation to fail.  

You can review stored configuration values with:

```bash
pkcs11config option show
```

---

## No objects available

### “INFO: No objects available.”

This message indicates that the client is authenticated but does not have access to any Signing Keys or certificates.

Verify that:

- Your user or service account is assigned as an Authorized Signer on at least one Project.  
- The Project has at least one Signing Key configured.  
- If access is granted through a Team, your user is a member of that Team.

If changes were just made by an administrator, wait a few moments and try again:

```bash
pkcs11config list
```

---

## Label or key selection issues

### “Label not found”

This occurs when a label specified on the command line does not match any available Signing Key.

- Re-run `pkcs11config list` and copy the `Label` value exactly as shown.  
- Make sure you are authenticated as the correct identity (user or service account).  

---

## Connectivity or proxy issues

If the client cannot reach the service, you may see errors related to timeouts or connection failures.

Check the following:

- The machine has network connectivity to the regional API endpoints.  
- Any required proxy settings have been configured using:
  ```bash
  pkcs11config proxy --show
  ```
- Firewall rules allow outbound connections to the required endpoints and ports.

If you suspect proxy issues, adjust settings with the `pkcs11config proxy` command or temporarily disable the proxy to test.

---

## Trace logging for diagnostics

If problems persist, enable trace logging to capture more detail:

```bash
pkcs11config trace --enable --log --filename <path-prefix>
```

Reproduce the issue, then review the generated trace files. Once finished, disable tracing:

```bash
pkcs11config trace --disable
```

---

## Resetting configuration

As a last resort, you can reset the client configuration:

```bash
pkcs11config reset --current
```

This clears the current user configuration while preserving URLs. To remove everything, including URLs:

```bash
pkcs11config reset --all
```

After resetting, you must authenticate again.

---

## What's next

If you still cannot resolve the issue:

- Capture any error messages and relevant trace logs.  
- Confirm your environment details (operating system, client version, region, authentication method).  
- Contact your internal administrator or Palo Alto Networks support with this information.
