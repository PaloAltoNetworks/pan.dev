# Guides verification harness

Extracts every code example from `src/components/PBPortal/guides/**/*.mdx` and
verifies it two ways:

1. **Static** (`run_static.py`) - each `curl` is checked against the OpenAPI spec
   (`openapi-specs/prisma-browser/PrismaAccess-Browser-Management-latest.yaml`):
   path/method exists, JSON parses, request body matches the schema
   (required/unknown fields, enums, types; `allOf` is flattened, discriminated
   `oneOf` is resolved).
2. **Live** (`live_run.py`) - each example is executed against a **QA sandbox
   tenant**. Placeholder IDs (`0RL...`, `0AP...`, `$RULE_ID`, ...) are replaced
   with real objects created on the fly, then deleted afterward. Failures are
   classified so real doc bugs (rejected request *shape*) are separated from
   state/order/environment noise.

## Setup

```bash
python3 -m venv .venv
.venv/bin/pip install requests pyyaml jsonschema
```

Credentials are read at runtime from `copilot/.env` (never written or printed).
The default profile is `QA_BUGHUNT`; live runs refuse to execute unless the
profile's env is `qa`.

## Run

```bash
.venv/bin/python run_static.py      # Layer 1: spec validation
.venv/bin/python live_run.py        # Layer 2: execute against the sandbox
.venv/bin/python report.py          # merge -> out/report.md + out/report.json
```

## Outcome meanings (live)

| Outcome | Meaning |
|---|---|
| PASS | Request accepted (2xx), or a documented status (e.g. publish 409 = empty draft) |
| FAIL | Request **shape** rejected (decode/validation error) = real doc bug |
| ENV | Feature/data not available on this tenant (local-desktop API off, no DLP profile, ...) |
| INDETERMINATE | State/order/semantic (reads of active before publish, add/remove of absent entities, duplicate names) - not a shape bug |
| SKIPPED | Truncated `...` illustration or a prerequisite could not be allocated |

## Files

| File | Purpose |
|---|---|
| `config.py` | Paths, env->URL mapping, credential loading, redaction |
| `client.py` | Authenticated HTTP client (token cache) |
| `extract.py` | MDX fenced-block extractor + `curl` parser |
| `static_check.py` | OpenAPI loader + schema walker (Layer 1) |
| `prerequisites.py` | Creates/fetches real tenant objects by type/prefix |
| `live_run.py` | Executes examples, substitutes IDs, classifies errors (Layer 2) |
| `report.py` | Merges findings into `out/report.md` and `out/report.json` |
