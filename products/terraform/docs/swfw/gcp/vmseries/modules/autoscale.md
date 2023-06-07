---
hide_title: true
id: autoscale
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
sidebar_label: Autoscale
title: Auto-Scaling for Palo Alto Networks VM-Series
---

# Auto-Scaling for Palo Alto Networks VM-Series

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
| <a name="provider_random"></a> [random](#provider\_random) | n/a |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [google_compute_autoscaler.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_autoscaler) | resource |
| [google_compute_instance_group_manager.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance_group_manager) | resource |
| [google_compute_instance_template.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance_template) | resource |
| [google_pubsub_subscription.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/pubsub_subscription) | resource |
| [google_pubsub_subscription_iam_member.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/pubsub_subscription_iam_member) | resource |
| [google_pubsub_topic.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/pubsub_topic) | resource |
| [random_id.autoscaler](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/id) | resource |
| [google_compute_default_service_account.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_default_service_account) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_autoscaler_metrics"></a> [autoscaler\_metrics](#input\_autoscaler\_metrics) | The map with the keys being metrics identifiers (e.g. custom.googleapis.com/VMSeries/panSessionUtilization).<br />Each of the contained objects has attribute `target` which is a numerical threshold for a scale-out or a scale-in.<br />Each zonal group grows until it satisfies all the targets.<br /><br />Additional optional attribute `type` defines the metric as either `GAUGE` (the default), `DELTA_PER_SECOND`, or `DELTA_PER_MINUTE`.<br />For full specification, see the `metric` inside the [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_autoscaler). | `map` | <pre>{<br />  "custom.googleapis.com/VMSeries/panSessionThroughputKbps": {<br />    "target": 700000<br />  },<br />  "custom.googleapis.com/VMSeries/panSessionUtilization": {<br />    "target": 70<br />  }<br />}</pre> | no |
| <a name="input_cooldown_period"></a> [cooldown\_period](#input\_cooldown\_period) | How much tame does it take for a spawned PA-VM to become functional on the initialization boot | `number` | `480` | no |
| <a name="input_deployment_name"></a> [deployment\_name](#input\_deployment\_name) | Deployment Name that matches what is specified in Panorama GCP Plugin | `string` | n/a | yes |
| <a name="input_disk_type"></a> [disk\_type](#input\_disk\_type) | n/a | `string` | `"pd-ssd"` | no |
| <a name="input_image"></a> [image](#input\_image) | Link to VM-Series PAN-OS image. Can be either a full self\_link, or one of the shortened forms per the [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance#image). | `string` | `"https://www.googleapis.com/compute/v1/projects/paloaltonetworksgcp-public/global/images/vmseries-byol-912"` | no |
| <a name="input_machine_type"></a> [machine\_type](#input\_machine\_type) | GCP instance type to use. | `string` | `"n1-standard-4"` | no |
| <a name="input_max_replicas_per_zone"></a> [max\_replicas\_per\_zone](#input\_max\_replicas\_per\_zone) | Maximum number of VM-series instances per *each* of the zones | `number` | `1` | no |
| <a name="input_metadata"></a> [metadata](#input\_metadata) | Metadata for VM-Series firewall.  Commented examples below show two examples: 1. partial bootstrap to Panorama 2. Full configuration bootstrap from Google storage bucket. | `map(string)` | `{}` | no |
| <a name="input_min_cpu_platform"></a> [min\_cpu\_platform](#input\_min\_cpu\_platform) | n/a | `string` | `"Intel Broadwell"` | no |
| <a name="input_min_replicas_per_zone"></a> [min\_replicas\_per\_zone](#input\_min\_replicas\_per\_zone) | Minimum number of VM-series instances per *each* of the zones | `number` | `1` | no |
| <a name="input_named_ports"></a> [named\_ports](#input\_named\_ports) | (Optional) The list of named ports:<pre>named\_ports = [<br />  {<br />    name = "http"<br />    port = "80"<br />  },<br />  {<br />    name = "app42"<br />    port = "4242"<br />  },<br />]</pre>The name identifies the backend port to receive the traffic from the global load balancers. | `list` | `[]` | no |
| <a name="input_network_interfaces"></a> [network\_interfaces](#input\_network\_interfaces) | List of the network interface specifications.<br />Available options:<br />- `subnetwork`             - (Required\|string) Self-link of a subnetwork to create interface in.<br />- `create_public_ip`       - (Optional\|boolean) Whether to reserve public IP for the interface. Ignored if `public_ip` is provided. Defaults to 'false'. | `list(any)` | n/a | yes |
| <a name="input_pool"></a> [pool](#input\_pool) | The self\_link of google\_compute\_target\_pool where the auto-created instances will be placed for healtchecking of External Load Balancer | `string` | `null` | no |
| <a name="input_prefix"></a> [prefix](#input\_prefix) | Prefix to various GCP resource names | `string` | n/a | yes |
| <a name="input_region"></a> [region](#input\_region) | The Google Cloud region for the resources.  If null is provided, provider region will be used. | `string` | `null` | no |
| <a name="input_scale_in_control_replicas_fixed"></a> [scale\_in\_control\_replicas\_fixed](#input\_scale\_in\_control\_replicas\_fixed) | Fixed number of VM instances that can be killed in each zone within the scale-in time window.<br />See `scale_in_control` in the [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_autoscaler). | `number` | `1` | no |
| <a name="input_scale_in_control_time_window_sec"></a> [scale\_in\_control\_time\_window\_sec](#input\_scale\_in\_control\_time\_window\_sec) | How many seconds autoscaling should look into the past when scaling in (down).<br />Default 30 minutes corresponds to the default custom metrics period of 5 minutes<br />and also to the considerable init time of a fresh instance. | `number` | `1800` | no |
| <a name="input_scopes"></a> [scopes](#input\_scopes) | n/a | `list(string)` | <pre>[<br />  "https://www.googleapis.com/auth/compute.readonly",<br />  "https://www.googleapis.com/auth/cloud.useraccounts.readonly",<br />  "https://www.googleapis.com/auth/devstorage.read\_only",<br />  "https://www.googleapis.com/auth/logging.write",<br />  "https://www.googleapis.com/auth/monitoring.write"<br />]</pre> | no |
| <a name="input_service_account_email"></a> [service\_account\_email](#input\_service\_account\_email) | IAM Service Account for running firewall instance (just the email) | `string` | `null` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | n/a | `list(string)` | `[]` | no |
| <a name="input_update_policy_type"></a> [update\_policy\_type](#input\_update\_policy\_type) | What to do when the underlying template changes (e.g. PAN-OS upgrade).<br />OPPORTUNISTIC is the only recommended value. Also PROACTIVE is allowed: it immediately<br />starts to re-create/delete instances and since this is not coordinated with<br />the instance group manager in other zone, it can easily lead to total outage.<br />It is thus feasible only in dev environments. Real environments should<br />perform a "Rolling Update" in GCP web interface. | `string` | `"OPPORTUNISTIC"` | no |
| <a name="input_zones"></a> [zones](#input\_zones) | Map of zone names for the zonal IGMs | `map(string)` | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_backends"></a> [backends](#output\_backends) | Map of instance group (IG) identifiers, suitable for use in module lb\_internal as input `backends`. |
| <a name="output_instance_group_manager"></a> [instance\_group\_manager](#output\_instance\_group\_manager) | n/a |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->