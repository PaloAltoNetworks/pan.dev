---
id: rate-limits
title: Rate Limits
sidebar_label: Rate Limits
---
Prisma Cloud uses API Rate Limits to protect the performance and availability of its services. Requests exceeding these limits will result in an  `HTTP 429 - Too Many Requests` response.

Rate limiting varies depending on the specific API endpoint you are using. If an endpoint has rate limits, they will be documented in that endpoint's description.

Rate limits are expressed using two values: `Rate Limit` and `Burst Rate`

- **Rate Limit**: Number of individual requests per second allowed by the endpoint.
- **Burst Rate**: Maximum number of concurrent requests allowed in one second.

### **User rate limiting**

Our rate limiting behavior is based upon the Token Bucket Algorithm and evaluates limits on a per user basis. 

:::note
Users are identified by using a key generated from the authentication token present in all Prisma Cloud API requests.
If a user has multiple authentication tokens, the limits apply to the user and not to the discrete authentication tokens.
:::

### Rate Limit Response Headers

APIs that use rate limits will include relevant x-ratelimit-* response headers

The HTTP headers will include relevant `x-ratelimit-*` headers and other metadata to determine the current status of the users rate limit.


APIs that use rate limits will include relevant x-ratelimit-* response headers

| Header Name | Header Description |
| ----------- | ------------------ |
| `X-RateLimit-Burst-Capacity` | The maximum number of *concurrent* requests before rate limiting is enforced. |
| `X-RateLimit-Remaining`  | Number of requests remaining within the current time window before receiving `HTTP 429 - Too Many Requests` |
| `X-RateLimit-Replenish-Rate` | Rate at which the token bucket is refilled. *(equilvalent to th "Rate Limit" value)* |
| `X-RateLimit-Requested-Tokens` | The number of tokens used for the most recent request |

### Handling Rate Limits

When a user exceeds set rate limits, there are a couple of strategies .....


#### Retrying with exponential backoff

Another common pattern is based on exponential backoff, where the time between requests starts off small (for example, a few seconds), then doubled before each retry. This is continued until a request is successful, or some reasonable maximum time between requests is reached (for example, a few minutes).  

_exponential backoffs_


