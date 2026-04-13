---
id: mgmt-python-asynciosdk
title: "Python Management API SDK Asyncio Usage"
sidebar_label: "Python Management API SDK Asyncio Usage"
keywords:
  - PythonSDK
  - AIRS
  - Reference
  - Cloud
  - API
---

# Python Management API SDK Asyncio Usage

This page covers the key use cases of the Prisma AIRS Management API Python SDK with asynchronous (asyncio) methods. It enables you to programmatically manage AI security profiles, API keys, DLP profiles, customer applications, custom topics, OAuth tokens, and deployment profiles with non-blocking I/O for high-performance applications.

## API Keys Management

API Reference: https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/

### Create New API Key

Create a new API key for your customer application with specified rotation settings.

**Asynchronous Example:**

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def create_api_key():
    async with MgmtClientAsync() as client:
        response = await client.api_keys.create_new_api_key(
            api_key_name="my-application-key",
            cust_app="my-customer-app",
            auth_code="your_auth_code",
            created_by="user@example.com",
            cust_env="production",
            cust_cloud_provider="AWS",
            rotation_time_interval=3,
            rotation_time_unit="months",
            revoked=False,
            dp_name="my-deployment-profile",
            cust_ai_agent_framework="langchain"
        )

        print(f"API Key ID: {response}")

asyncio.run(create_api_key())
```

**Parameters:**
- `api_key_name` (str, required): Name of the API key
- `cust_app` (str, required): Customer application identifier
- `auth_code` (str, required): Authorization code
- `created_by` (str, required): Email of user creating the key
- `cust_env` (str, required): Environment (e.g., "production", "staging")
- `cust_cloud_provider` (str, required): Cloud provider (e.g., "AWS", "Azure", "GCP")
- `rotation_time_interval` (int, required): Rotation interval value
- `rotation_time_unit` (str, required): Rotation unit ("days", "months", "years")
- `revoked` (bool, optional): Revocation status (default: False)
- `dp_name` (str, optional): Deployment profile name
- `cust_ai_agent_framework` (str, optional): AI agent framework name

### Retrieve API Keys (with pagination)

Retrieve all API keys.

**Asynchronous Example:**

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def get_all_api_keys():
    async with MgmtClientAsync() as client:
        api_keys_response = await client.api_keys.get_all_api_keys(offset=0, limit=25)

        print(f"API Keys Response: {api_keys_response}")

asyncio.run(get_all_api_keys())
```

**Parameters:**
- `offset` (int, optional): Starting position for pagination (default: 0)
- `limit` (int, optional): Maximum number of keys to retrieve (default: 100)

### Regenerate API Key

Regenerate an existing API key with new rotation settings.

**Asynchronous Example:**

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def regenerate_api_key():
    async with MgmtClientAsync() as client:
        regenerate_response = await client.api_keys.regenerate_api_key(
            api_key_id="your_api_key_uuid",
            rotation_time_interval=6,
            rotation_time_unit="months",
            updated_by="user@example.com"
        )

        print(f"New API Key Secret: {regenerate_response}")

asyncio.run(regenerate_api_key())
```

**Parameters:**
- `api_key_id` (str, required): UUID of the API key to regenerate
- `rotation_time_interval` (int, required): New rotation interval value
- `rotation_time_unit` (str, required): New rotation unit ("days", "months", "years")
- `updated_by` (str, optional): Email of user performing the regeneration

### Delete API Key

Delete an API key by its name.

**Asynchronous Example:**

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def delete_api_key():
    async with MgmtClientAsync() as client:
        delete_response = await client.api_keys.delete_api_key(
            api_key_name="my-application-key",
            updated_by="user@example.com"
        )

        print(f"Deletion response: {delete_response}")

asyncio.run(delete_api_key())
```

**Parameters:**
- `api_key_name` (str, required): Name of the API key to delete
- `updated_by` (str, required): Email of user performing the deletion

## Retrieve Multiple Resources in Parallel

Fetch multiple resources concurrently using `asyncio.gather()`:

**Asynchronous Example:**

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def fetch_all_resources():
    async with MgmtClientAsync() as client:
        # Fetch multiple resources concurrently
        results = await asyncio.gather(
            client.api_keys.get_all_api_keys(),
            client.ai_sec_profiles.get_all_ai_profiles(),
            client.custom_topics.get_all_custom_topics(),
            client.dlp_profiles.get_all_dlp_profiles()
        )

        api_keys, ai_profiles, topics, dlp_profiles = results

        print(f"API Keys: {api_keys}")
        print(f"AI Profiles: {ai_profiles}")
        print(f"Custom Topics: {topics}")
        print(f"DLP Profiles: {dlp_profiles}")

