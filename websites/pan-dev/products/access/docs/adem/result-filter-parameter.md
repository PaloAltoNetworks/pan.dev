---
id: result-filter-parameter
title: ADEM Result Filter Parameter
description: Autonomous DEM API Result Filter Parameter
hide_title: false
hide_table_of_contents: false
---

Autonomous DEM APIs provide a `result-filter` query parameter that allows you to limit results by
filtering the output of the query. It maps to a HAVING statement ( as compared with the input, which
maps to a SELECT ). The output is filtered by requiring specified scores to be in a range defined by
the score classification:

| Category           | Range                |
| ---------------    | -------------------- |
| Poor               |  less than 30        |
| Fair               | 30-70                |
| Good               | greater than 70      |

Use the format 

    Score.<field1>==<category>,..; 

For example, to limit score results by category, use 

    Score.endpointScore==fair, good 

or 

    Score.application==good; Score.lan==fair,good

This parameter is supported by 
[/agent/score](/access/api/adem/get-agent-v-2-measure-agent-score/) 
and 
[application/score](/access/api/adem/get-agent-v-2-measure-application-score/) endpoints.
