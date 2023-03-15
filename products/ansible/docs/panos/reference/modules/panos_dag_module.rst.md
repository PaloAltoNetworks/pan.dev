orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_dag_module">

</div>

# paloaltonetworks.panos.panos_dag module -- Manage a dynamic address group

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_dag_module_requirements>`
for details.

To use it in a playbook, specify: `paloaltonetworks.panos.panos_dag`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div className="contents" local="" depth="1">

</div>

## DEPRECATED

Removed in  
version 3.0.0

Why  
This module's functionality is a subset of
`paloaltonetworks.panos.panos\_address\_group <ansible_collections.paloaltonetworks.panos.panos_address_group_module>`.

Alternative  
Use
`paloaltonetworks.panos.panos\_address\_group <ansible_collections.paloaltonetworks.panos.panos_address_group_module>`
instead.

## Synopsis

- Manage a dynamic address group object in the firewall used for policy
  rules

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
id="ansible_collections.paloaltonetworks.panos.panos_dag_module__parameter-api_key">
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
<p>API key that can be used instead of
<em>username</em>/<em>password</em> credentials.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-commit"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_dag_module__parameter-commit">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>commit</strong></p>
<a className="ansibleOptionLink" href="#parameter-commit" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>commit if changed</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">false</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-dag_match_filter"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_dag_module__parameter-dag_match_filter">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dag_match_filter</strong></p>
<a className="ansibleOptionLink" href="#parameter-dag_match_filter" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>dynamic filter user by the dynamic address group</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-dag_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_dag_module__parameter-dag_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dag_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-dag_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>name of the dynamic address group</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-description"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_dag_module__parameter-description">
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
<p>The description of the object.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-devicegroup"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_dag_module__parameter-devicegroup">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>devicegroup</strong></p>
<a className="ansibleOptionLink" href="#parameter-devicegroup" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The name of the Panorama device group. The group must exist on
Panorama. If device group is not defined it is assumed that we are
contacting a firewall.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_dag_module__parameter-ip_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-ip_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>IP address (or hostname) of PAN-OS device</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-operation"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_dag_module__parameter-operation">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>operation</strong></p>
<a className="ansibleOptionLink" href="#parameter-operation" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The operation to perform Supported values are
<em>add</em>/<em>list</em>/<em>delete</em>.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"add"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"list"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"delete"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_dag_module__parameter-password">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>password</strong></p>
<a className="ansibleOptionLink" href="#parameter-password" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>password for authentication</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-tag_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_dag_module__parameter-tag_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tag_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-tag_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Add administrative tags to the DAG</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_dag_module__parameter-username">
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
<p>username for authentication</p>
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

## Examples

``` yaml+jinja
- name: Create dag
  panos_dag:
    ip_address: "192.168.1.1"
    password: "admin"
    dag_name: "dag-1"
    dag_match_filter: "'aws-tag.aws:cloudformation:logical-id.ServerInstance' and 'instanceState.running'"
    description: 'Add / create dynamic address group to allow access to SaaS Applications'
    operation: 'add'
```

## Status

- This module will be removed in version 3.0.0. *\[deprecated\]*
- For more information see [DEPRECATED](#deprecated).

### Authors

- Luigi Mori (@jtschichold), Ivan Bojer (@ivanbojer), Vinay
  Venkataraghavan (@vinayvenkat)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
