---
id: sdwan_gsg_sdk
title: Python SDK
description: Prisma SD-WAN Python SDK
hide_title: true
hide_table_of_contents: false
keywords:
  - sdwan
---

# Prisma SD-WAN Python SDK

Prisma SD-WAN Python SDK is a lightweight SDK wrapper around the Prisma SD-WAN RESTful HTTPS-based APIs. This module was built to support automation of create, read, update, and delete (CRUD) operations on the Prisma SD-WAN appfabric.

This section will go over the details on how to integrate Prisma SD-WAN with your existing applications and workflows using the Prisma SD-WAN Python SDK.

## Install Prisma SD-WAN Python SDK

To install the Prisma SD-WAN Python SDK, you can use the pip utility.

    pip install cloudgenix

If you run into issues installing the SDK, create a virtual environment to avoid errors and issues due to environmental dependencies.

    Terminal:~ sdkuser$ virtualenv sdk
    New python executable in /Users/sdkuser/sdk/bin/python
    Installing setuptools, pip, wheel...
    done.
    Terminal:~ sdkuser$ cd sdk/
    Terminal:sdk sdkuser$ source bin/activate
    (sdk) Terminal:sdk sdkuser$

This will activate the virtual environment. You can now install the Prisma SD-WAN SDK using the pip command. More information on https://virtualenv.pypa.io/en/latest/ can be found here.

**Note**:
To install virtualenv, use the pip utility: **pip3 install virtualenv**
To install pip, use the apt-get utility: **sudo apt-get install python3-pip**

We are now ready to start scripting. You may need to install a few other python libraries depending on your scripting needs. Here are some recommendations.

    pip install requests
    pip install pandas
    (sdk) Terminal:sdk sdkuser$ pip install cloudgenix
    DEPRECATION: Python 2.7 will reach the end of its life on January 1st, 2020. Please upgrade your Python
    as Python 2.7 won't be maintained after that date. A future version of pip will
    drop support for Python 2.7.
    Collecting cloudgenix
    Collecting requests[security]>=2.18.4 (from cloudgenix)
    Using cached https://files.pythonhosted.org/packages/7d/e3/20f3d364d6c8e5d2353c7
    2a67778eb189176f08e873c9900e10c0287b84b/requests-2.21.0-py2.py3-none-any.whl
    Collecting chardet<3.1.0,>=3.0.2 (from requests[security]>=2.18.4->cloudgenix)
    Using cached https://files.pythonhosted.org/packages/bc/a9/01ffebfb562e4274b6487b4bb1ddec7
    ca55ec7510b22e4c51f14098443b8/chardet-3.0.4-py2.py3-none-any.whl
    Collecting idna<2.9,>=2.5 (from requests[security]>=2.18.4->cloudgenix)
    Using cached https://files.pythonhosted.org/packages/14/2c/cd551d81dbe15200be1cf41cd03869a46
    fe7226e7450af7a6545bfc474c9/idna-2.8-py2.py3-none-any.whl
    Collecting certifi>=2017.4.17 (from requests[security]>=2.18.4->cloudgenix)
    Using cached https://files.pythonhosted.org/packages/60/75/f692a584e85b7eaba0e03827b3d51f45f
    571c2e793dd731e598828d380aa/certifi-2019.3.9-py2.py3-none-any.whl
    Collecting urllib3<1.25,>=1.21.1 (from requests[security]>=2.18.4->cloudgenix)
    Downloading https://files.pythonhosted.org/packages/01/11/525b02e4acc0c747de8b6ccdab376331597c569c42ea66ab0a1dbd36eca2/urllib3-1.24.3-py2.py3-none-any.whl (118kB)
    |████████████████████████████████| 122kB 1.4MB/s
    Collecting cryptography>=1.3.4; extra == "security" (from requests[security]>=2.18.4->cloudgenix)
    Using cached https://files.pythonhosted.org/packages/f5/2a/48848dd65908190d68ef389ad8ee9d00
    10278f7a9118f40d8fed7d84a326/cryptography-2.6.1-cp27-cp27m-macosx_10_6_intel.whl
    Collecting pyOpenSSL>=0.14; extra == "security" (from requests[security]>=2.18.4->cloudgenix)
    Using cached https://files.pythonhosted.org/packages/01/c8/ceb170d81bd3941cbeb9940fc6cc2ef
    2ca4288d0ca8929ea4db5905d904d/pyOpenSSL-19.0.0-py2.py3-none-any.whl
    Collecting cffi!=1.11.3,>=1.8 (from cryptography>=1.3.4; extra == "security"->requests[security]>=2.18.4->cloudgenix)
    Downloading https://files.pythonhosted.org/packages/16/f6/46a3dece43541b2cbf3776ec2299e3
    70a2408d9380958401cacb6d101853/cffi-1.12.3-cp27-cp27m-macosx_10_6_intel.whl (245kB)
    |████████████████████████████████| 256kB 23.4MB/s
    Collecting six>=1.4.1 (from cryptography>=1.3.4; extra == "security"->requests[security]>=2.18.4->cloudgenix)
    Using cached https://files.pythonhosted.org/packages/73/fb/00a976f728d0d1fecfe898238ce23
    f502a721c0ac0ecfedb80e0d88c64e9/six-1.12.0-py2.py3-none-any.whl
    Collecting ipaddress; python_version < "3" (from cryptography>=1.3.4; extra == "security"->requests[security]>=2.18.4->cloudgenix)
    Using cached https://files.pythonhosted.org/packages/fc/d0/7fc3a811e011d4b388be48a0e381db8
    d990042df54aa4ef4599a31d39853/ipaddress-1.0.22-py2.py3-none-any.whl
    Collecting asn1crypto>=0.21.0 (from cryptography>=1.3.4; extra == "security"->requests[security]>=2.18.4->cloudgenix)
    Using cached https://files.pythonhosted.org/packages/ea/cd/35485615f45f30a510576f1a56d1e0a
    7ad7bd8ab5ed7cdc600ef7cd06222/asn1crypto-0.2

