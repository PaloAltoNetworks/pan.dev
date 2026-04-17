---
id: mgmt-python-sdk
title: "Prisma AIRS Management API Python SDK"
sidebar_label: "Management API Python SDK Overview"
keywords:
  - PythonSDK
  - AIRS
  - Reference
  - Cloud
  - API
---

This Python SDK provides convenient access to the Palo Alto Networks AI Runtime Security Management API for Python applications. This SDK enables you to programmatically manage AI security profiles, API keys, DLP profiles, customer applications, custom topics, OAuth tokens, and deployment profiles.

## Key Features:

- **Synchronous (inline) and Asynchronous (asyncio) support** - Choose the SDK version that fits your application.
- **Type-safe** - Fully typed with Pydantic models for all request/response objects.
- **Automatic OAuth2 token management** - Built-in token caching and refresh.
- **Retry handling** - Configurable exponential backoff for transient failures.
- **Comprehensive error handling** - Granular exception types for precise error handling.

## API Documentation 

The reference API documentation for Palo Alto Networks AI Runtime Security Management API can be found at https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/

## Installation

```python
# Create and activate a virtual environment
python3 -m venv --prompt ${PWD##*/} .venv && source .venv/bin/activate

# Install most recent release version of airs-api-mgmt-sdk package
python3 -m pip install "pan-airs-api-mgmt-sdk"
```

## Quick Start

**Synchronous Example:**

```python
from airs_api_mgmt import MgmtClient

# Initialize client with credentials
client = MgmtClient(
    client_id="your_client_id",
    client_secret="your_client_secret"
)

# Retrieve API keys
api_keys = client.api_keys.get_all_api_keys(limit=10)
print(f"API Keys: {api_keys}")
```

**Asynchronous Example:**

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def main():
    async with MgmtClientAsync() as client:  # Uses env variables
        # Retrieve AI security profiles
        profiles = await client.ai_sec_profiles.get_all_ai_profiles(limit=10)
        print(f"AI Security Profiles: {profiles}")

asyncio.run(main())
```

# SDK Configuration 

The SDK provides two client classes:

- **MgmtClient()** - Synchronous (blocking) client for standard Python applications
- **MgmtClientAsync()** - Asynchronous (non-blocking) client for async/await applications

Both clients accept the following optional parameters:

 - **client_id:** Your OAuth2 client ID (service account email)
 - **client_secret:** Your OAuth2 client secret
 - **base_url:** Management API endpoint (default: https://api.sase.paloaltonetworks.com/aisec)
 - **token_base_url:** OAuth2 token endpoint (default: https://auth.appsvc.paloaltonetworks.com/auth/v1/oauth2/access_token)
 - **num_retries:** Maximum number of retries with exponential backoff (default: 3)

You must provide OAuth2 client credentials (client_id + client_secret) for authentication.

# OAuth2 Client Credentials

There are two ways to specify your OAuth2 client credentials and configuration:

1. Using environment variables:

```python 
# Required credentials
export PANW_CLIENT_ID="your_client_id"
export PANW_CLIENT_SECRET="your_client_secret"

# Optional configuration (override defaults)
export PANW_BASE_URL="https://api.sase.paloaltonetworks.com/aisec"
export PANW_TOKEN_BASE_URL="https://auth.appsvc.paloaltonetworks.com/auth/v1/oauth2/access_token"
```

2. Specify credentials in MgmtClient() initialization:

```python 
from airs_api_mgmt import MgmtClient

