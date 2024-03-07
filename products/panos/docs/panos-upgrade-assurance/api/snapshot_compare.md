---
id: snapshot_compare
sidebar_label: snapshot_compare module
title: snapshot_compare
hide_title: true
custom_edit_url: null
---
## class `SnapshotCompare`

Class comparing snapshots of Firewall Nodes.

This object can be used to compare two Firewall snapshots made with the
[`CheckFirewall.run_snapshots()`](/panos/docs/panos-upgrade-assurance/api/check_firewall#checkfirewallrun_snapshots)
method and present results of this comparison. Its main purpose is to compare two snapshots made with the
[`CheckFirewall`](/panos/docs/panos-upgrade-assurance/api/check_firewall#class-checkfirewall) class. However, the code is
generic enough to compare any two dictionaries as long as they follow the schema below:

```python showLineNumbers
{
    'root_key': {
        'key': value
    }
}
```

Where:

* `root_key` has to be present and mapped to a method in the `self._functions_mapping` variable in order to be recognized
during a comparison.
* `value` can be either of a simple type (`str`, `int`, `float`, `bool`) or a nested `dict`.

__Attributes__


- `_functions_mapping (dict)`: Internal variable containing the map of all valid report types mapped to the specific methods.

    This mapping is used to verify the requested report and to map the report to an actual method that will eventually run.
    Keys in this dictionary are report names as defined in the
    [`SnapType`](/panos/docs/panos-upgrade-assurance/api/utils#class-snaptype) class. Essentially, these are the same
    values that one would specify when creating a snapshot with the
    [`CheckFirewall.run_snapshots()`](/panos/docs/panos-upgrade-assurance/api/check_firewall#checkfirewallrun_snapshots)
    method. Values are references to the methods that will run.

### `SnapshotCompare.__init__`

```python
def __init__(left_snapshot: Dict[str, Union[str, dict]],
             right_snapshot: Dict[str, Union[str, dict]]) -> None
```

SnapshotCompare constructor.

Initializes an object by storing both snapshots to be compared.

__Parameters__


- __left_snapshot__ (`dict`): First snapshot dictionary to be compared, usually the older one, for example a pre-upgrade snapshot.
- __right_snapshot__ (`dict`): Second snapshot dictionary to be compared, usually the newer one, for example a post-upgrade
snapshot.

### `SnapshotCompare.compare_snapshots`

```python
def compare_snapshots(
        reports: Optional[List[Union[dict, str]]] = None) -> Dict[str, dict]
```

A method that triggers the actual snapshot comparison.

This is a single point of entry to generate a comparison report. It takes both reports stored in the class object and
compares areas specified in the `reports` parameter.

Refer to the [documentation on reporting](/panos/docs/panos-upgrade-assurance/configuration-details#reports) for
details on the currently available snapshot areas and optional parameters that can be configured for them.

__Parameters__


- __reports__ (`list, optional`): A list of reports - snapshot state areas with optional configuration.
    This parameter follows the [`dialect`](/panos/docs/panos-upgrade-assurance/dialect) of
    [`ConfigParser`](/panos/docs/panos-upgrade-assurance/api/utils#class-configparser) class.

    The reports list is essentially the list of keys present in the snapshots. These keys, however, are the state areas
    specified when the snapshot is made with the
    [`CheckFirewall.run_snapshots()`](/panos/docs/panos-upgrade-assurance/api/check_firewall#checkfirewallrun_snapshots)
    method. This means that the reports list is basically the list of state areas. The only difference is that for
    reports, it is possible to specify an additional configuration. This means that the list can be specified in two
    ways, as `str` or `dict` (in the same manner as for
    [`CheckFirewall.run_readiness_checks()`](/panos/docs/panos-upgrade-assurance/api/check_firewall#checkfirewallrun_readiness_checks)).

    For the elements specified as

    * `str` - the element value is the name of the report (state area),
    * `dict` - the element contains the report name (state area) and the key value and report configuration as the
        element value.

__Raises__


- `WrongDataTypeException`: An exception is raised when the configuration in a data type is different than `str` or `dict`.

__Returns__


`dict`: Result of comparison in a form of the Python dictionary. Keys in this dictionary are again state areas where values
    depend on the actual comparison method that was run.

### `SnapshotCompare.key_checker`

```python
@staticmethod
def key_checker(left_dict: dict, right_dict: dict, key: Union[str, set,
                                                              list]) -> None
```

The static method to check if a key or a list/set of keys is available in both dictionaries.

This method looks for a given key or list/set of keys in two dictionaries. Its main purpose is to assure that when
comparing a key-value pair from two dictionaries, it actually exists in both.

__Parameters__


- __left_dict__ (`dict`): 1st dictionary to verify.
- __right_dict__ (`dict`): 2nd dictionary to verify.
- __key__ (`str, set, list`): Key name or set/list of keys to check.

__Raises__


- `MissingKeyException`: when key is not available in at least one snapshot.

### `SnapshotCompare.calculate_change_percentage`

```python
@staticmethod
def calculate_change_percentage(
        first_value: Union[str, int], second_value: Union[str, int],
        threshold: Union[str, float]) -> Dict[str, Union[bool, float]]
```

The static method to compare differences between values against a given threshold.

Values to be compared should be the `int` or `str` representation of `int`. This method is used when comparing a count of
elements so a floating point value here is not expected. The threshold value, on the other hand, should be the `float` or
`str` representation of `float`. This is a percentage value.

The format of the returned value is the following:

```python showLineNumbers
{
    passed: bool,
    change_percentage: float,
    change_threshold: float
}
```

Where:

- `passed` is an information if the test passed:
    - `True` if difference is lower or equal to threshold,
    - `False` otherwise,
- the actual difference represented as percentage,
- the originally requested threshold (for reporting purposes).

__Parameters__


- __first_value__ (`int, str`): First value to compare.
- __second_value__ (`int, str`): Second value to compare.
- __threshold__ (`float, str`): Maximal difference between values given as percentage.

__Raises__


- `WrongDataTypeException`: An exception is raised when the threshold value is not between `0` and `100` (typical percentage
    boundaries).

__Returns__


`dict`: A dictionary with the comparison results.

### `SnapshotCompare.calculate_diff_on_dicts`

```python
@staticmethod
def calculate_diff_on_dicts(
        left_side_to_compare: Dict[str, Union[str, dict]],
        right_side_to_compare: Dict[str, Union[str, dict]],
        properties: Optional[List[str]] = None) -> Dict[str, dict]
```

The static method to calculate a difference between two dictionaries.

By default dictionaries are compared by going down all nested levels, to the point where key-value pairs are just strings
or numbers. It is possible to configure which keys from these pairs should be compared (by default we compare all
available keys). This is done using the `properties` parameter. It's a list of the bottom most level keys. For example,
when comparing route tables snapshots are formatted like:

```python showLineNumbers
{
    "routes": {
        "default_0.0.0.0/0_ethernet1/3_10.26.129.129": {
            "virtual-router": "default",
            "destination": "0.0.0.0/0",
            "nexthop": "10.26.129.129",
            "metric": "10",
            "flags": "A S",
            "age": null,
            "interface": "ethernet1/3",
            "route-table": "unicast"
        },
        ...
    }
}
```

The bottom most level keys are:

- `virtual-router`,
- `destination`,
- `nexthop`,
- `metric`,
- `flags`,
- `age`,
- `interface`,
- `route-table`.

This list follows [`ConfigParser`](/panos/docs/panos-upgrade-assurance/api/utils#class-configparser)
[`dialect`](/panos/docs/panos-upgrade-assurance/dialect).

The difference between dictionaries is calculated from three perspectives:

1. are there any keys missing in the 2nd (right) dictionary that are present in the 1st (left) - this is represented
under the `missing` key in the results.
2. are there any keys in the 2nd (right) dictionary that are not present in the 1st (left) - this is represented under
the `added` key in the results.
3. for the keys that are present in both dictionaries, are values for these keys the same or different - this is
represented under the `changed` key in the results.

This is a **recursive** method. When calculating changed values, if a value for the key is `dict`, we run the method
again on that dictionary - we go down one level in the nested structure. We do that to a point where the value is of the
`str` type. Therefore, when the final comparison results are presented, the `changed` key usually contains a nested
results structure. This means it contains a dictionary with the `missing`, `added`, and `changed` keys.
Each comparison perspective contains the `passed` property that immediately informs if this comparison gave any results
(`False`) or not (`True`).

**Example**

Let's assume we want to compare two dictionaries of the following structure:

```python showLineNumbers
left_dict = {
    'root_key1'= {
        'key'= 'value'
    }
    'root_key2'= {
        'key'= 'value'
    }
}

right_dict = {
    'root_key2'= {
        'key'= 'other_value'
    }
}
```

The result of this comparison would look like this:

```python showLineNumbers
{
    "missing": {
        "passed": false,
        "missing_keys": [
            "root_key1"
        ]
    },
    "added": {
        "passed": true,
        "added_keys": []
    },
    "changed": {
        "passed": false,
        "changed_raw": {
        "root_key2": {
            "missing": {
                "passed": true,
                "missing_keys": []
            },
            "added": {
                "passed": true,
                "added_keys": []
            },
            "changed": {
                "passed": false,
                "changed_raw": {
                    "key": {
                        "left_snap": "value",
                        "right_snap": "other_value"
                    }
                }
            },
            "passed": false
        }
    }
}
```

__Parameters__


- __left_side_to_compare__ (`dict`): 1st dictionary to compare. When this method is triggered by
    [`compare_snapshots()`](#snapshotcomparecompare_snapshots), the dictionary comes from the `self.left_snap` snapshot.
- __right_side_to_compare__ (`dict`): 2nd dictionary to compare, comes from the self.right_snap snapshot. When this method is
    triggered by [`compare_snapshots()`](#snapshotcomparecompare_snapshots), the dictionary comes from the
    `self.right_snap` snapshot.
- __properties__ (`list(str), optional`): The list of properties used to compare two dictionaries.

__Raises__


- `WrongDataTypeException`: Thrown when one of the `properties` elements has a wrong data type.

__Returns__


`dict`: Summary of the differences between dictionaries. The output has the following format:

```python showLineNumbers title="Sample output"
{
    'missing': {
        'passed': True,
        'missing_keys': []
    },
    'added': {
        'passed': True,
        'added_keys': []
    },
    'changed': {
        'passed': True,
        'changed_raw': {}
    }
}
```

### `SnapshotCompare.calculate_passed`

```python
@staticmethod
def calculate_passed(result: Dict[str, Union[dict, str]]) -> None
```

The static method to calculate the upper level `passed` value.

When two snapshots are compared, a dictionary that is the result of this comparison is structured as in the following
[`get_diff_and_threshold()`](#snapshotcompareget_diff_and_threshold) method: each root key contains a dictionary that has
a structure returned by the [`calculate_diff_on_dicts()`](#snapshotcomparecalculate_diff_on_dicts) method.

This method takes a dictionary under the root key and calculates the `passed` flag based on the all `passed` flags in
that dictionary. This provides a quick way of finding out if any comparison made on data under a root key failed or not.

To illustrate that, the `passed` flag added by this method is highlighted:

```python showLineNumbers title="Example"
{
    'added': {
        'added_keys': [],
        'passed': True
    },
    'changed': {
        'changed_raw': {},
        'passed': True
    },
    'missing': {
        'missing_keys': [
            'default_0.0.0.0/0_ethernet1/3_10.26.129.129'
        ],
        'passed': False
    },
    # highlight-next-line
    'passed': False
}
```

:::caution
This method operates on the passed dictionary directly.
:::

__Parameters__


- __result__ (`dict`): A dictionary for which the `passed` property should be calculated.

### `SnapshotCompare.get_diff_and_threshold`

```python
def get_diff_and_threshold(
    report_type: str,
    properties: Optional[List[str]] = None,
    count_change_threshold: Optional[Union[int, float]] = None
) -> Optional[Dict[str, Optional[Union[bool, dict]]]]
```

The generic snapshot comparison method.

The generic method to compare two snapshots of a given type. It is meant to fit most of the comparison cases.
It is capable of calculating both - a difference between two snapshots and the change count in the elements against a
given threshold. The 1<sup>st</sup> calculation is done by the
[`calculate_diff_on_dicts()`](#snapshotcomparecalculate_diff_on_dicts) method, the 2<sup>nd</sup> - internally.

The changed elements count does not compare the count of elements in each snapshot. This value represents the number of
actual changes, so elements added, missing and changed. This is compared against the number of elements in the left
snapshot as this one is usually the 1st one taken and it's treated as a source of truth.

The changed elements count is presented as a percentage. In scenarios where the right snapshot has more elements then the
left one, it can give values greater than 100%.

This method produces a complex set of nested dictionaries. Each level contains the `passed` flag indicating if the
comparison of a particular type or for a particular level failed or not, and the actual comparison results.

An example for the route tables, crafted in a way that almost each level fails:

```json showLineNumbers title="Example"
{
    "added": {
        "added_keys": [
            "default_10.26.129.0/25_ethernet1/2_10.26.129.1",
            "default_168.63.129.16/32_ethernet1/3_10.26.129.129"
        ],
        "passed": "False"
    },
    "missing": {
        "missing_keys": [
            "default_0.0.0.0/0_ethernet1/3_10.26.129.129"
        ],
        "passed": "False"
    },
    "changed": {
        # highlight-start
        "changed_raw": {
            "default_10.26.130.0/25_ethernet1/2_10.26.129.1": {
                "added": {
                    "added_keys": [],
                    "passed": "True"
                },
                "missing": {
                    "missing_keys": [],
                    "passed": "True"
                },
                "changed": {
                    "changed_raw": {
                        "flags": {
                            "left_snap": "A S",
                            "right_snap": "A"
                        }
                    },
                    "passed": "False"
                },
                "passed": "False"
            }
        },
        # highlight-end
        "passed": "False"
    },
    "count_change_percentage": {
        "change_percentage": 33.33,
        "change_threshold": 1,
        "passed": "False"
    },
    "passed": "False"
}
```

In the example above, you can also see a nested dictionary produced by the
[`calculate_diff_on_dicts()`](#snapshotcomparecalculate_diff_on_dicts) method under `changed.changed_raw`.

__Parameters__


- __report_type__ (`str`): Name of report (type) that has to be compared. Basically this is a snapshot state area, for example
    `nics`, `routes`, etc.
- __properties__ (`list(str), optional`): (defaults to `None`) An optional list of properties to include or exclude when
    comparing snapshots. This parameter is passed directly to the
    [`calculate_diff_on_dicts()`](#snapshotcomparecalculate_diff_on_dicts) method. For details on this method parameters,
    see the [documentation](#snapshotcomparecalculate_diff_on_dicts) for this method.
- __count_change_threshold__ (`int, float, optional`): (defaults to `None`) The maximum difference between number of changed
    elements in each snapshot (as percentage).

__Returns__


`dict`: Comparison results.

### `SnapshotCompare.get_count_change_percentage`

```python
def get_count_change_percentage(
    report_type: str,
    thresholds: Optional[List[Dict[str, Union[int, float]]]] = None
) -> Optional[Dict[str, Union[bool, dict]]]
```

Generic method to calculate the change on values and compare them against a given threshold.

In opposition to the [`get_diff_and_threshold()`](#snapshotcompareget_diff_and_threshold) method, this one does not
calculate the count change but the actual difference between the numerical values.
A good example is a change in the session count. The snapshot for this area is a dictionary with the keys taking values
of different session types and values containing the actual session count:

```python showLineNumbers title="Example"
{
    "session_stats": {
        "tmo-5gcdelete": "15",
        "tmo-sctpshutdown": "60",
        "tmo-tcp": "3600",
        "tmo-tcpinit": "5",
        "pps": "2",
        "tmo-tcp-delayed-ack": "250",
        "num-max": "819200",
        "age-scan-thresh": "80",
        "tmo-tcphalfclosed": "120",
        "num-active": "3",
        "tmo-sctp": "3600",
        "dis-def": "60",
        "num-tcp": "1",
        "num-udp": "0",
        ...
    }
}
```

This method:

- sweeps through all the session types provided in the `thresholds` variable,
- calculates the actual difference,
- compares the actual difference with the threshold value (percentage) for a particular session type.

It takes as parameter a list of dictionaries describing elements to compare, in a form of:

```json showLineNumbers
{
    "element_type": threshold_value
}
```

Where:

- `element_type` is a key which value we are going to compare,
- `threshold_value` is a percentage value provided as either `int` or `float`. If the list is empty,
    the method will return `None`.

:::caution
This list **does not support** [`ConfigParser`](/panos/docs/panos-upgrade-assurance/api/utils#class-configparser)
[`dialect`](/panos/docs/panos-upgrade-assurance/dialect).
:::

Below there is a sample list for the `sessions_stat` dictionary shown above that would calculate differences for the TCP
and UDP sessions:

```json showLineNumbers
[
    { "num-tcp": 1.5 },
    { "num-udp": 15 },
]
```

__Parameters__


- __thresholds__ (`list`): (defaults to `None`) The list of elements to compare with thresholds.

__Raises__


- `SnapshotSchemeMismatchException`: Thrown when a snapshot element has a different set of properties in both snapshots.

__Returns__


`dict`: The result of difference compared against a threshold. The result for each value is in the same form as returned             by the [`calculate_change_percentage()`](#snapshotcomparecalculate_change_percentage) method. For the examples             above, the return value would be:

```python showLineNumbers title="Sample output"
{
    'num-tcp': {
        'change_percentage': 99.0,
        'change_threshold': 1.5,
        'passed': False
    },
    'num-udp': {
        'change_percentage': 100.0,
        'change_threshold': 15.0,
        'passed': False
    },
    'passed': False
}
```

