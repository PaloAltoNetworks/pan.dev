# Building-blocks page template and style guide

> This file is a style guide for authoring pages under `guides/building-blocks/`.
> It is intentionally named `_TEMPLATE.md` (plain `.md`, no `pb_guide` frontmatter)
> so the guide loader ignores it and it never appears in the site nav.
> Copy the relevant skeleton into a new `.mdx` file and fill it in.
>
> **Language:** this guide covers page **structure**. For voice and tone
> (product naming, vocabulary, anti-patterns, second-person style), follow the
> companion guide-wide voice reference at [`../_VOICE.md`](../_VOICE.md).

Every building-block object is one of four **archetypes**, because each has a
different use case. Pick the archetype first, then follow its skeleton. All
archetypes share the same section order, conventions, and snippets below; they
differ only in which sections apply.

| Archetype | Use case | Example pages | Distinctive sections |
|---|---|---|---|
| **A. Full CRUD object** | You author objects with types/fields and full lifecycle | `applications-custom`, `applications-private` | Types, Fields by type, Bulk create, Bulk delete |
| **B. Membership group** | A named container that rules reference once, edited forever | `application-groups`, `user-groups`, `device-groups` | Add / remove members, membership model |
| **C. Observed object + direct actions** | You cannot create it; it is observed, filtered, and acted on live | `users`, `devices` | What you can/cannot do, List and filter, Lifecycle actions |
| **D. Upload / binary object** | You upload a file, get an ID, reference it from a control | `assets` | Asset types, upload-then-reference flow |

The **applications** family is a special case of Archetype A: a shared
**overview** page (`applications.mdx`: types, the URL object, retrieve, catalog,
bulk operations, limits) plus one Archetype A page per creatable type
(`applications-custom`, `applications-private`, `applications-non-web`,
`applications-desktop`). The overview page carries the sections common to all
types; each per-type page documents its own key fields, create, update, delete,
and examples. The overview page therefore includes some sections not in the
canonical list (the URL object, Catalog, Bulk operations); that is expected for
this one page.

`rules.mdx` is **out of scope** for this template: it is the policy overview
(`group: Policy`) and follows the policy-page pattern, not a building-block object.

---

## 1. Frontmatter

```yaml
---
title: 'Object name'            # Title case, plural for collections
sidebar_label: 'Object name'    # usually same as title
pb_guide:
  group: Policy objects         # see the grouping table below
  groupOrder: 30                # must match the group
  order: NN                     # spacing of 10 so pages can be inserted
  subgroup: Applications        # only for the applications family; omit otherwise
  summary: One line, no trailing period, describing what the object is for
---
```

Building-block pages ship across three nav groups. The loader
(`scripts/prisma-browser/build-guide-index.mjs`) sorts by `groupOrder`, then
`order`. Keep `group` and `groupOrder` paired exactly as below:

| group | groupOrder | subgroup | order | page |
|---|---|---|---|---|
| Inventory | 20 | (none) | 10 | users |
| Inventory | 20 | (none) | 20 | devices |
| Policy objects | 30 | Applications | 10 | applications (overview) |
| Policy objects | 30 | Applications | 20 | applications-custom |
| Policy objects | 30 | Applications | 30 | applications-private |
| Policy objects | 30 | Applications | 40 | applications-non-web |
| Policy objects | 30 | Applications | 50 | applications-desktop |
| Policy objects | 30 | Applications | 60 | application-groups |
| Policy objects | 30 | (none) | 70 | user-groups |
| Policy objects | 30 | (none) | 80 | device-groups |
| Policy | 40 | (none) | 60 | assets |

`rules` lives in the `Policy` group (groupOrder 40, order 10) as the policy
overview, not as a building-block object.

---

## 2. Canonical section order

Use these exact `##` headings in this order. Include only the sections that
apply to the archetype (see the matrix in section 4); never reorder or rename.

1. Intro paragraph (no heading)
2. `On this page:` line (no heading)
3. `## What you can and cannot do`
4. `## Types` **or** `## Object model` (type/field tables)
5. `## Limits`
6. `## Retrieve` (with `List and filter` then `Get one`)
7. `## Create` (with `Bulk create` where supported)
8. `## Update` (with membership delta / `Bulk update` where supported)
9. `## Delete` (with `Bulk delete` where supported)
10. `## Direct actions` / `## Lifecycle actions`
11. `## Endpoint reference` (required on every page)
12. `## Tips and gotchas`
13. `## Examples` (collapsible `<details>` blocks; always after Tips)
14. `## Related`

