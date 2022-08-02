---
id: panos_tutorials_rule_hit_count
title: Export security rule hitcount to CSV
sidebar_label: Rule hit count to CSV
hide_title: false
description: Export security rule hit count to CSV
keywords:
  - PAN-OS API
  - PAN-OS
---

:::note
This tutorial covers how to dump a security rulebase hit count into a CSV file for offline processing. A typical use case leveraging rule hit counts is to identify rules with zero or very few hits that, otherwise, might be eligible for cleanup or deletion.
:::

## Requirements

To follow this tutorial, it is recommended that that you are familiar with the concepts of Palo Alto Networks Next-Generation Firewalls, Security Policies and APIs. Some basic understanding of XML is also recommended.

Make sure you have a Palo Alto Networks Next-Generation Firewall deployed and that you have administrative access to its Management interface via HTTPS. To avoid potential disruptions, it's recommended to run all the tests on a **non-production** environment.

In this tutorial you'll find code examples leveraging the [pan-python](/docs/apis/panpython_qs) and [pan-go](/docs/apis/pango_qs). It is assumed that the reader has basic PAN-OS API knowledge ([curl](/docs/apis/xmlapi_qs)) and that owns an API KEY for his PAN-OS device ([Grab the API Key](/docs/apis/xmlapi_qs#get-your-api-key))

## Rule hit count