client = MgmtClient(
    client_id="your_client_id",
    client_secret="your_client_secret",
    base_url="https://api.sase.paloaltonetworks.com/aisec",  # Optional
    token_base_url="https://auth.appsvc.paloaltonetworks.com/auth/v1/oauth2/access_token"  # Optional
)
```

# Configuration Parameters

All configuration parameters:

| Environment Variable | Type | Default | Description |
| :---- | :---- | :---- | :---- |
| PANW\_CLIENT\_ID | str | None | OAuth2 service account client ID |
| PANW\_CLIENT\_SECRET | str | None | OAuth2 client secret |
| PANW\_BASE\_URL | str | [https://api.sase](https://api.sase/). paloaltonetworks.com/aisec | Management API endpoint |
| PANW\_TOKEN\_BASE\_URL | str | [https://auth.appsvc](https://auth.appsvc/). paloaltonetworks.com/auth/v1/oauth2/access\_token | OAuth2 token endpoint |
| \- | int | 3 | Max retries with exponential backoff |
| PANW\_BASE\_URL | str | [https://api.sase.paloaltonetworks.com/aisec](https://api.sase.paloaltonetworks.com/aisec) | Management API endpoint |
| PANW\_TOKEN\_BASE\_URL | str | [https://auth.apps.paloaltonetworks.com/am/oauth2/access_token](https://auth.apps.paloaltonetworks.com/am/oauth2/access_token) | OAuth2 token endpoint |
| \- | int | 3 | Max retries with exponential backoff |

# Example: SDK Configuration 

**Using Client Credentials**

```python 
from airs_api_mgmt import MgmtClient

client = MgmtClient(
    client_id="your_client_id",
    client_secret="your_client_secret",
    base_url="https://api.sase.paloaltonetworks.com/aisec",
    token_base_url="https://auth.appsvc.paloaltonetworks.com/auth/v1/oauth2/access_token"
)
```
**Using Environment Variables**

```python 
from airs_api_mgmt import MgmtClient

# Set environment variables first
# Required:
# export PANW_CLIENT_ID="your_client_id"
# export PANW_CLIENT_SECRET="your_client_secret"

# Optional (override defaults):
# export PANW_BASE_URL="https://api.sase.paloaltonetworks.com/aisec"
# export PANW_TOKEN_BASE_URL="https://auth.appsvc.paloaltonetworks.com/auth/v1/oauth2/access_token"

# Initialize with defaults (uses environment variables)
client = MgmtClient()
```

**Using Async Client**

```python 
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def main():
    # Option 1: Use async context manager (recommended)
    async with MgmtClientAsync(
        client_id="your_client_id",
        client_secret="your_client_secret"
    ) as client:
        # Client automatically closes when exiting context
        api_keys = await client.api_keys.get_all_api_keys()
        print(f"API Keys: {api_keys}")

    # Option 2: Manual initialization and cleanup
    client = MgmtClientAsync()
    try:
        profiles = await client.ai_sec_profiles.get_all_ai_profiles()
        print(f"AI Profiles: {profiles}")
    finally:
        await client.close()  # Always close when done