Put a horizontal rule (`---`) between every top-level section.

---

## 3. Shared conventions (apply everywhere)

- **Intro paragraph**: open by bolding the object name and defining it in one
  sentence, then say how a rule references it and when to reach for it.
- **`On this page:` line**: a single comma-separated list of the sections, so
  readers can scan scope at a glance. Required on every page.
- **Admonitions only**: use `:::note` and `:::caution`. Do **not** use raw
  `> **Note:**` blockquotes.
- **HTTP client**: use `curl` (matches the rest of the public docs). Always use
  `$PB_API_BASE` for the base and `$PB_TOKEN` for the bearer token.
- **Paths**: show the bare path line (for example `POST /seb-api/v1/...`) above
  each `curl` example. State the `/seb-api/v1` base once, in the Endpoint
  reference table (not as a standalone line near the top of the page).
- **Create responses**: do **not** print the `201 Created` response body. The
  response only echoes the new ID, so just state that create returns `201` with
  the object ID and follow with an `export XX_ID='...'` line so later snippets
  can reference it.
- **Examples**: put every worked example inside a collapsible `<details>` block
  with a `<summary>` label (matches the current guide UI). Group them in the
  `## Examples` section, which always comes after `## Tips and gotchas`.
- **IDs**: use realistic prefixed placeholders (`0AP...`, `0UR...`, `0DE...`,
  `0AG...`, `0UG...`, `0DG...`, `0AS...`).
- **Key fields**: present as a `| Field | Type | Required | Notes |` table
  (or `| Field | Type | Notes |` for read-only objects).
- **Draft and publish**: reuse the canonical snippet in section 6 verbatim.
  Read-only / direct-action objects instead state that draft/publish does not
  apply.
- **No em-dash / en-dash** anywhere. Use commas, colons, parentheses, or a
  plain hyphen.
- **Cross-link URL format**: use the flat form `/prisma-browser/guide/<page-name>`.
  Never include a subfolder (for example `/prisma-browser/guide/draft-and-publish`,
  not `/prisma-browser/guide/basics/draft-and-publish`). The generator fails the
  build on any deep guide link found in an `.mdx` file.

---

## 4. Section applicability by archetype

`req` = required, `opt` = include when relevant, `N/A` = omit.

| Section | A. CRUD | B. Group | C. Observed | D. Upload |
|---|---|---|---|---|
| What you can and cannot do | opt | opt | req | opt |
| Types / Object model / Key fields | req | req | req | req |
| Limits | req | req | opt | req |
| Retrieve (list + get one) | req | req | req | N/A |
| Create (+ bulk) | req | req | N/A | req (upload) |
| Update (+ membership / bulk) | req | req | N/A | N/A |
| Delete (+ bulk) | req | opt | N/A | opt |
| Direct actions / Lifecycle | N/A | N/A | req | N/A |
| Endpoint reference | req | req | req | req |
| Tips and gotchas | req | req | req | req |
| Examples (collapsible) | opt | opt | opt | req |
| Related | req | req | req | req |

Every **group** page must document a `Retrieve` (GET list + get one) section.
`application-groups` and `user-groups` already do; `device-groups` is the page to
bring in line.

---

## 5. Reusable snippets

### 5a. curl GET (list with filters)

```bash
curl -sS -G "$PB_API_BASE/OBJECTS" \
  -H "Authorization: Bearer $PB_TOKEN" \
  --data-urlencode "FILTER=VALUE" \
  --data-urlencode "sort=FIELD" \
  --data-urlencode "order=desc" \
  --data-urlencode "limit=50"
```

### 5b. curl POST (create) + capture ID

```bash
curl -sS -X POST "$PB_API_BASE/OBJECTS" \
  -H "Authorization: Bearer $PB_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "name": "Example" }'
```

Returns `201 Created` with the new object ID. Capture it for later snippets:

