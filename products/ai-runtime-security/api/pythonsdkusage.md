---
id: pythonsdkusage
title: "Python SDK Usage"
sidebar_label: "Python SDK Usage"
keywords:
  - PythonSDK
  - AIRS
  - Reference
  - Cloud
  - API
---

## Synchronous Inline Scan

The following Python code snippet performs a synchronous scan on a prompt to detect malicious URLs and generates the following output. Enable Prompt Injection Detection in the API security profile for this detection to be effective.

<details>
<summary>python3 inline_sync_scan_api.py</summary>

```python
import aisecurity
import json


from aisecurity.generated_openapi_client import Metadata
from aisecurity.generated_openapi_client.models.ai_profile import AiProfile
from aisecurity.scan.models.content import Content
from aisecurity.scan.inline.scanner import Scanner
from pprint import pprint


# Either the Profile name or Profile ID is sufficient; both are not mandatory
#DEMO_AI_PROFILE_ID: str = "YOUR_PROFILE_ID_GOES_HERE"
DEMO_AI_PROFILE_NAME: str = "ai-sec-security"
DEMO_API_KEY: str = "<your-API-key>"


"""
Sdk setup


The aisecurity.init() function accepts the following parameters:
   1)api_key : Provide your API key through configuration or an environment variable.
   2)api_endpoint (optional): Default value is "https://security.api.aisecurity.paloaltonetworks.com".
   2)num_retries (optional): Default value is 5.


Setting up the API Key:
Choose one of the following API Key Configuration Methods:
1) Using an environment variable:
   export PANW_AI_SEC_API_KEY=YOUR_API_KEY_GOES_HERE
2) Load Dynamically from a secure Secret Store (e.g. Cloud Secrets Manager / Vault)
   api_key = function_to_get_api_key() # TODO: Load an API Key at runtime
   aisecurity.init(api_key=api_key)




Customizing the API Endpoint
   aisecurity.init(api_endpoint="https://api.example.com")


"""


aisecurity.init(api_key=DEMO_API_KEY)


pprint("Create a new scanner")
ai_security_example = Scanner()


# Create AI profile and content objects
ai_profile = AiProfile(profile_name=DEMO_AI_PROFILE_NAME)
content1 = Content(
   prompt="This is a tests prompt with 72zf6.rxqfd.com/i8xps1 url",
   response="This is a tests response",
)
## Optional parameters for the scan api
tr_id = "1111"  # Optionally Provide any unique identifier string for correlating the prompt and response transactions.
metadata = Metadata(
   app_name="concurrent_sdk", app_user="user", ai_model="sample_model"
)  # Optionally send the app_name, app_user, and ai_model in the metadata




pprint("==============================================================")
pprint("Invoke sync scan call")
scan_response = ai_security_example.sync_scan(
   ai_profile=ai_profile, content=content1, tr_id=tr_id, metadata=metadata
)
pprint("==============================================================")
"""
Sync scan example
   report_id='demo_report_id'
   scan_id='demo_scan_id'
   tr_id='demo_transaction_id'
   profile_id='demo_profile_id'
   profile_name='demo_profile_name'
   category='demo_category'
   action='demo_action'
   prompt_detected=PromptDetected(url_cats=True, dlp=False, injection=False)
   response_detected=ResponseDetected(url_cats=False, dlp=False)
   created_at=None
   completed_at=None
"""
pprint(f"sync scan response: {scan_response}\n")




if __name__ == "__main__":
   pprint("ai_security Example is completed")
```
</details>

The sample output confirms prompt injection detection in the prompt, indicating the `url_cats=true` with the `action=block` as you set in the API security profile.

```json
"sync scan response: report_id='Rcb66669d-b45f-4d96-8f42-1d3d4f30fae4' "
 "scan_id='cb66669d-b45f-4d96-8f42-1d3d4f30fae4' tr_id='1234' "
 "profile_id='8c8fdf8b-d494-4e41-ba54-c16120c4ef0b' "
 "profile_name='ai-sec-db-security' category='malicious' action='block' "
 "prompt_detected=PromptDetected(url_cats=True, dlp=False, injection=False) "
 "response_detected=ResponseDetected(url_cats=False, dlp=False) "
 "created_at=None completed_at=None\n"
```

