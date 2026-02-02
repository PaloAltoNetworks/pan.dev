---
id: introduction
title: Service Provider Interconnect APIs
sidebar_label: Service Provider Interconnect Overview 
keywords:
  - SASE
  - Reference
  - API
---
:::warning Deprecation Notice

The **Backbone** and **Connection** APIs are now **deprecated** and have been replaced by the **Service Provider (SP) Interconnect** framework. 

**Key Terminology Changes:**
* **Backbone** is now **Interconnect**.
* **Connection** is now **VlanAttachment**.
* **Physical Connection** is now **Physical VlanAttachment**.

**What You Should Do:**
1. **Migrate Endpoints:** Update API calls to the new `/sp-interconnect/` directory structure.
2. **Update Resources:** Align internal logic with the new **SHARED** and **PER_TENANT** types.

:::

## Overview
Welcome to the **Strata Cloud Manager Multitenant Service Provider (SP) Interconnect APIs**. 

The SP Interconnect API allows you to use Service Provider Interconnects (e.g., BT, Orange, AT&T) for directing Prisma Access egress traffic. Without SP Interconnect, traffic relies on public cloud backbones like GCP, AWS, and Azure. This framework provides enhanced security, optimized costs, and improved reliability. 

## Key Components
* **Interconnects**: The top-level resource grouping connectivity by region and cloud provider.
* **VlanAttachments**: Virtual circuits (formerly "Connections") that facilitate data flow.
* **Physical VlanAttachments**: Underlying physical infrastructure mapping.
* **IPPools**: Managed IP sets attached directly to an Interconnect.