asyncio.run(main())
```

# SDK Features Deep Dive 

## 1. Dual Sync/Async Implementation

The SDK provides both synchronous and asynchronous implementations:

- **Synchronous (MgmtClient):** Traditional blocking I/O for standard Python applications.
- **Asynchronous (MgmtClientAsync):** Non-blocking I/O for high-performance async applications.

Both implementations share the same API surface, making it easy to switch between them.

## 2. Automatic OAuth2 Token Management

The SDK handles OAuth2 authentication automatically:

- **Token Acquisition:** Automatically obtains access tokens using client credentials.
- **Token Caching:** Caches tokens in memory to avoid unnecessary token requests.
- **Token Refresh:** Automatically refreshes tokens before expiration.
- **Thread-Safe:** Token management is thread-safe for concurrent requests.

```python 
# Token is automatically managed - no manual intervention needed
client = MgmtClient(client_id="...", client_secret="...")
# Token acquired on first API call and refreshed as needed
```
# 3. Exponential Backoff Retry Logic

Automatic retry with exponential backoff for transient failures:

- **Default Retries:** 3 attempts (configurable via num_retries parameter).
- **Backoff Strategy:** Exponential backoff (1s → 2s → 4s → 8s → ...).
- **Retryable Errors:** Automatically retries on network errors and 5xx server errors.
- **Non-Retryable Errors:** Fails fast on 4xx client errors (bad requests, auth failures).

```python 
# Configure custom retry behavior
client = MgmtClient(
    client_id="...",
    client_secret="...",
    num_retries=5  # Retry up to 5 times
)
```

# 4. Comprehensive Error Handling

Granular exception hierarchy for precise error handling:

- **MgmtSdkClientError:** 4xx errors (bad requests, auth failures, not found).
- **MgmtSdkServerError:** 5xx errors (server failures, timeouts).
- **PayloadConfigurationError:** Invalid request payloads.
- **MissingVariableError:** Missing required configuration.
- **MgmtSdkAPIError:** General API errors.
- **MgmtSdkBaseError:** Unexpected errors.

All HTTP error exceptions include:

 - **status_code:** HTTP status code.
 - **response_body:** Raw response body for debugging.


# 5. Type Safety with Pydantic Models
All request and response objects are validated using Pydantic v2:

- **Automatic Validation:** Input/output data is automatically validated.
- **Type Hints:** Full type hint support for IDE autocomplete.
- **Serialization:** Automatic JSON serialization/deserialization.
- **Documentation:** Self-documenting models with field descriptions.

```python 
from airs_api_mgmt.sdk.models import PaginatedAPIKeyObject

# Type-safe responses
response: PaginatedAPIKeyObject = client.api_keys.get_all_api_keys()
print(f"Response: {response}")
```

# 6. Pagination Support

Built-in pagination for all list endpoints:

 - Offset-based: Use offset and limit parameters.
 - Consistent API: Same pagination pattern across all resources.
 - Total Count: Responses include total count for progress tracking.

```python
# Retrieve first 50 items
page1 = client.api_keys.get_all_api_keys(offset=0, limit=50)

# Retrieve next 50 items
page2 = client.api_keys.get_all_api_keys(offset=50, limit=50)

print(f"Page 1: {page1}")
print(f"Page 2: {page2}")
```

# 7. Structured Logging

Built-in logging for debugging and monitoring:

- **Contextual Logs:** Each operation logs with event context.
- **Configurable:** Uses standard Python logging (configure via logging module).
- **Request/Response:** Logs important API interactions.
- **Error Details:** Detailed error logging with stack traces.


```python
import logging

# Enable debug logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger("airs_api_mgmt")
logger.setLevel(logging.DEBUG)

client = MgmtClient()  # Now see detailed logs
```

# 8. Environment Variable Support

Flexible configuration via environment variables:

 - PANW_CLIENT_ID: OAuth2 client ID
 - PANW_CLIENT_SECRET: OAuth2 client secret
 - PANW_BASE_URL: Custom API endpoint URL
 - PANW_TOKEN_BASE_URL: Custom OAuth2 token endpoint URL

```python
export PANW_CLIENT_ID="your_client_id"
export PANW_CLIENT_SECRET="your_client_secret"
```

```python 
# Automatically uses environment variables
client = MgmtClient()
```

# 9. OpenAPI-Generated Models

All models are auto-generated from OpenAPI 3.0 specification:

- **Always Current:** Models stay in sync with API specification.
- **Comprehensive:** Complete coverage of all API endpoints.
- **Validated:** OpenAPI contract ensures correctness.

# 10. Context Manager Support

Async client supports Python context managers for automatic cleanup:

```python
async with MgmtClientAsync() as client:
    # Client automatically closes connections on exit
    profiles = await client.ai_sec_profiles.get_all_ai_profiles()
    # Cleanup happens automatically
