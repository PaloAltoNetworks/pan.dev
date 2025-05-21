---
id: pythonsdk
title: "AI Runtime Security API Python SDK"
sidebar_label: "AI Runtime Security API Python SDK"
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
