---
id: pancloudnode
title: pan-cloud-nodejs
sidebar_label: pan-cloud-nodejs (NodeJS)
hide_table_of_contents: true
---

# Palo Alto Networks Cloud NodeJS SDK

NodeJS idiomatic SDK for the Palo Alto Networks Application Framework.

The Palo Alto Networks Cloud NodeJS SDK (or pancloud for short) was created to assist developers with programmatically interacting with the Palo Alto Networks Cortex Framework.

The primary goal is to provide full, low-level API coverage for the following Application Framework services:

- Logging Service
- Directory Sync Service
- Event Service

The secondary goal is to provide coverage, in the form of helpers, for common tasks/operations. (Log/event pagination, OAuth 2.0 and token refreshing ...)

# Quick Starting

1. Install `pancloud` in your project as a dependency
   `$ npm install pancloud`
2. Use the `autoCredentials()` function to instantiate a `Credentials` object based on your environmental variables
   - _Option 1_: Set the variable `PAN_ACCESS_TOKEN` to retrieve a `Credentials` instance (valid to interface with a datalake as long as the access token is not expired / no auto-refresh available)
   - _Option 2_: Set the variables `PAN_CLIENT_ID`, `PAN_CLIENT_SECRET` and `PAN_REFRESH_TOKEN` to instantiate a memory-based credentials provider and retrieve a `Credentials` object bound to the datalake for which the provided refresh token was issued (auto-refresh available)
   - _Option 3_: Set the variable `PAN_DEVELOPER_TOKEN` to retieve a `Credentials` object that will leverage your API Explorer tenant to issue access tokens on your behalf
3. Instantiate a `LoggingService` object using the `Credentials` object you obtained in the step 2
4. Perform a query using the `query()` method of your `LoggingService` object.

## Quick Starting Examples

create a file named `index.js` in your project forder with the following content

```js
const pancloud = require("pancloud");
pancloud
  .autoCredentials()
  .then((credentials) => pancloud.LoggingService.factory(credentials))
  .then((loggingService) =>
    loggingService.query({
      query: "SELECT * FROM panw.dpi WHERE subtype='dhcp' LIMIT 1",
      startTime: 0, // 1970
      endTime: 2000000000, // 2033
      maxWaitTime: 30000, // wait up to 30 seconds for the query to complete
    })
  )
  .then((jobResult) => console.log(JSON.stringify(jobResult, undefined, " ")));
```

- **Running the example with an OAUTH2 access token (use case: interactive lab testing)**

```bash
$ export PAN_ACCESS_TOKEN=eyJhbGciOi......BwSldUIn0.eyJzd......iJ9.GFjG......iaW0N_PCA
$ node index
PANCLOUD: {"source":"AutoCredentials","message":"Environmental variable PAN_ENTRYPOINT not set. Assuming https://api.us.paloaltonetworks.com"}
PANCLOUD: {"source":"AutoCredentials","message":"Using startic credentials. No refresh available."}
PANCLOUD: {"source":"LoggingService","message":"Creating new LoggingService object for entryPoint https://api.us.paloaltonetworks.com"}
PANCLOUD: {"source":"LoggingService","message":"*queries* post request. Query: {\"query\":\"SELECT * FROM panw.dpi WHERE subtype='dhcp' LIMIT 1\",\"startTime\":0,\"endTime\":2000000000,\"maxWaitTime\":30000}"}
PANCLOUD: {"source":"LoggingService","message":"updated authorization header"}
{
 "queryId": "c1ce3558-0d33-42c5-bdfc-b71dbbc673eb",
 "sequenceNo": 0,
 "queryStatus": "JOB_FINISHED",
 "clientParameters": {},
 "result": {
  "esResult": {
   "took": 290,
   "hits": {
    "total": 838,
    "maxScore": 14.113734,
    "hits": [
     {
      "_index": "117270020_panw.dpi_2019040700-2019042700_000000",
      "_type": "dpi",
      "_id": "117270020_lcaas:1:1253209:657",
      "_score": 14.113734,
      "_source": {
       "dhcp-rsp-dns-suffix": "domain.name",
       "direction_reversed": "true",
       "sessionid": 59070,
       "dhcp-rsp-ciaddr": "00000000000000000000ffff0a640b0b",
       "type": "DPI",
       "content_ver": "8138-5378",
       "txn_id": 1,
       "receptor_txn_start": 1554755925,
       "subtype": "dhcp",
       "client_sw": "8.1.4",
       "recsize": 959,
       "dhcp-rsp-chaddr": "00:00:00:00:00:00",
       "dhcp-rsp-router-option": [
        {
         "dhcp-rsp-router-addr": "00000000000000000000ffffc0a80101"
        }
       ],
       "dhcp-rsp-yiaddr": "00000000000000000000ffff00000000",
       "dhcp-rsp-giaddr": "00000000000000000000ffff00000000",
       "dhcp-rsp-siaddr": "00000000000000000000ffff00000000",
       "receive_time": 1554755946,
       "dhcp-rsp-msg-type": 5,
       "dhcp-rsp-subnet-mask": "00000000000000000000ffffffffff00",
       "time_generated": 1554755922,
       "dhcp-rsp-domain-name-server-option": [
        {
         "dhcp-rsp-dns-addr": "00000000000000000000ffff503a3dfa"
        },
        {
         "dhcp-rsp-dns-addr": "00000000000000000000ffff503a3dfe"
        }
       ],
       "customer-id": "117270020",
       "serial": "",
       "dhcp-rsp-transaction-id": 3782930258,
       "dhcp-rsp-opcode": 2
      }
     }
    ]
   },
   "id": "c1ce3558-0d33-42c5-bdfc-b71dbbc673eb",
   "from": 0,
   "size": 1,
   "completed": true,
   "state": "COMPLETED",
   "timed_out": false
  },
  "esQuery": {
   "table": [
    "panw.dpi"
   ],
   "query": {
    "aggregations": {},
    "query": {
     "term": {
      "{{field_0}}": "{{value_0}}"
     }
    },
    "size": 1
   },
   "selections": [],
   "params": {
    "field_0": "subtype",
    "value_0": "dhcp"
   }
  }
 }
}
```

