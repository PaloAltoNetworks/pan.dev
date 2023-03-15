orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_api_key_module">

</div>

# paloaltonetworks.panos.panos_api_key module -- retrieve api_key for username/password combination

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_api_key_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_api_key`.

</div>

<div class="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div class="contents" local="" depth="1">

</div>

## Synopsis

- This module will allow retrieval of the api_key for a given
  username/password

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
<div class="ansibleOptionAnchor" id="parameter-api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__parameter-api_key">
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
<div class="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__parameter-ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__parameter-password">
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
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__parameter-port">
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
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__parameter-provider">
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
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__parameter-provider/ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__parameter-provider/username">
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
<div class="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__parameter-username">
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

\- Panorama is supported. - Checkmode is NOT supported. - PAN-OS
connectivity should be specified using *provider* or the classic PAN-OS
connectivity params (*ip_address*, *username*, *password*, *api_key*,
and *port*). If both are present, then the classic params are ignored.

</div>

## Examples

``` yaml+jinja
- name: retrieve api_key
  panos_api_key:
    provider: '{{ provider }}'
  register: auth

- debug:
    msg: '{{ auth.api_key }}'
```

## Return Values

Common return values are documented `here <common_return_values>`, the
following are the fields unique to this module:

<div class="rst-class">

ansible-option-table

</div>

<table>
<thead>
<tr class="header">
<th>Key</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_api_key_module__return-api_key">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>api_key</strong></p>
<a class="ansibleOptionLink" href="#return-api_key" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>output of the api_key</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<div class="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span class="ansible-option-sample-bold">Sample:</span> <code
class="interpreted-text"
role="ansible-rv-sample-value">"LUFRPT14MW5xOEo1R09KVlBZNnpnemh0VHRBOWl6TGM9bXcwM3JHUGVhRlNiY0dCR0srNERUQT09"</code></p>
</div></td>
</tr>
</tbody>
</table>

### Authors

- Joshua Colson (@freakinhippie)
- Garfield Lee Freeman (@shinmog)

### Collection links

<p class="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
