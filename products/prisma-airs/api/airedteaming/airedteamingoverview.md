---
id: airedteamingoverview
title: "AI Red Teaming"
sidebar_label: "AI Red Teaming API"
slug: /prisma-airs/airedteaming/api
keywords:
  - AIRS
  - Reference
  - Cloud
  - API
---

AI Red Teaming Proactively identify vulnerabilities through automated penetration testing using AI Red Teaming agents that learn and adapt like real attackers.
It is designed to help you identify security risks in your GenAI models, applications, and data. This capability simulates various real-world attack scenarios on your GenAI applications to uncover vulnerabilities before malicious actors can exploit them.

The AI Red Teaming APIs allow you to test and secure your GenAI applications programmatically. These APIs seamlessly integrate with existing workflows and systems, streamlining AI security processes.

The following are the AI Red Teaming API endpoints:

- Create New Simulation (`/create`): Initiate a new AI Red Teaming simulation with customized parameters.

- Get Simulation Result (`/result`): Retrieve detailed results and analysis from a completed simulation.

- Get All Simulations (`/get-all`): Fetch metadata for all simulations associated with your account.

The AI Red Teaming API Reference documentation details the API specifications and usage instructions for each endpoints.

## Prerequisites

1. **API access token**

The AI Red Teaming APIs need an access token to authenticate all the endpoints requests. These APIs use a common authentication mechanism and base URL for API requests.
Follow the instructions on this [page](https://pan.dev/sase/api/auth/post-auth-v-1-oauth-2-access-token/) to generate an access token.

2. **Simulation data**

The API Red Teaming API use the `simulation_data` file schema to create an AI Red Teaming simulation.
This is a `JSON` file with a maximum character size of 10 MB. The AI Red Teaming serive uses this schema to identify the model and the simulation attack types to run the threat simulations.
Here is a sample `simulation_data` schema:

```JSON
code...
```

3. **Endpoint Schema**

AI Red Teaming uses this schema to identify the endpoint to run the threat simulations. It sends automated attacks to your genAI application.
The schema may contain any endpoint designed to take in text prompts and return text responses (for example, an application workload endpoint or a model endpoint).
Configure the endpoint schema to be externally accessible.
The maximum character size limit of the endpoint schema file is 64KB.

```yaml
type: azure_openai

deployment:
  api_key: {your_API_key}
  azure_endpoint: {your_azure_endpoint} // model name in URL path
```
