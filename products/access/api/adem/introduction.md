---
id: introduction
sidebar_label: Autonomous DEM APIs
title: Introduction to ADEM APIs
keywords:
  - SASE
  - Reference
  - API
---

This API provides access to the Autonomous Digital Experience Management (ADEM) timeseries data. 

### Understanding Data Aggregates
All responses are aggregates over a period of time specified by the `start`, `end`, or `timerange` query parameters. The aggregate used for each field depends on the field type:

* **Numerical Fields:** For types such as application scores, the aggregate is typically an **average**. 
* **Statistical Variations:** In specific cases, metrics may represent a **maximum**, **minimum**, or **sum**.
* **String Fields:** These may be returned as a **comma-separated concatenation** of distinct values recorded during the sample period.

---

> These APIs use the common SASE authentication mechanism and base URL. See the [Prisma SASE API Get Started](/sase/docs/getstarted) guide for more information.