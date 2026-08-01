---
id: ecosystem-design-patterns-concepts
title: "Machine Identity Concepts"
sidebar_label: "Machine Identity Concepts"
keywords:
  - Machine Identity Management
  - Ecosystem Design Patterns
---

Before you begin working on your solution, it's important to understand some basic machine identity concepts and how they relate to solutions that will be integrated with CyberArk Certificate Manager - SaaS.

![Machine Identity Participants](/img/mim/design-patterns/ecosystem-participants-TLSPC.png)

## Certificate Manager - SaaS Participants

Machine identities play a critical role in enabling secure, authenticated interactions among various machines, systems and services withing an organization's infrastructure.

Machine identities are created by machine identity *issuers*, used by machine identity *consumers*, and managed by Certificate Manager - SaaS.

### Issuers

Machine Identity Issuers are responsible for creating new machine identities. Modern issuers are often ephemeral, widely distributed and deployed as code. Examples of machine identity issuers include more modern offerings like CyberArk *Workload Identity Manager* and *Google CAS*, and more traditional issuers like *Microsoft ADCS* and *EJBCA*.

Issuers are typically called via API by Certificate Manager - SaaS. Before organizations have adopted Certificate Manager - SaaS, issuers are often called directly by consumers, however this creates a scenario that becomes increasingly harder to maintain as more issuers and consumers are added to the environment over time.

