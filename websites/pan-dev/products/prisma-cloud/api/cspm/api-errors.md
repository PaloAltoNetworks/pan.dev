---
id: api-errors
title: Error Responses
sidebar_label: Error Responses
---

Prisma Cloud REST API endpoints return standard HTTP error response codes. In some situations, the error response may also include additional information about the error in one of the following ways:
* A JSON object in the response body
```json
{
  "error": {
    "code": "BadArgument",
    "message": "Previous passwords cannot be reused",
    "target": "password",
    "details": {}
  }
}
```
* A custom HTTP header, `x-redlock-status`, that describes the error.

## Server Errors
HTTP error codes starting with "5", such as 501 or 503, indicate that the request could not be completed because of a server issue.

| HTTP Status Code    | Issue | Issue Description                                                                                   |
| --------------------|-------|-----------------------------------------------------------------------------------------------------| 
| 500 | Internal Server Error | An unexpected internal server error occurred. 
| 502 | Bad Gateway | The gateway or proxy server received an invalid response from the upstream server. 
| 503 | Service Unavailable | The server cannot handle the request because it is overloaded or down for maintenance. \n\n In such scenarios, the API will return a **Retry-After** header that indicates how long the client should wait before retrying.
| 504 | Gateway Timeout | The gateway or proxy server did not receive a timely response from the upstream server. |
## Reattempting Requests that Fail Due to a Server Error
To resolve a 5xx error, use the exponential backoff algorithm while retrying the request. The exponential backoff algorithm retries requests after waiting for an exponentially increasing time between subsequent reattempts. The wait time between retries and the number of retries can vary depending on your use case and network conditions. 
