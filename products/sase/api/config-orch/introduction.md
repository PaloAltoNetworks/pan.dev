---
id: introduction
title: Prisma Access Configuration Orchestration API
sidebar_label: Configuration Orchestration API
slug: /sase/api/introduction
keywords:
  - SASE
  - Reference
  - API
---

To create Remote Network firewall which is part of Prisma Access, Configuration Orchestration APIs allows you to directly configure Remote Network tunnels. 

For example, 

SD-WAN OEM vendor is looking to integrate their SD-WAN solution with our cloud security services to simplify the onboarding process for their customers' SD-WAN branches. However, they encounter the following challenges:

**Different APIs for Panorama and Strata Cloud Manager:** An organization has to work with different APIs for our various management platforms. This not only doubles their integration efforts but also introduces additional complexity for their end customers.

**Security and Accessibility Concerns:** For on-premises deployments, customers are required to configure their edge firewalls to allow traffic to Panorama. This is perceived as a security risk and is also a cumbersome requirement for their customers.

To solve these problems, Configuration Orchestration APIs allow you to configure Remote Network Tunnel across Panorama managed and Strata Cloud Manager managed Prisma Access, streamlining the integration process and enhancing security and accessibility.

These APIs use the [common SASE authentication](/sase/docs/getstarted) for service access and authorization.