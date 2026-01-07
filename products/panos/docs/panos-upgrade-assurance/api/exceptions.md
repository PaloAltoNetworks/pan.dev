---
id: exceptions
sidebar_label: exceptions module
title: exceptions
hide_title: true
custom_edit_url: null
---
## class `WrongDataTypeException`

Used when passed configuration does not meet the data type requirements. Used in all modules.

## class `FirewallProxyException`

Parent class for all exceptions coming from [FirewallProxy](/panos/docs/panos-upgrade-assurance/api/firewall_proxy)
module.

## class `CheckFirewallException`

Parent class for all exceptions coming from [CheckFirewall](/panos/docs/panos-upgrade-assurance/api/check_firewall)
module.

## class `SnapshotCompareException`

Parent class for all exceptions coming from [SnapshotCompare](/panos/docs/panos-upgrade-assurance/api/snapshot_compare)
module.

## class `UtilsException`

Parent class for all exceptions coming from [Utils](/panos/docs/panos-upgrade-assurance/api/utils) module.

## class `WrongNumberOfArgumentsException`

Thrown when [FirewallProxy](/panos/docs/panos-upgrade-assurance/api/firewall_proxy) constructor is given wrong number or
set of arguments.

## class `CommandRunFailedException`

Used when a command run on a device does not return the `success` status.

## class `GetXpathConfigFailedException`

Used when XAPI does not return a `success` state when running a `get` operation.

## class `MalformedResponseException`

A generic exception class used when a response does not meet the expected standards.

## class `DeviceNotLicensedException`

Used when no license is retrieved from a device.

## class `ContentDBVersionsFormatException`

Used when parsing Content DB versions fail due to an unknown version format (assuming `XXXX-YYYY`).

## class `PanoramaConfigurationMissingException`

Used when checking Panorama connectivity on a device that was not configured with Panorama.

## class `WrongDiskSizeFormatException`

Used when parsing free disk size information.

## class `UpdateServerConnectivityException`

Used when connection to the Update Server cannot be established.

## class `MissingKeyException`

Used when an exception about the missing keys in a dictionary is thrown.

## class `SnapshotSchemeMismatchException`

Used when a snapshot element contains different properties in both snapshots.

## class `SnapshotNoneComparisonException`

Raised when attempting to compare None with dict in snapshot comparison.

## class `UnknownParameterException`

Used when one of the requested configuration parameters is not a valid.

