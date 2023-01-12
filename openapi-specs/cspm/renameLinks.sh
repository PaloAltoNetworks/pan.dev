# replace the global tags in the Anomalies file
tmp=$(mktemp)
jq '.tags |= [{"name":"Anomalies", "description":"something"}] | .paths[][].tags[] = "Anomalies"' Anomalies.json > "$tmp" && mv "$tmp" Anomalies.json

for file in *.json; do
    sed -i "" "s/\/api\/cloud\/cspm\/.*#operation\//\/cspm\/api\//g" $file
    sed -i "" "s/\/api\/cloud\/cspm\/.*#operation\//\/cspm\/api\//g" $file

    # https://prisma.pan.dev/docs/cloud/cspm -> /prisma-cloud/docs/cspm/cspm-gs/#use-curl-to-generate-jwt-tokens-in-prisma-cloud
    sed -i "" "s/https:\/\/prisma.pan.dev\/docs\/cloud/\/prisma-cloud\/docs/g" $file

    # turn to relative links
    sed -i "" "s/https:\/\/prisma.pan.dev/\//g" $file

    # /api/cloud/cspm/
    sed -i "" "s/\/api\/cloud\/cspm/\/cspm\/api/g" $file

    # /api/cloud -> /prisma-cloud/api/cspm
    sed -i "" "s/\/api\/cloud/\/prisma-cloud\/api\/cspm/g" $file

    # add hyphen (i.e. v2 -> v-2)
    sed -i "" "s/\/cspm\/api\/get-asset-inventory-v2-dashboard-filter-options/\/cspm\/api\/get-asset-inventory-v-2-dashboard-filter-options/g" $file

    # rewrite the GLOBAL tag description
    tmp=$(mktemp)
    jq '.info.description as $tag_desc | .tags[].description |= $tag_desc' $file > "$tmp" && mv "$tmp" $file
done
