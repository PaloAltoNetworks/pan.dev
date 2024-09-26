# print out a operationId -> tag pairs for all the spec files in this directory
jq '{"key": .paths[][].operationId, "value": .paths[][].tags[0]}' *.json | jq -s 'from_entries'
