---
id: introduction
title: SaaS Incident Security Posture Management APIs
sidebar_label: Incident Security Posture Management APIs
slug: /sase/api/identity-sspm
keywords:
  - SASE
  - Reference
  - API
---

The Identity API is a component of the SaaS Security Posture Management (SSPM) framework. It allows developers to access security-related metrics and configurations tied to user and service accounts. Identity builds upon posture security to offer more granular insights into how identities are managed across SaaS environments.

## Prerequisites

To use the Identity API:

- You must have a valid SaaS Security account.
- You must have onboarded identity sources such as Okta or Office 365.
- You need a registered application with a client ID and endpoint URL for authentication.

## Key Features

The Identity API allows you to:

- Detect MFA misconfigurations across identity providers.
- Identify users with no MFA or incomplete enforcement.
- Track account activity and highlight dormant or inactive accounts.
- Detect credentials that haven't rotated within a defined period.
- Flag over-privileged accounts that exceed role-based access expectations.
- Aggregate user posture metrics for reporting and dashboards.

## Posture vs Identity

| Category | Posture | Identity |
|----------|---------|----------|
| Focus | Configuration (e.g., password policies) | User accounts and their behaviors |
| Objective | Compliance with standards | Risk identification and mitigation |
| Scope | General SaaS application configuration | Specific to user and service identities |
| Example | Enforcing password complexity | Detecting a dormant admin account |


## Use Cases

- **Dormant Account Identification**: Detect user accounts that belong to employees who have left the organization but are still active in the system.
- **Over-Privileged Account Detection**: Highlight accounts with excessive permissions relative to their assigned roles.
- **MFA Compliance Monitoring**: Audit which users have not enrolled in MFA or are missing enforcement policies.
- **Activity Analysis**: Review sign-in activity for anomalies and risk signals across user accounts.