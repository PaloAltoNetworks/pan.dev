# This script will pick out ONLY those endpoints that are:
#   - external (public/customer-facing) marked with "x-public": "true"
# input: *.json
# output: stdout ***You can always pipe it somewhere("... | less") or save it to a file("... > openapi.json")***

# Dependencies:
#   - jq (install with brew: "brew install jq")

# Usage:
#   e.g. "bash filter.sh input.json > openapi.json"
#set -ex
#echo "Specify Current Release Version (example:23.6.1)):" >&2
#read curr_release
#echo $curr_release >&2
if [ $# -ne 1 ]; then
    echo "Expecting exactly 1 argument: input file(json format)"
    exit 0  
fi
jq -f public.jq $1 

