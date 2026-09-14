---
id: introduction
title: NGFW Operations APIs
sidebar_label: NGFW Operations APIs
keywords:
  - Strata Cloud Manager
  - Configuration
  - Setup
  - Reference
  - API
---

# Operations and Troubleshooting API Reference

Welcome to the **Operations and Troubleshooting API** portal. This suite of endpoints provides the programmatic tools necessary to monitor device health, audit configuration history, and retrieve real-time operational data from your Palo Alto Networks managed assets.

By leveraging these APIs, technical operations teams can automate diagnostic workflows and integrate deep device visibility into custom management dashboards.

## Key Capabilities

### 1. Configuration Management
Maintain a clear audit trail of your environment with dedicated configuration endpoints:
* **Version History:** Retrieve a comprehensive list of local configuration versions for any device, including timestamps and transformation IDs.
* **Secure Downloads:** Programmatically fetch the actual XML configuration files pushed to a device for offline analysis or backup verification.

### 2. Real-Time Operational Diagnostics
Initiate asynchronous jobs to pull live telemetry and state information without blocking your primary application flow. These jobs support up to five devices per request:
* **Routing & Forwarding:** Access Route Tables and Forwarding Information Base (FIB) data to troubleshoot traffic paths.
* **Network Services:** Monitor DNS proxy tables and logging service forwarding status to ensure core services are reachable.
* **Interface Telemetry:** Retrieve detailed network interface states and statistics directly from the hardware.

### 3. Automated Job Tracking
Our asynchronous architecture ensures your application remains responsive:
* **Polling Mechanism:** Use the Job ID returned by any operation to track progress from `pending` to `complete`.
* **Structured Results:** Receive granular, device-specific data in a standardized JSON format, ready for automated parsing or visualization.