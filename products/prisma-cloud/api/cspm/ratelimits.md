---
id: rate-limits
title: Rate Limits
sidebar_label: Rate Limits
---
Prisma Cloud uses API Rate Limits to protect the performance and availability of its services. Requests exceeding these limits will result in an  `HTTP 429 - Too Many Requests` response.

Rate limiting varies depending on the specific API endpoint you are using. If an endpoint has rate limits, they will be documented in that endpoint's description.

### **User rate limiting**

Our rate limiting behavior is based upon the Token Bucket Algorithm and evaluates limits on a per user basis. 

:::note
Users are identified by using a key generated from the authentication token present in all Prisma Cloud API requests.

If a user has multiple authentication tokens, the limits apply to the user and not to the discrete authentication tokens.
:::

### Rate Limit Response Headers

APIs that use rate limits will include relevant `X-RateLimit-*` response headers.

| Header Name | Header Description |
| ----------- | ------------------ |
| `X-RateLimit-Burst-Capacity` | The maximum number of *concurrent* requests before rate limiting is enforced. _(this is the number of tokens the bucket can hold)_ |
| `X-RateLimit-Remaining`  | Number of requests remaining within the current time window before receiving `HTTP 429 - Too Many Requests` |
| `X-RateLimit-Replenish-Rate` | Rate at which the token bucket is refilled. This defines the sustained request rate |
| `X-RateLimit-Requested-Tokens` | The number of tokens used by the request |

### Handling Rate Limits

If you exceed the rate limit, you will receive a `429` response and the `X-RateLimit-Remaining` header will be `0`. 

- **Monitor Rate Limit Headers**: Pay attention to the rate limit headers in API responses to track your remaining quota and replenish rate.
- **Implement Exponential Backoff**: If you encounter a 429 response, implement an exponential backoff algorithm to retry your request after a calculated delay.
