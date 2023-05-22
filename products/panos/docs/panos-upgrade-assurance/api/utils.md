---
id: utils
sidebar_label: utils module
title: utils
hide_title: true
custom_edit_url: null
---
## class `UnknownParameterException`

Used when one of the requested configuration parameters processed by [`ConfigParser`](#class-configparser) is not a valid parameter.

## class `WrongDataTypeException`

Used when a variable does not meet data type requirements.

## class `CheckType`

Class mapping check configuration strings for commonly used variables.

Readiness checks configuration passed to the [`CheckFirewall`](/panos/docs/panos-upgrade-assurance/api/check_firewall#class-checkfirewall) class is in a form of a list of strings. These strings are compared in several places to parse the configuration and set the proper checks. This class is used to avoid hardcoding these strings. It maps the actual configuration string to a variable that can be referenced in the code.

## class `SnapType`

Class mapping the snapshot configuration strings to the commonly used variables.

Snapshot configuration passed to the [`CheckFirewall`](/panos/docs/panos-upgrade-assurance/api/check_firewall#class-checkfirewall) class is in a form of a list of strings. These strings are compared in several places to parse the configuration and set proper snapshots.
This class is used to avoid hardcoding these strings. It maps the actual configuration string to a variable that can be referenced in the code.

## class `CheckStatus`

Class containing possible statuses for the check results.

Its main purpose is to extend the simple `True`/`False` logic in a way that would provide more details/explanation in case a check fails. It provides the following statuses:

* `SUCCESS`
* `FAIL`
* `ERROR`
* `SKIPPED`

## class `CheckResult`

Class representing the readiness check results.

It provides two types of information:

* `status` which represents information about the check outcome,
* `reason` a reason behind the particular outcome, this comes in handy when a check fails.

Most of the [`CheckFirewall`](/panos/docs/panos-upgrade-assurance/api/check_firewall#class-checkfirewall) methods use this class to store the return values, but mostly internally. The [`CheckFirewall.run_readiness_checks()`](/panos/docs/panos-upgrade-assurance/api/check_firewall#checkfirewallrun_readiness_checks) method translates this class into the python primitives: `str` and `bool`.

__Attributes__


- `status (CheckStatus)`: Holds the status of a check. See [`CheckStatus`](#class-checkstatus) class for details.
- `reason (str)`: Holds a reason explaining why a check fails. Provides no value if the check is successful.

### `CheckResult.__str__`

```python
def __str__()
```

This class' string representation.

__Returns__


`str`: a string combined from the `self.status` and `self.reason` variables. Provides a human readable representation of the class. Perfect to provide a reason for a particular check outcome.

### `CheckResult.__bool__`

```python
def __bool__()
```

Class' boolean representation.

__Returns__


`bool`: a boolean value interpreting the value of the current `state`:

* `True` when `status` [`CheckStatus.SUCCESS`](#class-checkstatus)
* `False` otherwise.

## class `ConfigParser`

Class responsible for parsing the provided configuration.

This class is universal, meaning it parses configuration provided as the list of strings or dictionaries and verifies it against the list of valid configuration items.
There are no hardcoded items against which the configuration is checked. This class is used in many places in this package and it uses a specific [`dialect`](/panos/docs/panos-upgrade-assurance/dialect).

__Attributes__


- `_requested_config_names (set)`: Contains only element names of the requested configuration. When no requested configuration is passed (implicit `'all'`), this is equal to `self.valid_elements`.

### `ConfigParser.__init__`

```python
def __init__(valid_elements: Iterable,
             requested_config: Optional[List[Union[str, dict]]] = None)
```

ConfigParser constructor.

Introduces some initial verification logic:

* `valid_elements` is converted to `set` - this way we get rid of all duplicates,
* if `requested_config` is `None` we immediately treat it as if `all`  was passed implicitly (see [`dialect`](/panos/docs/panos-upgrade-assurance/dialect)) - it's expanded to `valid_elements`
* `_requested_config_names` is introduced as `requested_config` stripped of any element configurations. Additionally, we do verification if elements of this variable match `valid_elements`. An exception is thrown if not.

__Parameters__


- __valid_elements__ (`iterable`): Valid elements against which we check the requested config.
- __requested_config__ (`list, optional`): (defaults to `None`) A list of requested configuration items with an optional configuration.

__Raises__


- `UnknownParameterException`: An exception is raised when a requested configuration element is not one of the valid elements.

### `ConfigParser._is_element_included`

```python
def _is_element_included(element: str) -> bool
```

Method verifying if a config element is a correct (supported) value.

This method can also handle `not-elements` (see [`dialect`](/panos/docs/panos-upgrade-assurance/dialect)).

__Parameters__


- __element__ (`str`): The config element to verify. This can be a `not-element`. This parameter is verified against `self.valid_elements` `set`. Key word `'all'` is also accepted.

__Returns__

`bool`: `True` if the value is correct, `False` otherwise.

### `ConfigParser._extract_element_name`

```python
@staticmethod
def _extract_element_name(config: Union[str, dict]) -> str
```

Method that extracts the name from a config element.

If a config element is a string, the actual config element is returned. For elements of a dictionary type, the 1<sup>st</sup> key is returned.

__Parameters__


- __config__ (`str, dict`): A config element to provide a name for.

__Raises__


- `WrongDataTypeException`: Thrown when config does not meet requirements.

__Returns__


`str`: The config element name.

### `ConfigParser._expand_all`

```python
def _expand_all() -> None
```

Expand key word `'all'` to  `self.valid_elements`.

During expansion, elements from `self.valid_elements` which are already available in `self.requested_config` are skipped. This way we do not introduce duplicates for elements that were provided explicitly.

This method directly operates on `self.requested_config`.

### `ConfigParser.prepare_config`

```python
def prepare_config() -> List[Union[str, dict]]
```

Parse the input config and return a machine-usable configuration.

The parsed configuration retains element types. This means that an element of a dictionary type will remain a dictionary in the parsed config.

This method handles most of the [`dialect`](/panos/docs/panos-upgrade-assurance/dialect)'s logic.

__Returns__

`list`: The parsed configuration.

### `interpret_yes_no`

```python
def interpret_yes_no(boolstr: str) -> bool
```

Interpret `yes`/`no` as booleans.

__Parameters__


- __boolstr__ (`str`): `yes` or `no`, a typical device response for simple boolean-like queries.

__Raises__


- `WrongDataTypeException`: An exception is raised when `boolstr` is neither `yes` or `no`.

__Returns__


`bool`: `True` for *yes*, `False` for *no*.

### `printer`

```python
def printer(report: dict, indent_level: int = 0) -> None
```

Print reports in human friendly format.

__Parameters__


- __report__ (`dict`): Dict with reports from tests.
- __indent_level__ (`int`): Indentation level.