- **Running the example with an OAUTH2 client-id, client-secret and refresh-token (use case: script lab testing)**

```bash
$ export PAN_CLIENT_ID=<my oauth2 client-id>
$ export PAN_CLIENT_SECRET=<my oauth2 client-secret>
$ export PAN_REFRESH_TOKEN=<my datalake's refresh-token>
$ node index
PANCLOUD: {"source":"AutoCredentials","message":"Environmental variable PAN_ENTRYPOINT not set. Assuming https://api.us.paloaltonetworks.com"}
PANCLOUD: {"source":"AutoCredentials","message":"Using memory based credentials provider"}
PANCLOUD: {"source":"defaultCredentialsFactory","message":"Got 'client_id'"}
PANCLOUD: {"source":"defaultCredentialsFactory","message":"Got 'client_secret'"}
PANCLOUD: {"source":"DefaultCredentialsProvider","message":"Stateless credential provider. Returning an empty item list to load() request"}
PANCLOUD: {"source":"CortexCredentialProvider","message":"Successfully restored 0 items"}
PANCLOUD: {"source":"CortexCredentialProvider","message":"Authorization token successfully retrieved","name":"IDENTITY"}
PANCLOUD: {"source":"CortexCredentialProvider","message":"Retrieved Access Token for datalake ID DEFAULT from Identity Provider"}
PANCLOUD: {"source":"CortexCredentialProvider","message":"Instantiated new credential object from the factory for datalake id DEFAULT"}
PANCLOUD: {"source":"DefaultCredentialsProvider","message":"Stateless credential provider. Discarding new item issued"}
PANCLOUD: {"source":"CortexCredentialProvider","message":"Issued new Credentials Object for datalake ID DEFAULT"}
PANCLOUD: {"source":"LoggingService","message":"Creating new LoggingService object for entryPoint https://api.us.paloaltonetworks.com"}
PANCLOUD: {"source":"LoggingService","message":"*queries* post request. Query: {\"query\":\"SELECT * FROM panw.dpi WHERE subtype='dhcp' LIMIT 1\",\"startTime\":0,\"endTime\":2000000000,\"maxWaitTime\":30000}"}
PANCLOUD: {"source":"LoggingService","message":"updated authorization header"}
{
 "queryId": "de0dc306-f2a4-4247-8ace-a47cf92ff558",
 "sequenceNo": 0,
 "queryStatus": "JOB_FINISHED",
 "clientParameters": {},
 "result": {
  "esResult": {
   "took": 807,
   "hits": {
    "total": 846,
    "maxScore": 14.103332,
    "hits": [
     {
      "_index": "117270020_panw.dpi_2019040700-2019042700_000000",
      "_type": "dpi",
      "_id": "117270020_lcaas:1:1253209:657",
      "_score": 14.103332,
      "_source": {
       "dhcp-rsp-dns-suffix": "domain.name",
       "direction_reversed": "true",
       "sessionid": 59070,
       "dhcp-rsp-ciaddr": "00000000000000000000ffff0a640b0b",
       "type": "DPI",
       "content_ver": "8138-5378",
       "txn_id": 1,
       "receptor_txn_start": 1554755925,
       "subtype": "dhcp",
       "client_sw": "8.1.4",
       "recsize": 959,
       "dhcp-rsp-chaddr": "00:00:00:00:00:00",
       "dhcp-rsp-router-option": [
        {
         "dhcp-rsp-router-addr": "00000000000000000000ffffc0a80101"
        }
       ],
       "dhcp-rsp-yiaddr": "00000000000000000000ffff00000000",
       "dhcp-rsp-giaddr": "00000000000000000000ffff00000000",
       "dhcp-rsp-siaddr": "00000000000000000000ffff00000000",
       "receive_time": 1554755946,
       "dhcp-rsp-msg-type": 5,
       "dhcp-rsp-subnet-mask": "00000000000000000000ffffffffff00",
       "time_generated": 1554755922,
       "dhcp-rsp-domain-name-server-option": [
        {
         "dhcp-rsp-dns-addr": "00000000000000000000ffff503a3dfa"
        },
        {
         "dhcp-rsp-dns-addr": "00000000000000000000ffff503a3dfe"
        }
       ],
       "customer-id": "117270020",
       "serial": "",
       "dhcp-rsp-transaction-id": 3782930258,
       "dhcp-rsp-opcode": 2
      }
     }
    ]
   },
   "id": "de0dc306-f2a4-4247-8ace-a47cf92ff558",
   "from": 0,
   "size": 1,
   "completed": true,
   "state": "COMPLETED",
   "timed_out": false
  },
  "esQuery": {
   "table": [
    "panw.dpi"
   ],
   "query": {
    "aggregations": {},
    "query": {
     "term": {
      "{{field_0}}": "{{value_0}}"
     }
    },
    "size": 1
   },
   "selections": [],
   "params": {
    "field_0": "subtype",
    "value_0": "dhcp"
   }
  }
 }
}
```

