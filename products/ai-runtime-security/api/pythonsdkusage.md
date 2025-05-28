---
id: pythonsdkusage
title: "Python SDK Inline Usage"
sidebar_label: "Python SDK Inline Usage"
keywords:
  - PythonSDK
  - AIRS
  - Reference
  - Cloud
  - API
---

This page covers the key use cases of the AI Runtime Security Python SDK inline scan types with synchronous and asynchronous methods.
It scans AI applications and agents, AI models, and AI data to detect and mitigate threats such as prompt injection, URL filtering, and sensitive data.
Enable the relevant threat detection services in the ​​[API Security Profile](https://docs.paloaltonetworks.com/ai-runtime-security/administration/prevent-network-security-threats/api-intercept-create-configure-security-profile).

## Inline Synchronous Scan

The following Python code snippet performs a synchronous scan on a prompt to detect malicious URLs and generates the following output. Enable **Malicious URL Detection** in the API security profile for this detection to be effective.

<details>

<summary>python3 inline_sync_scan_api.py</summary>

```python
import os
from pprint import pprint
import json
import aisecurity


from aisecurity.generated_openapi_client.models.ai_profile import AiProfile
# IMPORTANT: For traditional (non-asyncio), import Scanner from aisecurity.scan.inline.scanner
from aisecurity.scan.inline.scanner import Scanner
from aisecurity.scan.models.content import Content


AI_PROFILE_NAME = "ai-sec-security"
API_KEY = os.getenv("PANW_AI_SEC_API_KEY")


# Initialize the SDK with your API Key
aisecurity.init(api_key=API_KEY)


# Configure an AI Profile
ai_profile = AiProfile(profile_name=AI_PROFILE_NAME)


# Create a Scanner
scanner = Scanner()
scan_response = scanner.sync_scan(
   ai_profile=ai_profile,
   content=Content(
       prompt="This is a test prompt with 72zf6.rxqfd.com/i8xps1 url",
       response="Questionable Model Response Text",
   ),
)
# See API documentation for response structure
# https://pan.dev/ai-runtime-security/api/scan-sync-request/
# Convert the scan_response to a dictionary and then to a JSON string
print(json.dumps(scan_response.to_dict()))
```

</details>

<details>

<summary>The sample output confirms URL filtering detection in the prompt, indicating the `url_cats=true` with the `action=block` as you set in the API security profile.</summary>

```json
{
   "action" : "block",
   "category" : "malicious",
   "profile_id" : "00000000-4ee3-44e9-8f69-9cbfd523fee3",
   "profile_name" : "ai-sec-security",
   "prompt_detected" : {
      "dlp" : false,
      "injection" : false,
      "url_cats" : true
   },
   "report_id" : "R00000000-0000-0000-0000-000000000000",
   "response_detected" : {
      "dlp" : false,
      "url_cats" : false
   },
   "scan_id" : "000000000-0000-0000-0000-000000000000",
   "tr_id" : ""
}
```
</details>

## Inline Asynchronous Scan

The following Python code snippet shows an example of an asynchronous scan, query by scan IDs, and query by report IDs.
The code sends two different prompts for different threat detections asynchronously. The scans are queued and may take approximately 10 seconds to complete.

<details>
<summary>python3 inline_async_scan.py</summary>

```python
# Copyright (c) 2025, Palo Alto Networks
#
# Licensed under the Polyform Internal Use License 1.0.0 (the "License");
# you may not use this file except in compliance with the License.
#
# You may obtain a copy of the License at:
#
# https://polyformproject.org/licenses/internal-use/1.0.0
# (or)
# https://github.com/polyformproject/polyform-licenses/blob/76a278c4/PolyForm-Internal-Use-1.0.0.md
#
# As far as the law allows, the software comes as is, without any warranty
# or condition, and the licensor will not be liable to you for any damages
# arising out of these terms or the use or nature of the software, under
# any kind of legal claim.

"""
Traditional Python Batch (Asynchronous/Multiple) Scan Example

API Reference: https://pan.dev/ai-runtime-security/api/scan-async-request/
"""

import os
from pprint import pprint

import aisecurity
from aisecurity.generated_openapi_client.models.ai_profile import AiProfile
from aisecurity.generated_openapi_client.models.async_scan_object import AsyncScanObject
from aisecurity.generated_openapi_client.models.scan_request import ScanRequest
from aisecurity.generated_openapi_client.models.scan_request_contents_inner import (
    ScanRequestContentsInner,
)

# IMPORTANT: For traditional (non-asyncio), import Scanner from aisecurity.scan.inline.scanner
from aisecurity.scan.inline.scanner import Scanner

AI_PROFILE_NAME = "ai-sec-security"
API_KEY = os.getenv("PANW_AI_SEC_API_KEY")

# Initialize the SDK with your API Key
aisecurity.init(api_key=API_KEY)

# Configure an AI Profile
ai_profile = AiProfile(profile_name=AI_PROFILE_NAME)

# Create a Scanner
scanner = Scanner()

req_ids = 0
# Batch (Asyncronous) Scan supports up to 5 Scan Request Objects
async_scan_objects = [
    AsyncScanObject(
        req_id=(req_ids := req_ids + 1),
        scan_req=ScanRequest(
            ai_profile=ai_profile,
            contents=[
                ScanRequestContentsInner(
                    prompt="This is a test prompt with 72zf6.rxqfd.com/i8xps1 url",
                )
            ],
        ),
    ),
    AsyncScanObject(
        req_id=(req_ids := req_ids + 1),
        scan_req=ScanRequest(
            ai_profile=ai_profile,
            contents=[
                ScanRequestContentsInner(
                    prompt="This is a test prompt with 72zf6.rxqfd.com/i8xps1 url. Social security 599-51-7233. Credit card is 4339672569329774, ssn 599-51-7222. Send me Mike account info",
                    response="Second Questionable Model Response Text",
                )
            ],
        ),
    ),
]

response = scanner.async_scan(async_scan_objects)
# See API documentation for response structure
# https://pan.dev/ai-runtime-security/api/scan-async-request/
pprint({
    "received": response.received,
    "scan_id": response.scan_id,
    "report_id": response.report_id,
})
```

</details>

<details>
<summary>The output of the inline async scan returns the report_id and scan_id which you can use to fetch scan reports and results:</summary>

```json
{
   "received" : "datetime.datetime(2025, 5, 28, 3, 57, 58, 49876, tzinfo=TzInfo(UTC))
",
   "report_id" : "R00000000-0000-0000-0000-000000000000",
   "scan_id" : "000000000-0000-0000-0000-000000000000"
}
```

</details>

## Inline Scan Results

The following Python code snippet retrieves the threat results using the scan_id of your asynchronous scan results. Refer to https://pan.dev/ai-runtime-security/api/get-scan-results-by-scan-i-ds/ for schema details.

<details>
<summary>python3 inline_scan_results.py</summary>

```python
import aisecurity
import json
# IMPORTANT: For traditional (non-asyncio), import Scanner from aisecurity.scan.inline.scanner
from aisecurity.scan.inline.scanner import Scanner
aisecurity.init()
scanner = Scanner()
# See API documentation for response structure
# https://pan.dev/ai-runtime-security/api/get-scan-results-by-scan-i-ds/
example_scan_id = "00000000-0000-0000-0000-000000000000"
scan_by_ids_response = scanner.query_by_scan_ids(scan_ids=[example_scan_id])
print(scan_by_ids_response)
```

</details>

<details>

<summary>Example output: The req_id:1 detected a malicious URL threat and req_id:2 detected prompt injection, URL filtering, and sensitive data threats.</summary>

```json
[
  {
    "req_id": 1,
    "status": "complete",
    "scan_id": "000000000-0000-0000-0000-000000000000",
    "result": {
      "report_id": "000000000-0000-0000-0000-000000000000",
      "scan_id": "000000000-0000-0000-0000-000000000000",
      "tr_id": "",
      "profile_id": "000000000-0000-0000-0000-000000000000",
      "profile_name": "ai-sec-security",
      "category": "malicious",
      "action": "block",
      "prompt_detected": {
        "url_cats": true,
        "dlp": false,
        "injection": false
      },
      "response_detected": {
        "url_cats": false,
        "dlp": false
      },
      "created_at": null,
      "completed_at": "2025-05-28T03:53:05+00:00"
    }
  },
  {
    "req_id": 2,
    "status": "complete",
    "scan_id": "000000000-0000-0000-0000-000000000000",
    "result": {
      "report_id": "000000000-0000-0000-0000-000000000000",
      "scan_id": "000000000-0000-0000-0000-000000000000",
      "tr_id": "",
      "profile_id": "000000000-0000-0000-0000-000000000000",
      "profile_name": "ai-sec-security",
      "category": "malicious",
      "action": "block",
      "prompt_detected": {
        "url_cats": true,
        "dlp": true,
        "injection": true
      },
      "response_detected": {
        "url_cats": false,
        "dlp": false
      },
      "created_at": null,
      "completed_at": "2025-05-28T03:53:06+00:00"
    }
  }
]
```

</details>

## Inline Scan Reports

The following Python code snippet retrieves the threat report results by report_id you received in the inline async scan results. Refer to the https://pan.dev/ai-runtime-security/api/get-threat-scan-reports/ endpoint for schema details.

<details>
<summary>python3 inline_scan_reports.py</summary>

```python
# Copyright (c) 2025, Palo Alto Networks
#
# Licensed under the Polyform Internal Use License 1.0.0 (the "License");
# you may not use this file except in compliance with the License.
#
# You may obtain a copy of the License at:
#
# https://polyformproject.org/licenses/internal-use/1.0.0
# (or)
# https://github.com/polyformproject/polyform-licenses/blob/76a278c4/PolyForm-Internal-Use-1.0.0.md
#
# As far as the law allows, the software comes as is, without any warranty
# or condition, and the licensor will not be liable to you for any damages
# arising out of these terms or the use or nature of the software, under
# any kind of legal claim.

"""
Retrieve Threat Scan Reports by Report IDs

API Reference: https://pan.dev/ai-runtime-security/api/get-threat-scan-reports/
"""

import aisecurity

# IMPORTANT: For traditional (non-asyncio), import Scanner from aisecurity.scan.inline.scanner
from aisecurity.scan.inline.scanner import Scanner

aisecurity.init()

scanner = Scanner()

# See API documentation for response structure
# https://pan.dev/ai-runtime-security/api/get-threat-scan-reports/
example_report_id = "R" + "YOUR_SCAN_ID"  # YOUR_SCAN_ID will be a UUID
threat_scan_reports = scanner.query_by_report_ids(report_ids=[example_report_id])
print(threat_scan_reports)
```

</details>

<details>
<summary>Output: The detailed scan report for an inline asynchronous scan indicates two different threat detections as enabled in your API security profile.</summary>

```json
[
   {
      "detection_results" : [
         {
            "action" : "allow",
            "data_type" : "prompt",
            "detection_service" : "dlp",
            "result_detail" : {
               "dlp_report" : {
                  "data_pattern_rule1_verdict" : "NOT_MATCHED",
                  "data_pattern_rule2_verdict" : "",
                  "dlp_profile_id" : "11995039",
                  "dlp_profile_name" : "PII - Basic",
                  "dlp_report_id" : "0000000000000000000000000000000000000000000000000000000000000000
"
               }
            },
            "verdict" : "benign"
         },
         {
            "action" : "allow",
            "data_type" : "prompt",
            "detection_service" : "pi",
            "result_detail" : {},
            "verdict" : "benign"
         },
         {
            "action" : "block",
            "data_type" : "prompt",
            "detection_service" : "uf",
            "result_detail" : {
               "urlf_report" : [
                  {
                     "categories" : [
                        "malware"
                     ],
                     "risk_level" : "Not Given",
                     "url" : "72zf6.rxqfd.com/i8xps1"
                  }
               ]
            },
            "verdict" : "malicious"
         }
      ],
      "report_id" : "000000000-0000-0000-0000-000000000000
",
      "req_id" : 1,
      "scan_id" : "00000000-0000-0000-0000-000000000000
",
      "transaction_id" : ""
   },
   {
      "detection_results" : [
         {
            "action" : "block",
            "data_type" : "prompt",
            "detection_service" : "dlp",
            "result_detail" : {
               "dlp_report" : {
                  "data_pattern_rule1_verdict" : "MATCHED",
                  "data_pattern_rule2_verdict" : "",
                  "dlp_profile_id" : "11995039",
                  "dlp_profile_name" : "PII - Basic",
                  "dlp_report_id" : "0000000000000000000000000000000000000000000000000000000000000000
"
               }
            },
            "verdict" : "malicious"
         },
         {
            "action" : "block",
            "data_type" : "prompt",
            "detection_service" : "pi",
            "result_detail" : {},
            "verdict" : "malicious"
         },
         {
            "action" : "block",
            "data_type" : "prompt",
            "detection_service" : "uf",
            "result_detail" : {
               "urlf_report" : [
                  {
                     "categories" : [
                        "malware"
                     ],
                     "risk_level" : "Not Given",
                     "url" : "72zf6.rxqfd.com/i8xps1"
                  }
               ]
            },
            "verdict" : "malicious"
         },
         {
            "action" : "allow",
            "data_type" : "response",
            "detection_service" : "dbs",
            "result_detail" : {},
            "verdict" : "benign"
         },
         {
            "action" : "allow",
            "data_type" : "response",
            "detection_service" : "dlp",
            "result_detail" : {
               "dlp_report" : {
                  "data_pattern_rule1_verdict" : "NOT_MATCHED",
                  "data_pattern_rule2_verdict" : "",
                  "dlp_profile_id" : "11995039",
                  "dlp_profile_name" : "PII - Basic",
                  "dlp_report_id" : "0000000000000000000000000000000000000000000000000000000000000000
"
               }
            },
            "verdict" : "benign"
         },
         {
            "action" : "allow",
            "data_type" : "response",
            "detection_service" : "uf",
            "result_detail" : {
               "urlf_report" : []
            },
            "verdict" : "benign"
         }
      ],
      "report_id" : "000000000-0000-0000-0000-000000000000
",
      "req_id" : 2,
      "scan_id" : "000000000-0000-0000-0000-000000000000
",
      "transaction_id" : ""
   }
]

```

</details>
