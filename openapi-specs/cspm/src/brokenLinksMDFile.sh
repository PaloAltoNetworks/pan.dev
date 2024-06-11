
# Check links recursively in the specified directory (input argument)
if [ $# -ne 1 ]; then
    echo "Usage: ./check_links_recursive.sh <directory>"
    exit 1
fi


check_url() {
    url="$1"
    local response_code=$(curl -s -o /dev/null -I -w "%{http_code}" "$url")
    if [[ "$response_code" != 200 && "$response_code" != 000 ]]; then
        echo "Broken link: $url (HTTP $response_code)"
    fi
}

# Check links in Markdown files recursively within a specified directory
check_links_recursive() {
    local directory="$1"

    # Find all Markdown files (.md) recursively in the specified directory
    find "$directory" -type f -name "*.md" | while read -r file; do
        echo "Checking links in $file..."

        # Extract all URLs (absolute and relative) from the Markdown file
        urls=$(grep -oP '\[([^]]+)\]\(\K[^)]+' "$file" | awk '{print $1}')

        # Check each URL for reachability using curl
        while read -r url; do
            if [[ $url =~ ^/ ]]; then
                # Relative URL: prepend with base URL if needed (e.g., localhost)
                base_url="http://pan.dev"  # Modify base URL as needed
                full_url="$base_url$url"
            else
                # Absolute URL: use as is
                full_url="$url"
            fi

            # Check the URL using curl and print status
            check_url "$full_url"

        done <<< "$urls"  # Pass extracted URLs to the while loop

        echo "Finished checking links in $file"
        echo ""
    done
}


directory="$1"
check_links_recursive "$directory"