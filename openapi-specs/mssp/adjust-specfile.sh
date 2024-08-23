#!/bin/bash

for file in *.json; do
    sed -i '.bak' "s/\/api\/cloud\/cspm/\/prisma-cloud\/api\/mssp/g" $file
    # /api/cloud -> /prisma-cloud/api/mssp
    sed -i '.bak' "s/\/api\/cloud/\/prisma-cloud\/api\/mssp/g" $file


    # rewrite the GLOBAL tag description when it is coming from the monolith file
    tmp=$(mktemp)
     jq '.info.description as $tag_desc| if($tag_desc!=null) then .tags[]?.description |= $tag_desc else . end' $file | \


    # Remove Service to Service Authentication from spec file (used by internal APIs)
    jq '.paths |= del(.[][].parameters[]? | select(.description!=null ) | select (.description | contains("S2S")))' | \

    # delete code snippets
    jq '.paths |= del(.[][]."x-codeSamples")' | \

    # delete all 5xx error from endpoints
    jq '.paths |= del(.[][].responses | .[keys[] | select(contains("5xx","5XX","500", "501", "502","503", "504", "505", "506", "507", "508","509","510","511", "529", "530","598","599"))])' | \

    # Add hostname server urls
    # MSSP is currently deployed to only 1 region - Aug 23, 2024
    # Additional regions may be added in the future
    jq '.servers |= [
        {"url":"https://mssp-api.prismacloud.io"}]' | \

    # Remove all x-redlock-auth from each endpoint parameters object if they exist
    # securitySchemes requires the x-redlock-auth should only appear in the security fields
    jq '.paths |= del(.[][].parameters[]? | select(.name!=null ) | select (.name | contains("x-redlock-auth")))' > "$tmp" && mv "$tmp" $file

done



# update the list of all the endpoints (summary for engineering to peek at what's published)
jq -f list-operations-with-ids.jq *.json | jq '.[]' | jq -s -r '(.[0] | keys_unsorted) as $keys | $keys, map([.[ $keys[] ]])[] | @csv' > consolidated_spec/all_endpoints.csv
