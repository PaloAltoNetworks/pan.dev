---
id: contributing-marketplace-manifest-schema
title: "Manifest Schema Reference"
sidebar_label: "Manifest Schema Reference"
keywords:
  - Machine Identity Management
  - Marketplace
---

# Manifest Schema Reference

:::note
This schema is ONLY required if you're contributing to the marketplace. If you're building integrations for private use, you don't need to create `integration_metadata.json`.
:::

This document provides a complete reference for the `integration_metadata.json` manifest file that drives the MIS Marketplace integration catalog.

## Introduction

Every integration in the marketplace is described by an `integration_metadata.json` file located in its directory under `/Integrations/`. This manifest file contains:

- **Metadata**: Name, description, author, version
- **Classification**: Categories, tags, use cases, supported platforms
- **Assets**: Logos, documentation files, PowerShell scripts
- **Resources**: Videos, solution guides, external links
- **Platform Variants**: Platform-specific configurations

The `generate-gallery.js` script (779 lines) processes these manifests to create:
- Gallery JSON data at `/docs/src/data/integrations.json`
- MDX detail pages at `/docs/docs/marketplace/<routeId>.mdx`
- Normalized logos at `/docs/static/img/integrations/`
- Secure script downloads at `/docs/static/downloads/<uuid>/`
- Resource files at `/docs/static/resources/<routeId>/`

---

## Schema Versions

### Current Schema (v2)

The modern schema supports:
- **Platform Variants**: Different configurations per platform
- **Defaults Object**: Shared values across variants
- **Resources Object**: Videos, guides, and links
- **Auto-Detection**: Platform-specific documentation files

### Legacy Schema (v1)

The original schema used root-level fields without variants. This is still supported for backward compatibility, but new integrations should use the current schema.

**Migration**: The gallery generator automatically creates `defaults` and resolves fields using a fallback chain.

---

## Complete Field Reference

### Core Metadata Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | **Yes** | Display name shown in marketplace cards and detail pages |
| `description` | string | **Yes** | Short description (1-3 sentences) for marketplace card |
| `logoFile` | string | **Yes** | Filename of logo (PNG recommended, e.g., "company-logo.png") |
| `logoFileDark` | string | No | Dark mode logo variant (optional, e.g., "company-logo-dark.png") |
| `categories` | string[] | **Yes** | One or more categories (see options below) |
| `platforms` | string[] | **Yes** | Supported platforms (see options below) |
| `tags` | string[] | **Yes** | Tags for filtering (e.g., ["TLS/SSL Inspection", "Cloud"]) |
| `useCases` | string[] | **Yes** | Use case labels (see options below) |
| `keywords` | string[] | **Yes** | Search keywords for discovery |

**Category Options**:
- `"Automation"`
- `"Application"`
- `"Cloud Platform"` / `"Cloud Service"`
- `"Identity & Access Management"`
- `"IoT/Edge"`
- `"Network Device"`
- `"Security"`

**Platform Options**:
- `"Certificate Manager SaaS"` (formerly TLS Protect Cloud)
- `"Certificate Manager Self-Hosted"` (formerly TLS Protect Datacenter)
- `"Next-Gen Trust Security"`

**Use Case Options**:
- `"Certificate Lifecycle Management"`
- `"Code Signing"`
- `"SSH Key Management"`
- `"Discovery"`

### Support & Metadata Fields (Legacy)

These fields can be defined at the root level, in the `defaults` object, or per platform variant:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `support` | string | No | Support status: "Supported", "Community", "Not Supported" |
| `currentVersion` | string | No | Semantic version (e.g., "1.0.0", "2.1.3") |
| `author` | string | No | Vendor or developer name |
| `email` | string | No | Support contact email |
| `supportUrl` | string | No | Support page or forum URL |
| `externalDocsUrl` | string | No | External documentation URL |
| `externalDocsLabel` | string | No | Button label for external docs (default: "Documentation") |

**Recommendation**: Use the `defaults` object for these fields instead of root-level to support multi-platform integrations.

