# Publishing Guide — SCM Software Update

Branch: `docs/scm-setup-mr621-4b2b6524`
Source MR: !621

## Steps

1. Install dependencies (first time only): `yarn install`
2. Generate docs: `yarn clean-all` then `yarn gen-all`
3. Review the generated files in `products/`
4. Commit: `git add products/ src/ docusaurus.config.ts && git commit -m "chore: generate API docs"`
5. Push to GitLab: `git push origin docs/scm-setup-mr621-4b2b6524`
6. Push to GitHub: `git push github docs/scm-setup-mr621-4b2b6524`
7. Create PR: https://github.com/PaloAltoNetworks/pan.dev/compare/master...docs/scm-setup-mr621-4b2b6524
8. Review deploy preview and merge
