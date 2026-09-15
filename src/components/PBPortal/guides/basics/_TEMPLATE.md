# Basics page template and style guide

> This file is a style guide for authoring pages under `guides/basics/`.
> It is intentionally named `_TEMPLATE.md` (plain `.md`, no `pb_guide` frontmatter)
> so the guide loader ignores it and it never appears in the site nav.
> Copy the relevant skeleton from section 4 into a new `.mdx` file and fill it in.
>
> **Language:** this guide covers page **structure**. For voice and tone
> (product naming, vocabulary, anti-patterns, second-person style), follow the
> companion guide-wide voice reference at [`../_VOICE.md`](../_VOICE.md).

Basics pages explain the cross-cutting concepts a developer needs before working
with any object or endpoint. They are not object reference pages (see
[`../building-blocks/_TEMPLATE.md`](../building-blocks/_TEMPLATE.md) for those).
Every Basics page teaches one concept, then links out to the objects or use cases
where that concept applies.

---

## 1. Frontmatter

```yaml
---
title: 'Concept name'         # Title case
sidebar_label: 'Concept name' # usually same as title
pb_guide:
  group: Basics               # always "Basics" for this folder
  groupOrder: 10              # always 10 for the Basics group
  order: NN                   # use spacing of 10; see the ordering table below
  summary: One line, no trailing period, describing what the concept covers
---
```

---

## 2. Canonical section order

Use these `##` headings in this order. Include only the sections that apply to
the concept; never reorder or rename the ones you do include.

1. Intro paragraph (no heading)
2. `On this page:` line (no heading, no `##`)
3. `---`
4. One or more concept `##` sections (names vary by page; see section 3 below)
5. `## Related` (always last)

Put a horizontal rule (`---`) between every top-level `##` section and before
the `## Related` block.

---

## 3. Shared conventions

- **Intro paragraph:** open by bolding the concept or feature name on first
  mention and defining it in one sentence. Follow with "when to reach for it"
  or how a rule or workflow references it. Do not start with a heading.
- **"On this page:" line:** a single comma-separated list of the section names
  on the page, placed immediately after the intro paragraph. Required on every
  page. No heading, no bullet list.
- **Admonitions:** use `:::note` and `:::caution` only. Do not use `:::tip`
  and do not use raw `> **Note:**` blockquotes.
- **HTTP client:** use `curl` with `$PB_API_BASE` for the base URL and
  `$PB_TOKEN` for the bearer token. State the `/seb-api/v1` base path only once
  per page, in an Endpoint reference table if one is included; do not repeat it
  as a standalone line.
- **Endpoint reference tables:** optional on Basics pages (unlike building-blocks
  pages, where they are required). Include one only when the page covers specific
  endpoints in enough detail to warrant a reference table.
- **IDs:** use realistic prefixed placeholders (`0AP...`, `0UR...`, `0DE...`,
  `0AG...`, `0UG...`, `0DG...`, `0AS...`, `0RL...`).
- **No em-dash or en-dash** anywhere. Use a comma, colon, parentheses, or a
  plain hyphen.
- **Cross-link URL format**: use the flat form `/prisma-browser/guide/<page-name>`.
  Never include a subfolder (for example `/prisma-browser/guide/draft-and-publish`,
  not `/prisma-browser/guide/basics/draft-and-publish`). The generator fails the
  build on any deep guide link found in an `.mdx` file.
- **Cross-references:** link with the exact page title. Use "see" for
  informational links, "refer to" for prerequisites. Place links at the point
  of need; do not leave them only in the Related block.
- **Abbreviations:** define on first use (IdP, DLP, PAC, UAD), then reuse.
- **Second person "you":** address the API caller directly throughout.

---

## 4. Page skeletons

There are two Basics archetypes. Pick the one that fits the concept.

### Archetype 1: Pure concept (no API calls)

Use this when the page explains a system behavior or model that applies across
many endpoints. Examples: Draft and publish, Direct actions.

```markdown
---
title: 'Concept name'
sidebar_label: 'Concept name'
pb_guide:
  group: Basics
  groupOrder: 10
  order: NN
  summary: Short description of what this concept covers
---

A **concept name** is ... It applies when ...

**On this page:** section one, section two, section three, related.

---

## Section one
<!-- Explain the concept. Use tables for comparisons or reference data. -->

---

## Section two
<!-- Drill into the key detail or exception. -->

---

## Section three
<!-- Optional further depth. -->

---

## Related
- Basics: [Name](/prisma-browser/guide/name)
- Use cases: [Name](/prisma-browser/guide/name)
```

### Archetype 2: Concept with code examples

Use this when the page teaches a concept and includes code (curl calls, JSON
shapes, or script snippets) that illustrate it. Examples: Authentication,
Pagination, Delta patch, Errors.

```markdown
---
title: 'Concept name'
sidebar_label: 'Concept name'
pb_guide:
  group: Basics
  groupOrder: 10
  order: NN
  summary: Short description of what this concept covers
---

A **concept name** is ... You use it when ...

**On this page:** section one, section two, worked example, common pitfalls, related.

---

## Section one
<!-- Explain the concept. -->

---

## Section two
<!-- Show the key mechanism. Include a bare path line above each curl call. -->

```
METHOD /seb-api/v1/path
```

```bash
curl -sS -X METHOD "$PB_API_BASE/path" \
  -H "Authorization: Bearer $PB_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ ... }'
```

---

## Worked example
<!-- Optional. A concise end-to-end call sequence. -->

---

## Common pitfalls
<!-- Optional. Bullet list of the errors or misconceptions the concept resolves. -->

---

## Related
- Basics: [Name](/prisma-browser/guide/name)
- Building blocks: [Name](/prisma-browser/guide/name)
- Use cases: [Name](/prisma-browser/guide/name)
```

---

## 5. "Related" block

Group links under fixed prefixes in this order. Omit a prefix line if it has
no links for this page.

```markdown
## Related
- Basics: [Name](/prisma-browser/guide/name)
- Building blocks: [Name](/prisma-browser/guide/name)
- Use cases: [Name](/prisma-browser/guide/name)
```

---

## 6. What Basics pages do NOT include

The following sections are required on building-blocks pages but do **not**
belong on Basics pages (unless the concept genuinely warrants them):

- `## Endpoint reference` table (include only if the page covers specific
  endpoints in enough depth to need a reference table)
- `## Limits` tables
- `## Tips and gotchas` (fold short gotchas into a `:::note` or the relevant
  section instead)
- `## Examples` collapsible `<details>` blocks (use inline examples instead;
  reserve `<details>` for building-blocks pages with many worked examples)

The goal of a Basics page is to teach a concept concisely. Keep it shorter
than a building-blocks page: if the page is growing a full endpoint-reference
table and a tips section, reconsider whether the content belongs in a
building-blocks page or a use case instead.
