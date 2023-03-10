# 1 - Selects paths objects
#--------------------------
# returns [{key: path, value: path value}]
.paths # Selects the paths property content
| to_entries # Transforms
             # { "/resources": { "get": {operation data}}} 
             # to 
             # [ { "key": "/resources", 
             #     "value": { "get": {operation data}} ]
| map(select(.key | test("^x-") | not)) # Gets rid of x-tensions
# 2 - Creates an array of operations
#-----------------------------------
# returns [{path, method, summary, deprecated}]
| map ( # Applies a transformation to each element
  .key as $path # Stores the path value (.key) 
                  # in a variable ($path) for later use
  | .value # Keeps only the path's content 
           # { "get": {operation data}}
  | to_entries # Transforms 
               # { "get": {operation data}}
               # to
               # [ { "key": "get", 
               #     "value": {operation data}} ]
  | map( # Applies a transformation to each element
    select( # Keeps only elements for which the following is true
      # With IN, which returns true if the value is one of its
      # parameters, we can get rid of x- , parameters
      # description and summary properties
      .key | IN("get", "put", "post", "delete", 
         "options", "head", "patch", "trace")
    )
    | # Creates a new JSON object
    {
      method: .key,
      path: $path, # Using the variable defined on line 4
      summary: .value.summary?,
      operationId: .value.operationId,
      tags: .value.tags?[0]
      #deprecated: .value.deprecated?
    }
  )[] # Flattens array to avoid having an array 
      # of array of {path, method, summary, deprecated}
) # Now we have an array of {path, method, summary, deprecated}
# 3 - Outputs tab separated raw text
#-----------------------------------
#| map( # Applies a transformation to each element
#  .method + " | " + 
#  .operationId + " | " +
#  .path + " | " +
#  .tags + " | " +
#  .summary +
#  (if .deprecated then " (deprecated)" else "" end)
#)
#[] # Flattens array for raw output