- **Running the example with an API Explorer developer-token (use case: script lab testing)**

```bash
$ export PAN_DEVELOPER_TOKEN=<my developer-token>
$ node index
PANCLOUD: {"source":"AutoCredentials","message":"Environmental variable PAN_ENTRYPOINT not set. Assuming https://api.us.paloaltonetworks.com"}
PANCLOUD: {"source":"AutoCredentials","message":"Neither \"PAN_ACCESS_TOKEN\" (for static credentials) nor \"PAN_CLIENT_ID\", \"PAN_CLIENT_SECRET\" and \"PAN_REFRESH_TOKEN\" for a memory-based credentials provider where provider. Will try with developer token credetials"}
PANCLOUD: {"source":"LoggingService","message":"Creating new LoggingService object for entryPoint https://api.us.paloaltonetworks.com"}
PANCLOUD: {"source":"LoggingService","message":"*queries* post request. Query: {\"query\":\"SELECT * FROM panw.dpi WHERE subtype='dhcp' LIMIT 1\",\"startTime\":0,\"endTime\":2000000000,\"maxWaitTime\":30000}"}
PANCLOUD: {"source":"LoggingService","message":"updated authorization header"}
{
 "queryId": "1e7ded92-d49a-4afa-97a3-5314f708f950",
 "sequenceNo": 0,
 "queryStatus": "JOB_FINISHED",
 "clientParameters": {},
 "result": {
  "esResult": {
   "took": 102,
   "hits": {
    "total": 1568,
    "maxScore": 12.697968,
    "hits": [
     {
      "_index": "117270018_panw.dpi_2019040800-2019042800_000000",
      "_type": "dpi",
      "_id": "117270018_lcaas:0:5351784:864",
      "_score": 12.697968,
      "_source": {
       "dhcp-req-msg-type": 1,
       "dhcp-req-opcode": 1,
       "receive_time": 1554699492,
       "sessionid": 239993,
       "time_generated": 1554699473,
       "dhcp-req-yiaddr": "00000000000000000000ffff00000000",
       "type": "DPI",
       "dhcp-req-host-name": "HIuBtmcklSawAHLVKHBkJbXQBDfKCvo",
       "content_ver": "8138-5378",
       "dhcp-req-giaddr": "00000000000000000000ffff00000000",
       "dhcp-req-chaddr": "db:7b:65:4b:09:c4",
       "txn_id": 1,
       "dhcp-req-transaction-id": 407499899,
       "customer-id": "117270018",
       "serial": "",
       "receptor_txn_start": 1554699472,
       "subtype": "dhcp",
       "dhcp-req-lease-time": 4294967295,
       "dhcp-req-siaddr": "00000000000000000000ffff00000000",
       "client_sw": "8.1.4",
       "recsize": 727,
       "dhcp-req-vendor-class": "Linux 2.4.22 i686",
       "dhcp-req-ciaddr": "00000000000000000000ffff00000000"
      }
     }
    ]
   },
   "id": "1e7ded92-d49a-4afa-97a3-5314f708f950",
   "from": 0,
   "size": 1,
   "completed": true,
   "state": "COMPLETED",
   "timed_out": false
  },
  "esQuery": {
   "table": [
    "panw.dpi"
   ],
   "query": {
    "aggregations": {},
    "query": {
     "term": {
      "{{field_0}}": "{{value_0}}"
     }
    },
    "size": 1
   },
   "selections": [],
   "params": {
    "field_0": "subtype",
    "value_0": "dhcp"
   }
  }
 }
}
```
