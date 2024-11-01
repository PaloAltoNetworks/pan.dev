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

1. Onboard and activate your API account in [Strata Cloud Manager](https://stratacloudmanager.paloaltonetworks.com/).
2. Get the API key and the sample code template you can embed to discover and detect threats.
   - You need the API key to authenticate your application to the AI Runtime Security API. Enter this API key as the **x-pan-token** header in your API requests.
3. Create an AI Runtime Security API profile to enforce security policies.
4. Trigger some sync and async threat requests against your security profile.
5. Refer to the following API reference docs.
