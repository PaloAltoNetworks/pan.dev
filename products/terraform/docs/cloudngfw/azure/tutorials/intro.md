---
id: intro
title: Securing vWAN
sidebar_label: Securing vWAN
hide_title: true
description: Securing vWAN
keywords:
  - pan-os
  - panos
  - azure
  - api
  - firewall
  - configuration
  - terraform
  - cloudngfw
---


# Deploying Cloud NGFW for Azure using Terraform


## Objective

[Cloud NGFW for Azure](https://www.paloaltonetworks.com/network-security/cloud-ngfw-for-azure) by Palo Alto Networks is natively integrated into the Azure Resource Manager framework and does not require the use of any vendor-specific APIs for deployment. 

In this guide, you will learn how to deploy and configure the Cloud NGFW resource using Terraform. Since Cloud NGFW is directly exposed in the Azure Portal and Azure APIs as a native service, it only requires the [Azure Terraform Provider](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs) to deploy and configure the resource.

## Prerequisites

 - The latest version of azurerm TF provider (installed automatically upon running Terraform init)
 - Panorama 10.2.4-h2+ with the latest Azure Plugin installed
 - Azure subscription with at least a Contributor role assigned to the user

## Setup

For this deployment, we will create 2x Cloud NGFW resources to secure an Azure vWAN. One Cloud NGFW will be managed by Azure Rulestack, while the other will be managed by Panorama.

The following resources will be created:

- Resource group
- Public IP address x2
- Virtual WAN
- Local Rulestack
- Cloud NGFW x2
- Routing Intent x2

First, in a separate directory create base Terraform files: `main.tf``, `variables.tf`` and `terraform.tfvars`.



```hcl title="terraform.tfvars"
region1 = "eastus"
region2 = "westeurope"
rg = "terraform-rg"
panorama-string = "Panorama registration string"
```


```hcl title="variables.tf"
variable "rg" {
  type = string
}

variable "region1" {
  type = string
}

variable "region2" {
  type = string
}

variable "panorama-string" {
  type = string
}
```

The features block is mandatory to run any azurerm deployment. If you’d like to stick with the defaults, leave it empty


```hcl title="main.tf"
provider "azurerm" {
    features {}
}
```
1. Resource Group

Query an existing Resource Group:
```
data "azurerm_resource_group" "rg" {
  name = var.rg
}
```
Or create a new one: 

```
resource "azurerm_resource_group" "rg" {
  name     = "terraform-rg"
  location = "East US"
}
```
2. Public IP address

Use the Public IP address resource to create at least one IP address that will be associated with each Cloud NGFW
```
resource "azurerm_public_ip" "cngfw-pip-eastus" {
  name                = "cngfw-pip-eastus"
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.region1
  allocation_method   = "Static"
  sku                 = "Standard"
}

resource "azurerm_public_ip" "cngfw-pip-westeu" {
  name                = "cngfw-pip-westeu"
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.region2
  allocation_method   = "Static"
  sku                 = "Standard"
}
```
3. Virtual WAN

Use the resources and data sources to interact with the vWAN-specific objects. For example,
```
resource "azurerm_virtual_wan" "vwan" {
  name                = "terraform-vwan"
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.region1
}

resource "azurerm_virtual_hub" "vhub-eastus" {
  name                = "terraform-vhub-eastus"
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.region1
  virtual_wan_id      = azurerm_virtual_wan.vwan.id
  address_prefix      = "10.0.0.0/23"
}
resource "azurerm_virtual_hub" "vhub-westeu" {
  name                = "terraform-vhub-westeu"
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.region2
  virtual_wan_id      = azurerm_virtual_wan.vwan.id
  address_prefix      = "10.0.0.0/23"
}
```
Cloud NGFW resource requires an NVA object to be created in the target virtual hub:
 ```
resource "azurerm_palo_alto_virtual_network_appliance" "nva-eastus" {
  name           = "terraform-nva-eastus"
  virtual_hub_id = azurerm_virtual_hub.vhub-eastus.id
}

resource "azurerm_palo_alto_virtual_network_appliance" "nva-westeu" {
  name           = "terraform-nva-westeu"
  virtual_hub_id = azurerm_virtual_hub.vhub-westeu.id
}
```
4. Local Rulestack

```
resource "azurerm_palo_alto_local_rulestack" "lrs-eastus" {
  name                  = "terraform-lrs-eastus"
  resource_group_name   = azurerm_resource_group.rg.name
  location              = var.region1
  anti_spyware_profile  = "BestPractice"
  anti_virus_profile    = "BestPractice"
  file_blocking_profile = "BestPractice"
  vulnerability_profile = "BestPractice"
  url_filtering_profile = "BestPractice"
}
```
5. Cloud NGFW

First, create a Cloud NGFW resource managed by Azure Rulestack

```
resource "azurerm_palo_alto_next_generation_firewall_virtual_hub_local_rulestack" "cngfw-eastus" {
  name                = "terraform-cngfw-eastus"
  resource_group_name = azurerm_resource_group.rg.name
  rulestack_id        = azurerm_palo_alto_local_rulestack.lrs-eastus.id

  network_profile {
    public_ip_address_ids        = [azurerm_public_ip.cngfw-pip-eastus.id]
    virtual_hub_id               = azurerm_virtual_hub.vhub-eastus.id
    network_virtual_appliance_id = azurerm_palo_alto_virtual_network_appliance.nva-eastus.id
  }
}
```
Next, create a Cloud NGFW managed by Panorama. You are required to have a Panorama instance with the Azure plugin installed to generate the Panorama Registration String.

```
resource "azurerm_palo_alto_next_generation_firewall_virtual_hub_panorama" "cngfw-westeu" {
  name                = "terraform-cngfw-westeu"
  resource_group_name = data.azurerm_resource_group.rg.name
  location            = var.region2

  network_profile {
    public_ip_address_ids        = [azurerm_public_ip.cngfw-pip-westeu.id]
    virtual_hub_id               = azurerm_virtual_hub.vhub-westeu.id
    network_virtual_appliance_id = azurerm_palo_alto_virtual_network_appliance.nva-westeu.id
  }

  panorama_base64_config = var.panorama-string
}
```

6. Routing Intent

The last step is to steer the traffic through the Cloud NGFW resources by setting the Routing Intent on both hubs.

```
resource "azurerm_virtual_hub_routing_intent" "routing-intent-eastus" {
  name           = "terraform-routing-intent-eastus"
  virtual_hub_id = azurerm_virtual_hub.vhub-eastus.id

  routing_policy {
    name         = "InternetTrafficPolicy"
    destinations = ["Internet"]
    next_hop     = azurerm_palo_alto_virtual_network_appliance.nva-eastus.id
  }

  routing_policy {
    name         = "PrivateTrafficPolicy"
    destinations = ["PrivateTraffic"]
    next_hop     = azurerm_palo_alto_virtual_network_appliance.nva-eastus.id
  }
  depends_on = [azurerm_palo_alto_next_generation_firewall_virtual_hub_local_rulestack.cngfw-eastus]
}

resource "azurerm_virtual_hub_routing_intent" "routing-intent-westeu" {
  name           = "terraform-routing-intent-westeu"
  virtual_hub_id = azurerm_virtual_hub.vhub-westeu.id

  routing_policy {
    name         = "InternetTrafficPolicy"
    destinations = ["Internet"]
    next_hop     = azurerm_palo_alto_virtual_network_appliance.nva-westeu.id
  }

  routing_policy {
    name         = "PrivateTrafficPolicy"
    destinations = ["PrivateTraffic"]
    next_hop     = azurerm_palo_alto_virtual_network_appliance.nva-westeu.id
  }
  depends_on = [azurerm_palo_alto_next_generation_firewall_virtual_hub_panorama.cngfw-westeu]
}
```

To summarize, we were able to create and provision an end-to-end deployment with Virtual WAN hubs secured with the Cloud NGFW using a single Terraform provider.

The content in this tutorial builds on the [introduction published in Palo Alto Networks' LiveCommunity Blog](https://live.paloaltonetworks.com/t5/community-blogs/deploying-cloud-ngfw-for-azure-using-terraform/ba-p/566200).

<Assumptions />

<LabGuidance />
