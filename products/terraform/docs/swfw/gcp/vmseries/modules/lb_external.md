---
hide_title: true
id: lb_external
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
sidebar_label: LB External
title: Externally-Facing Regional TCP/UDP Network Load Balancer on GCP
---

# Externally-Facing Regional TCP/UDP Network Load Balancer on GCP

- A regional LB, which is faster than a global one.
- IPv4 only, a limitation imposed by GCP.
- Perhaps unexpectedly, the External TCP/UDP NLB has additional limitations imposed by GCP when comparing to the Internal TCP/UDP NLB, namely:

  - Despite it works for any TCP traffic (also UDP and other protocols), it can only use a plain HTTP health check. So, HTTPS or SSH probes are *not* possible.
  - Can only use the nic0 (the base interface) of an instance.
  - Cannot serve as a next hop in a GCP custom routing table entry.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/lb_external) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/lb_external)

## Limitation

### Supported Module Version with Regards to the Changed Provider's Default Values

- Module versions `<=2.0.6` supports `terraform-provider-google` version `<6.0`. If you are using `terraform-provider-google` version `6.0` and above choose module version `2.0.7` and above. This limitation is related to the [change](https://github.com/hashicorp/terraform-provider-google/commit/267f964bd4f2d9b48e8771c2a8397de3f6655ef7) in the default value of `balancing_mode` introduced in the `terraform-provider-google` version `6.0`

## Reference

### Requirements

- `terraform`, version: >= 1.3, < 2.0
- `google`, version: >= 4.54

### Providers

- `google`, version: >= 4.54
- `google-beta`



### Resources

- `google_compute_region_backend_service` (managed)
- `compute_address` (managed)
- `compute_forwarding_rule` (managed)
- `compute_http_health_check` (managed)
- `compute_region_health_check` (managed)
- `compute_target_pool` (managed)
- `client_config` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | Name of the backend_service, target_pool and of the associated health check.
[`rules`](#rules) | `any` | Map of objects, the keys are names of the external forwarding rules, each of the objects has the following attributes:

- `port_range` : (Required) The port your service is listening on.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`project`](#project) | `string` | The project to deploy to.
[`region`](#region) | `string` | GCP region to deploy to.
[`subnetwork`](#subnetwork) | `string` | Subnetwork for an IPv6 address creation.
[`instances`](#instances) | `list` | List of links to the instances.
[`backend_instance_groups`](#backend_instance_groups) | `list` | List of backend instance groups.
[`session_affinity`](#session_affinity) | `string` | Controls distribution of new connections (or fragmented UDP packets) from clients to the backends, can influence available connection tracking configurations.
[`connection_tracking_policy`](#connection_tracking_policy) | `map` | Connection tracking policy settings, only available for backend service based rules.
[`network_tier`](#network_tier) | `string` | The networking tier used for configuring this address.
[`create_health_check`](#create_health_check) | `bool` | Whether to create a health check on the target pool.
[`health_check_interval_sec`](#health_check_interval_sec) | `number` | Health check parameter, see [provider doc](https://registry.
[`health_check_healthy_threshold`](#health_check_healthy_threshold) | `number` | Health check parameter, see [provider doc](https://registry.
[`health_check_timeout_sec`](#health_check_timeout_sec) | `number` | Health check parameter, see [provider doc](https://registry.
[`health_check_unhealthy_threshold`](#health_check_unhealthy_threshold) | `number` | Health check parameter, see [provider doc](https://registry.
[`health_check_http_port`](#health_check_http_port) | `number` | Health check parameter, see [provider doc](https://registry.
[`health_check_http_request_path`](#health_check_http_request_path) | `string` | Health check http request path, with the default adjusted to /php/login.
[`health_check_http_host`](#health_check_http_host) | `string` | Health check http request host header, with the default adjusted to localhost to be able to check the health of the PAN-OS webui.

### Outputs

Name |  Description
--- | ---
`forwarding_rules` | The map of created forwarding rules.
`ip_addresses` | The map of IP addresses of the forwarding rules.
`target_pool` | The self-link of the target pool.
`created_google_compute_http_health_check` | The created health check resource. Null if `create_health_check` option was false.
`created_google_compute_region_health_check` | The created health check resource. Null if `create_health_check` option was false.

### Required Inputs details

#### name

Name of the backend_service, target_pool and of the associated health check.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### rules

Map of objects, the keys are names of the external forwarding rules, each of the objects has the following attributes:

- `port_range` : (Required) The port your service is listening on. Can be a number (80) or a range (8080-8089, or even 1-65535).
- `ip_version` : (Optional) The IP version that will be used by this Load Balancer rule. Possible values are: IPV4 (default), IPV6.
- `ip_address` : (Optional) An existing public IP address on which to listen, must be in the same region as the LB. IP version must correspond `ip_version`. 
                 In case of IPv6 address specify address with a netmask, for example: 2600:1900:4020:bd2:8000:1::/96.
                 If empty, a new non-ephemeral IP address is created on the tier specified by `network_tier`.
- `ip_protocol`: (Optional) The IP protocol for the frontend forwarding rule: TCP, UDP, ESP, ICMP, or L3_DEFAULT. Default is TCP.
- `all_ports`  : (Optional) Allows all ports to be forwarded to the Backend Service.



Type: any

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### project

The project to deploy to. If unset the default provider project is used.

Type: string

Default value: ``

<sup>[back to list](#modules-optional-inputs)</sup>

#### region

GCP region to deploy to. If unset the default provider region is used.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### subnetwork

Subnetwork for an IPv6 address creation. Required only for IPv6 load balancer rules.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### instances

List of links to the instances. Expected to be empty when using an autoscaler, as the autoscaler inserts entries to the target pool dynamically. The nic0 of each instance gets the traffic. Even when this list is shifted or re-ordered, it doesn't re-create any resources and such modifications often proceed without any noticeable downtime.

Type: list(string)

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### backend_instance_groups

List of backend instance groups

Type: list

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### session_affinity

Controls distribution of new connections (or fragmented UDP packets) from clients to the backends, can influence available connection tracking configurations.
Valid values are: NONE (default), CLIENT_IP, CLIENT_IP_PROTO, CLIENT_IP_PORT_PROTO (only available for backend service based rules).


Type: string

Default value: `NONE`

<sup>[back to list](#modules-optional-inputs)</sup>

#### connection_tracking_policy

Connection tracking policy settings, only available for backend service based rules. Following options are available:
- `mode`                              - (Optional|string) `PER_CONNECTION` (default) or `PER_SESSION`
- `persistence_on_unhealthy_backends` - (Optional|string) `DEFAULT_FOR_PROTOCOL` (default), `ALWAYS_PERSIST` or `NEVER_PERSIST`

More information about supported configurations in conjunction with `session_affinity` is available in [Backend service-based external Network Load Balancing](https://cloud.google.com/load-balancing/docs/network/networklb-backend-service#connection-tracking) documentation.


Type: map(any)

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### network_tier

The networking tier used for configuring this address. If this field is not specified, it is assumed to be PREMIUM. Possible values are PREMIUM and STANDARD.

Type: string

Default value: `PREMIUM`

<sup>[back to list](#modules-optional-inputs)</sup>

#### create_health_check

Whether to create a health check on the target pool.

Type: bool

Default value: `true`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_check_interval_sec

Health check parameter, see [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_http_health_check)

Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_check_healthy_threshold

Health check parameter, see [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_http_health_check)

Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_check_timeout_sec

Health check parameter, see [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_http_health_check)

Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_check_unhealthy_threshold

Health check parameter, see [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_http_health_check)

Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_check_http_port

Health check parameter, see [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_http_health_check)

Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_check_http_request_path

Health check http request path, with the default adjusted to /php/login.php to be able to check the health of the PAN-OS webui.

Type: string

Default value: `/php/login.php`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_check_http_host

Health check http request host header, with the default adjusted to localhost to be able to check the health of the PAN-OS webui.

Type: string

Default value: `localhost`

<sup>[back to list](#modules-optional-inputs)</sup>