### Additional Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scriptFiles` | string[] | No | PowerShell script filenames (e.g., ["Install.ps1", "Configure.ps1"]) |
| `documentationFile` | string | No | Custom documentation file (overrides auto-detection) |
| `overviewFile` | string | No | Custom overview file (overrides auto-detection) |
| `defaults` | object | No | Shared values for all platform variants |
| `platformVariants` | object[] | No | Platform-specific configurations |
| `resources` | object | No | Videos, solution guides, external links |

---

## Defaults Object

The `defaults` object provides shared values for all platform variants, reducing duplication.

### Structure

```json
{
  "defaults": {
    "support": "Supported",
    "currentVersion": "1.0.0",
    "author": "Your Company",
    "email": "support@yourcompany.com",
    "supportUrl": "https://support.yourcompany.com",
    "externalDocsLabel": "Full Documentation"
  }
}
```

### Usage

Any field in `defaults` can be overridden by:
1. Platform variant values (highest priority)
2. Root-level values (legacy compatibility)

**Example**:
```json
{
  "name": "My Integration",
  "platforms": ["Certificate Manager SaaS", "Certificate Manager Self-Hosted"],
  "defaults": {
    "support": "Supported",
    "currentVersion": "1.0.0"
  },
  "platformVariants": [
    {
      "platform": "Certificate Manager SaaS",
      "currentVersion": "2.0.0"  // Overrides defaults
    },
    {
      "platform": "Certificate Manager Self-Hosted"
      // Uses defaults: support = "Supported", currentVersion = "1.0.0"
    }
  ]
}
```

---

## Platform Variants Structure

Platform variants allow a single integration to support multiple platforms with different documentation, resources, and metadata.

### When to Use Platform Variants

Use variants when:
- The same integration supports multiple Venafi platforms
- Documentation differs per platform
- Resources (videos, guides) are platform-specific
- Version numbers vary by platform

### Variant Structure

```json
{
  "platformVariants": [
    {
      "platform": "Certificate Manager SaaS",
      "overviewFile": "OVERVIEW-saas.md",
      "documentationFile": "DOCS-saas.md",
      "support": "Supported",
      "currentVersion": "2.0.0",
      "author": "Your Company",
      "email": "support@yourcompany.com",
      "supportUrl": "https://support.yourcompany.com",
      "externalDocsUrl": "https://docs.yourcompany.com/venafi-saas",
      "externalDocsLabel": "SaaS Documentation",
      "description": "Platform-specific description (optional)",
      "resources": {
        "videos": [...],
        "solutionGuides": [...]
      }
    },
    {
      "platform": "Certificate Manager Self-Hosted",
      "overviewFile": "OVERVIEW-selfhosted.md",
      "scriptFiles": ["Integration-Script.ps1"]
    }
  ]
}
```

### Platform Variant Fields

Each variant can include:
- `platform` (required): Must match a value in the root `platforms` array
- `overviewFile`: Custom overview markdown file
- `documentationFile`: Custom documentation file
- All support/metadata fields (override defaults)
- `resources`: Platform-specific resources
- `scriptFiles`: Platform-specific PowerShell scripts
- `description`: Platform-specific description (overrides root)

**Important**: The `platform` value must exactly match one of the values in the root-level `platforms` array.

---

## Resources Object

The `resources` object provides additional content like videos, PDFs, and links. Resources can be defined globally (root level) or per platform variant.

### Structure

```json
{
  "resources": {
    "videos": [
      {
        "title": "Integration Overview",
        "description": "Learn how to set up and use this integration",
        "url": "https://www.youtube.com/watch?v=example",
        "platform": "youtube",
        "thumbnailUrl": "video-thumbnail.jpg"
      }
    ],
    "solutionGuides": [
      {
        "title": "Partner Brief",
        "description": "Overview of the partnership and integration capabilities",
        "url": "partner-brief.pdf",
        "type": "pdf",
        "fileSize": "2.5 MB"
      }
    ],
    "externalLinks": [
      {
        "title": "Product Website",
        "description": "Official product homepage",
        "url": "https://www.example.com",
        "category": "Documentation"
      }
    ]
  }
}
```