## Asynchronous Inline Scan

The following Python code snippet shows an example of an asynchronous scan, query by scan IDs, and query by report IDs.
It scans a prompt asynchronously. The scans are queued and may take approximately 10 seconds to complete.

<details>
<summary>python3 inline_async_scan_api.py</summary>

```python
import aisecurity


from aisecurity.generated_openapi_client.models.async_scan_object import AsyncScanObject
from aisecurity.generated_openapi_client.models.scan_request import ScanRequest
from aisecurity.generated_openapi_client.models.ai_profile import AiProfile
from aisecurity.generated_openapi_client.models.scan_request_contents_inner import (
   ScanRequestContentsInner,
)
from aisecurity.scan.inline.scanner import Scanner
from aisecurity.scan.models.content import Content
from pprint import pprint


# Either the Profile name or Profile ID is sufficient; both are not mandatory
# DEMO_AI_PROFILE_ID: str = "YOUR_PROFILE_ID_GOES_HERE"
DEMO_AI_PROFILE_NAME: str = "ai-sec-security"
DEMO_API_KEY: str = "<your-API-key>"
"""
Sdk setup


The aisecurity.init() function accepts the following parameters:
   1)api_key : Provide your API key through configuration or an environment variable.
   2)api_endpoint (optional): Default value is "https://security.api.aisecurity.paloaltonetworks.com".
   2)num_retries (optional): Default value is 5.


Setting up the API Key:
Choose one of the following API Key Configuration Methods:


1) Using an environment variable:
   export PANW_AI_SEC_API_KEY=YOUR_API_KEY_GOES_HERE
2) Load Dynamically from a secure Secret Store (e.g. Cloud Secrets Manager / Vault)
   api_key = function_to_get_api_key() # TODO: Load an API Key at runtime
   aisecurity.init(api_key=api_key)




Customizing the API Endpoint
   aisecurity.init(api_endpoint="https://api.example.com")


"""


aisecurity.init(api_key=DEMO_API_KEY)


pprint("Create a new scanner")
ai_security_example = Scanner()


# Enter one of the following: profile_id or profile_name, both are not mandatory
ai_profile = AiProfile(profile_name=DEMO_AI_PROFILE_NAME)
content1 = Content(
   # Enter one of the following - prompt or response
   prompt="This is a tests prompt with 72zf6.rxqfd.com/i8xps1 url",
   response="This is a tests response",
)


# Prepare async scan objects
async_scan_objects = [
   AsyncScanObject(
       req_id=1,
       scan_req=ScanRequest(
           tr_id="1234",
           ai_profile=ai_profile,
           contents=[
               ScanRequestContentsInner(
                   prompt=content1.prompt, response=content1.response
               )
           ],
       ),
   ),
   AsyncScanObject(
       req_id=2,
       scan_req=ScanRequest(
           ai_profile=ai_profile,
           contents=[
               ScanRequestContentsInner(
                   prompt=content1.prompt, response=content1.response
               )
           ],
       ),
   ),
]




pprint("==============================================================")
"""
Async scan example
"""
pprint("Invoke async scan call")
# Introduce a 2-second delay
time.sleep(2)
scan_async_response = ai_security_example.async_scan(async_scan_objects)
pprint(f"async scan response: {scan_async_response}\n")
pprint("==============================================================")
"""
Query scan result by scanId example - query newly async request
[
   ScanIdResult(
       req_id=1,
       status='demo_status',
       scan_id='demo_scan_id',
       result=ScanResponse(
           report_id='demo_report_id',
           scan_id='demo_scan_id',
           tr_id='demo_tr_id',
           profile_id='demo_profile_id',
           profile_name='demo_profile_name',
           category='demo_category',
           action='demo_action',
           prompt_detected=PromptDetected(
               url_cats=False,
               dlp=False,
               injection=False
           ),
           response_detected=ResponseDetected(
               url_cats=False,
               dlp=False
           ),
           created_at=None,
           completed_at=datetime.datetime(1, 1, 1, 0, 0, tzinfo=TzInfo(UTC))
       )
   )
   ]
"""


scan_by_ids_response = ai_security_example.query_by_scan_ids(
   scan_ids=[scan_async_response.scan_id]
)
pprint("==============================================================")
pprint(
   f"scan by ids response newly async scan id is {scan_async_response.scan_id} and the result is {scan_by_ids_response}\n"
)
pprint("==============================================================")
"""
Query  Report example - query existing async request
[
   ThreatScanReportObject(
       report_id='demo_report_id',
       scan_id='demo_scan_id',
       req_id=1,
       transaction_id='demo_transaction_id',
       detection_results=[
           DetectionServiceResultObject(
               data_type='demo_data_type',
               detection_service='demo_detection_service',
               verdict='demo_verdict',
               action='demo_action',
               result_detail=DSDetailResultObject(
                   urlf_report=[
                       UrlfEntryObject(
                           url='demo_url',
                           risk_level='demo_risk_level',
                           categories=['demo_category']
                       )
                   ],
                   dlp_report=None
               )
           ),
           DetectionServiceResultObject(
               data_type='demo_data_type',
               detection_service='demo_detection_service',
               verdict='demo_verdict',
               action='demo_action',
               result_detail=DSDetailResultObject(
                   urlf_report=None,
                   dlp_report=None
               )
           )
       ]
   )
]


"""


scan_by_ids_response = ai_security_example.query_by_report_ids(
   report_ids=[scan_async_response.report_id]
)


pprint(f"query by report ids response and the result is {scan_by_ids_response}\n")
pprint("==============================================================")


if __name__ == "__main__":
   pprint("ai_security Example is completed")
```

