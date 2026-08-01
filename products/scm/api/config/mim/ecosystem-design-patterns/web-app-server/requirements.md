---
id: ecosystem-design-patterns-web-app-server-requirements
title: "Requirements & Considerations"
sidebar_label: "Requirements & Considerations"
keywords:
  - Machine Identity Management
  - Ecosystem Design Patterns
---

When developing an **Web or App Server** solution for Certificate Manager - SaaS, you should always build with the goal of certification in mind.

> ✅ Certificate Manager - SaaS Certification
>
> Certified solutions see increased adoption from users. [Find out more!](/scm/api/config/mim/certification)

## Minimum Requirements

- The solution must automate the delivery of *any* necessary certificate(s) required for the security of applications managed by the Web or App Server.
- The solution must perform any necessary updates to any bindings/configurations/associations attached to the machine identity in order to achieve full automation.
- If possible, The solution must report back to Certificate Manager - SaaS all installed locations(s) and necessary metadata (service/port, profile, etc.)of the machine identities involved in the automation. If changes are made to the configuration on the Web or App Server, the solution must be able to detect and report those changes back to Certificate Manager - SaaS.
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
- Provide the ability to import existing machine identities in use by the Web or App Server to Venafi for comprehensive visibility and rapid onboarding.

## Primers

We think you'll find the following references helpful when developing your solution.

- [Web or App Server](https://en.wikipedia.org/wiki/Application_server) - Wikipedia
- [NGINX Explained in 100 Seconds](https://www.youtube.com/watch?v=JKxlsvZXG7c) - YouTube

If you've found other articles or tools that you think should be included here, [please let us know](mailto:ecosystem@venafi.com?subject=ecosystem.venafi.com+feedback-App+Server+Overview)!

## Success Stories

Existing solutions that fit this use case from the Venafi Marketplace:

- [NGINX Web Server](https://community.cyberark.com/marketplace/s/#a35Vy000000V3EqIAK-a39Vy0000033DztIAE)
- [Apache HTTP Server](https://community.cyberark.com/marketplace/s/#a35Vy000000V3EsIAK-a39Vy0000033CUPIA2)
- [Oracle HTTP Server](https://community.cyberark.com/marketplace/s/#a35Vy000000V3CzIAK-a39Vy0000033CSaIAM)
- [Microsoft IIS](https://community.cyberark.com/marketplace/s/#a35Vy000000V3G2IAK-a39Vy0000033CVWIA2)
