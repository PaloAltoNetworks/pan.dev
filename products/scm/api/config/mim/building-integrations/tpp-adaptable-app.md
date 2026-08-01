---
id: building-integrations-tpp-adaptable
title: "TPP Adaptable App Drivers"
sidebar_label: "TPP Adaptable App Drivers"
keywords:
  - Machine Identity Management
  - Building Integrations
---

# TPP Adaptable App Drivers

## Overview

TPP Adaptable App Drivers are PowerShell-based integrations for **Certificate Manager Self-Hosted** (formerly TLS Protect Datacenter/TPP). They provide a flexible way to extend certificate deployment capabilities without building full Go-based connectors.

**Key characteristics**:
- PowerShell-based (easier development than Go)
- Runs directly on TPP server
- Certificate Manager Self-Hosted only (not SaaS or NGTS)
- Suitable for internal-use integrations
- No container deployment required

---

## When to Use Adaptable Drivers

### Choose Adaptable Drivers when:
- Targeting **Certificate Manager Self-Hosted only** (not SaaS/NGTS)
- Need **rapid development** (PowerShell vs Go)
- Integrating with **Windows-based systems**
- Building for **internal use** (not distributing publicly)
- Don't need advanced features like discovery hooks

### Choose Machine Connector Framework when:
- Need **cross-platform support** (SaaS, Self-Hosted, NGTS)
- Building **production-grade connectors** for public distribution
- Need **container deployment**
- Require advanced discovery capabilities
- Want framework validation and testing tools

---

## How Adaptable Drivers Work

An adaptable driver is a single PowerShell (.ps1) script that implements 10 required functions:

| Function | Purpose | Required |
|----------|---------|----------|
| `Test-Settings` | Validate configuration and connectivity | Yes (must work) |
| `Discover-Certificates` | Find existing certificates on target platform | Yes (if discovery needed) |
| `Install-Certificate` | Deploy certificate to target platform | Yes (must work) |
| `Extract-Certificate` | Retrieve certificate for validation | Yes (must work) |
| `Install-Chain` | Deploy intermediate certificates | Optional (stub) |
| `Install-PrivateKey` | Deploy private key separately | Optional (stub) |
| `Update-Binding` | Configure service bindings | Optional (stub) |
| `Activate-Certificate` | Enable/activate deployed certificate | Optional (stub) |
| `Extract-PrivateKey` | Retrieve private key | Optional (stub) |
| `Remove-Certificate` | Delete certificate from target | Optional (stub) |

**Important**: All 10 functions must exist in the script (TPP validates at load time), but you only need real logic in 4-5 of them. The rest can be stubs returning `@{ Result = "NotUsed" }`.

---

## Authentication Patterns

### OAuth2 Client Credentials (Recommended)

Cleanest pattern for API-based integrations. No interactive login required.

**Field definitions**:
```
Text1|API Client ID|111
Passwd|API Client Secret|111
```

**Authentication code pattern**:
```powershell
function Get-ApiToken {
    param($General)

    $tokenUrl = "https://$($General.HostAddress)/oauth2/token"
    $body = @{
        grant_type    = "client_credentials"
        client_id     = $General.VarText1
        client_secret = $General.VarPass
    }

    $response = Invoke-RestMethod -Uri $tokenUrl -Method Post -Body $body
    return $response.access_token
}
```

### API Key / Header Token

For platforms using header-based authentication:

**Field definitions**:
```
Passwd|API Key|111
```

**Usage**:
```powershell
$headers = @{
    "Authorization" = "Bearer $($General.VarPass)"
}
```

### Basic Authentication

For platforms using username/password:

**Field definitions**:
```
Text1|Username|111
Passwd|Password|111
```

---

## Required Functions

### Test-Settings

**When called**: Admin saves the certificate object configuration in TPP WebAdmin.

**Purpose**: Validate all required fields are populated and prove authentication/connectivity works.

**Implementation**:
```powershell
function Test-Settings {
    param(
        [Parameter(Mandatory)] [hashtable] $General,
        [Parameter()] [hashtable] $Specific = @{}
    )

    # Validate required fields
    Assert-Field $General "HostAddress" "Required"
    Assert-Field $General "VarText1" "Required"
    Assert-Field $General "VarPass" "Required"

    # Test authentication
    try {
        $token = Get-ApiToken -General $General
        return @{ Result = "Success" }
    }
    catch {
        throw "Authentication failed: $_"
    }
}
```

