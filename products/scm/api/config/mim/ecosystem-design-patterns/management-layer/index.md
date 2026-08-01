---
id: ecosystem-design-patterns-management-layer
title: "Management Layer"
sidebar_label: "Management Layer"
keywords:
  - Machine Identity Management
  - Ecosystem Design Patterns
---

**In the context of enterprise security, "management layer" is a higher-level component that provides centralized control and coordination of the various *other,* lower-level components under its management. It can also be referred to as the orchestration layer, or the management/control plane.**

## Introduction

Organizations use machine identities to secure traffic to and from their workloads using Transport Layer Security (TLS) with HTTPS being the most common use case.

Sometimes those machine identities are installed at the application endpoint, itself (i.e. source code). Other times, they may be installed on a load balancer, [cloud WAF](/scm/api/config/mim/ecosystem-design-patterns/cloud-waf) or, in this case, used by the management layer.

> 📘 Design Pattern: Management Layer
>
> This design pattern focuses on the use case of adding and/or enhancing functionality of the management layer to be Venafi-aware.
In this design pattern, **the management layer is responsible for automation of machine identities** and Venafi is responsible for validating and responding to requests initiated by the management layer.

Before you begin, it's important to understand the "whats," "whys" and "hows" of various *management layer* solutions. 

## What is it?

The term "management layer" is somewhat generic, and can also be referred to by a few other terms such as "orchestration layer," "management/control plane," "central manager," etc. Different software products may have their own "productized" name as well.

Generally speaking, the primary use case for this "management layer" component is to provide a higher-level, more centralized view of all the devices, workloads, configurations, policies, etc. of the lower-level components in the infrastructure.

> 📘  EXAMPLE
>
> Consider [Citrix Application Delivery Management (ADM)](https://www.citrix.com/products/citrix-application-delivery-management/). ADM is a product from Citrix that provides centralized management and orchestration for Citrix's Application Delivery Controller (ADC) product line. It allows administrators to manage, configure, and deploy ADC apps and services from a single, centralized platform. This can help improve efficiency and reduce the time and effort needed to manage complex environments. ADM also provides additional features for monitoring and managing the performance and availability of ADC devices.

Because security is just one piece of the configuration the management layer is responsible for, it makes sense that any configuration updates are initiated there. Multiple sources of truth can lead to collisions and synchronization issues since one source may not be aware of recent changes made by the other.

For our purposes, the management layer should be considered the source of truth for ALL configuration information, including, but not limited to machine identities, used by the objects (devices/applications/services) under its management.

## Why is machine identity automation necessary?

Proper management of these machine identities is critical to the availability and security of the applications/devices/services under the purview of the management layer. When active machine identities expire or become unavailable, outages happen.

> ❗️ Outages
>
> Workloads can become unavailable for many reasons and any such event can be described as an outage.
>
> When you choose to secure your workloads, you introduce an additional failure point, specifically the machine identity itself. This is because machine identities are designed to expire after some predefined duration. When machine identities expire they stop working and the workloads they protect become unavailable. A likely outcome of failing to mitigate against outages is negative impact to brand reputation and lost revenue.
>
> Automation using Certificate Manager - SaaS is a key defense against outages.

These types of outages can occur for a variety of reasons, including human error or oversight, unnecessary bottlenecks during approval workflows or a general **lack of automation**.

The management layer *must* be aware of any and all information associated with a given machine identity and any workloads consuming it, so that it can proactively renew and re-provision on a schedule or ad-hoc, at the time of need.

> 📘  EXAMPLE
>
>A good example is the expiry date of a certificate. The management layer should recognize the expiry date is upcoming and, if desired by the user, proactively renew the certificate. Additionally, the management layer is responsible for providing relevant information back to Certificate Manager - SaaS in order for the InfoSec or PKI team to maintain complete visibility into all machine identities in use throughout the organization.

Users of Certificate Manager - SaaS benefit from key outcomes solving common problems.

They are **automating everywhere**

- by removing manual steps from the machine identity management process, enabling teams to scale quickly, while still maintaining compliance and control.
- by enabling teams to use whatever tools they know and prefer, and not forcing them to wait for unnecessary approval step bottlenecks.

They are **stopping unnecessary outages**

- by identifying, understanding and correcting situations and processes that could lead to an outage.
- by understanding that proper machine identity management is a shared responsibility between multiple teams, and working together increases the security posture of the organization. Developers like you help enable those teams to work together seamlessly.
- by being proactive instead of reactive.
- by doing ***all of the above***.
