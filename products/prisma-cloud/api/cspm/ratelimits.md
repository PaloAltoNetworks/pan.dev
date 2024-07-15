---
id: rate-limits
title: Rate Limits
sidebar_label: Rate Limits
---

Prisma Cloud APIs use rate limiting to protect service performance and availability. Rate limiting is enforced on the following API metrics: 
- **Request Rate Limit:** Number of individual requests allowed in a given duration (usually seconds) by the endpoint.
- **Burst Rate:** Maximum number of concurrent requests allowed in one second.

The actual limits (rates) enforced on both metrics may vary across API endpoints. The limits applicable to a specific endpoint are listed on the endpoint's documentation page. 

Prisma Cloud APIs enforce the applicable rate limits on a **per-user** basis using a key generated from the user’s authentication token in API requests. If a user has multiple authentication tokens, the limits apply to the user and not to the discrete authentication tokens.

### Rate Limit Response Headers

APIs that are subject to rate limits will include relevant `X-RateLimit-*` response headers.

| Header Name | Header Description |
| ----------- | ------------------ |
| `X-RateLimit-Burst-Capacity` | Number of *concurrent* requests allowed for the endpoint |
| `X-RateLimit-Remaining`  | Number of requests remaining within the current time window before receiving `HTTP 429 - Too Many Requests` |
| `X-RateLimit-Replenish-Rate` | Number of requests allowed on a sustained basis. This value is the same as the Request Rate Limit. |
| `X-RateLimit-Requested-Tokens` | The number of tokens used by the request |

### Handling Rate Limits

When a client exceeds a defined rate limit, it receives an `HTTP 429 - Too Many Requests` response and the `X-RateLimit-Remaining` header will be `0`. To gracefully handle rate limits, a client script or program should:

- **Monitor Rate Limit Headers** to track theremaining quota and replenish rate.
- **Implement Exponential Backoff** to recover from a 429 response.
