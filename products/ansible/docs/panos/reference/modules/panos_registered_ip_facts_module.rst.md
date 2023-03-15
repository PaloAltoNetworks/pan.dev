orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module">

</div>

# paloaltonetworks.panos.panos_registered_ip_facts module -- Retrieve facts about registered IPs on PAN-OS devices.

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_registered_ip_facts`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- Retrieves tag information about registered IPs on PAN-OS devices.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python can be obtained from PyPI
  [https://pypi.python.org/pypi/pan-python\\](https://pypi.python.org/pypi/pan-python\)
- pandevice can be obtained from PyPI
  [https://pypi.python.org/pypi/pandevice\\](https://pypi.python.org/pypi/pandevice\)

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
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-api_key">
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
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-ip_address">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ips"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-ips">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ips</strong></p>
<a className="ansibleOptionLink" href="#parameter-ips" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>List of IP addresses to retrieve facts for. If not specified,
retrieve all addresses.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-password">
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
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-port">
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
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-provider">
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
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-provider/ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-provider/username">
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
<div className="ansibleOptionAnchor" id="parameter-tags"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-tags">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tags</strong></p>
<a className="ansibleOptionLink" href="#parameter-tags" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>List of tags to retrieve facts for. If not specified, retrieve all
tags.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-username">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-vsys"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__parameter-vsys">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vsys</strong></p>
<a className="ansibleOptionLink" href="#parameter-vsys" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The vsys this object belongs to.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"vsys1"</code></p>
</div></td>
</tr>
</tbody>
</table>

## Notes

<div className="note">

<div className="title">

Note

</div>

\- Panorama is not supported. - PAN-OS connectivity should be specified
using *provider* or the classic PAN-OS connectivity params
(*ip_address*, *username*, *password*, *api_key*, and *port*). If both
are present, then the classic params are ignored.

</div>

## Examples

``` yaml+jinja
- name: Get facts for all registered IPs
  panos_registered_ip_facts:
    provider: '{{ provider }}'
  register: registered_ip_facts

- name: Get facts for specific tag
  panos_registered_ip_facts:
    provider: '{{ provider }}'
    tags: ['First_Tag']
  register: first_tag_registered_ip_facts

- name: Get facts for a specific IP address
  panos_registered_ip_facts:
    provider: '{{ provider }}'
    ips: ['192.168.1.1']
  register: ipaddress_registered_ip_facts
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
<div className="ansibleOptionAnchor" id="return-results"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module__return-results">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>results</strong></p>
<a className="ansibleOptionLink" href="#return-results" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">dictionary</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>IP addresses as keys, tags as values.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span>
always</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> 

```json
{"1.1.1.1": ["First\_Tag", "Second\_Tag"]}
```

</p>
</div></td>
</tr>
</tbody>
</table>

### Authors

- Michael Richardson (@mrichardson03)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
