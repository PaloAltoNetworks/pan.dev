orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_ha_module">

</div>

# paloaltonetworks.panos.panos_ha module -- Manage High Availability on PAN-OS

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_ha_module_requirements>`
for details.

To use it in a playbook, specify: `paloaltonetworks.panos.panos_ha`.

</div>

<div class="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div class="contents" local="" depth="1">

</div>

## Synopsis

- Manage High Availability on PAN-OS in A/S and A/A modes including all
  HA interface configuration. Assumes physical interfaces are of type HA
  already using panos_interface. This module has the following
  limitations due to no support in pandevice - \* No peer_backup_ip,
  this prevents full configuration of ha1_backup links \* Speed and
  Duplex of ports was intentially skipped

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python can be obtained from PyPI
  [https://pypi.python.org/pypi/pan-python\\](https://pypi.python.org/pypi/pan-python\)
- pandevice can be obtained from PyPI
  [https://pypi.python.org/pypi/pandevice\\](https://pypi.python.org/pypi/pandevice\)
- currently requires specific pandevice release 0.13

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
<div class="ansibleOptionAnchor" id="parameter-api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-api_key">
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
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-commit"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-commit">
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
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha1_gateway"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha1_gateway">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha1_gateway</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha1_gateway" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Default gateway of the HA1 interface</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha1_ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha1_ip_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha1_ip_address</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha1_ip_address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>IP of the HA1 interface</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha1_netmask"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha1_netmask">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha1_netmask</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha1_netmask" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Netmask of the HA1 interface</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha1_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha1_port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha1_port</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha1_port" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Interface to use for this HA1 interface (eg. ethernet1/5)</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha1b_gateway"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha1b_gateway">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha1b_gateway</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha1b_gateway" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Default gateway of the HA1Backup interface</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha1b_ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha1b_ip_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha1b_ip_address</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha1b_ip_address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>IP of the HA1Backup interface</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha1b_netmask"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha1b_netmask">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha1b_netmask</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha1b_netmask" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Netmask of the HA1Backup interface</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha1b_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha1b_port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha1b_port</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha1b_port" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Interface to use for this HA1Backup interface (eg. ethernet1/5)</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha2_gateway"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha2_gateway">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha2_gateway</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha2_gateway" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Default gateway of the HA2 interface</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha2_ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha2_ip_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha2_ip_address</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha2_ip_address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>IP of the HA2 interface</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha2_netmask"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha2_netmask">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha2_netmask</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha2_netmask" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Netmask of the HA2 interface</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha2_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha2_port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha2_port</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha2_port" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Interface to use for this HA2 interface (eg. ethernet1/5)</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">"ha2-a"</code></p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha2b_gateway"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha2b_gateway">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha2b_gateway</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha2b_gateway" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Default gateway of the HA2Backup interface</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha2b_ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha2b_ip_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha2b_ip_address</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha2b_ip_address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>IP of the HA2Backup interface</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha2b_netmask"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha2b_netmask">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha2b_netmask</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha2b_netmask" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Netmask of the HA2Backup interface</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha2b_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha2b_port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha2b_port</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha2b_port" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Interface to use for this HA2Backup interface (eg. ethernet1/5)</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha3_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha3_port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha3_port</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha3_port" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Interface to use for this HA3 interface (eg. ethernet1/5, ae1)</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_config_sync"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_config_sync">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_config_sync</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_config_sync" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Enabled configuration synchronization</p>
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
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_device_id"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_device_id">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_device_id</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_device_id" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">integer</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>HA3 device id (0 or 1)</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">0</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">1</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_enabled"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_enabled">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_enabled</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_enabled" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Enable HA</p>
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
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_group_id"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_group_id">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_group_id</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_group_id" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">integer</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The group identifier</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text" role="ansible-option-default">1</code></p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_ha2_keepalive"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_ha2_keepalive">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_ha2_keepalive</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_ha2_keepalive" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Enable HA2 keepalives</p>
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
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_ha2_keepalive_action"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_ha2_keepalive_action">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_ha2_keepalive_action</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_ha2_keepalive_action" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>HA2 keepalive action</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_ha2_keepalive_threshold"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_ha2_keepalive_threshold">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_ha2_keepalive_threshold</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_ha2_keepalive_threshold" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">integer</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>HA2 keepalive threshold</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_ip_hash_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_ip_hash_key">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_ip_hash_key</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_ip_hash_key" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>active-active hash key used by ip-hash algorithm</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"source"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"source-and-destination"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_mode"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_mode">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_mode</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_mode" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Mode of HA</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">"active-passive"</code>
<span class="ansible-option-choices-default-mark">←
(default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"active-active"</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_passive_link_state"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_passive_link_state">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_passive_link_state</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_passive_link_state" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Passive link state</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"shutdown"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">"auto"</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_peer_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_peer_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_peer_ip</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_peer_ip" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>HA Peer HA1 IP address</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_peer_ip_backup"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_peer_ip_backup">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_peer_ip_backup</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_peer_ip_backup" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>HA Peer HA1 Backup IP address</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_session_owner_selection"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_session_owner_selection">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_session_owner_selection</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_session_owner_selection" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>active-active session owner mode</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"primary-device"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"first-packet"</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_session_setup"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_session_setup">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_session_setup</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_session_setup" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>active-active session setup mode</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"primary-device"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"first-packet"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"ip-modulo"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"ip-hash"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_state_sync"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_state_sync">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_state_sync</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_state_sync" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Enabled state synchronization</p>
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
<div class="ansibleOptionAnchor" id="parameter-ha_sync_qos"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_sync_qos">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_sync_qos</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_sync_qos" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>active-active network sync qos</p>
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
<div class="ansibleOptionAnchor" id="parameter-ha_sync_virtual_router"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_sync_virtual_router">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_sync_virtual_router</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_sync_virtual_router" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>active-active network sync virtual router</p>
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
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ha_tentative_hold_time"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ha_tentative_hold_time">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_tentative_hold_time</strong></p>
<a class="ansibleOptionLink" href="#parameter-ha_tentative_hold_time" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">integer</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>active-active tentative hold timer</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-ip_address">
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
<div class="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-password">
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
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-port">
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
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-provider">
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
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-provider/api_key">
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
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-provider/ip_address">
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
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-provider/password">
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
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-provider/port">
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
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/serial_number"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-provider/serial_number">
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
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-provider/username">
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
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-state"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-state">
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
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-template"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-template">
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
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-template_stack"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-template_stack">
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
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-username">
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
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-vsys"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ha_module__parameter-vsys">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vsys</strong></p>
<a class="ansibleOptionLink" href="#parameter-vsys" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The vsys this object should be imported into. Objects that are
imported include interfaces, virtual routers, virtual wires, and VLANs.
Interfaces are typically imported into vsys1 if no vsys is
specified.</p>
</div></td>
</tr>
</tbody>
</table>

## Notes

<div class="note">

<div class="title">

Note

</div>

\- Checkmode is supported. - Panorama is supported. - PAN-OS
connectivity should be specified using *provider* or the classic PAN-OS
connectivity params (*ip_address*, *username*, *password*, *api_key*,
and *port*). If both are present, then the classic params are ignored. -
If the PAN-OS to be configured is Panorama, either *template* or
*template_stack* must be specified.

</div>

## Examples

``` yaml+jinja
- name: set ports to HA mode
  panos_interface:
    provider: '{{ provider }}'
    if_name: "{{ item }}"
    mode: "ha"
    enable_dhcp: false
  with_items:
    - ethernet1/1
    - ethernet1/2
    - ethernet1/3
    - ethernet1/4
    - ethernet1/5

- name: Configure Active/Standby HA
  panos_ha:
    provider: '{{ provider }}'
    state: present
    ha_peer_ip: "192.168.50.1"
    ha1_ip_address: "192.168.50.2"
    ha1_netmask: "255.255.255.252"
    ha1_port: "ethernet1/1"
    ha2_port: "ethernet1/3"

- name: Configure Active/Active HA
  panos_ha:
    provider: "{{ provider }}"
    state: present
    ha_mode: "active-active"
    ha_device_id: 0
    ha_session_owner_selection: "first-packet"
    ha_session_setup: "first-packet"
    ha_peer_ip: "192.168.50.1"
    ha_peer_ip_backup: "192.168.50.5"
    ha1_port: "ethernet1/1"
    ha1_ip_address: "192.168.50.2"
    ha1_netmask: "255.255.255.252"
    ha1b_port: "ethernet1/2"
    ha1b_ip_address: "192.168.50.6"
    ha1b_netmask: "255.255.255.252"
    ha2_port: "ethernet1/3"
    ha2b_port: "ethernet1/4"
    ha3_port: "ethernet1/5"
```

### Authors

- Patrick Avery (@unknown)

### Collection links

<p class="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
