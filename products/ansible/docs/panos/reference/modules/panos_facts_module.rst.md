orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_facts_module">

</div>

# paloaltonetworks.panos.panos_facts module -- Collects facts from PAN-OS devices

<div className="note">

<div className="title">

Note

</div>

This module is part of the [paloaltonetworks.panos
collection](https://galaxy.ansible.com/paloaltonetworks/panos) (version
2.13.1).

To install it, use:
`ansible-galaxy collection install paloaltonetworks.panos`. You need
further requirements to be able to use this module, see
`Requirements <ansible_collections.paloaltonetworks.panos.panos_facts_module_requirements>`
for details.

To use it in a playbook, specify: `paloaltonetworks.panos.panos_facts`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- Collects fact information from Palo Alto Networks firewalls and
  Panorama.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python

## Parameters

<div className="rst-class">

ansible-option-table

</div>

<table>
<thead>
<tr className="header">
<th>Parameter</th>
<th>Comments</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-api_key">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>api_key</strong></p>
<a className="ansibleOptionLink" href="#parameter-api_key" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The API key to use instead of generating it using <em>username</em> /
<em>password</em>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-gather_subset"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-gather_subset">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gather_subset</strong></p>
<a className="ansibleOptionLink" href="#parameter-gather_subset" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Scopes what information is gathered from the device. Possible values
for this argument include all, system, session, interfaces, ha, routing,
vr, vsys and config. You can specify a list of values to include a
larger subset. Values can also be used with an initial ! to specify that
a specific subset should not be collected. Panorama only supports the
system, ha, and config subsets.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">["!config"]</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-ip_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-ip_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The IP address or hostname of the PAN-OS device being configured.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-password">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>password</strong></p>
<a className="ansibleOptionLink" href="#parameter-password" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The password to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-port">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>port</strong></p>
<a className="ansibleOptionLink" href="#parameter-port" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The port number to connect to the PAN-OS device on.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">443</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-provider">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>provider</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">dictionary</span></p>
<p><span className="ansible-option-versionadded">added in
paloaltonetworks.panos 1.0.0</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>A dict object containing connection details.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-provider/api_key">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>api_key</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/api_key" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The API key to use instead of generating it using <em>username</em> /
<em>password</em>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-provider/ip_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/ip_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The IP address or hostname of the PAN-OS device being configured.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-provider/password">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>password</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/password" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The password to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-provider/port">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>port</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/port" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The port number to connect to the PAN-OS device on.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">443</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/serial_number"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-provider/serial_number">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>serial_number</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/serial_number" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The serial number of a firewall to use for targeted commands. If
<em>ip_address</em> is not a Panorama PAN-OS device, then this param is
ignored.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-provider/username">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>username</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/username" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The username to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"admin"</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__parameter-username">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>username</strong></p>
<a className="ansibleOptionLink" href="#parameter-username" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The username to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"admin"</code></p>
</div></td>
</tr>
</tbody>
</table>

## Notes

<div className="note">

<div className="title">

Note

</div>

\- Checkmode is not supported. - PAN-OS connectivity should be specified
using *provider* or the classic PAN-OS connectivity params
(*ip_address*, *username*, *password*, *api_key*, and *port*). If both
are present, then the classic params are ignored.

</div>

## Examples

``` yaml+jinja
# Gather facts
- name: Get facts
  panos_facts:
    provider: '{{ provider }}'
    gather_subset: ['config']
```

## Return Values

Common return values are documented `here <common_return_values>`, the
following are the fields unique to this module:

<div className="rst-class">

ansible-option-table

</div>

