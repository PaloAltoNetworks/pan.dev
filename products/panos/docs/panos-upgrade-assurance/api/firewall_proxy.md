---
id: firewall_proxy
sidebar_label: firewall_proxy module
title: firewall_proxy
hide_title: true
custom_edit_url: null
---
## class `FirewallProxy`

A proxy to the [Firewall][fw] class.

Proxy in this case means that this class is between the *high level*
[`CheckFirewall`](/panos/docs/panos-upgrade-assurance/api/check_firewall#class-checkfirewall) class and the
[`Firewall`][fw] class representing the device itself.
There is no inheritance between the [`Firewall`][fw] and [`FirewallProxy`][fwp] classes, but an object of the latter one
has access to all attributes of the former.

All interaction with a device are read-only. Therefore, a less privileged user can be used.

All methods starting with `is_` check the state, they do not present any data besides simple `boolean` values.

All methods starting with `get_` fetch data from a device by running a command and parsing the output.
The return data type can be different depending on what kind of information is returned from a device.

[fw]: https://pan-os-python.readthedocs.io/en/latest/module-firewall.html#module-panos.firewall
[fwp]: /panos/docs/panos-upgrade-assurance/api/firewall_proxy

__Attributes__


- `_fw (Firewall)`: an object of the [`Firewall`][fw] class.

### `FirewallProxy.__init__`

```python
def __init__(firewall: Optional[Firewall] = None, **kwargs)
```

Constructor of the [`FirewallProxy`][fwp] class.

Main purpose of this constructor is to store an object of the [`Firewall`][fw] class. This can be done in two ways:

1. by passing an existing object
1. by passing credentials and address of a device (all parameters used byt the [`Firewall`][fw] class constructor
    are supported).

:::tip
Please note that positional arguments are not supported.
:::

__Parameters__


- __firewall__ (`Firewall`): An existing object of the [`Firewall`][fw] class.
- __**kwargs__: Used to pass keyword arguments that will be used directly in the [`Firewall`][fw] class constructor.

__Raises__


- `WrongNumberOfArgumentsException`: Raised when a mixture of arguments is passed (for example a [`Firewall`][fw]
    object and firewall credentials).

### `FirewallProxy.__getattr__`

```python
def __getattr__(attr)
```

An overload of the default `__getattr__()` method.

Its main purpose is to provide backwards compatibility to the old [`FirewallProxy`][fwp] class structure. It's called
when a requested attribute does not exist in the [`FirewallProxy`][fwp] class object, and it tries to fetch it
from the [`Firewall`][fw] object stored within the [`FirewallProxy`][fwp] object.

From the [`FirewallProxy`][fwp] object's interface perspective, this provides the same behaviour as if the
[`FirewallProxy`][fwp] would still inherit from the [`Firewall`][fw] class.

### `FirewallProxy.op_parser`

```python
def op_parser(cmd: str,
              cmd_in_xml: Optional[bool] = False,
              return_xml: Optional[bool] = False) -> Union[dict, ET.Element]
```

Execute a command on node, parse, and return response.

This is just a wrapper around the
[`Firewall.op()`](https://pan-os-python.readthedocs.io/en/latest/module-firewall.html#panos.firewall.Firewall.op) method.
It additionally does basic error handling and tries to extract the actual device response.

__Parameters__


- __cmd__ (`str`): The actual XML API command to be run on the device. Can be either a free form or an XML formatted command.
- __cmd_in_xml__ (`bool`): (defaults to `False`) Set to `True` if the command is XML-formatted.
- __return_xml__ (`bool`): (defaults to `False`) When set to `True`, the return data is an             [`XML object`](https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.Element)
    instead of a Python dictionary.

__Raises__


- `CommandRunFailedException`: An exception is raised if the command run status returned by a device is not successful.
- `MalformedResponseException`: An exception is raised when a response is not parsable, no `result` element is found in the
    XML response.

__Returns__

`dict, xml.etree.ElementTree.Element`: The actual command output. A type is defined by the `return_xml` parameter.

### `FirewallProxy.get_parser`

```python
def get_parser(xml_path: str,
               return_xml: Optional[bool] = False) -> Union[dict, ET.Element]
```

Execute a configuration get command on a node, parse and return response.

This is a wrapper around the
[`pan.xapi.get()` method](https://github.com/kevinsteves/pan-python/blob/master/doc/pan.xapi.rst#getxpathnone)
from the [`pan-python` package](https://pypi.org/project/pan-python/).
It does a basic error handling and tries to extract the actual response.

__Parameters__


- __xml_path__ (`str`): An XPATH pointing to the config to be retrieved.
- __return_xml__ (`bool`): (defaults to `False`) When set to `True`, the return data is an             [`XML object`](https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.ElementTree.Element)
    instead of a Python dictionary.

__Raises__


- `GetXpathConfigFailedException`: This exception is raised when XPATH is not provided or does not exist.

__Returns__

`dict, xml.etree.ElementTree.Element`: The actual command output. A type is defined by the `return_xml` parameter.

### `FirewallProxy.is_pending_changes`

```python
def is_pending_changes() -> bool
```

Get information if there is a candidate configuration pending to be committed.

The actual API command run is `check pending-changes`.

__Returns__


`bool`: `True` when there are pending changes, `False` otherwise.

### `FirewallProxy.is_full_commit_required`

```python
def is_full_commit_required() -> bool
```

Get information if a full commit is required, for example, after loading a named config.

The actual API command run is `check full-commit-required`.

__Returns__


`bool`: `True` when a full commit is required, `False` otherwise.

### `FirewallProxy.is_panorama_configured`

```python
def is_panorama_configured() -> bool
```

Check if a device is configured with Panorama.

The actual API command run is `show panorama-status`.

__Returns__


`bool`: `True` when Panorama IPs are configured, `False` otherwise.

### `FirewallProxy.is_panorama_connected`

```python
def is_panorama_connected() -> bool
```

Get Panorama connectivity status.

The actual API command run is `show panorama-status`.

An output of this command is usually a string. This method is responsible for parsing this string and trying to extract
information if at least one of the Panoramas configured is connected.

Since the API response is a string (that we need to parse) this method expects a strict format. For single Panorama this
is:

```yaml showLineNumbers title="Example - single Panorama"
    Panorama Server 1 : 1.2.3.4
        Connected     : no
        HA state      : disconnected
```

For two Panoramas (HA pair for example) those are just two blocks:

```yaml showLineNumbers title="Example - HA Panorama"
    Panorama Server 1 : 1.2.3.4
        Connected     : no
        HA state      : disconnected

    Panorama Server 2 : 5.6.7.8
        Connected     : yes
        HA state      : disconnected
```

If none of this formats is met, `MalformedResponseException` exception is thrown.

__Raises__


- `PanoramaConfigurationMissingException`: Exception being raised when this check is run against a device with no Panorama
    configured.
- `MalformedResponseException`: Exception being raised when response from device does not meet required format.


__Returns__


`bool`: `True` when connection is up, `False` otherwise.

### `FirewallProxy.get_ha_configuration`

```python
def get_ha_configuration() -> dict
```

Get high-availability configuration status.

The actual API command is `show high-availability state`.

__Returns__


`dict`: Information about HA pair and its status as retrieved from the current (local) device.

```python showLineNumbers title="Sample output"
{
    'enabled': 'yes',
    'group': {
        'link-monitoring': {
            'enabled': 'yes',
            'failure-condition': 'any',
            'groups': None
        },
        'local-info': {
            'DLP': 'Match',
            'VMS': 'Match',
            'active-passive': {
                'monitor-fail-holddown': '1',
                'passive-link-state': 'shutdown'
            },
            'addon-master-holdup': '500',
            'app-compat': 'Match',
            'app-version': 'xxxx-yyyy',
            'av-compat': 'Match',
            'av-version': '0',
            'build-compat': 'Match',
            'build-rel': '10.2.3',
            'gpclient-compat': 'Match',
            'gpclient-version': 'Not Installed',
            'ha1-encrypt-enable': 'no',
            'ha1-encrypt-imported': 'no',
            'ha1-gateway': '10.0.0.1',
            'ha1-ipaddr': '10.0.0.10/24',
            'ha1-link-mon-intv': '3000',
            'ha1-macaddr': 'xx:xx:xx:xx:xx:xx',
            'ha1-port': 'management',
            'ha2-gateway': '10.0.3.1',
            'ha2-ipaddr': '10.0.3.10/24',
            'ha2-macaddr': 'xx:xx:xx:xx:xx:xx',
            'ha2-port': 'ethernet1/3',
            'heartbeat-interval': '10000',
            'hello-interval': '10000',
            'iot-compat': 'Match',
            'iot-version': 'yy-zzz',
            'max-flaps': '3',
            'mgmt-ip': '10.0.0.10/24',
            'mgmt-ipv6': None,
            'mode': 'Active-Passive',
            'monitor-fail-holdup': '0',
            'nonfunc-flap-cnt': '0',
            'platform-model': 'PA-VM',
            'preempt-flap-cnt': '0',
            'preempt-hold': '1',
            'preemptive': 'no',
            'priority': '100',
            'promotion-hold': '20000',
            'state': 'passive',
            'state-duration': '3675',
            'state-sync': 'Complete',
            'state-sync-type': 'ip',
            'threat-compat': 'Match',
            'threat-version': 'xxxx-yyyy',
            'url-compat': 'Mismatch',
            'url-version': '0000.00.00.000',
            'version': '1',
            'vm-license': 'VM-300',
            'vm-license-compat': 'Match',
            'vm-license-type': 'vm300',
            'vpnclient-compat': 'Match',
            'vpnclient-version': 'Not Installed'
        },
        'mode': 'Active-Passive',
        'path-monitoring': {
            'enabled': 'yes',
            'failure-condition': 'any',
            'virtual-router': None,
            'virtual-wire': None,
            'vlan': None
        },
        'peer-info': {
            'DLP': '3.0.2',
            'VMS': '3.0.3',
            'app-version': 'xxxx-yyyy',
            'av-version': '0',
            'build-rel': '10.2.3',
            'conn-ha1': {
                'conn-desc': 'heartbeat status',
                'conn-primary': 'yes',
                'conn-status': 'up'
            },
            'conn-ha2': {
                'conn-desc': 'link status',
                'conn-ka-enbled': 'no',
                'conn-primary': 'yes',
                'conn-status': 'up'
            },
            'conn-status': 'up',
            'gpclient-version': 'Not Installed',
            'ha1-ipaddr': '10.0.0.11',
            'ha1-macaddr': 'xx:xx:xx:xx:xx:xx',
            'ha2-ipaddr': '10.0.3.11',
            'ha2-macaddr': 'xx:xx:xx:xx:xx:xx',
            'iot-version': 'yy-zzz',
            'mgmt-ip': '10.0.0.11/24',
            'mgmt-ipv6': None,
            'mode': 'Active-Passive',
            'platform-model': 'PA-VM',
            'preemptive': 'no',
            'priority': '100',
            'state': 'active',
            'state-duration': '3680',
            'threat-version': 'xxxx-yyyy',
            'url-version': '20230126.20142',
            'version': '1',
            'vm-license': 'VM-300',
            'vm-license-type': 'vm300',
            'vpnclient-version': 'Not Installed'
        },
        'running-sync': 'synchronized',
        'running-sync-enabled': 'yes'
    }
}
```

### `FirewallProxy.get_nics`

```python
def get_nics() -> dict
```

Get status of the configured network interfaces.

The actual API command run is `show interface "hardware"`.

__Raises__


- `MalformedResponseException`: Exception when no `hw` entry is available in the response.

__Returns__


`dict`: Status of the configured network interfaces.

```python showLineNumbers title="Sample output"
{
    'ethernet1/1': 'down',
    'ethernet1/2': 'down',
    'ethernet1/3': 'up'
}
```

### `FirewallProxy.get_licenses`

```python
def get_licenses() -> dict
```

Get device licenses.

The actual API command is `request license info`.

__Raises__


- `DeviceNotLicensedException`: Exception thrown when there is no information about licenses, most probably because the
    device is not licensed.

__Returns__


`dict`: Licenses available on a device.

```python showLineNumbers title="Sample output"
{
    'AutoFocus Device License': {
        'authcode': 'Snnnnnnn',
        'base-license-name': 'PA-VM',
        'description': 'AutoFocus Device License',
        'expired': 'yes',
        'expires': 'September 25, 2010',
        'feature': 'AutoFocus Device License',
        'issued': 'January 12, 2010',
        'serial': 'xxxxxxxxxxxxxxxx'
    },
    'PA-VM': {
        'authcode': None,
        'description': 'Standard VM-300',
        'expired': 'yes',
        'expires': 'September 25, 2010',
        'feature': 'PA-VM',
        'issued': 'January 12, 2010',
        'serial': 'xxxxxxxxxxxxxxxx'
    },
    ...
}
```

### `FirewallProxy.get_support_license`

```python
def get_support_license() -> dict
```

Get support license information from update servers.

The actual API command is `request support check`.

This method fetches the response in XML format:

```xml showLineNumbers
<SupportInfoResponse>
    <Links>
    <Link>
        <Title>Contact Us</Title>
        <Url>https://www.paloaltonetworks.com/company/contact-us.html</Url>
    </Link>
    <Link>
        <Title>Support Home</Title>
        <Url>https://www.paloaltonetworks.com/support/tabs/overview.html</Url>
    </Link>
    <Link>
        <Title>Manage Cases</Title>
        <Url>https://support.paloaltonetworks.com/pa-portal/index.php?option=com_pan&task=viewcases&Itemid=100</Url>
    </Link>
    </Links>
<Support>
    <Contact>
        <Contact>Click the contact link at right.</Contact>
    </Contact>
    <ExpiryDate>December 31, 2023</ExpiryDate>
    <SupportLevel>Premium</SupportLevel>
    <SupportDescription>24 x 7 phone support; advanced replacement hardware service</SupportDescription>
</Support>
</SupportInfoResponse>
```

__Raises__


- `UpdateServerConnectivityException`: Raised when timeout is reached when contacting an update server.
- `PanXapiError`: Re-raised when an exception is caught but does not match `UpdateServerConnectivityException`.

__Returns__


`dict`: Partial information extracted from the response formatted as `dict`, it includes:

- the expiry date,
- the support level.

### `FirewallProxy.get_routes`

```python
def get_routes() -> dict
```

Get route table entries, either retrieved from DHCP or configured manually.

The actual API command is `show routing route`.

In the returned `dict` the key is made of three route properties delimited with an underscore (`_`) in the following
order:

* virtual router name,
* destination CIDR,
* network interface name if one is available, empty string otherwise.

The key does not provide any meaningful information, it's there only to introduce uniqueness for each entry. All
properties that make a key are also available in the value of a dictionary element.

```python showLineNumbers title="Sample output"
{
    private_0.0.0.0/0_private/i3': {
        'age': None,
        'destination': '0.0.0.0/0',
        'flags': 'A S',
        'interface': 'private/i3',
        'metric': '10',
        'nexthop': 'vr public',
        'route-table': 'unicast',
        'virtual-router': 'private'
    },
    'public_10.0.0.0/8_public/i3': {
        'age': None,
        'destination': '10.0.0.0/8',
        'flags': 'A S',
        'interface': 'public/i3',
        'metric': '10',
        'nexthop': 'vr private',
        'route-table': 'unicast',
        'virtual-router': 'public'
    }
}
```

__Returns__


`dict`: Routes information.

### `FirewallProxy.get_arp_table`

```python
def get_arp_table() -> dict
```

Get the currently available ARP table entries.

The actual API command is `<show><arp><entry name = 'all'/></arp></show>`.

In the returned `dict` the key is made of two properties delimited with an underscore (`_`) in the following order:

* interface name,
* IP address.

The key does not provide any meaningful information, it's there only to introduce uniqueness for each entry. All
properties that make a key are also available in the value of a dictionary element.

```python showLineNumbers title="Sample output"
{
    'ethernet1/1_10.0.2.1': {
        'interface': 'ethernet1/1',
        'ip': '10.0.2.1',
        'mac': '12:34:56:78:9a:bc',
        'port': 'ethernet1/1',
        'status': 'c',
        'ttl': '1094'
    },
    'ethernet1/2_10.0.1.1': {
        'interface': 'ethernet1/2',
        'ip': '10.0.1.1',
        'mac': '12:34:56:78:9a:bc',
        'port': 'ethernet1/2',
        'status': 'c',
        'ttl': '1094'
    }
}
```

__Returns__


`dict`: ARP table entries.

### `FirewallProxy.get_sessions`

```python
def get_sessions() -> list
```

Get information about currently running sessions.

The actual API command run is `show session all`.

__Returns__


`list`: Information about the current sessions.

```python showLineNumbers title="Sample output"
[
    {
        'application': 'undecided',
        'decrypt-mirror': 'False',
        'dport': '80',
        'dst': '10.0.2.11',
        'dstnat': 'False',
        'egress': 'ethernet1/1',
        'flags': None,
        'from': 'public',
        'idx': '1116',
        'ingress': 'ethernet1/1',
        'nat': 'False',
        'proto': '6',
        'proxy': 'False',
        'source': '168.63.129.16',
        'sport': '56670',
        'srcnat': 'False',
        'start-time': 'Thu Jan 26 02:46:30 2023',
        'state': 'ACTIVE',
        'to': 'public',
        'total-byte-count': '296',
        'type': 'FLOW',
        'vsys': 'vsys1',
        'vsys-idx': '1',
        'xdport': '80',
        'xdst': '10.0.2.11',
        'xsource': '168.63.129.16',
        'xsport': '56670'
    },
    ...
]
```

### `FirewallProxy.get_session_stats`

```python
def get_session_stats() -> dict
```

Get basic session statistics.

The actual API command is `show session info`.

:::note
This is raw output. Names of stats are the same as returned by API. No translation is made on purpose. The output of this
command might vary depending on the version of PanOS.
:::

For meaning and available statistics, refer to the official PanOS documentation.

__Returns__


`dict`: Session stats in a form of a dictionary.

```python showLineNumbers title="Sample output"
{
    'age-accel-thresh': '80',
    'age-accel-tsf': '2',
    'age-scan-ssf': '8',
    'age-scan-thresh': '80',
    'age-scan-tmo': '10',
    'cps': '0',
    'dis-def': '60',
    'dis-sctp': '30',
    'dis-tcp': '90',
    'dis-udp': '60',
    'icmp-unreachable-rate': '200',
    'kbps': '0',
    'max-pending-mcast': '0',
    'num-active': '4',
    'num-bcast': '0',
    'num-gtpc': '0',
    'num-gtpu-active': '0',
    'num-gtpu-pending': '0',
    'num-http2-5gc': '0',
    'num-icmp': '0',
    'num-imsi': '0',
    'num-installed': '1193',
    'num-max': '819200',
    'num-mcast': '0',
    'num-pfcpc': '0',
    'num-predict': '0',
    'num-sctp-assoc': '0',
    'num-sctp-sess': '0',
    'num-tcp': '4',
    'num-udp': '0',
    'pps': '0',
    'tcp-cong-ctrl': '3',
    'tcp-reject-siw-thresh': '4',
    'tmo-5gcdelete': '15',
    'tmo-cp': '30',
    'tmo-def': '30',
    'tmo-icmp': '6',
    'tmo-sctp': '3600',
    'tmo-sctpcookie': '60',
    'tmo-sctpinit': '5',
    'tmo-sctpshutdown': '60',
    'tmo-tcp': '3600',
    'tmo-tcp-delayed-ack': '25',
    'tmo-tcp-unverif-rst': '30',
    'tmo-tcphalfclosed': '120',
    'tmo-tcphandshake': '10',
    'tmo-tcpinit': '5',
    'tmo-tcptimewait': '15',
    'tmo-udp': '30',
    'vardata-rate': '10485760'
}
```

### `FirewallProxy.get_tunnels`

```python
def get_tunnels() -> dict
```

Get information about the configured tunnels.

The actual API command run is `show running tunnel flow all`.

__Returns__


`dict`: Information about the configured tunnels. Sample output (with only one IPSec tunnel configured):

```python showLineNumbers
{
    'GlobalProtect-Gateway': {},
    'GlobalProtect-site-to-site': {},
    'IPSec': {
        'ipsec_tunnel': {
            'gwid': '1',
            'id': '1',
            'inner-if': 'tunnel.1',
            'localip': '0.0.0.0',
            'mon': 'off',
            'name': 'ipsec_tunnel',
            'outer-if': 'ethernet1/2',
            'owner': '1',
            'peerip': '192.168.1.1',
            'state': 'init'
        }
    },
    'SSL-VPN': {},
    'hop': {}
}
```

### `FirewallProxy.get_latest_available_content_version`

```python
def get_latest_available_content_version() -> str
```

Get the latest, downloadable content version.

The actual API command run is `request content upgrade check`.

Values returned by API are not ordered. This method tries to reorder them and find the highest available Content DB
version. The following assumptions are made:

* versions are always increasing,
* both components of the version string are numbers.

__Raises__


- `ContentDBVersionsFormatException`: An exception is thrown when the Content DB version does not match the expected format.

__Returns__


`str`: The latest available content version.

```python showLineNumbers title="Sample output"
'8670-7824'
```

### `FirewallProxy.get_content_db_version`

```python
def get_content_db_version() -> str
```

Get the currently installed Content DB version.

The actual API command is `show system info`.

__Returns__


`str`: Current Content DB version.

```python showLineNumbers title="Sample output"
'8670-7824'
```

### `FirewallProxy.get_ntp_servers`

```python
def get_ntp_servers() -> dict
```

Get the NTP synchronization configuration.

The actual API command is `show ntp`.

The actual return value of this method can differ depending on whether the NTP servers are configured or not:

- no NTP servers configured:

    ```python showLineNumbers
    {
        'synched': 'LOCAL'
    }
    ```

- NTP servers configured:

    ```python showLineNumbers
    {
        'ntp-server-1': {
            'authentication-type': 'none',
            'name': '0.pool.ntp.org',
            'reachable': 'yes',
            'status': 'available'
        },
        'ntp-server-2': {
            'authentication-type': 'none',
            'name': '1.pool.ntp.org',
            'reachable': 'yes',
            'status': 'synched'
        },
        'synched': '1.pool.ntp.org'
    }
    ```

__Returns__


`dict`: The NTP synchronization configuration.

### `FirewallProxy.get_disk_utilization`

```python
def get_disk_utilization() -> dict
```

Get the disk utilization (in MB) and parse it to a machine readable format.

The actual API command is `show system disk-space`.

__Raises__


- `WrongDiskSizeFormatException`: Raised when free text disk allocation information cannot be parsed.

__Returns__


`dict`: Disk free space in MBytes.

```python showLineNumbers title="Sample output"
{
    '/': 2867
    '/dev': 7065
    '/opt/pancfg': 14336
    '/opt/panrepo': 3276
    '/dev/shm': 1433
    '/cgroup': 7065
    '/opt/panlogs': 20480
    '/opt/pancfg/mgmt/ssl/private': 12
}
```

### `FirewallProxy.get_available_image_data`

```python
def get_available_image_data() -> dict
```

Get information on the available to download PanOS image versions.

The actual API command is `request system software check`.

__Raises__


- `UpdateServerConnectivityException`: Raised when the update server is not reachable, can also mean that the device is not
    licensed.
- `PanXapiError`: Re-raised when an exception is caught but does not match `UpdateServerConnectivityException`.

__Returns__


`dict`: Detailed information on available images.

```python showLineNumbers title="Sample output"
{
    '11.0.1': {
        'version': '11.0.1'
        'filename': 'PanOS_vm-11.0.1'
        'size': '492'
        'size-kb': '504796'
        'released-on': '2023/03/29 15:05:25'
        'release-notes': 'https://www.paloaltonetworks.com/documentation/11-0/pan-os/pan-os-release-notes'
        'downloaded': 'no'
        'current': 'no'
        'latest': 'yes'
        'uploaded': 'no'
    }
    '11.0.0': {
        'version': '11.0.0'
        'filename': 'PanOS_vm-11.0.0'
        'size': '1037'
        'size-kb': '1062271'
        'released-on': '2022/11/17 08:45:28'
        'release-notes': 'https://www.paloaltonetworks.com/documentation/11-0/pan-os/pan-os-release-notes'
        'downloaded': 'no'
        'current': 'no'
        'latest': 'no'
        'uploaded': 'no'
    }
    ...
}
```

### `FirewallProxy.get_mp_clock`

```python
def get_mp_clock() -> datetime
```

Get the clock information from management plane.

The actual API command is `show clock`.

__Returns__


`datetime`: The clock information represented as a `datetime` object.

### `FirewallProxy.get_dp_clock`

```python
def get_dp_clock() -> dict
```

Get the clock information from data plane.

The actual API command is `show clock more`.

__Returns__


`datetime`: The clock information represented as a `datetime` object.

### `FirewallProxy.get_certificates`

```python
def get_certificates() -> dict
```

Get information about certificates installed on a device.

This method retrieves every information that is available about a certificate except for the `private-key`.
This limitation is here due to security measures.

The actual API command is `show config running`.

__Returns__


`dict`: Information about installed certificates, where key is the certificate name and value contains a dictionary of
    certificate properties.

```python showLineNumbers title="Sample output"
{
    'acertificate': {
        'algorithm': 'RSA',
        'ca': 'no',
        'common-name': 'cert',
        'expiry-epoch': '1718699772',
        'issuer': 'root',
        'issuer-hash': '5198cade',
        'not-valid-after': 'Jun 18 08:36:12 2024 GMT',
        'not-valid-before': 'Jun 19 08:36:12 2023 GMT',
        'public-key': '''-----BEGIN CERTIFICATE-----
                        MIICiDCCAfGgAwIBAgIEWo92UzANBgkqhkiG9w0BAQsFADAPMQ0wCwYDVQQDDARy
                        b290MB4XDTIzMDYxOTA4MzYxMloXDTI0MDYxODA4MzYxMlowDzENMAsGA1UEAwwE
                        Y2VydDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAO7CKS7qrdSblk8E
                        56Abkd9ikJVFDiDM7kC6l9ezKF4TK5q3tYbKywBiiNHw3DrRvuzwg3GsXDMSaUZZ
                        ItsyOOxE4G6Ai48X0gSzAY5aQU2WY+1MErEWR0sMSxSVzNGkPVEDAQmI2KFPrzvX
                        U4JGoOXwEsq4tH39nkj7Mo7VfKM/bsZ0obA8llt9VyjBCF1uN9+J1G+nY9mUzyEC
                        yFemEexgMqWqmSY9DiL1xwFLfTog73zCvu9SfzvFzUEg+q/16RJF766AVb8TT27d
                        KBowEpPdOqmWOXLbiZh9CzP4/GZZQuIWjS+DmSzI3nyDGF591iridlmmuTjPOyEy
                        FnEfwsUCAwEAAaNtMGswCQYDVR0TBAIwADALBgNVHQ8EBAMCA7gwJwYDVR0lBCAw
                        HgYIKwYBBQUHAwEGCCsGAQUFBwMCBggrBgEFBQcDBTAJBgNVHSMEAjAAMB0GA1Ud
                        DgQWBBRmVL1rXamoHiqE1+MWuKhFx4y3lzANBgkqhkiG9w0BAQsFAAOBgQA2d4v4
                        ABP1sOk603DTgwF3BmKGJLmdsbzD/GGYH1vs9INOxs/ftcbyld5uNJ8XCVZIX16l
                        DbCDmPxxUkiQsjjGxKNKUh33xiqPWM8oqzGxbaLy9SK3YBl5leBPbI4rNozderlm
                        BHR62OTIlfRtS0hwLUYkwdis/Tt0v0sc2hJxVw==
                        -----END CERTIFICATE-----''',
        'subject': 'cert',
        'subject-hash': '5ec67661'
    },
    ...
}
```

### `FirewallProxy.get_update_schedules`

```python
def get_update_schedules() -> dict
```

Get schedules for all dynamic updates.

This method gets scheduled dynamic updates on a device. This includes the ones pushed from Panorama,
but it does not include the ones configured via `Panorama/Device Deployment/Dynamic Updates/Schedules`.

The actual XMLAPI command run here is `config/get` with XPATH set to
`/config/devices/entry[@name='localhost.localdomain']/deviceconfig/system/update-schedule`.

__Returns__


`dict`: All dynamic updates schedules, key is the entity type to update, like: threats, wildfire, etc.

```python showLineNumbers title="Sample output, showing values coming from Panorama"
{'@ptpl': 'lab',
'@src': 'tpl',
'anti-virus': {'@ptpl': 'lab',
                '@src': 'tpl',
                'recurring': {'@ptpl': 'lab',
                            '@src': 'tpl',
                            'hourly': {'@ptpl': 'lab',
                                        '@src': 'tpl',
                                        'action': {'`text`': 'download-and-install',
                                                    '@ptpl': 'lab',
                                                    '@src': 'tpl'},
                                        'at': {'`text`': '0',
                                                '@ptpl': 'lab',
                                                '@src': 'tpl'}}}},
'global-protect-clientless-vpn': {'@ptpl': 'lab',
                                '@src': 'tpl',
                                'recurring': {'@ptpl': 'lab',
                                                '@src': 'tpl',
                                                'weekly': {'@ptpl': 'lab',
                                                            '@src': 'tpl',
                                                            'action': {'`text`': 'download-only',
                                                                    '@ptpl': 'lab',
                                                                    '@src': 'tpl'},
                                                            'at': {'`text`': '20:00',
                                                                '@ptpl': 'lab',
                                                                '@src': 'tpl'},
                                                            'day-of-week': {'`text`': 'wednesday',
                                                                            '@ptpl': 'lab',
                                                                            '@src': 'tpl'}}}}
}
```

### `FirewallProxy.get_jobs`

```python
def get_jobs() -> dict
```

Get details on all jobs.

This method retrieves all jobs and their details, this means running, pending, finished, etc.

The actual API command is `show jobs all`.

__Returns__


`dict`: All jobs found on the device, indexed by the ID of a job.

```python showLineNumbers title="Sample output"
{'1': {'description': None,
    'details': {'line': ['ID population failed',
                            'Client logrcvr registered in the middle of a '
                            'commit/validate. Aborting current '
                            'commit/validate.',
                            'Commit failed',
                            'Failed to commit policy to device']},
    'positionInQ': '0',
    'progress': '100',
    'queued': 'NO',
    'result': 'FAIL',
    'status': 'FIN',
    'stoppable': 'no',
    'tdeq': '00:28:32',
    'tenq': '2023/08/01 00:28:32',
    'tfin': '2023/08/01 00:28:36',
    'type': 'AutoCom',
    'user': None,
    'warnings': None},
'2': {'description': None,
    'details': {'line': ['Configuration committed successfully',
                            'Successfully committed last configuration']},
    'positionInQ': '0',
    'progress': '100',
    'queued': 'NO',
    'result': 'OK',
    'status': 'FIN',
    'stoppable': 'no',
    'tdeq': '00:28:40',
    'tenq': '2023/08/01 00:28:40',
    'tfin': '2023/08/01 00:29:20',
    'type': 'AutoCom',
    'user': None,
    'warnings': None},
'3': {'description': None,
    'details': None,
    'positionInQ': '0',
    'progress': '30',
    'queued': 'NO',
    'result': 'PEND',
    'status': 'ACT',
    'stoppable': 'yes',
    'tdeq': '00:58:59',
    'tenq': '2023/08/01 00:58:59',
    'tfin': None,
    'type': 'Downld',
    'user': None,
    'warnings': None}}
```