---

### Discover-Certificates

**When called**: A Discovery job runs against the device.

**Purpose**: Enumerate all certificates on the target platform.

**Returns**: Array of discovered certificates with Name, PEM, and metadata.

**Implementation tips**:
- **Always implement pagination** — production may have hundreds of certificates
- Use try/catch per certificate — one bad cert shouldn't abort discovery
- Sanitize identifiers (remove special characters)
- Use prefixes to distinguish cert types: `Platform-CertType-123`

**Example return structure**:
```powershell
@{
    Result = "Success"
    Applications = @(
        @{
            Name = "Example-ServiceCert-123"
            ApplicationClass = "Adaptable App"
            PEM = "-----BEGIN CERTIFICATE-----..."
            CertificateName = "example.com"
        }
    )
}
```

---

### Install-Certificate

**When called**: Provisioning or renewal of a certificate.

**Purpose**: Deploy certificate to target platform.

**Parameters provided**:
- `$Specific.CertPem` — Certificate in PEM format
- `$Specific.PrivKeyPem` — Private key in PEM format
- `$Specific.ChainPem` — Chain/intermediates in PEM format
- `$Specific.Pkcs12` — PKCS#12 bundle as byte array
- `$Specific.EncryptPass` — PKCS#12 password
- `$General.AssetName` — Previous certificate ID (on renewal)

**Must return**: `@{ Result = "Success"; AssetName = "cert-id-123" }`

**AssetName is critical**: This value persists and is used by Extract-Certificate and future renewals.

**Renewal pattern**:
```powershell
# Install new certificate
$newCertId = (Invoke-Api -Endpoint "/certificates" -Method Post -Body $certData).id

# Delete old certificate (non-fatal)
if ($General.AssetName) {
    try {
        Invoke-Api -Endpoint "/certificates/$($General.AssetName)" -Method Delete
    }
    catch {
        Write-Warning "Could not delete old certificate: $_"
    }
}

return @{ Result = "Success"; AssetName = $newCertId }
```

---

### Extract-Certificate

**When called**: Certificate inventory/validation.

**Purpose**: Retrieve certificate for verification.

**Returns**: Certificate PEM, serial number, and thumbprint.

**Example**:
```powershell
function Extract-Certificate {
    param(
        [Parameter(Mandatory)] [hashtable] $General,
        [Parameter()] [hashtable] $Specific = @{}
    )

    # Get certificate using AssetName
    $cert = Invoke-Api -Endpoint "/certificates/$($General.AssetName)"

    # Parse PEM to extract serial and thumbprint
    $x509 = [System.Security.Cryptography.X509Certificates.X509Certificate2]::new(
        [System.Text.Encoding]::ASCII.GetBytes($cert.pem)
    )

    return @{
        Result    = "Success"
        CertPem   = $cert.pem
        Serial    = $x509.GetSerialNumberString()
        Thumprint = $x509.Thumbprint  # Note: no 'b'!
    }
}
```

---

## Best Practices

### Script Validation

TPP validates all 10 required functions at script load time. Include stub implementations for unused functions:

```powershell
function Install-Chain {
    return @{ Result = "NotUsed" }
}
```

### Error Handling

Extract error details from API responses:

```powershell
try {
    Invoke-RestMethod -Uri $uri -Method Post
}
catch {
    $stream = $_.Exception.Response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($stream)
    $errorBody = $reader.ReadToEnd() | ConvertFrom-Json
    throw "[error] API returned: $($errorBody.message)"
}
```

### Pagination

Always implement pagination for discovery:

```powershell
$allCerts = @()
$offset = 0
$limit = 100

do {
    $response = Invoke-Api -Endpoint "/certificates?offset=$offset&limit=$limit"
    $allCerts += $response.items
    $offset += $limit
} while ($response.items.Count -eq $limit)
```

### Self-Signed Certificate Handling

For platforms with self-signed TLS certificates, implement optional validation bypass:

```powershell
if ($General.Option1) {
    Add-Type @"
    public class TrustAllCertsPolicy : System.Net.ICertificatePolicy {
        public bool CheckValidationResult(
            System.Net.ServicePoint srvPoint,
            System.Security.Cryptography.X509Certificates.X509Certificate certificate,
            System.Net.WebRequest request,
            int certificateProblem) {
            return true;
        }
    }
"@
    [System.Net.ServicePointManager]::CertificatePolicy = New-Object TrustAllCertsPolicy
}
```

