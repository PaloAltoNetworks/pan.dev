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

AI Runtime Security Runtime API intercept is a threat detection service. The APIs offer a RESTful API service that protects your AI models, applications, and datasets by programmatically scanning prompts and models for threats, enabling robust protection across both public and private models with model-agnostic functionality.

You can integrate the AI security detection engine directly into your applications, to efficiently scan for various threats, including Prompt injections, Insecure outputs, and Sensitive data loss.

You can use the APIs to send prompts or model responses and receive a threat assessment with recommended actions.

## Prerequisites

Before getting started, ensure the following setup is completed as per the [AI Runtime Security Admin Guide](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/activate-your-ai-runtime-security-license):

1. Activate your AI Runtime Security API Intercept licenses.
2. Create a Deployment Profile for AI Runtime Security: API Intercept in your CSP.
3. Onboard AI Runtime Security API Intercept in Strata Cloud Manager.

## Requirements for API Usage

1. **API Key Token**: This token is generated during the onboarding process in Strata Cloud Manager. Include it in all API requests using the `x-pan-token` header.
2. **AI Security Profile Name**: The security profile created during onboarding. This profile name must be specified in the API request payload.
