# Developer portal guide: voice and tone

> This file is a voice and tone guide for authoring the Prisma Browser
> developer portal guides under `guides/` (the `.mdx` pages that ship in the
> API guide nav). It is intentionally named `_VOICE.md` (plain `.md`, no
> `pb_guide` frontmatter) so the guide loader ignores it and it never appears in
> the site nav. It is a companion to `building-blocks/_TEMPLATE.md`:
> `_TEMPLATE.md` governs page **structure**, `_VOICE.md` governs **language**.

The goal is that an IT administrator reading the user-facing TechDocs (the DITA
admin console docs) and the developer portal gets one consistent product voice.
The two doc sets share terminology, product naming, and anti-patterns, but they
serve different modes of work, so they differ in perspective and format on
purpose. This guide keeps the shared layers aligned and states the differences
explicitly so authors do not over-correct in either direction.

The TechDocs source this is distilled from lives in the PM copilot repo at
`.claude/skills/tech-docs-generator/references/voice-guide.md`.

---

## 1. Audience and tone

| Attribute | Value |
|---|---|
| Primary audience | IT administrators and platform engineers automating Prisma Browser through the public API |
| Secondary audience | Security engineers and SOC analysts scripting policy and inventory workflows |
| Tone | Authoritative, neutral, practical |
| Register | Technical, plain, no marketing and no filler |
| Perspective | Second person ("you"), addressing the API caller directly |
| Goal per page | Let the reader complete an API task or understand a concept in the fewest words |

The developer portal is task-first: the reader has a token and a terminal and
wants to make a call. Lead with what the object is and how a rule references it,
then show the request.

---

## 2. Shared layers (must match the TechDocs voice)

These read identically in both doc sets. When in doubt, match TechDocs.

### 2a. Product naming

| Entity | Write it as | Never write |
|---|---|---|
| The browser product | the Prisma Browser (always with the article) | PB, PAB, the browser, it |
| The management console | Strata Cloud Manager | the admin panel, the dashboard, the console (alone) |
| Prisma Access | Prisma Access (no article) | PA |
| The extension | the Prisma Browser Extension (capital E) | the plugin, the add-on |
| The mobile browser | the Prisma Browser for Mobile (full name) | PB Mobile |
| A policy rule | the rule (lowercase) | the Rule |
| A control | the [Control Name] control (control name title case, word "control" lowercase) | the CONTROL, the [name] Control |

### 2b. Preferred vocabulary

| Use | Instead of |
|---|---|
| Allow | permit, let, turn on |
| Block | deny, prevent, turn off |
| Enable | turn on, activate |
| Disable | turn off, deactivate |
| Select | choose, pick |
| Configure | set up, establish |
| Specify | enter, type in, put in |
| Add / Remove | (keep, for list membership) |
| Retrieve / List / Read | (keep, for GET operations) |

### 2c. System-behavior phrasing

Describe what the product does with the Prisma Browser as the subject and a verb
from this set: allow, block, check, display, mask, redirect, prompt, enforce,
notify, restrict.

- Good: "the Prisma Browser blocks the download and notifies the user."
- Avoid: "the download will get blocked" (passive, future tense).

### 2d. Anti-patterns (never, in either doc set)

| Anti-pattern | Wrong | Right |
|---|---|---|
| Exclamation marks | Configure this first! | Configure this control first. |
| Marketing language | This powerful feature seamlessly integrates | This control enforces upload restrictions. |
| Hedging | This might block the file | The Prisma Browser blocks the file. |
| Future tense for current behavior | This will let you block downloads | This blocks downloads. |
| "Simply" / "just" | Simply send a PATCH | Send a PATCH. |
| "Please" in instructions | Please send the request | Send the request. |
| Questions as headings | How do I create an app? | Create an application |
| Undefined abbreviations | Configure the DLP control | Configure the Data Loss Prevention (DLP) control. |
| Casual or metaphorical verbs | Shelve a device, Cut off access | Archive the device, Suspend the user |

### 2e. Cross-reference discipline

- Link with the exact page title. Never "click here" or "this page".
- Use "see" for informational links, "refer to" for prerequisites.
- Place a cross-reference at the point of need, not only at the bottom.
- Define an abbreviation on first use (IdP, DLP, PAC, UAD), then reuse it.

---

## 3. Deliberate differences (dev-portal exceptions)

The developer portal keeps these on purpose. Do not "correct" them toward
TechDocs.