asyncio.run(fetch_all_resources())
```

## Available Resources

The SDK provides access to the following resources through the `MgmtClientAsync`:

| Resource | Access Method | Description |
|----------|---------------|-------------|
| **API Keys** | `client.api_keys` | Create, retrieve, regenerate, and delete API keys |
| **AI Security Profiles** | `client.ai_sec_profiles` | Manage AI security profiles and policies |
| **Custom Topics** | `client.custom_topics` | Create and manage custom security topics |
| **Customer Applications** | `client.customer_apps` | Manage customer applications |
| **DLP Profiles** | `client.dlp_profiles` | Retrieve DLP (Data Loss Prevention) profiles |
| **Deployment Profiles** | `client.deployment_profiles` | Retrieve deployment configurations |
| **OAuth Tokens** | `client.oauth` | Generate OAuth2 tokens for applications |

All resources provide:
- Automatic OAuth2 token management with refresh
- Exponential backoff retry logic (1s, 2s, 4s, 8s...)
- Type-safe request/response models
- Comprehensive error handling

## API Coverage

### API Keys Management
| Operation | Method | API Endpoint |
|-----------|--------|--------------|
| Create API Key | `create_new_api_key()` | `POST /v1/mgmt/api-key` |
| Retrieve API Keys | `get_all_api_keys()` | `GET /v1/mgmt/api-key` |
| Regenerate API Key | `regenerate_api_key()` | `POST /v1/mgmt/api-key/{apiKeyId}/regenerate` |
| Delete API Key | `delete_api_key()` | `DELETE /v1/mgmt/api-key` |

### AI Security Profiles Management
| Operation | Method | API Endpoint |
|-----------|--------|--------------|
| Create AI Profile | `create_new_ai_profile()` | `POST /v1/mgmt/ai-sec-profile` |
| Retrieve AI Profiles | `get_all_ai_profiles()` | `GET /v1/mgmt/ai-sec-profile` |
| Update AI Profile | `update_ai_profile()` | `PUT /v1/mgmt/ai-sec-profile/{profileId}` |
| Delete AI Profile | `delete_ai_profile()` | `DELETE /v1/mgmt/ai-sec-profile/{profileId}` |
| Force Delete AI Profile | `force_delete_ai_profile()` | `DELETE /v1/mgmt/ai-sec-profile/{profileId}/force` |

### Custom Topics Management
| Operation | Method | API Endpoint |
|-----------|--------|--------------|
| Create Custom Topic | `create_new_custom_topic()` | `POST /v1/mgmt/custom-topic` |
| Retrieve Custom Topics | `get_all_custom_topics()` | `GET /v1/mgmt/custom-topic` |
| Modify Custom Topic | `modify_custom_topic_details()` | `PUT /v1/mgmt/custom-topic/{topicId}` |
| Delete Custom Topic | `delete_custom_topic()` | `DELETE /v1/mgmt/custom-topic/{topicId}` |
| Force Delete Custom Topic | `force_delete_custom_topic()` | `DELETE /v1/mgmt/custom-topic/{topicId}/force` |

### Customer Applications Management
| Operation | Method | API Endpoint |
|-----------|--------|--------------|
| Retrieve Customer Apps | `get_all_customer_apps()` | `GET /v1/mgmt/customer-app` |
| Update Customer App | `update_customer_app()` | `PUT /v1/mgmt/customer-app/{customerAppId}` |
| Delete Customer App | `delete_customer_app()` | `DELETE /v1/mgmt/customer-app` |

### DLP Profiles Management
| Operation | Method | API Endpoint |
|-----------|--------|--------------|
| Retrieve DLP Profiles | `get_all_dlp_profiles()` | `GET /v1/mgmt/dlp-profile` |

### Deployment Profiles Management
| Operation | Method | API Endpoint |
|-----------|--------|--------------|
| Retrieve Deployment Profiles | `get_all_deployment_profiles()` | `GET /v1/mgmt/deployment-profile` |

### OAuth Token Management
| Operation | Method | API Endpoint |
|-----------|--------|--------------|
| Generate OAuth Token | `get_oauth_token()` | `POST /v1/oauth/token` |
