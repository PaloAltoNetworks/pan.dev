---
id: errorcodes
title: "Error Codes"
sidebar_label: "Error Codes"
keywords:
  - Prisma AIRS API
  - Reference
  - Cloud
  - API
---

This page specifies the error codes for the Prisma AIRS AI Network: API intercept scan APIs.
An error response in the API appears in the following format:

```json
{
  "error": {
    "message": "Successfully scanned request"
  }
}
```

| HTTP Status Code | Description | Common Scenario |
|---|---|---|
| **200** | Successfully scanned request | The request was completed successfully, and the scan results were returned |
| **400** | Bad Request - Request data is invalid or malformed | - Empty request body<br>- Unreadable request body<br>- Wrong request format<br>- No scan content provided in the scan request<br>- Both prompt and response are null<br>- Empty prompt: Scan request content's prompt is empty<br>- Empty response: Scan request content's response is empty<br>- No scan IDs provided<br>- Too many scan IDs: maximum 5 scan IDs allowed<br>- Scan ID length exceeds maximum allowed characters (36 characters allowed)<br>- Invalid scan ID format<br>- Invalid scan ID<br>- No report IDs provided<br>- Too many report IDs: maximum 5 report IDs allowed<br>- Report ID length exceeds maximum length (37 characters allowed)<br>- Profile ID invalid: Missing or bad profile ID format, must follow UUID format (for example, 12345678-0000-1234-1234-123456789012)<br>- Profile name invalid: Missing profile name or length exceeds the 100 characters limit |
| **401** | Unauthenticated - Not Authenticated | - Missing API key or Oauth token |
| **403** | Forbidden - Invalid API Key | -  Invalid, revoked, or expired API key |
| **404** | Not Found - Resource is not found | - Invalid API endpoint |
| **405** | Method Not Allowed | - Using the wrong HTTP method (Refer to the Scan endpoints [reference docs](https://pan.dev/prisma-airs/api/airuntimesecurity/prisma-airs-ai-runtime-api-intercept/) for the relevant methods for each endpoint)<br>- Endpoint doesn't support the requested method |
| **413** | Request Too Large - The request body is too large | - Scan content exceeds [size limits](https://pan.dev/prisma-airs/scan/api/) |
| **415** | Unsupported Media Type | - Missing Content-Type header<br>- Content-Type is not application/json |
| **429** | Too Many Requests - Request exceeds the limit | - API rate limit exceeded (Refer to the [limitations](https://pan.dev/prisma-airs/scan/api/) page for details)<br>- Too many concurrent scans<br>Limitations<br>* Synchrounous & asynchronous scans are limited based on API call quota<br>* Scan results and reports are not subject to an API call quota, but are subject to a 10 requests limit per minute|
| **500** | Internal Server Error | - Unexpected server error |
