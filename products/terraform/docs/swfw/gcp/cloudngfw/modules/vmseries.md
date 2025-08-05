---
hide_title: true
id: vmseries
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
sidebar_label: VM-Series
title: Palo Alto Networks VM-series firewall deployment
---

# Palo Alto Networks VM-series firewall deployment

To manage via ssh/https please connect to the second interface (the `nic1`) of a VM-series firewall. The primary interface is by default not used for management.

When troubleshooting you can use this module also with a good ol' Linux image. Instead of booting PAN-OS, you can just re-create the same instance with Linux. It boots faster, it's probably more familiar, but there is a caveat when connecting from outside the GCP VPC Network:

- One cannot connect to `nic1` of Linux, because GCP DHCP doesn't ever furnish it with a default route. Connect to the primary interface (the `nic0`) for both data traffic and management traffic.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/vmseries) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/vmseries)

## Reference

### Requirements

- `terraform`, version: >= 1.3, < 2.0
- `google`, version: >= 4.54
- `null`, version: ~> 3.1

### Providers

- `google`, version: >= 4.54
- `null`, version: ~> 3.1



### Resources

- `compute_address` (managed)
- `compute_address` (managed)
- `compute_address` (managed)
- `compute_address` (managed)
- `compute_instance` (managed)
- `compute_instance_group` (managed)
- `resource` (managed)
- `compute_image` (data)
- `compute_subnetwork` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | Name of the VM-Series instance.
[`zone`](#zone) | `string` | Zone to deploy instance in.
[`network_interfaces`](#network_interfaces) | `list` | List of the network interface specifications.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`project`](#project) | `string` | .
[`bootstrap_options`](#bootstrap_options) | `map` | VM-Series bootstrap options to pass using instance metadata.
[`ssh_keys`](#ssh_keys) | `string` | Public keys to allow SSH access for, separated by newlines.
[`metadata`](#metadata) | `map` | Other, not VM-Series specific, metadata to set for an instance.
[`metadata_startup_script`](#metadata_startup_script) | `string` | See the [Terraform manual](https://www.
[`create_instance_group`](#create_instance_group) | `bool` | Create an instance group, that can be used in a load balancer setup.
[`named_ports`](#named_ports) | `list` | The list of named ports to create in the instance group:

```
named_ports = [
  {
    name = "http"
    port = "80"
  },
  {
    name = "app42"
    port = "4242"
  },
]
```

The name identifies the backend port to receive the traffic from the global load balancers.
[`service_account`](#service_account) | `string` | IAM Service Account for running firewall instance (just the email).
[`scopes`](#scopes) | `list` | .
[`vmseries_image`](#vmseries_image) | `string` |   The image name from which to boot an instance, including a license type (bundle/flex) and version.
[`custom_image`](#custom_image) | `string` |   The full URI of GCE image resource, as returned in the output of a following command:
  `gcloud compute images list --filter="<filter>" --project <project>  --no-standard-images --uri`
  Overrides official image specified using `vmseries_image`.
[`machine_type`](#machine_type) | `string` | Firewall instance machine type, which depends on the license used.
[`min_cpu_platform`](#min_cpu_platform) | `string` | Minimum CPU platform for the compute instance.
[`deletion_protection`](#deletion_protection) | `bool` | Enable deletion protection on the instance.
[`disk_type`](#disk_type) | `string` | Boot disk type.
[`labels`](#labels) | `map` | GCP instance lables.
[`tags`](#tags) | `list` | GCP instance tags.
[`resource_policies`](#resource_policies) | `list` | .
[`dependencies`](#dependencies) | `list` | .

### Outputs

Name |  Description
--- | ---
`instance` | 
`self_link` | 
`instance_group` | 
`instance_group_self_link` | 
`private_ips` | 
`ipv6_private_ips` | 
`public_ips` | 
`ipv6_public_ips` | 

### Required Inputs details

#### name

Name of the VM-Series instance.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### zone

Zone to deploy instance in.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### network_interfaces

List of the network interface specifications.
Available options:
- `subnetwork`                  - (Required|string) Self-link of a subnetwork to create interface in.
- `stack_type`                  - (Optional|string) IP stack to use: IPV4_ONLY (default) or IPV4_IPV6.
- `private_ip_name`             - (Optional|string) Name for a private IPv4 address to reserve.
- `private_ip`                  - (Optional|string) Private IPv4 address to reserve.
- `create_public_ip`            - (Optional|boolean) Whether to reserve public IPv4 address for the interface. Ignored if `public_ip` is provided. Defaults to 'false'.
- `public_ip_name`              - (Optional|string) Name for a public IPv4 address to reserve.
- `public_ip`                   - (Optional|string) Existing public IPv4 address to use.
- `public_ptr_domain_name`      - (Optional|string) Existing public IPv4 address PTR name to use.
- `alias_ip_ranges`             - (Optional|list) List of objects that define additional IP ranges for an interface, as specified [here](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance#ip_cidr_range)
- `create_public_ipv6`          - (Optional|boolean) Whether to reserve public IPv6 address for the interface. Ignored if `public_ipv6` is provided. Defaults to 'false'.
- `private_ipv6_name`           - (Optional|string) Name for a private IPv6 address to reserve. Is relevant when a VPC has IPv6 ULA range.
- `create_private_ipv6`         - (Optional|boolean) Whether to reserve private IPv6 address for the interface. Is relevant when a VPC has IPv6 ULA range. If 'false' an ephemeral IPv6 address is assigned to the interface. Default is 'true'.
- `public_ipv6_name`            - (Optional|string) Name for a public IPv6 address to reserve.
- `public_ipv6`                 - (Optional|string) Existing public IPv6 address to use. Specify address with a netmask, for example: 2600:1900:4020:bd2:8000:1::/96.
- `public_ipv6_ptr_domain_name` - (Optional|string) Existing public IPv6 address PTR name to use.


Type: list(any)

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### project



Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### bootstrap_options

VM-Series bootstrap options to pass using instance metadata.

Proper syntax is a map, where keys are the bootstrap parameters.
Example:
  bootstrap_options = {
    type            = dhcp-client
    panorama-server = 1.2.3.4
  }

A list of available parameters: type, ip-address, default-gateway, netmask, ipv6-address, ipv6-default-gateway, hostname, panorama-server, panorama-server-2, tplname, dgname, dns-primary, dns-secondary, vm-auth-key, op-command-modes, op-cmd-dpdk-pkt-io, plugin-op-commands, dhcp-send-hostname, dhcp-send-client-id, dhcp-accept-server-hostname, dhcp-accept-server-domain, vm-series-auto-registration-pin-id, vm-series-auto-registration-pin-value, auth-key, authcodes, vmseries-bootstrap-gce-storagebucket, mgmt-interface-swap.

For more details on the options please refer to [VM-Series documentation](https://docs.paloaltonetworks.com/vm-series/10-2/vm-series-deployment/bootstrap-the-vm-series-firewall/create-the-init-cfgtxt-file/init-cfgtxt-file-components).


Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### ssh_keys

Public keys to allow SSH access for, separated by newlines.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### metadata

Other, not VM-Series specific, metadata to set for an instance.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### metadata_startup_script

See the [Terraform manual](https://www.terraform.io/docs/providers/google/r/compute_instance.html)

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### create_instance_group

Create an instance group, that can be used in a load balancer setup.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### named_ports

The list of named ports to create in the instance group:

```
named_ports = [
  {
    name = "http"
    port = "80"
  },
  {
    name = "app42"
    port = "4242"
  },
]
```

The name identifies the backend port to receive the traffic from the global load balancers.
Practically, tcp port 80 named "http" works even when not defined here, but it's not a documented provider's behavior.


Type: list

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### service_account

IAM Service Account for running firewall instance (just the email)

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### scopes



Type: list(string)

Default value: `[https://www.googleapis.com/auth/compute.readonly https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read_only https://www.googleapis.com/auth/logging.write https://www.googleapis.com/auth/monitoring.write]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### vmseries_image

  The image name from which to boot an instance, including a license type (bundle/flex) and version.
  To get a list of available official images, please run the following command:
  `gcloud compute images list --filter="family ~ vmseries" --project paloaltonetworksgcp-public --no-standard-images`


Type: string

Default value: `vmseries-flex-byol-10210h9`

<sup>[back to list](#modules-optional-inputs)</sup>

#### custom_image

  The full URI of GCE image resource, as returned in the output of a following command:
  `gcloud compute images list --filter="<filter>" --project <project>  --no-standard-images --uri`
  Overrides official image specified using `vmseries_image`."


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### machine_type

Firewall instance machine type, which depends on the license used. See the [Terraform manual](https://www.terraform.io/docs/providers/google/r/compute_instance.html)

Type: string

Default value: `n2-standard-4`

<sup>[back to list](#modules-optional-inputs)</sup>

#### min_cpu_platform

Minimum CPU platform for the compute instance. Up to date version can be found [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).

Type: string

Default value: `Intel Cascade Lake`

<sup>[back to list](#modules-optional-inputs)</sup>

#### deletion_protection

Enable deletion protection on the instance.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### disk_type

Boot disk type. See [provider documentation](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance#type) for available values.

Type: string

Default value: `pd-standard`

<sup>[back to list](#modules-optional-inputs)</sup>

#### labels

GCP instance lables.

Type: map(any)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### tags

GCP instance tags.

Type: list(string)

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### resource_policies



Type: list(string)

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### dependencies



Type: list(string)

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>