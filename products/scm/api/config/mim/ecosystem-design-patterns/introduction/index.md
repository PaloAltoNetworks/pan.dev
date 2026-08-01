---
id: ecosystem-design-patterns
title: "Introduction"
sidebar_label: "Introduction"
keywords:
  - Machine Identity Management
  - Ecosystem Design Patterns
---

The *Design Patterns* section provides information, resources and guidance specific to the target use case you are building for. Watch this section for updates as we add more design patterns. If there's a design pattern you'd like to see, please let us know by [submitting a request](https://venafi-design-pattern-request.paperform.co/)

> 📘 What is a Design Pattern?
>
> A Design Pattern is a well-established and reusable pattern for a target use case. Design patterns provide best practices and guidelines for implementing efficient and maintainable integrations, addressing issues such as data flow direction, synchronization, and control between source and target systems.
>
> Design patterns are intended to be used as a starting point for developing integrated solutions, and should be adapted to meet the specific needs of the solution.

Design patterns may or may not benefit from code samples, depending on the complexity of the solution. If code samples are available, they will be provided here as well.

### Machine Identity Concepts

Before you begin working on your solution, it's important to understand some basic machine identity concepts and how they relate to solutions that will be integrated with CyberArk Certificate Manager - SaaS.

![Machine Identity Participants](/img/mim/design-patterns/ecosystem-participants-TLSPC.png)

#### Participants

Machine identities play a critical role in enabling secure, authenticated interactions among various machines, systems and services withing an organization's infrastructure.

Machine identities are created by machine identity *issuers*, used by machine identity *consumers*, and managed by Certificate Manager - SaaS.

##### Issuers

Machine Identity Issuers are responsible for creating new machine identities. Modern issuers are often ephemeral, widely distributed and deployed as code. Examples of machine identity issuers include more modern offerings like CyberArk *Workload Identity Manager* and *Google CAS*, and more traditional issuers like *Microsoft ADCS* and *EJBCA*.

Issuers are typically called via API by Certificate Manager - SaaS. Before organizations have adopted Certificate Manager - SaaS, issuers are often called directly by consumers, however this creates a scenario that becomes increasingly harder to maintain as more issuers and consumers are added to the environment over time.

##### Consumers

Machine Identity Consumers are the systems that use machine identities to secure information, like *web/application servers*, *load balancers*, and *cloud WAFs*. When building a solution for a target *consumer*, it's important to understand how the consumer uses machine identities, and how the consumer will interact with the machine identity *issuer*.

- Is [provisioning direction](#provisioning-direction) important?
- Does the consumer have the concept of "generational" machine identities?

##### Collectors

Machine Identity Collectors are responsible for gathering machine identities and ALL associated information across an organization's infrastructure. Collectors are not usually focused solely on machine identities, but rather on collecting information about all the different assets, systems and services in an organization's infrastructure. Collectors often fall into the category of Attack Surface Management, but should not be limited by that label. Examples of collectors include *Palo Alto Cortex Xpanse*, *Cryptosense*, *Tenable*, *Qualys* and others.

##### Certificate Manager - SaaS

Certificate Manager - SaaS is responsible for creating/renewing machine identities through **issuers** and provisioning them to **consumers** throughout an organization's infrastructure. Certificate Manager - SaaS should always be kept up-to-date with the most current machine identity information in use by **consumers**. Certificate Manager - SaaS can supplement its machine identity information with information from **collectors**, and vice versa, benefiting both participants.

> ℹ️ Utilize CyberArk Certificate Manager - SaaS
>
> [Certificate Manager - SaaS](https://www.cyberark.com/products/machine-identity-security/) is the best place to store and manage machine identities. It provides a single source of truth for machine identity information, and it's the only place where machine identities can be centrally managed and controlled for ALL the different *issuers* and *consumers* an organization may use. This ensures that machine identities are always up-to-date and secure, and that they are always in compliance with the organization's security policies.
>
> This means that as a solution developer, you don't need to worry about what's "on the other side." You can focus on your solution's integration with the Certificate Manager - SaaS, and let CyberArk handle the rest.

#### Provisioning Direction

When developing solutions that integrate with Certificate Manager - SaaS, it's important to understand the direction of data flow between participating systems. This is important because it will determine how the solution will be designed and implemented. Some systems may require a **"pull-provisioning"** model, while others may require **"push-provisioning"**. Whether a solution is designed to use pull-provisioning or push-provisioning will depend on the specific use case and the capabilities of the target system.

##### Pull-Provisioning

In this model, the *consumer* (either the target device or its management layer) will initiate the request and retrieve machine identities (and associated information) from Certificate Manager - SaaS. Information about where the certificate is stored and how it's used on the target device should be included in the original request, or reported back to Certificate Manager - SaaS after the certificate is retrieved and installed.

> ❗️ IMPORTANT
>
> Reporting installation information back to CyberArk is critical because it allows CyberArk to maintain an accurate inventory with the most current information about the certificate's location and usage.

Since the request is originating outside the Certificate Manager - SaaS, either from the target device or its management layer, subsequent renewal requests will also need to be initiated by the consumer. This means that the consumer (or management layer) will need to be aware of it's inventory and able to communicate with Certificate Manager - SaaS to request a new certificate when the current certificate is about to expire.

Ideally, this should be automated, and the consumer should be able to request new certificates from Certificate Manager - SaaS without any human intervention.

> ℹ️ Integration Approach
>
> For use cases targeting the "pull-provisioning" model, the solution should integrate with Certificate Manager - SaaS via [VCert](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-vcert) or [REST](/api-endpoints/saas/certificate-manager-saas-api).

##### Push-Provisioning

In this model, Certificate Managar - SaaS will initiate the request and push machine identities (and associated information) to the *consumer*. This means Certificate Manager - SaaS will initiate the process of renewing certificates prior to their expiration, and then provisioning the renewed certificates to the target and updating any necessary configuration so that the new certificate takes effect, either immediately or at a pre-configured time.

> ℹ️ Integration Approach
>
> For use cases targeting the "push-provisioning" model, the solution should utilize the [Connector Framework](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-machine-framework) to integrate with Certificate Manager - SaaS.

## General Guidelines & Best Practices

The following guidelines apply generically to all solutions integrated with Certificate Manager - SaaS, regardless of solution type, and should be referenced as the solution is developed & tested, and as new features or enhancements are added.

### Documentation

Provide clear, comprehensive documentation for your solution, including installation instructions, usage guidelines, and any configuration options that may be available. This will help users understand how to set up and use your solution effectively, and can reduce the number of support requests you receive.

> ℹ️ Keep it Close
>
> You can have the best documentation in the world, but if users can't find it, it's not going to help them. Make sure your documentation is easy to find and readily accessible. Once you're ready to publish your solution, you should include a link to your documentation on the Venafi Marketplace, so users can access it directly when browsing your solution.

Include information on troubleshooting common issues and any known limitations or caveats related to your solution. Regularly update your documentation to reflect any changes or improvements made to your solution.

### Naming Conventions

A standard naming convention should be adopted to avoid any collisions when objects (applications, certificates, machines, etc.) are created. Collisions can occur when the name you define already exists in Venafi. You can use the same prefix or suffix, and then add something unique to the name.

### Debug Logging

Whenever possible, it's **strongly encouraged** to build in debug logging that can be enabled by end users when troubleshooting issues in their environments.

### Security Considerations

When developing your solution, always consider the security implications of your design choices. Ensure that sensitive information, such as credentials, private keys, API tokens, etc. are stored securely and not exposed in logs or transmitted in plain text, unless in specific debugging/troubleshooting situations.