</details>

<details>
<summary>Sample output:</summary>

```json
'Create a new scanner'
'=============================================================='
'Invoke async scan call'
('async scan response: received=datetime.datetime(2025, 3, 13, 17, 12, 45, '
"599922, tzinfo=TzInfo(UTC)) scan_id='2a706cfa-37b9-42f6-92e6-4edb1af9ba96' "
"report_id='R2a706cfa-37b9-42f6-92e6-4edb1af9ba96'\n")
'=============================================================='
'=============================================================='
('scan by ids response newly async scan id is '
'2a706cfa-37b9-42f6-92e6-4edb1af9ba96 and the result is '
"[ScanIdResult(req_id=1, status='complete', "
"scan_id='2a706cfa-37b9-42f6-92e6-4edb1af9ba96', "
"result=ScanResponse(report_id='R2a706cfa-37b9-42f6-92e6-4edb1af9ba96', "
"scan_id='2a706cfa-37b9-42f6-92e6-4edb1af9ba96', tr_id='1234', "
"profile_id='8c8fdf8b-d494-4e41-ba54-c16120c4ef0b', "
"profile_name='ai-sec-db-security', category='malicious', action='block', "
'prompt_detected=PromptDetected(url_cats=True, dlp=False, injection=False), '
'response_detected=ResponseDetected(url_cats=False, dlp=False), '
'created_at=None, completed_at=datetime.datetime(2025, 3, 13, 17, 12, 46, '
"tzinfo=TzInfo(UTC)))), ScanIdResult(req_id=2, status='complete', "
"scan_id='2a706cfa-37b9-42f6-92e6-4edb1af9ba96', "
"result=ScanResponse(report_id='R2a706cfa-37b9-42f6-92e6-4edb1af9ba96', "
"scan_id='2a706cfa-37b9-42f6-92e6-4edb1af9ba96', tr_id='', "
"profile_id='8c8fdf8b-d494-4e41-ba54-c16120c4ef0b', "
"profile_name='ai-sec-db-security', category='malicious', action='block', "
'prompt_detected=PromptDetected(url_cats=True, dlp=False, injection=False), '
'response_detected=ResponseDetected(url_cats=False, dlp=False), '
'created_at=None, completed_at=datetime.datetime(2025, 3, 13, 17, 12, 46, '
'tzinfo=TzInfo(UTC))))]\n')
'=============================================================='
('query by report ids response and the result is '
"[ThreatScanReportObject(report_id='R2a706cfa-37b9-42f6-92e6-4edb1af9ba96', "
"scan_id='2a706cfa-37b9-42f6-92e6-4edb1af9ba96', req_id=1, "
"transaction_id='1234', "
"detection_results=[DetectionServiceResultObject(data_type='prompt', "
"detection_service='dlp', verdict='benign', action='allow', "
'result_detail=DSDetailResultObject(urlf_report=None, '
"dlp_report=DlpReportObject(dlp_report_id='CEB4AD72ECA22B7A16C0EA1EC561EB23607F1330102CB7248C0C1D4F22F4BCB1', "
"dlp_profile_name='PII - Basic', dlp_profile_id='11995039', "
"dlp_profile_version=None, data_pattern_rule1_verdict='NOT_MATCHED', "
"data_pattern_rule2_verdict=''))), "
"DetectionServiceResultObject(data_type='prompt', detection_service='pi', "
"verdict='benign', action='allow', "
'result_detail=DSDetailResultObject(urlf_report=None, dlp_report=None)), '
"DetectionServiceResultObject(data_type='prompt', detection_service='uf', "
"verdict='malicious', action='block', "
"result_detail=DSDetailResultObject(urlf_report=[UrlfEntryObject(url='72zf6.rxqfd.com/i8xps1', "
"risk_level='Not Given', categories=['malware'])], dlp_report=None)), "
"DetectionServiceResultObject(data_type='response', detection_service='dbs', "
"verdict='benign', action='allow', "
'result_detail=DSDetailResultObject(urlf_report=None, dlp_report=None)), '
"DetectionServiceResultObject(data_type='response', detection_service='dlp', "
"verdict='benign', action='allow', "
'result_detail=DSDetailResultObject(urlf_report=None, '
"dlp_report=DlpReportObject(dlp_report_id='F878E8868506459A23F6075C7038E8BE0BF32281926CD6253D2AD03BFBA2D5D5', "
"dlp_profile_name='PII - Basic', dlp_profile_id='11995039', "
"dlp_profile_version=None, data_pattern_rule1_verdict='NOT_MATCHED', "
"data_pattern_rule2_verdict=''))), "
"DetectionServiceResultObject(data_type='response', detection_service='uf', "
"verdict='benign', action='allow', "
'result_detail=DSDetailResultObject(urlf_report=[], dlp_report=None))]), '
"ThreatScanReportObject(report_id='R2a706cfa-37b9-42f6-92e6-4edb1af9ba96', "
"scan_id='2a706cfa-37b9-42f6-92e6-4edb1af9ba96', req_id=2, transaction_id='', "
"detection_results=[DetectionServiceResultObject(data_type='prompt', "
"detection_service='dlp', verdict='benign', action='allow', "
'result_detail=DSDetailResultObject(urlf_report=None, '
"dlp_report=DlpReportObject(dlp_report_id='4564D36396083FB5715A965AD5C1991291E0F5D1D9F449D984F37EB7003BBBEE', "
"dlp_profile_name='PII - Basic', dlp_profile_id='11995039', "
"dlp_profile_version=None, data_pattern_rule1_verdict='NOT_MATCHED', "
"data_pattern_rule2_verdict=''))), "
"DetectionServiceResultObject(data_type='prompt', detection_service='pi', "
"verdict='benign', action='allow', "
'result_detail=DSDetailResultObject(urlf_report=None, dlp_report=None)), '
"DetectionServiceResultObject(data_type='prompt', detection_service='uf', "
"verdict='malicious', action='block', "
"result_detail=DSDetailResultObject(urlf_report=[UrlfEntryObject(url='72zf6.rxqfd.com/i8xps1', "
"risk_level='Not Given', categories=['malware'])], dlp_report=None)), "
"DetectionServiceResultObject(data_type='response', detection_service='dbs', "
"verdict='benign', action='allow', "
'result_detail=DSDetailResultObject(urlf_report=None, dlp_report=None)), '
"DetectionServiceResultObject(data_type='response', detection_service='dlp', "
"verdict='benign', action='allow', "
'result_detail=DSDetailResultObject(urlf_report=None, '
"dlp_report=DlpReportObject(dlp_report_id='9C7EE1FA7B4B9668D4F80259D6D174530B85884795711D7B916D156767407617', "
"dlp_profile_name='PII - Basic', dlp_profile_id='11995039', "
"dlp_profile_version=None, data_pattern_rule1_verdict='NOT_MATCHED', "
"data_pattern_rule2_verdict=''))), "
"DetectionServiceResultObject(data_type='response', detection_service='uf', "
"verdict='benign', action='allow', "
'result_detail=DSDetailResultObject(urlf_report=[], dlp_report=None))])]\n')
'=============================================================='
'ai_security Example is completed'
```
</details>

## Asyncio Synchronous and Asynchronous Scans

The following Python code snippet shows an example of synchronous and asynchronous scans using `asyncio` library.

<details>
<summary>python3 asyncio_sync_scan_api.py</summary>

```python
import asyncio
import aisecurity
from aisecurity.generated_openapi_client import AiProfile, Metadata
from aisecurity.generated_openapi_client import AsyncScanObject
from aisecurity.generated_openapi_client import ScanRequest
from aisecurity.generated_openapi_client import ScanRequestContentsInner


from aisecurity.scan.models.content import Content
from aisecurity.scan.asyncio.scanner import Scanner
from pprint import pprint


# Either the Profile name or Profile ID is sufficient; both are not mandatory
# DEMO_AI_PROFILE_ID: str = "YOUR_PROFILE_ID_GOES_HERE"
DEMO_AI_PROFILE_NAME: str = "ai-sec-security"
DEMO_API_KEY: str = "<your-API-key>"


"""
Sdk setup


The aisecurity.init() function accepts the following parameters:
   1)api_key : Provide your API key through configuration or an environment variable.
   2)api_endpoint (optional): Default value is "https://security.api.aisecurity.paloaltonetworks.com".
   2)num_retries (optional): Default value is 5.


Setting up the API Key:
Choose one of the following API Key Configuration Methods::
1) Using an environment variable:
   export PANW_AI_SEC_API_KEY=YOUR_API_KEY_GOES_HERE
2) Load Dynamically from a secure Secret Store (e.g. Cloud Secrets Manager / Vault)
   api_key = function_to_get_api_key() # TODO: Load an API Key at runtime
   aisecurity.init(api_key=api_key)




Customizing the API Endpoint
   aisecurity.init(api_endpoint="https://api.example.com")


"""




aisecurity.init(api_key=DEMO_API_KEY)
aisecurity_example = Scanner()
# Create AI profile and content objects
ai_profile = AiProfile(profile_name=DEMO_AI_PROFILE_NAME)
content1 = Content(
   prompt="This is a tests prompt with 72zf6.rxqfd.com/i8xps1 url",
   response="This is a tests response",
)
tr_id = "1234"  # Optionally Provide any unique identifier string for correlating the prompt and response transactions.
metadata = Metadata(
   app_name="concurrent_sdk", app_user="user", ai_model="sample_model"
)  # Optionally send the app_name, app_user, and ai_model in the metadata


# Prepare async scan objects
async_scan_objects = [
   AsyncScanObject(
       req_id=1,
       scan_req=ScanRequest(
           ai_profile=ai_profile,
           contents=[
               ScanRequestContentsInner(
                   prompt=content1.prompt, response=content1.response
               )
           ],
       ),
   ),
   AsyncScanObject(
       req_id=2,
       scan_req=ScanRequest(
           ai_profile=ai_profile,
           contents=[
               ScanRequestContentsInner(
                   prompt=content1.prompt, response=content1.response
               )
           ],
       ),
   ),
]




async def run_concurrent_scans():
   # Run sync_scan, async_scan, and query_by_report_ids concurrently
   sync_scan_task = aisecurity_example.sync_scan(
       ai_profile=ai_profile, content=content1, tr_id=tr_id, metadata=metadata
   )
   async_scan_task = aisecurity_example.async_scan(async_scan_objects)


   # Wait for all tasks to complete
   sync_result, async_result = await asyncio.gather(sync_scan_task, async_scan_task)


   # Process and pprint results
   sync_response = sync_result
   async_response = async_result
   pprint("==============================================================")
   pprint(f"Sync scan response : {sync_response}")
   pprint("==============================================================")
   pprint(f"Async scan response : {async_response}")
   pprint("==============================================================")


   # Query the async scan result
   if async_response and async_response.scan_id and async_response.report_id:
       (scan_by_ids_response) = await aisecurity_example.query_by_scan_ids(
           scan_ids=[async_response.scan_id]
       )
       """
       Query scan result by scanId example - query newly async request
       [
       ScanIdResult(
       req_id=1,
       status='demo_status',
       scan_id='demo_scan_id',
       result=ScanResponse(
           report_id='demo_report_id',
           scan_id='demo_scan_id',
           tr_id='demo_tr_id',
           profile_id='demo_profile_id',
           profile_name='demo_profile_name',
           category='demo_category',
           action='demo_action',
           prompt_detected=PromptDetected(
               url_cats=False,
               dlp=False,
               injection=False
           ),
           response_detected=ResponseDetected(
               url_cats=False,
               dlp=False
           ),
           created_at=None,
           completed_at=datetime.datetime(1, 1, 1, 0, 0, tzinfo=TzInfo(UTC))
           )
           )
       ]
       """
       pprint(
           f"Async scan ID: {async_response.scan_id}, Result: {scan_by_ids_response}"
       )


       (report_by_ids_response) = await aisecurity_example.query_by_report_ids(
           report_ids=[async_response.report_id]
       )
       """
       [
       ThreatScanReportObject(
       report_id='demo_report_id',
       scan_id='demo_scan_id',
       req_id=1,
       transaction_id='demo_transaction_id',
       detection_results=[
           DetectionServiceResultObject(
               data_type='demo_data_type',
               detection_service='demo_detection_service',
               verdict='demo_verdict',
               action='demo_action',
               result_detail=DSDetailResultObject(
                   urlf_report=[
                       UrlfEntryObject(
                           url='demo_url',
                           risk_level='demo_risk_level',
                           categories=['demo_category']
                       )
                   ],
                   dlp_report=None
               )
           ),
           DetectionServiceResultObject(
               data_type='demo_data_type',
               detection_service='demo_detection_service',
               verdict='demo_verdict',
               action='demo_action',
               result_detail=DSDetailResultObject(
                   urlf_report=None,
                   dlp_report=None
               )
           )
       ]
       """
       pprint("==============================================================")
       pprint(
           f"Async report ID: {async_response.report_id}, Result: {report_by_ids_response}"
       )




if __name__ == "__main__":
   try:
       asyncio.run(run_concurrent_scans())
       pprint("AI Security concurrent scanning example completed")
   except Exception as e:
       pprint(f"Error: {e}")
   finally:
       asyncio.run(aisecurity_example.close())
```