## API Endpoint

API calls to the Prisma SD-WAN controller uses the following API endpoint: https://api.elcapitan.cloudgenix.com

## Get Started with Prisma SD-WAN Python SDK

To start using the Prisma SD-WAN Python SDK, we need to first include the Prisma SD-WAN library into our script and instantiate the API object. Once a connection is established to the API endpoint and login is successful, resources can be accessed using the API object.

    import cloudgenix
    #Instantiate Cloudgenix API object
    cgx_session = cloudgenix.API("https://api.elcapitan.cloudgenix.com", ssl_verify=False)

The Prisma SD-WAN SDK supports two methods of authentication to the controller; either via a username and password, or via a generated authentication token.

    #Login using credentials
    cgx_session.interactive.login(email=”sdkuser@cloudgenix.com”, password = “myPassword”)

An authentication token can be created via the Controller UI under System Administration -> Auth Tokens -> Create Auth Token. Once the token is created, make sure you copy the token before closing the pop-up window.

    #Login using auth token
    cgx_session.interactive.use_token(token="auth_token_from_clipboard")

This auth token can also be stored in a config file and leveraged by your script. See example.config below.

    #Example config file
    CGX_AUTH_TOKEN = “copy auth token from clipboard”
    CGX_USER = “user@cloudgenix.com”
    CGX_PASSWORD = “mypassword”

It can also be exported as an environment variable.

    #Environment Variable
    (sdk) Terminal:sdk sdkuser$ export AUTH_TOKEN = “copy auth token from clipboard”

Your script can use the following snippet to extract the AUTH_TOKEN information from the config file or the environment variable.

    #Extract data from config file.
    try:
    from example.config import CGX_AUTH_TOKEN
    except ImportError:
    #will get caught below.
    #Get AUTH_TOKEN/X_AUTH_TOKEN from env variable, if it exists. X_AUTH_TOKEN takes priority.
    if "X_AUTH_TOKEN" in os.environ:
    CGX_AUTH_TOKEN = os.environ.get('X_AUTH_TOKEN')
    elif "AUTH_TOKEN" in os.environ:
    CGX_AUTH_TOKEN = os.environ.get('AUTH_TOKEN')
    else:
    #not set
    CGX_AUTH_TOKEN = None
    try:
    from example.config import CGX_USER, CGX_PASSWORD
    except ImportError:
    #will get caught below
    CGX_USER = None
    CGX_PASSWORD = None

## Resolve SSL Certificate Errors in CloudGenix SDK

### Problem 

If you use CloudGenix SDK 6.5.2 b1 or an older version and encounter SSL issues, this is due to a certificate change from GoDaddy to DigiCert.


### Solution 

To resolve this issue you may follow one of the following options:
#### Option 1
Install Cloudgenix 6.5.2.b4 version:

