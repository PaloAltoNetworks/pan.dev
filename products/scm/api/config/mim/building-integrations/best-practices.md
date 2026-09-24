---
id: building-integrations-best-practices
title: "Integration Best Practices"
sidebar_label: "Integration Best Practices"
keywords:
  - Machine Identity Management
  - Building Integrations
---

# Integration Best Practices

Lessons learned from building CA connectors, machine connectors, and TPP adaptable drivers across dozens of platforms.

---

## General Principles

### Start with a Reference Implementation

**CA Connectors**: Study the [DigiCert ONE connector](https://github.com/Venafi/digicert-ca-connector) for complete examples.

**Machine Connectors**: Clone the [VMware Avi connector](https://github.com/Venafi/vmware-avi-connector) as your starting point. It includes:
- Correct project structure for vSatellite deployment
- Working Makefile with all required build targets
- Proper Dockerfile pattern (distroless, nonroot)
- Payload encryption middleware
- Correct manifest.json structure
- Proven dependency versions

**TPP Drivers**: Review existing PowerShell drivers in the marketplace (search for "Adaptable" tag).

**Don't start from scratch** — reference implementations save weeks of trial-and-error.

---

## Error Handling

### Extract Error Details from Responses

APIs return errors in different formats. Implement flexible parsing:

**Go (REST API)**:
```go
func parseAPIError(resp *resty.Response) error {
    var errResp struct {
        Error struct {
            Code    string `json:"code"`
            Message string `json:"message"`
        } `json:"error"`
        Errors []struct {
            Message string `json:"message"`
        } `json:"errors"`
        Message string `json:"message"`
    }

    json.Unmarshal(resp.Body(), &errResp)

    // Try multiple formats
    if errResp.Error.Message != "" {
        return fmt.Errorf("%s: %s", errResp.Error.Code, errResp.Error.Message)
    }
    if len(errResp.Errors) > 0 {
        return fmt.Errorf("%s", errResp.Errors[0].Message)
    }
    if errResp.Message != "" {
        return fmt.Errorf("%s", errResp.Message)
    }

    // Fallback to raw body
    return fmt.Errorf("API error: %s", string(resp.Body()))
}
```

**PowerShell (TPP Driver)**:
```powershell
try {
    Invoke-RestMethod -Uri $uri
}
catch {
    $stream = $_.Exception.Response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($stream)
    $errorBody = $reader.ReadToEnd() | ConvertFrom-Json

    # Try multiple error fields
    $message = $errorBody.error ?? $errorBody.message ?? $errorBody.detail ?? "Unknown error"
    throw "[error] API call failed: $message"
}
```

### Return Proper HTTP Status Codes

**Connectors (Go)**: Return HTTP 400 for all errors, HTTP 200 for success. The Venafi framework expects this convention.

**TPP Drivers**: Throw exceptions with descriptive messages. Prefix with `[error]` for easy log filtering.

---

## Logging

### Use Structured Logging

**Go (zap)**:
```go
logger.Debug("Installing certificate",
    zap.String("hostname", hostname),
    zap.String("certId", certId),
    zap.String("operation", "install"),
)
```

**PowerShell**:
```powershell
Write-Host "[info] Installing certificate: certId=$certId, hostname=$hostname"
Write-Host "[error] Installation failed: $($_.Exception.Message)"
```

### Log at Debug Level in Production

For connectors running on vSatellite, container logs are the only debugging interface. Set log level to Debug:

```go
loggerConfig.Level = zap.NewAtomicLevelAt(zap.DebugLevel)
```

Log every step: authentication, API calls, response parsing, file operations.

### What to Log

✅ **Do log**:
- Every API call (URL, method, status code)
- Authentication attempts (success/failure)
- Certificate operations (install, extract, discover)
- Parsed response data (IDs, names, counts)
- Error details (codes, messages, stack traces)

❌ **Don't log**:
- Passwords or API keys
- Private key material
- Full certificate PEMs (log thumbprints instead)
- Sensitive user data

---

## Authentication

### OAuth2 Client Credentials (Recommended)

**Best for**: Modern REST APIs with service account support.

**Implementation**:
- Request token per function call (don't cache)
- Store client ID and secret in secure fields
- Handle token errors gracefully

**Example (PowerShell)**:
```powershell
function Get-OAuthToken {
    param($ClientId, $ClientSecret, $TokenUrl)

    $body = @{
        grant_type = "client_credentials"
        client_id = $ClientId
        client_secret = $ClientSecret
    }

    $response = Invoke-RestMethod -Uri $TokenUrl -Method Post -Body $body
    return $response.access_token
}
```

### API Key Authentication

**Best for**: Platforms with header-based auth.

**Implementation**:
- Store key in Passwd/VarPass field
- Include in Authorization or custom header
- Validate key format in Test-Settings

### Avoid Username/Password When Possible

OAuth2 or API keys are more secure and easier to rotate.

---

## Certificate Handling

### Certificate Format Conversion

**Venafi expects**: Base64-encoded DER bytes (not PEM strings).

**Conversion pattern**:
```go
// Parse PEM
block, _ := pem.Decode([]byte(pemString))
if block == nil {
    return errors.New("invalid PEM")
}

// Return base64 DER
certBase64 := base64.StdEncoding.EncodeToString(block.Bytes)
```

**Handle both PEM and DER input**: Some APIs return PEM, others return base64 DER. Try PEM first, fall back to DER.

### CSR Handling

**Send CSR with PEM headers**: Most CA APIs expect full PEM including `-----BEGIN CERTIFICATE REQUEST-----`.

**Parse CSR to extract attributes**: Even if the CSR contains subject/SANs, many CAs require these as separate fields.

```go
csr, _ := x509.ParseCertificateRequest(csrBytes)

subject := map[string]string{
    "common_name": csr.Subject.CommonName,
    "organization": csr.Subject.Organization[0],
}

sans := csr.DNSNames
```

### DER vs PEM Pitfalls

**Common mistakes**:
- Returning PEM when Venafi expects DER
- Stripping PEM headers when CA expects them
- Not validating certificate parsing before returning

**Test both directions**: Create test cases for PEM→DER and DER→PEM conversions.

---

## Discovery and Pagination

### Always Implement Pagination

Production environments may have hundreds or thousands of certificates.

**Pattern (Go)**:
```go
allCerts := []Certificate{}
offset := 0
limit := 100

for {
    resp := client.ListCertificates(offset, limit)
    allCerts = append(allCerts, resp.Items...)

    if len(resp.Items) < limit {
        break // Last page
    }
    offset += limit
}
```

**Pattern (PowerShell)**:
```powershell
$allCerts = @()
$offset = 0
$limit = 100

do {
    $response = Invoke-Api -Endpoint "/certs?offset=$offset&limit=$limit"
    $allCerts += $response.items
    $offset += $limit
} while ($response.items.Count -eq $limit)
```

### Handle Parse Failures Gracefully

One bad certificate shouldn't abort discovery of all others.

```go
for _, item := range apiResponse.Items {
    cert, err := parseCertificate(item.PEM)
    if err != nil {
        logger.Warn("Failed to parse certificate", zap.String("id", item.ID), zap.Error(err))
        continue // Skip this cert
    }
    results = append(results, cert)
}
```

### Sanitize Identifiers

Platform-specific IDs may contain special characters.

```go
sanitized := regexp.MustCompile(`[^a-zA-Z0-9-]`).ReplaceAllString(name, "-")
sanitized = strings.Trim(sanitized, "-")
```

---

## Testing Strategies

### Unit Testing

Test service interfaces in isolation:

```go
func TestInstallCertificate(t *testing.T) {
    mockClient := &MockAPIClient{
        InstallFunc: func(cert Certificate) (string, error) {
            return "cert-123", nil
        },
    }

    service := NewService(mockClient)
    result, err := service.InstallCertificate(testCert)

    assert.NoError(t, err)
    assert.Equal(t, "cert-123", result.AssetID)
}
```

### Integration Testing

**For Connectors**: Use VenProxy simulation utility to test against local endpoints.

**For TPP Drivers**: Test directly on TPP server with Test-Settings, Discovery jobs, and provisioning.

### End-to-End Testing

**Test the full lifecycle**:
1. Test-Settings (connectivity)
2. Discovery (enumeration)
3. Install (provisioning)
4. Extract (validation)
5. Renewal (install new + delete old)
6. Revocation (if applicable)

---

## Security Considerations

### Never Log Credentials

```go
// ❌ BAD
logger.Debug("Auth successful", zap.String("password", password))

// ✅ GOOD
logger.Debug("Auth successful", zap.String("username", username))
```

### Validate All Input

```go
func validateHostname(hostname string) error {
    if hostname == "" {
        return errors.New("hostname is required")
    }
    if strings.Contains(hostname, "..") {
        return errors.New("invalid hostname")
    }
    return nil
}
```

### Use TLS for All Connections

Only allow insecure connections via explicit opt-in flag (Option1, etc.).

### Handle Self-Signed Certificates Carefully

Provide option to bypass certificate validation, but default to validation enabled.

---

## Performance Optimization

### Connection Pooling

Reuse HTTP clients instead of creating new ones per request:

```go
var httpClient = &http.Client{
    Timeout: 30 * time.Second,
    Transport: &http.Transport{
        MaxIdleConns: 10,
        IdleConnTimeout: 90 * time.Second,
    },
}
```

### Rate Limiting

Implement retry with backoff for HTTP 429 responses:

```go
client := resty.New().
    SetRetryCount(3).
    SetRetryWaitTime(1 * time.Second).
    SetRetryMaxWaitTime(30 * time.Second).
    AddRetryCondition(func(r *resty.Response, err error) bool {
        return r.StatusCode() == 429 // Rate limit
    })
```

### Batch Operations When Possible

Group API calls to reduce round-trips:

```go
// ❌ BAD: N+1 queries
for _, certId := range certIds {
    cert := apiClient.GetCertificate(certId)
}

// ✅ GOOD: Batch fetch
certs := apiClient.GetCertificatesBatch(certIds)
```

---

## Common Pitfalls

### CA Connectors

1. ❌ Returning PEM instead of base64 DER for certificate fields
2. ❌ Stripping PEM headers from CSR
3. ❌ Using flat attribute structure instead of nested (e.g., `attributes.subject.common_name`)
4. ❌ Not implementing retry on HTTP 429 rate limits
5. ❌ Hardcoding auth header name instead of making it configurable

### Machine Connectors

1. ❌ Not implementing pagination for discovery
2. ❌ Failing entire batch when one certificate fails to parse
3. ❌ Not cleaning up temp files in finally blocks
4. ❌ Caching connections across handler calls (each call is independent)
5. ❌ Not validating AssetName before using it in Extract-Certificate

### TPP Adaptable Drivers

1. ❌ Missing stub implementations for unused functions (TPP validates all 10)
2. ❌ Not re-saving policy after script changes (script won't be approved)
3. ❌ Making old certificate deletion fatal during renewal
4. ❌ Not sanitizing identifiers from target platforms
5. ❌ Forgetting to set AssetName after successful installation

---

## Deployment Checklist

### For Go-Based Connectors

- [ ] Dockerfile uses distroless base image
- [ ] Container runs as nonroot user
- [ ] Makefile includes all required targets (build, test, docker-build, docker-push)
- [ ] Manifest.json validates against schema
- [ ] Payload encryption middleware is implemented
- [ ] All dependencies are pinned to specific versions
- [ ] Health check endpoint responds correctly
- [ ] Container logs are structured and debug-level

### For PowerShell TPP Drivers

- [ ] All 10 required functions exist (even if stubs)
- [ ] Field definitions block is correctly formatted
- [ ] Test-Settings validates all required fields
- [ ] AssetName is set correctly after Install-Certificate
- [ ] Discovery implements pagination
- [ ] Temp files are cleaned up in finally blocks
- [ ] Script is approved in TPP WebAdmin after any changes
- [ ] Error messages are descriptive and prefixed with [error]

---

## Next Steps

Apply these practices when building:
- [CA Connector Framework](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-ca-framework)
- [Machine Connector Framework](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-machine-framework)
- [TPP Adaptable App Drivers](/scm/api/config/mim/building-integrations/building-integrations-tpp-adaptable)

Review your integration against this checklist before deploying to production.
