orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module">

</div>

# paloaltonetworks.panos.panos_http_profile module -- Manage http server profiles.

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_http_profile_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_http_profile`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- Manages http server profiles.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python
- pandevice \>= 0.11.1
- PAN-OS \>= 8.0

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
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-api_key">
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
<div className="ansibleOptionAnchor" id="parameter-auth_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-auth_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>auth_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-auth_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-auth_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-auth_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>auth_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-auth_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-auth_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-auth_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>auth_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-auth_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-config_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-config_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>config_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-config_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-config_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-config_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>config_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-config_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-config_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-config_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>config_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-config_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-data_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-data_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>data_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-data_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-data_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-data_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>data_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-data_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-data_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-data_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>data_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-data_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-device_group"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-device_group">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>device_group</strong></p>
<a className="ansibleOptionLink" href="#parameter-device_group" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>(Panorama only) The device group the operation should target.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"shared"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-gathered_filter"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-gathered_filter">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gathered_filter</strong></p>
<a className="ansibleOptionLink" href="#parameter-gathered_filter" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>When <em>state=gathered</em>.</p>
<p>An advanced filtering option to filter results returned from
PAN-OS.</p>
<p>Refer to the guide discussing <em>gathered_filter</em> for more
information.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-gtp_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-gtp_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gtp_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-gtp_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-gtp_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-gtp_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gtp_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-gtp_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-gtp_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-gtp_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gtp_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-gtp_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-hip_match_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-hip_match_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>hip_match_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-hip_match_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-hip_match_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-hip_match_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>hip_match_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-hip_match_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-hip_match_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-hip_match_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>hip_match_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-hip_match_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-ip_address">
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
<div className="ansibleOptionAnchor" id="parameter-iptag_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-iptag_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>iptag_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-iptag_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 9.0+.</p>
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-iptag_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-iptag_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>iptag_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-iptag_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 9.0+.</p>
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-iptag_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-iptag_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>iptag_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-iptag_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 9.0+.</p>
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>name</strong></p>
<a className="ansibleOptionLink" href="#parameter-name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name of the profile.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-password">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-port">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-provider">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-provider/ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-provider/username">
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
<div className="ansibleOptionAnchor" id="parameter-sctp_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-sctp_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>sctp_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-sctp_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 8.1+.</p>
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-sctp_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-sctp_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>sctp_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-sctp_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 8.1+.</p>
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-sctp_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-sctp_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>sctp_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-sctp_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 8.1+.</p>
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-state"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-state">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>state</strong></p>
<a className="ansibleOptionLink" href="#parameter-state" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The state.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">"present"</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"absent"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"replaced"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"merged"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"deleted"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"gathered"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-system_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-system_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>system_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-system_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-system_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-system_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>system_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-system_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-system_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-system_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>system_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-system_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-tag_registration"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-tag_registration">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tag_registration</strong></p>
<a className="ansibleOptionLink" href="#parameter-tag_registration" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The server should have user-ID agent running in order for tag
registration to work.</p>
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
<div className="ansibleOptionAnchor" id="parameter-threat_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-threat_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>threat_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-threat_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-threat_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-threat_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>threat_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-threat_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-threat_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-threat_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>threat_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-threat_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-traffic_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-traffic_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>traffic_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-traffic_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-traffic_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-traffic_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>traffic_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-traffic_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-traffic_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-traffic_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>traffic_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-traffic_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-tunnel_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-tunnel_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tunnel_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-tunnel_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-tunnel_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-tunnel_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tunnel_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-tunnel_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-tunnel_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-tunnel_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tunnel_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-tunnel_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-url_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-url_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>url_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-url_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-url_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-url_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>url_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-url_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-url_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-url_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>url_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-url_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-user_id_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-user_id_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>user_id_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-user_id_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-user_id_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-user_id_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>user_id_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-user_id_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-user_id_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-user_id_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>user_id_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-user_id_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URI format for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-username">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-vsys">
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
role="ansible-option-default">"shared"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-wildfire_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-wildfire_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>wildfire_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-wildfire_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name for custom config format.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-wildfire_payload"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-wildfire_payload">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>wildfire_payload</strong></p>
<a className="ansibleOptionLink" href="#parameter-wildfire_payload" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Payload for custom config format.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-wildfire_uri_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_profile_module__parameter-wildfire_uri_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>wildfire_uri_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-wildfire_uri_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URI format for custom config format.</p>
</div></td>
</tr>
</tbody>
</table>

## Notes

<div className="note">

<div className="title">

Note

</div>

\- Panorama is supported. - Check mode is supported. - PAN-OS
connectivity should be specified using *provider* or the classic PAN-OS
connectivity params (*ip_address*, *username*, *password*, *api_key*,
and *port*). If both are present, then the classic params are ignored.

</div>

## Examples

``` yaml+jinja
# Create a profile
- name: Create http profile
  panos_http_profile:
    provider: '{{ provider }}'
    name: 'my-profile'
    tag_registration: true
```

### Authors

- Garfield Lee Freeman (@shinmog)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
