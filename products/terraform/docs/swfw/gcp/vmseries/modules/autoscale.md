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
- swfw
- software-firewalls
- gcp
pagination_next: null
pagination_prev: null
sidebar_label: Autoscale
title: Auto-Scaling for Palo Alto Networks VM-Series
---

# Auto-Scaling for Palo Alto Networks VM-Series

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/autoscale) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/autoscale)

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.3, < 2.0 |
| <a name="requirement_google"></a> [google](#requirement\_google) | ~> 4.54 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_archive"></a> [archive](#provider\_archive) | n/a |
| <a name="provider_google"></a> [google](#provider\_google) | ~> 4.54 |
| <a name="provider_random"></a> [random](#provider\_random) | n/a |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [google_cloudfunctions2_function.delicensing_cfn](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloudfunctions2_function) | resource |
| [google_compute_autoscaler.zonal](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_autoscaler) | resource |
| [google_compute_instance_group_manager.zonal](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance_group_manager) | resource |
| [google_compute_instance_template.main](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance_template) | resource |
| [google_compute_region_autoscaler.regional](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_region_autoscaler) | resource |
| [google_compute_region_instance_group_manager.regional](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_region_instance_group_manager) | resource |
| [google_logging_project_sink.delicensing_cfn](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/logging_project_sink) | resource |
| [google_project_iam_member.delicensing_cfn](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/project_iam_member) | resource |
| [google_project_iam_member.delicensing_cfn_invoker](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/project_iam_member) | resource |
| [google_pubsub_subscription.main](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/pubsub_subscription) | resource |
| [google_pubsub_subscription_iam_member.main](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/pubsub_subscription_iam_member) | resource |
| [google_pubsub_topic.delicensing_cfn](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/pubsub_topic) | resource |
| [google_pubsub_topic.main](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/pubsub_topic) | resource |
| [google_pubsub_topic_iam_member.pubsub_sink_member](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/pubsub_topic_iam_member) | resource |
| [google_secret_manager_secret.delicensing_cfn_pano_creds](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/secret_manager_secret) | resource |
| [google_service_account.delicensing_cfn](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/service_account) | resource |
| [google_storage_bucket.delicensing_cfn](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket) | resource |
| [google_storage_bucket_object.delicensing_cfn](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket_object) | resource |
| [google_vpc_access_connector.delicensing_cfn](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/vpc_access_connector) | resource |
| [random_id.postfix](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/id) | resource |
| [archive_file.delicensing_cfn](https://registry.terraform.io/providers/hashicorp/archive/latest/docs/data-sources/file) | data source |
| [google_compute_default_service_account.main](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_default_service_account) | data source |
| [google_compute_zones.main](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_zones) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_autoscaler_metrics"></a> [autoscaler\_metrics](#input\_autoscaler\_metrics) | A map with the keys being metrics identifiers (e.g. custom.googleapis.com/VMSeries/panSessionUtilization). Each of the contained objects has attribute `target` which is a numerical threshold for a scale-out or a scale-in. Each zonal group grows until it satisfies all the targets. Additional optional attribute `type` defines the metric as either `GAUGE`, `DELTA_PER_SECOND`, or `DELTA_PER_MINUTE`. For full specification, see the `metric` inside the [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_autoscaler). | `map` | <pre>{<br />  "custom.googleapis.com/VMSeries/panSessionThroughputKbps": {<br />    "target": 700000<br />  },<br />  "custom.googleapis.com/VMSeries/panSessionUtilization": {<br />    "target": 70<br />  }<br />}</pre> | no |
| <a name="input_cooldown_period"></a> [cooldown\_period](#input\_cooldown\_period) | The number of seconds that the autoscaler should wait before it starts collecting information from a new VM-Series. This prevents the autoscaler from collecting information when the VM-Series is initializing, during which the collected usage would not be reliable. Virtual machine initialization times might vary because of numerous factors. | `number` | `480` | no |
| <a name="input_create_pubsub_topic"></a> [create\_pubsub\_topic](#input\_create\_pubsub\_topic) | Set to `true` to create a Pub/Sub topic and subscription. The Panorama Google Cloud Plugin can use this Pub/Sub to trigger actions when the VM-Series Instance Group descales. Actions include, removal of VM-Series from Panorama and automatic delicensing (if VM-Series BYOL licensing is used). For more information, please see [Autoscaling the VM-Series on GCP](https://docs.paloaltonetworks.com/vm-series/9-1/vm-series-deployment/set-up-the-vm-series-firewall-on-google-cloud-platform/autoscaling-on-google-cloud-platform). | `bool` | `true` | no |
| <a name="input_delicensing_cloud_function_config"></a> [delicensing\_cloud\_function\_config](#input\_delicensing\_cloud\_function\_config) | Defining `delicensing_cloud_function_config` enables creation of delicesing cloud function and related resources.<br />The variable contains the following configuration parameters that are related to Cloud Function:<br />- `name_prefix`           - Resource name prefix<br />- `function_name`         - Cloud Function base name<br />- `region`                - Cloud Function region<br />- `bucket_location`       - Cloud Function source code bucket location <br />- `panorama_address`      - Panorama IP address/FQDN<br />- `panorama2_address`     - Panorama 2 IP address/FQDN. Set if Panorama is in HA mode<br />- `vpc_connector_network` - Panorama VPC network Name<br />- `vpc_connector_cidr`    - VPC connector /28 CIDR.<br />                            VPC connector will be user for delicensing CFN to access Panorama VPC network.<br /> <br /><br />Example:<pre>{<br />  name\_prefix           = "abc-"<br />  function\_name         = "delicensing-cfn"<br />  region                = "europe-central1"<br />  bucket\_location       = "EU"<br />  panorama\_address      = "1.1.1.1"<br />  panorama2\_address     = ""<br />  vpc\_connector\_network = "panorama-vpc"<br />  vpc\_connector\_cidr    = "10.10.190.0/28"<br />}</pre> | <pre>object({<br />    name\_prefix           = string<br />    function\_name         = string<br />    region                = string<br />    bucket\_location       = string<br />    panorama\_address      = string<br />    panorama2\_address     = string<br />    vpc\_connector\_network = string<br />    vpc\_connector\_cidr    = string<br />  })</pre> | `null` | no |
| <a name="input_disk_type"></a> [disk\_type](#input\_disk\_type) | The disk type that is attached to the instances of the VM-Series firewalls. | `string` | `"pd-ssd"` | no |
| <a name="input_image"></a> [image](#input\_image) | Link to VM-Series PAN-OS image. Can be either a full self\_link, or one of the shortened forms per the [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance#image). | `string` | `"https://www.googleapis.com/compute/v1/projects/paloaltonetworksgcp-public/global/images/vmseries-byol-1014"` | no |
| <a name="input_machine_type"></a> [machine\_type](#input\_machine\_type) | The instance type for the VM-Series firewalls. | `string` | `"n2-standard-4"` | no |
| <a name="input_max_vmseries_replicas"></a> [max\_vmseries\_replicas](#input\_max\_vmseries\_replicas) | The maximum number of VM-Series per region/zone that the autoscaler can scale up to. The maximum number of VM-Series should not be lower than `min_vmseries_replicas`. | `number` | n/a | yes |
| <a name="input_metadata"></a> [metadata](#input\_metadata) | Metadata for VM-Series firewall. The metadata is used to perform mgmt-interface-swap and for bootstrapping the VM-Series.<br /><br />Ex 1: Partial bootstrap to Panorama<pre>metadata = {<br />    type                        = "dhcp-client"<br />    op-command-modes            = "mgmt-interface-swap"<br />    vm-auth-key                 = "012345601234560123456"<br />    panorama-server             = "1.1.1.1"<br />    dgname                      = "my-device-group"<br />    tplname                     = "my-template-stack"<br />    dhcp-send-hostname          = "yes"<br />    dhcp-send-client-id         = "yes"<br />    dhcp-accept-server-hostname = "yes"<br />    dhcp-accept-server-domain   = "yes"<br />  }</pre>Ex 2: Full configuration bootstrap from Google storage bucket.<pre>metadata = {<br />    mgmt-interface-swap                  = "enable"<br />    vmseries-bootstrap-gce-storagebucket = "your-bootstrap-bucket"<br />    ssh-keys                             = "admin:your-public-key"<br />  }</pre> | `map(string)` | `{}` | no |
| <a name="input_min_cpu_platform"></a> [min\_cpu\_platform](#input\_min\_cpu\_platform) | The minimum CPU platform for the instance type of the VM-Series firewalls. | `string` | `"Intel Cascade Lake"` | no |
| <a name="input_min_vmseries_replicas"></a> [min\_vmseries\_replicas](#input\_min\_vmseries\_replicas) | The minimum number of VM-Series per region/zone that the autoscaler can scale down to. This cannot be less than 0. | `number` | n/a | yes |
| <a name="input_name"></a> [name](#input\_name) | The name of the VM-Series deployed. This value will be used as the `base_instance_name` and will be used as a prepended prefix for other created resources. | `string` | n/a | yes |
| <a name="input_named_ports"></a> [named\_ports](#input\_named\_ports) | A list of named port configurations. The name identifies the backend port to receive the traffic <br />from the global load balancers.<pre>named\_ports = [<br />  {<br />    name = "http"<br />    port = "80"<br />  },<br />  {<br />    name = "app42"<br />    port = "4242"<br />  },<br />]</pre> | `list` | `[]` | no |
| <a name="input_network_interfaces"></a> [network\_interfaces](#input\_network\_interfaces) | List of the network interface specifications.<br /><br />Available options:<br />- `subnetwork`       - (Required\|string) Self-link of a subnetwork to create interface in.<br />- `create_public_ip` - (Optional\|boolean) Whether to reserve public IP for the interface. | `list(any)` | n/a | yes |
| <a name="input_project_id"></a> [project\_id](#input\_project\_id) | GCP Project ID to contain the created cloud resources. | `string` | `null` | no |
| <a name="input_region"></a> [region](#input\_region) | The Google Cloud region for the resources. If null, provider region will be used. | `string` | `null` | no |
| <a name="input_regional_mig"></a> [regional\_mig](#input\_regional\_mig) | Sets the managed instance group type to either a regional (if `true`) or a zonal (if `false`).<br />For more information please see [About regional MIGs](https://cloud.google.com/compute/docs/instance-groups/regional-migs#why_choose_regional_managed_instance_groups). | `bool` | n/a | yes |
| <a name="input_scale_in_control_replicas_fixed"></a> [scale\_in\_control\_replicas\_fixed](#input\_scale\_in\_control\_replicas\_fixed) | Fixed number of VM-Series instances that can be killed within the scale-in time window. See `scale_in_control` in the [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_autoscaler). | `number` | `1` | no |
| <a name="input_scale_in_control_time_window_sec"></a> [scale\_in\_control\_time\_window\_sec](#input\_scale\_in\_control\_time\_window\_sec) | How far (in seconds) autoscaling should look into the past when scaling down. | `number` | `1800` | no |
| <a name="input_scopes"></a> [scopes](#input\_scopes) | A list of service scopes. Both OAuth2 URLs and gcloud short names are supported. See a complete list of scopes [here](https://cloud.google.com/sdk/gcloud/reference/alpha/compute/instances/set-scopes#--scopes). | `list(string)` | <pre>[<br />  "https://www.googleapis.com/auth/compute.readonly",<br />  "https://www.googleapis.com/auth/cloud.useraccounts.readonly",<br />  "https://www.googleapis.com/auth/devstorage.read\_only",<br />  "https://www.googleapis.com/auth/logging.write",<br />  "https://www.googleapis.com/auth/monitoring.write"<br />]</pre> | no |
| <a name="input_service_account_email"></a> [service\_account\_email](#input\_service\_account\_email) | IAM Service Account applied to the VM-Series instances. | `string` | `null` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | Tags to attach to the instance | `list(string)` | `[]` | no |
| <a name="input_target_pools"></a> [target\_pools](#input\_target\_pools) | A list of target pool URLs to which the instance groups are added. Updating the target pools attribute does not affect existing VM-Series instances. | `list(string)` | `null` | no |
| <a name="input_update_policy_type"></a> [update\_policy\_type](#input\_update\_policy\_type) | What to do when the underlying template changes (e.g. PAN-OS upgrade). OPPORTUNISTIC is the only recommended value. Also PROACTIVE is allowed. | `string` | `"OPPORTUNISTIC"` | no |
| <a name="input_zones"></a> [zones](#input\_zones) | A map of the zone names for zonal managed instance groups. A managed instance group will be created for every zone entered.<br />Required if `regional_mig` is set to `false`. | `map(string)` | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_pubsub_subscription_iam_member_etag"></a> [pubsub\_subscription\_iam\_member\_etag](#output\_pubsub\_subscription\_iam\_member\_etag) | The etag of the Pub/Sub IAM Member. |
| <a name="output_pubsub_subscription_id"></a> [pubsub\_subscription\_id](#output\_pubsub\_subscription\_id) | The resource ID of the Pub/Sub Subscription. |
| <a name="output_pubsub_topic_id"></a> [pubsub\_topic\_id](#output\_pubsub\_topic\_id) | The resource ID of the Pub/Sub Topic. |
| <a name="output_regional_instance_group_id"></a> [regional\_instance\_group\_id](#output\_regional\_instance\_group\_id) | The resource ID of the regional VM-Series managed instance group. This output should only be used when `regional_mig` is set to `true`. |
| <a name="output_zonal_instance_group_ids"></a> [zonal\_instance\_group\_ids](#output\_zonal\_instance\_group\_ids) | The resource IDs of the zonal VM-Series managed instance groups. This output should only be used when `regional_mig` is set to `false`. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->