# Validate link using curl and get HTTP response code
validate_link() {
    local url="$1"
    local response_code=$(curl -s -o /dev/null -I -w "%{http_code}" "$url")
    echo "$response_code"
}

# Iterate through all the json files in a folder and identify the broken links
for file in ../*.json; do #modify the folder location as required
    echo "$file"
    #jq to fetch absolute and relative links in description fields
    links=$(jq -r '.. |    objects |    with_entries(select(.key | match("^description$"))) |    .[] |    select(type == "string") |    capture("(?<!\\\\)\\[(?<text>[^\\]]+)\\]\\((?<url>[^\\)]+)\\)") |   .url' $file) 
    while IFS= read -r link; do

        if [[ "$link" =~ ^https?:// ]]; then
            full_url="$link"
        else
            # Construct full URL assuming base URL (e.g., https://example.com)
            base_url="https://pan.dev"  
            full_url="$base_url$link"        
        fi

        # Append backslash to the url path if it is missing
        if [[ ! "$full_url" =~ /$ ]]; then         
                full_url="$full_url/"
        fi

        response_code=$(validate_link "$full_url")

        if [[ "$response_code" != 200 ]]; then
        echo "Broken link: $full_url (HTTP $response_code)"
        fi
    done <<< "$links"
done

