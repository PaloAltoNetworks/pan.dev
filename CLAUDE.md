# Publish API Docs — SCM Static IP (CIAM) API

**Branch:** `docs/scm-mobileagent-mr575-17013c31`
**Product:** scm — Static IP (CIAM) API
**Source MR:** !575

## What to do

This branch has API spec changes ready to publish. Run these steps:

### Step 1 — Generate docs
```
yarn clean-all
yarn gen-all
```
Run `yarn install` first if this is a fresh clone.

### Step 2 — Verify & auto-fix

Check all modified .ts and .js files:

1. Read `src/data/products.ts` — verify MenuLink objects are multi-line (not single-line). If single-line, expand them to multi-line format (10-space `{`, 12-space fields).
2. Read `docusaurus.config.ts` — verify every plugin entry has `proxy: "https://cors.pan.dev"`. If missing, add it.
3. Read `products/*/sidebars.ts` — verify no blank lines before closing `]` or `}`. Remove if found.
4. Check no line exceeds 100 characters in any .ts or .js file.
5. Read `src/pages/strata-cloud-manager/index.js` — verify section keys at 8-space indent.
6. Verify no unexpected file deletions: compare branch against master.
7. Run `yarn build` — if it fails, show the error and stop.
8. Check if `products/scm/docs/release-notes/release-notes.md` was updated. If not, warn the writer that release notes may be missing.

Auto-fix formatting issues (1-5) silently. Show before/after. Ask writer for content decisions (deletions, placeholder intro).

### Release notes
Check if `products/scm/docs/release-notes/release-notes.md` was updated.
If not, warn the writer that release notes may be missing.

### Step 3 — Commit and push
```
git add products/ src/ docusaurus.config.ts
git commit -m "chore: generate API docs for docs/scm-mobileagent-mr575-17013c31"
git push origin docs/scm-mobileagent-mr575-17013c31
git push github docs/scm-mobileagent-mr575-17013c31
```

If `github` remote doesn't exist:
```
git remote add github git@github.com:PaloAltoNetworks/pan.dev.git
```

### Step 4 — Create PR
```
gh pr create --repo PaloAltoNetworks/pan.dev --base master --head docs/scm-mobileagent-mr575-17013c31 --title "docs: Static IP (CIAM) API update from MR !575" --body "Automated API docs update."
```
Or provide: `https://github.com/PaloAltoNetworks/pan.dev/compare/master...docs/scm-mobileagent-mr575-17013c31`

### Step 5 — Summary
Show: files generated, checks passed, pushed, PR link.

## Rules
- NEVER modify OpenAPI spec YAML files
- NEVER modify front matter in introduction.md
- Do NOT add authentication content to introduction.md
- All commands must work on macOS AND Windows
