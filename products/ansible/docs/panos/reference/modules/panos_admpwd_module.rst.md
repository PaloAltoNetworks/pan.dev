orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_admpwd_module">

</div>

# paloaltonetworks.panos.panos_admpwd module -- change admin password of PAN-OS device using SSH with SSH key

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_admpwd_module_requirements>`
for details.

To use it in a playbook, specify: `paloaltonetworks.panos.panos_admpwd`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- Change the admin password of PAN-OS via SSH using a SSH key for
  authentication.
- Useful for AWS instances where the first login should be done via SSH.

## Requirements

The below requirements are needed on the host that executes this module.

- paramiko

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
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_admpwd_module__parameter-ip_address">
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
<div className="ansibleOptionAnchor" id="parameter-key_filename"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_admpwd_module__parameter-key_filename">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>key_filename</strong></p>
<a className="ansibleOptionLink" href="#parameter-key_filename" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>filename of the SSH Key to use for authentication</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-newpassword"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_admpwd_module__parameter-newpassword">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>newpassword</strong></p>
<a className="ansibleOptionLink" href="#parameter-newpassword" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>password to configure for admin on the PAN-OS device</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_admpwd_module__parameter-username">
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
<p>username for initial authentication</p>
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
# Tries for 10 times to set the admin password of 192.168.1.1 to "secretword"
# via SSH, authenticating using key /tmp/ssh.key
- name: set admin password
  panos_admpwd:
    ip_address: "192.168.1.1"
    username: "admin"
    key_filename: "/tmp/ssh.key"
    newpassword: "secretword"
  register: result
  until: not result|failed
  retries: 10
  delay: 30
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
<div className="ansibleOptionAnchor" id="return-status"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_admpwd_module__return-status">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>status</strong></p>
<a className="ansibleOptionLink" href="#return-status" title="Permalink to this return value"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>success status</p>
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
role="ansible-rv-sample-value">"Last login: Fri Sep 16 11:09:20 2016 from 10.35.34.56.....Configuration committed successfully"</code></p>
</div></td>
</tr>
</tbody>
</table>

### Authors

- Luigi Mori (@jtschichold), Ivan Bojer (@ivanbojer)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
