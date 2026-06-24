---
id: contributing-marketplace-submission
title: "Marketplace Submission Guide"
sidebar_label: "Marketplace Submission Guide"
keywords:
  - Machine Identity Management
  - Marketplace
---

# Marketplace Submission Guide

This guide walks you through packaging an already-built integration for submission to the MIS Marketplace.

:::info Prerequisites
This guide assumes you've already built a working integration using one of the approaches from [Building Integrations](/scm/api/config/mim/building-integrations). If you haven't built your integration yet, start there first.
:::

---

## Step 1: Create Integration Directory

### Naming Convention

Use **PascalCase** with no spaces or special characters:

| Display Name | Directory Name |
|--------------|----------------|
| F5 BIG-IP | `F5BIGIP` |
| AWS Private CA | `AWSPrivateCA` |
| cert-manager | `CertManager` |
| Apache HTTP Server | `ApacheHTTPServer` |

### Create Directory

```bash
cd Integrations
mkdir YourIntegrationName
cd YourIntegrationName
```

---

## Step 2: Create integration_metadata.json

Create the manifest file with your integration metadata.

### Basic Template

```json
{
  "name": "Your Integration Name",
  "description": "Brief description of what this integration does and its key capabilities.",
  "support": "Supported",
  "currentVersion": "1.0.0",
  "author": "Your Company",
  "email": "support@yourcompany.com",
  "categories": ["Network Device"],
  "platforms": ["Certificate Manager Self-Hosted"],
  "tags": ["TLS/SSL Inspection"],
  "useCases": ["Certificate Lifecycle Management"],
  "keywords": ["Your Product", "Technology", "Feature"],
  "logoFile": "logo.png",
  "scriptFiles": [],
  "documentationFile": "DOCUMENTATION.md",
  "supportUrl": "https://support.yourcompany.com"
}
```

### Field Selection

**Categories** (choose one or more):
- `"Automation"` - CI/CD tools, orchestration
- `"Application"` - Web servers, containers
- `"Cloud Platform"` - AWS, Azure, GCP
- `"Identity & Access Management"` - IAM, SSO
- `"IoT/Edge"` - IoT devices, edge computing
- `"Network Device"` - Load balancers, firewalls
- `"Security"` - Security tools, SIEM, WAF

**Platforms** (choose one or more):
- `"Certificate Manager SaaS"`
- `"Certificate Manager Self-Hosted"`
- `"Next-Gen Trust Security"`

**Tags**:
`"ADC/Load Balancing"`, `"API Gateway"`, `"Certificate Authority"`, `"Cloud"`, `"Code Signing"`, `"Container/Kubernetes"`, `"HSM"`, `"IoT"`, `"SSH"`, `"TLS/SSL Inspection"`, `"WAF"`, `"Web Server"`

**Use Cases**:
- `"Certificate Lifecycle Management"`
- `"Code Signing"`
- `"SSH Key Management"`
- `"Discovery"`

**See**: [Manifest Schema Reference](/scm/api/config/mim/contributing-to-the-marketplace/contributing-marketplace-manifest-schema) for complete field definitions.

---

## Step 3: Add Logo

### Requirements

- **Format**: PNG with transparent background
- **Size**: 400x200px or smaller (auto-normalized to 160x92px + 8px padding)
- **Filename**: `logo.png` (or `yourname-logo.png`)
- **Quality**: High-resolution, professional appearance

### Optional: Dark Mode Logo

Provide a dark theme variant:
- `logo-dark.png`

### Auto-Normalization

The build process automatically:
1. Trims whitespace (threshold: 10px)
2. Resizes to max 160x92px (maintains aspect ratio)
3. Applies subtle sharpening (sigma: 0.5)
4. Adds 8px padding on all sides
5. Outputs as optimized PNG

### Logo Checklist

- [ ] PNG format with transparent background
- [ ] Professional quality (no pixelation or artifacts)
- [ ] Brand guidelines followed
- [ ] Readable at small sizes
- [ ] File placed in integration directory

---

## Step 4: Write Overview Documentation

The Overview is the first impression customers get of your integration. It should clearly communicate **what value this integration provides** and why someone should use it.

### Focus on Customer Value

Your Overview should answer:

- What problems does this integration solve?
- What outcomes can customers achieve?
- What benefits will they experience?

**Think customer benefits, not feature lists.** Instead of "Supports certificate renewal," write "Eliminate outages with automated certificate renewal."

### Overview Structure

#### 1. Opening Narrative (1-2 paragraphs)

