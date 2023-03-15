orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module">

</div>

# paloaltonetworks.panos.panos_commit_panorama module -- Commit Panorama's candidate configuration.

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_commit_panorama`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 2.0.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- Module that will commit the candidate configuration on a Panorama
  instance.
- The new configuration will become active immediately.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-os-python

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
<div className="ansibleOptionAnchor" id="parameter-admins"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-admins">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>admins</strong></p>
<a className="ansibleOptionLink" href="#parameter-admins" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Commit only the changes made by specified list of administrators.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-description"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-description">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>description</strong></p>
<a className="ansibleOptionLink" href="#parameter-description" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>A description of the commit.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-device_groups"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-device_groups">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>device_groups</strong></p>
<a className="ansibleOptionLink" href="#parameter-device_groups" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Commit changes made to these device groups.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-exclude_device_and_network"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-exclude_device_and_network">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>exclude_device_and_network</strong></p>
<a className="ansibleOptionLink" href="#parameter-exclude_device_and_network" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Exclude network and device configuration changes.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">false</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-exclude_shared_objects"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-exclude_shared_objects">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>exclude_shared_objects</strong></p>
<a className="ansibleOptionLink" href="#parameter-exclude_shared_objects" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Exclude shared object configuration changes.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">false</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-force"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-force">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>force</strong></p>
<a className="ansibleOptionLink" href="#parameter-force" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Force the commit.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">false</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-log_collector_groups"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-log_collector_groups">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>log_collector_groups</strong></p>
<a className="ansibleOptionLink" href="#parameter-log_collector_groups" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Commit changes made to these log collector groups.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-log_collectors"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-log_collectors">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>log_collectors</strong></p>
<a className="ansibleOptionLink" href="#parameter-log_collectors" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Commit changes made to these log collectors.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-provider">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>provider</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">dictionary</span> / <span
className="ansible-option-required">required</span></p>
<p><span className="ansible-option-versionadded">added in
paloaltonetworks.panos 1.0.0</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>A dict object containing connection details.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-provider/api_key">
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
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-provider/ip_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/ip_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The IP address or hostname of the PAN-OS device being configured.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-provider/password">
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
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-provider/port">
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
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/serial_number"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-provider/serial_number">
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
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-provider/username">
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
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-sync"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-sync">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>sync</strong></p>
<a className="ansibleOptionLink" href="#parameter-sync" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Wait for the commit to complete.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">false</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">true</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-template_stacks"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-template_stacks">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>template_stacks</strong></p>
<a className="ansibleOptionLink" href="#parameter-template_stacks" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Commit changes made to these template stacks.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-templates"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-templates">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>templates</strong></p>
<a className="ansibleOptionLink" href="#parameter-templates" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Commit changes made to these templates.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-wildfire_appliances"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-wildfire_appliances">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>wildfire_appliances</strong></p>
<a className="ansibleOptionLink" href="#parameter-wildfire_appliances" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Commit changes made to these WildFire appliances.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-wildfire_clusters"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__parameter-wildfire_clusters">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>wildfire_clusters</strong></p>
<a className="ansibleOptionLink" href="#parameter-wildfire_clusters" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Commit changes made to these WildFire clusters.</p>
</div></td>
</tr>
</tbody>
</table>

## Examples

``` yaml+jinja
- name: commit candidate configs on panorama
  panos_commit_panorama:
    provider: '{{ credentials }}'

- name: commit changes by specified admins on panorama
  panos_commit_panorama:
    provider: '{{ credentials }}'
    admins: ['netops','secops','cloudops']
    description: 'Saturday change window'

- name: commit specific device group changes on panorama
  panos_commit_panorama:
    provider: '{{ credentials }}'
    device_groups: ['production','development','testing']

- name: commit log collector group changes on panorama
  panos_commit_panorama:
    provider: '{{ credentials }}'
    log_collector_groups: ['us-west-loggers','apac-loggers','latam-loggers']
    description: 'Log collector changes'
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
<div className="ansibleOptionAnchor" id="return-details"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__return-details">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>details</strong></p>
<a className="ansibleOptionLink" href="#return-details" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Commit job completion messages.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-returned-bold">Returned:</span> on
success</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<div className="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text"
role="ansible-rv-sample-value">"Configuration committed successfully"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-jobid"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module__return-jobid">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>jobid</strong></p>
<a className="ansibleOptionLink" href="#return-jobid" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The ID of the PAN-OS commit job.</p>
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
<p><span className="ansible-option-sample-bold">Sample:</span> <code
className="interpreted-text" role="ansible-rv-sample-value">49152</code></p>
</div></td>
</tr>
</tbody>
</table>

### Authors

- Robert Hagen (@stealthllama)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
