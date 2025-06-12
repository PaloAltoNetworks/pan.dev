---
id: airuntimesecurityapi
title: "Prisma AIRS AI Runtime Security: API Intercept"
sidebar_label: "Prisma AIRS AI Runtime Security: API Intercept"
slug: /prisma-airs/scan/api
keywords:
  - AIRS
  - Reference
  - Cloud
  - API
---

**Prisma AIRS AI Runtime Security: API Intercept** is a threat detection service designed to secure AI applications. It helps discover and protect applications using REST APIs by embedding Security-as-Code directly into your source code.

The scan API service scans prompts and responses in real-time to identify potential threats and provide threat assessments with actionable recommendations.
These APIs protect your AI models, AI applications, and AI datasets by programmatically scanning prompts and models for threats. These detection APIs enable robust protection across public and private models with model-agnostic functionality.

The APIs efficiently scan for various threats, including prompt injections, insecure outputs, AI agentic threats, and sensitive data loss.
To use these APIs, send prompts or model responses from your application and receive a threat assessment with recommended actions based on your AI security profile.

For licensing, onboarding, activation, and to obtain the API authentication key and profile name, refer to the [Prisma AIRS AI Runtime Security: API intercept](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview) administration documentation.

## Scan API Endpoints

The following are the API endpoints based on the regions you selected while creating Prisma AIRS AI Runtime Security: API intercept deployment profile:

- US: https://service.api.aisecurity.paloaltonetworks.com 
- EU (Germany): https://service-de.api.aisecurity.paloaltonetworks.com

## Prerequisites

1. Create and associate a [deployment profile](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview/ai-deployment-profile-airs-api-intercept) for Prisma AIRS AI Runtime Security: API intercept in your Customer Support Portal.
2. [Onboard Prisma AIRS AI Runtime Security: API Intercept](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview/onboard-api-runtime-security-api-intercept-in-scm) in Strata Cloud Manager.
3. [Manage applications, API keys, security profiles, and custom topics](https://docs.paloaltonetworks.com/ai-runtime-security/administration/prevent-network-security-threats/airs-apirs-manage-api-keys-profile-apps) in Strata Cloud Manager.

## Requirements for API Usage

1. **API Key Token**: This token is generated during the onboarding process in Strata Cloud Manager (see the onboarding prerequisite step above).
Include the API key token in all API requests using the `x-pan-token` header.
2. **AI Security Profile Name**: This is the API security profile you created during the onboarding process in Strata Cloud Manager (see the prerequisite step on creating an API security profile above).
Specify this profile name or the profile ID in the API request payload in the `ai_profile` field.

:::info
You can manage API keys and AI security profiles in Strata Cloud Manager.

1. Log in to [Strata Cloud Manager](http://stratacloudmanager.paloaltonetworks.com/).
2. Navigate to **Insights > Prisma AIRS > Prisma AIRS AI Runtime Security: API Intercept**.
3. In the top right corner, click:

- **Manage > API Keys** to copy, regenerate, or rotate the API key token.
- **Manage > Security Profiles** to fetch details or update AI security profiles.
- **Manage > Custom Topics** create or update custom topics for custom topic guardrails threat detections.

For complete details, refer to adminstration guide for the section on how to "manage applications, API Keys, security profiles, and custom topics".
:::

## Limitations

- One AI security profile per Tenant Service Group (TSG) - Limited to one security profile per group.
- One API key per deployment profile - Each deployment profile in the [Customer Support Portal](https://support.paloaltonetworks.com/Support/Index) allows a single API key.
- 2 MB maximum payload size per synchronous scan request - Limited to a maximum of 100 URLs per request.
- 5 MB maximum payload size per asynchronous scan request - Limited to a maximum of 100 URLs per request.
