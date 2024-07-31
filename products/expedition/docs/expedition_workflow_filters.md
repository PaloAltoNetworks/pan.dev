---
id: expedition_workflow_filters
title: Expedition-API Filters
sidebar_label: Expedition-API Filters
hide_title: false
description: Using Filters Workflow
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
  - migration
  - conversion
  - filter

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

In this section we will learn on the usage of `predefined filters`, `simple filters`,
`complex filters` and `combination filters`; as well on the task related to their creation, monitoring on their execution state and collection of filtered results.

## Filter Characteristics

Expedition 2 allows creating filters on the different objects that a configuration contains.
restrict the target of actions, specifying the objects that should appear in reports, identifying objects
that should be deleted, etc.
One filters may be desirable for multiple goals, therefore, the filters have been designed for
sharing and reuse.

As main characteristics, we can state that filters are

- **named**, so we can identify them and refer to them
- **executed in background**, as tasks that can be monitored and are non-blocking
- **stored**, so we can get back to the results of a filter at any given point
- **reusable**, in order to combine them in other filters
- **exportable** between projects and between Expeditions, to be shared in the community or applied to multiple projects in an easy manner

## Filters Types

| Filter Type     | Description                                                                                        | Example                                                                     |
| --------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Predefined**  | Predefined filters. This do not require parameters as the logic is intrinsic to the filter         | <small>`fi1`: [address] is ipv4 </small>                                    |
| **Simple**      | This is the basic filter where you can ask for a specific property of one or multiple object types | <small>`fi2`: [address,addressGroup] name contains 'DNS' </small>           |
| **Combination** | Filters that use other filters' results to evaluate the filter logic                               | <small>`fi3`: [securityRule] source contains filter `'fi2'` </small>        |
| **Operation**   | Filters that perform boolean logic operations on other defined filters                             | <small>`fi4`: (filter `'fi1'` and filter `'fi2'`) or filter `'fi3'`</small> |

### Predefined Filters

These are a type of single filter.
Syntax
**<i>[object_types]</i>** is (not) **predefined_filter.success**

Example: **<i>[address]</i>** is **<i>not used.success</i>** . Will return all unused addresses

**Valid predefined filters**

| Filter              | Object Types possibles                     |
| ------------------- | ------------------------------------------ |
| used                | all                                        |
| invalid             | all                                        |
| valid               | all                                        |
| without-description | all                                        |
| ipv4                | address                                    |
| ipv6                | address                                    |
| fqdn                | address                                    |
| name-is-ip          | address                                    |
| trashed             | all                                        |
| pre-rule            | security_rule, nat_rule, app_override_rule |
| post-rule           | security_rule, nat_rule, app_override_rule |
| static-ip           | nat_rule                                   |
| dynamic-ip-and-port | nat_rule                                   |
| dynamic-ip          | nat_rule                                   |
| bidirectional       | nat_rule                                   |
| no-nat              | nat_rule                                   |
| log-start           | security_rule                              |
| log-end             | security_rule                              |
| ml-enabled          | security_rule                              |
| re-enabled          | security_rule                              |
| dsri-enabled        | security_rule                              |
| layer-4             | security_rule                              |
| layer-7             | security_rule                              |
| has-user            | security_rule                              |
| without-tag         | security_rule                              |
| without-service     | security_rule                              |
| service-any         | security_rule                              |

### Single Filter

This is the basic filter where you can ask for a specific property of one or multiple object types.

**Example:**

**Filter**: **<i>[address, address_group]</i>** **name contains “office”**

This filter would return all addresses and groups where the name contains the word “office”.

**Syntax:**

**<i>[object_types]</i>** **property** (not) **operator** “value”

- **`[object_types]`** : Indicates which object types apply the filter between brackets and separated by commas.

- **`property`**: Property of the object type to search

- **`operator`**: Operator. The operators can also be negated with a **not** before the operator. Available Operators:

  - **contains**: The value contains the one provided
  - **equals**: The value must be exactly the one provided

- **`“value”`**: Value to search, always between quotes

**The valid Object Types are:**

