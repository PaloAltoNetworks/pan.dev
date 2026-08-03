---
hide_title: true
id: lb_internal
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
sidebar_label: LB Internal
title: Internally-Facing Regional TCP/UDP Load Balancer on GCP
---

# Internally-Facing Regional TCP/UDP Load Balancer on GCP

This module creates an Internal Regional Passthrough Network Load Balancer that can be used to distribute outgoing traffic across VM-Series firewalls.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/lb_internal) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/lb_internal)

## Limitations

### Supported Module Version with Regards to the Changed Provider's Default Values

- Module versions `<=2.0.6` support `terraform-provider-google` versions `<6.0`. If you are using `terraform-provider-google` version `6.0` and above choose module version `2.0.7` and above. This limitation is related to the [change](https://github.com/hashicorp/terraform-provider-google/commit/267f964bd4f2d9b48e8771c2a8397de3f6655ef7) in the default value of `balancing_mode` introduced in the `terraform-provider-google` version `6.0`

## Reference

### Requirements

- `terraform`, version: >= 1.3, < 2.0
- `google`, version: >= 4.54

### Providers

- `google-beta`
- `google`, version: >= 4.54



### Resources

- `google_compute_region_backend_service` (managed)
- `compute_forwarding_rule` (managed)
- `compute_health_check` (managed)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | Name of the load balancer (that is, both the forwarding rule and the backend service).
[`backends`](#backends) | `map` | Names of primary backend groups (IGs or IGMs).
[`subnetwork`](#subnetwork) | `string` | .

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`project`](#project) | `string` | The project to deploy to.
[`region`](#region) | `string` | Region to create ILB in.
[`health_check_port`](#health_check_port) | `number` | (Optional) Port number for TCP healthchecking, default 22.
[`health_check`](#health_check) | `string` | (Optional) Name of either the global google_compute_health_check or google_compute_region_health_check to use.
[`failover_backends`](#failover_backends) | `map` | (Optional) Names of failover backend groups (IGs or IGMs).
[`ip_version`](#ip_version) | `string` | (Optional) The IP version that will be used by this Load Balancer.
[`ip_address`](#ip_address) | `string` | (Optional) An existing private IP address on which LB listens.
[`ip_protocol`](#ip_protocol) | `string` | The IP protocol for the frontend forwarding rule, valid values are TCP and UDP.
[`all_ports`](#all_ports) | `bool` | Forward all ports of the ip_protocol from the frontend to the backends.
[`ports`](#ports) | `list` | Which port numbers are forwarded to the backends (up to 5 ports).
[`network`](#network) | `any` | .
[`session_affinity`](#session_affinity) | `string` | Controls distribution of new connections (or fragmented UDP packets) from clients to the backends, can influence available connection tracking configurations.
[`connection_tracking_policy`](#connection_tracking_policy) | `map` | Connection tracking policy settings.
[`timeout_sec`](#timeout_sec) | `number` | (Optional) How many seconds to wait for the backend before dropping the connection.
[`disable_connection_drain_on_failover`](#disable_connection_drain_on_failover) | `bool` | (Optional) On failover or failback, this field indicates whether connection drain will be honored.
[`drop_traffic_if_unhealthy`](#drop_traffic_if_unhealthy) | `bool` | (Optional) Used only when no healthy VMs are detected in the primary and backup instance groups.
[`failover_ratio`](#failover_ratio) | `number` | (Optional) The value of the field must be in [0, 1].
[`allow_global_access`](#allow_global_access) | `bool` | (Optional) If true, clients can access ILB from all regions.
[`connection_draining_timeout_sec`](#connection_draining_timeout_sec) | `number` | (Optional) Time for which instance will be drained (not accept new connections, but still work to finish started).

### Outputs

Name |  Description
--- | ---
`forwarding_rule` | 
`address` | 

### Required Inputs details

#### name

Name of the load balancer (that is, both the forwarding rule and the backend service)

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### backends

Names of primary backend groups (IGs or IGMs). Typically use `module.vmseries.instance_group_self_links` here.

Type: map(string)

<sup>[back to list](#modules-required-inputs)</sup>

#### subnetwork



Type: string

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### project

The project to deploy to. If unset the default provider project is used.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### region

Region to create ILB in.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_check_port

(Optional) Port number for TCP healthchecking, default 22. This setting is ignored when `health_check` is provided.

Type: number

Default value: `22`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_check

(Optional) Name of either the global google_compute_health_check or google_compute_region_health_check to use. Conflicts with health_check_port.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### failover_backends

(Optional) Names of failover backend groups (IGs or IGMs). Failover groups are ignored unless the primary groups do not meet collective health threshold.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### ip_version

(Optional) The IP version that will be used by this Load Balancer. Possible values are: IPV4 (default), IPV6.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### ip_address

(Optional) An existing private IP address on which LB listens. IP version must correspond `ip_version`.
In case of IPv6 address specify address with a netmask, for example: fd20:6db:d1b6:1000:0:1::/96.
If empty, a new ephemeral IP address is created on the PREMIUM tier.


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### ip_protocol

The IP protocol for the frontend forwarding rule, valid values are TCP and UDP.

Type: string

Default value: `TCP`

<sup>[back to list](#modules-optional-inputs)</sup>

#### all_ports

Forward all ports of the ip_protocol from the frontend to the backends. Needs to be null if `ports` are provided.

Type: bool

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### ports

Which port numbers are forwarded to the backends (up to 5 ports). Conflicts with all_ports.

Type: list(number)

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### network



Type: any

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### session_affinity

Controls distribution of new connections (or fragmented UDP packets) from clients to the backends, can influence available connection tracking configurations.
Valid values are: NONE (default), CLIENT_IP_NO_DESTINATION, CLIENT_IP, CLIENT_IP_PROTO, CLIENT_IP_PORT_PROTO.


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### connection_tracking_policy

Connection tracking policy settings. Following options are available:
- `mode`                              - (Optional|string) `PER_CONNECTION` (default) or `PER_SESSION`
- `idle_timeout_sec`                  - (Optional|number) Defaults to 600 seconds, can only be modified in specific conditions (see link below)
- `persistence_on_unhealthy_backends` - (Optional|string) `DEFAULT_FOR_PROTOCOL` (default), `ALWAYS_PERSIST` or `NEVER_PERSIST`

More information about supported configurations in conjunction with `session_affinity` is available in [Internal TCP/UDP Load Balancing](https://cloud.google.com/load-balancing/docs/internal#connection-tracking) documentation.


Type: map(any)

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### timeout_sec

(Optional) How many seconds to wait for the backend before dropping the connection. Default is 30 seconds. Valid range is [1, 86400].

Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### disable_connection_drain_on_failover

(Optional) On failover or failback, this field indicates whether connection drain will be honored. Setting this to true has the following effect: connections to the old active pool are not drained. Connections to the new active pool use the timeout of 10 min (currently fixed). Setting to false has the following effect: both old and new connections will have a drain timeout of 10 min. This can be set to true only if the protocol is TCP. The default is false.

Type: bool

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### drop_traffic_if_unhealthy

(Optional) Used only when no healthy VMs are detected in the primary and backup instance groups. When set to true, traffic is dropped. When set to false, new connections are sent across all VMs in the primary group. The default is false.

Type: bool

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### failover_ratio

(Optional) The value of the field must be in [0, 1]. If the ratio of the healthy VMs in the primary backend is at or below this number, traffic arriving at the load-balanced IP will be directed to the failover_backends. In case where 'failoverRatio' is not set or all the VMs in the backup backend are unhealthy, the traffic will be directed back to the primary backend in the `force` mode, where traffic will be spread to the healthy VMs with the best effort, or to all VMs when no VM is healthy. This field is only used with l4 load balancing.

Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### allow_global_access

(Optional) If true, clients can access ILB from all regions. By default false, only allow from the ILB's local region; useful if the ILB is a next hop of a route.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### connection_draining_timeout_sec

(Optional) Time for which instance will be drained (not accept new connections, but still work to finish started).

Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>