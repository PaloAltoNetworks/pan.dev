---
id: redteamapi
title: "Prisma AIRS AI Red Teaming API"
sidebar_label: "Prisma AIRS AI Red Teaming API"
keywords:
  - AIRS
  - Reference
  - Cloud
  - API
---


# Prisma AIRS AI Red Teaming API

This document describes the APIs available for the **Prisma AIRS AI Red Teaming** service.

## Overview
The AI Red Teaming API provides an automated and secure solution for LLM Red Teaming, allowing organizations to evaluate the security and safety of GenAI systems. It leverages both an attack library and an LLM agent-based approach to perform vulnerability assessments.

### Prerequisites
To use these APIs, you must complete the following steps:
1.  **Activate** and associate a deployment profile in the *Customer Support Portal* for Prisma AIRS AI Red Teaming.
2.  **Onboard** the AI Red Teaming in *Strata Cloud Manager*.

> **Note:** For licensing, onboarding, activation, and to obtain the API authentication key and profile name, please refer to the *Prisma AIRS AI Red Teaming Administration Guide*.

---

## Key Features

* **Automated Red Teaming:** Run categorized LLM attacks, including jailbreaks, prompt injection, and input manipulations.
* **Human-Augmented Simulations:** Define attack objectives tailored to your business use case (e.g., finance, healthcare).
* **Customizable Attack Libraries:** Access an out-of-the-box database of hundreds of vulnerabilities or add your own attack prompt sets.
* **Extensive Reporting:** Get detailed insights into Red Teaming scans, risk scores, and specific attack details.

---

## How it Works

1.  **Create a target** for which you want to run a scan.
2.  **Submit a scan** with your model endpoint.
3.  AI Red Teaming runs automated attack simulations asynchronously.
4.  **Retrieve scan report results**, including vulnerabilities and risk assessments.

---

## API Configuration

### Base URL
All interactions with the Prisma AIRS AI Red Teaming APIs begin at the following base URL: