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
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.3, < 2.0 |
| <a name="requirement_google"></a> [google](#requirement\_google) | ~> 4.54 |
| <a name="requirement_null"></a> [null](#requirement\_null) | ~> 3.1 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_google"></a> [google](#provider\_google) | ~> 4.54 |
| <a name="provider_null"></a> [null](#provider\_null) | ~> 3.1 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [google_compute_address.private](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_address) | resource |
| [google_compute_address.public](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_address) | resource |
| [google_compute_instance.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance) | resource |
| [google_compute_instance_group.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance_group) | resource |
| [null_resource.dependency_getter](https://registry.terraform.io/providers/hashicorp/null/latest/docs/resources/resource) | resource |
| [google_compute_image.vmseries](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_image) | data source |
| [google_compute_subnetwork.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_subnetwork) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_bootstrap_options"></a> [bootstrap\_options](#input\_bootstrap\_options) | VM-Series bootstrap options to pass using instance metadata.<br /><br />Proper syntax is a map, where keys are the bootstrap parameters.<br />Example:<br />  bootstrap\_options = \{<br />    type            = dhcp-client<br />    panorama-server = 1.2.3.4<br />  \}<br /><br />A list of available parameters: type, ip-address, default-gateway, netmask, ipv6-address, ipv6-default-gateway, hostname, panorama-server, panorama-server-2, tplname, dgname, dns-primary, dns-secondary, vm-auth-key, op-command-modes, op-cmd-dpdk-pkt-io, plugin-op-commands, dhcp-send-hostname, dhcp-send-client-id, dhcp-accept-server-hostname, dhcp-accept-server-domain, vm-series-auto-registration-pin-id, vm-series-auto-registration-pin-value, auth-key, authcodes, vmseries-bootstrap-gce-storagebucket, mgmt-interface-swap.<br /><br />For more details on the options please refer to [VM-Series documentation](https://docs.paloaltonetworks.com/vm-series/10-2/vm-series-deployment/bootstrap-the-vm-series-firewall/create-the-init-cfgtxt-file/init-cfgtxt-file-components). | `map(string)` | `\{\}` | no |
| <a name="input_create_instance_group"></a> [create\_instance\_group](#input\_create\_instance\_group) | Create an instance group, that can be used in a load balancer setup. | `bool` | `false` | no |
| <a name="input_custom_image"></a> [custom\_image](#input\_custom\_image) | The full URI to GCE image resource, the output of `gcloud compute images list --uri`. Overrides official image specified using `vmseries_image`. | `string` | `null` | no |
| <a name="input_deletion_protection"></a> [deletion\_protection](#input\_deletion\_protection) | Enable deletion protection on the instance. | `bool` | `false` | no |
| <a name="input_dependencies"></a> [dependencies](#input\_dependencies) | n/a | `list(string)` | `[]` | no |
| <a name="input_disk_type"></a> [disk\_type](#input\_disk\_type) | Boot disk type. See [provider documentation](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance#type) for available values. | `string` | `"pd-standard"` | no |
| <a name="input_labels"></a> [labels](#input\_labels) | GCP instance lables. | `map(any)` | `\{\}` | no |
| <a name="input_machine_type"></a> [machine\_type](#input\_machine\_type) | Firewall instance machine type, which depends on the license used. See the [Terraform manual](https://www.terraform.io/docs/providers/google/r/compute_instance.html) | `string` | `"n2-standard-4"` | no |
| <a name="input_metadata"></a> [metadata](#input\_metadata) | Other, not VM-Series specific, metadata to set for an instance. | `map(string)` | `\{\}` | no |
| <a name="input_metadata_startup_script"></a> [metadata\_startup\_script](#input\_metadata\_startup\_script) | See the [Terraform manual](https://www.terraform.io/docs/providers/google/r/compute_instance.html) | `string` | `null` | no |
| <a name="input_min_cpu_platform"></a> [min\_cpu\_platform](#input\_min\_cpu\_platform) | Minimum CPU platform for the compute instance. Up to date version can be found [here](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform). | `string` | `"Intel Cascade Lake"` | no |
| <a name="input_name"></a> [name](#input\_name) | Name of the VM-Series instance. | `string` | n/a | yes |
| <a name="input_named_ports"></a> [named\_ports](#input\_named\_ports) | The list of named ports to create in the instance group:<pre>named\_ports = [<br />  \{<br />    name = "http"<br />    port = "80"<br />  \},<br />  \{<br />    name = "app42"<br />    port = "4242"<br />  \},<br />]</pre>The name identifies the backend port to receive the traffic from the global load balancers.<br />Practically, tcp port 80 named "http" works even when not defined here, but it's not a documented provider's behavior. | `list` | `[]` | no |
| <a name="input_network_interfaces"></a> [network\_interfaces](#input\_network\_interfaces) | List of the network interface specifications.<br />Available options:<br />- `subnetwork`             - (Required\|string) Self-link of a subnetwork to create interface in.<br />- `private_ip_name`        - (Optional\|string) Name for a private address to reserve.<br />- `private_ip`             - (Optional\|string) Private address to reserve.<br />- `create_public_ip`       - (Optional\|boolean) Whether to reserve public IP for the interface. Ignored if `public_ip` is provided. Defaults to 'false'.<br />- `public_ip_name`         - (Optional\|string) Name for a public address to reserve.<br />- `public_ip`              - (Optional\|string) Existing public IP to use.<br />- `public_ptr_domain_name` - (Optional\|string) Existing public PTR name to use.<br />- `alias_ip_ranges`        - (Optional\|list) List of objects that define additional IP ranges for an interface, as specified [here](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance#ip_cidr_range) | `list(any)` | n/a | yes |
| <a name="input_project"></a> [project](#input\_project) | n/a | `string` | `null` | no |
| <a name="input_resource_policies"></a> [resource\_policies](#input\_resource\_policies) | n/a | `list(string)` | `[]` | no |
| <a name="input_scopes"></a> [scopes](#input\_scopes) | n/a | `list(string)` | <pre>[<br />  "https://www.googleapis.com/auth/compute.readonly",<br />  "https://www.googleapis.com/auth/cloud.useraccounts.readonly",<br />  "https://www.googleapis.com/auth/devstorage.read\_only",<br />  "https://www.googleapis.com/auth/logging.write",<br />  "https://www.googleapis.com/auth/monitoring.write"<br />]</pre> | no |
| <a name="input_service_account"></a> [service\_account](#input\_service\_account) | IAM Service Account for running firewall instance (just the email) | `string` | `null` | no |
| <a name="input_ssh_keys"></a> [ssh\_keys](#input\_ssh\_keys) | Public keys to allow SSH access for, separated by newlines. | `string` | `null` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | GCP instance tags. | `list(string)` | `[]` | no |
| <a name="input_vmseries_image"></a> [vmseries\_image](#input\_vmseries\_image) | The image name from which to boot an instance, including the license type and the version.<br />  To get a list of available official images, please run the following command:<br />  `gcloud compute images list --filter="name ~ vmseries" --project paloaltonetworksgcp-public --no-standard-images` | `string` | `"vmseries-flex-bundle1-1008h8"` | no |
| <a name="input_zone"></a> [zone](#input\_zone) | Zone to deploy instance in. | `string` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_instance"></a> [instance](#output\_instance) | n/a |
| <a name="output_instance_group"></a> [instance\_group](#output\_instance\_group) | n/a |
| <a name="output_instance_group_self_link"></a> [instance\_group\_self\_link](#output\_instance\_group\_self\_link) | n/a |
| <a name="output_private_ips"></a> [private\_ips](#output\_private\_ips) | n/a |
| <a name="output_public_ips"></a> [public\_ips](#output\_public\_ips) | n/a |
| <a name="output_self_link"></a> [self\_link](#output\_self\_link) | n/a |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->