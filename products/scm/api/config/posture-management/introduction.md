---
id: introduction
title: Posture APIs
sidebar_label: Posture APIs
keywords:
  - Strata Cloud Manager
  - Configuration
  - Device
  - Reference
  - API
---
# Introduction

 Welcome to the Posture API documentation. In an increasingly complex security landscape, maintaining a hardened and compliant environment shouldn't feel like a guessing game. The Posture suite is designed to give you programmatic control over your security health, offering deep visibility into your configurations and providing actionable intelligence to reduce your attack surface.

## Feature Overview
While our roadmap includes a comprehensive set of tools to automate your security lifecycle, in the near term, we are building this ecosystem to include:

- **Best Practices**: Audit your configurations against industry-standard security benchmarks.
- **Custom Posture Checks:** Audit your configurations against internal InfoSec standards.
- **Compliance:** Map your environment to regulatory frameworks (like CIS, NIST, or SOC2).
- **Policy Optimizer:** Receive and deploy intelligent recommendations to sharpen existing rules.
- **Policy Analyzer:** Predict the impact of policy changes before they go live and identify existing shadowed and redundant policy rules.
- **Config Cleanup:** Identify and remove unused objects or zero hit objects and rules to keep your environment lean.


## Current Availability

We are currently in a phased rollout of these capabilities. At this time, the “on-demand” Best Practice report API is the first available module.

The Best Practice report API allows you to automate the configuration audit process by:
1. Uploading your Next Generation Firewall, or Panorama configuration files directly to our analysis engine.
2. Generating comprehensive security reports based on Palo Alto Networks best practices.
3. Downloading the results in a machine-readable format (JSON) for integration into your internal dashboards or ticketing systems.

**Note:** APIs for Compliance, Policy Optimizer, Policy Analyzer and Config Cleanup are currently in development and will be released in the coming months. Stay tuned for updates.
