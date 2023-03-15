orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_export_module">

</div>

# paloaltonetworks.panos.panos_export module -- export file from PAN-OS devices

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_export_module_requirements>`
for details.

To use it in a playbook, specify: `paloaltonetworks.panos.panos_export`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 2.0.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- Export files from PAN-OS device

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python can be obtained from PyPI
  [https://pypi.python.org/pypi/pan-python\\](https://pypi.python.org/pypi/pan-python\)
- pandevice can be obtained from PyPI
  [https://pypi.python.org/pypi/pandevice\\](https://pypi.python.org/pypi/pandevice\)
- xmltodict

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
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-api_key">
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
<div className="ansibleOptionAnchor" id="parameter-application_pcap_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-application_pcap_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>application_pcap_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-application_pcap_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>When <em>category=application-pcap</em>, this can be a blank string,
a packet capture directory name, or a packet capture name. If the value
is either blank or a directory name, a list of directories or packet
capture files will be returned. If the value is a packet capture file
name, the file will be written to <em>filename</em>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-category"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-category">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>category</strong></p>
<a className="ansibleOptionLink" href="#parameter-category" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Element type to export.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"application-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"application-pcap"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"captive-portal-text"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"certificate"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">"configuration"</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"credential-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"credential-coach-text"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"data-filter-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"device-state"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"dlp-pcap"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"file-block-continue-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"file-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"filter-pcap"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"global-protect-portal-custom-help-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"global-protect-portal-custom-home-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"global-protect-portal-custom-login-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"global-protect-portal-custom-welcome-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"mfa-login-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"safe-search-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ssl-cert-status-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ssl-optout-text"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"stats-dump"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"tech-support"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"threat-pcap"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"url-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"url-coach-text"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"virus-block-page"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-certificate_format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-certificate_format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>certificate_format</strong></p>
<a className="ansibleOptionLink" href="#parameter-certificate_format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Format for the certificate.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"pem"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"pkcs10"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"pkcs12"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-certificate_include_keys"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-certificate_include_keys">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>certificate_include_keys</strong></p>
<a className="ansibleOptionLink" href="#parameter-certificate_include_keys" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Whether to include the private key in the export.</p>
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
<div className="ansibleOptionAnchor" id="parameter-certificate_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-certificate_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>certificate_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-certificate_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name of the certificate to export.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-certificate_passphrase"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-certificate_passphrase">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>certificate_passphrase</strong></p>
<a className="ansibleOptionLink" href="#parameter-certificate_passphrase" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Passphrase used to encrypt the certificate and/or private key.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-dlp_password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-dlp_password">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dlp_password</strong></p>
<a className="ansibleOptionLink" href="#parameter-dlp_password" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Password used to decrypt DLP packet capture.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-dlp_pcap_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-dlp_pcap_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dlp_pcap_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-dlp_pcap_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>When <em>category=dlp-pcap</em>, this value can be a blank string, or
a packet capture name. If the value is blank, a list of packet capture
files will be returned. If the value is a packet capture file name, the
file will be written to <em>filename</em>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-filename"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-filename">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>filename</strong></p>
<a className="ansibleOptionLink" href="#parameter-filename" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Local path to output file (if any).</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-filter_pcap_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-filter_pcap_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>filter_pcap_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-filter_pcap_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>When <em>category=filter-pcap</em>, this value can be a blank string,
or a packet capture name. If the value is blank, a list of packet
capture files will be returned. If the value is a packet capture file
name, the file will be written to <em>filename</em>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-ip_address">
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
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-password">
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
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-port">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-provider">
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
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-provider/ip_address">
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
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-provider/username">
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
<div className="ansibleOptionAnchor" id="parameter-threat_pcap_id"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-threat_pcap_id">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>threat_pcap_id</strong></p>
<a className="ansibleOptionLink" href="#parameter-threat_pcap_id" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>When <em>category=threat-pcap</em>, this value is a unique identifier
for the packet capture, and can be obtained from the 'pcap_id' field in
the THREAT log.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-threat_pcap_search_time"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-threat_pcap_search_time">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>threat_pcap_search_time</strong></p>
<a className="ansibleOptionLink" href="#parameter-threat_pcap_search_time" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>When <em>category=threat-pcap</em>, this value is is used to narrow
the search for the 'pcap_id' and is used to set a time window in the
range -5 minutes to +2 hours of the time specified. The search time is
typically set to the **receive_time** field in the THREAT log. The
PAN-OS log time string format is used, for example '2015/01/20
10:51:09'. If the value is not specified, it will be set to the threat
epoch time which is part of the 'pcap_id'.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-threat_pcap_serial"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-threat_pcap_serial">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>threat_pcap_serial</strong></p>
<a className="ansibleOptionLink" href="#parameter-threat_pcap_serial" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>When <em>category=threat-pcap</em>, this value is required when
exporting from Panorama and is used to specify the device to fetch the
packet capture from.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-timeout"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-timeout">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>timeout</strong></p>
<a className="ansibleOptionLink" href="#parameter-timeout" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>When category is set to 'tech-support', 'stats-dump', or
'device-state', the operating can take a while to complete. This is the
maximum amount of time to wait, in seconds.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">600</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__parameter-username">
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

\- Checkmode is NOT supported. - Panorama is supported. - PAN-OS
connectivity should be specified using *provider* or the classic PAN-OS
connectivity params (*ip_address*, *username*, *password*, *api_key*,
and *port*). If both are present, then the classic params are ignored.

</div>

## Examples

``` yaml+jinja
- name: Export configuration
  panos_export:
    provider: '{{ provider }}'
    category: 'configuration'
    filename: 'running-config.xml'

- name: Export application block page
  panos_export:
    provider: '{{ provider }}'
    category: 'application-block-page'
    filename: 'application-block-page.html'

- name: Export tech support (module will wait until file is ready)
  panos_export:
    provider: '{{ provider }}'
    category: 'tech-support'
    filename: 'tech-support.tgz'

- name: Export threat packet capture
  panos_export:
    provider: '{{ provider }}'
    category: 'threat-pcap'
    threat_pcap_id: '1206450340254187521'
    threat_pcap_search_time: '2020/07/20 18:20:19'
    filename: 'threat.pcap'
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
id="ansible_collections.paloaltonetworks.panos.panos_export_module__return-stdout">
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
<p>If the output gives a directory listing, give the listing as JSON
formatted string</p>
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
{'dir-listing': {'file': ['/capture-rx', '/capture-tx', '/capture-fw']}}
```

</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="return-stdout_xml"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_export_module__return-stdout_xml">
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
<p>If the output gives a directory listing, give the listing as XML
formatted string</p>
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
role="ansible-rv-sample-value">"\&lt;dir-listing\&gt;\&lt;file\&gt;/capture-rx\&lt;/file\&gt;\&lt;file\&gt;/capture-tx\&lt;/file\&gt;\&lt;file\&gt;/capture-fw\&lt;/file\&gt;\&lt;/dir-listing\&gt;"</code></p>
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
