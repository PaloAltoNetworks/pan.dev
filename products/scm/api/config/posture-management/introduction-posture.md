---
id: introduction-posture
title: Overview
sidebar_label: Overview
keywords:
  - Strata Cloud Manager
  - Posture
  - Best Practice Assessment
  - Policy Optimizer
  - Compliance
  - API
---

# Posture Management APIs

The Posture Management APIs provide programmatic access to tools that help you audit, manage, and enforce your security posture across Palo Alto Networks environments. Use these APIs to automate security assessments, manage customized posture checks, enforce compliance alignment, and optimize security policies at scale.

## Available APIs

| API | Description |
|-----|-------------|
| **Best Practice Assessment (Config Upload)** | Upload Panorama or NGFW configuration files and receive a comprehensive security assessment based on Palo Alto Networks best practices. Results are returned as structured JSON for integration into dashboards, SIEMs, or ticketing systems. |
| **Custom Posture Checks** | Define, manage, and report on user-defined posture checks tailored to your organization's specific security policies. Supports full CRUD lifecycle, cloning, and batch operations. |
| **Config Cleanup** | Identify unused or redundant configuration objects (zero-hit rules, orphaned objects) to keep your environment lean and reduce attack surface. |
| **Policy Optimizer** | Retrieve security rules with optimization recommendations. The engine analyzes traffic patterns and suggests narrowed, application-specific replacement rules to enforce least-privilege access. |
| **Compliance Frameworks** | Create, manage, and release compliance framework definitions. Map your security configurations against regulatory standards (CIS, NIST, SOC2) and organizational benchmarks. |
| **Compliance Analytics** | Retrieve compliance scores, summaries, and historical timelines to track your posture improvement over time. |
| **Benchmark Monitoring** | Monitor benchmarked compliance frameworks with Best Practice Check (BPC) verdict tracking and reporting. |

## Authentication

All Posture Management API endpoints require a Bearer JWT token obtained through the SCM OAuth2 flow:

```
Authorization: Bearer <access_token>
```

## Base URL

| Environment | Base URL |
|-------------|----------|
| Current | `https://api.strata.paloaltonetworks.com/posture` |