### Video Objects

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | **Yes** | Video title |
| `description` | string | No | Brief description of content |
| `url` | string | **Yes** | YouTube or external video URL |
| `platform` | string | No | Platform ("youtube", "vimeo", etc.) |
| `thumbnailUrl` | string | No | Local thumbnail file (optional) |

### Solution Guide Objects

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | **Yes** | Document title |
| `description` | string | No | Brief description |
| `url` | string | **Yes** | Filename or external URL |
| `type` | string | No | File type ("pdf", "docx", etc.) |
| `fileSize` | string | No | Human-readable size (e.g., "2.5 MB") |

### External Link Objects

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | **Yes** | Link title |
| `description` | string | No | Brief description |
| `url` | string | **Yes** | External URL |
| `category` | string | No | Link category |

### URL Processing

- **External URLs** (`http://`, `https://`): Used as-is
- **Local files**: Copied to `/docs/static/resources/<routeId>/` and rewritten to `/resources/<routeId>/<filename>`
- **Filenames**: URL-encoded in generated paths

---

## Script Files

PowerShell scripts that support the integration.

### Structure

```json
{
  "scriptFiles": [
    "Integration-Setup.ps1",
    "Integration-Helper.ps1"
  ]
}
```

### Processing

The `generate-gallery.js` script:
1. Generates a unique UUID for the integration
2. Copies all scripts to `/docs/static/downloads/<uuid>/`
3. Creates download buttons in the integration detail page
4. URL format: `/downloads/<uuid>/<encoded-filename>`

**Security**: UUID-based paths prevent unauthorized access patterns and provide secure, trackable downloads.

### Script Guidelines

- Use `.ps1` extension (PowerShell)
- Include error handling and logging
- Document parameters in script header
- Test scripts before submission
- Follow PowerShell best practices

---

## Logo Files

Integration logos displayed in the marketplace gallery and detail pages.

### Requirements

- **Format**: PNG with transparent background
- **Size**: Any size (auto-normalized to 160x92px with 8px padding)
- **Placement**: In the integration directory
- **File naming**:
  - Light mode: `company-logo.png` (or any descriptive name)
  - Dark mode: `company-logo-dark.png` (optional)

### Logo Normalization Process

The `generate-gallery.js` script uses **Sharp** library to normalize all logos:

1. **Trim**: Remove whitespace (threshold: 10 pixels)
2. **Resize**: Fit within 160x92px (maintains aspect ratio)
3. **Sharpen**: Apply subtle sharpening (sigma: 0.5)
4. **Padding**: Add 8px padding on all sides (transparent background)
5. **Output**: Save as optimized PNG

**Output location**: `/docs/static/img/integrations/<routeId>.png`

### Dark Mode Support

If `logoFileDark` is specified, it's processed separately and saved as `<routeId>-dark.png`. The marketplace automatically switches logos based on the user's theme preference.

---

## Documentation File Conventions

**CRITICAL**: The integration gallery uses **auto-detection** to find documentation files based on platform suffixes.

### Auto-Detection Pattern

**Platform Suffix Mapping**:
- "Certificate Manager SaaS" → `saas`
- "Certificate Manager Self-Hosted" → `selfhosted`
- "Next-Gen Trust Security" → `ngts`

**Overview File Search Order** (for each platform variant):
1. `OVERVIEW-<suffix>.md` (e.g., `OVERVIEW-saas.md`)
2. Variant's `overviewFile` if specified in manifest
3. `README.md` (fallback)

**Documentation File Search Order**:
1. `DOCS-<suffix>.md` (e.g., `DOCS-saas.md`)
2. Variant's `documentationFile` if specified in manifest
3. `DOCUMENTATION.md` (fallback)

### File Naming Examples

**Single Platform (Self-Hosted only)**:
```
/Integrations/MyIntegration/
├── integration_metadata.json
├── README.md                  # Overview
├── DOCUMENTATION.md           # Documentation
└── logo.png
```

**Multi-Platform with Auto-Detection**:
```
/Integrations/F5BIGIP/
├── integration_metadata.json
├── OVERVIEW-saas.md           # SaaS overview
├── OVERVIEW-selfhosted.md     # Self-Hosted overview
├── OVERVIEW-ngts.md           # NGTS overview
├── DOCS-saas.md               # SaaS documentation
├── DOCS-selfhosted.md         # Self-Hosted documentation
├── README.md                  # Fallback
└── F5.png
```

