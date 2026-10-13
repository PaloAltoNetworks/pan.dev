# Publishing Guide — SCM Static IP (CIAM) API

Branch: `docs/scm-mobileagent-mr575-17013c31`
Source MR: !575

## Steps

1. Install dependencies (first time only): `yarn install`
2. Generate docs: `yarn clean-all` then `yarn gen-all`
3. Review the generated files in `products/`
4. Commit: `git add products/ src/ docusaurus.config.ts && git commit -m "chore: generate API docs"`
5. Push to GitLab: `git push origin docs/scm-mobileagent-mr575-17013c31`
6. Push to GitHub: `git push github docs/scm-mobileagent-mr575-17013c31`
7. Create PR: https://github.com/PaloAltoNetworks/pan.dev/compare/master...docs/scm-mobileagent-mr575-17013c31
8. Review deploy preview and merge