<table>
<thead>
<tr className="header">
<th>Key</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_config"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_config">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_config</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_config" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Device confiration in XML format.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>config</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_full_commit_required"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_full_commit_required">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_full_commit_required</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_full_commit_required" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Specifies whether full commit is required to apply changes.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>system</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_ha_enabled"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_ha_enabled">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_ha_enabled</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_ha_enabled" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Specifies whether HA is enabled or not.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>ha</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_ha_localmode"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_ha_localmode">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_ha_localmode</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_ha_localmode" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Specifies the HA mode on local node.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>ha</code> is specified in <code>gather\_subset</code>.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text"
role="ansible-rv-sample-value">"Active-Passive"</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_ha_localstate"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_ha_localstate">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_ha_localstate</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_ha_localstate" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Specifies the HA state on local node.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>ha</code> is specified in <code>gather\_subset</code>.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text"
role="ansible-rv-sample-value">"active"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_hostname"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_hostname">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_hostname</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_hostname" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Hostname of the local node.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>system</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_interfaces"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_interfaces">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_interfaces</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_interfaces" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">complex</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Network interface information.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>interface</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_interfaces/comment"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_interfaces/comment">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>comment</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_interfaces/comment" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>Interface description/comment.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_interfaces/ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_interfaces/ip">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_interfaces/ip" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>List of interface IP addresses in CIDR format.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text"
role="ansible-rv-sample-value">["192.0.2.1/24"]</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_interfaces/ipv6"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_interfaces/ipv6">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ipv6</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_interfaces/ipv6" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>List of interface IPv6 addresses in CIDR format.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text"
role="ansible-rv-sample-value">["2001:db8::0000:1/64"]</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_interfaces/name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_interfaces/name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>name</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_interfaces/name" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>Interface name.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text"
role="ansible-rv-sample-value">"ae1.23"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_interfaces/tag"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_interfaces/tag">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tag</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_interfaces/tag" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>VLAN tag for the subinterface.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text" role="ansible-rv-sample-value">23</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_kbps"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_kbps">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_kbps</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_kbps" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Current kb/s throughput.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>session</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_model"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_model">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_model</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_model" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Device model of the local node.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>system</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_multivsys"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_multivsys">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_multivsys</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_multivsys" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Specifies whether multivsys mode is enabled on local node.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>system</code> is specified in <code>gather\_subset</code>.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text"
role="ansible-rv-sample-value">"True"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_pps"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_pps">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_pps</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_pps" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Current packets/s throughput.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>session</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_routing_table"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_routing_table">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_routing_table</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_routing_table" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">complex</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Routing Table information.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>routing</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_routing_table/age"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_routing_table/age">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>age</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_routing_table/age" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>Age of the route entry in the routing table.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_routing_table/destination"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_routing_table/destination">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_routing_table/destination" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>IP prefix of the destination.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_routing_table/flags"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_routing_table/flags">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>flags</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_routing_table/flags" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>Flags for the route entry in the routing table.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_routing_table/interface"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_routing_table/interface">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>interface</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_routing_table/interface" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>Egress interface the router will use to reach the next hop.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_routing_table/metric"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_routing_table/metric">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>metric</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_routing_table/metric" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>Metric for the route.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_routing_table/nexthop"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_routing_table/nexthop">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>nexthop</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_routing_table/nexthop" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>Address of the device at the next hop toward the destination
network.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_routing_table/route_table"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_routing_table/route_table">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>route_table</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_routing_table/route_table" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>Unicast or multicast route table.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_routing_table/virtual_router"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_routing_table/virtual_router">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>virtual_router</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_routing_table/virtual_router" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>Virtual router the route belongs to.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_serial"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_serial">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_serial</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_serial" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Serial number of the local node.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>system</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_session_max"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_session_max">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_session_max</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_session_max" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Maximum number of sessions on local node.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>session</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_session_usage"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_session_usage">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_session_usage</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_session_usage" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Current number of active sessions on local node</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>session</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_uncommitted_changes"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_uncommitted_changes">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_uncommitted_changes</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_uncommitted_changes" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Specifies if commit is required to apply changes.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>system</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_uptime"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_uptime">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_uptime</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_uptime" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Uptime of the local node.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>system</code> is specified in <code>gather\_subset</code>.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text"
role="ansible-rv-sample-value">"469 days, 19:30:16"</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_version"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_version">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_version</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_version" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PanOS version of the local node.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>system</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_routers"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_routers">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_virtual_routers</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_routers" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">complex</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Virtual Router information.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>vr</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_routers/vr_asn"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_routers/vr_asn">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vr_asn</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_routers/vr_asn" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>BGP autonomous system number.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text" role="ansible-rv-sample-value">65001</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_routers/vr_iflist"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_routers/vr_iflist">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vr_iflist</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_routers/vr_iflist" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>List interfaces in the VR.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text"
role="ansible-rv-sample-value">["ae2.12", "ae2.14"]</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_routers/vr_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_routers/vr_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vr_name</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_routers/vr_name" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>Name of the virtual router.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_routers/vr_routerid"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_routers/vr_routerid">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vr_routerid</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_routers/vr_routerid" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>BGP router ID.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text"
role="ansible-rv-sample-value">"192.0.2.1"</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_systems"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_systems">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ansible_net_virtual_systems</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_systems" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">complex</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Virtual System information.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> When
<code>vsys</code> is specified in <code>gather\_subset</code>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_systems/vsys_currentsessions"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_systems/vsys_currentsessions">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vsys_currentsessions</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_systems/vsys_currentsessions" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>Number of active sessions on VSYS.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_systems/vsys_description"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_systems/vsys_description">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vsys_description</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_systems/vsys_description" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>VSYS description/name.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_systems/vsys_id"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_systems/vsys_id">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vsys_id</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_systems/vsys_id" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>VSYS ID.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_systems/vsys_iflist"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_systems/vsys_iflist">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vsys_iflist</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_systems/vsys_iflist" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>List of interfaces attached to the VSYS.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_systems/vsys_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_systems/vsys_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vsys_name</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_systems/vsys_name" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>VSYS name.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text"
role="ansible-rv-sample-value">"vsys1"</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_systems/vsys_vrlist"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_systems/vsys_vrlist">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vsys_vrlist</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_systems/vsys_vrlist" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>List of virtual routers attached to the VSYS.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_systems/vsys_vsys_maxsessions"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_systems/vsys_vsys_maxsessions">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vsys_vsys_maxsessions</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_systems/vsys_vsys_maxsessions" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>Number of configured maximum sessions on VSYS. 0 for unlimited.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-ansible_net_virtual_systems/vsys_zonelist"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_facts_module__return-ansible_net_virtual_systems/vsys_zonelist">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vsys_zonelist</strong></p>
<a className="ansibleOptionLink" href="#return-ansible_net_virtual_systems/vsys_zonelist" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>List of security zones attached to the VSYS.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
</tbody>
</table>

### Authors

- Tomi Raittinen (@traittinen)
- Garfield Lee Freeman (@shinmog)
- Michael Richardson (@mrichardson03)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
