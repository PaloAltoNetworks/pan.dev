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
# Error Codes

This page specifies the error codes for the Prisma AIRS AI Network: API intercept scan APIs.
An error response in the API appears in the following format:

```json
{
  "error": {
    "message": "Successfully scanned request"
  }
}
```

# HTTP Status Codes Reference

| HTTP Status Code | Description | Common Scenarios |
| :--- | :--- | :--- |
| **200** | Successfully processed request | Request completed successfully, response data returned |
| **400** | Bad Request - Invalid or malformed request | **Request Validation Issues**<br>• Empty request body<br>• Unreadable or malformed request body<br>• Wrong request format or content type<br>• Missing required fields<br><br>**Quota and Limits**<br>• Quota exceeded: API quota limit reached for job type<br>• Error Code: `QUOTA_EXCEEDED`<br>• Message: "Quota exceeded for {job_type} jobs"<br>• Applies to scan creation when tenant has exhausted their quota<br><br>**Target Validation (Management Plane)**<br>• Invalid connection parameters<br>• Missing or empty API endpoint<br>• Invalid API headers<br>• Invalid request body format<br>• API input key not found in request JSON<br>• Invalid API response key<br>• Target functionality test failed<br>• Authentication validation failed<br><br>**Custom Prompts (Management Plane)**<br>• Invalid prompt set configuration<br>• Invalid property names or values<br>• CSV format validation errors |
| **401** | Unauthenticated - Authentication failed | Missing or invalid authentication credentials |
| **403** | Forbidden - Access denied | Insufficient permissions, license issues, or EULA not accepted |
| **404** | Not Found - Resource not found | Requested resource doesn't exist or tenant isolation violation |
| **405** | Method Not Allowed | Using wrong HTTP method for endpoint |
| **409** | Conflict - Resource conflict | Resource already exists or concurrent modification detected |
| **422** | Unprocessable Entity - Validation failed | Request validation errors or malformed data |
| **500** | Internal Server Error | Unexpected server error or critical system failure |
