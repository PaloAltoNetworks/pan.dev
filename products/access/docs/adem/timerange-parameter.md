---
id: timerange-parameter
title: ADEM Timerange Parameter
description: Autonomous DEM API Timerange Parameter
hide_title: false
hide_table_of_contents: false
---

Autonomous DEM APIs provide a `timerange` query parameter. The timerange that you supply is in human readable format:

    last_<N>_<minute|hour|day|week|month>. 

For example: 

    last_30_days
    last_30_minutes
    last_2_weeks 

The responses are aggregated over a sample period which is a function of the time interval
requested, such that the granularity decreases with increasing interval. This keeps the number of
sample returned to a reasonable number whilst still allowing higher resolution at small intervals.

| Interval (days)    | Sample Period (minutes) |
| ---------------    | ----------------------- |
| <= 1               |  5                      |
| <= 3               | 15                      |
| <= 7               | 30                      |
| <= 14              | 60                      |
| <= 21              | 120                     |
| >21                | 180                     |

Alternately, you can specify an exact time range using the `start` and `end` query parameters. These accept Unix
timestamps. For example: 

    start=1686814360&end=1686900760
