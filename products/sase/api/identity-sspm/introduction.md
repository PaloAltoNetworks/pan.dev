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

# Introduction to the Identity API

The Identity API empowers developers within the SaaS Security Posture Management (SSPM) framework to access security-related metrics and configurations for user and service accounts. This API extends posture security capabilities, offering you detailed insights into how your organization manages identities across SaaS environments.

## What is the Identity API?

The Identity API enables security teams to monitor, analyze, and respond to identity-related risks. Your teams can connect users, permissions, activities, and security configurations to maintain a comprehensive view of your identity security posture.

## Prerequisites

Before you integrate with the Identity API, you need:

- An active SaaS Security account with appropriate access permissions
- Onboarded identity sources like Okta, Office 365, or other supported IdPs
- A registered application with your client ID and endpoint URL for authentication
- API credentials that allow you to access identity data

## Key Capabilities

With the Identity API, you can:

- **Detect MFA Gaps**: Identify and fix multi-factor authentication misconfigurations across your identity providers
- **Monitor Authentication Health**: Find users who lack MFA or have incomplete enforcement
- **Track Account Lifecycle**: Monitor account activity and identify dormant or inactive accounts that create security risks
- **Enforce Credential Hygiene**: Find credentials your users haven't rotated according to your security policies
- **Control Privilege Escalation**: Identify accounts that have more privileges than their roles require
- **Generate Compliance Reports**: Create comprehensive security reports and executive dashboards using aggregated user posture metrics

## Understanding Posture vs. Identity

Posture security and identity security serve different yet complementary functions:

| Category | Posture | Identity |
|----------|---------|----------|
| Focus | Configuration (e.g., password policies) | User accounts and their behaviors |
| Objective | Compliance with standards | Risk identification and mitigation |
| Scope | General SaaS application configuration | Specific to user and service identities |
| Example | Enforcing password complexity | Detecting a dormant admin account |

## Common Use Cases

### Dormant Account Identification
Find and manage user accounts of former employees that still have active status in your systems, eliminating potential security vulnerabilities.

### Over-Privileged Account Detection
Spot accounts with excessive permissions compared to their assigned roles, helping you maintain the principle of least privilege.

### MFA Compliance Monitoring
Continuously check which users haven't enrolled in MFA or have gaps in their enforcement policies to ensure consistent authentication security.

### Activity Analysis
Examine authentication patterns and user behaviors to spot anomalies that may signal account compromise or insider threats.

These APIs use the [common SASE authentication](/sase/docs/getstarted) for service access and authorization.