---
id: utils
sidebar_label: utils module
title: utils
hide_title: true
custom_edit_url: null
---
## class `CheckType`

Class mapping check configuration strings for commonly used variables.

Readiness checks configuration passed to the
[`CheckFirewall`](/panos/docs/panos-upgrade-assurance/api/check_firewall#class-checkfirewall) class is in a form of a list of
strings. These strings are compared in several places to parse the configuration and set the proper checks. This class is
used to avoid hardcoding these strings. It maps the actual configuration string to a variable that can be referenced in the
code.

## class `SnapType`

Class mapping the snapshot configuration strings to the commonly used variables.

Snapshot configuration passed to the
[`CheckFirewall`](/panos/docs/panos-upgrade-assurance/api/check_firewall#class-checkfirewall) class is in a form of a list of
strings. These strings are compared in several places to parse the configuration and set proper snapshots.
This class is used to avoid hardcoding these strings. It maps the actual configuration string to a variable that can be
referenced in the code.

## class `HealthType`

Class mapping the health check configuration strings to commonly used variables.

[`CheckFirewall`](/panos/docs/panos-upgrade-assurance/api/check_firewall#class-checkfirewall) class is in a form of a list of
strings. These strings are compared in several places to parse the configuration.

This class is used to avoid hardcoding these strings. It maps the actual configuration string to a variable that can be
referenced in the code.

## class `CheckStatus`

Class containing possible statuses for the check results.

Its main purpose is to extend the simple `True`/`False` logic in a way that would provide more details/explanation in case a
check fails. It provides the following statuses:

* `SUCCESS`
* `FAIL`
* `ERROR`
* `SKIPPED`

## class `SupportedHashes`

Class listing supported hashing methods.

Algorithms listed here are order from less to most secure (this order follows many criteria, some of them are mentioned
[here](https://en.wikipedia.org/wiki/Hash_function_security_summary)).

By extending the `Enum` class we can easily use this class to compare two hashing methods in terms of their security,
for example:

```python showLineNumbers title="Example"
bool(SupportedHashes.MD5.value < SupportedHashes.SHA256.value)
```

would produce `True`.

## class `CheckResult`

Class representing the readiness check results.

It provides two types of information:

* `status` which represents information about the check outcome,
* `reason` a reason behind the particular outcome, this comes in handy when a check fails.

Most of the [`CheckFirewall`](/panos/docs/panos-upgrade-assurance/api/check_firewall#class-checkfirewall) methods use this
class to store the return values, but mostly internally. The
[`CheckFirewall.run_readiness_checks()`](/panos/docs/panos-upgrade-assurance/api/check_firewall#checkfirewallrun_readiness_checks)
method translates this class into the python primitives: `str` and `bool`.

__Attributes__


- `status (CheckStatus)`: Holds the status of a check. See [`CheckStatus`](#class-checkstatus) class for details.
- `reason (str)`: Holds a reason explaining why a check fails. Provides no value if the check is successful.

### `CheckResult.__str__`

```python
def __str__()
```

This class' string representation.

__Returns__


`str`: a string combined from the `self.status` and `self.reason` variables. Provides a human readable representation of
the class. Perfect to provide a reason for a particular check outcome.

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

This class is universal, meaning it parses configuration provided as the list of strings or dictionaries and verifies it
against the list of valid configuration items.
There are no hardcoded items against which the configuration is checked. This class is used in many places in this package
and it uses a specific [`dialect`](/panos/docs/panos-upgrade-assurance/dialect).

`ConfigElement` (`str`, `dict`): Type alias for a configuration element in `requested_config` which is either a string or a
    dictionary with a single key. This alias is being used over the `ConfigParser` class to increase clarification.

:::note
Configuration elements beginning with an exclamation mark (!) is referred to as `not-element`s in this dialect and it should
be considered such in any place documented in the `ConfigParser` class. Please refer to the `dialect` documentation for
details.
:::

__Attributes__


- `_requested_config_element_names (set)`: Contains only element names of the requested configuration. When no requested
    configuration is passed, this is equal to `self.valid_elements` which is like an implicit `'all'`.
- `_requested_all_not_elements (bool)`: Identifies if requested configurations consists of all `not-element`s.

### `ConfigParser.__init__`

```python
def __init__(valid_elements: Iterable,
             requested_config: Optional[List[ConfigElement]] = None)
```

ConfigParser constructor.

Introduces some initial verification logic:

* `valid_elements` is converted to `set` - this way we get rid of all duplicates,
* if `requested_config` is `None` we immediately treat it as if `all`  was passed implicitly
    (see [`dialect`](/panos/docs/panos-upgrade-assurance/dialect)) - it's expanded to `valid_elements`
* `_requested_config_element_names` is introduced as `requested_config` stripped of any element configurations.
    Meaning top level keys of nested dictionaries in the `requested_config` are used as element names.
    Additionally, we do verification if all elements of this variable match `valid_elements`,
    if they do not, an exception is thrown by default.
* `_requested_all_not_elements` is set to `True` if all elements of `requested_config` are `not-element`s.

__Parameters__


- __valid_elements__ (`Iterable`): Valid elements against which we check the requested config.
- __requested_config__ (`list, optional`): (defaults to `None`) A list of requested configuration items with an optional
    configuration.

__Raises__


- `UnknownParameterException`: An exception is raised when a requested configuration element is not one of the valid elements.

### `ConfigParser.is_all_not_elements`

```python
@staticmethod
def is_all_not_elements(config: Iterable[ConfigElement]) -> bool
```

Method to check if all config elements are `not-element`s (all exclusive).

__Parameters__


- __config__ (`Iterable`): List of config elements.

__Returns__


`bool`: `True` if all config elements are `not-element`s (exclusive) or config is empty, otherwise returns `False`.

### `ConfigParser.is_element_included`

```python
@staticmethod
def is_element_included(element_name: str,
                        config: Union[Iterable[ConfigElement], None],
                        all_not_elements_check: bool = True) -> bool
```

Method verifying if a given element name should be included according to the config.

__Parameters__


- __element_name__ (`str`): Element name to check if it's included in the provided `config`.
- __config__ (`Iterable`): Config to check against.
- __all_not_elements_check__ (`bool, optional`): (defaults to `True`) Accept element as included if all the `config` elements are
    `not-element`s; otherwise it checks if the element is explicitly included without making an
    [`is_all_not_elements()`](#configparseris_all_not_elements) method call.

__Returns__


`bool`: `True` if element name is included or if all config elements are `not-element`s depending on the
    `all_not_elements_check` parameter.

### `ConfigParser.is_element_explicit_excluded`

```python
@staticmethod
def is_element_explicit_excluded(
        element_name: str, config: Union[Iterable[ConfigElement],
                                         None]) -> bool
```

Method verifying if a given element should be excluded according to the config.

Explicit excluded means the element is present as a `not-element` in the requested config, for example "ntp_sync" is
excluded explicitly in the following config `["!ntp_sync", "candidate_config"]`.

__Parameters__


- __element_name__ (`str`): Element name to check if it's present as a `not-element` in the provided `config`.
- __config__ (`Iterable`): Config to check against.

__Returns__


`bool`: `True` if element is present as a `not-element`, otherwise `False`.

### `ConfigParser._extract_element_name`

```python
@staticmethod
def _extract_element_name(element: ConfigElement) -> str
```

Method that extracts the name from a config element.

If a config element is a string, the actual config element is returned. For elements of a dictionary type, the
1<sup>st</sup> key is returned.

__Parameters__


- __element__ (`ConfigElement`): A config element to provide a name for.

__Raises__


- `WrongDataTypeException`: Thrown when element does not meet requirements.

__Returns__


`str`: The config element name.

### `ConfigParser._iter_config_element_names`

```python
@staticmethod
def _iter_config_element_names(
        config: Iterable[ConfigElement]) -> Iterator[str]
```

Generator for extracted config element names.

This method provides a convenient way to iterate over configuration items with their config element names extracted by
[`_extract_element_name()`](#configparser_extract_element_name) method.

__Parameters__


- __config__ (`Iterable`): Iterable config items as str or dict.

__Returns__


`Iterator`: For config element names extracted by [`ConfigParser._extract_element_name()`](#configparser_extract_element_name)

### `ConfigParser._strip_element_name`

```python
def _strip_element_name(element_name: str) -> str
```

Get element name with exclamation mark removed if so.

Returns element name removing exclamation mark for a `not-element` config.

__Parameters__


- __element_name__ (`str`): Element name.

__Returns__


`str`: Element name with exclamation mark stripped of from the beginning.

### `ConfigParser._is_valid_element_name`

```python
def _is_valid_element_name(element_name: str) -> bool
```

Method verifying if a config element name is a correct (supported) value.

This method can also handle `not-element`s (see [`dialect`](/panos/docs/panos-upgrade-assurance/dialect)).

__Parameters__


- __element_name__ (`str`): The config element name to verify. This can be a `not-element` as well. This parameter is verified
     against `self.valid_elements` set. Key word `'all'` is also accepted.

__Returns__


`bool`: `True` if the value is correct, `False` otherwise.

### `ConfigParser.get_config_element_by_name`

```python
def get_config_element_by_name(
        element_name: str) -> Union[ConfigElement, None]
```

Get configuration element from requested configuration for the provided config element name.

This method returns config element as str or dict from `self.requested_config` for the provided config element name.
It does not support returning `not-element` of a given config element.

__Parameters__


- __element_name__ (`str`): Element name.

__Returns__


`ConfigElement`: str if element is provided as string or dict if element is provided as dict with optional configuration in
    the requested configuration.

### `ConfigParser.prepare_config`

```python
def prepare_config() -> List[ConfigElement]
```

Parse the input config and return a machine-usable configuration.

The parsed configuration retains element types. This means that an element of a dictionary type will remain a dictionary
in the parsed config.

This method handles most of the [`dialect`](/panos/docs/panos-upgrade-assurance/dialect)'s logic.

__Returns__


`List[ConfigElement]`: The parsed configuration.

### `interpret_yes_no`

```python
def interpret_yes_no(boolstr: str) -> bool
```

Interpret `yes`/`no` and `on`/`off` as booleans.

__Parameters__


- __boolstr__ (`str`): `yes`, `no`, `on` or `off`, a typical device response for simple boolean-like queries.

__Raises__


- `WrongDataTypeException`: An exception is raised when `boolstr` is neither `yes`, `no`, `on` or `off`.

__Returns__


`bool`: `True` for *yes* / *on*, `False` otherwise.

### `printer`

```python
def printer(report: dict, indent_level: int = 0) -> None
```

Print reports in human friendly format.

__Parameters__


- __report__ (`dict`): Dict with reports from tests.
- __indent_level__ (`int`): Indentation level.