| OBJECT                       | NETWORK                 | POLICY                 | SERVER PROFILES   |
| ---------------------------- | ----------------------- | ---------------------- | ----------------- |
| address                      | monitor                 | security_rule          | email_profile     |
| address_group                | interface_management    | app_override_rule      | http_profile      |
| tag                          | gp_ipsec_crypto         | authentication_rule    | kerberos_profile  |
| service                      | ipsec_crypto            | decryption_rule        | snmp_trap_profile |
| service_group                | ike_crypto              | dos_rule               | saml_profile      |
| application                  | virtual_router          | tunnel_inspection_rule | radius_profile    |
| application_filter           | zone                    | pbf_rule               | syslog_profile    |
| application_group            | ike_gateway             | nat_rule               | tacacs_profile    |
| external_list                | virtual_wire            | qos_rule               | netflow_profile   |
| log_setting                  | ipsec_tunnel            | sdwan_rule             | ldap_profile      |
| schedule                     | vlan                    |                        |                   |
| profile                      | zone_protection_profile |                        |                   |
| profile_group                | qos_profile             |                        |                   |
| region                       | bfd_profile             |                        |                   |
| report                       | lldp_profile            |                        |                   |
| report_group                 | gp_portal               |                        |                   |
| error_correction_profile     | gp_mdm                  |                        |                   |
| traffic_distribution_profile | gp_gateway              |                        |                   |
| path_quality_profile         | clientless_app          |                        |                   |
| saas_quality_profile         | clientless_app_group    |                        |                   |
| email_scheduler              | application_status      |                        |                   |
| pdf_summary_report           | sdwan_interface_profile |                        |                   |
| scep                         | lldp                    |                        |                   |
| ssl_tls_profile              | ethernet_interface      |                        |                   |
| certificate                  | ethernet_subinterface   |                        |                   |
|                              | vlan_interface          |                        |                   |
|                              | loopback_interface      |                        |                   |
|                              | sdwan_interface         |                        |                   |
|                              | tunnel_interface        |                        |                   |  

**The valid properties are:**

The table below presents the valid properties for each object type, based on the configuration objects in the Palo Alto Networks:
All object types can filter by properties: name, description


| Object Type        | Properties                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| address            | type ip_type ipaddress netmask Id                                                                                                                                                                                                                                                                                                                                                                                                                            |
| address_group      | type filter expression id                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| service            | id type protocol src_port dst_port timeout tcp_half_closed_timeout tcp_time_wait_timeout' timeout_override                                                                                                                                                                                                                                                                                                                                                   |
| service_group      | id type                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| application        | id application_container parent_app technology category subcategory risk evasive_behavior consume_big_bandwidth prone_to_misuse able_to_transfer_file tunnel_other_application used_by_malware has_known_vulnerability pervasive_use tunnel_applications file_type_ident virus_ident data_ident default_type value timeout tcp_timeout tcp_half_closed_timeout tcp_time_wait_timeout udp_timeout spyware_ident vtype alg_disable_capability no_appid_caching |
| application_filter | evasive_behavior consume_big_bandwidth prone_to_misuse able_to_transfer_file tunnel_other_application used_by_malware has_known_vulnerability pervasive_use saas_certifications saas_risk type category subcategory technology risk characteristic                                                                                                                                                                                                           |  


### Combination Filter

The combined filters are the ones that require subfilters. For example a security rule that contains some specific addresses in its source.
For example, if we want all security rules that have the “office” addresses from the previous example in its source the filter would be:
**<i>[security_rule]</i>** **source_address** contains filter **<i>office_address.success</i>**

**Syntax**

**<i>[object_types]</i>** **property** (not) **operator filter** <i>filter_reference.success</i>

- **`[object_types]`** : indicates which object types apply the filter between brackets and separated by commas.
- **`property`**: Property of the object type to search
- **`operator`**: The operators can also be negated with a not before the operator
- **`filter`**: It is necessary to indicate that after it will come the name of a filter
- **`filter_reference`**: Name of the filter to act as subfilter. In this example, the filter_reference is **<i>office_address.success</i>**  


### Operation filters

The operations filters allow combining filters making unions and intersections.  
There are two different operators allowed: **or** (unions) and **and**(intersections). These operators can also be negated with a **not**.

**Example**: **<i>filter</i>** office_address **and not** **<i>filter</i>** home_address

