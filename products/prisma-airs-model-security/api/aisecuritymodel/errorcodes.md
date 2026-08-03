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

This document describes all HTTP status codes and error scenarios used across the Management Plane and Data Plane APIs. Error responses from the API are always returned in JSON structure so that clients can parse and handle different failure modes appropriately.
An error response in the API appears in the following format:

```json
{
  "code": "error_code_identifier",
  "message": "Human-readable error description",
  "details": {}  // Optional, included for validation errors
}

```

# HTTP Status Codes Reference

| Status Code | Description | Common Scenarios |
| :--- | :--- | :--- |
| **200** | Successfully processed request | Request completed successfully, response data returned |
| **201** | Successfully created a resource | Creating a scan, creating a security group |
| **400** | Bad Request - Invalid or malformed request | Request Validation Issues: Empty request body, No files to scan, Unreadable or malformed request body, Wrong request format or content type, Malformed query parameters, Max scan labels exceeded, Security group source type mismatch |
| **401** | Unauthenticated - Authentication failed | Missing or invalid authentication credentials |
| **403** | Forbidden - Access denied | Insufficient permissions or expired/invalid deployment profile |
| **404** | Not Found - Resource not found | Requested resource doesn't exist or tenant isolation violation |
| **405** | Method Not Allowed | Using wrong HTTP method for endpoint |
| **409** | Conflict - Resource conflict | Attempting to delete a security group while it is in PENDING state |
| **422** | Unprocessable Entity - Validation failed | Request validation errors or malformed request body |
| **500** | Internal Server Error | Unexpected server error |