1. Run the following command to uninstall Cloudgenix:

    `pip uninstall cloudgenix`

2. Update CloudGenix SDK: 
Run any of the following commands to upgrade to CloudGenix SDK 6.5.2b4:

	`pip install cloudgenix` 

	or 

	`pip install cloudgenix==6.5.2.b4`

This updates the SDK by adding the missing DigiCert CA, which resolves the SSL issue without requiring any code modifications.

#### Option 2
Migrate to Prisma SASE SDK: 
You can switch to the Prisma SASE SDK by making the following changes in your script:

   - Change `import cloudgenix` to `import prisma_sase`

   - Change` sdk = cloudgenix.API()` to `sdk = prisma_sase.API()`

   - Change `sdk.interactive.use_token(auth)` to `sdk.interactive.login_secret(client_id=cid, client_secret=csecret, tsg_id=tsg)`

**Note**: To obtain the `client_id`, `client_secret`, and `tsg_id`, navigate to the **Strata Cloud Manager** user interface and generate a service account with the appropriate access role. Use those values in your script.
## API Methods

Prisma SD-WAN SDK supports all the standard RESTful HTTP API methods GET, PUT, PATCH, DELETE and
POST. The section below will illustrate the use of these methods to extract, edit, create or delete
resources.

### GET Method

The GET method is used to retrieve a resource already configured on the controller. More information
on the resources that can be queried using the GET method are listed at
https://cloudgenix.github.io/sdk-python/get_api.m.html.

    #Use GET to read resources configured on the controller
    #Get a list of sites
    response = cgx_session.get.sites()

**Note**: The API response is packaged in two modules called the cgx_status (status of the API request made) and cgx_content (API response).

The jd_detailed function can be used to see the detailed request and response that transpired between the client and the API endpoint.

    cloudgenix.jd_detailed(response)
    REQUEST: GET /v4.3/api/tenants/1092/sites
    REQUEST HEADERS:
    	Connection: keep-alive
    	Accept-Encoding: gzip, deflate
    	Accept: application/json
    	User-Agent: python-requests/2.19.1 (CGX SDK v5.1.1b1)
    	Cookie: AUTH_TOKEN="<SENSITIVE - NOT SHOWN BY DEFAULT>"
    REQUEST BODY:
    {}
    RESPONSE: 200 OK
    RESPONSE HEADERS:
    	Date: Mon, 20 May 2019 18:56:13 GMT
    	Content-Type: application/json; charset=utf-8
    	Content-Length: 7071
    	Connection: keep-alive
    	Server: nginx
    	Content-Security-Policy: default-src 'self'
    	X-Content-Type-Options: nosniff
    	X-Frame-Options: DENY, SAMEORIGIN
    	X-Permitted-Cross-Domain-Policies: master-only
    	X-XSS-Protection: 1; mode=block
    	Cache-Control: no-store, no-cache
    	Pragma: no-cache
    	Expires: 0
    	Strict-Transport-Security: 31536000; includeSubDomains


    RESPONSE DATA:
        {
           "count": 10,
           "_updated_on_utc": 0,
           "items": [
             {
        	"service_binding": null,
        	"security_policyset_id": null,
        	"_warning": null,
        	"_debug": null,
        	"tags": [
        	     "maint:1100UTC",
        	     "GPCS_ENABLED"
        	],
        	"_updated_on_utc": 15573876508540170,
        	"name": "AUTOMATION-LAB",
        	"description": "SDK Tutorial config util change",
        	"policy_set_id": "15276117293760167",
        	"_schema": 2,
        	"_etag": 13,
        	"network_policysetstack_id": null,
        	"priority_policysetstack_id": null,
        	"admin_state": "active",
        	"location": {
        	    "latitude": 35.3739013671875,
        	    "description": null,
        	    "longitude": -119.01950073242188
        	},
        	"address": {
        	   "city": "Bakersfield",
        	   "post_code": "93301",
        	   "country": "US",
        	   "street2": null,
        	   "state": "CA",
        	   "street": null
        	},
        	"_info": null,
        	"_created_on_utc": 15427379313890067,
        	"id": "15427379313890067",
        	"element_cluster_role": "SPOKE",
        	"_error": null
        },
        . . .
        {
        	"service_binding": "15409050678920045",
        	"security_policyset_id": null,
        	"_warning": null,
        	"_debug": null,
        	"tags": null,
        	"_updated_on_utc": 15572712334820109,
        	"name": "test",
        	"description": null,
        	"policy_set_id": null,
        	"_schema": 2,
        	"_etag": 4,
        	"network_policysetstack_id": "15409356436780001",
        	"priority_policysetstack_id": "15511016644590252",
        	"admin_state": "disabled",
        	"location": {
        	    "latitude": 33.83449935913086,
        	    "description": null,
        	    "longitude": -116.53890228271484
        	},
        	"address": {
        	    "city": "Palm Springs",
        	    "post_code": "92262",
        	    "country": "United States",
        	    "street2": null,
        	    "state": "CA",
        	    "street": null
        	},
        	"_info": null,
        	"_created_on_utc": 15525938196070124,
        	"id": "15525938196070124",
        	"element_cluster_role": "SPOKE",
        	"_error": null
            }
        ],
        "_content_length": "0",
        "_schema": 0,
        "_request_id": "1558378573092005799996729697124332900411",
        "_status_code": "200",
        "_created_on_utc": 0,
        "_etag": 0

        }

