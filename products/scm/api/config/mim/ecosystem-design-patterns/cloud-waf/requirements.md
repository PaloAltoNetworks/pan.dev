---
id: ecosystem-design-patterns-cloud-waf-requirements
title: "Requirements & Considerations"
sidebar_label: "Requirements & Considerations"
keywords:
  - Machine Identity Management
  - Ecosystem Design Patterns
---

When developing **Cloud WAF** solutions for Certificate Manager - SaaS, you should always build with the goal of certification in mind.

> ✅ Certificate Manager - SaaS Certification
>
> Certified solutions see increased adoption from users. [Find out more!](/scm/api/config/mim/certification)

## Minimum Requirements

- The solution must automate the delivery of *any* necessary certificate(s) required for the security of applications managed by the WAF.
- The solution must perform any necessary updates to any bindings/configurations/associations attached to the machine identity in order to achieve full automation.
- The solution must report back to Certificate Manager - SaaS all installed locations(s) and necessary metadata (service/port, profile, etc.)of the machine identities involved in the automation. If changes are made to the configuration on the WAF, the solution must be able to detect and report those changes back to Certificate Manager - SaaS.
- If possible, Certificate Manager - SaaS must be able to continuously validate any machine identity is installed at any known location(s).

> ✅ Focus on UX
>
> The best solutions will require as little, if any, human interaction as possible after initial configuration.**

## Security Considerations

- The solution should be developed with standard security best practices in mind.
- The solution should make no attempts to harvest user data.
- Effective data validation should be implemented to catch errors.
  - Values should be checked before being passed to functions in code.
  - Values should be checked before being passed to Certificate Manager - SaaS or target product/platform/service.

## Building a Better User Experience

We understand that every target product is different and some functionality may not be supported. The following additional requirements **greatly** enhance the user experience, provide additional value to teams and organizations and should be implemented if at all possible. 

- Renewal of any existing machine identities in use would be transparent to end users and not cause any downtime.
- Provide the ability to import existing machine identities in use by the WAF to Certificate Manager - SaaS for comprehensive visibility and rapid onboarding.

## Primers

We think you'll find the following references helpful when developing your solution.

- [WAF](https://en.wikipedia.org/wiki/Web_application_firewall) - Wikipedia
- [What is a WAF](https://www.youtube.com/watch?v=p8CQcF_9280) - YouTube

If you've found other articles or tools that you think should be included here, [please let us know](mailto:ecosystem@venafi.com?subject=ecosystem.venafi.com+feedback-Cloud+WAF+Overview)!

## Success Stories

Existing solutions that fit this use case:

*Existing Solutions From the CyberArk Marketplace:*

- [Imperva](https://community.cyberark.com/marketplace/s/#a35Vy000000V3EVIA0-a39Vy0000033CU3IAM)

*From elsewhere:*

- [Radware](https://www.radware.com/products/cloud-waf-service/)
