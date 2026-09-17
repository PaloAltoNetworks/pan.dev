# PBPortal analytics (GA4)

How the Prisma Browser developer-docs site is instrumented for Google Analytics 4.

## Setup

- GA4 is loaded site-wide by [`docusaurus-plugin-gtm`](../../../docusaurus-plugin-gtm/index.js) (container `GTM-PLXD79N`, gated by the cookie-consent banner). The PB custom events below call the `window.gtag` that container installs, so they inherit the same consent gate. No `gtag` preset option is configured in `docusaurus.config.ts`: adding one would fire a second, ungated tag.
- Events only fire once the visitor has accepted analytics cookies, and GTM is not loaded under `yarn start`. Test on a deployed build via GA DebugView / Realtime.
- Filter PB reporting by hostname `pan.dev` and page path prefix `/prisma-browser`.

## Automatic (no code)

- `page_view` on every route: guides (`/prisma-browser/guide/<name>`), release notes by date (`/prisma-browser/release-notes/<slug>`), API reference (`/prisma-browser/api/*`), landing.
- Acquisition: source / medium / channel / referrer / landing page / UTM ("how they got there").
- With Enhanced Measurement enabled on the stream: scroll, outbound clicks, default-extension file downloads. Note: `.yaml` is **not** a default download extension, which is why `spec_download` is fired manually.

## Custom events

Fired by a delegated listener in [`src/theme/Root.js`](../../theme/Root.js) (`track()` -> `window.gtag('event', ...)`). Keyed on stable classNames.

| Event | Trigger | Params |
|---|---|---|
| `spec_download` | Click `a[download]` (OpenAPI spec, `.yaml`); excludes guide `.md` menu downloads | `file_name`, `file_extension`, `link_url` |
| `guide_copy_md` | "Copy for AI" primary button (`.pb-ai-main`): copies current page as Markdown | `scope` (`page`), `page_path`, `guide` (slug) |
| `guide_md_download` | "Download this page / full guide" in the AI menu (`.pb-ai-item` `a[download]`) | `scope` (`page` \| `full_guide`), `page_path`, `guide` (slug or `full_guide`), `file_name` |
| `subscribe_open` | Click "Subscribe for updates" (`.pb-bar-btn-rss`) | - |
| `feed_subscribe` | Click Feedly / Inoreader link in Subscribe modal | `provider` (`feedly` \| `inoreader`) |
| `rss_url_copy` | Copy the **RSS feed URL** in Subscribe modal (`.pb-copyfield .mini-btn`) | `copy_kind` (`feed_url`) |
| `rss_slack_copy` | Copy the **Slack `/feed` command** in Subscribe modal | `copy_kind` (`slack_command`) |
| `release_notes_bulk_toggle` | Expand all / Collapse all (`.pb-rail-actions .mini-btn`) | `action` (`expand_all` \| `collapse_all`) |
| `release_note_jump` | Date-timeline link (`.pb-datelist a`) | `release_date` |
| `release_note_toggle` | Per-date card expand/collapse (`.pb-box-head`) | `release_date`, `action` (`expand` \| `collapse`) |
| `endpoint_click` | Endpoint deep-link in a change (`a.pb-endpoint`) | `endpoint`, `link_url` |
| `code_copy` | Copy-code button (`.copy-btn`) | `page_path` |
| `api_try_send` | "Send API Request" (`.openapi-explorer__request-btn`) | `page_path`, `endpoint` (path segment, e.g. `list-users`), `endpoint_title` (page H1) |
| `nav_tab_click` | Surface-switcher tab (`.pb-tab`) | `tab`, `state` (`coming_soon` when disabled) |
| `guide_nav_click` | Guide left-rail link (`.pb-nav-link`) | `guide`, `link_url` |
| `cta_click` | Landing CTA card / use-case row (`.pb-card`, `.pb-uc-item`) | `label`, `link_url` |
| `search` | Algolia DocSearch input (debounced / Enter) | `search_term` |

### GA4 console follow-ups

- Register event-scoped **custom dimensions** for the params you want to slice by: `release_date`, `tab`, `guide`, `provider`, `endpoint`, `endpoint_title`, `page_path`, `scope`, `file_name`, `file_extension`. (`search_term` is built-in.) Note: `api_try_send`, `guide_copy_md`, and `guide_md_download` are also attributable by the built-in `pagePath` dimension crossed with the event, without registering anything; register `scope` to split guide-md `page` vs `full_guide`. RSS feed-URL vs Slack-command copies are now separate events (`rss_url_copy` / `rss_slack_copy`), so `copy_kind` no longer needs registering to split them.
- Optionally mark `spec_download`, `feed_subscribe`, `api_try_send`, `guide_copy_md`, `guide_md_download` as **key events**.

## API reference landing (`?ref=nav`)

The API reference has no standalone landing page, so entering the section defaults to the `list-users` endpoint. All navigational entry points (`API_REF_URL` in [`portalConfig.js`](./portalConfig.js): the switcher tab, Overview hero + card, release-note fallback, and the navbar apiDocs link) point at `/prisma-browser/api/list-users?ref=nav`.

To read genuine interest vs navigation, use the **`pagePathPlusQueryString`** dimension (not `pagePath`, which strips the query and re-merges them):

- `/prisma-browser/api/list-users?ref=nav` = "entered the API section" (navigational, discount it).
- `/prisma-browser/api/list-users` (no query) = genuine: bookmarks, deep links, search, and sidebar clicks.

## UTM convention for off-site links

RSS feed item links are auto-tagged in `createFeedItems` ([`docusaurus.config.ts`](../../../docusaurus.config.ts)):

```
?utm_source=rss&utm_medium=feed&utm_campaign=pb-release-notes
```

For manual announcements, append UTM by hand:

- Slack: `?utm_source=slack&utm_medium=chat&utm_campaign=<note-slug>`
- Email: `?utm_source=email&utm_medium=email&utm_campaign=<note-slug>`
