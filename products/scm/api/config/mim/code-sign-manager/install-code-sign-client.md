---
id: code-sign-client-install
title: "Install the Code Sign Client"
sidebar_label: "Install the Code Sign Client"
keywords:
  - Machine Identity Management
  - Code Sign Manager
---

The Code Sign Client runs on workstations and build servers that need to perform signing operations using Signing Keys managed in the Code Signing capability. This page describes how to download and install the client on your preferred platform.

## Before you begin

- A Strata Cloud Manager user account  
- Access to at least one Signing Key (your administrator must assign you as an Authorized Signer)  
- A system that meets the following requirements:
   - Windows
      - .NET Framework 4.8
      - Windows 10 or later
      - Windows Server 2016 or later
   - Tested Linux versions
      - Debian 9 and later
      - Ubuntu 16.04 and later
      - CentOS Stream 8 and later
      - Red Hat Enterprise Linux (RHEL) 7 and later
   - macOS
      - Monterey 12 and later

## Download the installer

You can download the Code Sign Client from the Strata Cloud Manager UI.

1. [Sign in](https://docs.cyberark.com/mis-saas/CSH_sign_in/) to Strata Cloud Manager.  
2. Go to **Inventory** > **Signing Keys**.  
3. Select any Signing Key to open its details.  
4. Select the **Client Installation** tab.  
5. Choose the installer for your operating system:
   - Windows  
   - macOS  
   - Linux  

Each platform-specific installer includes instructions for both GUI and command-line installation.

> The on-screen instructions also include a section called "Using the Client with this Signing Key." Those steps are covered more fully in this documentation, so you can rely on the guidance here rather than the brief notes in the installer if you're new to the client.

## What's next

After installing the Code Sign Client, the next step is to [authenticate using a service account](/scm/api/config/mim/code-sign-manager/code-sign-client-auth-service-account).