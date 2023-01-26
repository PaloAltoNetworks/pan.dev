---
id: expedition_workflow_bulkchange
title: Bulk Change to apply SPG Workflow
sidebar_label: Bulk Change to apply SPG
hide_title: false
description: Bulk Change to apply SPG Workflow
keywords:
  - pan-os
  - panos
  - xml
  - api
  - expedition
  - migration
  - firewall
  - configuration
  - automation
  - conversion

image: /expedition/img/expedition.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from "@docusaurus/Link";
export function SetLanguage (lang) {
if (typeof window !== 'undefined'){
localStorage.setItem('defaultLanguage', lang)
window.location.reload()
}
}

<br/>

In this section we present a workflow example for bulk change apply Security Profile group to all allowed security rules in a PAN-OS configuration.

Below flowchart demo the workflow and the related API calls in each of the steps:

```mermaid
flowchart TB
    A[Obtain the API Keys<br/> POST https://localhost/api/v1/generate_api_key ] --> B[Start the Agent<br/> POST https://localhost/api/v1/agent/start]
    B[Start the Agent<br/> POST https://localhost/api/v1/agent/start]  --> C[Add PAN-OS device<br/> POST https://localhost/api/v1/device]
    C[Add PAN-OS device<br/> POST https://localhost/api/v1/device]  --> D["Upload PAN-OS config into device<br/> POST https://localhost/api/v1/{device_id}/upload_config"]
    D["Upload PAN-OS config into device<br/> POST https://localhost/api/v1/{device_id}/upload_config"]--> E[Create an Expedition Project<br/> POST https://localhost/api/v1/project]
    E[Create an Expedition Project<br/> POST https://localhost/api/v1/project] --> F["Import the PAN-OS configuration of your device to the project<br/> POST https://localhost/api/v1/project/{project_id}/import/device"]
    F["Import the PAN-OS configuration of your device to the project<br/> POST https://localhost/api/v1/project/{project_id}/import/device"] --> G["Get source ID of the config file<br/> GET https://localhost/api/v1/project/{project_id}/source"]
    G["Get source ID of the config file<br/> GET https://localhost/api/v1/project/{project_id}/source"]--> H["Create a filter for all allowed security rules<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter"]
    H["Create a filter for all allowed security rules<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter"] --> I["Execute the filter<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/execute"]
    I["Execute the filter<br/> POST https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/execute"] --> J["Print the Filter Execution Result<br/> GET https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/result"]
    J["Print the Filter Execution Result<br/> GET https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/result"] --> K["Get Security Profile Group ID<br/> GET https://localhost/api/v1/project/{project_id}/object/profile_group"]
    K["Get Security Profile Group ID<br/> GET https://localhost/api/v1/project/{project_id}/object/profile_group" ] --> L["Bulk Change Apply SPG to all allowed rules<br/> PUT https://localhost/api/v1/project/{project_id}/policy/security"]
```

### Step 1. Obtain the API Keys

Refer to [Obtaining the API Keys](creating_credentials.mdx) section to obtain a valid API key stored in the `hed` variable.

### Step 2. Start the Expedition Agent

