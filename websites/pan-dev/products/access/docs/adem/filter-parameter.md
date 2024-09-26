---
id: filter-parameter
title: ADEM Filter Parameter
description: Autonomous DEM API Filter Parameter
hide_title: false
hide_table_of_contents: false
---

Autonomous DEM APIs require a `filter` query parameter.  It selects which fields to include in the
query. You must use the format:

    field<operator>value

The following operators are supported:  >=, <=, ==, !=, >, <

Multiple filters are supported, logically combined with semi-colon to describe AND, and a comma to
describe OR. For example:

    agent_uuid==1234,agent_uuid==5678;application==Gmail,application==Zoom

would select values (that is, scores, metrics) when the agent uuid is either 1234 OR 5678 AND application
is Gmail OR Zoom.
