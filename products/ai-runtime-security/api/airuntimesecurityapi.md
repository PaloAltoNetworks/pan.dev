---
id: airuntimesecurityapi
title: "AI Runtime Security: API Intercept"
sidebar_label: "AI Runtime Security: API Intercept"
slug: /ai-runtime-security/scan/api
keywords:
  - AIRS
  - Reference
  - Cloud
  - API
---

**AI Runtime Security: API Intercept** is a threat detection service designed to secure AI applications. It helps discover and protect applications using REST APIs by embedding Security-as-Code directly into source code.

The scan API service scans prompt and responses in real-time to identify potential threats and provide threat assessments with actionable recommendations.
These APIs protect your AI models, AI applications, and AI datasets by programmatically scanning prompts and models for threats, enabling robust protection across public and private models with model-agnostic functionality.

You can integrate the AI Runtime Security: API intercept detection directly into your applications, to efficiently scan for various threats, including prompt injections, insecure outputs, and sensitive data loss.
To use these APIs, send prompts or model responses from your application and receive a threat assessment with recommended actions based on your AI security profile.

For licensing, onboarding, activation, and to obtain the API authentication key and profile name, refer to the [AI Runtime Security: API Intercept Overview](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview) administration documentation.

## Prerequisites

1. Create and associate a [deployment profile for AI Runtime Security: API Intercept](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview/ai-deployment-profile-airs-api-intercept) in your Customer Support Poral.
2. [Onboard AI Runtime Security: API Intercept](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview/onboard-api-runtime-security-api-intercept-in-scm) in Strata Cloud Manager.
3. [Manage applications, API keys, and security profiles](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview/airs-apirs-manage-api-keys-profile-apps) in Strata Cloud Manager.

## Requirements for API Usage

1. **API Key Token**: This token is generated during the onboarding process in Strata Cloud Manager (see prerequisite step 2).
Include the API key token in all API requests using the `x-pan-token` header.
2. **AI Security Profile Name**: This is the security profile created during the onboarding process in Strata Cloud Manager (see prerequisite step 2).
Specify this profile name or the profile ID in the API request payload in the `ai_profile` field.

:::info
You can manage API keys and AI security profiles in Strata Cloud Manager.

1. Log in to Strata Cloud Manager [SCM](http://stratacloudmanager.paloaltonetworks.com/).
2. Navigate to **Insights > AI Runtime Security**.
3. Select API from the AI Runtime Security drop-down list at the top.
4. At the top right corner, choose:

- **Manage > API Keys** to copy, regenerate, or rotate the API key token.
- **Manage > Security Profiles** to fetch details or update AI security profiles.

For complete details, refer to the Manage Applications, API Keys, and Security Profiles Administration guide.
:::

## Limitation

- One AI security profile per Tenant Service Group (TSG) - Limited to one security profile per group.
- One API key per deployment profile - Each deployment profile in the [Customer Support Portal](https://support.paloaltonetworks.com/Support/Index) allows a single API key.
- 2 MB maximum payload size per synchronous scan request - Limited to a maximum of 100 URLs per request.
- 5 MB maximum payload size per asynchronous scan request - Limited to a maximum of 100 URLs per request.