Refer to [Managing Expedition's Agent](/expedition/docs/managing_expedition_agent) section to start the agent and be able to perform imports into a project.

### Step 3. Add PAN-OS Device

Making a POST call to the Device route, we can create a Device with a desired name.
Notice that we attach the credentials `hed` in the CURL headers to present our credentials and verify we have permission to create a device.

API syntax for creating a new device :

| Method  | Route                                            | Request Body Parameters                                                                                                                                    |
| ------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST    | <small>`https://localhost/api/v1/device`</small> | <small>{**"name"**: devicename, **"serial"**: serialnumber,**"hostname"**: panosip,**"type"**: devicetype,**"description"**: pandescription,<br/>}</small> |
| Example | <small>`https://localhost/api/v1/device`</small> | <small>{**"name"**:"mypanorama", **"serial"**:"123456789",**"hostname"**:"pan1",**"type"**:"vm-panorama"**"description"**:"Project for testing"}</small>   |

:::info
**The supported device "type" are below:**

            "m100",
            "m500",
            "m600",
            "vm-panorama",
            "pa200",
            "pa220",
            "pa500",
            "pa800",
            "pa3000",
            "pa3200",
            "pa4000",
            "pa5000",
            "pa5200",
            "pa7000",
            "vm-series"

:::

<Tabs defaultValue={typeof window !== 'undefined' && localStorage.getItem('defaultLanguage') ? localStorage.getItem('defaultLanguage') : 'python'}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
print("*****Add a new PAN-OS device\n")
panosip = '1.1.1.1'
serialnumber = '123412'
devicetype = "pa220"
pandescription = 'test'
url = "https://" + ip + "/api/v1/device"
data = {
    "name": devicename,
    "serial": serialnumber,
    "hostname": panosip,
    "type": devicetype,
    "description": pandescription,
}
r = requests.post(url, data=data, verify=False, headers=hed)
response = r.json()
success = json.dumps(response["success"])
if success == "true":
    print("New device created successfully" + " \n")
    DeviceId = json.dumps(response['data']['id'])
    print("Your Device-ID is " + str(DeviceId) + " \n")
else:
    print("Unable to create the device")
print("*****Upload PAN-OS config into device*****\n")
```

</TabItem>
</Tabs>

### Step 4. Upload PAN-OS config into device

After device has been created , the next step will be uploading your pan-os config to associate with the device.

API syntax for upload PAN-OS config into device :

| Method  | Route                                                                      | Path Parameters                             |
| ------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| POST    | <small>"https://localhost/api/v1/device/{device_id}/upload_config"</small> | <small>**"device_id"**: "device_id"</small> |
| Example | <small>"https://localhost/api/v1/device/23/upload_config"</small>          | 23                                          |

<Tabs defaultValue={typeof window !== 'undefined' && localStorage.getItem('defaultLanguage') ? localStorage.getItem('defaultLanguage') : 'python'}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
print("*****Upload PAN-OS config into device*****\n")
file = '/Users/user1/Downloads/panoramabase.xml'
panosconfig = open(file, "rb")
files = {"config": panosconfig}
url = 'https://' + ip + '/api/v1/device/{0}/upload_config'.format(int(DeviceId))
r = requests.post(url, files=files, verify=False, headers=hed)
response = r.json()
success = json.dumps(response["success"])
if success == "true":
    print("Pan-OS config uploaded to the device successfully\n")
else:
    result = json.dumps(response["messages"][0]["message"])
    print(result)
```

</TabItem>
</Tabs>

### Step 5. Create an Expedition Project

In the large amount of automation cases, we will require having an Expedition project. Making a POST call to the project route, we can create a project with a desired name.

API syntax for creating a new project:

| Method  | EndPoint                                          | Parameters                                                                                        |
| ------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| POST    | <small>`https://localhost/api/v1/project`</small> | <small>_in url_<br/>{ **"project"**:"project1", **"description"**:"Project for testing" }</small> |
| example | <small>`https://localhost/api/v1/project`</small> | <small>{"project":"MyLittleProject", "description":"A migration project"}</small>                 |

<Tabs defaultValue={typeof window !== 'undefined' && localStorage.getItem('defaultLanguage') ? localStorage.getItem('defaultLanguage') : 'python'}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
print("*****Create a new Expedition Project*****\n")
projectName = input("Please enter project name: (Needs to start with letters): ")
print(" \n")
data = {"name": projectName, "device_id[0]": DeviceId}
url="https://" + ip + "/api/v1/project"
r = requests.post(url,data=data, verify=False, headers=hed)
response = r.json()
success = json.dumps(response["success"])
if success == "true":
    print("New project created successfully" + " \n")
    projectId = json.dumps(response['data']['id'])
    print("Your project-ID is", str(projectId) + " \n")
print("\n")
```

</TabItem>
</Tabs>

### Step 6. Import the PAN-OS configuration of your device to the project

This step will associate the device with project. The API response will contain a job ID , you can then use API call to check job status. Please refer to checking job status [Checking Job Status](managing_jobs.mdx#checking-job-status) section

API syntax for the step:

| Method  | EndPoint                                                                   | Parameters                                                                                                 |
| ------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| POST    | <small>`https://localhost/api/v1/project/project_id/import/device`</small> | <small>_in url_<br/> **"project_id"**:"project_id"<br/>in_body<br/> {**"device_id"**:"device_id" }</small> |
| example | <small>`https://localhost/api/v1/project/22/import/device`</small>         | <small>{"device_id":"23""}</small>                                                                         |

<Tabs defaultValue={typeof window !== 'undefined' && localStorage.getItem('defaultLanguage') ? localStorage.getItem('defaultLanguage') : 'python'}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
print("*****Import the PAN-OS configuration of your device to the project\n")
url = "https://" + ip + "/api/v1/project/{0}/import/device".format(int(projectId))
print(url)
data = {"device_id": DeviceId}
r = requests.post(url, data=data, verify=False, headers=hed)
response = r.json()
jobId = json.dumps(response["data"]["job_id"])
jobFinished = False
print("CHECK configuration upload status...........")
r = requests.get(
    "https://" + ip + "/api/v1/job/" + jobId + "?complete=true",
    verify=False,
    headers=hed,
)
response = r.json()
jobState = json.dumps(response["data"]["state"])
percentage = float(jobState) * 100
print(
    "Import PAN-OS configuration from devie to Project: "
    + str(round(percentage, 2))
    + "%\n"
)
# Wait until job is done
while jobState != "1":
    sleep(5)
    r = requests.get(
        "https://" + ip + "/api/v1/job/" + jobId + "?complete=true",
        verify=False,
        headers=hed,
    )
    response = r.json()
    jobState = json.dumps(response["data"]["state"])
    percentage = float(jobState) * 100
    print(
        "PAN-OS configuration has been imported to Project: "
        + str(round(percentage, 2))
        + "%\n"
    )
response = r.json()
statusmessage = json.dumps(response["data"]["task"][0]["statusMessage"])
print(statusmessage)
```

</TabItem>
</Tabs>

### Step 7. Get Source ID of the config file

In this step, we will make a API call to get **source_id** of the config file that's been imported to the project. After this API call, you will parse the response that contains **source_id**. The **source_id** represent the pan-os config file that you would like to work on, and it will be used in the subsequent API calls.

API syntax for the step:

| Method  | Route                                                                 | Parameters                                                                                             |
| ------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| GET     | <small>`https://localhost/api/v1/project/{project_id}/source`</small> | <small>_in url_<br/> **"project_id"**:project_Id<br/>in_body<br/> {**"device_id"**:device_Id} </small> |
| example | <small>`https://localhost/api/v1/project/22/source`</small>           | <small>{**"device_id"**: 23}</small>                                                                   |

<Tabs defaultValue={typeof window !== 'undefined' && localStorage.getItem('defaultLanguage') ? localStorage.getItem('defaultLanguage') : 'python'}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
print("Get Source_ID of the config file")
url = "https://" + ip + "/api/v1/project/" + projectId + "/source"
r = requests.get(url, data=data, verify=False, headers=hed)
response = r.json()
print(response)
source_id = json.dumps(response["data"]["source"][0]["id"])
print("PAN-OS config source_id is: " + source_id)
```

</TabItem>
</Tabs>

### Step 8. Create a filter for all allowed security rules

In this step, we will create a filter for all security rules that have action "allowed" . Please refer to the [Expedition-API Filters ](expedition_workflow_filters.md) section for details on filters. In this specific example, we are sending the request body contains below data, In the json response, you will get a filter_id , this filter_id will be used in the subsequent steps.

```json
data = {
     "name": "all allowed rules",
     "filter": "[security_rule] action equals  \"allow\"",
    }
```

API syntax for the step:

| Method  | Route                                                                       | Parameters                                                                                                              |
| ------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| POST    | <small>`https://localhost/api/v1/project/{project_id}/tools/filter`</small> | <small>_in url_<br/> **"project_id"**:project_Id<br/>in_body<br/> {**"name"**:filter_name,**"filter"**:filter} </small> |
| example | <small>`https://localhost/api/v1/project/22/tools/filter`</small>           | <small>{**"name"**: "all allowed rules", **"filter"** : "[security_rule] action equals \"allow\""} </small>             |

<Tabs defaultValue={typeof window !== 'undefined' && localStorage.getItem('defaultLanguage') ? localStorage.getItem('defaultLanguage') : 'python'}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
def Filter():
    print("create a filter to list all allowed rules")
    url = "https://" + ip + "/api/v1/project/" + projectId + "/tools/filter"
    data = {
     "name": "all allowed rules",
     "filter": "[security_rule] action equals  \"allow\"",
    }
    r = requests.post(url, data=data, verify=False, headers=hed)
    response = r.json()
    print(response)
    global filterID
    filterID = json.dumps(response["data"]["last_history_entry"]["filter_id"])
    print("your filter ID is " + filterID)
```

</TabItem>
</Tabs>

### Step 9. Execute the filter

After create a filter, we will execute the filter based on filter_Id , in the request body, you will need to provide "source_id" obtained from the previous step as required parameter.

API syntax for the step:

| Method  | Route                                                                                           | Parameters                                                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| POST    | <small>`https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/execute`</small> | <small>_in url_<br/> **"project_id"**:project_Id, **"filter_id"**:filter_Id<br/>in_body<br/> {**"source_id"**: source_id of the PAN-OS config file} </small> |
| example | <small>`https://localhost/api/v1/project/22/tools/filter/1/execute`</small>                     | <small>{**"source_id"**: "23564"} </small>                                                                                                                   |

<Tabs defaultValue={typeof window !== 'undefined' && localStorage.getItem('defaultLanguage') ? localStorage.getItem('defaultLanguage') : 'python'}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
def ExecuteFilter():
    print("execute the filter")
    data = {"source_id": source_id}
    url = (
     "https://"
        + ip
        + "/api/v1/project/"
        + projectId
        + "/tools/filter/"
        + filterID
        + "/execute"
    )
    r = requests.post(url, data=data, verify=False, headers=hed)
    response = r.json()
    print(response)
    jobId = json.dumps(response["data"]["job_id"])
    jobFinished = False
    print("CHECK filter execute status...........")
    r = requests.get(
    "https://" + ip + "/api/v1/job/" + jobId + "?complete=true",
    verify=False,
    headers=hed,
    )
    response = r.json()
    print(response)
    jobState = json.dumps(response["data"]["state"])
    percentage = float(jobState) * 100
    print("Execute filter........: " + str(round(percentage, 2)) + "%\n")

    # Wait until job is done
    while jobState != "1":
        sleep(5)
        r = requests.get(
         "https://" + ip + "/api/v1/job/" + jobId + "?complete=true",
            verify=False,
            headers=hed,
        )
        response = r.json()
        print(response)
        jobState = json.dumps(response["data"]["state"])
        print(jobState)
        percentage = float(jobState) * 100
        print("Filter execute...... " + str(round(percentage, 2)) + "%\n")
    response = r.json()
    print(response)
    statusmessage = json.dumps(response["data"]["task"][0]["statusMessage"])
    print(statusmessage)
```

</TabItem>
</Tabs>

### Step 10. Print the filter execution result

After the filter is executed , we can view the result using below API call. The result should contain all the objects that matches with the filter. From the response, you will parse the **collection_Id** to be used in the subsequent API call.

API syntax for the step:

| Method  | Route                                                                                          | Parameters                                                                          |
| ------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| GET     | <small>`https://localhost/api/v1/project/{project_id}/tools/filter/{filter_id}/result`</small> | <small>_in url_<br/> **"project_id"**:project_Id, **"filter_id"**:filter_Id</small> |
| example | <small>`https://localhost/api/v1/project/22/tools/filter/1/result`</small>                     |                                                                                     |

<Tabs defaultValue={typeof window !== 'undefined' && localStorage.getItem('defaultLanguage') ? localStorage.getItem('defaultLanguage') : 'python'}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
print("Print the Filter Execution Result")
    url = (
        "https://"
        + ip
        + "/api/v1/project/"
        + projectId
        + "/tools/filter/"
        + filterID
        + "/result"
    )
    r = requests.get(url, verify=False, headers=hed)
    response = r.json()
    print(response)
    global Collection_ID
    Collection_ID = json.dumps(response["data"]["id"])
```

</TabItem>
</Tabs>

### Step 11. Get Security Profile Group ID

In order to apply the security profile group to the security policy, we will need to find out the object ID of the security profile group first. In the example, we will parse the first object ID from the response.

API syntax for the step:

| Method  | Route                                                                               | Parameters                                                |
| ------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------- |
| GET     | <small>`https://localhost/api/v1/project/{project_id}/object/profile_group`</small> | <small>_in url_<br/> **"project_id"**:project_Id </small> |
| example | <small>`https://localhost/api/v1/project/22/object/profile_group`</small>           |                                                           |

<Tabs defaultValue={typeof window !== 'undefined' && localStorage.getItem('defaultLanguage') ? localStorage.getItem('defaultLanguage') : 'python'}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
print("Get Security Profile group")
url = "https://" + ip + "/api/v1/project/" + projectId + "/object/profile_group"
r = requests.get(url,verify=False, headers=hed)
response=r.json()
print(response)
SPG_ID=json.dumps(response["data"]["profile_group"][0]["id"])
print(SPG_ID)
```

</TabItem>
</Tabs>

### Step 12. Bulk Change Apply SPG to all allowed rules

The final step we perform a bulk change to apply the security profile group to all allowed rules.

API syntax for the step:

| Method  | Route                                                                          | Parameters                                                                                                                                         |
| ------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| PUT     | <small>`https://localhost/api/v1/project/{project_id}/policy/security`</small> | <small>_in url_<br/> **"project_id"**:project_Id <br/>in_body<br/> {**"add[profile][0]"**: object_id of the SPG, **"id"**: collection_id} </small> |
| example | <small>`https://localhost/api/v1/project/22/policy/security`</small>           | <small>{**"add[profile][0]"**: "11714", **"id"**:"20793"} </small>                                                                                 |

<Tabs defaultValue={typeof window !== 'undefined' && localStorage.getItem('defaultLanguage') ? localStorage.getItem('defaultLanguage') : 'python'}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
print("Bulk Change Apply SPG to all allowed rules")
url = "https://" + ip + "/api/v1/project/" + projectId + "/policy/security"
print(url)
data = {"add[profile][0]": int(SPG_ID), "id": int(Collection_ID)}
print(data)
r = requests.put(url, data=data, verify=False, headers=hed)
response = r.json()
print(response)
```

</TabItem>
</Tabs>
