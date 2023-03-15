orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module">

</div>

# paloaltonetworks.panos.panos_commit_push module -- Push running configuration to managed devices.

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_commit_push_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_commit_push`.

</div>

<div class="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 2.0.0

<div class="contents" local="" depth="1">

</div>

## Synopsis

- Module that will push the running Panorama configuration to managed
  devices.
- The new configuration will become active immediately.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-os-python

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
<div class="ansibleOptionAnchor" id="parameter-admins"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-admins">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>admins</strong></p>
<a class="ansibleOptionLink" href="#parameter-admins" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Push the configuration made by a specific administrator. (PAN-OS
10.2+)</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-description"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-description">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>description</strong></p>
<a class="ansibleOptionLink" href="#parameter-description" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>A description of the commit.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-devices"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-devices">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>devices</strong></p>
<a class="ansibleOptionLink" href="#parameter-devices" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Push the configuration to specific device serial numbers.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-force_template_values"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-force_template_values">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>force_template_values</strong></p>
<a class="ansibleOptionLink" href="#parameter-force_template_values" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Force template values to override local settings.</p>
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
<div class="ansibleOptionAnchor" id="parameter-include_template"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-include_template">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>include_template</strong></p>
<a class="ansibleOptionLink" href="#parameter-include_template" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Include device group reference templates.</p>
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
<div class="ansibleOptionAnchor" id="parameter-name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-name">
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
<p>The name of the configuration element to push.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-provider">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>provider</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">dictionary</span> / <span
class="ansible-option-required">required</span></p>
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
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-provider/ip_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/ip_address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The IP address or hostname of the PAN-OS device being configured.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-provider/username">
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
<div class="ansibleOptionAnchor" id="parameter-style"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-style">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>style</strong></p>
<a class="ansibleOptionLink" href="#parameter-style" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The type of configuration element to push.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"device group"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"template"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"template stack"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"log collector group"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"wildfire appliance"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"wildfire cluster"</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-sync"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__parameter-sync">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>sync</strong></p>
<a class="ansibleOptionLink" href="#parameter-sync" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Wait for the commit to complete.</p>
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
</tbody>
</table>

## Examples

``` yaml+jinja
- name: push device group configs
  panos_commit_push:
    provider: '{{ credentials }}'
    style: 'device group'
    name: 'Internet Edge Firewalls'
    description: 'Update ECMP routing'

- name: push template configs and force values
  panos_commit_push:
    provider: '{{ credentials }}'
    style: 'template'
    name: 'APAC Regional Template'
    force_template_values: True

- name: push log collector group configs
  panos_commit_push:
    provider: '{{ credentials }}'
    style: 'log collector group'
    name: 'LatAm Collector Group'

- name: push to multiple devices
  panos_commit_push:
    provider: '{{ credentials }}'
    style: 'device group'
    name: 'Partner DMZ Firewalls'
    devices:
      - 0001234567890
      - 0987654321000
      - 1001001F0F000

- name: push to multiple device groups
  panos_commit_push:
    provider: '{{ credentials }}'
    style: 'device group'
    name: '{{ item }}'
    sync: False
  loop:
    - Production Firewalls
    - Staging Firewalls
    - Development Firewalls

- name: push admin-specific changes to a device group
  panos_commit_push:
    provider: "{{ credentials }}"
    style: 'device group'
    name: 'EMEA_Device_Group'
    admins:
      - 'ansible-admin'
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
<div class="ansibleOptionAnchor" id="return-jobid"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_push_module__return-jobid">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>jobid</strong></p>
<a class="ansibleOptionLink" href="#return-jobid" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">integer</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The ID of the PAN-OS commit job.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
always</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<div class="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span class="ansible-option-sample-bold">Sample:</span> <code
class="interpreted-text" role="ansible-rv-sample-value">49152</code></p>
</div></td>
</tr>
</tbody>
</table>

### Authors

- Robert Hagen (@stealthllama)

### Collection links

<p class="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
