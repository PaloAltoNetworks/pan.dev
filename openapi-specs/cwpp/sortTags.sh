for file in *.json; do
    tmp=$(mktemp)
    jq '.tags |= sort_by(.name)' $file > "$tmp" && mv "$tmp" $file
done