```bash
export OBJ_ID='0XX01EXAMPLEXXXXXXXXXXXXXXXXX'
```

### 5c. curl PATCH (delta add/remove members)

```bash
curl -sS -X PATCH "$PB_API_BASE/OBJECTS/$OBJ_ID" \
  -H "Authorization: Bearer $PB_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
        "members": {
          "add": [ "0YY01NEWXXXXXXXXXXXXXXXXXXXXX" ],
          "remove": [ "0YY01OLDXXXXXXXXXXXXXXXXXXXXX" ]
        }
      }'
```

### 5d. Endpoint reference table (required on every page)

```markdown
## Endpoint reference

| Method | Path | Purpose |
|---|---|---|
| `GET` | `/objects` | List objects (filter, paginate) |
| `GET` | `/objects/{id}` | Read one object |
| `POST` | `/objects` | Create one object |
| `PATCH` | `/objects/{id}` | Update one object |
| `DELETE` | `/objects/{id}` | Delete one object |

All paths are under the `/seb-api/v1` base.
```

### 5e. Collapsible example block

Every worked example goes in a `<details>` block so the page stays scannable and
matches the current guide UI. Do not print the `201` response body.

```markdown
<details>
<summary>Short label describing the example</summary>

One line of context.

```bash
curl -sS -X POST "$PB_API_BASE/OBJECTS/type/TYPE" \
  -H "Authorization: Bearer $PB_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "name": "Example" }'
```

Returns `201` with the new object ID.

</details>
```

---

## 6. Canonical draft-and-publish snippet

Use one of these two, verbatim, so wording is identical across pages.

**Draft-gated objects** (CRUD, groups, uploads):

```markdown
Remember: this edits the **draft**. Publish to make it live (see
[Draft and publish](/prisma-browser/guide/draft-and-publish)). With
[partial publish](/prisma-browser/guide/draft-and-publish#partial-publish) you can publish
just this object.
```

**Direct-action / observed objects** (users, devices):

```markdown
:::note
**Not part of the draft.** Reads return live state and the actions below take
effect at once. The [draft and publish](/prisma-browser/guide/draft-and-publish)
model does not apply here.
:::
```

**Local user groups** take the draft-gated snippet above, plus this rollout
caution, because draft mode for them is still reaching tenants:

```markdown
:::caution
**Draft mode for local user groups is rolling out.** On most tenants, changes to a
user group (including membership edits) land in the **draft** and go live only when
you publish. On a tenant that has not received the rollout yet, the same edits apply
directly to the **active** version and there is nothing to publish.

To confirm which mode a tenant is in, open the user groups page in Strata Cloud
Manager. If you can switch between the Published and Draft versions there, the
tenant is draft-gated and your automation must publish after every write.
:::
```

---

## 7. Canonical "Related" block

Group links under fixed prefixes, in this order. Omit a line if it has no links.

```markdown
## Related
- Building blocks: [Name](/prisma-browser/guide/name)
- Concepts: [Name](/prisma-browser/guide/name)
- Use cases: [Name](/prisma-browser/guide/name)
```

---

## 8. Full skeletons per archetype

Copy the matching block into a new `.mdx` file.

### Archetype A: Full CRUD object

```markdown
---
title: 'Objects'
sidebar_label: 'Objects'
pb_guide:
  group: GROUP            # per the grouping table in section 1 (Inventory / Policy objects / Policy)
  groupOrder: NN          # must match the group
  order: NN               # per the grouping table in section 1
  # subgroup: Applications  # only for the applications family
  summary: Short description of the object and what it governs
---

An **object** is ... You create objects once, then reference them from a
[rule](/prisma-browser/guide/rules).

**On this page:** types, fields, limits, retrieve, create, bulk create, update, delete, endpoint reference, tips.

---

## Types
<!-- type table: | Type | What it is | Key fields | -->

---

## Fields by type
<!-- per-type field tables -->

---

## Limits
<!-- limits table -->

---

## Retrieve
<!-- List and filter, then Get one -->

---

## Create
<!-- POST; state "returns 201 with the ID" (no response body); export ID; bulk create subsection -->

---

## Update
<!-- PATCH semantics; delta form; draft/publish snippet -->

---

## Delete
<!-- DELETE one; bulk delete subsection -->

---

## Endpoint reference
<!-- required table -->

---

## Tips and gotchas
<!-- :::note / :::caution -->

---

## Examples
<!-- optional; collapsible <details> blocks; always after Tips -->

---

## Related
```