The API call above retrieves all the sites on this tenant. We’ve extracted the information from cgx_content into sitelist, which is a list of python dictionaries.

    #Extract site list from cgx_content if API call was successful

    if response.cgx_status:
    	sitelist = response.cgx_content.get(“items”, None)
    	for site in sitelist:
    		print site[‘name’], site[‘id’]
    [Output]:
    AUTOMATION-LAB 15427379313890067
    Azure Central US 15403126105670180
    Chicago Branch 2 14994564187120056
    New York Branch 1 14994517577210142
    Oracle DC 15555308363860172
    Orange-Test 15530950086450122
    San Francisco DC 1 14994523796210163
    Seattle Branch 3 14994572648820033
    Washington D.C. - DC 2 14994575835930104
    test 15525938196070124

To retrieve information about a specific site, site ID can be passed when making the GET request. See snippet below.

    #Query single site, AUTOMATION_LAB

    response = cgx_session.get.sites(site_id=”15427379313890067”)
    if response.cgx_status:
    	site = response.cgx_content
    	print site[‘name’], json.dumps(site, indent=4)

    [Output]:
    AUTOMATION-LAB
    {
    	"service_binding": null,
    	"security_policyset_id": null,
    	"_warning": null,
    	"_debug": null,
    	"tags": [
    		"maint:1100UTC",
    		"GPCS_ENABLED"
    	],
    	"_updated_on_utc": 15573876508540170,
    	"name": "AUTOMATION-LAB",
    	"description": "SDK Tutorial config util change", 	"policy_set_id": "15276117293760167",
    	"_schema": 2,
    	"_etag": 13,
    	"network_policysetstack_id": null, 	"priority_policysetstack_id": null,
    	"admin_state": "active",
    	"location": {
    		"latitude": 35.3739013671875,
    		"description": null,
    		"longitude": -119.01950073242188
    	},
    	"address": {
    		"city": "Bakersfield",
    		"post_code": "93301",
    		"country": "US",
    		"street2": null,
    		"state": "CA",
    		"street": null
    	},
    	"_info": null,
    	"_created_on_utc": 15427379313890067,
    	"id": "15427379313890067",
    	"element_cluster_role": "SPOKE",
    	"_error": null
    }

For some GET requests, resource IDs can be mandatory eg: to query interfaces, a site ID and an element ID needs to be provided when making the request. Doing a query on elements returns both the element ID and the ID of the site it is attached to.

    resp = cgx_session.get.elements(element_id="14994857839570076")
    if resp.cgx_status:
    	print json.dumps(resp.cgx_content, indent=4)
    [Output]:
    {
    	"cluster_member_id": null,
    	"_content_length": "0",
    	"site_id": "14994572648820033",
    	"_schema": 0,
    	"hw_id": "42119d73-589b-b1f4-19a7-23643cf1bb18",
    	"id": "14994857839570076",
    	"_warning": null,
    	"_debug": null,
    	"_updated_on_utc": 15582043198340228,
    	"l3_direct_private_wan_forwarding": false,
    	"state": "bound",
    	"_status_code": "200",
    	"role": "SPOKE",
    	"priority_policysetstack_id": null,
    	"serial_number": "42119d73-589b-b1f4-19a7-23643cf1bb18",
    	"admin_action": null,
    	"allowed_roles": [
    		"HUB",
    		"SPOKE"
    	],
    	"description": null,
    	"software_version": "5.1.1-b38",
    	"tags": null,
    	"cluster_insertion_mode": null,
    	"l3_lan_forwarding": false,
    	"_request_id": "1558233277765019700005196466859450139060",
    	"network_policysetstack_id": null,
    	"connected": true,
    	"deployment_op": null,
    	"_error": null,
    	"spoke_ha_config": null,
    	"name": "SEA-ION-3K-1",
    	"tenant_id": "1092",
    	"model_name": "ion 3102v",
    	"_info": null,
    	"_created_on_utc": 14994857839570076,
    	"_etag": 19165
    }

