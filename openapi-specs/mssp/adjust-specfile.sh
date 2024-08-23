#!/bin/bash

for file in *.json; do

    # /api/cloud/cspm/

    sed -i '.bak' "s/\/api\/cloud\/cspm/\/prisma-cloud\/api\/mssp/g" $file
    # /api/cloud -> /prisma-cloud/api/mssp
    sed -i '.bak' "s/\/api\/cloud/\/prisma-cloud\/api\/mssp/g" $file


    # rewrite the GLOBAL tag description when it is coming from the monolith file
    tmp=$(mktemp)
     jq '.info.description as $tag_desc| if($tag_desc!=null) then .tags[]?.description |= $tag_desc else . end' $file | \


    # remove S2S headers or parameters if any
    jq '.paths |= del(.[][].parameters[]? | select(.description!=null ) | select (.description | contains("S2S")))' | \

    # delete code snippets
    jq '.paths |= del(.[][]."x-codeSamples")' | \

    # delete all 5xx error from endpoints
    jq '.paths |= del(.[][].responses | .[keys[] | select(contains("5xx","5XX","500", "501", "502","503", "504", "505", "506", "507", "508","509","510","511", "529", "530","598","599"))])' | \

    # add server urls
    jq '.servers |= [
        {"url":"https://mssp-api.prismacloud.io"},
        {"url":"https://mssp-api2.prismacloud.io"},
        {"url":"https://mssp-api3.prismacloud.io"},
        {"url":"https://mssp-api4.prismacloud.io"},
        {"url":"https://mssp-api.anz.prismacloud.io"},
        {"url":"https://mssp-api.eu.prismacloud.io"},
        {"url":"https://mssp-api2.eu.prismacloud.io"},
        {"url":"https://mssp-api.gov.prismacloud.io"},
        {"url":"https://mssp-api.prismacloud.cn"},
        {"url":"https://mssp-api.ca.prismacloud.io"},
        {"url":"https://mssp-api.sg.prismacloud.io"},
        {"url":"https://mssp-api.uk.prismacloud.io"},
        {"url":"https://mssp-api.ind.prismacloud.io"},
        {"url":"https://mssp-api.jp.prismacloud.io"},
        {"url":"https://mssp-api.fr.prismacloud.io"}]' | \

    # Remove all x-redlock-auth from each endpoint parameters object if they exist
    # securitySchemes requires the x-redlock-auth should only appear in the security fields
    jq '.paths |= del(.[][].parameters[]? | select(.name!=null ) | select (.name | contains("x-redlock-auth")))' | \

    # add securityScheme to every spec file
    # jq '.components.securitySchemes |= { "x-redlock-auth": {
    #     "description": "The x-redlock-auth value is a JSON Web Token (JWT).",
    #     "in": "header",
    #     "name": "x-redlock-auth",
    #     "type": "apiKey"
    #   }}' | \

    # add security field to every endpoint
    # jq '.paths[][].security |= [ { "x-redlock-auth": [] } ]'  > "$tmp" && mv "$tmp" $file
    # do not replace the temp file for my own learning
    # jq '.paths[][].security |= [ { "x-redlock-auth": [] } ]'  > "$tmp" && mv "$tmp" "jdevore-temp-mssp.json"

done



# update the list of all the endpoints (summary for engineering to peek at what's published)
jq -f list-operations-with-ids.jq *.json | jq '.[]' | jq -s -r '(.[0] | keys_unsorted) as $keys | $keys, map([.[ $keys[] ]])[] | @csv' > consolidated_spec/all_endpoints.csv
