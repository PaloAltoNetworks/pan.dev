---
id: create-doc-md
title: Markdown Features
sidebar_position: 5
sidebar_label: Markdown Features
---

Markdown is the same thing that allows you to style text in Slack, GitHub READMEs, and much more. Here we will see the Markdown features you can use in your docs. It can be helpful to look at other docs' `.md` / `.mdx` files to get ideas for how to author your own.

## Standard Markdown

All of the articles in this repository use Markdown and MDX. You can write content using [GitHub Flavored Markdown syntax](https://github.github.com/gfm/); Docusaurus also supports its own [Markdown features](https://docusaurus.io/docs/markdown-features).

## Headers

## H2 - Create the best documentation

### H3 - Create the best documentation

#### H4 - Create the best documentation

##### H5 - Create the best documentation

###### H6 - Create the best documentation

:::tip
Don't use `#` (H1) in a doc — the page's `title` frontmatter is already rendered as the H1.
:::

---

## Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

---

## Lists

1. First ordered list item
1. Another item
   - Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
1. And another item.

- Unordered list can use asterisks

* Or minuses

- Or pluses

---

## Links

[I'm an inline-style link](https://www.google.com/)

[I'm an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com/ or <http://www.example.com/> and sometimes example.com (but not on GitHub, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[link text itself]: http://www.reddit.com/

---

## Images

Inline-style: ![alt text](/img/PANW_Developers_Red_White.svg "Palo Alto Networks Developers")

Reference-style: ![alt text][logo]

[logo]: /img/PANW_Developers_Red_White.svg "Palo Alto Networks Developers"

Images placed in `static/img/` are served at `/img/…`. You can also reference images with a path relative to your Markdown file if they live alongside the doc.

---

## Code

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log("This line can be highlighted!");
}
```

---

## Tables

Colons can be used to align columns.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## Blockquotes

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

## Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Works fine inside <code>.mdx</code> files. In plain <code>.md</code>, prefer HTML <em>tags</em>.</dd>
</dl>

---

## Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

---

## Admonitions

:::note

This is a note

:::

:::tip

This is a tip

:::

:::info

This is info

:::

:::important

This is important

:::

:::warning

This is a warning

:::

:::danger

This is a danger callout — reserved for critical issues

:::

## If you want to get more advanced, you can use MDX

:::info
MDX syntax can be boiled down to being JSX in Markdown. It's a superset of Markdown syntax that also supports importing, exporting, and JSX. If you're planning to use MDX to author your content, be sure to use the `.mdx` file extension when naming your file.
:::

[Getting started](https://mdxjs.com/getting-started) with MDX.