Start with context about the problem being solved or the capabilities being enabled. Frame this from the customer's perspective.

**Example:**
> Organizations rely on load balancers to decrypt and analyze HTTPS traffic for threat detection. As TLS encryption becomes more prevalent, managing certificates across network infrastructure becomes increasingly complex. This integration streamlines certificate lifecycle management, ensuring security teams maintain control while operations teams avoid service disruptions.

#### 2. SOLUTION HIGHLIGHTS or Value Highlights Section

This is the most critical part of your Overview. Provide 4-6 bullet points that quickly communicate value.

**Formatting:**

```markdown
**SOLUTION HIGHLIGHTS**

- Eliminate outages with automated certificate lifecycle management
- Streamline workflows by reducing manual certificate provisioning tasks
- Enhance security posture with policy-driven certificate controls
- Accelerate deployment through integration with existing CI/CD pipelines
```

**Guidelines:**

- Use 4-6 bullets (not too few, not overwhelming)
- Start with strong action verbs (Eliminate, Streamline, Enhance, Accelerate, Automate, Scale)
- Focus on outcomes and benefits customers will achieve
- Bold opening phrases are optional but recommended for scanability
- Keep each bullet to 1-2 lines maximum

**Good examples:**

- ✅ "Eliminate manual certificate updates and reduce the risk of outages"
- ✅ "Gain complete visibility into certificate inventory across your infrastructure"
- ✅ "Accelerate time to deployment with automated certificate provisioning"
- ✅ "Scale use of HTTPS without the difficult setup"

**Avoid:**

- ❌ "Supports multiple certificate authorities" (feature, not benefit)
- ❌ "Uses REST API for communication" (implementation detail)
- ❌ "Compatible with version 2.0+" (technical spec)

#### 3. Additional Sections (Optional)

**Applicability**: Frame specific use cases or customer segments

```markdown
**Applicability**
For organizations building or maintaining applications on AWS, this solution offers effective security management by ensuring streamlined and automated TLS/SSL management.
```

**Solution Components**: List technical components involved

```markdown
**Solution Components**
- Certificate Manager Self-Hosted
- F5 BIG-IP Local Traffic Manager
```

**How it Works**: Brief explanation with links to detailed docs

```markdown
**How it Works**
The integration enables automated certificate provisioning through the F5 API. See [Configuration Guide](#) for setup instructions.
```

**About [Vendor]**: Company/product description

```markdown
**ABOUT F5 Networks**
F5 Networks is a leading provider of application delivery and security solutions, with BIG-IP serving as the industry-standard load balancing platform.
```

### Markdown Formatting

You can use standard markdown formatting:

