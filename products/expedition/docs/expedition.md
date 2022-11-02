---
id: home
title: Expedition 2.0
sidebar_label: Overview
hide_title: true
description: Overview of Expedition 2.0
slug: /expedition/docs
keywords:
  - pan-os
  - panos
  - xml
  - api
  - expedition
  - migration
  - firewall
  - configuration
image: /expedition/img/expedition.png
---

:::note
Expedition 1.x is the only supported version at time. Learn more about the release at our [Live Community](https://live.paloaltonetworks.com/t5/expedition/ct-p/migration_tool) site.
:::

## What is Expedition?

**Expedition** is the fifth evolution of the Palo Alto Networks Migration Tool. The original main purpose of this tool was to help reduce the time and effort to migrate a configuration from one of the supported vendors to Palo Alto Networks.

By using the Migration Tool, everyone can convert a configuration from Checkpoint or Cisco or any other vendor to a PAN-OS and give you more time to improve the results. Migration Tool 3 added some functionalities to allow our customers to enforce security policies based on App-ID and User-ID as well.

With Expedition 1.X, we went one step further, not only because we want to continue helping to facilitate the transition of a security policy from others vendors to PAN-OS but we want to ensure the outcome makes use of the most advanced features of the platform to get you closer to the best of the possible configurations. For this reason, we added a Machine Learning module, which can help you to generate new security policies based on real log traffic, and we have introduced the Best Practices Assessment Tool, which checks whether the configuration complies with the Best Practices recommended by our security experts.

With Expedition 2.0, we had two main goals on mind:

- Improve the tool performance and reliability
- Provide automation features

With all these huge improvements, we expect the next time you use Expedition the journey to excellence will be easier.

## Expedition 2.0 Architecture

The Expedition 2 container image consists of a set of individual containers (see Figure 1) that interact between each other, being the expedition-api the orchestrator for all workflow interactions. In the current version Expedition 2.0, the following packages, services and version should be found:

**Expedition-API**:

Container is intended to provide a RESTful API that can be consumed by your scripting language of choice and to present the UI (HTML/JS). The back-end API is developed using the Laravel PHP framework and served via Apache 2. Also running one or more PHP Agent(s) to support asynchronous requests that help with the execution of automated tasks and multi-processing actions. The agents also consume the API and communications with them are performed via RabbitMQ.

- Services installed:
  - Apache/2.4.53
  - PHP/7.4.29
- API (Laravel) logs path:
  - /var/www/html/expedition-api/storage/logs
- Some configuration files are stored in volumes on the host.

**RabbitMQ**:

Container to provide the RabbitMQ service for asynchronous requests. Communications are performed between web service API calls and PHP agents. Stopping this service will prevent agents from receiving messages for the execution of blocking or long lasting tasks, such as downloading configuration files from a PANOS device, doing reverse DNS resolutions, autoprocessing CSV traffic log files, among others.

- Services installed:
  - RabbitMQ/3.8

**Expedition-db**:

Container intended to provide a RDBMS as storage for the application data. Stopping this container will block all Expedition’s functionalities, as it would interrupt authentication, access to project information, or auditing.

- DB files are stored as volumes on the host.
- Services installed:
  - Maria DB ver. 10.8.2
- Databases:
  - Projects databases (as exp_XX). A project is a collection of information related to a specific migration to a device. Each project is stored on a dedicated database within the same RDBMS.
  - Authentication and authorization database (as pandbRBAC). Database to store application information such as users, grants and others.
  - Other databases. Additional databases that may be used to contain global values, such as device capacities, etc.

**Expedition-parsers**:

Container intended to provide the parser library and workflows to migrate from third party vendors to Palo Alto Networks configurations. This container includes mappings for specific service to configuration conversions when those are not TCP or UDP protocols.
Not directly available to be consumed by the user, but by the Expedition-API container when migrations are being requested. This container does not expose an API.
This container does not have persistence, therefore all data generated is only available during the container lifecycle.

- Services installed:
  - Apache/2.x
  - PHP/7.0

**Expedition-parsers-db**:

Helper container for the expedition-parser container to store temporal data needed for parsing vendor configs. After a migration, the databases are wiped.

- Without persistence so all data generated is available during the container lifecycle.
- Services installed:
  - Maria DB ver. 10.2
- Databases:
  - Projects DB. A project is a collection of information related to a specific migration to a device. Each project is stored on a dedicated database within the same RDBMS. The databases resemble the structure used by parsers in Expedition 1.
  - PANDBRAC DB. Database to store information required for the migration scripts, such as name of the project under migration, version of the PANOS target device, and user controls.

:::note
In order to persist users’ projects and devices’ information, some data is stored in shared volumes with the host (your computer). These shared space can be found in the /volumes folder, containing the following subfolders:

/volumes/user_space  
/volumes/mysql_files  
:::

![Architecture](/expedition/img/expedition2_arc.svg "Architecture")

## Supported Vendor Matrix

The below table listed the supported Vendor in current beta release, there will be more supported vendors in future releases.

For more specific inquiries, please contact fwmigrate@paloaltonetworks.com

| <small>Vendor</small>     | <small>Supported Vendor OS</small> | <small>Global Addr. Obj.</small> | <small>Addr. Group Obj.</small> | <small>Serv. Obj</small> | <small>Serv. Group Obj.</small> | <small>Sec. Pol</small> | <small>NAT Pol.</small> | <small>Net. Int. (L3)</small> | <small>Static routes</small> | <small>VPN</small> |
| ------------------------- | ---------------------------------- | -------------------------------- | ------------------------------- | ------------------------ | ------------------------------- | ----------------------- | ----------------------- | ----------------------------- | ---------------------------- | ------------------ |
| <small>Checkpoint</small> | R75, R77                           | ✅                               | ✅                              | ✅                       | ✅                              | ✅                      | ✅                      | ✅                            | ✅                           |                    |
|                           | >R80                               | ✅                               | ✅                              | ✅                       | ✅                              | ✅                      | ✅                      | ✅                            | ✅                           |                    |
| <small>Cisco</small>      | ASA 9.0,9.1,9.2, 9.6,8.2,8.4       | ✅                               | ✅                              | ✅                       | ✅                              | ✅                      | ✅                      | ✅                            | ✅                           | ✅                 |
|                           | FirePower(only in ASA syntax)      | ✅                               | ✅                              | ✅                       | ✅                              | ✅                      | ✅                      | ✅                            | ✅                           |                    |
| <small>Fortinet</small>   | Fortigate 4.0,5.0,6.0              | ✅                               | ✅                              | ✅                       | ✅                              | ✅                      | ✅                      | ✅                            | ✅                           |                    |
| <small>Juniper</small>    | All Netscreen Firewalls(ScreenOS)  | ✅                               | ✅                              | ✅                       | ✅                              | ✅                      | ✅                      | ✅                            | ✅                           |                    |
|                           | Junos 11.4,12.1,12.3               | ✅                               | ✅                              | ✅                       | ✅                              | ✅                      | ✅                      | ✅                            | ✅                           |                    |