### Archetype B: Membership group

```markdown
---
title: 'Object groups'
sidebar_label: 'Object groups'
pb_guide:
  group: GROUP            # per the grouping table in section 1 (Inventory / Policy objects / Policy)
  groupOrder: NN          # must match the group
  order: NN               # per the grouping table in section 1
  # subgroup: Applications  # only for the applications family
  summary: Named bundle of objects that rules reference
---

An **object group** is a named bundle of [objects](...). Attach the group to a
rule once, then edit membership to change every rule that references it.

**On this page:** membership model, limits, examples, endpoint reference, tips.

---

## Membership model
<!-- how members are defined; local vs sso, posture, etc. -->

---

## Limits
<!-- limits table -->

---

## Examples
<!-- Group the operation walkthroughs here as ### subsections (not collapsible
     <details>): each shows the bare path line + a curl call. This deviates from
     the default "Examples after Tips" placement in section 2: for membership
     groups the walkthroughs are the examples, so Examples sits before Endpoint
     reference. Do not print response bodies; export the created ID for reuse. -->

### Retrieve
<!-- #### List and filter (GET list, limit/cursor), then #### Get one (GET /{id}) -->

### Create
<!-- POST; returns 201 with the ID; export ID; #### Key fields table -->

### Update
<!-- membership delta add/remove; draft/publish snippet.
     user-groups: add the draft-mode rollout caution as well. -->

### Delete
<!-- DELETE /{id} -->

<!-- Optional workflow examples, e.g. "### Publish with partial publish". -->

---

## Endpoint reference
<!-- required table; state the /seb-api/v1 base here -->

---

## Tips and gotchas

---

## Related
```

### Archetype C: Observed object + direct actions

```markdown
---
title: 'Objects'
sidebar_label: 'Objects'
pb_guide:
  group: GROUP            # per the grouping table in section 1 (Inventory / Policy objects / Policy)
  groupOrder: NN          # must match the group
  order: NN               # per the grouping table in section 1
  summary: List, filter, and read the objects observed in your tenant
---

An **object** is ... observed in your tenant. **You do not create objects
through this API.** The API lets you list, read, filter, and act on them.

**On this page:** what you can and cannot do, list and filter, get one, key fields, lifecycle actions, endpoint reference, tips.

---

## What you can and cannot do
<!-- capability matrix: | Operation | Supported? | How | -->
<!-- include the "Not part of the draft" note -->

---

## List and filter
<!-- GET + query-parameters table -->

---

## Get one
<!-- GET /{id} -->

---

## Key fields
<!-- | Field | Type | Notes | -->

---

## Lifecycle actions
<!-- direct actions table: | Goal | Endpoint | Effect | -->

---

## Endpoint reference
<!-- required table -->

---

## Tips and gotchas

---

## Related
```

### Archetype D: Upload / binary object

```markdown
---
title: 'Objects'
sidebar_label: 'Objects'
pb_guide:
  group: GROUP            # per the grouping table in section 1 (Inventory / Policy objects / Policy)
  groupOrder: NN          # must match the group
  order: NN               # per the grouping table in section 1
  summary: Upload files, then reference them by ID
---

**Objects** are the binary files that back ... You upload a file once, the API
returns an ID, and you reference that ID from a control.

**On this page:** object types, upload-then-reference flow, limits and validation, endpoint reference, tips, examples.

---

## Object types
<!-- table: | Object | Upload endpoint | Max size | Allowed files | Returns | Referenced by control | -->

---

## How the upload-then-reference flow works
<!-- optional mermaid flowchart + numbered steps -->

---

## Limits and validation
<!-- size / type table; state 400 and 413 behavior -->

---

## Endpoint reference
<!-- required table -->

---

## Tips and gotchas
<!-- :::note / :::caution -->

---

## Examples
<!-- required for uploads; collapsible <details> per object:
     upload request, "returns 201 with the ID" (no response body),
     and the control that references the returned ID -->

---

## Related
```