The verdict is malicious when there a threat is detected, and the action is set to allow or block as set by you in the API security profile.
The verdict is benign when no threat is detected by the Python SDK scan.
</details>

<details>
<summary>Sample output:</summary>

```json
'=============================================================='
("Sync scan response : report_id='R36ac8984-93d7-42dd-aa91-64ea5e03df6a' "
 "scan_id='36ac8984-93d7-42dd-aa91-64ea5e03df6a' tr_id='1234' "
 "profile_id='068ff227-4ee3-44e9-8f69-9cbfd523fee3' "
 "profile_name='ai-sec-security' category='malicious' action='block' "
 'prompt_detected=PromptDetected(url_cats=True, dlp=False, injection=False) '
 'response_detected=ResponseDetected(url_cats=False, dlp=False) '
 'created_at=None completed_at=None')
'=============================================================='
('Async scan response : received=datetime.datetime(2025, 4, 14, 11, 24, 32, '
 "521057, tzinfo=TzInfo(UTC)) scan_id='ff0b83d3-b5e2-4cac-871e-abcd1c6f0557' "
 "report_id='Rff0b83d3-b5e2-4cac-871e-abcd1c6f0557'")
'=============================================================='
('Async scan ID: ff0b83d3-b5e2-4cac-871e-abcd1c6f0557, Result: '
 "[ScanIdResult(req_id=1, status='pending', "
 "scan_id='ff0b83d3-b5e2-4cac-871e-abcd1c6f0557', "
 "result=ScanResponse(report_id='Rff0b83d3-b5e2-4cac-871e-abcd1c6f0557', "
 "scan_id='ff0b83d3-b5e2-4cac-871e-abcd1c6f0557', tr_id='', "
 "profile_id='068ff227-4ee3-44e9-8f69-9cbfd523fee3', "
 "profile_name='ai-sec-security', category='malicious', action='block', "
 'prompt_detected=PromptDetected(url_cats=True, dlp=False, injection=False), '
 'response_detected=ResponseDetected(url_cats=False, dlp=False), '
 'created_at=None, completed_at=datetime.datetime(2025, 4, 14, 11, 24, 33, '
 "tzinfo=TzInfo(UTC)))), ScanIdResult(req_id=2, status='complete', "
 "scan_id='ff0b83d3-b5e2-4cac-871e-abcd1c6f0557', "
 "result=ScanResponse(report_id='Rff0b83d3-b5e2-4cac-871e-abcd1c6f0557', "
 "scan_id='ff0b83d3-b5e2-4cac-871e-abcd1c6f0557', tr_id='', "
 "profile_id='068ff227-4ee3-44e9-8f69-9cbfd523fee3', "
 "profile_name='ai-sec-security', category='malicious', action='block', "
 'prompt_detected=PromptDetected(url_cats=True, dlp=False, injection=False), '
 'response_detected=ResponseDetected(url_cats=False, dlp=False), '
 'created_at=None, completed_at=datetime.datetime(2025, 4, 14, 11, 24, 34, '
 'tzinfo=TzInfo(UTC))))]')
'=============================================================='
('Async report ID: Rff0b83d3-b5e2-4cac-871e-abcd1c6f0557, Result: '
 "[ThreatScanReportObject(report_id='Rff0b83d3-b5e2-4cac-871e-abcd1c6f0557', "
 "scan_id='ff0b83d3-b5e2-4cac-871e-abcd1c6f0557', req_id=1, transaction_id='', "
 "detection_results=[DetectionServiceResultObject(data_type='prompt', "
 "detection_service='dlp', verdict='benign', action='allow', "
 'result_detail=DSDetailResultObject(urlf_report=None, '
 "dlp_report=DlpReportObject(dlp_report_id='AD5DF9FD1EE2D0DEE8E79780D8AED4580B8D7925FC16F81ABDF35740A2A80649', "
 "dlp_profile_name='PII - Basic', dlp_profile_id='11995039', "
 "dlp_profile_version=None, data_pattern_rule1_verdict='NOT_MATCHED', "
 "data_pattern_rule2_verdict=''))), "
 "DetectionServiceResultObject(data_type='prompt', detection_service='pi', "
 "verdict='benign', action='allow', "
 'result_detail=DSDetailResultObject(urlf_report=None, dlp_report=None)), '
 "DetectionServiceResultObject(data_type='prompt', detection_service='uf', "
 "verdict='malicious', action='block', "
 "result_detail=DSDetailResultObject(urlf_report=[UrlfEntryObject(url='72zf6.rxqfd.com/i8xps1', "
 "risk_level='Not Given', categories=['malware'])], dlp_report=None)), "
 "DetectionServiceResultObject(data_type='response', detection_service='dbs', "
 "verdict='benign', action='allow', "
 'result_detail=DSDetailResultObject(urlf_report=None, dlp_report=None)), '
 "DetectionServiceResultObject(data_type='response', detection_service='dlp', "
 "verdict='benign', action='allow', "
 'result_detail=DSDetailResultObject(urlf_report=None, '
 "dlp_report=DlpReportObject(dlp_report_id='D9A218611B236C8F3A3A9259C777930435F132B772E45B63F397D5896183F15F', "
 "dlp_profile_name='PII - Basic', dlp_profile_id='11995039', "
 "dlp_profile_version=None, data_pattern_rule1_verdict='NOT_MATCHED', "
 "data_pattern_rule2_verdict=''))), "
 "DetectionServiceResultObject(data_type='response', detection_service='uf', "
 "verdict='benign', action='allow', "
 'result_detail=DSDetailResultObject(urlf_report=[], dlp_report=None))]), '
 "ThreatScanReportObject(report_id='Rff0b83d3-b5e2-4cac-871e-abcd1c6f0557', "
 "scan_id='ff0b83d3-b5e2-4cac-871e-abcd1c6f0557', req_id=2, transaction_id='', "
 "detection_results=[DetectionServiceResultObject(data_type='prompt', "
 "detection_service='dlp', verdict='benign', action='allow', "
 'result_detail=DSDetailResultObject(urlf_report=None, '
 "dlp_report=DlpReportObject(dlp_report_id='E1BBB2FEFA825AEF534C0079B3C3D9D10E60533619690C5E0FFD99428B407A81', "
 "dlp_profile_name='PII - Basic', dlp_profile_id='11995039', "
 "dlp_profile_version=None, data_pattern_rule1_verdict='NOT_MATCHED', "
 "data_pattern_rule2_verdict=''))), "
 "DetectionServiceResultObject(data_type='prompt', detection_service='pi', "
 "verdict='benign', action='allow', "
 'result_detail=DSDetailResultObject(urlf_report=None, dlp_report=None)), '
 "DetectionServiceResultObject(data_type='prompt', detection_service='uf', "
 "verdict='malicious', action='block', "
 "result_detail=DSDetailResultObject(urlf_report=[UrlfEntryObject(url='72zf6.rxqfd.com/i8xps1', "
 "risk_level='Not Given', categories=['malware'])], dlp_report=None)), "
 "DetectionServiceResultObject(data_type='response', detection_service='dbs', "
 "verdict='benign', action='allow', "
 'result_detail=DSDetailResultObject(urlf_report=None, dlp_report=None)), '
 "DetectionServiceResultObject(data_type='response', detection_service='dlp', "
 "verdict='benign', action='allow', "
 'result_detail=DSDetailResultObject(urlf_report=None, '
 "dlp_report=DlpReportObject(dlp_report_id='E4DC98A03EFAB192F26FA5E8CB0FE2B5CC675EDF7EBDE0DFF70EB5F937C1A7EE', "
 "dlp_profile_name='PII - Basic', dlp_profile_id='11995039', "
 "dlp_profile_version=None, data_pattern_rule1_verdict='NOT_MATCHED', "
 "data_pattern_rule2_verdict=''))), "
 "DetectionServiceResultObject(data_type='response', detection_service='uf', "
 "verdict='benign', action='allow', "
 'result_detail=DSDetailResultObject(urlf_report=[], dlp_report=None))])]')
'AI Security concurrent scanning example completed'
```

</details>