### Markdown Processing

Documentation files are:
- Sanitized for MDX compatibility (escapes `{`, `}`, and JSX-like tags)
- Code blocks are preserved without escaping
- Inserted into MDX templates for rendering

**If no file is found**: The detail page displays "*No overview/documentation provided for this platform.*"

---

## Field Resolution Priority

For platform variants, fields are resolved using this priority chain:

1. **Variant-specific field** (highest priority)
2. **Defaults object field**
3. **Root-level field** (legacy compatibility)
4. **Hardcoded default** (e.g., "Unknown", "1.0.0", "Documentation")

### Resolution Formula

```javascript
support = variant.support ?? defaults.support ?? root.support ?? 'Unknown'
currentVersion = variant.currentVersion ?? defaults.currentVersion ?? root.currentVersion ?? '1.0.0'
externalDocsLabel = variant.externalDocsLabel ?? defaults.externalDocsLabel ?? root.externalDocsLabel ?? 'Documentation'
```

This creates a `_resolved` object in the generated `/docs/src/data/integrations.json` file.

---

## Release Notes Structure

Optional release notes provide version history for integrations.

### Directory Structure

```
/Integrations/<IntegrationName>/ReleaseNotes/
  ├── 1_0_0.md
  ├── 1_1_0.md
  ├── 2_0_0.md
  └── 2_1_0.md
```

### File Naming

- **Format**: `<version_with_underscores>.md`
- **Example**: `1_0_0.md` → displayed as "Version 1.0.0"
- **Sorting**: Descending order (newest first)

### Content Format

```markdown
- Initial release with support for feature X
- Added feature Y
- Fixed bug Z
- Updated dependencies
```

### Processing

The `generate-gallery.js` script:
1. Reads all files in `ReleaseNotes/` directory
2. Sorts by version (descending)
3. Converts underscores to dots for display
4. Appends content to the overview section

---

## Complete Examples

### Example 1: Simple Integration (Single Platform)

**File**: `/Integrations/A10ThunderADC/integration_metadata.json`

```json
{
  "name": "A10 Thunder ADC",
  "description": "This integration supports ACOS v5.2.1 and above.",
  "support": "Supported",
  "currentVersion": "1.0",
  "author": "A10 Networks",
  "email": "support@venafi.com",
  "categories": ["Automation"],
  "platforms": ["Certificate Manager Self-Hosted"],
  "tags": [],
  "useCases": ["Certificate Lifecycle Management"],
  "keywords": [],
  "scriptFiles": ["A10-Thunder.ps1"],
  "documentationFile": "DOCUMENTATION.md",
  "logoFile": "a10-logo.png",
  "supportUrl": "https://support.a10networks.com"
}
```

**Directory Structure**:
```
/Integrations/A10ThunderADC/
├── integration_metadata.json
├── DOCUMENTATION.md
├── a10-logo.png
└── A10-Thunder.ps1
```

---

### Example 2: Multi-Platform Integration with Resources

**File**: `/Integrations/F5BIGIP/integration_metadata.json`

