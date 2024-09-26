## Dependencies
You will need:
- Bash (e.g. Mac terminal, Linux terminal, WSL if on Windows)
- jq installed globally, visit https://jqlang.github.io/jq/download/

## Scripts
- run `./adjustSpecFilesForPanDev.sh` to adjust links, structure, descriptions, etc.
- run `npx openapi-merge-cli` in the consolidated_spec directory to regenerate the consolidated spec file(merged all the existing spec files into a single OpenAPI 3.0 spec file)
- run `print_operationids_tag_pairs.sh` to print out mappings between operationIds and tags

## Check for duplicate operationIds
- run the following in the `openapi-specs/cspm` directory: `jq '.paths[][].operationId' *.json | sort | uniq -c | sort`

## For Windows (WSL) users
Running on windows requires deleting double quotes on sed commands
e.g.:

| Mac                                                                 | Windows                                                            |
|---------------------------------------------------------------------|--------------------------------------------------------------------|
| `sed -i "" "s/getPolicies/get-policies-anomalies/g" Anomalies.json` | `sed -i "s/getPolicies/get-policies-anomalies/g"   Anomalies.json` |
|                                                                     |                                                                    |


## To process OpenAPI 3 files from Micro Services (i.e. pick out only public endpoints)
- head over to the `/src` directory `cd ./src`
- place your **OpenAPI 3** spec file here `cp /some/directory/openapi_3.json .`
- run `filter_public_endpoints > ../some_microservice_spec.json` which will save the output to **some_microservice_spec.json** in the parent directory