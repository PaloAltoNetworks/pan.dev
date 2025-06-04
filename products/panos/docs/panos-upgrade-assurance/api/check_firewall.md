---
id: check_firewall
sidebar_label: check_firewall module
title: check_firewall
hide_title: true
custom_edit_url: null
---
## class `CheckFirewall`

Class responsible for running readiness checks and creating Firewall state snapshots.

This class is designed to:

* run one or more [`FirewallProxy`](/panos/docs/panos-upgrade-assurance/api/firewall_proxy#class-firewallproxy) class methods,
* gather and interpret results,
* present results.

It is split into two parts responsible for:

1. running readiness checks, all methods related to this functionality are prefixed with `check_`,
2. running state snapshots, all methods related to this functionality are prefixed with `get_`, although usually the
    [`FirewallProxy`](/panos/docs/panos-upgrade-assurance/api/firewall_proxy#class-firewallproxy) methods are run directly.

Although it is possible to run the methods directly, the preferred way is to run them through one of the following `run`
    methods:

* [`run_readiness_checks()`](#checkfirewallrun_readiness_checks) is responsible for running specified readiness checks,
* [`run_snapshots()`](#checkfirewallrun_snapshots) is responsible for getting a snapshot of specified device areas.

__Attributes__


- `_snapshot_method_mapping (dict)`: Internal variable containing a map of all valid snapshot types mapped to the specific
    methods.

    This mapping is used to verify the requested snapshot types and to map the snapshot with an actual method that
    will eventually run. Keys in this dictionary are snapshot names as defined in the
    [`SnapType`](/panos/docs/panos-upgrade-assurance/api/utils#class-snaptype) class, values are references to methods that
    will be run.

- `_check_method_mapping (dict)`: Internal variable containing the map of all valid check types mapped to the specific methods.

    This mapping is used to verify requested check types and to map a check with an actual method that will be eventually run.
    Keys in this dictionary are check names as defined in the
    [`CheckType`](/panos/docs/panos-upgrade-assurance/api/utils#class-checktype) class, values are references to methods that
    will be run.

### `CheckFirewall.__init__`

```python
def __init__(node: FirewallProxy,
             skip_force_locale: Optional[bool] = False) -> None
```

CheckFirewall constructor.

__Parameters__


- __node__ (`FirewallProxy`): Object representing a device against which checks and/or snapshots are run. See
    [`FirewallProxy`](/panos/docs/panos-upgrade-assurance/api/firewall_proxy#class-firewallproxy) class' documentation.
- __skip_force_locale__ (`bool, optional`): (defaults to `False`) Use with caution, when set to `True` will skip setting locale to
    en_US.UTF-8 for the module which will parse the datetime strings in checks with current locale setting.

### `CheckFirewall.check_pending_changes`

```python
def check_pending_changes() -> CheckResult
```

Check if there are pending changes on device.

It checks two states:

1. if there is full commit required on the device,
2. if not, if there is a candidate config pending on a device.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class             representing the result of the content version check:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) if there is no pending
    configuration,
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) otherwise.

### `CheckFirewall.check_panorama_connectivity`

```python
def check_panorama_connectivity() -> CheckResult
```

Check connectivity with the Panorama service.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class             representing a state of Panorama connection:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when device is connected to
    Panorama,
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) otherwise,
* [`CheckStatus.ERROR`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) is returned when no Panorama
    configuration is found.

### `CheckFirewall.check_ha_status`

```python
def check_ha_status(
        skip_config_sync: Optional[bool] = False,
        ignore_non_functional: Optional[bool] = False) -> CheckResult
```

Checks HA pair status from the perspective of the current device.

Currently, only Active-Passive configuration is supported.

__Parameters__


- __skip_config_sync__ (`bool, optional`): (defaults to `False`) Use with caution, when set to `True` will skip checking if
    configuration is synchronized between nodes. Helpful when verifying a state of a partially upgraded HA pair.
- __ignore_non_functional__ (`bool, optional`): (defaults to `False`) Use with caution, when set to `True` will ignore if device
    state is `non-functional` on one of the nodes. Helpful when verifying a state of a partially upgraded HA pair with
    vmseries plugin version mismatch.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class             representing results of HA pair status inspection:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when pair is configured
    correctly,
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) otherwise,
* [`CheckStatus.ERROR`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) is returned when device is not a
    member of an HA pair or the pair is not in Active-Passive configuration.

### `CheckFirewall.check_is_ha_active`

```python
def check_is_ha_active(
        skip_config_sync: Optional[bool] = False,
        ignore_non_functional: Optional[bool] = False) -> CheckResult
```

Checks whether this is an active node of an HA pair.

Before checking the state of the current device, the [`check_ha_status()`](#checkfirewallcheck_ha_status) method is run.
If this method does not end with
[`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus), its return value is passed as
the result of [`check_is_ha_active()`](#checkfirewallcheck_is_ha_active).

Detailed results matrix looks like this

- [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) the actual state of the device
    in an HA pair is checked, if the state is

    - active - [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) is returned,
    - passive - [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) is returned,


- anything else than [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus), the
[`check_ha_status()`](#checkfirewallcheck_ha_status) return value is passed as a return value of this method.


__Parameters__


- __skip_config_sync__ (`bool, optional`): (defaults to `False`) Use with caution, when set to `True` will skip checking if
    configuration is synchronized between nodes. Helpful when working with a partially upgraded HA pair.
- __ignore_non_functional__ (`bool, optional`): (defaults to `False`) Use with caution, when set to `True` will ignore if device
    state is `non-functional` on one of the nodes. Helpful when verifying a state of a partially upgraded HA pair with
    vmseries plugin version mismatch.

__Returns__


`CheckResult`: Boolean information reflecting the state of the device.

### `CheckFirewall.check_expired_licenses`

```python
def check_expired_licenses(skip_licenses: Optional[list] = []) -> CheckResult
```

Check if any license is expired.

__Parameters__


- __skip_licenses__ (`list, optional`): (defaults to `[]`) List of license names that should be skipped during the check.

__Raises__


- `WrongDataTypeException`: Raised when `skip_licenses` is not type of `list`.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) if no license is expired,
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) otherwise
* [`CheckStatus.ERROR`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when there is not license
information available in the API response.

### `CheckFirewall.check_active_support_license`

```python
def check_active_support_license() -> CheckResult
```

Check active support license with update server.

__Returns__


`dict`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking value of:

- [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) if the support license is not
    expired,
- [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) otherwise,
- [`CheckStatus.ERROR`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when no information cannot be
retrieved or found in the API response.

### `CheckFirewall.check_critical_session`

```python
def check_critical_session(
        source: Optional[str] = None,
        destination: Optional[str] = None,
        dest_port: Optional[Union[str, int]] = None) -> CheckResult
```

Check if a critical session is present in the sessions table.

__Parameters__


- __source__ (`str, optional`): (defaults to `None`) Source IPv4 address for the examined session.
- __destination__ (`str, optional`): (defaults to `None`) Destination IPv4 address for the examined session.
- __dest_port__ (`int, str, optional`): (defaults to `None`) Destination port value. This should be an integer value, but string
representations such as `"8080"` are also accepted.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) if a session is found in the
sessions table,
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) otherwise,
* [`CheckStatus.SKIPPED`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when no config is passed,
* [`CheckStatus.ERROR`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) if the session table is empty.

### `CheckFirewall.check_content_version`

```python
def check_content_version(version: Optional[str] = None) -> CheckResult
```

Verify installed version of the Content Database.

This method runs in two modes:

* w/o any configuration - checks if the latest version of the Content DB is installed.
* with specific version passed - verifies if the installed Content DB is at least equal.

__Parameters__


- __version__ (`str, optional`): (defaults to `None`) Target version of the content DB.

__Returns__

`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value off:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when the installed Content DB
    met the requirements.
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when it did not.

### `CheckFirewall.check_ntp_synchronization`

```python
def check_ntp_synchronization() -> CheckResult
```

Check synchronization with NTP server.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when a device is synchronized
    with the NTP server.
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when a device is not synchronized
    with the NTP server.
* [`CheckStatus.ERROR`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when a device is not configured
    for NTP synchronization.

### `CheckFirewall.check_arp_entry`

```python
def check_arp_entry(ip: Optional[str] = None,
                    interface: Optional[str] = None) -> CheckResult
```

Check if a given ARP entry is available in the ARP table.

__Parameters__


- __interface__ (`str, optional`): (defaults to `None`) A name of an interface we examine for the ARP entries. When skipped, all
    interfaces are examined.
- __ip__ (`str, optional`): (defaults to `None`) IP address of the ARP entry we look for.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when the ARP entry is found.
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when the ARP entry is not found.
* [`CheckStatus.SKIPPED`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when `ip` is not provided.
* [`CheckStatus.ERROR`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when the ARP table is empty.

### `CheckFirewall.check_ipsec_tunnel_status`

```python
def check_ipsec_tunnel_status(
        tunnel_name: Optional[str] = None,
        proxy_ids: Optional[List[str]] = None,
        require_all_active: Optional[bool] = False) -> CheckResult
```

Check if a given IPSec tunnel is in active state.

__Parameters__


- __tunnel_name__ (`str, optional`): (defaults to `None`) Name of the searched IPSec tunnel.
- __proxy_ids__ (`list(str), optional`): (defaults to `None`) ProxyID names to check. All ProxyIDs are checked if None provided.
- __require_all_active__ (`bool, optional`): (defaults to `False`) If set, all ProxyIDs should be in `active` state. States are
    checked only within `proxy_ids` if provided.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when a tunnel is found and is
    in active state.
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when a tunnel is either not
    active or missing in the current configuration.
* [`CheckStatus.SKIPPED`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when `tunnel_name` is not
    provided.
* [`CheckStatus.ERROR`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when no IPSec tunnels are
    configured on the device.

### `CheckFirewall.check_free_disk_space`

```python
def check_free_disk_space(image_version: Optional[str] = None) -> CheckResult
```

Check if a there is enough space on the `/opt/panrepo` volume for downloading an PanOS image.

This is a check intended to be run before the actual upgrade process starts.

The method operates in two modes:

* default - to be used as last resort, it will verify that the `/opt/panrepo` volume has at least 3GB free space
    available. This amount of free space is somewhat arbitrary and it's based maximum image sizes
    (path level + base image) available at the time the method was written (+ some additional error margin).
* specific target image - suggested mode, it will take one argument `image_version` which is the target PanOS version.
    For that version the actual image size (path + base image) will be calculated. Next, the available free space
    is verified against that image size + 10% (as an error margin).

__Parameters__


- __image_version__ (`str, optional`): (defaults to `None`) Version of the target PanOS image.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when there is enough free
    space to download an image.
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when there is NOT enough free
    space, additionally the actual free space available is provided as the fail reason.

### `CheckFirewall.check_mp_dp_sync`

```python
def check_mp_dp_sync(diff_threshold: int = 0) -> CheckResult
```

Check if the Data and Management clocks are in sync.

__Raises__


- `WrongDataTypeException`: Raised when the `diff_threshold` is not type of `int`.

__Parameters__


- __diff_threshold__ (`int, optional`): (defaults to `0`) Maximum allowable difference in seconds between both clocks.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when both clocks are the same
    or within threshold.
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when both clocks differ.

### `CheckFirewall.check_ssl_cert_requirements`

```python
def check_ssl_cert_requirements(rsa: dict = {},
                                ecdsa: dict = {}) -> CheckResult
```

Check if the certificates' keys meet minimum size requirements.

This method loops over all certificates installed on a device and compares certificate's properties with the ones
provided in input parameters. There are two parameters available, one describing `RSA` certificate requirements, the
other for `ECDSA` certificates. Both parameters are dictionaries accepting the following keys:

- `hash_method` - a minimum (from security perspective) required hashing method,
- `key_size` - a minimum size of a key.

__Parameters__


- __rsa__ (`dict, optional`): A dictionary describing minimum security requirements of a `RSA` certificate. Default values             for the certificate requirements are as follows:

    - `hash_method` - `SHA256`,
    - `key_size` - `2048`.

- __ecdsa__ (`dict, optional`): A dictionary describing minimum security requirements of a `ECDSA` certificate. Default values         for the certificate requirements are as follows:

    - `hash_method` - `SHA256`,
    - `key_size` - `256`.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when all certs meet the size
    requirements.
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) if a least one cert
    does not meet the requirements - certificate names with their current sizes are provided in `CheckResult.reason`
    property.
* [`CheckStatus.SKIPPED`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when device does not have
    certificates installed.
* [`CheckStatus.ERROR`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when the certificate's
    properties (installed or required) are not supported.

### `CheckFirewall._calculate_schedule_time_diff`

```python
def _calculate_schedule_time_diff(now_dt: datetime, schedule_type: str,
                                  schedule: dict) -> (int, str)
```

A method that calculates the time distance between two `datetime` objects.

:::note
This method is used only by [`CheckFirewall.check_scheduled_updates()`](#checkfirewallcheck_scheduled_updates) method and it expects some information
to be already available.
:::

__Parameters__


- __now_dt__ (`datetime`): A `datetime` object representing the current moment in time. Ideally this should be the device's local
    time, taken from the management plane clock.
- __schedule_type__ (`str`): A schedule type returned by PanOS, can be one of: `every-*`, `hourly`, `daily`, `weekly`,
    `real-time`.
- __schedule__ (`dict`): Value of the `recurring` key in the API response, see
    [`FirewallProxy.get_update_schedules()`](/panos/docs/panos-upgrade-assurance/api/firewall_proxy#firewallproxyget_update_schedules)
    documentation for details. Both formats (locally configured and pushed from a Panorama template) are supported.

__Raises__


- `MalformedResponseException`: Thrown then the `schedule_type` is not recognizable.

__Returns__


`tuple(int, str)`: A tuple containing the calculated time difference (in minutes) and human-readable description.

### `CheckFirewall.check_scheduled_updates`

```python
def check_scheduled_updates(test_window: int = 60) -> CheckResult
```

Check if any Dynamic Update job is scheduled to run within the specified time window.

When device is configured via Panorama, this includes schedules set up in Templates. It does not however include schedules
configured in `Panorama/Device Deployment/Dynamic Updates/Schedules`.

__Parameters__


- __test_window__ (`int, optional`): (defaults to 60 minutes). A time window in minutes to look for an update job occurrence.
    Has to be a value between `60` and `10080` (1 week equivalent). The time window is calculated based on the device's
    local time (taken from the management plane).

__Raises__


- `MalformedResponseException`: Thrown in case API response does not meet expectations.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when there is no update job
    planned within the test window.
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) otherwise, `CheckResult.reason`
    field contains information about the planned jobs with next occurrence time provided if possible.
* [`CheckStatus.ERROR`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when the `test_window` parameter
    does not meet criteria.

### `CheckFirewall.check_non_finished_jobs`

```python
def check_non_finished_jobs() -> CheckResult
```

Check for any job with status different than FIN.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when all jobs are in FIN state.
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) otherwise, `CheckResult.reason`
    field contains information about the 1<sup>st</sup> job found with status different than FIN (job ID and the actual
    status).
* [`CheckStatus.SKIPPED`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when there are no jobs on a
    device.

### `CheckFirewall.check_global_jumbo_frame`

```python
def check_global_jumbo_frame(mode: bool = None) -> CheckResult
```

Check if the global jumbo frame configuration matches the desired mode.

__Parameters__


- __mode__ (`bool`): The desired mode of the global jumbo frame configuration.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when the global jumbo frame
    mode matches the desired mode.
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when the current global jumbo
    frame and the desired modes differ.
* [`CheckStatus.SKIPPED`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) when `mode` is not provided.

### `CheckFirewall.get_content_db_version`

```python
def get_content_db_version() -> Dict[str, str]
```

Get Content DB version.

__Returns__


`dict(str)`: To keep the standard of all `get` methods returning a dictionary this value is also returned as a dictionary             in the following format:

```python showLineNumbers
{
    'version': 'xxxx-yyyy'
}
```

### `CheckFirewall.get_ip_sec_tunnels`

```python
def get_ip_sec_tunnels() -> Dict[str, dict]
```

Extract information about IPSEC tunnels from all tunnel data retrieved from a device.

__Returns__


`dict`: Currently configured IPSEC tunnels. The returned value is similar to the example below. It can differ though             depending on the version of PanOS:

```python showLineNumbers title="Example"
{
    "tunnel_name": {
        "peerip": "10.26.129.5",
        "name": "tunnel_name",
        "outer-if": "ethernet1/2",
        "gwid": "1",
        "localip": "0.0.0.0",
        "state": "init",
        "inner-if": "tunnel.1",
        "mon": "off",
        "owner": "1",
        "id": "1"
    }
}
```

### `CheckFirewall.get_global_jumbo_frame`

```python
def get_global_jumbo_frame() -> Dict[str, bool]
```

Get whether global jumbo frame configuration is set or not.

__Returns__


`dict`: The global jumbo frame configuration.

```python showLineNumbers title="Example"
{
    'mode': True
}
```

### `CheckFirewall.run_readiness_checks`

```python
def run_readiness_checks(
        checks_configuration: Optional[List[Union[str, dict]]] = None,
        report_style: bool = False) -> Union[Dict[str, dict], Dict[str, str]]
```

Run readiness checks.

This method provides a convenient way of running readiness checks methods. For details on configuration see
[readiness checks](/panos/docs/panos-upgrade-assurance/configuration-details#readiness-checks) documentation.

__Parameters__


- __checks_configuration__ (`list(str,dict), optional`): (defaults to `None`) List of readiness checks to run.
- __report_style__ (`bool`): (defaults to `False`) Changes the output to more descriptive. Can be used when generating a report
    from the checks.

__Raises__


- `WrongDataTypeException`: An exception is raised when the configuration is in a data type different then `str` or `dict`.

__Returns__


`dict`: Results of all configured checks.

### `CheckFirewall.run_snapshots`

```python
def run_snapshots(
    snapshots_config: Optional[List[Union[str,
                                          dict]]] = None) -> Dict[str, dict]
```

Run snapshots of different firewall areas states.

This method provides a convenient way of running snapshots of a device state. For details on configuration see
[state snapshots](/panos/docs/panos-upgrade-assurance/configuration-details#state-snapshots) documentation.

__Parameters__


- __snapshots_config__ (`list(str), optional`): (defaults to `None`) Defines snapshots of which areas will be taken.

__Raises__


- `WrongDataTypeException`: An exception is raised when the configuration in a data type is different than in a string.

__Returns__


`dict`: The results of the executed snapshots.

### `CheckFirewall.run_health_checks`

```python
def run_health_checks(
        checks_configuration: Optional[List[Union[str, dict]]] = None,
        report_style: bool = False) -> Union[Dict[str, dict], Dict[str, str]]
```

Run device health checks.

This method provides a convenient way of running health check methods. For details on configuration see the
[health checks](/panos/docs/panos-upgrade-assurance/configuration-details#health-checks) documentation.

__Parameters__


- __checks_configuration__ (`list(str,dict), optional`): (defaults to `None`) List of health checks to run.
- __report_style__ (`bool`): (defaults to `False`) Changes the output to more descriptive. Can be used when generating a report
    from the checks.

__Raises__


- `WrongDataTypeException`: An exception is raised when the configuration is in a data type different then `str` or `dict`.

__Returns__


`dict`: Results of all configured checks.

### `CheckFirewall.check_version_against_version_match_dict`

```python
@staticmethod
def check_version_against_version_match_dict(version: Version,
                                             match_dict: dict) -> bool
```

Compare the given software version against the match dict.

__Parameters__


- __version__ (`Version`): The software version to compare (e.g. "10.1.11").
- __match_dict__ (`dict`): A dictionary of tuples mapping major/minor versions to match criteria:

```python showLineNumbers title="Example"
{
    "81": [("==", "8.1.21.2"), (">=", "8.1.25.1")],
    "90": [(">=", "9.0.16.5")],
}
```

__Returns__


`bool`: `True` If the given software version matches the provided match criteria

### `CheckFirewall.check_device_root_certificate_issue`

```python
def check_device_root_certificate_issue(
        fail_when_affected_version_only: bool = True) -> CheckResult
```

Checks whether the target device is affected by the [Root Certificate Expiration][live-564672] issue.

[live-564672]: https://live.paloaltonetworks.com/t5/customer-advisories/emergency-update-required-pan-os-root-and-default-certificate/ta-p/564672

This check will FAIL if so, allowing you to build upgrade logic based on when and how it's failed.

This check will fail in the following scenarios:

1. The device is running software that is affected by the issue AND is running out of date content
    AND is NOT running the user-id service or data redistribution
2. The device is running software that is affected by the issue AND IS running user-id service OR data
    redistribution

__Parameters__


- __fail_when_affected_version_only__ (`bool, optional`): (defaults to `True`) When set to False, this test will only
    fail if the software version is affected by the root certificate issue, AND the device is used for data
    redistribution OR it's using an out-of-date content DB version.

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) if the device is not affected,
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) otherwise.

### `CheckFirewall.check_cdss_and_panorama_certificate_issue`

```python
def check_cdss_and_panorama_certificate_issue() -> CheckResult
```

Checks whether the device is affected by the [PAN-OS Certificate Expirations Jan 2024 advisory][live-572158].

[live-572158]: https://live.paloaltonetworks.com/t5/customer-advisories/additional-pan-os-certificate-expirations-and-new-comprehensive/ta-p/572158

Check will fail in either of following scenarios:

 * Device is running an affected software version
 * Device is running an affected content version
 * Device is running the fixed content version or higher but has not been rebooted - note this is best effort,
    and is based on when the content version was released and the device was rebooted

__Returns__


`CheckResult`: Object of [`CheckResult`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkresult) class taking             value of:

* [`CheckStatus.SUCCESS`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) if the device is not affected,
* [`CheckStatus.FAIL`](/panos/docs/panos-upgrade-assurance/api/utils#class-checkstatus) otherwise.