Use Site ID and Element ID to query interfaces

    resp = cgx_session.get.interfaces(site_id="14994572648820033", element_id="14994857839570076")

### PUT Method

To edit or update an attribute already configured on the controller, the PUT operation must be used. The snippet below shows how to modify the description for an interface. More information on the resources that can be queried using the PUT method are listed at https://cloudgenix.github.io/sdk-python/put_api.m.html.

    #PUT operation: Edit interface description

    sid = "14994572648820033"
    eid = "14994857839570076"
    resp = cgx_session.get.interfaces(site_id=sid,element_id=eid,interface_id="14994857989600144")

    payload = resp.cgx_content
    payload[‘description’] = “Test Description”

    resp = cgx_session.put.interfaces(site_id=sid,element_id=eid,interface_id="14994857989600144",data=payload)
    cloudgenix.jd_detailed(resp)

    [Output]
    REQUEST: PUT /v4.6/api/tenants/1092/sites/14994572648820033/elements/14994857839570076/interfaces/14994857989600144
    REQUEST HEADERS:
    	Connection: keep-alive
    	Accept-Encoding: gzip, deflate
    	Accept: application/json
    	User-Agent: python-requests/2.19.1 (CGX SDK v5.1.1b1)
    	Content-Type: application/json
    	Cookie: AUTH_TOKEN="<SENSITIVE - NOT SHOWN BY DEFAULT>"
    	Content-Length: 849

    REQUEST BODY:
    {
    	"bound_interfaces": null,
    	"_content_length": "0",
    	"network_context_id": null,
    	"_schema": 4,
    	"nat_port": 0,
    	"mtu": 1500,
    	"id": "14994857989600144",
    	"sub_interface": null,
    	"pppoe_config": null,
    	"service_link_config": null,
    	"site_wan_interface_ids": [
    	"14998871125520113"
    	],
    	"_warning": null,
    	"_debug": null,
    	"_updated_on_utc": 15573862530290020,
    	"_status_code": "200",
    	"ethernet_port": {
    	    "full_duplex": false,
    	    "speed": 0
    	},
    	"mac_address": null,
    	"scope": "local",
    	"type": "port",
    	"ipv4_config": null,
    	"attached_lan_networks": null,
    	"description": "Test Description",
    	"parent": null,
    	"tags": null,
    	"_request_id": "1558235404031016200003373146536293527550",
    	"dhcp_relay": null,
    	"bypass_pair": null,
    	"nat_address": null,
    	"name": "3",
    	"_error": null,
    	"used_for": "private-l2",
    	"admin_up": true,
    	"_info": null,
    	"_created_on_utc": 14994857989600144,
    	"_etag": 8
    }
    RESPONSE: 200 OK
    RESPONSE HEADERS:
    	Date: Sun, 19 May 2019 03:11:40 GMT
    	Content-Type: application/json; charset=utf-8
    	Content-Length: 777
    	Connection: keep-alive
    	Server: nginx
    	Content-Security-Policy: default-src 'self'
    	X-Content-Type-Options: nosniff
    	X-Frame-Options: DENY, SAMEORIGIN
    	X-Permitted-Cross-Domain-Policies: master-only
    	X-XSS-Protection: 1; mode=block
    	Cache-Control: no-store, no-cache
    	Pragma: no-cache
    	Expires: 0
    	Strict-Transport-Security: 31536000; includeSubDomains
    RESPONSE DATA:
    {
    	"bound_interfaces": null,
    	"_content_length": "0",
    	"network_context_id": null,
    	"_schema": 4,
    	"nat_port": 0,
    	"bypass_pair": null,
    	"used_for": "private-l2",
    	"id": "14994857989600144",
    	"sub_interface": null,
    	"pppoe_config": null,
    	"service_link_config": null,
    	"nat_address": null,
    	"_warning": null,
    	"_debug": null,
    	"_updated_on_utc": 15582355002760087,
    	"_status_code": "200",
    	"mac_address": null,
    	"scope": "local",
    	"type": "port",
    	"ipv4_config": null,
    	"attached_lan_networks": null,
    	"description": "Test Description",
    	"parent": null,
    	"tags": null,
    	"_request_id": "1558235500233008499992311258814604102763",
    	"dhcp_relay": null,
    	"ethernet_port": {
    		"full_duplex": false,
    		"speed": 0
    	},
    	"site_wan_interface_ids": [
    		"14998871125520113"
    	],
    	"_error": null,
    	"name": "3",
    	"mtu": 1500,
    	"admin_up": true,
    	"_info": null,
    	"_created_on_utc": 14994857989600144,
    	"_etag": 9
    }

