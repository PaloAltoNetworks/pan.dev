# replace the global tags in the Anomalies file
if [ -f "Anomalies.json" ]; then	
    echo "updating Anomalies.json"

    tmp=$(mktemp)
    jq '.tags |= [{"name":"Anomalies", "description":"temporary description - will be overwritten anyway!"}] | .paths[][].tags[] = "Anomalies"' Anomalies.json > "$tmp" && mv "$tmp" Anomalies.json

    # TEMPORARILY change the operationId getPolicies -> get-policies-anomalies
    sed -i "" "s/getPolicies/get-policies-anomalies/g" Anomalies.json
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
    sed -i "" "s/\/api\/cloud\/cspm\/iam#operation\/get-permissions-access/\/prisma-cloud\/api\/cspm\/get-permissions-access-with-post/g" $file
    sed -i "" "s/\/api\/cloud\/cspm\/iam#operation\/get-permissions/\/prisma-cloud\/api\/cspm\/get-permissions-with-post/g" $file

    sed -i "" "s/\/api\/cloud\/cspm\/.*#operation\//\/prisma-cloud\/api\/cspm\//g" $file

    # https://prisma.pan.dev/docs/cloud/cspm -> /prisma-cloud/docs/cspm/cspm-gs/#use-curl-to-generate-jwt-tokens-in-prisma-cloud
    sed -i "" "s/https:\/\/prisma.pan.dev\/docs\/cloud/\/prisma-cloud\/docs/g" $file

    # turn to relative links
    sed -i "" "s/https:\/\/prisma.pan.dev/\//g" $file

    # /api/cloud/cspm/
    sed -i "" "s/\/api\/cloud\/cspm/\/prisma-cloud\/api\/cspm/g" $file

    # /api/cloud -> /prisma-cloud/api/cspm
    sed -i "" "s/\/api\/cloud/\/prisma-cloud\/api\/cspm/g" $file

    # add hyphen (i.e. v2 -> v-2)
    sed -i "" "s/\/get-asset-inventory-v2-dashboard-filter-options/\/get-asset-inventory-v-2-dashboard-filter-options/g" $file

    # rewrite the GLOBAL tag description
    tmp=$(mktemp)
    jq '.info.description as $tag_desc | .tags[].description |= $tag_desc' $file > "$tmp" && mv "$tmp" $file

    # add server urls
    # jq '.servers |= . + [{"url":"https://api2.prismacloud.io"}, {"url":"https://api3.prismacloud.io"}, {"url":"https://api4.prismacloud.io"}]' $file > "$tmp" && mv "$tmp" $file
done
