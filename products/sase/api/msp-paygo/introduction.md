---
id: introduction
title: MSP PayGo Service API
sidebar_label: Overview
keywords:
  - API
  - Reference
---

# MSP PayGo Service API

The MSP PayGo Service API enables Managed Service Providers (MSPs) to programmatically manage the full lifecycle of child tenant provisioning on the Prisma SASE platform. Use these APIs to automate onboarding, configure security services, and monitor usage across your customer base.

## What You Can Do

The API is organized into six functional areas:

### Tenant Management
Provision and manage child tenants under your root MSP tenant. Activate new tenants with a specific package, amend existing SKU allocations, deprovision tenants, and retrieve the full list of tenants under your organization.

Supported package types:
- **SASE_CORE** — SASE SWG (Secure Web Gateway) Package
- **SASE_PRO** — SASE Enterprise Package
- **PAB** — Prisma Access Browser (Secure Browser)

### Package Catalog
Retrieve the product packages available for child tenant activation, including full SKU manifests that list all allocatable line items and quantities for each package.

### Edge Locations
Look up the available edge regions for a given package, and query the nearest edge locations based on a geographic coordinate. Use this to select optimal deployment regions when activating a child tenant.

### CIE (Cloud Identity Engine)
Retrieve the SAML Service Provider entity details needed to configure your Identity Provider (IdP) for a child tenant, and validate SAML metadata URLs before completing the CIE setup.

### Usage Metrics
Monitor your MSP deployment with usage totals, mobile user trends, and site trends across child tenants. Access the activity log to audit provisioning and configuration changes.

### User Provisioning
Create configuration service accounts for child tenants. These accounts are used by the bulk configuration service to manage tenant settings programmatically.

## Common Workflows

**Onboard a new customer:**
1. Call `/packages` to select the right package for the customer
2. Call `/packages/{id}/regions` to identify available edge regions
3. Call `/tenant/{rootTsgId}/activate-child` to provision the child tenant
4. Call `/cie/details` and `/cie/validate-url` to configure the customer's IdP

**Monitor usage:**
Use `/usage/totals`, `/usage/mobile-user-trend`, and `/usage/site-trend` to track consumption and plan capacity across your customer base.

**Amend an existing tenant:**
Call `/tenant/{rootTsgId}/child/{childTsgId}` to update SKU allocations as a customer's needs change.
