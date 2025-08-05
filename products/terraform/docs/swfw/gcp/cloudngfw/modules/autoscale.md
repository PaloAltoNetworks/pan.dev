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

### Requirements

- `terraform`, version: >= 1.3, < 2.0
- `google`, version: >= 5

### Providers

- `google`, version: >= 5
- `random`
- `archive`



### Resources

- `cloudfunctions2_function` (managed)
- `compute_autoscaler` (managed)
- `compute_instance_group_manager` (managed)
- `compute_instance_template` (managed)
- `compute_region_autoscaler` (managed)
- `compute_region_instance_group_manager` (managed)
- `logging_project_sink` (managed)
- `project_iam_member` (managed)
- `project_iam_member` (managed)
- `pubsub_subscription` (managed)
- `pubsub_subscription_iam_member` (managed)
- `pubsub_topic` (managed)
- `pubsub_topic` (managed)
- `pubsub_topic_iam_member` (managed)
- `secret_manager_secret` (managed)
- `service_account` (managed)
- `storage_bucket` (managed)
- `storage_bucket_object` (managed)
- `vpc_access_connector` (managed)
- `id` (managed)
- `file` (data)
- `compute_default_service_account` (data)
- `compute_zones` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the VM-Series deployed.
[`regional_mig`](#regional_mig) | `bool` | Sets the managed instance group type to either a regional (if `true`) or a zonal (if `false`).
[`network_interfaces`](#network_interfaces) | `list` | List of the network interface specifications.
[`min_vmseries_replicas`](#min_vmseries_replicas) | `number` | The minimum number of VM-Series per region/zone that the autoscaler can scale down to.
[`max_vmseries_replicas`](#max_vmseries_replicas) | `number` | The maximum number of VM-Series per region/zone that the autoscaler can scale up to.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`region`](#region) | `string` | The Google Cloud region for the resources.
[`project_id`](#project_id) | `string` | GCP Project ID to contain the created cloud resources.
[`zones`](#zones) | `map` | A map of the zone names for zonal managed instance groups.
[`image`](#image) | `string` | Link to VM-Series PAN-OS image.
[`machine_type`](#machine_type) | `string` | The instance type for the VM-Series firewalls.
[`min_cpu_platform`](#min_cpu_platform) | `string` | The minimum CPU platform for the instance type of the VM-Series firewalls.
[`disk_type`](#disk_type) | `string` | The disk type that is attached to the instances of the VM-Series firewalls.
[`service_account_email`](#service_account_email) | `string` | IAM Service Account applied to the VM-Series instances.
[`scopes`](#scopes) | `list` | A list of service scopes.
[`tags`](#tags) | `list` | Tags to attach to the instance.
[`metadata`](#metadata) | `map` | Metadata for VM-Series firewall.
[`target_pools`](#target_pools) | `list` | A list of target pool URLs to which the instance groups are added.
[`named_ports`](#named_ports) | `list` | A list of named port configurations.
[`update_policy_type`](#update_policy_type) | `string` | What to do when the underlying template changes (e.
[`autoscaler_metrics`](#autoscaler_metrics) | `map` | A map with the keys being metrics identifiers (e.
[`cooldown_period`](#cooldown_period) | `number` | The number of seconds that the autoscaler should wait before it starts collecting information from a new VM-Series.
[`scale_in_control_time_window_sec`](#scale_in_control_time_window_sec) | `number` | How far (in seconds) autoscaling should look into the past when scaling down.
[`scale_in_control_replicas_fixed`](#scale_in_control_replicas_fixed) | `number` | Fixed number of VM-Series instances that can be killed within the scale-in time window.
[`create_pubsub_topic`](#create_pubsub_topic) | `bool` | Set to `true` to create a Pub/Sub topic and subscription.
[`delicensing_cloud_function_config`](#delicensing_cloud_function_config) | `object` | Defining `delicensing_cloud_function_config` enables creation of delicesing cloud function and related resources.

### Outputs

Name |  Description
--- | ---
`zonal_instance_group_ids` | The resource IDs of the zonal VM-Series managed instance groups. This output should only be used when `regional_mig` is set to `false`.
`regional_instance_group_id` | The resource ID of the regional VM-Series managed instance group. This output should only be used when `regional_mig` is set to `true`.
`pubsub_topic_id` | The resource ID of the Pub/Sub Topic.
`pubsub_subscription_id` | The resource ID of the Pub/Sub Subscription.
`pubsub_subscription_iam_member_etag` | The etag of the Pub/Sub IAM Member.

### Required Inputs details

#### name

The name of the VM-Series deployed. This value will be used as the `base_instance_name` and will be used as a prepended prefix for other created resources.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### regional_mig

Sets the managed instance group type to either a regional (if `true`) or a zonal (if `false`).
For more information please see [About regional MIGs](https://cloud.google.com/compute/docs/instance-groups/regional-migs#why_choose_regional_managed_instance_groups).


Type: bool

<sup>[back to list](#modules-required-inputs)</sup>

#### network_interfaces

List of the network interface specifications.
  
Available options:
- `subnetwork`       - (Required|string) Self-link of a subnetwork to create interface in.
- `create_public_ip` - (Optional|boolean) Whether to reserve public IP for the interface.


Type: list(any)

<sup>[back to list](#modules-required-inputs)</sup>

#### min_vmseries_replicas

The minimum number of VM-Series per region/zone that the autoscaler can scale down to. This cannot be less than 0.

Type: number

<sup>[back to list](#modules-required-inputs)</sup>

#### max_vmseries_replicas

The maximum number of VM-Series per region/zone that the autoscaler can scale up to. The maximum number of VM-Series should not be lower than `min_vmseries_replicas`.

Type: number

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### region

The Google Cloud region for the resources. If null, provider region will be used.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### project_id

GCP Project ID to contain the created cloud resources.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### zones

A map of the zone names for zonal managed instance groups. A managed instance group will be created for every zone entered.
Required if `regional_mig` is set to `false`.


Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### image

Link to VM-Series PAN-OS image. Can be either a full self_link, or one of the shortened forms per the [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance#image).

Type: string

Default value: `https://www.googleapis.com/compute/v1/projects/paloaltonetworksgcp-public/global/images/vmseries-byol-1014`

<sup>[back to list](#modules-optional-inputs)</sup>

#### machine_type

The instance type for the VM-Series firewalls.

Type: string

Default value: `n2-standard-4`

<sup>[back to list](#modules-optional-inputs)</sup>

#### min_cpu_platform

The minimum CPU platform for the instance type of the VM-Series firewalls.

Type: string

Default value: `Intel Cascade Lake`

<sup>[back to list](#modules-optional-inputs)</sup>

#### disk_type

The disk type that is attached to the instances of the VM-Series firewalls.

Type: string

Default value: `pd-ssd`

<sup>[back to list](#modules-optional-inputs)</sup>

#### service_account_email

IAM Service Account applied to the VM-Series instances.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### scopes

A list of service scopes. Both OAuth2 URLs and gcloud short names are supported. See a complete list of scopes [here](https://cloud.google.com/sdk/gcloud/reference/alpha/compute/instances/set-scopes#--scopes).

Type: list(string)

Default value: `[https://www.googleapis.com/auth/compute.readonly https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read_only https://www.googleapis.com/auth/logging.write https://www.googleapis.com/auth/monitoring.write]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### tags

Tags to attach to the instance

Type: list(string)

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### metadata

Metadata for VM-Series firewall. The metadata is used to perform mgmt-interface-swap and for bootstrapping the VM-Series.
  
Ex 1: Partial bootstrap to Panorama 
```
  metadata = {
    type                        = "dhcp-client"
    op-command-modes            = "mgmt-interface-swap"
    vm-auth-key                 = "012345601234560123456"
    panorama-server             = "1.1.1.1"
    dgname                      = "my-device-group"
    tplname                     = "my-template-stack"
    dhcp-send-hostname          = "yes"
    dhcp-send-client-id         = "yes"
    dhcp-accept-server-hostname = "yes"
    dhcp-accept-server-domain   = "yes"
  }
```
  
Ex 2: Full configuration bootstrap from Google storage bucket.
```
  metadata = {
    mgmt-interface-swap                  = "enable"
    vmseries-bootstrap-gce-storagebucket = "your-bootstrap-bucket"
    ssh-keys                             = "admin:your-public-key"
  }
```


Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### target_pools

A list of target pool URLs to which the instance groups are added. Updating the target pools attribute does not affect existing VM-Series instances.

Type: list(string)

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### named_ports

A list of named port configurations. The name identifies the backend port to receive the traffic 
from the global load balancers.

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


Type: list

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### update_policy_type

What to do when the underlying template changes (e.g. PAN-OS upgrade). OPPORTUNISTIC is the only recommended value. Also PROACTIVE is allowed.

Type: string

Default value: `OPPORTUNISTIC`

<sup>[back to list](#modules-optional-inputs)</sup>

#### autoscaler_metrics

A map with the keys being metrics identifiers (e.g. custom.googleapis.com/VMSeries/panSessionUtilization). Each of the contained objects has attribute `target` which is a numerical threshold for a scale-out or a scale-in. Each zonal group grows until it satisfies all the targets. Additional optional attribute `type` defines the metric as either `GAUGE`, `DELTA_PER_SECOND`, or `DELTA_PER_MINUTE`. For full specification, see the `metric` inside the [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_autoscaler).

Type: map

Default value: `map[custom.googleapis.com/VMSeries/panSessionThroughputKbps:map[target:700000] custom.googleapis.com/VMSeries/panSessionUtilization:map[target:70]]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### cooldown_period

The number of seconds that the autoscaler should wait before it starts collecting information from a new VM-Series. This prevents the autoscaler from collecting information when the VM-Series is initializing, during which the collected usage would not be reliable. Virtual machine initialization times might vary because of numerous factors.

Type: number

Default value: `480`

<sup>[back to list](#modules-optional-inputs)</sup>

#### scale_in_control_time_window_sec

How far (in seconds) autoscaling should look into the past when scaling down.

Type: number

Default value: `1800`

<sup>[back to list](#modules-optional-inputs)</sup>

#### scale_in_control_replicas_fixed

Fixed number of VM-Series instances that can be killed within the scale-in time window. See `scale_in_control` in the [provider doc](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_autoscaler).

Type: number

Default value: `1`

<sup>[back to list](#modules-optional-inputs)</sup>

#### create_pubsub_topic

Set to `true` to create a Pub/Sub topic and subscription. The Panorama Google Cloud Plugin can use this Pub/Sub to trigger actions when the VM-Series Instance Group descales. Actions include, removal of VM-Series from Panorama and automatic delicensing (if VM-Series BYOL licensing is used). For more information, please see [Autoscaling the VM-Series on GCP](https://docs.paloaltonetworks.com/vm-series/9-1/vm-series-deployment/set-up-the-vm-series-firewall-on-google-cloud-platform/autoscaling-on-google-cloud-platform).

Type: bool

Default value: `true`

<sup>[back to list](#modules-optional-inputs)</sup>

#### delicensing_cloud_function_config

Defining `delicensing_cloud_function_config` enables creation of delicesing cloud function and related resources.
The variable contains the following configuration parameters that are related to Cloud Function:
- `name_prefix`           - Resource name prefix
- `function_name`         - Cloud Function base name
- `region`                - Cloud Function region
- `bucket_location`       - Cloud Function source code bucket location 
- `panorama_address`      - Panorama IP address/FQDN
- `panorama2_address`     - Panorama 2 IP address/FQDN. Set if Panorama is in HA mode
- `vpc_connector_network` - Panorama VPC network Name
- `vpc_connector_cidr`    - VPC connector /28 CIDR.
                            VPC connector will be user for delicensing CFN to access Panorama VPC network.
 

Example:

```
{
  name_prefix           = "abc-"
  function_name         = "delicensing-cfn"
  region                = "europe-central1"
  bucket_location       = "EU"
  panorama_address      = "1.1.1.1"
  panorama2_address     = ""
  vpc_connector_network = "panorama-vpc"
  vpc_connector_cidr    = "10.10.190.0/28"
}
```


Type: 

```hcl
object({
    name_prefix           = string
    function_name         = string
    region                = string
    bucket_location       = string
    panorama_address      = string
    panorama2_address     = string
    vpc_connector_network = string
    vpc_connector_cidr    = string
  })
```


Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>