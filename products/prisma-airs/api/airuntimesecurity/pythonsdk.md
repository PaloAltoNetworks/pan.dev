---
id: pythonsdk
title: "AI Runtime Security API Python SDK"
sidebar_label: "Python SDK Overview"
keywords:
  - PythonSDK
  - AIRS
  - Reference
  - Cloud
  - API
---

AI Runtime Security API Python SDK simplifies the integration of advanced AI security scanning capabilities into Python applications.

It supports Python version 3.9 through 3.13, it offers synchronous and asynchronous scanning, robust error handling, and configurable retry strategies.

To get started:

* Get the the [API key token and API security profile name](https://docs.paloaltonetworks.com/ai-runtime-security/administration/prevent-network-security-threats/api-intercept-create-configure-security-profile) (or API security profile ID).

* Install `aisecurity` package using pip, set environment variables, and initialize the Python SDK. (Refer to the Python SDK [installation guide](https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview/airs-apis-python-sdk) for detailed steps.)

* Create a Scanner instance referring to the Python SDK usage examples.
A scanner instance performs security scans on your AI-generated content.

Python SDK can be used in the following ways:

* inline
* asyncio

Each usage can use two functions:

* sync_scan()
* async_scan()

## Error Handling & Exceptions

When the client is unable to fetch the expected response from the API server, a subclass of aisecurity.exceptions.AISecSDKException is raised.

There are five types of Exceptions defined in aisecurity/exceptions.py:

* AISEC_SERVER_SIDE_ERROR: Errors returned by the API server. For example, an invalid API key.
* AISEC_CLIENT_SIDE_ERROR: Errors that occur on the client side. For example, a network connection issue.
* AISEC_USER_REQUEST_PAYLOAD_ERROR: Errors related to the user's request payload. For example, an empty scan object.
* AISEC_MISSING_VARIABLE: Errors related to missing variables. For example, missing API key environment variable.
* AISEC_SDK_ERROR: Other uncategorized errors that occur in the SDK.