Starting with [PAN-OS 8.1](https://docs.paloaltonetworks.com/pan-os/8-1/pan-os-new-features/management-features/rule-usage-tracking), the firewall web and command line interface displays the hit count and additional metadata for traffic matching rules in different rulesets.

![webui hit count](/panos/img/policy-rule-hit-count-example.png "WebUI Hit Count")

These runtime statistics can provide value in some automation use cases. For instance:

- In large deployments (thousands of rules) it might be desirable to export specific datapoints (i.e. rule name, hit count and last hit timestamp) into a CSV file for out-of-band processing (periodic security audit checks)
- SOC operations might be interested on displaying and analyzing time-based graphs of hit-count on selected rules.

## Extracting runtime statistics using PAN-OS API

The above use cases justify the need for a programmatic way of extracting runtime data points (the rule hit count in this case) from the PAN-OS device.

A network security operations engineer might be accustomed to using the device's CLI (PAN-OS CLI in this case) to access that data. The following is an example of CLI command displaying the rule hit count on a Palo Alto Networks firewall.

```text
xhoms@PA-220> show rule-hit-count vsys vsys-name vsys1 rule-base security rules all

Rule Name                                                        Hit Count   Last Hit Timestamp        Last Reset Timestamp      First Hit Timestamp       Rule Create Timestamp     Rule Modify Timestamp
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
LogAllURL-DIdac                                                  510932      Mon Dec 17 15:42:45 2018  -                         Mon Jun 18 15:22:31 2018  Mon Jun 18 15:22:31 2018  Mon Jun 18 15:22:31 2018
HostedPanorama                                                   4487        Fri Apr 27 11:21:18 2018  -                         Wed Apr 25 11:40:01 2018  Wed Apr 25 11:40:01 2018  Wed Apr 25 11:40:01 2018
Minemeld hosted on Rancher                                       180262      Wed Nov 20 12:58:01 2019  -                         Fri Sep 13 12:06:27 2019  Fri Sep 13 11:35:24 2019  Fri Sep 13 12:04:04 2019
ApolloLCaaS                                                      40945810    Wed Nov 20 13:51:02 2019  -                         Tue Apr 10 18:49:52 2018  Tue Apr 10 18:49:52 2018  Tue Apr 10 18:49:52 2018
CrashPlan Access                                                 29184       Wed Nov 20 11:31:07 2019  -                         Thu Jan 24 15:52:04 2019  Thu Jan 24 15:52:04 2019  Thu Jan 24 15:52:04 2019
VPN Xavi Back                                                    2321        Wed Jan 17 07:27:20 2018  -                         Fri Jan 12 22:40:00 2018  Fri Jan 12 22:40:00 2018  Fri Jan 12 22:40:00 2018
...
```

For years, the only way to programmatically access this type of data was using CLI automation tools (Expect / Puppet / ...). But, nowadays, most teams look to leverage APIs to support automation use cases.

### The "type=op" PAN-OS API command

PAN-OS API supports many different type of requests:

- `type=op` (operation commands: i.e. show commands)
- `type=config` (configuration management)
- `type=log` (get log events)
- `type=user-id` (dataplane real-time object update)
- `type=keygen` (generate an API KEY out of user and password data)
- `type=report` (request report generation)
- ... and few other types

The case we're covering in this tutorial requires us to use a `type=op` API requests. Examples of CLI commands that can be emulated with API `type=op` requests are `show`, `clear`, `delete`, `test`, `request`, etc.

`type=op` API requests requires a mandatory `cmd=<xml-command>` parameter. `<xml-command>` is a XML document describing the command to be executed.

For fluent PAN-OS CLI engineers, the easiest way to get the XML document of a CLI command is by enablig CLI debug on their terminal session as in the following example:

```text
debug cli on
show rule-hit-count vsys vsys-name vsys1 rule-base security rules all
```

Example output:

```text
(container-tag: rule-hit-count container-tag: vsys container-tag: vsys-name container-tag: entry key-tag: name value: vsys1 container-tag: rule-base container-tag: entry key-tag: name value: security container-tag: rules container-tag: all pop-tag: pop-tag: pop-tag: pop-tag: pop-tag: pop-tag: pop-tag: pop-tag:)
((eol-matched: . #t) (context-inserted-at-end-p: . #f))

<request cmd="op" cookie="2849954914780104" uid="1001"><operations><show><rule-hit-count><vsys><vsys-name><entry name='vsys1'><rule-base><entry name='security'><rules><all/></rules></entry></rule-base></entry></vsys-name></vsys></rule-hit-count></show></operations></request>
...
```

The output of any CLI command after debug has been turned on will include two XML blocks. The first one contains data about the API request and the second one the raw XML response (in the example above only the first XML block is shown).

The request will look like `<request><operations>[xml-command]</operations></request>`

With all information we have so far we're ready to construct the URL for our API call. It would be:

```text
https://<panos-device>/api/?key=<api-key>&type=op&cmd=<show><rule-hit-count><vsys><vsys-name><entry name='vsys1'><rule-base><entry name='security'><rules><all></all></rules></entry></rule-base></entry></vsys-name></vsys></rule-hit-count></show>
```

The following linux command sequence can be used to perform the previous API call:

```text {5}
HOSTNAME=10.11.29.250
API_KEY=LUFRPT1HR...
CMD=<show><rule-hit-count><vsys><vsys-name><entry name='vsys1'><rule-base><entry name='security'><rules><all></all></rules></entry></rule-base></entry></vsys-name></vsys></rule-hit-count></show>

curl -k --data-urlencode "cmd=$CMD" "https://$HOSTNAME/api/?key=$API_KEY&type=op"
```

Example response

```text
<response status="success"><result><rule-hit-count><vsys><entry name="vsys1"><rule-base><entry name="security"><rules><entry name="LogAllURL-DIdac"><latest>yes</latest><hit-count>510932</hit-count><last-hit-timestamp>1545057765</last-hit-timestamp><last-reset-timestamp>0</last-reset-timestamp><first-hit-timestamp>1529328151</first-hit-timestamp><rule-creation-timestamp>1529328151</rule-creation-timestamp><rule-modification-timestamp>1529328151</rule-modification-timestamp></entry><entry name="HostedPanorama">...
```

The output is a large XML document (it contains hit count details for all rules in the security rule-set) with the following structure:

```text
response
  result
    rule-hit-count
      vsys
        entry
          rule-base
            entry
              rules
                entry name=<rule-name>
                  hit-count
                  last-hit-timestamp
                  ...
                entry
                  hit-count
                  last-hit-timestamp
                  ...
```

As you can see the job of extracting runtime data from a PAN-OS firewall using the API is quite straightforward. Processing the XML output, though, can be a bit tough using plain POSIX/GNU CLI tools.

Let's leverage two of the most used PAN-OS SDK's ( [pan-python](/docs/apis/panpython_qs) and [pan-go](/docs/apis/pango_qs) ) to get the job done.

### Exporting rule hit count to CSV using Python

Look at the following python3 snippet

```python
import pan.xapi
import sys
import operator
import datetime

API_KEY = "LUFRPT1HR.."
HOSTNAME = "10.11.29.250"
CMD = "<show><rule-hit-count><vsys><vsys-name><entry name='vsys1'><rule-base><entry name='security'><rules><all></all></rules></entry></rule-base></entry></vsys-name></vsys></rule-hit-count></show>"


def main():
    try:
        xapi = pan.xapi.PanXapi(
            api_key=API_KEY,
            hostname=HOSTNAME,
            use_get=True
        )
    except pan.xapi.PanXapiError as msg:
        print('pan.xapi.PanXapi:', msg, file=sys.stderr)
        sys.exit(1)

    try:
        # STEP 1: Execute the operational command
        xapi.op(CMD)

        # STEP 2: Parse the XML response
        rules = xapi.element_root.iterfind('.//rules/entry')
        rule_dict = {}
        for rule in rules:
            rule_name = rule.get('name')
            hit_count = rule.findtext('hit-count')
            last_hit_ts = rule.findtext('last-hit-timestamp')
            rule_dict[rule_name] = (
                int(hit_count), datetime.datetime.fromtimestamp(int(last_hit_ts)).isoformat())

        # STEP 3: Sort the data set and print to stdout with CSV format
        print("rulename,hitcount,lasthitts")
        for rule_name, (hit_count, last_hit_ts) in sorted(rule_dict.items(), key=operator.itemgetter(1)):
            print("%s,%s,%s" % (rule_name, hit_count, last_hit_ts))

    except pan.xapi.PanXapiError as msg:
        print('set:', msg, file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
```

The first `try / except` block attemps to leverage pan-python to initialize a `xapi` object connected to our PAN-OS device API

The second `try / except` block performs the following steps in sequence:

- Execute the operational command
- Parse the XML response
- Process the result data set (order by hit count number) and print CSV to sdtout

Let me highline some pieces of code:

```python
rules = xapi.element_root.iterfind('.//rules/entry')
```

pan-python's xapi object features automatic XML parsing of the API response. A field named `element_root` holds the `xml.etree` object corresponding to the parsed XML response.

That allows us to use the `iterfind` method to produce a generator (`rules`) that will yield all elements with XML tag `entry` at the XPATH `.//rules/entry` (look above for the XML response schema of this operational command)

```python {3-5}
rule_dict = {}
for rule in rules:
    rule_name = rule.get('name')
    hit_count = rule.findtext('hit-count')
    last_hit_ts = rule.findtext('last-hit-timestamp')
    rule_dict[rule_name] = (
        int(hit_count), datetime.datetime.fromtimestamp(int(last_hit_ts)).isoformat())
```

A loop iterating the `rules` generator will convert the raw data into a python dictionary whose key will be the rule name and having the tuple `(hit_count, last_hit_ts)` as its value.

Inside the loop, `rule` becomes an `xml.etree` object that will be used to:

- extract the name XML attribute using its `get()` method (rule name)
- extract the XML text node from the XML elements hit-count and last-hit-timestamp using its `findtext()` method

The XML text values are casted to integer (hit-count) and formatted (date representation of the UNIX timestamp)

The last step is a basic sort by hit-count and formatted print (CSV) to stdout.

### Exporting rule hit count to CSV using GO

Look at the following GO snippet

```go
package main

import (
	"fmt"
	"log"
	"sort"
	"time"

	"github.com/PaloAltoNetworks/pango"
)

const (
	apiKey   = "LUFRPT1HR.."
	hostname = "10.11.29.250"
	cmd      = "<show><rule-hit-count><vsys><vsys-name><entry name='vsys1'><rule-base><entry name='security'><rules><all></all></rules></entry></rule-base></entry></vsys-name></vsys></rule-hit-count></show>"
)

type rule struct {
	RuleName  string `xml:"name,attr"`
	HitCount  int64  `xml:"hit-count"`
	LastHitTs int64  `xml:"last-hit-timestamp"`
}

type response struct {
	Rules []rule `xml:"result>rule-hit-count>vsys>entry>rule-base>entry>rules>entry"`
}

type byHitCount []rule

func (r byHitCount) Len() int           { return len(r) }
func (r byHitCount) Swap(i, j int)      { r[i], r[j] = r[j], r[i] }
func (r byHitCount) Less(i, j int) bool { return r[i].HitCount < r[j].HitCount }

func main() {
	var err error
	var response = response{}

	c := &pango.Firewall{Client: pango.Client{
		Hostname: hostname,
		ApiKey:   apiKey,
	}}
	if err = c.Initialize(); err != nil {
		log.Printf("Failed to initialize client: %s", err)
		return
    }

    // STEP 1: Execute the operational command and get the unmarshalled XML response
	_, respErr := c.Op(cmd, "", nil, &response)
	if respErr != nil {
		log.Printf("Failed to execute Op command: %s", respErr)
    }

    // STEP 2: Sort the data set and print to stdout with CSV format
	sort.Sort(byHitCount(response.Rules))
	fmt.Println("rulename,hitcount,lasthitts")
	for _, entry := range response.Rules {
		fmt.Printf("%v,%v,%v\n", entry.RuleName, entry.HitCount,
			time.Unix(entry.LastHitTs, 0).Format(time.RFC3339))
	}
}
```

Let's comment some parts of the code.

```go
c := &pango.Firewall{Client: pango.Client{
    Hostname: hostname,
    ApiKey:   apiKey,
}}
if err = c.Initialize(); err != nil {
    log.Printf("Failed to initialize client: %s", err)
    return
}
```

This is how you define a `Firewall` struct for your PAN-OS device and how you `Initialize()` it to be able to use its `Op()` function.

```go
_, respErr := c.Op(cmd, "", nil, &response)
```

The `Op(req interface{}, vsys string, extras interface{}, ans interface{})` method executes the API `req` (a string representing a XML command in this case) and returns a `[]byte` slice with the XML response (we're discarding it). In case you provide a non-nil value to the `ans` parameter (we are providing `&response`) then the `Op()` function will try to unmarshall the XML response in your structure.

The following is the struct of the `response` we're passing to `Op()`. Using this strategy we leverage pan-go's XML parser and data conversion features simplifying data processing on our end.

```go
type rule struct {
	RuleName  string `xml:"name,attr"`
	HitCount  int64  `xml:"hit-count"`
	LastHitTs int64  `xml:"last-hit-timestamp"`
}

type response struct {
	Rules []rule `xml:"result>rule-hit-count>vsys>entry>rule-base>entry>rules>entry"`
}
```

The last part of the code is a simple sort and CSV print to stdout code.

## Summary

Many automation use cases require the DevOps engineers to be able to extract runtime data from PAN-OS firewalls. Any data that can obtained from CLI commands can also be accessed programmatically using the XML API.

Although the API can be consumed directly (i.e. using `curl` commands) it is highly recommended to leverage any available SDK. In this tutorial we've introduced both the `pan-python` and `pan-go` SDK's and highlined the benefits of using them (i.e. XML response parsing and data type conversion)