**Syntax**  
Defining a syntax here is not that simple since multiple combinations can be done using the operators and parentheses. An example can be:

**<i>filter</i>** filter_name1 **and** (**<i>filter</i>** filter_name2.success **or** **<i>filter</i>** filter_name4.success)

- **`filter`**: it is necessary to indicate that after it will come the name of a filter
- **`filter_nameX`** : Name of the filter
- **`and`**: Operator that indicates intersection between filter results
- **`or`**: Operator that indicates union of filter results
- **`()`**: The parentheses can be used to make preference to some operations over others  
For operations content the **`not`** operator is not available.  


## Filter related API Calls

### Create Filter

**Description:** Creates a new filter and returns the filter created  
**API syntax for creating a filter:**

| Method | API Route                                                                   | Request Body Parameters     | Example Value                                                                                                   |
| ------ | --------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| POST   | <small>`https://localhost/api/v1/project/\{project_id\}/tools/filter`</small> | <small>name, filter</small> | <small>\{**"name"**:"filter_name", **"filter"**:**"[address, address_group] name contains \"office\""\}**</small> |

<Tabs defaultValue={null}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
def CreateFilter():
    print("Create a filter for address & address group objects contain "office"")
    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter"
    data = {
     "name": "officeobject",
     "description":"filter example",
     "filter": "[address, address_group] name not contains \"office\"",
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
The successful Json response will be similar to the following:

```json
{
  "data": {
    "id": 21,
    "status": "potentially_invalid",
    "type": "single",
    "warnings": [],
    "created_at": "2021-07-15 06:18:28",
    "updated_at": "2021-07-15 06:18:28",
    "last_history_entry": {
      "filter_id": 21,
      "description": "new filter",
      "updated_at": "2021-07-15 06:18:28"
    },
    "name": "officeobject",
    "description": "filter example",
    "filter": "[address, address_group] name contains \"office\""
  },
  "metadata": [],
  "pagination": {
    "total": 1,
    "current_page": 1,
    "per_page": 25,
    "total_pages": 1
  },
  "success": true
}
```

:::note
When a new filter is created it is marked as potentially invalid, since creating a filter means store it but not execute it. Once the filter is executed then the warning of invalid filter disappears.
:::

### Update Filter

**Description:**
Updates the parameters of a specific filter

**API syntax for updating a filter:**

| Method | API Route                                                                               | Request Body Parameters     | Example Value                                                                                                   |
| ------ | --------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| PUT    | <small>`https://localhost/api/v1/project/\{project_id\}/tools/filter/\{filter_id\}`</small> | <small>name, filter</small> | <small>\{**"name"**:"filter_name", **"filter"**:**"[address, address_group] name contains \"office\""\}**</small> |

<Tabs defaultValue={null}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
def UpdateFilter():
    print("Update the filter for address & address group objects does not contain "office"")
    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter" + filterID
    data = {
     "name": "officeobject",
     "description":"filter example",
     "filter": "[address, address_group] name contains \"office\"",
    }
    r = requests.put(url, data=data, verify=False, headers=hed)
    response = r.json()
    print(response)

```

</TabItem>  
</Tabs>  
The successful Json response will be similar to the following:

```json
{
  "data": {
    "id": 18,
    "status": "potentially_invalid",
    "type": "single",
    "warnings": 1,
    "created_at": "2021-07-14 06:32:42",
    "updated_at": "2021-07-15 08:46:49",
    "matches": 0,
    "last_history_entry": {
      "filter_id": 18,
      "description": "modified filter",
      "updated_at": "2021-07-15 08:46:49"
    },
    "name": "officeobject",
    "description": "filter example",
    "filter": "[address, address_group] name contains \"office\""
  },
  "metadata": [],
  "pagination": {
    "total": 1,
    "current_page": 1,
    "per_page": 25,
    "total_pages": 1
  },
  "success": true
}
```

:::note
Everytime a filter is modified, it will be marked as potentially_invalid, since the modification could affect the result calculated.
:::

### Delete Filter

**Description:** Deletes a filter  
**API syntax for deleting a filter:**

| Method | API Route                                                                               | Path Parameters                          | Example Path                                                         |
| ------ | --------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------- |
| DELETE | <small>`https://localhost/api/v1/project/\{project_id\}/tools/filter/\{filter_id\}`</small> | <small>\{project_id\}, \{filter_id\}</small> | <small>`https://localhost/api/v1/project/48/tools/filter/22`</small> |

<Tabs defaultValue={null}
values={[
{ label: 'Python', value: 'python', },
]
}>   
<TabItem value="python">

```python
def DeleteFilter():
    print("Delete the filter for address & address group objects does not contain "office"")
    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter" + filterID
    r = requests.delete(url, verify=False, headers=hed)
    response = r.json()
    print(response)

```

</TabItem>  
</Tabs>  
The successful Json response will be similar to the following:

```json
{
  "data": {
    "id": 22,
    "status": "executed",
    "type": "single",
    "warnings": 0,
    "created_at": "2021-07-15 06:27:54",
    "updated_at": "2021-07-15 06:27:54",
    "matches": 0,
    "last_history_entry": {
      "filter_id": 22,
      "description": "new filter",
      "updated_at": "2021-07-15 06:27:54"
    },
    "name": "used",
    "description": "all used addresses",
    "filter": "[address] is used"
  },
  "metadata": [],
  "pagination": {
    "total": 1,
    "current_page": 1,
    "per_page": 25,
    "total_pages": 1
  },
  "success": true
}
```

### List Filter

**Description: ** Lists information of one specific filter  
**API syntax for listing information of one specific filter:**

| Method | API Route                                                                               | Path Parameters                          | Example Path                                                         |
| ------ | --------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------- |
| GET    | <small>`https://localhost/api/v1/project/\{project_id\}/tools/filter/\{filter_id\}`</small> | <small>\{project_id\}, \{filter_id\}</small> | <small>`https://localhost/api/v1/project/48/tools/filter/23/success`</small> |

<Tabs defaultValue={null}
values={[
{ label: 'Python', value: 'python', },
]
}>   
<TabItem value="python">

```python
def ListFilter():
    print("List the filter for all used addresses")
    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter" + filterID
    r = requests.get(url, verify=False, headers=hed)
    response = r.json()
    print(response)

```

</TabItem>  
</Tabs>  
The successful Json response will be similar to the following:

```json
{
  "data": {
    "id": 23,
    "status": "executed",
    "type": "single",
    "warnings": 0,
    "created_at": "2021-07-15 06:28:08",
    "updated_at": "2021-07-15 06:29:04",
    "matches": 94,
    "last_history_entry": {
      "filter_id": 23,
      "description": "new filter",
      "updated_at": "2021-07-15 06:28:08"
    },
    "name": "used2",
    "description": "all used addresses",
    "filter": "[address] is used"
  },
  "metadata": [],
  "pagination": {
    "total": 1,
    "current_page": 1,
    "per_page": 25,
    "total_pages": 1
  },
  "success": true
}
```

### List All Filters

**Description: ** Lists information of all filters

**API syntax for listing information of all filter:**

| Method | API Route                                                                    | Path Parameters             | Example Path                                                      |
| ------ | ---------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------- |
| GET    | <small>`https://localhost/api/v1/project/\{project_id\}/tools/filter/`</small> | <small>\{project_id\}</small> | <small>`https://localhost/api/v1/project/48/tools/filter`</small> |

<Tabs defaultValue={null}
values={[
{ label: 'Python', value: 'python', },
]
}>   
<TabItem value="python">

```python
def ListFilter():
    print("List all filters")
    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter"
    r = requests.get(url, verify=False, headers=hed)
    response = r.json()
    print(response)

```

</TabItem>  
</Tabs>  
The successful Json response will be similar to the following:

```json
{
  "data": {
    "filter": [
      {
        "id": 23,
        "name": "used2",
        "description": "all used addresses",
        "filter": "[address] is used",
        "warnings": 0,
        "type": "single",
        "status": "executed",
        "created_at": "2021-07-15 06:28:08",
        "updated_at": "2021-07-15 06:29:04",
        "last_history_entry": {
          "filter_id": 23,
          "description": "new filter",
          "updated_at": "2021-07-15 06:28:08"
        },
        "matches": 94
      }
    ]
  },
  "metadata": [],

  "pagination": {
    "total": 6,
    "current_page": 1,
    "per_page": 6,
    "total_pages": 1
  },
  "success": true
}
```

### Execute Filter

**Description: ** Executes a filter and stores the result  
**API syntax for execute a specific filter:**

| Method | API Route                                                                                       | Path Parameters                          | Example Path                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------- |
| POST   | <small>`https://localhost/api/v1/project/\{project_id\}/tools/filter/\{filter_id\}/execute`</small> | <small>\{project_id\}, \{filter_id\}</small> | <small>`https://localhost/api/v1/project/48/tools/filter/23/execute`</small> |

<Tabs defaultValue={null}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
def ExecuteFilter():
    print("Execute the filter")
    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter" + filterID
    r = requests.post(url, verify=False, headers=hed)
    response = r.json()
    print(response)
```

</TabItem>  
</Tabs>  
The successful Json response will return a job id:

```json
{
  "data": {
    "job_id": 6421
  },
  "metadata": {},
  "pagination": {
    "total": 1,
    "current_page": 1,
    "per_page": 25,
    "total_pages": 1
  },
  "success": true
}
```

### List Filter Results

**Description: ** List the results of a filter. The result will return the schema of the collection containing the result of a filter  
**API syntax for listing filter results:**

| Method | API Route                                                                                      | Path Parameters                          | Example Path                                                               |
| ------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------- |
| GET    | <small>`https://localhost/api/v1/project/\{project_id\}/tools/filter/\{filter_id\}/success`</small> | <small>\{project_id\}, \{filter_id\}</small> | <small>`https://localhost/api/v1/project/48/tools/filter/8/success`</small> |

<Tabs defaultValue={typeof window !== 'undefined' && localStorage.getItem('defaultLanguage') ? localStorage.getItem('defaultLanguage') : 'python'}
values={[
{ label: 'Python', value: 'python', },
{ label: 'Php', value: 'php', },
{ label: 'Go', value: 'go', },
]
}>  
<TabItem value="python">

```python
def ExecuteFilter():
    print("List the filter results")
    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter" + filterID + "/success"
    r = requests.get(url, verify=False, headers=hed)
    response = r.json()
    print(response)
```

</TabItem>  
</Tabs>  
The successful Json response will be similar to the following:

```json
{
  "data": {
    "id": 8,
    "editable": false,
    "content": [
      {
        "object_id": 2976,
        "name": "myAddress",
        "object_type": "address",
        "vsys_name": "predefined",
        "vsys": 2,
        "source_name": "predefined",
        "source": 1
      },
      {
        "object_id": 2977,
        "name": "rule_3",
        "object_type": "security_rule",
        "vsys_name": "predefined",
        "vsys": 2,
        "source_name": "predefined",
        "source": 1
      }
    ],
    "name": "collection_filter_7",
    "description": "Collection for filter testingF1"
  },
  "success": true
}
```

### Get Filter History

**Description:** Return the history of a filter

**API syntax for returning the history of a filter:**

| Method | API Route                                                                                       | Path Parameters                          | Example Path                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------- |
| GET    | <small>`https://localhost/api/v1/project/\{project_id\}/tools/filter/\{filter_id\}/history`</small> | <small>\{project_id\}, \{filter_id\}</small> | <small>`https://localhost/api/v1/project/48/tools/filter/23/history`</small> |

<Tabs defaultValue={null}
values={[
{ label: 'Python', value: 'python', },
]
}>  
<TabItem value="python">

```python
def ListFilter():
    print("Get a history of the filter")
    url = "https://localhost/api/v1/project/" + projectId + "/tools/filter" + filter_ID +"/history"
    r = requests.get(url, verify=False, headers=hed)
    response = r.json()
    print(response)

```

</TabItem>  
</Tabs>  
The successful Json response will be similar to the following:

```json
{
  "data": {
    "filter_history": [
      {
        "id": 65,
        "filter_id": 23,
        "description": "new filter",
        "updated_at": "2021-07-15 06:28:08"
      },
      {
        "id": 67,
        "filter_id": 23,
        "description": "executed",
        "updated_at": "2021-07-15 09:13:43"
      }
    ]
  },
  "success": true
}
```