### POST Method

The POST method is used to create a new resource, that currently does not exist on the controller. The snippet below provides an example on how to create a loopback interface using the POST operation. More information on the resources that can be queried using the POST method are listed at https://cloudgenix.github.io/sdk-python/post_api.m.html.

    #Create loopback interface
    payload = {
    	"type":"loopback",
    	"attached_lan_networks":None,
    	"site_wan_interface_ids":None,
    	"name":None,
    	"description":"Loopback",
    	"tags":["test"],
    	"mac_address":None,
    	"mtu":1500,
    	"ipv4_config":None,
    	"ethernet_port":{
    		"full_duplex":False,
    		"speed":0
    	},
    	"admin_up":True,
    	"nat_address":None,
    	"nat_port":0,
    	"used_for":"none",
    	"bypass_pair":None,
    	"bound_interfaces":None,
    	"sub_interface":None,
    	"pppoe_config":None,
    	"dhcp_relay":None,
    	"parent":None,
    	"network_context_id":None,
    	"service_link_config":None,
    	"scope":"local"
    }
    sid = "15427379313890067"
    eid = "15553916609740044"
    resp = cgx_session.post.interfaces(site_id=sid, element_id=eid, data=payload)
    cloudgenix.jd_detailed(resp)

    [Output]
    REQUEST: POST /v4.6/api/tenants/1092/sites/15427379313890067/elements/15553916609740044/interfaces
    REQUEST HEADERS:
    	Connection: keep-alive
    	Accept-Encoding: gzip, deflate
    	Accept: application/json
    	User-Agent: python-requests/2.19.1 (CGX SDK v5.1.1b1)
    	Content-Type: application/json
    	Cookie: AUTH_TOKEN="<SENSITIVE - NOT SHOWN BY DEFAULT>"
    	Content-Length: 527
        REQUEST BODY:
    {
    	"bound_interfaces": null,
    	"network_context_id": null,
    	"nat_port": 0,
    	"mtu": 1500,
    	"sub_interface": null,
    	"pppoe_config": null,
    	"service_link_config": null,
    	"site_wan_interface_ids": null,
    	"ethernet_port": {
    		"full_duplex": false,
    		"speed": 0
    	},
    	"mac_address": null,
    	"scope": "local",
    	"type": "loopback",
    	"ipv4_config": null,
    	"attached_lan_networks": null,
    	"description": "Loopback",
    	"parent": null,
    	"tags": [
    		"test"
    	],
    	"admin_up": true,
    	"dhcp_relay": null,
    	"bypass_pair": null,
    	"nat_address": null,
    	"name": null,
    	"used_for": "none"
    }
    RESPONSE: 200 OK
    RESPONSE HEADERS:
    	Date: Mon, 20 May 2019 20:43:32 GMT
    	Content-Type: application/json; charset=utf-8
    	Content-Length: 779
    	Connection: keep-alive
    	Server: nginx
    	Content-Security-Policy: default-src 'self'
    	X-Content-Type-Options: nosniff
    	X-Frame-Options: DENY, SAMEORIGIN
    	X-Permitted-Cross-Domain-Policies: master-only
    	X-XSS-Protection: 1; mode=block
    	Cache-Control: no-store, no-cache
    	Pragma: no-cache
    	Expires: 0
    	Strict-Transport-Security: 31536000; includeSubDomains
    RESPONSE DATA:
    {
    	"bound_interfaces": null,
    	"_content_length": "0",
    	"network_context_id": null,
    	"_schema": 4,
    	"nat_port": 0,
    	"bypass_pair": null,
    	"used_for": "none",
    	"id": "15583850118960176",
    	"sub_interface": null,
    	"pppoe_config": null,
    	"service_link_config": null,
    	"nat_address": null,
    	"_warning": null,
    	"_debug": null,
    	"_updated_on_utc": 15583850118960176,
    	"_status_code": "200",
    	"mac_address": null,
    	"scope": "local",
    	"type": "loopback",
    	"ipv4_config": null,
    	"attached_lan_networks": null,
    	"description": "Loopback",
    	"parent": null,
    	"tags": [
    		"test"
    	],
    	"_request_id": "1558385011854016899999017721755776450655",
    	"dhcp_relay": null,
    	"ethernet_port": {
    		"full_duplex": false,
    		"speed": 0
    	},
    	"site_wan_interface_ids": null,
    	"_error": null,
    	"name": "loopback-15583850118910174",
    	"mtu": 1500,
    	"admin_up": true,
    	"_info": null,
    	"_created_on_utc": 15583850118960176,
    	"_etag": 1
    }

