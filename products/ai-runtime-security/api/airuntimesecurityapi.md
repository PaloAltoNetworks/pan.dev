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

## Use Cases

Prerequisites:

In the AI security profile for all the 3 use cases, ensure that all the 3 detection types (Prompt Injection Detection, Malicious URL Detection, and AI Data Protection) are enabled, and configure the action to "Block" when the threat is detected.

### Use Case1: Detect Sensitive Financial Information

The request scans a prompt containing sensitive data such as bank account numbers, credit card numbers, API keys, and other sensitive data, to detect potential data exposure threats.

cURL Request:

```unset
curl -L 'http://localhost:39090/v1/scan/sync/request' \
--header 'Content-Type: application/json' \
--header 'x-pan-token: <your-API-key>' \
--header 'Accept: application/json' \
--data '{
  "tr_id": "string",
  "ai_profile": {
    "profile_id": "UUID",
    "profile_name": "string"
  },
  "metadata": {
    "app_name": "string",
    "app_user": "string",
    "ai_model": "string"
  },
  "contents": [
    {
      "prompt": "bank account 8775664322 routing number 2344567",
      "response": "string"
    }
  ]
}'
```

The expected response confirms whether sensitive data has been detected (dlp: true). If there is a DLP match (dlp: true), the category in the response will be set to "malicious". If no DLP threat is detected (dlp: false), the category will be "benign".
The specific action shown in the response is based on your security profile settings. For example, if DLP is enabled and the action is configured to "block" when a DLP threat is detected, the response will indicate that the action was "blocked."

```unset
{
  "action": "block",
  "category": "malicious",
  "profile_id": "2abba1a0-33ab-42f0-a25f-50eb2e466629",
  "profile_name": "airs-sec-profile",
  "prompt_detected": {
    "dlp": true,
    "injection": false,
    "url_cats": false
  },
  "report_id": "R1611eb31-9cb2-41c3-be04-e9d2587f4d36",
  "response_detected": {
    "dlp": false,
    "url_cats": false
  },
  "scan_id": "1611eb31-9cb2-41c3-be04-e9d2587f4d36"
}
```
