orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module">

</div>

# paloaltonetworks.panos.panos_type_cmd module -- Execute arbitrary TYPE commands on PAN-OS

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_type_cmd_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_type_cmd`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- This module allows you to execute arbitrary TYPE commands on PAN-OS.
- This module does not provide guards of any sort, so USE AT YOUR OWN
  RISK.
- Refer to the PAN-OS and Panorama API guide for more info.
- <https://docs.paloaltonetworks.com/pan-os.html>

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python
- pandevice

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
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-api_key">
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
<div className="ansibleOptionAnchor" id="parameter-cmd"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-cmd">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>cmd</strong></p>
<a className="ansibleOptionLink" href="#parameter-cmd" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The command to run.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"show"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"get"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"delete"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">"set"</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"edit"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"move"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"rename"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"clone"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"override"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-dst"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-dst">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dst</strong></p>
<a className="ansibleOptionLink" href="#parameter-dst" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Used in <em>cmd=move</em>.</p>
<p>The reference object.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-element"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-element">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>element</strong></p>
<a className="ansibleOptionLink" href="#parameter-element" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Used in <em>cmd=set</em>, <em>cmd=edit</em>, and
<em>cmd=override</em>.</p>
<p>The element payload.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-extra_qs"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-extra_qs">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>extra_qs</strong></p>
<a className="ansibleOptionLink" href="#parameter-extra_qs" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">dictionary</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>A dict of extra params to pass in.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-ip_address">
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
<div className="ansibleOptionAnchor" id="parameter-new_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-new_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>new_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-new_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Used in <em>cmd=rename</em> and <em>cmd=clone</em>.</p>
<p>The new name.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-password">
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
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-port">
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
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-provider">
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
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-provider/ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-provider/username">
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
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-username">
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
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-where"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-where">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>where</strong></p>
<a className="ansibleOptionLink" href="#parameter-where" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Used in <em>cmd=move</em>.</p>
<p>The movement keyword.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-xpath"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-xpath">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>xpath</strong></p>
<a className="ansibleOptionLink" href="#parameter-xpath" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The XPATH.</p>
<p>All newlines are removed from the XPATH to allow for shorter
lines.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-xpath_from"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__parameter-xpath_from">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>xpath_from</strong></p>
<a className="ansibleOptionLink" href="#parameter-xpath_from" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Used in <em>cmd=clone</em>.</p>
<p>The from xpath.</p>
</div></td>
</tr>
</tbody>
</table>

## Notes

<div className="note">

<div className="title">

Note

</div>

\- Panorama is supported. - Check mode is not supported. - PAN-OS
connectivity should be specified using *provider* or the classic PAN-OS
connectivity params (*ip_address*, *username*, *password*, *api_key*,
and *port*). If both are present, then the classic params are ignored.

</div>

## Examples

``` yaml+jinja
- name: Create an address object using set.
  panos_type_cmd:
    provider: '{{ provider }}'
    xpath: |
      /config/devices/entry[@name='localhost.localdomain']
      /vsys/entry[@name='vsys1']
      /address
    element: |
      <entry name="sales-block">
        <ip-netmask>192.168.55.0/24</ip-netmask>
        <description>Address CIDR for sales org</description>
      </entry>

- name: Then rename it.
  panos_type_cmd:
    provider: '{{ provider }}'
    cmd: 'rename'
    xpath: |
      /config/devices/entry[@name='localhost.localdomain']
      /vsys/entry[@name='vsys1']
      /address/entry[@name='sales-block']
    new_name: 'dmz-block'

- name: Show the address object.
  panos_type_cmd:
    provider: '{{ provider }}'
    cmd: 'show'
    xpath: |
      /config/devices/entry[@name='localhost.localdomain']
      /vsys/entry[@name='vsys1']
      /address/entry[@name='dmz-block']
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
<div className="ansibleOptionAnchor" id="return-stdout"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__return-stdout">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>stdout</strong></p>
<a className="ansibleOptionLink" href="#return-stdout" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>output (if any) of the given API command as JSON formatted string</p>
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
<p><span className="ansible-option-sample-bold">Sample:</span> 

```json
{entry: {@name: dmz-block, ip-netmask: 192.168.55.0/24, description: Address CIDR for sales org}}
```

</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-stdout_xml"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_type_cmd_module__return-stdout_xml">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>stdout_xml</strong></p>
<a className="ansibleOptionLink" href="#return-stdout_xml" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>output of the given API command as an XML formatted string</p>
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
role="ansible-rv-sample-value">"\&lt;entry name=dmz-block\&gt;\&lt;ip-netmask\&gt;192.168.55.0/24\&lt;/ip-netmask\&gt;...\&lt;/entry\&gt;"</code></p>
</div></td>
</tr>
</tbody>
</table>

### Authors

- Garfield Lee Freeman (@shinmog)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