---

## Development Workflow

### 1. Set up prerequisites on target platform

- Create API client credentials (OAuth2 apps, API keys, etc.)
- Document the one-time setup steps
- Verify API endpoints are accessible

### 2. Create driver script

**Location**: `C:\Program Files\Venafi\Scripts\AdaptableApp\YourDriver.ps1`

**Start with skeleton**:
```powershell
<#
.SYNOPSIS
    Adaptable App driver for [Platform Name]

.DESCRIPTION
    Deploys certificates to [Platform Name] via REST API

.FIELD DEFINITIONS
    Text1|API Client ID|111
    Passwd|API Client Secret|111
    Option1|Disable SSL Validation|0
#>

# Helper functions
function Assert-Field { ... }
function Get-ApiToken { ... }
function Invoke-Api { ... }

# Required functions (10 total)
function Test-Settings { ... }
function Discover-Certificates { ... }
function Install-Certificate { ... }
function Extract-Certificate { ... }

# Stub functions
function Install-Chain { return @{ Result = "NotUsed" } }
function Install-PrivateKey { return @{ Result = "NotUsed" } }
function Update-Binding { return @{ Result = "NotUsed" } }
function Activate-Certificate { return @{ Result = "NotUsed" } }
function Extract-PrivateKey { return @{ Result = "NotUsed" } }
function Remove-Certificate { return @{ Result = "NotUsed" } }
```

### 3. Test in TPP

1. Copy script to `C:\Program Files\Venafi\Scripts\AdaptableApp\` on TPP server
2. In TPP WebAdmin, create or edit Adaptable App driver object
3. Select your script from the dropdown
4. **Save the policy** (this approves the script for execution)
5. Configure a device with HostAddress, credentials
6. Run Test-Settings to verify connectivity
7. Run Discovery job to test enumeration
8. Provision test certificate to verify installation
9. Check Extract-Certificate returns correct data

### 4. Handle script changes

**Important**: Every time you modify the .ps1 file, you MUST re-save the policy object in WebAdmin. Without this, TPP shows: "The current PowerShell script is not yet allowed."

---

## Common Patterns

### Centralized API wrapper

```powershell
function Invoke-PlatformApi {
    param(
        [string]$Endpoint,
        [string]$Method = "Get",
        [object]$Body
    )

    $token = Get-ApiToken -General $General
    $uri = "https://$($General.HostAddress):$($General.TcpPort)$Endpoint"

    $headers = @{
        "Authorization" = "Bearer $token"
        "Content-Type" = "application/json"
    }

    $params = @{
        Uri = $uri
        Method = $Method
        Headers = $headers
    }

    if ($Body) {
        $params.Body = ($Body | ConvertTo-Json -Depth 10)
    }

    try {
        return Invoke-RestMethod @params
    }
    catch {
        # Extract error details
        $stream = $_.Exception.Response.GetResponseStream()
        $reader = New-Object System.IO.StreamReader($stream)
        $errorBody = $reader.ReadToEnd()
        throw "[error] API call failed: $errorBody"
    }
}
```

### File cleanup pattern

```powershell
$tempFile = $null
try {
    # Create temp file
    $tempFile = Join-Path $env:TEMP "cert-$([guid]::NewGuid()).p12"
    [System.IO.File]::WriteAllBytes($tempFile, $Specific.Pkcs12)

    # Use file...
}
finally {
    if ($tempFile -and (Test-Path $tempFile)) {
        Remove-Item $tempFile -Force
    }
}
```

---

## Examples

Browse existing adaptable drivers in the marketplace:

- Search for integrations with tag "Adaptable" at [pan.dev/mis/marketplace](https://pan.dev/mis/marketplace)
- Review PowerShell scripts in the `/Integrations/` directory
- Study authentication patterns (OAuth2, API key, Basic)

---

## Next Steps

- **Building for internal use?** You're done — deploy and use your driver
- **Want to share publicly?** See [Contributing to the Marketplace](/scm/api/config/mim/contributing-to-the-marketplace) for packaging guidance

---

## Getting Help

- **TPP Documentation**: Refer to Certificate Manager Self-Hosted admin guides
- **GitHub Issues**: [Report bugs or request features](https://github.com/paulternate/mis-marketplace/issues)
- **Support**: cybr-mis.support@paloaltonetworks.com
