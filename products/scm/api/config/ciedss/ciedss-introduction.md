---
id: ciedss
title: CIE Directory Sync Service APIs
sidebar_label: CIE Directory Sync Service APIs
keywords:
  - Strata Cloud Manager
  - Configuration
  - Identity
  - Reference
  - API
---

The Cloud Identity Engine (CIE) is a centralized service that aggregates, normalizes, and provides access to enterprise identity data through a unified API. It acts as the single source of truth for user and group information by synchronizing data from multiple on-premise and cloud-based directory services.

The CIE API enables developers to programmatically access this rich identity data to:
* Enrich application events with user context for security analysis.
* Integrate identity-aware controls into security workflows.
* Retrieve user and group details for policy enforcement.

## Core Components

CIE's functionality is delivered through two primary components that work together to collect and serve identity information.

### 1. Directory Sync Service (DSS)

The Directory Sync Service is the core data aggregation engine of CIE. It is responsible for connecting to various enterprise directories, ingesting identity data, and storing it in a normalized format.

**Key Functions:**
* Synchronizes user, group, and organizational unit information.
* Maintains a consistent, up-to-date view of all connected directories.

**Supported Directory Sources:**
* On-premise Active Directory
* Azure Active Directory
* Okta
* Google Workspace
* PingFederate

### 2. Cloud Authentication Service (CAS)

The Cloud Authentication Service manages authentication flows, integrating with various Identity Providers (IdPs). While direct interaction with CAS may be limited depending on the API scope, it is a foundational component for authentication-related workflows within the ecosystem.

**Key Capabilities:**
* Integrates with any Identity Provider (IdP) that supports the **SAML 2.0** protocol.

## Key Data Feature: User Context

A primary benefit of using the CIE API is access to the **User Context** feature. This provides enriched, contextual data about users beyond basic attributes. This can include information such as a user's device, location, and logon events, which is critical for building advanced, context-aware security policies and analytics.

## High-Level Architecture

CIE operates on the Google Cloud Platform (GCP) and is designed for scalability and global availability. The following diagram illustrates the high-level data flow:

1.  **Data Ingestion**: CIE ingests data from various configured directory sources (both on-premise and cloud).
2.  **Data Processing**: The Directory Sync Service processes and normalizes this data.
3.  **Data Consumption**: The CIE API exposes this processed data to consuming services, such as Prisma Access, Cortex XDR, and third-party applications.

These APIs use the [common authentication mechanism](/scm/docs/getstarted) for service access and authorization.

You must use the [Configuration Operations API](/scm/api/config/cloudngfw/operations/operations-api-cloud-ngfw) to push
configurations made using these APIs to your deployments.
