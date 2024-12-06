---
id: partial-builds
title: Partial Builds
hide_title: true
sidebar_label: Partial Builds
description: How to speed up development and production builds.
---

## Products Include

When you need to build partial content, use the `PRODUCTS_INCLUDE` environment variable to define which product folders you want to include.

:::warning NOTICE
Some products have `sidebars.ts` that reference docs across product folders. This effectively makes those products "co-dependent" since sidebar definitions require all doc references to exist.
:::

### Local Previews

Prisma SASE:

```bash title="Start local development server"
yarn start:sase
```

Network Security:

```bash title="Start local development server"
yarn start:netsec
```

Alternatively, you can run the partial build commands yourself:

```bash title="Start local development server"
PRODUCTS_INCLUDE=sase,access,sdwan yarn start
```

```bash title="Production build"
PRODUCTS_INCLUDE=sase,access,sdwan yarn build
```

### Deploy/Build Previews

There might be situations where you would want to use `PRODUCTS_INCLUDE` to speed up the GitHub deploy preview process. Since you won't have access to export environment variables before the GitHub Action starts, we've adapted a way for you to map `PRODUCTS_INCLUDE` to Pull Request labels.

When opening your Pull Request, simply select the label corresponding to the set of products you wish to include in the deploy/build preview. For example, if you're working on SASE docs, choose the "sase" label. If you're working on Network Security content, choose the "netsec" label.

:::note
Although it's possible to combine labels, doing so would effectively negate the time savings.
:::

## Explanation

Today, [pan.dev](https://pan.dev) is home to thousands of docs which can lead to delayed development and production builds. This results in contributors having to wait longer for a local dev server to start or for their deploy preview to build. Thankfully, there is a way to mitigate against long build times using a technique we refer to as "selective" or "partial" builds.

Currently, all docs are located inside their respective product folder:

```bash title="Product folders as of 11/4/2022"
products
├── access
├── ansible
├── cdl
├── cdss
├── cloudngfw
├── community-support-statement.md
├── connectivity-check.md
├── contributing
├── dns-security
├── expedition
├── iot
├── lab-guidance.md
├── panos
├── sase
├── sdwan
├── terraform
└── threat-vault
```

By default, Docusaurus is configured to (recursively) process any `*.md` or `*.mdx` files inside the `products` folder(s). _However_, under most circumstances, contributors will likely be working on content for a single product or subset of products at a time. In those cases, why build the entire site if you don't have to?
