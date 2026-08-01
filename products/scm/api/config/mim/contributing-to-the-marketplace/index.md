---
id: contributing-marketplace-overview
title: "Overview"
sidebar_label: "Overview"
keywords:
  - Machine Identity Management
  - Marketplace
---

# Contributing to the Marketplace

## Overview

The MIS Marketplace is a public catalog of 200+ machine identity security integrations. Contributing your integration makes it discoverable and accessible to the broader community.

**Important**: You do NOT need to contribute to the marketplace to use your integration. This section is only for developers who want to share their work publicly.

---

## What is MIS Marketplace

The **MIS Marketplace** is a manifest-driven gallery of machine identity security integrations, hosted at [pan.dev/mis/marketplace](https://pan.dev/mis/marketplace).

**Features**:

- **200+ Integrations**: Pre-built connectors for CAs, servers, load balancers, and more
- **Developer Documentation**: Comprehensive guides, API references, and design patterns
- **Gated Downloads**: Authenticated access to integration packages
- **Manifest-Driven**: Simple JSON metadata for integration discovery

**Branding**: All visual identity uses NGTS Orange (`#FA582D`) and NGTS Yellow (`#FFCB06`) as primary brand colors.

**Important**: You do NOT need to contribute to the marketplace to use integrations. Build for your own environment first, then optionally share with the community.

---

## Why Contribute?

### Visibility
Get discovered by users searching for integrations. Your integration appears alongside integrations from leading vendors and technology partners.

### Community
Join a community of integration authors building the machine identity security ecosystem.

### Support
Leverage marketplace infrastructure for:
- Secure script distribution (UUID-based download paths)
- Logo normalization and optimization
- Automated documentation generation
- Multi-platform variant handling

### Recognition
Showcase your expertise and build your professional profile.

---

## Environment Setup

To contribute to the marketplace, you'll need to set up the development environment.

### Prerequisites

**Required**:

- **Node.js** 18 or higher
- **npm** (comes with Node.js)
- **Git** for version control
- **Text editor** (VS Code, IntelliJ, etc.)

**Recommended Knowledge**:

- JSON and Markdown syntax
- Basic React/JavaScript (for UI contributions)
- PowerShell (for TPP driver contributions)

**Check your environment**:

```bash
node --version  # Should be 18+
npm --version   # Should be 9+
git --version
```

### Repository Setup

**1. Fork the Repository**

Navigate to the [MIS Marketplace GitHub repository](https://github.com/paulternate/mis-marketplace) and click "Fork" to create your own copy.

**2. Clone Your Fork**

```bash
git clone https://github.com/YOUR-USERNAME/mis-marketplace.git
cd mis-marketplace
```

**3. Project Structure**

```
/
├── docs/                          # Docusaurus site engine
│   ├── docusaurus.config.js       # Site configuration
│   ├── src/                       # React components
│   ├── static/                    # Static assets
│   └── generate-gallery.js        # Integration processing (779 lines)
│
└── Integrations/                  # Integration data model
    └── <IntegrationName>/
        ├── integration_metadata.json   # Manifest
        ├── README.md                   # Documentation
        └── assets/                    # Logos, screenshots
```

**Key Directories**:

- `/docs/` - Docusaurus frontend and documentation
- `/Integrations/` - Integration manifests and assets
- `/docs/src/components/` - Custom React components
- `/docs/static/` - Static assets (logos, icons)

### Installation

**1. Navigate to docs directory**

```bash
cd docs
```

**2. Install dependencies**

```bash
npm install
```

This installs:

- Docusaurus 3.x (static site generator)
- React 18 (UI framework)
- Sharp (image processing for logos)
- MDX plugins (enhanced Markdown)
- TypeScript support

**3. Generate Integration Gallery**

```bash
npm run prestart
```

This runs `generate-gallery.js` which:

- Reads all `integration_metadata.json` files
- Normalizes logos (trim, resize, sharpen)
- Handles platform variants
- Generates MDX pages for marketplace
- Outputs `/src/data/integrations.json`

### Running Development Server

**Start the dev server**:

```bash
npm start
```

This opens **http://localhost:3000** with hot-reload enabled.

**Common URLs**:

- Marketplace gallery: http://localhost:3000/marketplace
- Developer docs: http://localhost:3000/docs
- API endpoints: http://localhost:3000/docs/api-endpoints

**Dev mode features**:

- Hot reload on file changes
- Fast refresh for React components
- Live Markdown preview
- Console error reporting

---

## Contribution Process

### 1. Build Your Integration

Use one of the approaches from [Building Integrations](/scm/api/config/mim/building-integrations):
- CA Connector Framework
- Machine Connector Framework
- TPP Adaptable App Driver
- VCert SDK integration
- REST API integration

**Complete and test your integration** before packaging for the marketplace.

### 2. Package for Marketplace

Create marketplace metadata:
- `integration_metadata.json` - Manifest with name, description, categories, platforms
- `logo.png` - PNG logo with transparent background
- `README.md` or `OVERVIEW-*.md` - Overview documentation
- `DOCUMENTATION.md` or `DOCS-*.md` - Configuration guide
- (Optional) PowerShell scripts, PDFs, videos, release notes

**See**: [Manifest Schema Reference](/scm/api/config/mim/contributing-to-the-marketplace/contributing-marketplace-manifest-schema) for complete field definitions.

### 3. Test Locally

Run the gallery generation script to verify rendering:

```bash
cd docs
node generate-gallery.js
npm start
```

Navigate to http://localhost:3000/marketplace and verify:
- Integration appears in gallery
- Logo displays correctly (light and dark themes)
- Overview tab renders properly
- Documentation tab works
- Downloads are available (if applicable)
- Resources show correctly (if applicable)
- Platform selector works (for multi-platform integrations)

### 4. Submit Pull Request

Create a feature branch and submit for review:

```bash
git checkout -b add-your-integration
git add Integrations/YourIntegrationName/
git commit -m "Add [YourIntegration] integration

- Integration metadata and documentation
- Logo and resources
- Testing completed locally

Co-Authored-By: Your Name <your.email@example.com>"
git push origin add-your-integration
```

Then create a pull request on GitHub with:
- **Title**: "Add [YourIntegration] integration"
- **Description**: Brief overview of what you're adding
- **Checklist**: Confirm testing, docs, and quality standards met

### 5. Respond to Feedback

Marketplace maintainers will review:
- Metadata completeness and accuracy
- Logo quality and sizing
- Documentation clarity
- Testing evidence
- Category/tag appropriateness

Address any feedback and update your PR.

### 6. Celebrate! 🎉

Once merged, your integration is live at [pan.dev/mis/marketplace](https://pan.dev/mis/marketplace).

---

## Understanding the Build Process

The MIS Marketplace uses a custom build pipeline centered around `generate-gallery.js`.

### Integration Processing (`generate-gallery.js`)

This 779-line script processes all 206 integrations and:

1. **Reads Manifests**: Parses `integration_metadata.json` from each integration directory
2. **Normalizes Logos**: Uses Sharp library to trim, resize (160x92px), sharpen, and add 8px padding
3. **Handles Platform Variants**: Auto-detects platform-specific documentation files
4. **Processes Resources**: Copies videos, PDFs, and external links
5. **Generates MDX Pages**: Creates marketplace detail pages for each integration
6. **Copies Scripts**: Moves PowerShell files to UUID-based secure download paths
7. **Outputs JSON**: Creates `/src/data/integrations.json` for the gallery

**File Naming Auto-Detection**:

- `OVERVIEW-saas.md` → Certificate Manager SaaS overview
- `OVERVIEW-selfhosted.md` → Certificate Manager Self-Hosted overview
- `OVERVIEW-ngts.md` → Next-Gen Trust Security overview
- `DOCS-saas.md` → SaaS documentation
- `DOCS-selfhosted.md` → Self-Hosted documentation
- `DOCS-ngts.md` → NGTS documentation
- Fallbacks: `README.md`, `DOCUMENTATION.md`

**Platform Suffix Mapping**:

- "Certificate Manager SaaS" → `saas`
- "Certificate Manager Self-Hosted" → `selfhosted`
- "Next-Gen Trust Security" → `ngts`

### GraphQL Documentation

Generate GraphQL API documentation:

```bash
npm run build:graphql-docs
```

This generates GraphQL API documentation from `/migration_files/schema.graphql`:

- Creates 776 pages in `/api-endpoints/graphql/`
- Includes queries, mutations, objects, and types
- Builds schema documentation for playground

### Production Build

Create an optimized production build:

```bash
npm run build
```

This creates a `/build/` directory with static files ready for deployment.

The `prebuild` script automatically:

1. Generates GraphQL docs
2. Processes integrations via `generate-gallery.js`
3. Optimizes assets (minification, compression)

**Build output**: ~50MB (much smaller than the 151MB Magidoc setup we replaced!)

### Test Production Build Locally

```bash
npm run serve
```

Access the production build at **http://localhost:3000**

This allows you to test:

- Optimized bundle performance
- Static file serving
- Routing and navigation
- Asset loading

---

## Requirements

Before contributing, ensure you have:

### Working Integration
✅ Integration is functional and tested
✅ Tested on target platform(s)
✅ Error handling is robust
✅ Logging is clear and helpful

### Marketplace Assets
✅ PNG logo with transparent background (400x200px or smaller)
✅ Overview documentation (README.md or OVERVIEW-*.md)
✅ Configuration documentation (DOCUMENTATION.md or DOCS-*.md)
✅ Valid integration_metadata.json

### Quality Standards
✅ Documentation is clear and complete
✅ No broken links or images
✅ Metadata categories/tags are accurate
✅ Logo meets size and quality requirements

### Support Commitment
✅ Willing to answer user questions
✅ Able to fix bugs if reported
✅ Can update for platform API changes

---

## Contributing Guidelines

When contributing to the MIS Marketplace, please follow these standards:

### Code Quality

- **Follow existing patterns**: Match the coding style and naming conventions used in the codebase
- **Test all changes locally**: Run `npm run typecheck` and `npm run build` before submitting
- **Write clear commit messages**: Use descriptive messages that explain the "why" not just the "what"
- **Include documentation**: Document new features or update existing docs as needed

### Branding Standards

Respect the **CLAUDE.md branding guidelines**:

- Primary color: NGTS Orange `#FA582D`
- Accent color: NGTS Yellow `#FFCB06`
- Use "Integration" not "Pack"
- Use "MIS Marketplace" not "Cortex" or "XSOAR"

### Quality Standards

**Logos**:

- All integration logos must be PNG with transparency
- Auto-normalized to 160x92px with 8px padding
- Optional dark mode variant (append `-dark` to filename)

**Documentation**:

- Clear and concise writing
- Include configuration examples
- Provide troubleshooting guidance
- Link to external resources when appropriate

**Code**:

- TypeScript best practices (prefer types over `any`)
- Accessibility (a11y) compliance
- Responsive design (mobile-first)
- Named exports over default exports

### Testing

Before submitting:

- [ ] Integration manifest validates
- [ ] Logo normalizes correctly
- [ ] Documentation renders without errors
- [ ] All links work
- [ ] TypeScript type checking passes
- [ ] Production build succeeds

---

## Contribution Types

### Integration Metadata Only

If you've built an integration using frameworks or APIs and want to list it in the marketplace:

**What to provide**:
- `integration_metadata.json` - Metadata manifest
- `README.md` or `OVERVIEW-*.md` - Overview documentation
- `DOCUMENTATION.md` or `DOCS-*.md` - Configuration guide
- `logo.png` - Integration logo
- (Optional) PowerShell scripts, PDFs, videos

**Repository structure**:
```
Integrations/YourIntegrationName/
├── integration_metadata.json
├── logo.png
├── README.md
└── DOCUMENTATION.md
```

### Integration + Source Code

If you want to contribute both the marketplace listing AND open-source code:

**What to provide**:
- All metadata files above
- Source code repository (linked in metadata)
- Dockerfile and build instructions
- CI/CD configuration
- Testing documentation

---

## Platform Variants

If your integration supports multiple Venafi platforms, use platform variants:

**Supported platforms**:
- Certificate Manager SaaS (formerly TLS Protect Cloud)
- Certificate Manager Self-Hosted (formerly TLS Protect Datacenter)
- Next-Gen Trust Security

**Documentation file patterns**:
- `OVERVIEW-saas.md` - Certificate Manager SaaS overview
- `OVERVIEW-selfhosted.md` - Certificate Manager Self-Hosted overview
- `OVERVIEW-ngts.md` - Next-Gen Trust Security overview
- `DOCS-saas.md` - Certificate Manager SaaS docs
- `DOCS-selfhosted.md` - Certificate Manager Self-Hosted docs
- `DOCS-ngts.md` - Next-Gen Trust Security docs

**See**: [Manifest Schema Reference](/scm/api/config/mim/contributing-to-the-marketplace/contributing-marketplace-manifest-schema) for platform variant configuration.

---

## Logo Requirements

### File Format
- **Format**: PNG with transparent background
- **Size**: 400x200px or smaller (auto-normalized to 160x92px)
- **Quality**: High-resolution, professional appearance

### Auto-Normalization

The build process automatically:
- Trims whitespace (threshold: 10px)
- Resizes to max 160x92px (maintains aspect ratio)
- Applies subtle sharpening (sigma: 0.5)
- Adds 8px padding on all sides
- Outputs as optimized PNG

### Dark Mode (Optional)

Provide a dark mode variant:
- `logo.png` - Light mode
- `logo-dark.png` - Dark mode

---

## Documentation Standards

### Overview (README.md)

**Purpose**: Marketing/introduction to the integration that emphasizes customer value.

**Content**:

- Brief introduction (1-2 paragraphs) framing the problem/opportunity
- **SOLUTION HIGHLIGHTS** or **Value Highlights** section with 4-6 value-focused bullet points
- About the vendor/technology
- Links to external resources

**Important**: Focus on what value customers receive, not just feature lists. See the [detailed formatting guidance in the Submission Guide](/scm/api/config/mim/contributing-to-the-marketplace/contributing-marketplace-submission#step-4-write-overview-documentation) for examples and best practices.

### Configuration Guide (DOCUMENTATION.md)

**Purpose**: Technical setup and configuration instructions.

**Content**:

- Prerequisites
- Installation steps
- Configuration parameters
- Testing/validation steps
- Troubleshooting guide

### External Documentation

Alternatively, link to external documentation:

```json
{
  "externalDocsUrl": "https://docs.example.com/venafi-integration",
  "externalDocsLabel": "Official Documentation"
}
```

---

## Resource Types

Enhance your integration listing with additional resources:

### Videos
YouTube or Vimeo links for demos, tutorials, overviews.

### Solution Guides
PDFs with partner briefs, deployment guides, best practices.

### External Links
Product websites, support portals, community forums.

**See**: [Manifest Schema Reference](/scm/api/config/mim/contributing-to-the-marketplace/contributing-marketplace-manifest-schema) for resource configuration.

---

## Testing Checklist

Before submitting your PR:

- [ ] Run `node generate-gallery.js` successfully
- [ ] Run `npm start` and view integration in marketplace
- [ ] Logo displays correctly (light and dark themes)
- [ ] Overview tab renders with no errors
- [ ] Documentation tab shows complete configuration guide
- [ ] All links work (internal and external)
- [ ] No broken images
- [ ] Platform selector works (if multi-platform)
- [ ] Downloads are available (if scripts included)
- [ ] Resources tab shows correctly (if resources added)
- [ ] MDX syntax is valid (no `{` or `}` parsing errors)

---

## Maintenance

After your integration is merged:

### Responding to Issues

Users may report issues or ask questions via:
- GitHub Issues
- Community forums
- Support emails

**Best practices**:
- Respond within 1-2 business days
- Provide clear troubleshooting steps
- Update documentation if questions are common

### Updating Integrations

To update your integration:
1. Create new feature branch
2. Update metadata, docs, or scripts
3. Test locally
4. Submit PR with clear change description
5. Update version number in metadata

### Deprecation

If you can no longer support your integration:
1. Update metadata with deprecation notice
2. Add `support: "Deprecated"` in manifest
3. Provide migration path if alternative exists

---

## Next Steps

- Review [Manifest Schema Reference](/scm/api/config/mim/contributing-to-the-marketplace/contributing-marketplace-manifest-schema) for complete field definitions
- Follow [Marketplace Submission Guide](/scm/api/config/mim/contributing-to-the-marketplace/contributing-marketplace-submission) for step-by-step packaging instructions

---

## Getting Help

- **GitHub Issues**: [Report bugs or request features](https://github.com/paulternate/mis-marketplace/issues)
- **Support**: cybr-mis.support@paloaltonetworks.com
