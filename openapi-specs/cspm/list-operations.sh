jq -f list-operations-with-ids.jq *.json | sort | sed -e '1s/^/[/' -e 's/$/,/' -e '$s/,$/]/'
