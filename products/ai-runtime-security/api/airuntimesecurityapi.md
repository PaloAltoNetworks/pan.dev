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

AI Runtime Security: API intercept is a threat detection service. The APIs offer a RESTful API service that protects your AI models, applications, and datasets by programmatically scanning prompts and models for threats, enabling robust protection across both public and private models with model-agnostic functionality.

You can integrate the AI security detection engine directly into your applications, to efficiently scan for various threats, including Prompt injections, Insecure outputs, and Sensitive data loss.

The APIs let you scan AI prompts and AI model responses in real-time and to get threat assessments and recommended actions.

## Prerequisites

1. Create and associate a deployment profile for AI Runtime Security: API Intercept in your CSP. (Admin guide link to be added at GA).
2. Onboard AI Runtime Security API Intercept in Strata Cloud Manager ([SCM](http://stratacloudmanager.paloaltonetworks.com/)). (Admin guide link to be added at GA)
3. Manage applications, API keys, and security profiles through SCM. (Admin guide link to be added at GA).

## Requirements for API Usage

1. **API Key Token**: This token is generated during the onboarding process (prerequisites step 2) in SCM. Include it in all API requests using the `x-pan-token` header.
    - You can copy, regenerate, and rotate the API token.
      - Log in to SCM.
      - Navigate to **Insights > Activity Insights > AI Runtime Security API**.
    - At the top right corner, choose **Manage > API Keys**.
2. **AI Security Profile Name**: This is the security profile created during the onboarding process (prerequisites step 2) in SCM. Specify this profile name in the API request payload in the `ai_profile.profile_name` field.
