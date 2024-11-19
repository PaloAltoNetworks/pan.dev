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

AI Runtime Security: API intercept is a threat detection service. The APIs offer a RESTful API service that protects your AI models, applications, and datasets by programmatically scanning prompts and models for threats, enabling robust protection across public and private models with model-agnostic functionality.

You can integrate the AI security detection engine directly into your applications, to efficiently scan for various threats, including Prompt injections, Insecure outputs, and Sensitive data loss.

The APIs let you scan AI prompts and AI model responses in real-time and to get threat assessments and recommended actions.

## Prerequisites

1. Create and associate a [deployment profile for AI Runtime Security: API Intercept](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview/ai-deployment-profile-airs-api-intercept) in your CSP.
2. [Onboard AI Runtime Security: API Intercept](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview/onboard-api-runtime-security-api-intercept-in-scm) in Strata Cloud Manager (SCM).
3. [Manage applications, API keys, and security profiles](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview/airs-apirs-manage-api-keys-profile-apps) in SCM.

## Requirements for API Usage

1. **API Key Token**: This token is generated during the onboarding process in SCM (see prerequisite step 2).
Include the API key token in all API requests using the `x-pan-token` header.
2. **AI Security Profile Name**: This is the security profile created during the onboarding process in SCM (see prerequisite step 2).
Specify this profile name or the profile ID in the API request payload in the `ai_profile` field.

:::info
You can manage API keys and AI security profiles in SCM.

1. Log in to Strata Cloud Manager [SCM](http://stratacloudmanager.paloaltonetworks.com/).
2. Navigate to **Insights > AI Runtime Security**.
3. Select API from the AI Runtime Security drop-down list at the top.
4. At the top right corner, choose:

- **Manage > API Keys** to copy, regenerate, or rotate the API key token.
- **Manage > Security Profiles** to fetch details or update AI security profiles.

For complete details, refer to the Manage Applications, API Keys, and Security Profiles Administration guide.
:::