### DELETE Method

The DELETE method is used to delete resources created by the user. Not all resources can be deleted, and an error is returned if an attempt to delete an unqualified resource is made. The snippet below goes over the delete operation of the loopback interface created in the previous section. The interface ID can be retrieved from the API response of the POST request in the previous example. More information on the resources that can be deleted using the DELETE method is listed at https://cloudgenix.github.io/sdk-python/delete_api.m.html.

    #Delete loopback interface

    sid = "15427379313890067"
    eid = "15553916609740044"
    interface_id = “15583850118960176”
    resp = cgx_session.delete.interfaces(site_id=sid, element_id=eid, interface_id = interface_id)
    cloudgenix.jd_detailed(resp)

    [Output]
    REQUEST: DELETE /v4.6/api/tenants/1092/sites/15427379313890067/elements/15553916609740044/interfaces/15583850118960176
    REQUEST HEADERS:
    	Connection: keep-alive
    	Accept-Encoding: gzip, deflate
    	Accept: application/json
    	User-Agent: python-requests/2.19.1 (CGX SDK v5.1.1b1)
    	Cookie: AUTH_TOKEN="<SENSITIVE - NOT SHOWN BY DEFAULT>"
    	Content-Length: 0
    REQUEST BODY:
    {}

    RESPONSE: 200 OK
    RESPONSE HEADERS:
    	Date: Mon, 20 May 2019 21:06:35 GMT
    	Content-Type: application/json; charset=utf-8
    	Content-Length: 779
    	Connection: keep-alive
    	Server: nginx
    	Content-Security-Policy: default-src 'self'
    	X-Content-Type-Options: nosniff
    	X-Frame-Options: DENY, SAMEORIGIN
    	X-Permitted-Cross-Domain-Policies: master-only
    	X-XSS-Protection: 1; mode=block
    	Cache-Control: no-store, no-cache
    	Pragma: no-cache
    	Expires: 0
    	Strict-Transport-Security: 31536000; includeSubDomains
    RESPONSE DATA:
    {
    	"bound_interfaces": null,
    	"_content_length": "0",
    	"network_context_id": null,
    	"_schema": 4,
    	"nat_port": 0,
    	"bypass_pair": null,
    	"used_for": "none",
    	"id": "15583850118960176",
    	"sub_interface": null,
    	"pppoe_config": null,
    	"service_link_config": null,
    	"nat_address": null,
    	"_warning": null,
    	"_debug": null,
    	"_updated_on_utc": 15583850118960176,
    	"_status_code": "200",
    	"mac_address": null,
    	"scope": "local",
    	"type": "loopback",
    	"ipv4_config": null,
    	"attached_lan_networks": null,
    	"description": "Loopback",
    	"parent": null,
    	"tags": [
    		"test"
    	],
    	"_request_id": "1558386395085021799996208608109078814040",
    	"dhcp_relay": null,
    	"ethernet_port": {
    		"full_duplex": false,
    		"speed": 0
    	},
    	"site_wan_interface_ids": null,
    	"_error": null,
    	"name": "loopback-15583850118910174",
    	"mtu": 1500,
    	"admin_up": true,
    	"_info": null,
    	"_created_on_utc": 15583850118960176,
    	"_etag": 1
    }

#### Want to contribute? See something missing?

###### Visit our [Contributing Guide](/contributing) or look for the "Edit this page" or "Report an Issue" button at the bottom of our docs pages

:::
