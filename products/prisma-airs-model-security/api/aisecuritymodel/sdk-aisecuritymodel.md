---
id: sdk-aisecuritymodel
title: "Model Security Python SDK & CLI Usage"
sidebar_label: "AI Security Model SDK"
keywords:
  - Prisma AIRS API
  - Reference
  - Cloud
  - API
---

All APIs in this documentation can also be called via the Model Security Python SDK and CLI. These packages are auto-generated to support all API routes and parameters that our backend supports. To install the SDK and CLI, see [Install AI Model Security](https://docs.paloaltonetworks.com/ai-runtime-security/ai-model-security/model-security-to-secure-your-ai-models/get-started-with-ai-model-security/install-ai-model-security).

The auto-generated SDK & CLI functions are all named based on the API route they call. For example, consider the List Scans API. Using the Python SDK, if you wanted to list scans that have occurred since January 1, 2025, filtering for Hugging Face and S3 source types, and only blocked outcomes, you could use the `list_scans` function as so:

## Python SDK Example

```python
from model_security_client.api import ModelSecurityAPIClient
from datetime import datetime

client = ModelSecurityAPIClient(
    base_url="https://api.sase.paloaltonetworks.com/aims"
)

result = client.list_scans(
    source_types=["HUGGING_FACE", "S3"],
    eval_outcomes=["BLOCKED"],
    start_time=datetime.fromisoformat("2025-01-01T00:00:00"),
)
```

## CLI Example

Using the CLI, the same List Scans API call could be made as follows:

```bash
uv run model-security list-scans \
  --base-url https://api.sase.paloaltonetworks.com/aims \
  --source-types "HUGGING_FACE" \
  --source-types "S3" \
  --eval-outcomes "BLOCKED" \
  --start-time "2025-01-01T00:00:00"
```

## Getting Help

For any CLI function, you can also list all parameters with the `--help` flag, for example:

```bash
model-security list-scans --help
```

## Additional Features

The only API that has additional features beyond the API parameters is the scan API. For complete documentation on how to submit a scan, see [Scanning Models](https://docs.paloaltonetworks.com/ai-runtime-security/ai-model-security/model-security-to-secure-your-ai-models/get-started-with-ai-model-security/scanning-models).
