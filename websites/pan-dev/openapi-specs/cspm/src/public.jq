# pick only those with x-public
.paths[] |= map_values(select(has("x-public"))) | .paths |= del(.[] | select(. == {}))

# Select only the public endpoints
| .paths[] |= map_values(select(."x-public"? == "true"))

# Clean up empty paths
| .paths |= del(.[] | select(. == {}))
