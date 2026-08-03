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

### Create New API Key

 [Create a new API key](https://pan.dev/prisma-airs/api/airuntimesecurity/management/create-new-api-key/) for your customer application with specified rotation settings.

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

[Retrieve all API keys.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/get-all-api-keys-for-tsg-id/)

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

[Regenerate an existing API key with new rotation settings.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/regenerate-api-key-by-id/)

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

[Delete an API key by its name.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/delete-api-key/)

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

## AI Security Profiles Management

API Reference: [https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/](https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/)

### Create New AI Security Profile

[Create a new AI security profile with comprehensive policy configuration.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/create-new-ai-profile/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def create_ai_profile():
    async with MgmtClientAsync() as client:
        # Define AI security profile policy (using dictionary format)
        policy = {
            "dlp-data-profiles": [],
            "ai-security-profiles": [
                {
                    "model-type": "default",
                    "model-configuration": {
                        "latency": {
                            "inline-timeout-action": "block",
                            "max-inline-latency": 20
                        },
                        "data-protection": {
                            "data-leak-detection": {
                                "member": [
                                    {"text": "Sensitive Content", "id": "", "version": "2"}
                                ],
                                "action": "block"
                            }
                        },
                        "app-protection": {
                            "default-url-category": {"member": ["malicious"]},
                            "url-detected-action": "allow"
                        },
                        "model-protection": [
                            {"name": "prompt-injection", "action": "allow"},
                            {"name": "jailbreak", "action": "block"}
                        ]
                    }
                }
            ]
        }

        # Alternatively, create policy using SDK model objects (typed approach)
        from airs_api_mgmt.sdk.models import (
            AIProfileObjectPolicy,
            AiSecurityProfileObject,
            AiSecurityProfileObjectModelConfiguration,
            LatencyObject,
            DataProtectionObject,
            DataProtectionObjectDataLeakDetection,
            DataProtectionObjectDataLeakDetectionMemberInner,
            AppProtectionObject,
            AppProtectionObjectDefaultUrlCategory,
            ModelProtectionObjectInner
        )

        policy_typed = AIProfileObjectPolicy(
            dlp_data_profiles=[],
            ai_security_profiles=[
                AiSecurityProfileObject(
                    model_type="default",
                    content_type="text",
                    model_configuration=AiSecurityProfileObjectModelConfiguration(
                        latency=LatencyObject(
                            inline_timeout_action="block",
                            max_inline_latency=20
                        ),
                        data_protection=DataProtectionObject(
                            data_leak_detection=DataProtectionObjectDataLeakDetection(
                                member=[
                                    DataProtectionObjectDataLeakDetectionMemberInner(
                                        text="Sensitive Content",
                                        id="",
                                        version="2"
                                    )
                                ],
                                action="block"
                            )
                        ),
                        app_protection=AppProtectionObject(
                            default_url_category=AppProtectionObjectDefaultUrlCategory(
                                member=["malicious"]
                            ),
                            url_detected_action="allow"
                        ),
                        model_protection=[
                            ModelProtectionObjectInner(name="prompt-injection", action="allow"),
                            ModelProtectionObjectInner(name="jailbreak", action="block")
                        ]
                    )
                )
            ]
        )

        # Create new AI security profile (works with both dictionary or typed policy)
        create_response = await client.ai_sec_profiles.create_new_ai_profile(
            profile_name="production-security-profile",
            revision=1,
            policy=policy,  # or use policy_typed for typed approach
            created_by="user@example.com"
        )

        print(f"Profile ID: {create_response}")

asyncio.run(create_ai_profile())
```

Parameters:

* `profile_name` (str, required): Name of the AI security profile
* `revision` (int, required): Revision number
* `policy` (dict | AIProfileObjectPolicy, required): Policy configuration object (can be dict or typed model object)
* `profile_id` (str, optional): Custom profile UUID
* `created_by` (str, optional): Email of user creating the profile
* `updated_by` (str, optional): Email of user updating the profile
* `last_modified_ts` (datetime, optional): Last modification timestamp

### Retrieve AI Security Profiles (with pagination)

[Retrieve all AI security profiles with pagination support.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/get-all-ai-profiles-for-tsg-id/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def get_all_ai_profiles():
    async with MgmtClientAsync() as client:
        profiles_response = await client.ai_sec_profiles.get_all_ai_profiles(offset=0, limit=25)

        print(f"AI Security Profiles Response: {profiles_response}")

asyncio.run(get_all_ai_profiles())
```

Parameters:

* `offset` (int, optional): Starting position for pagination (default: 0)
* `limit` (int, optional): Maximum number of profiles to retrieve (default: 100)

### Update AI Security Profile

[Update an existing AI security profile by its ID.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/update-profile-by-profile-id/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def update_ai_profile():
    async with MgmtClientAsync() as client:
        updated_policy = {
            "dlp-data-profiles": [],
            "ai-security-profiles": [
                {
                    "model-type": "default",
                    "model-configuration": {
                        "latency": {
                            "inline-timeout-action": "allow",
                            "max-inline-latency": 30
                        },
                        "data-protection": {
                            "data-leak-detection": {
                                "member": [
                                    {"text": "PII Data", "id": "", "version": "2"}
                                ],
                                "action": "block"
                            }
                        }
                    }
                }
            ]
        }

        update_response = await client.ai_sec_profiles.update_ai_profile(
            profile_id="your_profile_uuid",
            profile_name="production-security-profile-v2",
            revision=2,
            policy=updated_policy,
            updated_by="user@example.com"
        )

        print(f"Updated Profile: {update_response.profile_name}")
        print(f"New Revision: {update_response.revision}")

asyncio.run(update_ai_profile())
```

Parameters:

* `profile_id` (str, required): UUID of the profile to update
* `profile_name` (str, required): Updated profile name
* `revision` (int, required): New revision number
* `policy` (dict, required): Updated policy configuration
* `created_by` (str, optional): Original creator email
* `updated_by` (str, optional): Email of user updating the profile
* `last_modified_ts` (datetime, optional): Last modification timestamp

### Delete AI Security Profile

[Delete an AI security profile by its ID.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/delete-ai-profile/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def delete_ai_profile():
    async with MgmtClientAsync() as client:
        delete_response = await client.ai_sec_profiles.delete_ai_profile(
            profile_id="your_profile_uuid"
        )

        print(f"Deletion response: {delete_response}")

asyncio.run(delete_ai_profile())
```

Parameters:

* `profile_id` (str, required): UUID of the profile to delete

### Force Delete AI Security Profile

[Force delete an AI security profile, bypassing validation checks.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/force-delete-ai-profile/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def force_delete_ai_profile():
    async with MgmtClientAsync() as client:
        force_delete_response = await client.ai_sec_profiles.force_delete_ai_profile(
            profile_id="your_profile_uuid",
            updated_by="user@example.com"
        )

        print(f"Force deletion response: {force_delete_response}")

asyncio.run(force_delete_ai_profile())
```

Parameters:

* `profile_id` (str, required): UUID of the profile to force delete
* `updated_by` (str, required): Email of user performing the deletion

## Custom Topics Management

API Reference: [https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/](https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/)

### Create New Custom Topic

[Create a new custom topic for data classification.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/create-new-custom-topic/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def create_custom_topic():
    async with MgmtClientAsync() as client:
        create_response = await client.custom_topics.create_new_custom_topic(
            topic_name="financial-data",
            description="Detection of financial and banking information",
            examples=[
                "Credit card numbers",
                "Bank account details",
                "Social security numbers",
                "Tax identification numbers"
            ],
            revision=1,
            created_by="user@example.com"
        )

        print(f"Topic ID: {create_response}")

asyncio.run(create_custom_topic())
```

Parameters:

* `topic_name` (str, required): Name of the custom topic
* `description` (str, required): Detailed explanation of the topic
* `examples` (list[str], required): List of example usages
* `revision` (int, required): Revision number
* `topic_id` (str, optional): Custom topic UUID
* `created_by` (str, optional): Email of user creating the topic
* `updated_by` (str, optional): Email of user updating the topic
* `last_modified_ts` (datetime, optional): Last modification timestamp
* `created_ts` (datetime, optional): Creation timestamp

### Retrieve All Custom Topics (with pagination)

[Retrieve all custom topics with pagination support.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/get-all-custom-topics-for-tsg-id/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def retrieve_custom_topics():
    async with MgmtClientAsync() as client:
        topics_response = await client.custom_topics.get_all_custom_topics(
            offset=0,
            limit=50
        )

        print(f"Custom Topics Response: {topics_response}")

asyncio.run(retrieve_custom_topics())
```

Parameters:

* `offset` (int, optional): Starting position for pagination (default: 0)
* `limit` (int, optional): Maximum number of topics to retrieve (default: 100)

### Modify Custom Topic Details

[Modify an existing custom topic with updated details.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/update-topic-by-topic-id/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def modify_custom_topic():
    async with MgmtClientAsync() as client:
        modify_response = await client.custom_topics.modify_custom_topic_details(
            topic_id="your_topic_uuid",
            topic_name="financial-data-updated",
            description="Updated detection of financial and personal information",
            examples=[
                "Credit card numbers",
                "Bank account details",
                "Social security numbers",
                "Tax identification numbers",
                "IBAN numbers"
            ],
            revision=2,
            updated_by="user@example.com"
        )

        print(f"Modified Topic: {modify_response}")

asyncio.run(modify_custom_topic())
```

Parameters:

* `topic_id` (str, required): UUID of the topic to modify
* `topic_name` (str, required): Updated topic name
* `description` (str, required): Updated description
* `examples` (list[str], required): Updated list of examples
* `revision` (int, required): New revision number
* `created_by` (str, optional): Original creator email
* `updated_by` (str, optional): Email of user modifying the topic
* `last_modified_ts` (datetime, optional): Last modification timestamp
* `created_ts` (datetime, optional): Creation timestamp

### Delete Custom Topic

[Delete a custom topic by its ID.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/delete-custom-topic/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def delete_custom_topic():
    async with MgmtClientAsync() as client:
        delete_response = await client.custom_topics.delete_custom_topic(
            topic_id="your_topic_uuid"
        )

        print(f"Deletion response: {delete_response}")

asyncio.run(delete_custom_topic())
```

Parameters:

* `topic_id` (str, required): UUID of the topic to delete

### Force Delete Custom Topic

[Force delete a custom topic, bypassing validation checks.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/force-delete-custom-topic/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def force_delete_custom_topic():
    async with MgmtClientAsync() as client:
        force_delete_response = await client.custom_topics.force_delete_custom_topic(
            topic_id="your_topic_uuid",
            updated_by="user@example.com"
        )

        print(f"Force deletion response: {force_delete_response}")

asyncio.run(force_delete_custom_topic())
```

Parameters:

* `topic_id` (str, required): UUID of the topic to force delete
* `updated_by` (str, required): Email of user performing the deletion

## Customer Applications Management

API Reference: [https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/](https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/)

### Retrieve All Customer Applications (with pagination)

[Retrieve all customer applications with pagination support.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/get-all-customer-apps-for-tsg-id/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def retrieve_customer_apps():
    async with MgmtClientAsync() as client:
        apps_response = await client.customer_apps.get_all_customer_apps(
            offset=0,
            limit=25
        )

        print(f"Customer Applications Response: {apps_response}")

asyncio.run(retrieve_customer_apps())
```

Parameters:

* `offset` (int, optional): Starting position for pagination (default: 0)
* `limit` (int, optional): Maximum number of apps to retrieve (default: 100)

### Update Customer Application

[Update a customer application with new settings.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/update-customer-app-by-id/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def update_customer_app():
    async with MgmtClientAsync() as client:
        update_response = await client.customer_apps.update_customer_app(
            customer_app_id="your_app_uuid",
            app_name="my-updated-application",
            cloud_provider="AWS",
            environment="production",
            model_name="gpt-4",
            status="completed",
            updated_by="user@example.com",
            ai_agent_framework="langchain"
        )

        print(f"Updated App: {update_response}")

asyncio.run(update_customer_app())
```

Parameters:

* `customer_app_id` (str, required): UUID of the customer application
* `app_name` (str, required): Updated application name
* `cloud_provider` (str, required): Cloud provider ("AWS", "Azure", "GCP")
* `environment` (str, required): Environment ("production", "staging", "development")
* `model_name` (str, optional): AI model name
* `status` (str, optional): Application status ("completed", "pending")
* `updated_by` (str, optional): Email of user updating the app
* `ai_agent_framework` (str, optional): AI agent framework name

### Delete Customer Application

[Delete a customer application by its name.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/delete-customer-app/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def delete_customer_app():
    async with MgmtClientAsync() as client:
        delete_response = await client.customer_apps.delete_customer_app(
            app_name="my-application",
            updated_by="user@example.com"
        )

        print(f"Deletion response: {delete_response}")

asyncio.run(delete_customer_app())
```

Parameters:

* `app_name` (str, required): Name of the application to delete
* `updated_by` (str, required): Email of user performing the deletion

## DLP Profiles Management

API Reference: [https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/](https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/)

### Retrieve All DLP Profiles

[Retrieve all DLP (Data Loss Prevention) profiles.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/get-all-dlp-profiles-by-tsg-id/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def retrieve_dlp_profiles():
    async with MgmtClientAsync() as client:
        # Retrieve all DLP profiles
        dlp_profiles = await client.dlp_profiles.get_all_dlp_profiles()

        print(f"DLP Profiles: {dlp_profiles}")

asyncio.run(retrieve_dlp_profiles())
```

Parameters: None

## Deployment Profiles Management

API Reference: [https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/](https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/)

### Retrieve All Deployment Profiles

[Retrieve all deployment profiles.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/get-deployment-profiles-by-tsg-id/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def retrieve_deployment_profiles():
    async with MgmtClientAsync() as client:
        # Retrieve all deployment profiles
        deployment_profiles = await client.deployment_profiles.get_all_deployment_profiles()

        print(f"Deployment Profiles: {deployment_profiles}")

asyncio.run(retrieve_deployment_profiles())
```

Parameters:

* `unactivated` (bool, optional): Get only unactivated deployment profiles (default: None)

### Retrieve Unactivated Deployment Profiles

Retrieve only unactivated deployment profiles (includes available and previously activated profiles without associated apps or API keys).

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def retrieve_unactivated_profiles():
    async with MgmtClientAsync() as client:
        # Retrieve only unactivated deployment profiles
        unactivated_profiles = await client.deployment_profiles.get_all_deployment_profiles(
            unactivated=True
        )

        print(f"Unactivated Deployment Profiles: {unactivated_profiles}")

asyncio.run(retrieve_unactivated_profiles())
```

Parameters:

* `unactivated` (bool, required): Set to True to retrieve only unactivated profiles

## OAuth Token Management

API Reference: [https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/](https://pan.dev/prisma-airs/api/airuntimesecurity/prismaairsmanagementapi/)

### Generate OAuth2 Token

[Generate an OAuth2 access token for an Apigee application.](https://pan.dev/prisma-airs/api/airuntimesecurity/management/get-apigee-oauth-token/)

Asynchronous Example:

```python
import asyncio
from airs_api_mgmt import MgmtClientAsync

async def generate_oauth_token():
    async with MgmtClientAsync() as client:
        # Generate OAuth2 token for an Apigee application
        oauth_response = await client.oauth.get_oauth_token(
            client_id="your_apigee_client_id",
            customer_app="my-customer-app",
            token_ttl_interval=24,
            token_ttl_unit="hours"
        )

        print(f"OAuth Token: {oauth_response}")

asyncio.run(generate_oauth_token())
```

Parameters:

* `client_id` (str, required): Client ID for the OAuth application
* `customer_app` (str, required): Customer application name
* `token_ttl_interval` (int, required): Time-to-live interval for the token
* `token_ttl_unit` (str, required): Time unit ("seconds", "minutes", "hours", "days")
