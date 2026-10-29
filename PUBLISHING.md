# Publishing Guide — SCM Config Cleanup API

Branch: `docs/scm-config-cleanup-mr502-1a2556ca`
Source MR: !502

## Steps

1. Install dependencies (first time only): `yarn install`
2. Pull latest master into this branch, so the build uses the latest config
   and sidebar changes:
   `git fetch origin master` then `git merge origin/master --no-edit`
3. Generate docs: `yarn clean-all` then `yarn gen-all`
4. Review the generated files in `products/`
5. Check this API's spec directory under `openapi-specs/scm/` for
   leftover spec files. If it holds more than one `.yaml`/`.json` spec,
   delete the superseded ones now — the site registers every spec it finds,
   so a leftover ships as a duplicate API.
6. Preview locally: `yarn start`
7. Verify the build: `PRODUCTS_INCLUDE=scm yarn build-github`
   (builds only this product — `yarn build` builds the whole site and takes
   far longer than a verification step should)
8. Commit: `git add products/ src/ docusaurus.config.ts && git commit -m "chore: generate API docs"`
9. Remove the pipeline helper files. This guide and the two AI instruction
   files next to it were written onto the branch by the pipeline — they
   drive this one publish and must not land on master. Do it now, after the
   commit in step 8 and before the pushes below:

   ```
   git rm -f .cursor/rules/publish-docs.mdc CLAUDE.md PUBLISHING.md
   git commit -m "chore: remove pipeline helper files"
   ```

   Exactly those three paths. `AGENTS.md` is pan.dev's own file, not the
   pipeline's — leave it alone.

   Then confirm `git diff origin/master --name-only` lists none of the three.
10. Push to GitLab: `git push origin docs/scm-config-cleanup-mr502-1a2556ca`
11. Push to GitHub: `git push github docs/scm-config-cleanup-mr502-1a2556ca`
12. Create PR: https://github.com/PaloAltoNetworks/pan.dev/compare/master...docs/scm-config-cleanup-mr502-1a2556ca
13. Review deploy preview and merge

## Command reference

| Purpose | Command |
|---|---|
| Local preview | `yarn start` |
| Verification build | `PRODUCTS_INCLUDE=scm yarn build-github` |

Example: `PRODUCTS_INCLUDE=sase yarn build-github`
