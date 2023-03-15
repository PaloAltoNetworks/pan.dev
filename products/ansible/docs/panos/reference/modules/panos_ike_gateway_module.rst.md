orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module">

</div>

# paloaltonetworks.panos.panos_ike_gateway module -- Manage IKE gateway on the firewall with subset of settings.

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_ike_gateway`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- Use this to manage or define a gateway, including the configuration
  information necessary to perform Internet Key Exchange (IKE) protocol
  negotiation with a peer gateway. This is the Phase 1 portion of the
  IKE/IPSec VPN setup.

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
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-api_key">
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
<div className="ansibleOptionAnchor" id="parameter-commit"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-commit">
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
<p><strong>Deprecated</strong></p>
<p>Please use <code className="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_commit\_firewall &lt;ansible_collections.paloaltonetworks.panos.panos_commit_firewall_module&gt;</code>,
<code className="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_commit\_panorama &lt;ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module&gt;</code>,
<code className="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_commit\_push &lt;ansible_collections.paloaltonetworks.panos.panos_commit_push_module&gt;</code>
instead.</p>
<hr/>
<p>Commit changes after creating object. If <em>ip_address</em> is a
Panorama device, and <em>device_group</em> or <em>template</em> are also
set, perform a commit to Panorama and a commit-all to the device
group/template.</p>
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
<div className="ansibleOptionAnchor" id="parameter-dead_peer_detection_interval"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-dead_peer_detection_interval">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dead_peer_detection_interval</strong></p>
<a className="ansibleOptionLink" href="#parameter-dead_peer_detection_interval" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Time in seconds to check for a dead peer.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">99</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-dead_peer_detection_retry"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-dead_peer_detection_retry">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dead_peer_detection_retry</strong></p>
<a className="ansibleOptionLink" href="#parameter-dead_peer_detection_retry" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Retry attempts before peer is marked dead.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">10</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-enable_dead_peer_detection"></div>
<div className="ansibleOptionAnchor" id="parameter-dead_peer_detection"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-dead_peer_detection">
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-enable_dead_peer_detection">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>enable_dead_peer_detection</strong></p>
<a className="ansibleOptionLink" href="#parameter-enable_dead_peer_detection" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-aliases">aliases:
dead_peer_detection</span></p>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>True to enable Dead Peer Detection on the gateway.</p>
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
<div className="ansibleOptionAnchor" id="parameter-enable_fragmentation"></div>
<div className="ansibleOptionAnchor" id="parameter-fragmentation"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-enable_fragmentation">
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-fragmentation">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>enable_fragmentation</strong></p>
<a className="ansibleOptionLink" href="#parameter-enable_fragmentation" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-aliases">aliases:
fragmentation</span></p>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>True to enable IKE fragmentation</p>
<p>Incompatible with pre-shared keys, or 'aggressive' exchange mode</p>
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
<div className="ansibleOptionAnchor" id="parameter-enable_liveness_check"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-enable_liveness_check">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>enable_liveness_check</strong></p>
<a className="ansibleOptionLink" href="#parameter-enable_liveness_check" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Enable sending empty information liveness check message.</p>
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
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-enable_nat_traversal"></div>
<div className="ansibleOptionAnchor" id="parameter-nat_traversal"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-enable_nat_traversal">
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-nat_traversal">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>enable_nat_traversal</strong></p>
<a className="ansibleOptionLink" href="#parameter-enable_nat_traversal" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-aliases">aliases:
nat_traversal</span></p>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>True to NAT Traversal mode</p>
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
<div className="ansibleOptionAnchor" id="parameter-enable_passive_mode"></div>
<div className="ansibleOptionAnchor" id="parameter-passive_mode"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-enable_passive_mode">
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-passive_mode">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>enable_passive_mode</strong></p>
<a className="ansibleOptionLink" href="#parameter-enable_passive_mode" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-aliases">aliases: passive_mode</span></p>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>True to have the firewall only respond to IKE connections and never
initiate them.</p>
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
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-gathered_filter"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-gathered_filter">
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
<div className="ansibleOptionAnchor" id="parameter-ikev1_crypto_profile"></div>
<div className="ansibleOptionAnchor" id="parameter-crypto_profile_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-crypto_profile_name">
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-ikev1_crypto_profile">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>ikev1_crypto_profile</strong></p>
<a className="ansibleOptionLink" href="#parameter-ikev1_crypto_profile" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-aliases">aliases:
crypto_profile_name</span></p>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Crypto profile for IKEv1.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"default"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ikev1_exchange_mode"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-ikev1_exchange_mode">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ikev1_exchange_mode</strong></p>
<a className="ansibleOptionLink" href="#parameter-ikev1_exchange_mode" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The IKE exchange mode to use</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"auto"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"main"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"aggressive"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ikev2_crypto_profile"></div>
<div className="ansibleOptionAnchor" id="parameter-crypto_profile_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-crypto_profile_name">
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-ikev2_crypto_profile">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>ikev2_crypto_profile</strong></p>
<a className="ansibleOptionLink" href="#parameter-ikev2_crypto_profile" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-aliases">aliases:
crypto_profile_name</span></p>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Crypto profile for IKEv2.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"default"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-interface"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-interface">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>interface</strong></p>
<a className="ansibleOptionLink" href="#parameter-interface" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Specify the outgoing firewall interface to the VPN tunnel.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"ethernet1/1"</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-ip_address">
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
<div className="ansibleOptionAnchor" id="parameter-liveness_check_interval"></div>
<div className="ansibleOptionAnchor" id="parameter-liveness_check"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-liveness_check">
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-liveness_check_interval">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>liveness_check_interval</strong></p>
<a className="ansibleOptionLink" href="#parameter-liveness_check_interval" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-aliases">aliases:
liveness_check</span></p>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Delay interval before sending probing packets (in seconds).</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">5</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-local_id_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-local_id_type">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>local_id_type</strong></p>
<a className="ansibleOptionLink" href="#parameter-local_id_type" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Define the format of the identification of the local gateway.</p>
<p>ipaddr: IP address</p>
<p>fqdn: FQDN (hostname)</p>
<p>ufqdn: User FQDN (email address)</p>
<p>keyid: Key ID (binary format ID string in hex)</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ipaddr"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"fqdn"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ufqdn"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"keyid"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"dn"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-local_id_value"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-local_id_value">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>local_id_value</strong></p>
<a className="ansibleOptionLink" href="#parameter-local_id_value" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Define the value for the identification of the local gateway.</p>
<p>Required when <em>local_id_type</em> is set.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-local_ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-local_ip_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>local_ip_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-local_ip_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Bind IKE gateway to the specified interface IP address. Only needed
if 'interface' has multiple IP addresses associated with it.</p>
<p>It should include the mask, such as '192.168.1.1/24'</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-local_ip_address_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-local_ip_address_type">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>local_ip_address_type</strong></p>
<a className="ansibleOptionLink" href="#parameter-local_ip_address_type" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The type of the bound interface IP address.</p>
<p>ip: Specify exact IP address if interface has multiple addresses.</p>
<p>floating-ip: Floating IP address in HA Active-Active
configuration.</p>
<p>Required when 'local_ip_address' is set.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ip"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"floating-ip"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-name">
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
<p>Name for the profile.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-password">
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
<div className="ansibleOptionAnchor" id="parameter-peer_id_check"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-peer_id_check">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>peer_id_check</strong></p>
<a className="ansibleOptionLink" href="#parameter-peer_id_check" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Type of checking to do on peer_id.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"exact"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"wildcard"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-peer_id_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-peer_id_type">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>peer_id_type</strong></p>
<a className="ansibleOptionLink" href="#parameter-peer_id_type" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Define the format of the identification of the peer gateway.</p>
<p>ipaddr: IP address</p>
<p>fqdn: FQDN (hostname)</p>
<p>ufqdn: User FQDN (email address)</p>
<p>keyid: Key ID (binary format ID string in hex)</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ipaddr"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"fqdn"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ufqdn"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"keyid"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"dn"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-peer_id_value"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-peer_id_value">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>peer_id_value</strong></p>
<a className="ansibleOptionLink" href="#parameter-peer_id_value" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Define the value for the identification of the peer gateway.</p>
<p>Required when <em>peer_id_type</em> is set.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-peer_ip_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-peer_ip_type">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>peer_ip_type</strong></p>
<a className="ansibleOptionLink" href="#parameter-peer_ip_type" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>IP or dynamic.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">"ip"</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"dynamic"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"fqdn"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-peer_ip_value"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-peer_ip_value">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>peer_ip_value</strong></p>
<a className="ansibleOptionLink" href="#parameter-peer_ip_value" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>IPv4 address of the peer gateway.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"127.0.0.1"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-port">
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
<div className="ansibleOptionAnchor" id="parameter-pre_shared_key"></div>
<div className="ansibleOptionAnchor" id="parameter-psk"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-pre_shared_key">
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-psk">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>pre_shared_key</strong></p>
<a className="ansibleOptionLink" href="#parameter-pre_shared_key" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-aliases">aliases: psk</span></p>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Specify pre-shared key.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"CHANGEME"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-provider">
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
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-provider/ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-provider/username">
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
<div className="ansibleOptionAnchor" id="parameter-state"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-state">
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
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-template"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-template">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>template</strong></p>
<a className="ansibleOptionLink" href="#parameter-template" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>(Panorama only) The template this operation should target. Mutually
exclusive with <em>template_stack</em>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-template_stack"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-template_stack">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>template_stack</strong></p>
<a className="ansibleOptionLink" href="#parameter-template_stack" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>(Panorama only) The template stack this operation should target.
Mutually exclusive with <em>template</em>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-username">
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
<div className="ansibleOptionAnchor" id="parameter-version"></div>
<div className="ansibleOptionAnchor" id="parameter-protocol_version"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-protocol_version">
<div
id="ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module__parameter-version">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>version</strong></p>
<a className="ansibleOptionLink" href="#parameter-version" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-aliases">aliases:
protocol_version</span></p>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Specify the priority for Diffie-Hellman (DH) groups.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ikev1"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">"ikev2"</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ikev2-preferred"</code></li>
</ul>
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
and *port*). If both are present, then the classic params are ignored. -
If the PAN-OS to be configured is Panorama, either *template* or
*template_stack* must be specified.

</div>

## Examples

``` yaml+jinja
- name: Add IKE gateway config to the firewall
  panos_ike_gateway:
    provider: '{{ provider }}'
    state: 'present'
    name: 'IKEGW-Ansible'
    version: 'ikev2'
    interface: 'ethernet1/1'
    enable_passive_mode: True
    enable_liveness_check: True
    liveness_check_interval: '5'
    peer_ip_value: '1.2.3.4'
    pre_shared_key: 'CHANGEME'
    ikev2_crypto_profile: 'IKE-Ansible'
    commit: False

- name: Create IKE gateway (dynamic)
  panos_ike_gateway:
    provider: '{{ device }}'
    name: 'test-dynamic'
    interface: 'ethernet1/1'
    peer_ip_type: dynamic
    pre_shared_key: 'CHANGEME'
    commit: False
```

### Authors

- Ivan Bojer (@ivanbojer)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
