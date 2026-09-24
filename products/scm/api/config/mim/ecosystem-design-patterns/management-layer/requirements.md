---
id: ecosystem-design-patterns-management-layer-requirements
title: "Requirements & Considerations"
sidebar_label: "Requirements & Considerations"
keywords:
  - Machine Identity Management
  - Ecosystem Design Patterns
---

When developing **Management Layer** solutions for CyberArk Certificate Manager - SaaS, you should always build with the goal of certification in mind.

> ✅ Certificate Manager - SaaS Certification
>
> Certified solutions see increased adoption from users. [Find out more!](/scm/api/config/mim/certification)

## Minimum Requirements

- The solution must be able to request certificates from Venafi.
- The solution must automate the delivery of *any* necessary certificate(s) required for the security of applications managed by the management layer.
- The solution must perform any necessary updates to any bindings/configurations/associations attached to the machine identity.
- The solution must report back to Certificate Manager - SaaS all installed locations(s) and necessary metadata (service/port, profile, etc.)of the any certificates obtained through Venafi.
- If possible, the solution should store relevant, associated metadata of the certificate (like expiry date) which can be utilized for automated operations.
- If possible, Certificate Manager - SaaS must be able to continuously validate any machine identity is installed at any known location(s). "Validation" can take many forms. The important part is that the solution is able to detect any changes and report back to Venafi if a certificate is removed or replaced.

> ✅ Focus on UX
>
> The best solutions will require as little, if any, human interaction as possible after initial configuration.

## Security Considerations

- The solution should be developed with standard security best practices in mind.
- The solution should make no attempts to harvest user data.
- Effective data validation should be implemented to catch errors.
  - Values should be checked before being passed to functions in code.
  - Values should be checked before being passed to Venafi or target product/platform/service.

## Building a Better User Experience

We understand that every target product is different and some functionality may not be supported.
The following additional requirements **greatly** enhance the user experience, provide additional value to teams and organizations and should be implemented if at all possible.

- Renewal of any existing machine identities in use would be transparent to end users and not cause any downtime.
- Provide the ability to import existing machine identities in use by the management layer and any lower-level components to Venafi for comprehensive visibility and rapid onboarding.

## Primers

We think you'll find the following references helpful when developing your solution.

- [F5 Networks: Understanding Application Delivery Controllers](https://www.f5.com/services/resources/white-papers/understanding-application-delivery-controllers) - This white paper from F5 Networks provides an overview of ADCs, including their management and control components.
- [Citrix ADC: Management and Analytics System](https://docs.citrix.com/en-us/citrix-application-delivery-management-service.html) - This documentation from Citrix discusses the management and analytics system for Citrix ADCs, which serves as the control plane for managing and monitoring the ADCs.

- [A10 Networks: Centralized Management and Analytics](https://www.a10networks.com/products/a10-harmony-controller) - This product page from A10 Networks describes the A10 Harmony Controller, which provides centralized management and analytics for application delivery and security solutions, including ADCs.

- [HP Web Jetadmin: Printer Fleet Management](https://www8.hp.com/us/en/solutions/business-solutions/printingsolutions/wja.html) - This product page from HP presents HP Web Jetadmin, a web-based printer management solution that offers control and monitoring for printer fleets.

If you've found other articles or tools that you think should be included here, [please let us know](mailto:ecosystem@venafi.com?subject=ecosystem.venafi.com+feedback-Management+Layer+Overview)!

## Success Stories

Existing solutions that fit this use case:

*From the Venafi Marketplace:*

- [F5 BIG-IQ](https://community.cyberark.com/marketplace/s/#a35Vy000000V3D2IAK-a39Vy0000033CSdIAM)
- [NetScaler Console Service](https://community.cyberark.com/marketplace/s/#a35Vy000000V3D1IAK-a39Vy0000033CScIAM)
- [Device Authority KeyScaler](https://community.cyberark.com/marketplace/s/#a35Vy000000V3D0IAK-a39Vy0000033CSbIAM)

*From elsewhere:*

- [Fortinet FortiManager](https://www.fortinet.com/products/management/fortimanager)
- [Palo Alto Panorama](https://www.paloaltonetworks.com/network-security/panorama)
- [Juniper MCM](https://www.juniper.net/documentation/us/en/software/jatp/jatp-quickstart/topics/concept/jatp-manager-of-central-managers-mcm.html)
