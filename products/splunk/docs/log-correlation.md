---
id: log-correlation
title: Log Correlation
---
:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::

# Log Correlation

A common use of Splunk is to correlate different kinds of logs together. In fact, Palo Alto Networks Next-generation Firewall logs often need to be correlated together, such as joining traffic logs with threat logs. This page includes a few common examples which you can use as a starting point to build your own correlations.

## Correlation techniques

Each of these techniques can be used to perform the same correlation, however, each has a different performance profile. They are listed here in order of increasing search complexity and decreasing time cost. In other words the last technique is the most efficient for Splunk, but the hardest for a human to read.

Each example will correlate `traffic` logs and `url` logs to determine how many bytes have been transferred between each FQDN in the time period. The URL log has a `dest_name` field with the FQDN and the Traffic log has a `bytes_out` field, so we need to correlate them to know how many bytes went out for each FQDN. The goal is to visualize possible data exfiltration by showing the total `bytes_out` for each FQDN.

### Correlation technique 1: Use a 'join' or 'transaction'

Join and Transaction commands are expensive, but conceptually familiar to most people. In a pinch they can be used to get a  view of the data, but if you're making a dashboard on a larger dataset, they can be pretty expensive.

```
sourcetype="pan:threat" log_subtype="url"
  | join type=left session_id [ search sourcetype="pan:traffic" log_subtype="end" ]
  | stats count, sum(bytes_in), sum(bytes_out) BY dest_name
  | sort -sum(bytes_out)
```

In this example, we search for all URL logs \(which contains the FQDN\), then join them with traffic logs generated at the end of a session \(which contains the total bytes in and out\). The field we join on is `session_id`. All logs from a specific TCP session will have the same `session_id`, so it makes a decent correlation point.  See [Best correlation fields](#best-correlation-fields) below for examples where session ID is not enough to correlate logs.

### Correlation technique 2: Stats correlation

This technique is less common, but is very useful. It's faster than a join because it reduces the number of searches required, but not much faster because it still pulls from the index.

Here we perform the same search as the 'join' above and get the same results, but without using a 'join'.

```
(sourcetype="pan:threat" AND log_subtype="url") OR (sourcetype="pan:traffic" AND log_subtype="end")
  | stats values(sourcetype), values(dest_name) AS dest_name, count, sum(bytes_in) AS bytes_in, sum(bytes_out) AS bytes_out BY session_id
  | stats sum(count) AS count, sum(bytes_in), sum(bytes_out) BY dest_name
  | sort -sum(bytes_out)
```

In this example, instead of joining two searches \(one for URL logs and one for Traffic\) we create a single search that pulls both, then use `stats` to filter and aggregate the data as we like.  This is much faster then a join because we have only one round-trip to pull data from the index and we have eliminated the expensive `join` operation and replaced it with a stats groupby operation which is faster. First we group by `session_id` to perform the correlation, then group by `dest_name` to build the final table of results we want.

### Correlation technique 3: Datamodel \(tstats\)

This is by far the fastest correlation technique. In fact, it is the only technique we use in the Palo Alto Networks App for Splunk because of the sheer volume of data and just how much faster this technique is over the others. However, it is also the most complicated search syntax and is completely different than traditional SPL search language, so it takes some getting used to.

This technique does not pull from the index, so there are a couple things you need to configure before using it.

Requirements:

* [Install the Palo Alto Networks App for Splunk](../installation). It contains a full datamodel for all Palo Alto Networks logs which is where we'll pull the logs from.
* [Turn on Datamodel Acceleration](../installation#enable-datamodel-acceleration) for all the Palo Alto Networks datamodels.

```
| tstats summariesonly=t count, values(log.bytes_in) AS log.bytes_in, values(log.bytes_out) AS log.bytes_out, values(log.dest_name) AS log.dest_name FROM datamodel="pan_firewall" WHERE nodename="log.traffic.end" OR nodename="log.url" GROUPBY log.session_id
  | rename log.* AS *
  | stats sum(count) AS count, sum(bytes_in), sum(bytes_out) BY dest_name
  | sort -sum(bytes_out)
```

In this example, we use a [generating command](https://docs.splunk.com/Splexicon:Generatingcommand) called [tstats](https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Tstats). Note that generating search commands must be preceded with a 'pipe' `|` symbol as in the example. The `| tstats` command pulls from the accelerated datamodel summary data instead of the raw data in the index. This is much faster than using the index. We use `summariesonly=t` here to force `| tstats` to pull from the summary data and not the index. By default it will pull from both which can significantly slow down the search.

Note that every field has a `log.` prefix which is required when using `tstats` with Palo Alto Networks logs.

URL data and Traffic data are pulled in one tstats command, so there is only one round trip to the summary data. Then, we use `rename` to strip the `log.` prefix from every field. Then we use the `stats` command to filter and aggregate similar to the previous techniques.

## Best correlation fields

Each of the examples above use the `session_id` field as the correlation point. Session ID is the obvious choice to correlated logs from the firewall. All logs from a specific TCP session will have the same `session_id`, so Traffic and Threat logs can correlate by this field in many cases.

However, a firewall will run out of session ID's eventually and start to reuse them. For a firewall processing a huge amount of traffic in a vast network, this can happen pretty quickly. Also, there is no gauranteed that two firewalls won't pick the same session ID at the same time to refer to different sessions, since session ID's are not globally unique across all firewalls.

So, while session ID is a reasonable correlation point, there exist situations where you might correlate logs together that actually aren't related.

If you'd like to enforce a gaurantee that the resulting data is correlated with complete accuracy, you can correlate with multiple fields. The Palo Alto Networks App uses the following fields to perform all correlations:

* `serial_number`
* `vsys`
* `session_id`
* `src_ip`
* `src_port`

By using all 5 of these fields in your join, search, or tstats command, you can gaurantee accuracy of the correlation at a very small cost to efficiency and readability.

