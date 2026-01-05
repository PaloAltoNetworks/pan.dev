---
id: introduction
title: "Prisma AIRS AI Red Teaming Introduction"
sidebar_label: "Introduction"
keywords:
  - Prisma AIRS API
  - Reference
  - Cloud
  - API
---

This Open API spec file represents the APIs available for the Prisma AIRS AI Red Teaming.

These APIs use the API key authentication and base URL.

To use the APIs, you must first activate and associate a deployment profile in Customer Support Portal for Prisma AIRS AI Red Teaming and then onboard the AI Red Teaming in Strata Cloud Manager. For licensing, onboarding, activation, and to obtain the API authentication key and profile name, refer to the Prisma AIRS AI Red Teaming Administration guide.

AI Red Teaming API provides an automated and secure solution for LLM Red Teaming, allowing organizations to evaluate the security and safety of GenAI systems. It leverages both an attack library and an LLM agent-based approach to perform vulnerability assessments.

## Key Features

* **Automated Red Teaming:** Run categorized LLM attacks, including jailbreaks, prompt injection, and input manipulations.
* **Human-Augmented Simulations:** Define attack objectives tailored to your business use case (such as finance and healthcare).
* **Customizable Attack Libraries:** Use an out-of-the-box database of hundreds of vulnerabilities and add your own attack prompt sets.
* **Extensive reporting:** Get detailed insights into the Red Teaming scans, risk score, and attack details.

## How it Works

1. Create a target for which you want to run a scan.
2. Submit a scan with your model endpoint.
3. AI Red Teaming runs automated attack simulations asynchronously.
4. Retrieve scan report results, including vulnerabilities, and risk assessments.

---

## Technical Information

### Base URL
All interactions with the Prisma AIRS AI Red Teaming APIs begin at the base URL. The base URL for AI Red Teaming is:
`https://api.sase.paloaltonetworks.com/ai-red-teaming`

### Authentication
This API uses OAuth 2.0 bearer token authentication, and your token must be included in the Authorization header:
`Authorization: Bearer YOUR_TOKEN_HERE`

For instructions on how to obtain an OAuth 2.0 token, see the [Access Tokens](https://pan.dev/scm/docs/access-tokens/) section.

---

## Contact
https://www.paloaltonetworks.com/company/contact-support

## License
Palo Alto Networks EULA