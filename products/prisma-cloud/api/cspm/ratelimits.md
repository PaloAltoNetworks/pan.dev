---
id: rate-limits
title: Rate Limits
sidebar_label: Rate Limits
---

Prisma Cloud uses API throttling to protect the performance and availability of its services. Requests exceeding these limits will result in an  `HTTP 429 - Too Many Requests` response.

Rate limiting varies depending on the specific API endpoint you are using. If an endpoint has rate limits, they will be documented in that endpoint's description.

Rate limits are expressed using two values: `Rate Limit` and `Burst Rate`

- **Rate Limit**: Number of individual requests per second allowed by the endpoint.
- **Burst Rate**: Maximum number of concurrent requests allowed in one second.
### **User rate limiting**


The rate limiting behavior is based upon the Token Bucket Algorithm and evaluates limits on a per user basis.

:::note
Users are identified by using a key derived from the authentication token present in all Prisma Cloud API requests.
If a user has multiple authentication tokens, the limits apply to the user and not to the discrete authentication tokens.
:::

### Rate Limit Response Headers 

Response headers include detailed information on the status of the endpoint's rate limiting behavior and information on the remaining number of requests for the current user. 

| Header Name | Header Description |
| ----------- | ------------------ |
| `X-RateLimit-Burst-Capacity` | The maximum number of concurrent requests allowed within the current time window before rate limiting is enforced. |
| `X-RateLimit-Remaining`  | The number of requests the client is still allowed to make within the current time window before hitting the rate limit. |
| `X-RateLimit-Replenish-Rate` | The rate at which the client's request quota is refilled, in requests per second. This value is the same as the "Rate Limit" value. |

- `X-RateLimit-Burst-Capacity`: The maximum number of _current_ requests before rate limiting is enforced.
- `X-RateLimit-Remaining`: Remaining requests until receiving `HTTP 429 - Too Many Requests`
- `X-RateLimit-Replenish-Rate`: Requests per second at which the bucket is refilled. _(This value is the same as the "Rate Limit" value)_
