---
id: ecosystem-design-patterns-adc-requirements
title: "Requirements & Considerations"
sidebar_label: "Requirements & Considerations"
keywords:
  - Machine Identity Management
  - Ecosystem Design Patterns
---

When developing **ADC** solutions for Certificate Manager - SaaS, you should always build with the goal of certification in mind.

> ✅ Certificate Manager - SaaS Certification
>
> Certified solutions see increased adoption from users. [Find out more!](/scm/api/config/mim/certification)

## Minimum Requirements

- The solution must automate the delivery of *any* necessary certificate(s) required for the security of applications managed by the ADC.
- The solution must perform any necessary updates to any bindings/configurations/associations attached to the machine identity in order to achieve full automation.
- The solution must report back to Certificate Manager - SaaS all installed locations(s) and necessary metadata (service/port, profile, etc.)of the machine identities involved in the automation. If changes are made to the configuration on the ADC, the solution must be able to detect and report those changes back to Certificate Manager - SaaS.
- If possible, Certificate Manager - SaaS must be able to continuously validate any machine identity is installed at any known location(s).

> ✅ Focus on UX
>
> The best solutions will require as little, if any, human interaction as possible after initial configuration.**

## Security Considerations

- The solution should be developed with standard security best practices in mind.
- The solution should make no attempts to harvest user data.
- Effective data validation should be implemented to catch errors.
  - Values should be checked before being passed to functions in code.
  - Values should be checked before being passed to Venafi or target product/platform/service.

## Building a Better User Experience

We understand that every target product is different and some functionality may not be supported. The following additional requirements **greatly** enhance the user experience, provide additional value to teams and organizations and should be implemented if at all possible. 

- Renewal of any existing machine identities in use would be transparent to end users and not cause any downtime.
- Provide the ability to import existing machine identities in use by the ADC to Venafi for comprehensive visibility and rapid onboarding.

## Primers

We think you'll find the following references helpful when developing your solution.

- [ADC](https://en.wikipedia.org/wiki/Application_delivery_controller) - Wikipedia
- [What is Application Delivery](https://www.youtube.com/watch?v=AJbUX0vx7H8) - YouTube

If you've found other articles or tools that you think should be included here, [please let us know](mailto:ecosystem@venafi.com?subject=ecosystem.venafi.com+feedback-ADC+Overview)!

## Success Stories

Existing solutions that fit this use case:

*Existing Solutions From the Venafi Marketplace:*

- [F5 BIG-IP](https://community.cyberark.com/marketplace/s/#a35Vy000000V3FIIA0-a39Vy0000033CUmIAM)
- [NetScaler ADC](https://community.cyberark.com/marketplace/s/#a35Vy000000V3DpIAK-a39Vy0000033CTNIA2)
- [A10 Networks Thunder](https://community.cyberark.com/marketplace/s/#a35Vy000000V3EQIA0-a39Vy0000033CTyIAM)
- [Array Networks APV](https://community.cyberark.com/marketplace/s/#a35Vy000000V3F9IAK-a39Vy0000033CUeIAM)
- [VMware NSX Load Balancer](https://community.cyberark.com/marketplace/s/#a35Vy000000V3EUIA0-a39Vy0000033CU2IAM)
- [Radware Alteon Load Balancer & ADC](https://community.cyberark.com/marketplace/s/#a35Vy000000V3EXIA0-a39Vy0000033CU5IAM)

*From elsewhere:*

- [Barracuda Load Balancer ADC](https://www.barracuda.com/products/application-cloud-security/load-balancer)
- [Kemp Loadmaster](https://kemptechnologies.com/application-delivery-controllers)