- **Bold** for emphasis on key phrases
- *Italic* for subtle emphasis
- `Code blocks` for technical terms and commands
- [Links](https://example.com) to external resources
- Bulleted and numbered lists

**Note**: Avoid using curly braces `{` or `}` outside of code blocks, as they can break MDX rendering. Escape them if needed: `\{example\}`.

### Single Platform Integration

Create `README.md`:

```markdown
# Your Integration Name

Brief introduction explaining what this integration does and the value it provides to customers. Frame the problem or opportunity from the customer's perspective.

**SOLUTION HIGHLIGHTS**

- **Eliminate outages** with automated certificate lifecycle management
- **Streamline workflows** by reducing manual certificate provisioning
- **Enhance security posture** with policy-driven certificate controls
- **Gain complete visibility** into certificate inventory

## Use Cases

- Certificate provisioning and renewal for production workloads
- Automated deployment to reduce manual operations overhead
- Compliance reporting and audit trail for security teams

## About [Vendor/Technology]

Brief description of the vendor or technology being integrated.

For more information, visit [website](https://example.com).
```

### Multi-Platform Integration

Create platform-specific overview files:

- `OVERVIEW-saas.md` - Certificate Manager SaaS overview
- `OVERVIEW-selfhosted.md` - Certificate Manager Self-Hosted overview
- `OVERVIEW-ngts.md` - Next-Gen Trust Security overview

**Platform Suffix Mapping**:
- "Certificate Manager SaaS" → `saas`
- "Certificate Manager Self-Hosted" → `selfhosted`
- "Next-Gen Trust Security" → `ngts`

---

## Step 5: Write Configuration Documentation

### Single Platform

Create `DOCUMENTATION.md`:

```markdown
# Configuration Guide

## Prerequisites

- Requirement 1
- Requirement 2
- Requirement 3

## Installation

1. Step 1
2. Step 2
3. Step 3

## Configuration

### Connection Settings

- **Host**: Target platform hostname or IP
- **Port**: API port (default: 443)
- **API Key**: Authentication credentials

### Certificate Settings

- **Certificate Template**: Template to use for provisioning
- **Renewal Window**: Days before expiration to renew

## Testing

1. Validation step 1
2. Validation step 2

## Troubleshooting

### Common Issues

**Issue 1**: Description
- **Solution**: Resolution steps

**Issue 2**: Description
- **Solution**: Resolution steps
```

### Multi-Platform

Create platform-specific documentation:

- `DOCS-saas.md`
- `DOCS-selfhosted.md`
- `DOCS-ngts.md`

### External Documentation

Alternatively, link to external docs:

```json
{
  "externalDocsUrl": "https://docs.example.com/venafi-integration",
  "externalDocsLabel": "Official Documentation"
}
```

---

## Step 6: Add PowerShell Scripts (Optional)

If your integration uses PowerShell scripts (TPP Adaptable Drivers):

### Add Scripts to Directory

```
YourIntegrationName/
├── integration_metadata.json
├── logo.png
├── README.md
├── DOCUMENTATION.md
└── YourIntegration-Main.ps1  ← PowerShell script
```

### Reference in Manifest

```json
{
  "scriptFiles": [
    "YourIntegration-Main.ps1",
    "YourIntegration-Helper.ps1"
  ]
}
```

### Security Note

Scripts are automatically copied to UUID-based download paths (`/downloads/{uuid}/`) for security.

---

## Step 7: Add Resources (Optional)

Enhance your integration with videos, PDFs, and links.

### Videos

```json
{
  "resources": {
    "videos": [
      {
        "title": "Integration Setup Tutorial",
        "description": "Step-by-step setup walkthrough",
        "url": "https://www.youtube.com/watch?v=...",
        "platform": "youtube"
      }
    ]
  }
}
```

### Solution Guides (PDFs)

```json
{
  "resources": {
    "solutionGuides": [
      {
        "title": "Partner Brief",
        "url": "partner-brief.pdf",
        "type": "pdf"
      }
    ]
  }
}
```

Place PDF files in your integration directory.

### External Links

```json
{
  "resources": {
    "externalLinks": [
      {
        "title": "Product Website",
        "url": "https://example.com/product"
      },
      {
        "title": "Support Portal",
        "url": "https://support.example.com"
      }
    ]
  }
}
```

---

## Step 8: Add Release Notes (Optional)

Create versioned release notes in `ReleaseNotes/` directory:

```
YourIntegrationName/
└── ReleaseNotes/
    ├── 1_0_0.md
    ├── 1_1_0.md
    └── 2_0_0.md
```

**File naming**: Use underscores for version numbers (`1_0_0.md`, not `1.0.0.md`).

**Content**:
```markdown
# Version 1.1.0

## New Features
- Added support for certificate renewal
- Improved error handling

## Bug Fixes
- Fixed issue with certificate chain parsing

## Breaking Changes
- Removed deprecated authentication method
```

---

## Step 9: Multi-Platform Configuration (Advanced)

If your integration supports multiple platforms with different configurations:

### Using Defaults Object

Reduce duplication by defining shared values:

```json
{
  "name": "Your Integration",
  "platforms": [
    "Certificate Manager SaaS",
    "Certificate Manager Self-Hosted"
  ],
  "defaults": {
    "support": "Supported",
    "currentVersion": "1.0.0",
    "author": "Your Company",
    "email": "support@example.com"
  },
  "platformVariants": [
    {
      "platform": "Certificate Manager SaaS",
      "overviewFile": "OVERVIEW-saas.md",
      "documentationFile": "DOCS-saas.md"
    },
    {
      "platform": "Certificate Manager Self-Hosted",
      "overviewFile": "OVERVIEW-selfhosted.md",
      "documentationFile": "DOCS-selfhosted.md"
    }
  ]
}
```

### Platform-Specific Resources

```json
{
  "platformVariants": [
    {
      "platform": "Certificate Manager SaaS",
      "resources": {
        "videos": [
          {
            "title": "SaaS Setup Tutorial",
            "url": "https://youtube.com/..."
          }
        ]
      }
    }
  ]
}
```

---

## Step 10: Test Locally

Before submitting, test your integration in the local marketplace.

### Generate Gallery

```bash
cd docs
node generate-gallery.js
```

**Expected output**: `✅ Successfully generated all data and markdown files!`

### Start Development Server

```bash
npm start
```

Navigate to http://localhost:3000/marketplace

### Verification Checklist

- [ ] Integration appears in marketplace gallery
- [ ] Logo displays correctly (light theme)
- [ ] Logo displays correctly (dark theme, if provided)
- [ ] Overview tab renders with no errors
- [ ] Documentation tab shows configuration guide
- [ ] All links work (internal and external)
- [ ] No broken images
- [ ] Platform selector works (for multi-platform)
- [ ] Downloads available (if scripts included)
- [ ] Resources tab shows correctly (if resources added)
- [ ] No MDX syntax errors (check for unescaped `{` or `}`)

### Common MDX Errors

**Issue**: Curly braces break rendering

**Solution**: Escape curly braces in markdown:
```markdown
Use \{curly braces\} like this
```

**Issue**: JSX-like tags break rendering

**Solution**: Use backticks for code:
```markdown
Use `<tag>` in code blocks
```

---

## Step 11: Submit Pull Request

### Create Feature Branch

```bash
git checkout -b add-your-integration
```

**Branch naming**:
- `add-<integration-name>` - New integration
- `update-<integration-name>` - Update existing

### Stage Changes

```bash
git add Integrations/YourIntegrationName/
```

### Commit with Message

```bash
git commit -m "Add [YourIntegration] integration

- Integration metadata and documentation
- Logo and resources
- PowerShell scripts (if applicable)
- Testing completed locally

Co-Authored-By: Your Name <your.email@example.com>"
```

### Push to GitHub

```bash
git push origin add-your-integration
```

### Create Pull Request

On GitHub:

1. Click "New Pull Request"
2. Select your branch
3. **Title**: "Add [YourIntegration] integration"
4. **Description**:
   ```markdown
   ## Summary
   This PR adds the [YourIntegration] integration for [brief description].

   ## Integration Details
   - **Type**: CA Connector / Machine Connector / TPP Driver
   - **Platforms**: Certificate Manager SaaS, Self-Hosted, etc.
   - **Author**: Your Company

   ## Testing
   - [x] Tested locally with `generate-gallery.js`
   - [x] All documentation renders correctly
   - [x] No broken links or images
   - [x] Logo meets quality standards

   ## Checklist
   - [x] Manifest validated
   - [x] Documentation complete
   - [x] Logo optimized
   - [x] Local testing passed
   ```
5. Submit for review

---

## Step 12: Respond to Feedback

Marketplace maintainers will review your submission.

### Common Review Points

**Metadata**:
- Categories and tags are appropriate
- Description is clear and concise
- Version follows semantic versioning

**Logo**:
- Professional quality
- Transparent background
- Readable at small sizes

**Documentation**:
- Prerequisites are complete
- Configuration steps are clear
- Troubleshooting section exists

**Testing**:
- Integration renders correctly
- All links work
- No syntax errors

### Making Updates

Address feedback by updating your branch:

```bash
# Make changes
git add Integrations/YourIntegrationName/
git commit -m "Address review feedback: update logo size"
git push origin add-your-integration
```

---

## Best Practices

### Naming
- Use PascalCase for directory names
- Use clear, descriptive display names
- Follow auto-detection file patterns (OVERVIEW-*.md, DOCS-*.md)

### Documentation
- Write concise overviews (1-2 paragraphs)
- Provide comprehensive configuration guides
- Include troubleshooting for common issues
- Use clear headings and formatting

### Metadata
- Choose accurate categories and tags
- Provide meaningful keywords for search
- Include complete contact information
- Update version numbers semantically

### Assets
- Use high-quality, professional logos
- Provide transparent backgrounds
- Include dark mode variants when possible
- Optimize file sizes

### Testing
- Test all platform variants
- Verify all links work
- Check for broken images
- Validate MDX syntax

---

## Next Steps

After your integration is merged:

1. **Monitor Issues**: Watch for user questions or bug reports
2. **Respond to Feedback**: Answer questions within 1-2 business days
3. **Update as Needed**: Submit PRs for updates or bug fixes
4. **Promote**: Share your integration on social media, documentation

---

## Getting Help

- **GitHub Issues**: [Report bugs or ask questions](https://github.com/paulternate/mis-marketplace/issues)
- **Manifest Schema**: [Complete field reference](/scm/api/config/mim/contributing-to-the-marketplace/contributing-marketplace-manifest-schema)
- **Support**: cybr-mis.support@paloaltonetworks.com
