---
name: publish-api-docs
description: Publish the API docs on this branch (docs/aims-aims-mr683-53e14e08). Use when the writer says 'publish docs', 'verify docs', 'push docs' or 'push API docs'.
---

# Publish API Docs — AIMS Model Security Management API

**Branch:** `docs/aims-aims-mr683-53e14e08`
**Product:** aims — Model Security Management API
**Source MR:** !683

## What to do

This branch has API spec changes ready to publish. Run these steps:

### Step 1 — Sync with master, then generate docs

Before generating, pull latest master into this branch:
```
git fetch origin master
git merge origin/master --no-edit
```
This ensures the build uses the latest config and sidebar changes. If the
merge reports conflicts, stop and show them — do not generate on top of a
half-merged tree.

Then generate:
```
yarn clean-all
yarn gen-all
```
Run `yarn install` first if this is a fresh clone.

### Step 2 — Verify

CI already checks items 1-5 on every docs branch: the `validate_docs_build`
job runs `docs_branch_lint` before the build, on the lines this branch
changed. Do not redo them by hand. If that job reported findings, its log
lists each one with the file and line. Fix exactly those.

1. `src/data/products.ts` MenuLink objects are multi-line — CI already checks this.
2. Every plugin entry in `docusaurus.config.ts` has `proxy: "https://cors.pan.dev"` — CI already checks this.
3. `products/*/sidebars.ts` has no blank line before a closing `]` or `}` — CI already checks this.
4. No line over 100 characters in a .ts or .js file — CI already checks this.
5. `src/pages/strata-cloud-manager/index.js` section keys are at 8-space indent — CI already checks this.
6. Verify no unexpected file deletions: compare branch against master.
7. Check the spec directory for leftovers — see "Multi-spec directories" below. Resolve this BEFORE the build.
8. Build only the product this branch touches:
   ```
   PRODUCTS_INCLUDE=aims yarn build-github
   ```
   If it fails, show the error and stop.
9. Check if `products/aims/docs/release-notes/release-notes.md` was updated. If not, warn the writer that release notes may be missing. (`docs_branch_lint` also warns about this; a warning is not a failure.)

Ask the writer for content decisions (deletions, placeholder intro, which spec to keep). Never rewrite formatting the CI log did not flag.

### Multi-spec directories

List the `.yaml` and `.json` files in this API's spec directory (under
`openapi-specs/aims/`). If more than one exists, show the writer the
full list and ask which one to keep:

> This spec directory has 2 spec files:
>   1. `old-api-v1.yaml`
>   2. `new-api.yaml`
> Which should stay? The others will be deleted.

Delete the rest BEFORE running the build. The Docusaurus plugin registers
every spec it finds, so a leftover file ships as a duplicate API. Never pick
for the writer — only they know which spec is current.

### Build commands

| Purpose | Command |
|---|---|
| Local preview | `yarn start` |
| Verification build | `PRODUCTS_INCLUDE=aims yarn build-github` |

Do NOT run `yarn build`. It compiles every product on the site (~20 of them)
and is far too slow to use as a verification step.

Some products share a sidebar, and omitting one of a family fails the build
with `Unknown sidebar` — which is a scoping artifact, not a problem with
this branch. If that happens, pass the whole family:
```
PRODUCTS_INCLUDE=sase,access,sdwan,scm yarn build-github
```

### Release notes
Check if `products/aims/docs/release-notes/release-notes.md` was updated.
If not, warn the writer that release notes may be missing.

### Step 3 — Commit

```
git add products/ src/ docusaurus.config.ts
git commit -m "chore: generate API docs for docs/aims-aims-mr683-53e14e08"
```

### Step 4 — Remove the pipeline helper files

Do this last, immediately before pushing. These three files were written by
the pipeline for this one branch — they name a single MR and API, and must
not land on master:

```
git rm -f .claude/skills/publish-api-docs/SKILL.md CLAUDE.md PUBLISHING.md
git commit -m "chore: remove pipeline helper files"
```

Exactly those three paths. Do NOT touch `AGENTS.md` — that one is pan.dev's
own file, not the pipeline's, and must be left exactly as master has it.

Then confirm none of the three survive:
```
git diff origin/master --name-only
```

### Step 5 — Push
```
git push origin docs/aims-aims-mr683-53e14e08
git push github docs/aims-aims-mr683-53e14e08
```

If `github` remote doesn't exist:
```
git remote add github git@github.com:PaloAltoNetworks/pan.dev.git
```

### Step 6 — Create PR
```
gh pr create --repo PaloAltoNetworks/pan.dev --base master --head docs/aims-aims-mr683-53e14e08 --title "docs: Model Security Management API update from MR !683" --body "Automated API docs update."
```
Or provide: `https://github.com/PaloAltoNetworks/pan.dev/compare/master...docs/aims-aims-mr683-53e14e08`

### Step 7 — Summary
Show: files generated, checks passed, pushed, PR link.

## Rules
- NEVER modify OpenAPI spec YAML files (deleting a superseded one the writer
  picked in Step 2 is the single exception)
- NEVER modify front matter in introduction.md
- Do NOT add authentication content to introduction.md
- Do NOT run `yarn build` — use `PRODUCTS_INCLUDE=aims yarn build-github`
- NEVER push this skill, CLAUDE.md or PUBLISHING.md — Step 4 removes
  them, and nothing after it may add them back
- NEVER create, edit or delete AGENTS.md — it is pan.dev's own file
- All commands must work on macOS AND Windows
