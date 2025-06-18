# AGENTS.md

> **Audience** – Automated coding assistants (OpenAI Codex, Sourcegraph AMP, Windsurf, etc.). Humans are welcome to read it too!

---

## 🚀 Quick Facts

| Key                  | Value                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| **Site**             | **pan.dev** – public developer documentation for Palo Alto Networks                             |
| **Generator**        | Docusaurus **3.7.0** (static site)                                                              |
| **Tooling**          | Yarn 4 workspaces, Node 20 LTS (see `.nvmrc`)                                                   |
| **Selective builds** | `PRODUCTS_INCLUDE` env‑var lets you build one or more products instead of the whole site (≈1 h) |

---

## 🗺️ Repository Map (top‑level)

| Path             | Purpose                                                                 |
| ---------------- | ----------------------------------------------------------------------- |
| `products/`      | One folder per product → MDX docs, OpenAPI specs, `sidebars.{js,ts}`    |
| `src/pages/`     | Homepage & other global landing pages – **agents SHOULD improve these** |
| `src/`           | Shared React + TS components, theme overrides, utilities                |
| `static/`        | Assets copied verbatim to the final build                               |
| `plugin-*`       | Custom Docusaurus plugins (`plugin-sitemap-coveo`, GTM, etc.)           |
| `scripts/`       | Automation helpers (e.g., `openapi-to-mdx.ts`)                          |
| `openapi-specs/` | Raw OpenAPI JSON/YAML files fed into plugin‑openapi‑docs                |
| `.github/`       | Workflows (self‑hosted runners, preview deploys)                        |

> **Gotcha** – Some products share a sidebar. If you omit one of those products from `PRODUCTS_INCLUDE`, the build will throw an “Unknown sidebar” error. When unsure, include the whole family (e.g., `sase,access,sdwan,scm`).

---

## 🛠️ Local Dev Cheat‑Sheet

```bash
# Install deps (Node 20 LTS)
corepack enable    # enables Yarn 4 if needed
yarn

# Full dev (slow)
yarn start

# Fast dev – only selected products
cross-env PRODUCTS_INCLUDE=panos,prisma-cloud yarn start

# Lint & format
yarn lint && yarn format

# Production build (selected products)
cross-env PRODUCTS_INCLUDE=panos yarn build
```

---

## ✍️ Writing & Coding Guidelines

| ✅ **DO**                                                             | ❌ **AVOID**                             |
| -------------------------------------------------------------------- | --------------------------------------- |
| Use plain English; define acronyms on first use                      | Security‑jargon overload                |
| Add front‑matter: `id`, `title`, `sidebar_label`, `sidebar_position` | Missing or duplicate `id`s              |
| Keep headings hierarchical (H2 → H3 → H4)                            | Skipping heading levels                 |
| Provide runnable examples (`curl`, `python`, `golang`)               | Proprietary/internal endpoints          |
| Run `yarn format` (Prettier) before every commit                     | Inconsistent spacing or 100+‑char lines |
| Add **alt text** for images (a11y)                                   | Decorative images without alt text      |

### Front‑end Conventions

* React functional components in **TypeScript strict mode** (see `tsconfig.json`).
* Style with CSS Modules or Tailwind (theme pre‑configured).
* Absolute import paths use the `@/` alias.

---

## 🤖 Common Agent Tasks

1. **Generate docs from OpenAPI**

   ```bash
   yarn openapi:generate
   ```
2. **Author / update MDX** – add file, update product sidebar, run selective build.
3. **Fix links**

   ```bash
   yarn lint:links
   ```
4. **Improve landing pages** – edit `src/pages/index.mdx` & friends.
5. **CI tweaks** – update `.github/workflows/*.yml`, keep `PRODUCTS_INCLUDE` label logic intact.

> Always open a PR —even for small fixes. GitHub Actions deploys a preview to Firebase for human review.

---

## 🔒 Safety & Compliance

* **NO SECRETS** – never commit API keys, internal hostnames, or proprietary code.
* Repo is public; content must stay customer‑friendly & vendor‑neutral.
* Aim for WCAG AA accessibility (semantic HTML, good contrast, alt text).

---

## 📚 Further Reading

* [`README.md`](./README.md) – project overview
* [`CONTRIBUTING.md`](./CONTRIBUTING.md) – full contribution guide
* Docusaurus docs → [https://docusaurus.io/docs](https://docusaurus.io/docs)

---

*Last updated: **2025‑06‑18***
