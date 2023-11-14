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
- gcp
pagination_next: null
pagination_prev: null
sidebar_label: LB Internal
title: Internally-Facing Regional TCP/UDP Load Balancer on GCP
---

# Internally-Facing Regional TCP/UDP Load Balancer on GCP

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-vmseries-modules/tree/main/modules/lb_internal) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/google/latest/submodules/lb_internal)

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.2, < 2.0 |
| <a name="requirement_google"></a> [google](#requirement\_google) | ~> 4.54 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_google"></a> [google](#provider\_google) | ~> 4.54 |
| <a name="provider_google-beta"></a> [google-beta](#provider\_google-beta) | n/a |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [google-beta_google_compute_region_backend_service.this](https://registry.terraform.io/providers/hashicorp/google-beta/latest/docs/resources/google_compute_region_backend_service) | resource |
| [google_compute_forwarding_rule.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_forwarding_rule) | resource |
| [google_compute_health_check.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_health_check) | resource |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_all_ports"></a> [all\_ports](#input\_all\_ports) | Forward all ports of the ip\_protocol from the frontend to the backends. Needs to be null if `ports` are provided. | `bool` | `null` | no |
| <a name="input_allow_global_access"></a> [allow\_global\_access](#input\_allow\_global\_access) | (Optional) If true, clients can access ILB from all regions. By default false, only allow from the ILB's local region; useful if the ILB is a next hop of a route. | `bool` | `false` | no |
| <a name="input_backends"></a> [backends](#input\_backends) | Names of primary backend groups (IGs or IGMs). Typically use `module.vmseries.instance_group_self_links` here. | `map(string)` | n/a | yes |
| <a name="input_connection_draining_timeout_sec"></a> [connection\_draining\_timeout\_sec](#input\_connection\_draining\_timeout\_sec) | (Optional) Time for which instance will be drained (not accept new connections, but still work to finish started). | `number` | `null` | no |
| <a name="input_connection_tracking_policy"></a> [connection\_tracking\_policy](#input\_connection\_tracking\_policy) | Connection tracking policy settings. Following options are available:<br />- `mode`                              - (Optional\|string) `PER_CONNECTION` (default) or `PER_SESSION`<br />- `idle_timeout_sec`                  - (Optional\|number) Defaults to 600 seconds, can only be modified in specific conditions (see link below)<br />- `persistence_on_unhealthy_backends` - (Optional\|string) `DEFAULT_FOR_PROTOCOL` (default), `ALWAYS_PERSIST` or `NEVER_PERSIST`<br /><br />More information about supported configurations in conjunction with `session_affinity` is available in [Internal TCP/UDP Load Balancing](https://cloud.google.com/load-balancing/docs/internal#connection-tracking) documentation. | `map(any)` | `null` | no |
| <a name="input_disable_connection_drain_on_failover"></a> [disable\_connection\_drain\_on\_failover](#input\_disable\_connection\_drain\_on\_failover) | (Optional) On failover or failback, this field indicates whether connection drain will be honored. Setting this to true has the following effect: connections to the old active pool are not drained. Connections to the new active pool use the timeout of 10 min (currently fixed). Setting to false has the following effect: both old and new connections will have a drain timeout of 10 min. This can be set to true only if the protocol is TCP. The default is false. | `bool` | `null` | no |
| <a name="input_drop_traffic_if_unhealthy"></a> [drop\_traffic\_if\_unhealthy](#input\_drop\_traffic\_if\_unhealthy) | (Optional) Used only when no healthy VMs are detected in the primary and backup instance groups. When set to true, traffic is dropped. When set to false, new connections are sent across all VMs in the primary group. The default is false. | `bool` | `null` | no |
| <a name="input_failover_backends"></a> [failover\_backends](#input\_failover\_backends) | (Optional) Names of failover backend groups (IGs or IGMs). Failover groups are ignored unless the primary groups do not meet collective health threshold. | `map(string)` | `{}` | no |
| <a name="input_failover_ratio"></a> [failover\_ratio](#input\_failover\_ratio) | (Optional) The value of the field must be in [0, 1]. If the ratio of the healthy VMs in the primary backend is at or below this number, traffic arriving at the load-balanced IP will be directed to the failover\_backends. In case where 'failoverRatio' is not set or all the VMs in the backup backend are unhealthy, the traffic will be directed back to the primary backend in the `force` mode, where traffic will be spread to the healthy VMs with the best effort, or to all VMs when no VM is healthy. This field is only used with l4 load balancing. | `number` | `null` | no |
| <a name="input_health_check"></a> [health\_check](#input\_health\_check) | (Optional) Name of either the global google\_compute\_health\_check or google\_compute\_region\_health\_check to use. Conflicts with health\_check\_port. | `string` | `null` | no |
| <a name="input_health_check_port"></a> [health\_check\_port](#input\_health\_check\_port) | (Optional) Port number for TCP healthchecking, default 22. This setting is ignored when `health_check` is provided. | `number` | `22` | no |
| <a name="input_ip_address"></a> [ip\_address](#input\_ip\_address) | n/a | `any` | `null` | no |
| <a name="input_ip_protocol"></a> [ip\_protocol](#input\_ip\_protocol) | The IP protocol for the frontend forwarding rule, valid values are TCP and UDP. | `string` | `"TCP"` | no |
| <a name="input_name"></a> [name](#input\_name) | Name of the load balancer (that is, both the forwarding rule and the backend service) | `string` | n/a | yes |
| <a name="input_network"></a> [network](#input\_network) | n/a | `any` | `null` | no |
| <a name="input_ports"></a> [ports](#input\_ports) | Which port numbers are forwarded to the backends (up to 5 ports). Conflicts with all\_ports. | `list(number)` | `[]` | no |
| <a name="input_project"></a> [project](#input\_project) | The project to deploy to. If unset the default provider project is used. | `string` | `null` | no |
| <a name="input_region"></a> [region](#input\_region) | Region to create ILB in. | `string` | `null` | no |
| <a name="input_session_affinity"></a> [session\_affinity](#input\_session\_affinity) | Controls distribution of new connections (or fragmented UDP packets) from clients to the backends, can influence available connection tracking configurations.<br />Valid values are: NONE (default), CLIENT\_IP\_NO\_DESTINATION, CLIENT\_IP, CLIENT\_IP\_PROTO, CLIENT\_IP\_PORT\_PROTO. | `string` | `null` | no |
| <a name="input_subnetwork"></a> [subnetwork](#input\_subnetwork) | n/a | `string` | n/a | yes |
| <a name="input_timeout_sec"></a> [timeout\_sec](#input\_timeout\_sec) | (Optional) How many seconds to wait for the backend before dropping the connection. Default is 30 seconds. Valid range is [1, 86400]. | `number` | `null` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_address"></a> [address](#output\_address) | n/a |
| <a name="output_forwarding_rule"></a> [forwarding\_rule](#output\_forwarding\_rule) | n/a |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->