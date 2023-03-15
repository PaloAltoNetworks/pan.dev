orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module">

</div>

# paloaltonetworks.panos.panos_ipsec_tunnel module -- Manage IPSec Tunnels on the firewall with subset of settings.

<div class="note">

<div class="title">

Note

</div>

This module is part of the [paloaltonetworks.panos
collection](https://galaxy.ansible.com/paloaltonetworks/panos) (version
2.13.1).

To install it, use:
`ansible-galaxy collection install paloaltonetworks.panos`. You need
further requirements to be able to use this module, see
`Requirements <ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_ipsec_tunnel`.

</div>

<div class="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div class="contents" local="" depth="1">

</div>

## Synopsis

- Use IPSec Tunnels to establish and manage IPSec VPN tunnels between
  firewalls. This is the Phase 2 portion of the
- IKE/IPSec VPN setup.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python can be obtained from PyPI
  [https://pypi.python.org/pypi/pan-python\\](https://pypi.python.org/pypi/pan-python\)
- pandevice can be obtained from PyPI
  [https://pypi.python.org/pypi/pandevice\\](https://pypi.python.org/pypi/pandevice\)

## Parameters

<div class="rst-class">

ansible-option-table

</div>

<table>
<thead>
<tr class="header">
<th>Parameter</th>
<th>Comments</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ak_ike_gateway"></div>
<div class="ansibleOptionAnchor" id="parameter-ike_gtw_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-ak_ike_gateway">
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-ike_gtw_name">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>ak_ike_gateway</strong></p>
<a class="ansibleOptionLink" href="#parameter-ak_ike_gateway" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-aliases">aliases: ike_gtw_name</span></p>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name of the existing IKE gateway (auto-key).</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">"default"</code></p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ak_ipsec_crypto_profile"></div>
<div class="ansibleOptionAnchor" id="parameter-ipsec_profile"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-ak_ipsec_crypto_profile">
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-ipsec_profile">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>ak_ipsec_crypto_profile</strong></p>
<a class="ansibleOptionLink" href="#parameter-ak_ipsec_crypto_profile" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-aliases">aliases:
ipsec_profile</span></p>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name of the existing IPsec profile or use default (auto-key).</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">"default"</code></p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-anti_replay"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-anti_replay">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>anti_replay</strong></p>
<a class="ansibleOptionLink" href="#parameter-anti_replay" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Enable anti-replay check on this tunnel.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">false</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">true</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-api_key">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>api_key</strong></p>
<a class="ansibleOptionLink" href="#parameter-api_key" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The API key to use instead of generating it using <em>username</em> /
<em>password</em>.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-commit"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-commit">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>commit</strong></p>
<a class="ansibleOptionLink" href="#parameter-commit" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Please use <code class="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_commit\_firewall &lt;ansible_collections.paloaltonetworks.panos.panos_commit_firewall_module&gt;</code>,
<code class="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_commit\_panorama &lt;ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module&gt;</code>,
<code class="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_commit\_push &lt;ansible_collections.paloaltonetworks.panos.panos_commit_push_module&gt;</code>
instead.</p>
<hr/>
<p>Commit changes after creating object. If <em>ip_address</em> is a
Panorama device, and <em>device_group</em> or <em>template</em> are also
set, perform a commit to Panorama and a commit-all to the device
group/template.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">false</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-copy_flow_label"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-copy_flow_label">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>copy_flow_label</strong></p>
<a class="ansibleOptionLink" href="#parameter-copy_flow_label" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Copy IPv6 flow label for 6in6 tunnel from inner packet to IPSec
packet (not recommended) (7.0+).</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">false</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-copy_tos"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-copy_tos">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>copy_tos</strong></p>
<a class="ansibleOptionLink" href="#parameter-copy_tos" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Copy IP TOS bits from inner packet to IPSec packet (not
recommended).</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">false</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-disabled"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-disabled">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>disabled</strong></p>
<a class="ansibleOptionLink" href="#parameter-disabled" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Disable the IPsec tunnel.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">false</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-enable_tunnel_monitor"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-enable_tunnel_monitor">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>enable_tunnel_monitor</strong></p>
<a class="ansibleOptionLink" href="#parameter-enable_tunnel_monitor" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Enable tunnel monitoring on this tunnel.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">false</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gathered_filter"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-gathered_filter">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gathered_filter</strong></p>
<a class="ansibleOptionLink" href="#parameter-gathered_filter" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>When <em>state=gathered</em>.</p>
<p>An advanced filtering option to filter results returned from
PAN-OS.</p>
<p>Refer to the guide discussing <em>gathered_filter</em> for more
information.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gps_certificate_profile"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-gps_certificate_profile">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gps_certificate_profile</strong></p>
<a class="ansibleOptionLink" href="#parameter-gps_certificate_profile" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Profile for authenticating GlobalProtect gateway certificates
(global-protect-satellite).</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gps_interface"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-gps_interface">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gps_interface</strong></p>
<a class="ansibleOptionLink" href="#parameter-gps_interface" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Interface to communicate with portal (global-protect-satellite).</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gps_interface_ipv4_floating_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-gps_interface_ipv4_floating_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gps_interface_ipv4_floating_ip</strong></p>
<a class="ansibleOptionLink" href="#parameter-gps_interface_ipv4_floating_ip" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Floating IPv4 IP address in HA Active-Active configuration (7.0+)
(global-protect-satellite).</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gps_interface_ipv4_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-gps_interface_ipv4_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gps_interface_ipv4_ip</strong></p>
<a class="ansibleOptionLink" href="#parameter-gps_interface_ipv4_ip" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Exact IPv4 IP address if interface has multiple IP addresses
(global-protect-satellite).</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gps_interface_ipv6_floating_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-gps_interface_ipv6_floating_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gps_interface_ipv6_floating_ip</strong></p>
<a class="ansibleOptionLink" href="#parameter-gps_interface_ipv6_floating_ip" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Floating IPv6 IP address in HA Active-Active configuration (8.0+)
(global-protect-satellite).</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gps_interface_ipv6_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-gps_interface_ipv6_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gps_interface_ipv6_ip</strong></p>
<a class="ansibleOptionLink" href="#parameter-gps_interface_ipv6_ip" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Exact IPv6 IP address if interface has multiple IP addresses (8.0+)
(global-protect-satellite).</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gps_local_certificate"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-gps_local_certificate">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gps_local_certificate</strong></p>
<a class="ansibleOptionLink" href="#parameter-gps_local_certificate" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>GlobalProtect satellite certificate file name
(global-protect-satellite).</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gps_portal_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-gps_portal_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gps_portal_address</strong></p>
<a class="ansibleOptionLink" href="#parameter-gps_portal_address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>GlobalProtect portal address (global-protect-satellite).</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gps_prefer_ipv6"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-gps_prefer_ipv6">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gps_prefer_ipv6</strong></p>
<a class="ansibleOptionLink" href="#parameter-gps_prefer_ipv6" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Prefer to register portal in IPv6 (8.0+)
(global-protect-satellite).</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">false</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gps_publish_connected_routes"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-gps_publish_connected_routes">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gps_publish_connected_routes</strong></p>
<a class="ansibleOptionLink" href="#parameter-gps_publish_connected_routes" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Enable publishing of connected and static routes
(global-protect-satellite).</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">false</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gps_publish_routes"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-gps_publish_routes">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gps_publish_routes</strong></p>
<a class="ansibleOptionLink" href="#parameter-gps_publish_routes" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Specify list of routes to publish to GlobalProtect gateway
(global-protect-satellite).</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-ip_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a class="ansibleOptionLink" href="#parameter-ip_address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The IP address or hostname of the PAN-OS device being configured.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ipv6"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-ipv6">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ipv6</strong></p>
<a class="ansibleOptionLink" href="#parameter-ipv6" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Use IPv6 for the IPsec tunnel (7.0+)</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">false</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-mk_auth_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-mk_auth_key">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>mk_auth_key</strong></p>
<a class="ansibleOptionLink" href="#parameter-mk_auth_key" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Authentication key (manual-key).</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-mk_auth_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-mk_auth_type">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>mk_auth_type</strong></p>
<a class="ansibleOptionLink" href="#parameter-mk_auth_type" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Authentication type for tunnel access (manual-key).</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"md5"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"sha1"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"sha256"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"sha384"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"sha512"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-mk_esp_encryption"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-mk_esp_encryption">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>mk_esp_encryption</strong></p>
<a class="ansibleOptionLink" href="#parameter-mk_esp_encryption" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Encryption algorithm for tunnel traffic (manual-key).</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"des"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"3des"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"aes-128-cbc"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"aes-192-cbc"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"aes-256-cbc"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"null"</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-mk_esp_encryption_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-mk_esp_encryption_key">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>mk_esp_encryption_key</strong></p>
<a class="ansibleOptionLink" href="#parameter-mk_esp_encryption_key" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Encryption key (manual-key).</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-mk_interface"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-mk_interface">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>mk_interface</strong></p>
<a class="ansibleOptionLink" href="#parameter-mk_interface" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Interface to terminate tunnel (manual-key).</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-mk_local_address_floating_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-mk_local_address_floating_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>mk_local_address_floating_ip</strong></p>
<a class="ansibleOptionLink" href="#parameter-mk_local_address_floating_ip" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Floating IP address in HA Active-Active configuration
(manual-key).</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-mk_local_address_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-mk_local_address_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>mk_local_address_ip</strong></p>
<a class="ansibleOptionLink" href="#parameter-mk_local_address_ip" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Exact IP address if interface has multiple IP addresses
(manual-key).</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-mk_local_spi"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-mk_local_spi">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>mk_local_spi</strong></p>
<a class="ansibleOptionLink" href="#parameter-mk_local_spi" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Outbound SPI in hex (manual-key).</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-mk_protocol"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-mk_protocol">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>mk_protocol</strong></p>
<a class="ansibleOptionLink" href="#parameter-mk_protocol" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Protocol for traffic through the tunnel (manual-key).</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"esp"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"ah"</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-mk_remote_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-mk_remote_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>mk_remote_address</strong></p>
<a class="ansibleOptionLink" href="#parameter-mk_remote_address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Tunnel peer IP address (manual-key).</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-mk_remote_spi"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-mk_remote_spi">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>mk_remote_spi</strong></p>
<a class="ansibleOptionLink" href="#parameter-mk_remote_spi" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Inbound SPI in hex (manual-key).</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-name">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>name</strong></p>
<a class="ansibleOptionLink" href="#parameter-name" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name for the IPSec tunnel.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-password">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>password</strong></p>
<a class="ansibleOptionLink" href="#parameter-password" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The password to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>port</strong></p>
<a class="ansibleOptionLink" href="#parameter-port" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">integer</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The port number to connect to the PAN-OS device on.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text" role="ansible-option-default">443</code></p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-provider">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>provider</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">dictionary</span></p>
<p><span class="ansible-option-versionadded">added in
paloaltonetworks.panos 1.0.0</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>A dict object containing connection details.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-provider/api_key">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>api_key</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/api_key" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The API key to use instead of generating it using <em>username</em> /
<em>password</em>.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-provider/ip_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/ip_address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The IP address or hostname of the PAN-OS device being configured.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-provider/password">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>password</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/password" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The password to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-provider/port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>port</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/port" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">integer</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The port number to connect to the PAN-OS device on.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text" role="ansible-option-default">443</code></p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/serial_number"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-provider/serial_number">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>serial_number</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/serial_number" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The serial number of a firewall to use for targeted commands. If
<em>ip_address</em> is not a Panorama PAN-OS device, then this param is
ignored.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-provider/username">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>username</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/username" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The username to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">"admin"</code></p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-state"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-state">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>state</strong></p>
<a class="ansibleOptionLink" href="#parameter-state" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The state.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">"present"</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"absent"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"replaced"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"merged"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"deleted"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"gathered"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-template"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-template">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>template</strong></p>
<a class="ansibleOptionLink" href="#parameter-template" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>(Panorama only) The template this operation should target. Mutually
exclusive with <em>template_stack</em>.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-template_stack"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-template_stack">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>template_stack</strong></p>
<a class="ansibleOptionLink" href="#parameter-template_stack" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>(Panorama only) The template stack this operation should target.
Mutually exclusive with <em>template</em>.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-tunnel_interface"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-tunnel_interface">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tunnel_interface</strong></p>
<a class="ansibleOptionLink" href="#parameter-tunnel_interface" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Specify existing tunnel interface that will be used.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">"tunnel.1"</code></p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-tunnel_monitor_dest_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-tunnel_monitor_dest_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tunnel_monitor_dest_ip</strong></p>
<a class="ansibleOptionLink" href="#parameter-tunnel_monitor_dest_ip" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Destination IP to send ICMP probe.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-tunnel_monitor_profile"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-tunnel_monitor_profile">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tunnel_monitor_profile</strong></p>
<a class="ansibleOptionLink" href="#parameter-tunnel_monitor_profile" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Monitoring action.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-tunnel_monitor_proxy_id"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-tunnel_monitor_proxy_id">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tunnel_monitor_proxy_id</strong></p>
<a class="ansibleOptionLink" href="#parameter-tunnel_monitor_proxy_id" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Which proxy-id (or proxy-id-v6) the monitoring traffic will use.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-type">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>type</strong></p>
<a class="ansibleOptionLink" href="#parameter-type" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Type of IPsec tunnel.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">"auto-key"</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"manual-key"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"global-protect-satellite"</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module__parameter-username">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>username</strong></p>
<a class="ansibleOptionLink" href="#parameter-username" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The username to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">"admin"</code></p>
</div></td>
</tr>
</tbody>
</table>

## Notes

<div class="note">

<div class="title">

Note

</div>

\- Panorama is supported. - Check mode is supported. - PAN-OS
connectivity should be specified using *provider* or the classic PAN-OS
connectivity params (*ip_address*, *username*, *password*, *api_key*,
and *port*). If both are present, then the classic params are ignored. -
If the PAN-OS to be configured is Panorama, either *template* or
*template_stack* must be specified.

</div>

## Examples

``` yaml+jinja
- name: Add IPSec tunnel to IKE gateway profile
  panos_ipsec_tunnel:
    provider: '{{ provider }}'
    name: 'IPSecTunnel-Ansible'
    tunnel_interface: 'tunnel.2'
    ak_ike_gateway: 'IKEGW-Ansible'
    ak_ipsec_crypto_profile: 'IPSec-Ansible'
```

### Authors

- Ivan Bojer (@ivanbojer)

### Collection links

<p class="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
