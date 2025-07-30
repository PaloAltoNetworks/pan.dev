---
hide_title: true
id: cloud_ngfw
keywords:
- pan-os
- panos
- firewall
- configuration
- terraform
- vmseries
- vm-series
- swfw
- software-firewalls
- gcp
pagination_next: null
pagination_prev: null
sidebar_label: GCP Cloud NGFW
title: 'Reference architecture with Terraform : GCP Cloud Next-Generation Firewall'
---

# Reference architecture with Terraform : GCP Cloud Next-Generation Firewall

Palo Alto Network provides a fully managed cloud-based Next-Generation Firewall in GCP , called the "Cloud NGFW". This example demonstrates the deployment of the Cloud NGFW in a GCP environment.

[Cloud NGFW Enterprise](https://cloud.google.com/firewall?hl=en) is a fully distributed firewall service with advanced protection capabilities to protect your Google Cloud workloads from internal & external threats, including: intrusion, malware, spyware, and command-and-control. The service works by creating Google-managed zonal [firewall endpoints](https://cloud.google.com/firewall/docs/about-firewall-endpoints) that use packet intercept technology to transparently intercept workload traffic for deep packet inspection.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/examples/cloud_ngfw) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/examples/cloud_ngfw)

## Reference Architecture Design

In this example, a VPC network contains two virtual machines, `client-vm` & `web-server-vm`. The `client-vm` simulates threats for both north/south internet traffic and east/west traffic to a web application on the `web-vm`.

To prevent the malicious traffic, a Cloud NGFW endpoint is created and associated to the network, where network firewall policies define how the traffic should be inspected by Cloud NGFW.

<INSERT PICTURE HERE>

With the default variable values - the topology consists of:
  - A VPC network with one subnet
  - A service account used by the Linux VMs
  - One client VM instance named "client-vm"
  - One web server VM instance named "web-server-vm"
  - A Cloud NGFW endpoint associated with the VPC network and zone
  - A cloud router and cloud NAT in order to facilitate internet access to the VMs
  - A network security profile and associated group
  - A network policy containing 2 rules - one `ingress` and one `egress` in order to redirect and inspect traffic

## Prerequisites

- Appropriate IAM access to be able to use Compute Engine and Cloud Firewall services in the selected GCP project.

For more information, please see:
* [IAM Roles - Firewall Endpoints](https://cloud.google.com/firewall/docs/about-firewall-endpoints#iam-roles)
* [IAM Roles - Firewall Endpoint Associations](https://cloud.google.com/firewall/docs/about-firewall-endpoints#endpoint-association)
* [IAM Roles - Security Profiles](https://cloud.google.com/firewall/docs/about-security-profiles#iam-roles)
* [IAM Roles - Global Network Firewall Policies](https://cloud.google.com/firewall/docs/network-firewall-policies#iam)

## Usage

1. Access Google Cloud Shell or any other environment that has access to your GCP project

2. Clone the repository:

```
git clone https://github.com/PaloAltoNetworks/terraform-google-swfw-modules
cd terraform-google-swfw-modules/examples/cloud_ngfw
```

3. Copy the `example.tfvars` to `terraform.tfvars`.

`project`, `org_id` and `region` should be modified for successful deployment and access to the instance.

There are also a few variables that have some default values but which should also be changed as per deployment requirements:

  - `name_prefix`

4. Apply the terraform code:

```
terraform init
terraform apply
```

5. Check the successful application and outptus of the resulting infrastructure:

```
Apply complete! Resources: 21 added, 0 changed, 0 destroyed.
```

## Post-deployment

After the deployment is complete - using the default network security profile - use the following environment variable to test out the security enforced policies:

```bash
export REMOTE_SCRIPT='
ns1=$(curl -s -o /dev/null -w "%{http_code}\n" http://www.eicar.org/cgi-bin/.%2e/.%2e/.%2e/.%2e/bin/sh --data "echo Content-Type: text/plain; echo; uname -a" --max-time 2)
ns2=$(curl -s -o /dev/null -w "%{http_code}\n" http://www.eicar.org/cgi-bin/user.sh -H "FakeHeader:() { :; }; echo Content-Type: text/html; echo ; /bin/uname -a" --max-time 2)
ns3=$(curl -s -o /dev/null -w "%{http_code}\n" http://www.eicar.org/cgi-bin/.%2e/.%2e/.%2e/.%2e/etc/passwd --max-time 2)
ew1=$(curl -w "%{http_code}\\n" -s -o /dev/null http://10.0.0.20/cgi-bin/.%2e/.%2e/.%2e/.%2e/bin/sh --data "echo Content-Type: text/plain; echo; uname -a" --max-time 2)
ew2=$(curl -w "%{http_code}\\n" -s -o /dev/null http://10.0.0.20/cgi-bin/user.sh -H "FakeHeader:() { :; }; echo Content-Type: text/html; echo ; /bin/uname -a" --max-time 2)
ew3=$(curl -w "%{http_code}\\n" -s -o /dev/null http://10.0.0.20/cgi-bin/.%2e/.%2e/.%2e/.%2e/etc/passwd --max-time 2)
echo ""
echo "Response Codes (north/south) :  $ns1 $ns2 $ns3"
echo "Response Codes (east/west)   :  $ew1 $ew2 $ew3"
echo ""'
```

Now run this script on the client-vm instance to verify the security policies in action:

```bash
gcloud compute ssh <name_prefix>client-vm --tunnel-through-iap --command="bash -c '$REMOTE_SCRIPT'"
```

After running the command - if the traffic is successfuly inspected and blocked by the Cloud NGFW, you should see the following response codes:

```bash
Response Codes (north/south) :  000 000 000
Response Codes (east/west)   :  000 000 000
```

Now you can also check the logs in Cloud Console Network Security -> Cloud NGFW -> Threats.

## Reference

### Requirements

- `terraform`, version: >= 1.3, < 2.0

### Providers

- `google`

### Modules
Name | Version | Source | Description
--- | --- | --- | ---
`iam_service_account` | - | ../../modules/iam_service_account | 
`vpc` | - | ../../modules/vpc | 
`cloud_nat` | 5.3.0 | terraform-google-modules/cloud-nat/google | 
`ngfw` | - | ../../modules/cloud_ngfw | 

### Resources

- `compute_instance` (managed)
- `compute_image` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`org_id`](#org_id) | `string` | Organization ID where the Firewall Endpoint will be created.
[`networks`](#networks) | `map` | A map containing each network setting.
[`cloud_nats`](#cloud_nats) | `map` | A map containing the Cloud NAT configuration settings.
[`firewall_endpoints`](#firewall_endpoints) | `map` | 
A map containing the Cloud Firewall Endpoints configuration settings.
[`network_security_profiles`](#network_security_profiles) | `map` | 
A map containing the network security profile configuration settings.
[`network_policies`](#network_policies) | `object` | 
A map containing the network policy configuration settings.
[`linux_vms`](#linux_vms) | `map` | A map containing each Linux VM configuration that will be placed in SPOKE VPCs for testing purposes.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`project`](#project) | `string` | The project name to deploy the infrastructure in to.
[`name_prefix`](#name_prefix) | `string` | A string to prefix resource namings.
[`service_accounts`](#service_accounts) | `map` | A map containing each service account setting.



### Required Inputs details

#### org_id

Organization ID where the Firewall Endpoint will be created.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### networks

A map containing each network setting.

Example of variable deployment :

```
networks = {
  fw-mgmt-vpc = {
    vpc_name = "fw-mgmt-vpc"
    create_network = true
    delete_default_routes_on_create = false
    mtu = "1460"
    routing_mode = "REGIONAL"
    subnetworks = {
      fw-mgmt-sub = {
        name              = "fw-mgmt-sub"
        create_subnetwork = true
        ip_cidr_range = "10.10.10.0/28"
        region = "us-east1"
      }
    }
    firewall_rules = {
      allow-mgmt-ingress = {
        name = "allow-mgmt-ingress"
        source_ranges = ["10.10.10.0/24"]
        priority = "1000"
        allowed_protocol = "all"
        allowed_ports = []
      }
    }
  }
}
```

For a full list of available configuration items - please refer to [module documentation](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/vpc#input_networks)

Multiple keys can be added and will be deployed by the code.


Type: 

```hcl
map(object({
    vpc_name                        = string
    create_network                  = optional(bool, true)
    delete_default_routes_on_create = optional(bool, false)
    enable_ula_internal_ipv6        = optional(bool, false)
    internal_ipv6_range             = optional(string, "")
    mtu                             = optional(number, 1460)
    routing_mode                    = optional(string, "REGIONAL")
    subnetworks = map(object({
      name              = string
      create_subnetwork = optional(bool, true)
      ip_cidr_range     = string
      region            = string
      stack_type        = optional(string)
      log_config = optional(object({
        aggregation_interval = optional(string)
        flow_sampling        = optional(string)
        metadata             = optional(string)
        metadata_fields      = optional(list(string))
        filter_expr          = optional(string)
      }))
    }))
    firewall_rules = optional(map(object({
      name                    = string
      source_ranges           = optional(list(string))
      source_tags             = optional(list(string))
      source_service_accounts = optional(list(string))
      allowed_protocol        = string
      allowed_ports           = list(string)
      priority                = optional(string)
      target_service_accounts = optional(list(string))
      target_tags             = optional(list(string))
      log_metadata            = optional(string)
    })))
    }
  ))
```


<sup>[back to list](#modules-required-inputs)</sup>

#### cloud_nats

A map containing the Cloud NAT configuration settings.

Example of variable deployment:

```
cloud_nats = {
    fw-autoscale-usc1-nat = {
        name                           = "fw-autoscale-usc1-nat"
        region                         = "us-central1"
        router_name                    = "fw-autoscale-usc1-nat-router"
        vpc_network_key                = "fw-untrust-vpc"
        min_ports_per_vm               = 1024
        max_ports_per_vm               = 4096
        enable_dynamic_port_allocation = true
        log_config_enable              = true
        subnetworks = [
        {
            subnetwork_key = "fw-untrust-usc1-sub"
        }
        ]
    }
}
```

For a full list of available configuration items - please visit https://registry.terraform.io/modules/terraform-google-modules/cloud-nat/google/5.3.0

Multiple keys can be added and will be deployed by the code.



Type: 

```hcl
map(object({
    name                           = string
    region                         = string
    router_name                    = string
    vpc_network_key                = string
    min_ports_per_vm               = optional(number, 1024)
    max_ports_per_vm               = optional(number, 4096)
    enable_dynamic_port_allocation = optional(bool, true)
    log_config_enable              = optional(bool, true)
    subnetworks = list(object({
      subnetwork_key = string
    }))
    }
  ))
```


<sup>[back to list](#modules-required-inputs)</sup>

#### firewall_endpoints


A map containing the Cloud Firewall Endpoints configuration settings.

Example of variable deployment:

```
  firewall_endpoints = {
      endpoint_a = {
          firewall_endpoint_name             = "endpoint-new-a"
          org_id                             = "12345"
          zone                               = "us-central1-a"
          billing_project_id                 = "ngfwtest-billing-project"
          firewall_endpoint_association_name = "fwe-assoc-new-a"
          project_id                         = "ngfwtest-billing-project"
      }
  }
```



Type: 

```hcl
map(object({
    firewall_endpoint_name             = string
    zone                               = string
    firewall_endpoint_association_name = string
    tls_inspection_policy              = optional(string)
    vpc_network_key                    = string
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

#### network_security_profiles


A map containing the network security profile configuration settings.

Example of variable deployment:
```
profile-a = {
  profile_name              = "profile-a"
  profile_group_name        = "group-profile-a"
  org_id                    = "12345"
  profile_description       = "My Profile"
  profile_group_description = "My Profile Group"
  severity_overrides = {
    "LOW"           = "DENY"
    "INFORMATIONAL" = "ALERT"
    "MEDIUM"        = "DENY"
    "HIGH"          = "DENY"
    "CRITICAL"      = "DENY"
  }
}
```


Type: 

```hcl
map(object({
    profile_name              = string
    profile_group_name        = string
    profile_description       = optional(string, null)
    profile_group_description = optional(string, null)
    labels                    = optional(map(string), null)
    location                  = optional(string, "global")
    severity_overrides        = optional(map(string), {})
    threat_overrides          = optional(map(string), {})
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

#### network_policies


A map containing the network policy configuration settings.

A single policy is created and used but multile rules can be added - both ingress and egress.

Example of variable deployment:
  
```
  network_policies = {
      policy_name = "network-policy-a"
      description = "This is a network policy for the ngfw project"
      project_id  = "ngfwtest-project"
      network_associations = {
          "assoc-1" = {
              policy_association_name = "network-policy-a-assoc"
              vpc_network_key         = "network-a"
          }
          "assoc-2" = {
              policy_association_name = "network-policy-b-assoc"
              vpc_network_key         = "network-b"
          }
      }
      rules = {
          "allow_some_ingress" = {
              rule_name          = "allow_some_ingress"
              description        = "Allow some ingress traffic"
              direction          = "INGRESS"
              enable_logging     = true
              tls_inspect        = false
              priority           = 100
              action             = "apply_security_profile_group"
              security_group_key = "profile-a"
              dest_ip_ranges     = ["10.0.0.0/24"]
              src_ip_ranges      = ["0.0.0.0/0"]
              ip_protocol        = "all"
          }
          "allow_some_egress" = {
              rule_name          = "allow_some_egress"
              description        = "Allow some egress traffic"
              direction          = "EGRESS"
              enable_logging     = true
              tls_inspect        = false
              priority           = 101
              action             = "apply_security_profile_group"
              security_group_key = "profile-a"
              dest_ip_ranges     = ["0.0.0.0/0"]
              src_ip_ranges      = ["10.0.0.0/24"]
              ip_protocol        = "all"
          }
      }
  }
```


Type: 

```hcl
object({
    policy_name = string
    description = optional(string, null)
    network_associations = map(object({
      policy_association_name = string
      vpc_network_key         = string
    }))
    create_firewall_policy = bool
    rules = map(object({
      rule_name               = string
      description             = optional(string, null)
      direction               = string
      enable_logging          = optional(bool, false)
      tls_inspect             = optional(bool, false)
      priority                = optional(number, 100)
      action                  = string
      security_group_key      = optional(string)
      target_service_accounts = optional(list(string))
      disabled                = optional(bool, false)
      target_secure_tags = optional(map(object({
        name = string
      })), {})
      src_secure_tags = optional(map(object({
        name = string
      })), {})
      src_ip_ranges             = optional(list(string))
      dest_ip_ranges            = optional(list(string))
      src_address_groups        = optional(list(string))
      dest_address_groups       = optional(list(string))
      src_fqdns                 = optional(list(string))
      dest_fqdns                = optional(list(string))
      src_region_codes          = optional(list(string))
      dest_region_codes         = optional(list(string))
      src_threat_intelligences  = optional(list(string))
      dest_threat_intelligences = optional(list(string))
      ip_protocol               = string
      ports                     = optional(list(string))
    }))
  })
```


<sup>[back to list](#modules-required-inputs)</sup>

#### linux_vms

A map containing each Linux VM configuration that will be placed in SPOKE VPCs for testing purposes.

Example of varaible deployment:

```
linux_vms = {
  spoke1-vm = {
    linux_machine_type = "n2-standard-4"
    zone               = "us-east1-b"
    linux_disk_size    = "50" # Modify this value as per deployment requirements
    vpc_network_key    = "fw-spoke1-vpc"
    subnetwork_key     = "fw-spoke1-sub"
    private_ip         = "192.168.1.2"
    scopes = [
      "https://www.googleapis.com/auth/compute.readonly",
      "https://www.googleapis.com/auth/cloud.useraccounts.readonly",
      "https://www.googleapis.com/auth/devstorage.read_only",
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]
  }
}
```


Type: 

```hcl
map(object({
    linux_machine_type      = string
    zone                    = string
    linux_disk_size         = string
    vpc_network_key         = string
    subnetwork_key          = string
    private_ip              = string
    scopes                  = list(string)
    metadata_startup_script = optional(string, null)
    service_account_key     = string
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### project

The project name to deploy the infrastructure in to.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### name_prefix

A string to prefix resource namings.

Type: string

Default value: `example-`

<sup>[back to list](#modules-optional-inputs)</sup>

#### service_accounts

A map containing each service account setting.

Example of variable deployment :
  ```
service_accounts = {
  "sa-vmseries-01" = {
    service_account_id = "sa-vmseries-01"
    display_name       = "VM-Series SA"
    roles = [
      "roles/compute.networkViewer",
      "roles/logging.logWriter",
      "roles/monitoring.metricWriter",
      "roles/monitoring.viewer",
      "roles/viewer"
    ]
  }
}
```
For a full list of available configuration items - please refer to [module documentation](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/iam_service_account#Inputs)

Multiple keys can be added and will be deployed by the code.



Type: 

```hcl
map(object({
    service_account_id = string
    display_name       = string
    roles              = list(string)
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>