```    

## Available Resources

The SDK provides access to the following resources through the `MgmtClient`:

| Resource | Access Method | Description |
| :--- | :--- | :--- |
| **API Keys** | `client.api_keys` | Create, retrieve, regenerate, and delete API keys |
| **AI Security Profiles** | `client.ai_sec_profiles` | Manage AI security profiles and policies |
| **Custom Topics** | `client.custom_topics` | Create and manage custom security topics |
| **Customer Applications** | `client.customer_apps` | Manage customer applications |
| **DLP Profiles** | `client.dlp_profiles` | Retrieve DLP (Data Loss Prevention) profiles |
| **Deployment Profiles** | `client.deployment_profiles` | Retrieve deployment configurations |
| **OAuth Tokens** | `client.oauth` | Generate OAuth2 tokens for applications |

### All resources provide:
* **Automatic OAuth2 token management** with refresh
* **Exponential backoff retry logic** (1s, 2s, 4s, 8s...)
* **Type-safe** request/response models
* **Comprehensive** error handling

---

## API Coverage

### API Keys Management
| Operation | Method | API Endpoint |
| :--- | :--- | :--- |
| Create API Key | `create_new_api_key()` | `POST /v1/mgmt/api-key` |
| Retrieve API Keys | `get_all_api_keys()` | `GET /v1/mgmt/api-key` |
| Regenerate API Key | `regenerate_api_key()` | `POST /v1/mgmt/api-key/{apiKeyId}/regenerate` |
| Delete API Key | `delete_api_key()` | `DELETE /v1/mgmt/api-key` |

### AI Security Profiles Management
| Operation | Method | API Endpoint |
| :--- | :--- | :--- |
| Create AI Profile | `create_new_ai_profile()` | `POST /v1/mgmt/ai-sec-profile` |
| Retrieve AI Profiles | `get_all_ai_profiles()` | `GET /v1/mgmt/ai-sec-profile` |
| Update AI Profile | `update_ai_profile()` | `PUT /v1/mgmt/ai-sec-profile/{profileId}` |
| Delete AI Profile | `delete_ai_profile()` | `DELETE /v1/mgmt/ai-sec-profile/{profileId}` |
| Force Delete AI Profile | `force_delete_ai_profile()` | `DELETE /v1/mgmt/ai-sec-profile/{profileId}/force` |

### Custom Topics Management
| Operation | Method | API Endpoint |
| :--- | :--- | :--- |
| Create Custom Topic | `create_new_custom_topic()` | `POST /v1/mgmt/custom-topic` |
| Retrieve Custom Topics | `get_all_custom_topics()` | `GET /v1/mgmt/custom-topic` |
| Modify Custom Topic | `modify_custom_topic_details()` | `PUT /v1/mgmt/custom-topic/{topicId}` |
| Delete Custom Topic | `delete_custom_topic()` | `DELETE /v1/mgmt/custom-topic/{topicId}` |
| Force Delete Custom Topic | `force_delete_custom_topic()` | `DELETE /v1/mgmt/custom-topic/{topicId}/force` |

### Customer Applications Management
| Operation | Method | API Endpoint |
| :--- | :--- | :--- |
| Retrieve Customer Apps | `get_all_customer_apps()` | `GET /v1/mgmt/customer-app` |
| Update Customer App | `update_customer_app()` | `PUT /v1/mgmt/customer-app/{customerAppId}` |
| Delete Customer App | `delete_customer_app()` | `DELETE /v1/mgmt/customer-app` |

### DLP Profiles Management
| Operation | Method | API Endpoint |
| :--- | :--- | :--- |
| Retrieve DLP Profiles | `get_all_dlp_profiles()` | `GET /v1/mgmt/dlp-profile` |

### Deployment Profiles Management
| Operation | Method | API Endpoint |
| :--- | :--- | :--- |
| Retrieve Deployment Profiles | `get_all_deployment_profiles()` | `GET /v1/mgmt/deployment-profile` |

### OAuth Token Management
| Operation | Method | API Endpoint |
| :--- | :--- | :--- |
| Generate OAuth Token | `get_oauth_token()` | `POST /v1/oauth/token` |