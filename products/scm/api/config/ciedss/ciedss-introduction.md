---
id: ciedss
title: CIE Directory Sync Service
sidebar_label: CIE Directory Sync Service APIs
keywords:
  - Strata Cloud Manager
  - Configuration
  - Identity
  - Reference
  - API
---

The Cloud Identity Engine (CIE) is a centralized service that aggregates, normalizes, and provides access to enterprise identity data through a unified API. It acts as the single source of truth for user and group information by synchronizing data from multiple on-premise and cloud-based directory services.

The CIE API enables developers to access the identity data to:
* Enrich application events with user context for security analysis.
* Integrate identity-aware controls into security workflows.
* Retrieve user and group details for policy enforcement.

## Core Component

CIE's core functionality is delivered by the **Directory Sync Service (DSS)**. This component is responsible for collecting, aggregating, and serving all the identity information that powers downstream services.

---

### Directory Sync Service (DSS)

The Directory Sync Service is the primary data aggregation engine of CIE. It connects to your various enterprise directories, ingests identity data, and stores it in a normalized format that can be easily queried by the API.

**Key Functions:**
* **Synchronizes** user, group, and organizational unit information.
* **Maintains** a consistent, up-to-date view of all connected directories.

**Supported Directory Sources:**
* On-premise Active Directory
* Azure Active Directory
* Okta
* Google Workspace
* PingFederate

**Key Capabilities:**
* Integrates with any Identity Provider (IdP) that supports the **SAML 2.0** protocol.

## Key Data Feature: User and Group Context

A primary benefit of using the CIE API is access to the User and group context features. This provides enriched, contextual data about users beyond basic attributes. This can include information such as a user's device, location, and logon events, which is critical for building advanced, context-aware security policies and analytics.

## High-Level Architecture

CIE operates on the Google Cloud Platform (GCP) and is designed for scalability and global availability.

1.  **Data Ingestion**: CIE ingests data from various configured directory sources (both on-premise and cloud).
2.  **Data Processing**: The Directory Sync Service processes and normalizes the data.
3.  **Data Consumption**: The CIE API exposes the processed data to consuming services, such as Prisma Access, Cortex XDR, and third-party applications.

These APIs use the [common authentication mechanism](/scm/docs/getstarted) for service access and authorization.