```json
{
  "name": "F5 BIG-IP",
  "description": "Automate and secure your SSL/TLS lifecycle with F5 BIG-IP load balancers.",
  "categories": ["Network Device"],
  "platforms": [
    "Certificate Manager SaaS",
    "Certificate Manager Self-Hosted",
    "Next-Gen Trust Security"
  ],
  "tags": ["ADC/Load Balancing"],
  "useCases": ["Certificate Lifecycle Management"],
  "keywords": ["F5 Big-IP", "REST", "Load Balancer"],
  "logoFile": "F5.png",
  "defaults": {
    "support": "Supported",
    "currentVersion": "1.0.0",
    "author": "Venafi",
    "email": "cybr-mis.support@paloaltonetworks.com",
    "supportUrl": "https://community.cyberark.com/s/",
    "externalDocsLabel": "Venafi Documentation"
  },
  "platformVariants": [
    {
      "platform": "Certificate Manager SaaS",
      "overviewFile": "README.md",
      "externalDocsUrl": "https://docs.venafi.com/Docs/current/TopNav/Content/SDK/WebSDK/r-SDK-Certificates-outbound-flow.php",
      "resources": {
        "videos": [
          {
            "title": "F5 BIG-IP Integration Overview",
            "description": "Learn how to integrate F5 BIG-IP with Venafi",
            "url": "https://www.youtube.com/watch?v=y0r6b4tAPJw",
            "platform": "youtube"
          }
        ],
        "solutionGuides": [
          {
            "title": "F5 BIG-IP Partner Brief",
            "description": "Partnership overview document",
            "url": "Venafi-F5-PartnerBrief-1704.pdf",
            "type": "pdf"
          }
        ]
      }
    },
    {
      "platform": "Certificate Manager Self-Hosted",
      "overviewFile": "README.md",
      "externalDocsUrl": "https://docs.venafi.com/Docs/current/TopNav/Content/Aperture/t-Aperture-CA-F5-BigIP-Setup.php"
    },
    {
      "platform": "Next-Gen Trust Security",
      "overviewFile": "README.md",
      "externalDocsUrl": "https://docs.venafi.com/Docs/current/TopNav/Content/Aperture/t-Aperture-CA-F5-BigIP-Setup.php"
    }
  ]
}
```

**Directory Structure**:
```
/Integrations/F5BIGIP/
├── integration_metadata.json
├── README.md
├── F5.png
├── Venafi-F5-PartnerBrief-1704.pdf
└── ReleaseNotes/
    └── 1_0_0.md
```

---

## Validation Rules

The `generate-gallery.js` script validates:

1. **Platform Consistency**: All platforms in `platformVariants` must exist in the root `platforms` array
2. **File Existence**: Logo files, documentation files, and script files must exist
3. **URL Format**: URLs should start with `http://` or `https://` for external resources
4. **JSON Validity**: Manifest must be valid JSON
5. **Required Fields**: Core fields (`name`, `description`, `categories`, `platforms`, etc.) must be present

**Warnings** are logged for:
- Missing logo files
- Missing documentation files
- Invalid URLs

**Errors** will fail the build for:
- Invalid JSON syntax
- Missing required fields
- Platform mismatch in variants

---

## Best Practices

### Use Defaults for Shared Values

```json
{
  "defaults": {
    "support": "Supported",
    "author": "Your Company"
  },
  "platformVariants": [
    { "platform": "Certificate Manager SaaS" },
    { "platform": "Certificate Manager Self-Hosted" }
  ]
}
```

Both variants inherit `support` and `author` without duplication.

### Prefer Auto-Detection File Naming

Instead of specifying `overviewFile` and `documentationFile` in each variant, use the auto-detection pattern:

```
OVERVIEW-saas.md
OVERVIEW-selfhosted.md
DOCS-saas.md
DOCS-selfhosted.md
```

This reduces manifest complexity and follows conventions.

### Provide Meaningful Descriptions

Descriptions appear on marketplace cards - make them concise and informative:

✅ **Good**: "Automate certificate lifecycle management for F5 BIG-IP load balancers using REST API integration."

❌ **Bad**: "Integration for F5."

### Include Dark Mode Logos

If your brand has a dark mode variant, include it:

```json
{
  "logoFile": "company-logo.png",
  "logoFileDark": "company-logo-dark.png"
}
```

### Add Resources to Help Users

Videos, guides, and links enhance the integration page:

```json
{
  "resources": {
    "videos": [
      {
        "title": "5-Minute Setup Tutorial",
        "url": "https://www.youtube.com/watch?v=..."
      }
    ]
  }
}
```

---

## Related Documentation

- **[Integration Authoring Guide](/scm/api/config/mim/building-integrations)** - Step-by-step tutorial for creating integrations
- **[Welcome](/scm/api/config/mim/welcome)** - Getting started with building integrations

---

## Questions?

If you have questions about the manifest schema or integration development:

- Check the [Integration Authoring Guide](/scm/api/config/mim/building-integrations)
- Review existing integrations in `/Integrations/` for examples
- Post in the community forum
- Contact support at cybr-mis.support@paloaltonetworks.com
