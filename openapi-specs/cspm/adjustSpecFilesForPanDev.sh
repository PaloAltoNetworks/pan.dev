# replace the global tags in the Anomalies file
if [ -f "Anomalies.json" ]; then	
    echo "updating Anomalies.json"

    tmp=$(mktemp)
    jq '.tags |= [{"name":"Anomalies", "description":"temporary description - will be overwritten anyway!"}] | .paths[][].tags[] = "Anomalies"' Anomalies.json > "$tmp" && mv "$tmp" Anomalies.json

    # TEMPORARILY change the operationId getPolicies -> get-policies-anomalies
    sed -i  "s/getPolicies/get-policies-anomalies/g" Anomalies.json
fi

# replace the global tags in the IAM file
if [ -f "IAM.json" ]; then
    echo "updating IAM.json"

    tmp=$(mktemp)
    jq '.tags |= [{"name":"IAM", "description":"temporary description - will be overwritten anyway!"}] | .paths[][].tags[] = "IAM"' IAM.json > "$tmp" && mv "$tmp" IAM.json
fi

# replace the global tags in the IAM IDP file
if [ -f "IAMIdp.json" ]; then
    echo "updating IAMIdp.json"

    tmp=$(mktemp)
    jq '.tags |= [{"name":"IAM IDP", "description":"temporary description - will be overwritten anyway!"}] | .paths[][].tags[] = "IAM IDP"' IAMIdp.json > "$tmp" && mv "$tmp" IAMIdp.json
fi

for file in *.json; do
    sed -i  "s/\/api\/cloud\/cspm\/iam#operation\/get-permissions-access/\/prisma-cloud\/api\/cspm\/get-permissions-access-with-post/g" $file
    sed -i  "s/\/api\/cloud\/cspm\/iam#operation\/get-permissions/\/prisma-cloud\/api\/cspm\/get-permissions-with-post/g" $file

    sed -i  "s/\/api\/cloud\/cspm\/.*#operation\//\/prisma-cloud\/api\/cspm\//g" $file

    # https://prisma.pan.dev/docs/cloud/cspm -> /prisma-cloud/docs/cspm/cspm-gs/#use-curl-to-generate-jwt-tokens-in-prisma-cloud
    sed -i  "s/https:\/\/prisma.pan.dev\/docs\/cloud/\/prisma-cloud\/docs/g" $file

    # turn to relative links
    sed -i  "s/https:\/\/prisma.pan.dev/\//g" $file

    # /api/cloud/cspm/
    sed -i  "s/\/api\/cloud\/cspm/\/prisma-cloud\/api\/cspm/g" $file

    # /api/cloud -> /prisma-cloud/api/cspm
    sed -i  "s/\/api\/cloud/\/prisma-cloud\/api\/cspm/g" $file

    # add hyphen (i.e. v2 -> v-2)
    sed -i  "s/\/get-asset-inventory-v2-dashboard-filter-options/\/get-asset-inventory-v-2-dashboard-filter-options/g" $file

    # rewrite the GLOBAL tag description when it is coming from the monolith file
    tmp=$(mktemp)
     jq '.info.description as $tag_desc| if($tag_desc!=null) then .tags[]?.description |= $tag_desc else . end' $file | \

    # Add note for darwin-only APIs
    #jq '.paths[][] |= if(."x-ga" and (."x-ga"|contains("darwin")) and (.description | contains("Darwin release only") | not)) then .description+="\n:::info\nThis endpoint is available on the Prisma Cloud Darwin release only.\n:::\n" else . end' | \
    
    jq '.paths[][] |= if(."x-ga" and (."x-ga" |contains("darwin")) and (.description | test("Darwin release only") | not)) then .description+="\n:::info\nThis endpoint is available on the Prisma Cloud Darwin release only.\n:::\n" else . end' | \

    # remove S2S headers or parameters if any
    jq '.paths |= del(.[][].parameters[]? | select(.description!=null ) | select (.description | contains("S2S")))' | \

    # delete code snippets
    jq '.paths |= del(.[][]."x-codeSamples")' | \

    jq '.paths |= del(.[][].responses | .[keys[] | select(contains("5xx","5XX","500", "501", "502","503", "504", "505", "506", "507", "508","509","510","511", "529", "530","598","599"))])' | \

    # add server urls
    jq '.servers |= [
        {"url":"https://api.prismacloud.io"},
        {"url":"https://api2.prismacloud.io"},
        {"url":"https://api3.prismacloud.io"},
        {"url":"https://api4.prismacloud.io"},
        {"url":"https://api.anz.prismacloud.io"},
        {"url":"https://api.eu.prismacloud.io"},
        {"url":"https://api2.eu.prismacloud.io"},
        {"url":"https://api.gov.prismacloud.io"},
        {"url":"https://api.prismacloud.cn"},
        {"url":"https://api.ca.prismacloud.io"},
        {"url":"https://api.sg.prismacloud.io"},
        {"url":"https://api.uk.prismacloud.io"},
        {"url":"https://api.ind.prismacloud.io"},
        {"url":"https://api.jp.prismacloud.io"},
        {"url":"https://api.fr.prismacloud.io"}]' | \

    # add securityScheme to every spec file
    jq '.components.securitySchemes |= { "x-redlock-auth": {
        "description": "The x-redlock-auth value is a JSON Web Token (JWT).",
        "in": "header",
        "name": "x-redlock-auth",
        "type": "apiKey"
      }}' | \

    # add security field to every endpoint
    jq '.paths[][].security |= [ { "x-redlock-auth": [] } ]'  > "$tmp" && mv "$tmp" $file 
   
done



# app-login endpoint isn't supposed to be protected
tmp=$(mktemp)
jq '.paths |= del(.["/login"][].security)' Login.json > "$tmp" && mv "$tmp" Login.json

# update the list of all the endpoints (summary for engineering to peek at what's published)
jq -f list-operations-with-ids.jq *.json | jq '.[]' | jq -s -r '(.[0] | keys_unsorted) as $keys | $keys, map([.[ $keys[] ]])[] | @csv' > consolidated_spec/all_endpoints.csv
