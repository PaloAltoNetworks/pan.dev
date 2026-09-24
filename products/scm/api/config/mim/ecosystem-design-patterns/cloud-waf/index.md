---
id: ecosystem-design-patterns-cloud-waf
title: "Cloud WAF"
sidebar_label: "Cloud WAF"
keywords:
  - Machine Identity Management
  - Ecosystem Design Patterns
---

**Web Application Firewalls (WAFs) help protect web applications by monitoring and filtering traffic between the app and the internet.**

## Introduction

Organizations use machine identities to secure traffic to and from their workloads using Transport Layer Security (TLS) with HTTPS being the most common use case.

Sometimes those machine identities are installed at the application endpoint, itself (i.e. source code). Other times, they may be installed on a load balancer, proxy or, in this case, a Cloud WAF.

> 📘 Design Pattern: Cloud WAF
>
> This design pattern focuses on the use case of orchestrating the delivery of machine identities to the WAF, as well as automating any configuration necessary to *activate* or *associate* those machine identities to target applications being secured by the WAF.  

Before you begin, it's important to understand the "whats" and "whys" of *Cloud WAFs*.

## What is it?

A WAF is a type of reverse proxy which protects the application itself from vulnerabilities caused by malicious activity. WAFs use machine identities in one of two ways:

- Securing traffic to the admin interface of the WAF itself
- Securing traffic to the applications being managed by the WAF

### Securing Traffic to the Admin Interface

While WAFs don't typically protect the traffic to their own administration interfaces in the same way they do for managed applications, ensuring that administrator traffic is encrypted with an enterprise-trusted machine identity is just as important. If that traffic is not secured, admin credentials are at risk of leaking. If operations involving the machine identity are not automated, admins can experience outages when logging in to make changes. This could potentially present a cascading effect if they are investigating an ongoing threat or mitigating an issue.

### Securing Traffic to Applications

Securing traffic to applications managed by the WAF is slightly more complex since there can be multiple applications being managed by a single WAF, and each application needs its own machine identity. In addition, the machine identity must be installed on the WAF and configured to be used by the application. This is where automation becomes critical.
<!-- 
#### The WAF has a built-in Certificate Authority (CA)

In this scenario, the WAF terminates the original TLS connection, and uses its built-in CA to issue new machine identities for traffic between the WAF and the application. Some next-gen WAFs can generate machine identities at [just-in-time](https://www.ssh.com/academy/iam/just-in-time-access) speed. It's critical that every machine identity is trusted by the organization, and every issuance is known and traceable by Certificate Manager - SaaS.

#### The WAF stores a copy of the machine identity (including the private key) for each app

In this scenario, the WAF maintains a copy of the machine identity for each application under management. When a machine identity is renewed, both the application and the WAF will need the new version. -->

## Why is machine identity automation necessary?

Proper management of these machine identities is critical to the availability and security of the applications being managed by the WAF. When active machine identities expire or become unavailable, outages happen.

> ❗️ Outages
>
> Workloads can become unavailable for many reasons and any such event can be described as an outage.
>
> When you choose to secure your workloads, you introduce an additional failure point, specifically the machine identity itself. This is because machine identities are designed to expire after some predefined duration. When machine identities expire they stop working and the workloads they protect become unavailable. A likely outcome of failing to mitigate against outages is negative impact to brand reputation and lost revenue.
>
> Automation using Certificate Manager - SaaS is a key defense against outages.

These types of outages can occur for a variety of reasons, including human error or oversight, unnecessary bottlenecks during approval workflows or a general **lack of automation**.

In addition to machine identities for each application, the solution must be capable of storing and using any additional configuration information and metadata required by the WAF to use the machine identity once it is provisioned. This introduces another failure point, and another potential **outage** to be aware of.

Users of Certificate Manager - SaaS benefit from key outcomes solving common problems.

They are **automating everywhere**

- by removing manual steps from the machine identity management process, enabling teams to scale quickly, while still maintaining compliance and control.
- by enabling teams to use whatever tools they know and prefer, and not forcing them to wait for unnecessary approval step bottlenecks.

They are **preventing misuse and compromise** of machine identities in their organization

- by providing complete visibility and flexible policy to security teams, while maintaining that automation-enabled efficiency from above. If an application team doesn't have to wait for days for a machine identity, they are less likely to take matters into their own hands and utilize an unknown issuer.
- by being able to respond quickly to attacks and security events automatically.

They are **modernizing with speed and agility**

- by centralizing and embracing Certificate Manager - SaaS, which provides a flexible, enterprise-wide security strategy.
- by automating processes, creating audit trails and removing unnecessary risk which leads to better audits.
- by including security into the application development process early, enabling teams to collaborate vs. hinder or slow down.

They are stopping unnecessary outages

- by identifying, understanding and correcting situations and processes that could lead to an outage.
- by understanding that proper machine identity management is a shared responsibility between multiple teams, and working together increases the security posture of the organization. Developers like you help enable those teams to work together seamlessly.
- by being proactive instead of reactive.
- by doing ***all of the above***.
