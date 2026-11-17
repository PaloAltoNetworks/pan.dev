# Publishing Guide — AIRS Prisma AIRS AI Runtime API Intercept

Branch: `docs/airs-airs-mr664-45eb1a01`
Source MR: !664

## Steps

1. Install dependencies (first time only): `yarn install`
2. Pull latest master into this branch, so the build uses the latest config
   and sidebar changes:
   `git fetch origin master` then `git merge origin/master --no-edit`
3. Generate docs: `yarn clean-all` then `yarn gen-all`
4. Review the generated files in `products/`
5. Check this API's spec directory under `openapi-specs/airs/` for
   leftover spec files. If it holds more than one `.yaml`/`.json` spec,
   delete the superseded ones now — the site registers every spec it finds,
   so a leftover ships as a duplicate API.
6. Preview locally: `yarn start`
7. Verify the build: `PRODUCTS_INCLUDE=airs yarn build-github`
   (builds only this product — `yarn build` builds the whole site and takes
   far longer than a verification step should)
8. Commit: `git add products/ src/ docusaurus.config.ts && git commit -m "chore: generate API docs"`
9. Remove the pipeline helper files. This guide, the CLAUDE.md next to it
   and the Claude Code skill were written onto the branch by the pipeline —
   they drive this one publish and must not land on master. Do it now,
   after the commit in step 8 and before the pushes below:

   ```
   git rm -f .claude/skills/publish-api-docs/SKILL.md CLAUDE.md PUBLISHING.md
   git commit -m "chore: remove pipeline helper files"
   ```

   Exactly those three paths. `AGENTS.md` is pan.dev's own file, not the
   pipeline's — leave it alone.

   Then confirm `git diff origin/master --name-only` lists none of the three.
10. Push to GitLab: `git push origin docs/airs-airs-mr664-45eb1a01`
11. Push to GitHub: `git push github docs/airs-airs-mr664-45eb1a01`
12. Create PR: https://github.com/PaloAltoNetworks/pan.dev/compare/master...docs/airs-airs-mr664-45eb1a01
13. Review deploy preview and merge

Formatting checks (products.ts links, the CORS proxy, sidebar blank lines,
line length, landing-page indent) run in CI on every docs branch. If the
`validate_docs_build` job lists findings, fix those; there is no need to
check these by hand.

## Command reference

| Purpose | Command |
|---|---|
| Local preview | `yarn start` |
| Verification build | `PRODUCTS_INCLUDE=airs yarn build-github` |

Example: `PRODUCTS_INCLUDE=sase yarn build-github`
