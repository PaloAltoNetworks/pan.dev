orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_cert_gen_ssh_module">

</div>

# paloaltonetworks.panos.panos_cert_gen_ssh module -- generates a self-signed certificate using SSH protocol with SSH key

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_cert_gen_ssh_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_cert_gen_ssh`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- This module generates a self-signed certificate that can be used by
  GlobalProtect client, SSL connector, or
- otherwise. Root certificate must be preset on the system first. This
  module depends on paramiko for ssh.

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
<div className="ansibleOptionAnchor" id="parameter-cert_cn"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_cert_gen_ssh_module__parameter-cert_cn">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>cert_cn</strong></p>
<a className="ansibleOptionLink" href="#parameter-cert_cn" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Certificate CN (common name) embedded in the certificate
signature.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-cert_friendly_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_cert_gen_ssh_module__parameter-cert_friendly_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>cert_friendly_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-cert_friendly_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Human friendly certificate name (not CN but just a friendly
name).</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_cert_gen_ssh_module__parameter-ip_address">
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
<p>IP address (or hostname) of PAN-OS device being configured.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-key_filename"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_cert_gen_ssh_module__parameter-key_filename">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>key_filename</strong></p>
<a className="ansibleOptionLink" href="#parameter-key_filename" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Location of the filename that is used for the auth. Either
<em>key_filename</em> or <em>password</em> is required.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_cert_gen_ssh_module__parameter-password">
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
<p>Password credentials to use for auth. Either <em>key_filename</em> or
<em>password</em> is required.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-rsa_nbits"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_cert_gen_ssh_module__parameter-rsa_nbits">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>rsa_nbits</strong></p>
<a className="ansibleOptionLink" href="#parameter-rsa_nbits" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Number of bits used by the RSA algorithm for the certificate
generation.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">"2048"</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-signed_by"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_cert_gen_ssh_module__parameter-signed_by">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>signed_by</strong></p>
<a className="ansibleOptionLink" href="#parameter-signed_by" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Undersigning authority (CA) that MUST already be presents on the
device.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_cert_gen_ssh_module__parameter-username">
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
<p>User name to use for auth. Default is admin.</p>
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

\- Checkmode is not supported.

</div>

## Examples

``` yaml+jinja
# Generates a new self-signed certificate using ssh
- name: generate self signed certificate
  panos_cert_gen_ssh:
    ip_address: "192.168.1.1"
    username: "admin"
    password: "paloalto"
    cert_cn: "1.1.1.1"
    cert_friendly_name: "test123"
    signed_by: "root-ca"
```

### Authors

- Luigi Mori (@jtschichold), Ivan Bojer (@ivanbojer)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