- **Second person "you".** Address the API caller directly ("you create an
  application once, then reference it from a rule"). This is standard for API
  and developer docs. TechDocs stays third-person imperative; the developer
  portal does not.
- **curl-first, JSON payloads.** Show a bare path line, then a `curl` call, then
  the shape of the response. TechDocs uses console navigation steps ("From
  Strata Cloud Manager, select ...") and DITA platform-support tables; the
  developer portal does not.
- **Admonitions, not DITA notes.** Use `:::note` and `:::caution` only. Do not
  use `:::tip`, and do not use raw `> **Note:**` blockquotes.

---

## 4. Dev-portal writing conventions

These are specific to the `.mdx` guides and back up the structure rules in
`_TEMPLATE.md`.

- **Intro paragraph.** Bold the object or feature name on first mention, define
  it in one sentence, then say how a rule references it and when to reach for it.
- **"On this page:" line.** A single comma-separated list of the sections.
  Required on every page.
- **HTTP client.** Use `curl` with `$PB_API_BASE` for the base and `$PB_TOKEN`
  for the bearer token. State the `/seb-api/v1` base once, in the Endpoint
  reference table, not near the top of the page.
- **Create responses.** Do not print the `201 Created` body. State that create
  returns `201` with the object ID, then add an `export XX_ID='...'` line so
  later snippets can reuse it.
- **IDs.** Use realistic prefixed placeholders (`0AP...`, `0UR...`, `0DE...`,
  `0AG...`, `0UG...`, `0DG...`, `0AS...`).
- **Draft and publish.** Reuse the canonical snippet in `_TEMPLATE.md` section 6
  verbatim so the wording is identical across pages. Read-only or direct-action
  objects state that draft and publish does not apply.
- **No em-dash or en-dash** anywhere. Use a comma, colon, parentheses, or a
  plain hyphen.
- **Cross-link URL format**: use the flat form `/prisma-browser/guide/<page-name>`.
  Never include a subfolder segment. Example: `[Draft and publish](/prisma-browser/guide/draft-and-publish)`,
  not `[Draft and publish](/prisma-browser/guide/basics/draft-and-publish)`.
  The generator enforces this and will fail the build on any deep guide link.

---

## 5. Terminology decisions

- **"apps" vs "applications".** The API object is the **application** (`type:
  custom`, `private`, `non-web`, `localdesktopcustom`, `catalog`). Use the full
  word **application(s)** in all body text: intros, defined bold terms, field
  tables, and prose. The short form **app(s)** is acceptable only in page
  `title` / `sidebar_label` frontmatter (for example "Custom apps") for nav
  brevity. Never let "app" stand in for the object in body copy, and never let it
  hide the underlying type name. Compound industry terms stay as written (for
  example "SaaS app" is fine only where "SaaS application" would read wrong; when
  in doubt, write "application").
- **"user" / "end user".** Use "user" for the identity the API observes and acts
  on. Reserve "administrator" (not "admin" in body text) for the API caller when
  the distinction matters.
- **"device" and "posture".** Keep "posture" for the device attribute snapshot
  (disk encryption, screen lock, firewall). Do not call it "health" or "state".

---

## 6. Quick checklist

Before finalizing any developer portal guide page, verify:

- [ ] Product names: "the Prisma Browser" (with the article), "Strata Cloud Manager", "Prisma Access", capital-E "Prisma Browser Extension". No "PB" or "the browser".
- [ ] Object or feature name is bold on first mention in the intro.
- [ ] Second person "you" is used consistently (no drift into "we").
- [ ] Preferred verbs: Allow, Block, Enable, Disable, Select, Configure, Specify.
- [ ] No exclamation marks, marketing language, hedging, "simply"/"just", or "please".
- [ ] No casual verbs (Shelve, Cut off); use Archive, Restore, Suspend, Resume.
- [ ] Abbreviations defined on first use (IdP, DLP, PAC, UAD).
- [ ] Admonitions are `:::note` or `:::caution` only (no `:::tip`, no raw blockquote notes).
- [ ] `curl` uses `$PB_API_BASE` and `$PB_TOKEN`; the `/seb-api/v1` base is stated once in Endpoint reference.
- [ ] Create does not print the `201` body; it states the ID and adds an `export` line.
- [ ] Cross-references use exact page titles ("see" / "refer to"), never "click here".
- [ ] No em-dash or en-dash anywhere.
- [ ] Cross-links use the flat form `/prisma-browser/guide/<page-name>` with no subfolder segment.