**Machine Identity Issuers are integrated using [ACME](https://docs.venafi.cloud/vaas/certificates/ca/adding-acme-ca).**

### Consumers

Machine Identity Consumers are the systems that use machine identities to secure information, like *web/application servers*, *load balancers*, and *cloud WAFs*. When building a solution for a target *consumer*, it's important to understand how the consumer uses machine identities, and how the consumer will interact with the machine identity *issuer*.

- Is [provisioning direction](#provisioning-direction) important?
- Does the consumer have the concept of "generational" machine identities?

> ℹ️ "Generational Machine Identities"
>
> Some consumers have the concept of "generational" machine identities, where a new machine identity is created and provisioned to the consumer before the current machine identity expires. This allows the consumer to seamlessly transition from the current machine identity to the new machine identity without any downtime or service interruption. It's also sometimes possible and necessary to "roll back" to previous generations of the machine identity if there is a problem after a renewal.

**Machine Identity Consumers are typically integrated using [VCert](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-vcert), [REST APIs,](/api-endpoints/saas/certificate-manager-saas-api) or the [Connector Framework](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-machine-framework) depending on the desired [provisioning direction](#provisioning-direction) and specific features of the target consumer.**

#### Management Layer Consumers

In some cases, there is a management layer which is responsible for management of the *entire* configuration of multiple end consumers. This management layer is responsible for requesting machine identities from Venafi, and then provisioning them to the consumer. The management layer may also be responsible for reporting information about the machine identity back to Venafi, like where the machine identity is stored and how it's used on the consumer. Reporting this information back to Venafi is critical because it allows Venafi to maintain an accurate inventory with the most current information about the certificate's location and usage.

**Machine Identity Management Layer Consumers are typically integrated using [VCert](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-vcert) or [REST APIs](/api-endpoints/saas/certificate-manager-saas-api).**

### Collectors

Machine Identity Collectors are responsible for gathering machine identities and ALL associated information across an organization's infrastructure. Collectors are not usually focused solely on machine identities, but rather on collecting information about all the different assets, systems and services in an organization's infrastructure. Collectors often fall into the category of Attack Surface Management, but should not be limited by that label. Examples of collectors include [*Palo Alto Cortex Xpanse*](https://www.paloaltonetworks.com/cortex/cortex-xpanse), [*SandboxAQ*](https://www.sandboxaq.com/solutions/security-suite), [*Tenable*](https://www.tenable.com/), [*Qualys*](https://community.qualys.com/api/) and others.

**Machine Identity Collectors are typically integrated using [REST APIs](/api-endpoints/saas/certificate-manager-saas-api).**

### Notifiers

Machine Identity Notifiers essentially act as channels for alerts and communications. They are responsible for sending notifications to interested parties when certain events occur. Examples of notifiers include [*Slack*](https://slack.dev/), [*PagerDuty*](https://developer.pagerduty.com/), [*Splunk*](https://dev.splunk.com/), [*Microsoft Teams*](https://developer.microsoft.com/en-us/microsoft-teams), [*Twilio*](https://www.twilio.com/docs), and others.

**Machine Identity Notifiers are usually integrated using [webhooks](https://docs.venafi.cloud/api/logging/t-event-logging-webhook-via-api/).**

### Provisioners

Machine Identity Provisioners are responsible for provisioning machine identities to target systems. Provisioners are often used in conjunction with collectors, and are responsible for provisioning machine identities to the target systems that were discovered by the collector. Examples of provisioners include [*Terraform*](https://registry.terraform.io/providers/Venafi/venafi/latest/docs), [*Ansible*](https://galaxy.ansible.com/venafi/machine_identity), [*AWS CloudFormation*](https://aws.amazon.com/cloudformation/), and others.

**Machine Identity Provisioners are typically integrated using [VCert](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-vcert). If functionality beyond VCert is required, [REST APIs](/api-endpoints/saas/certificate-manager-saas-api) should be considered.**

### Certificate Manager - SaaS

Certificate Manager - SaaS is responsible for creating/renewing machine identities through **issuers** and provisioning them to **consumers** throughout an organization's infrastructure. Certificate Manager - SaaS should always be kept up-to-date with the most current machine identity information in use by **consumers**. Certificate Manager - SaaS can supplement its machine identity information with information from **collectors**, and vice versa, benefiting both participants.

> ℹ️ Utilize the Certificate Manager - SaaS
>
> [CyberArk Certificate Manager - SaaS](https://www.cyberark.com/products/machine-identity-security/) is the best place to store and manage machine identities. It provides a single source of truth for machine identity information, and it's the only place where machine identities can be centrally managed and controlled for ALL the different *issuers* and *consumers* an organization may use. This ensures that machine identities are always up-to-date and secure, and that they are always in compliance with the organization's security policies.
>
> This means that as a solution developer, you don't need to worry about what's "on the other side.". You can focus on your solution's integration with the Certificate Manager - SaaS, and let CyberArk handle the rest.

## Provisioning Direction

When developing solutions that integrate with Certificate Manager - SaaS, it's important to understand the direction of data flow between participating systems. This is important because it will determine how the solution will be designed and implemented. Some systems may require a **"pull-provisioning"** model, while others may require **"push-provisioning"**. Whether a solution is designed to use pull-provisioning or push-provisioning will depend on the specific use case and the capabilities of the target system.

### Pull-Provisioning

In this model, the *consumer* (either the target device or its management layer) will initiate the request and retrieve machine identities (and associated information) from Certificate Manager - SaaS. Information about where the certificate is stored and how it's used on the target device should be included in the original request, or reported back to Certificate Manager - SaaS after the certificate is retrieved and installed.

![Pull Provisioning from Consumer](https://devhub-assets.venafi.cloud/design+patterns/pull-from-consumer+(1).png)

> ❗️ IMPORTANT
>
> Reporting installation information back to Certificate Manager - SaaS is critical because it allows Certificate Manager - SaaS to maintain an accurate inventory with the most current information about the certificate's location and usage.

![Pull Provisioning from Management Layer or Provisioner](/img/mim/design-patterns/pull-from-ml.png)

Since the request is originating outside Certificate Manager - SaaS, either from the target device or its management layer, subsequent renewal requests will also need to be initiated by the consumer. This means that the consumer (or management layer) will need to be aware of it's inventory and able to communicate with Certificate Manager - SaaS to request a new certificate when the current certificate is about to expire.

Ideally, this should be automated, and the consumer should be able to request new certificates from Certificate Manager - SaaS without any human intervention.

**Solutions planning to use the "pull-provisioning" model should integrate with Certificate Manager - SaaS via [VCert](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-vcert) or [REST](/api-endpoints/saas/certificate-manager-saas-api).**

### Push-Provisioning

In this model, Certificate Manager - SaaS will initiate the request and push machine identities (and associated information) to the *consumer*. This means Certificate Manager - SaaS will initiate the process of renewing certificates prior to their expiration, and then provisioning the renewed certificates to the target and updating any necessary configuration so that the new certificate takes effect, either immediately or at a pre-configured time.

![Push Provisioning to Consumer](/img/mim/design-patterns/push-to-consumer.png)

**Solutions planning to use the "push-provisioning" model should utilize the [Connector Framework](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-machine-framework) to integrate with Certificate Manager - SaaS.**
