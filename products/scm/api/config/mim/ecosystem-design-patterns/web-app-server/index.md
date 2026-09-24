---
id: ecosystem-design-patterns-web-app-server
title: "Web or Application Server"
sidebar_label: "Web or Application Server"
keywords:
  - Machine Identity Management
  - Ecosystem Design Patterns
---

**Web Servers and Application Servers host websites, applications and content for end users to access over internal or external networks.**

## Introduction

Organizations use machine identities to secure traffic to and from their workloads using Transport Layer Security (TLS) with HTTPS being the most common use case.

Sometimes those machine identities installed on a Cloud WAF, proxy, or Application Delivery Controller (ADC) or, in this case, on the Web or Application Server itself.

> 📘 Design Pattern: Web or Application Server
>
> This design pattern focuses on the use case of orchestrating the delivery of machine identities to the Web or App Server, as well as automating any configuration necessary to *activate* or *associate* those machine identities to target applications being managed by the Web or App Server.  

Before you begin, it's important to understand the "whats" and "whys" of *Web and App Servers*.

## What is it?

Both Web and App Servers are servers that hosts applications and services that are delivered to end users. Web or App Servers are typically deployed in a data center or cloud environment and are often managed by a DevOps team. Web or App Servers are often deployed in a load-balanced configuration to ensure high availability and scalability.

### Securing Traffic to Applications

Securing traffic to applications managed by the Web or App Server requires a machine identity. In order to automate the delivery of machine identities to these servers, CyberArk Certificate Manager - SaaS needs to have additional information about how a specific Web or App Server requires machine identities to be delivered and configured. Sometimes, as is the case with NGINX, the machine identity is installed directly onto the filesystem, and the NGINX configuration references that location. Other times, as is the case with Apache, the machine identity is installed into a keystore, and the Apache configuration references that keystore.

> ❗️ Quick Win!
>
> For App Servers that are able to utilize files or common keystores (PEM, JKS, PKCS#12) on the host filesystem, [Venafi already supports provisioning](https://docs.venafi.cloud/vaas/machines/provision-certificates/#common-keystore).

## Why is machine identity automation necessary?

Proper management of these machine identities is critical to the availability and security of the application being managed by the Web or App Server. When active machine identities expire, are misconfigured or become unavailable, outages happen.

> ❗️ Outages
>
> Workloads can become unavailable for many reasons and any such event can be described as an outage.
>
> When you choose to secure your workloads, you introduce an additional failure point, specifically the machine identity itself. This is because machine identities are designed to expire after some predefined duration. When machine identities expire they stop working and the workloads they protect become unavailable. A likely outcome of failing to mitigate against outages is negative impact to brand reputation and lost revenue.
>
> Automation using Certificate Manager - SaaS is a key defense against outages.

These types of outages can occur for a variety of reasons, including human error or oversight, unnecessary bottlenecks during approval workflows or a general **lack of automation**.

In addition to machine identities for each application, the solution must be capable of storing and using any additional configuration information and metadata required by the Web or App Server to use the machine identity once it is provisioned. This introduces another failure point, and another potential **outage** to watch out for.

Users of Certificate Manager - SaaS benefit from key outcomes solving common problems.

They are **automating everywhere**

- by removing manual steps from the machine identity management process, enabling teams to scale quickly, while still maintaining compliance and control.
- by enabling teams to use whatever tools they know and prefer, and not forcing them to wait for unnecessary approval step bottlenecks.

They are **preventing misuse and compromise** of machine identities in their organization

- by providing complete visibility and flexible policy to security teams, while maintaining that automation-enabled efficiency from above. If an application team doesn't have to wait for days for a machine identity, they are less likely to take matters into their own hands and utilize an unknown issuer.
- by being able to respond quickly to attacks and security events automatically.

They are **modernizing with speed and agility**

- by centralizing and embracing Certificate Manager, SaaS, which provides a flexible, enterprise-wide security strategy.
- by automating processes, creating audit trails and removing unnecessary risk which leads to better audits.
- by including security into the application development process early, enabling teams to collaborate vs. hinder or slow down.

They are stopping unnecessary outages

- by identifying, understanding and correcting situations and processes that could lead to an outage.
- by understanding that proper machine identity management is a shared responsibility between multiple teams, and working together increases the security posture of the organization. Developers like you help enable those teams to work together seamlessly.
- by being proactive instead of reactive.
- by doing ***all of the above***.
