---

id: api-time-range-model

title: Prisma Cloud CSPM API Time Range Model

sidebar_label: Time Range Model

hide_table_of_contents: false

---

Some Prisma Cloud Cloud Security Posture Management (CSPM) API request or response objects include a time range model. Depending on the endpoint, this model can describe a time range in different ways. The examples below illustrate the different uses of this model.

* [Time Range Model for Most CSPM Endpoints](#time-range-model-for-most-cspm-endpoints)
* [Compliance Report, Posture, and Asset Inventory Time Range Model](#compliance-report-posture-and-asset-inventory-time-range-model)
* [Alert Dismissal Time Range Model](#alert-dismissal-time-range-model)

## Time Range Model for Most CSPM Endpoints

​The following time range model descriptions apply to all public CSPM endpoints that use a time range model except for compliance report, compliance posture, asset inventory, and alert dismissal endpoints.

* [Absolute  time](#absolute-time)
* [Relative  time](#relative-time)
* [Time  to  now](#time-to-now)

### Absolute Time

With time type `absolute`, you specify Unix timestamps in milliseconds to define the start and end of your time range. The JSON example below shows a `startTime` timestamp of `1504448933000` and an `endTime` timestamp of `1504794533000`.

```json
 {
    "timeRange": {
         "type": "absolute",
         "value": {
             "startTime": 1504448933000,
             "endTime": 1504794533000
        }
    }
}
```

For equivalent endpoints with `GET` methods and query parameters, the time range query parameters make up a query string that appends
to the endpoint URL. An example of a query string is: ``&timeType=absolute&startTime=1504448933000&endTime=1504794533000``

### Relative Time

Time type `relative` defines a window of time from a given point of time in the past until now. Provide both an amount and a time unit.  The JSON example below specifies the past three days. Valid values for `unit` are `hour`, `day`, `week`, `month`, and `year`.

```json
{
    "timeRange": {
        "type": "relative",
        "value": {
           "amount": 3,
           "unit": "day" 
        }
    }
}
```

For equivalent endpoints with `GET` methods and query parameters, the time range query parameters make up a query string that is appends
to the endpoint URL. An example of a query string is: ``&timeType=relative&timeAmount=3&timeUnit=day``

### Time To Now

Like [time type `relative`](#relative-time), time type `to_now` represents a window of time until now, but the time window starting point is the start of the current year, month, week, or day. The unit of time depends on the `value` you specify. In addition, a value of `login` indicates a range from the time of your last login until now, and a value of `epoch` indicates a range from the time of your account on-boarding until now. In the example below, the time range starts from your last login. Valid values for `value` are:

* `login`: From last login
* `epoch`: From account on-boarding
* `day`: From beginning of the day
* `week`: From beginning of the week
* `month`: From beginning of the month
* `year`: From beginning of the year

```json
{
    "timeRange": {
        "type": "to_now",
        "value": "login"
    }
}
```

​For equivalent endpoints with `GET` methods and query parameters, the time range query parameters make up a query string that appends
to the endpoint URL. An example of a query string is: ``&timeType=to_now&timeUnit=login``

## Compliance and Asset Inventory Time Range Model

The following time range model descriptions apply only to the endpoints listed below:

* Compliance:
  * [Compliance posture](/api/cloud/cspm/compliance-posture)
  * [Compliance reports](/api/cloud/cspm/reports)

* Asset Inventory:  
  * [Asset inventory](/api/cloud/cspm/asset-inventory)
  * [Resource (asset) explorer](/api/cloud/cspm/resource-explorer)

### Absolute Time for Compliance and Asset Inventory

​For time type `absolute`, specify a Unix timestamp in milliseconds for just an end time. The resulting time range has a start time equal to the time of your account on-boarding and an end time equal to the `endTime` you specified. The JSON example below specifies a time range from the time of your account on-boarding until the Unix timestamp `1504794533000` in milliseconds.

```json
 {
    "timeRange": {
         "type": "absolute",
         "value": {
             "endTime": 1504794533000
        }
    }
}

```

For equivalent endpoints with `GET` methods and query parameters, the time range query parameters make up a query string that appends
to the endpoint URL. An example of a query string is: ``&timeType=absolute&startTime=1504448933000&endTime=1504794533000``

### Relative Time for Compliance and Asset Inventory

Time type `relative` defines a window of time from a given point in the past until now. Specify both an amount and a time unit. For example, an amount of 3 with a unit of day designates three days ago. The relative time range for compliance and asset inventory endpoints is from the time of account on-boarding until the specified relative point in time. In the following JSON example, the time window is from account on-boarding time until three days ago. Valid values for `unit` are `hour`, `day`, `week`, `month`, and `year`.

```json
{
    "timeRange": {
        "type": "relative",
        "value": {
           "amount": 3,
           "unit": "day" 
        }
    }
}
```

For equivalent endpoints with `GET` methods and query parameters, the time range query parameters make up a query string that appends to the endpoint URL. An example of a query string is: ``&timeType=relative&timeAmount=3&timeUnit=day``

### Time To Now for Compliance and Asset Inventory

For time type `to_now`, the only valid value for `value` is `epoch`, so `to_now` defines a time window between the time of account on-boarding and the current time.

```json
{
    "timeRange": {
        "type": "to_now",
        "value": "epoch"
    }
}
```

For equivalent endpoints with `GET` methods and query parameters, the time range query parameters make up a query string that appends
to the endpoint URL. An example of a query string is: ``&timeType=to_now&timeUnit=epoch``

## Alert Dismissal Time Range Model

The time range model for alert dismissal is special because it denotes a point of time in the future. The following time model descriptions apply only to [Dismiss  Alerts](/api/cloud/cspm/alerts#operation/dismiss-alerts).

* [Absolute  Time  for  Alert  Dismissal](#absolute-time-for-alert-dismissal)
* [Relative  Time  for  Alert  Dismissal](#relative-time-for-alert-dismissal)

### Absolute Time for Alert Dismissal

With time type `absolute`,  specify a Unix timestamp in milliseconds for just an `endTime`. The `endTime` identifies a future point in time. The JSON example below describes a future dismissal time of timestamp `1504794533000`.

```json
{
    "timeRange": {
        "type": "absolute",
        "value": {
            "endTime": 1504794533000
        }
    }
}
```

### Relative Time for Alert Dismissal

Time type `relative` describes a future point in time in relative terms. Specify both an amount and a time unit.  For example, an **amount** of 3 with a `unit` of `day` means three days from now. The values for `unit` can be `hour`, `day`, `week`, `month`, or `year`.

```json
{
    "timeRange": {
        "type": "relative",
        "value": {
           "amount": 3,
           "unit": "day"
        }
    }
}
```
