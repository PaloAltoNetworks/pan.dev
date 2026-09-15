# Prisma Browser Docs System

This folder owns the Prisma Browser docs shell, shared UI primitives, generated
guide navigation, and Core UI sourced design-system artifacts.

## Content Workflow

Guide pages live in `src/pages/prisma-browser/guide/**/*.mdx`.

- Add a page: create a new `.mdx` file and include `pb_guide` frontmatter.
- Remove a page: delete the `.mdx` file and rebuild. Docusaurus should catch
  broken links.
- Reorder a page: change `pb_guide.groupOrder` or `pb_guide.order`.
- Rename a sidebar item: change `sidebar_label`.
- Change content: edit the MDX body.

Required guide frontmatter:

```yaml
---
title: Authentication
sidebar_label: Authentication
pb_guide:
  group: Concepts
  groupOrder: 20
  order: 10
  summary: OAuth2 client credentials, token scope, and roles
---
```

After changing guide metadata, run:

```bash
yarn gen-pb-guide
```

The generated file is `generated/guideIndex.js`. Do not edit it by hand.

## Design System Workflow

Cloud-apps Core UI is the source of truth:

- Tokens: `cloud-apps/libs/common-ts/coreui/src/lib/css/variables.scss`
- Components: `cloud-apps/libs/common-ts/coreui/src/lib/components`
- Storybook: `cloud-apps/libs/common-ts/coreui/.storybook`

PB docs sync Core UI tokens into `design-system/coreui-tokens.scss` and source
metadata into `design-system/coreui-source.json`.

Run:

```bash
yarn sync-pb-design-system
```

Rules:

- Do not copy stale token values from prototypes or copilot notes.
- Do not add direct hex/rgb/hsl colors in PB React or SCSS files. Use Core UI
  `--pab-*` tokens or PB semantic aliases from
  `design-system/coreui-token-aliases.scss`.
- Do not use inline styles in React components.
- Promote repeated UI into shared primitives in `ui.js`.
- Use `/prisma-browser/design-system` to inspect component states before using
  a primitive in a page.
