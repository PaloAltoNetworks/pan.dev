[![Deploy to Firebase Hosting on merge](https://github.com/PaloAltoNetworks/pan.dev/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/PaloAltoNetworks/pan.dev/actions/workflows/firebase-hosting-merge.yml)

# Contributing Guidelines

Thank you for your interest in **Palo Alto Networks** developer documentation!

- [Contributing Guidelines](#contributing-guidelines)
  - [Types of contributions](#types-of-contributions)
  - [Using Git and GitHub](#using-git-and-github)
    - [Setting up your fork of the repository](#setting-up-your-fork-of-the-repository)
    - [Contribute content](#contribute-content)
      - [Sync forked repo with root](#sync-forked-repo-with-root)
  - [Markdown and MDX](#markdown-and-mdx)
    - [MDX](#mdx)
    - [Standard Markdown](#standard-markdown)
    - [Markdown basics](#markdown-basics)
    - [Link and image references](#link-and-image-references)
  - [CLI and code snippets](#cli-and-code-snippets)
  - [Adding a document](#adding-a-document)
    - [Frontmatter](#frontmatter)
    - [Sidebar](#sidebar)
    - [Contributing a doc](#contributing-a-doc)
  - [More resources](#more-resources)

## Types of contributions

The following are ways you can contribute to Palo Alto Networks developer docs:

- **Author** and contribute documentation via the developer site repository.
- **Report** documentation bugs/issues under the developer site repository `Issues` page.
- **Request** new documentation by opening a request under the developer site repository `Issues` page.

## Using Git and GitHub

:::note
Most of the information in this section can be found in [GitHub Help](https://help.github.com) articles. If you're familiar with Git and GitHub, skip to the [Contribute content](#contribute-content) section for an example `git` flow.
:::

### Setting up your fork of the repository

1. Create a GitHub account. If you haven't done this already, please [join GitHub](https://github.com/join) now.
2. Set up `git` on your machine. Follow the instructions in the [Getting Started](https://help.github.com/en/github/getting-started-with-github/set-up-git) tutorial.
3. Fork the developer site repo. To do this, click the **Fork** button in the upper-right corner of the main repo page.
4. Clone your fork to your local machine using the following command:

```bash
git clone https://github.com/{your user name}/{the developer site repo}.git
```

Next, create a reference to the root repository by entering these commands:

```bash
cd <your cloned repo folder>
git remote add upstream https://github.com/PaloAltoNetworks/{the developer site repo}.git // optionally use the SSH repo URL
git fetch upstream
```

Congratulations! You've now set up your repository.

### Contribute content

To make the contribution process as seamless as possible for you, follow this procedure.

1. Create a new branch.

```bash
git checkout -b {your-branch-name}
```

2. Add or edit existing content.
3. Push changes to your forked repo.

```bash
git add .
git commit -m "{describe the change or contribution you made}"
git push origin {your-branch-name}
```

4. Use GitHub to create a [New pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
5. After the pull request is approved and merged, you may delete the branch.

```bash
git branch -d {your-branch-name}
```

:::tip
Try to limit each specific contribution or edit to a branch to help reduce the likelihood of conflicts.
:::

The following are examples of contributions appropriate for a new branch:

- New content
- New or updated media, e.g. images, video, etc.
- Grammar and typo corrections
- Formatting changes

#### Sync forked repo with root

After some time has passed, it might be necessary to sync your local repo with the remote, upstream repo.

1. Fetch remote upstream

```bash
git fetch upstream
```

2. Merge `upstream/master` with local and `origin/master`

```bash
# Merges upstream/master with local master branch
git merge upstream/master master

# Pushes local master branch to origin/master
git push origin master
```

## Markdown and MDX

### MDX

:::info
MDX syntax can be boiled down to being JSX in Markdown. It’s a superset of Markdown syntax that also supports importing, exporting, and JSX. If you're planning use MDX to author your content be sure to use the `.mdx` file extension when naming your file.
:::

[Getting started](https://mdxjs.com/getting-started) with MDX.

### Standard Markdown

All of the articles in this repository use Markdown and MDX. While a complete introduction (and listing of all the syntax) can be found [here](https://guides.github.com/features/mastering-markdown/), let's cover some of the basics first.

Recommended editors:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Atom](https://atom.io/)
- [Sublime](https://www.sublimetext.com/)

### Markdown basics

This is a list of the most common markdown syntax:

- **Line breaks vs. paragraphs:** In Markdown there is no HTML `<br />` element. Instead, a new paragraph is designated by an empty line between two blocks of text.
- **Italics:** The HTML `<i>some text</i>` is written `*some text*`
- **Bold:** The HTML `<strong>some text</strong>` element is written `**some text**`
- **Headings:** HTML headings are designated by an number of `#` characters at the start of the line. The number of `#` characters corresponds to the hierarchical level of the heading (for example, `#` = h1, `##` = h2, and `###` = h3).
- **Numbered lists:** To create a numbered (ordered) list, start the line with `1.`. If you want multiple elements within a single list element, format your list as follows:

  1. Notice that there is a space after the '.'

     Now notice that there is a line break between the two paragraphs in the list element, and that the indentation here matches the indentation of the line above.

- **Bulleted lists:** Bulleted (unordered) lists are almost identical to ordered lists except that the `1.` is replaced with either `-`, `*`, or `+`. Multiple element lists work the same way as they do with ordered lists.
- **Links:** The base syntax for a link is `[visible link text](link url)`.
  Links can also have references, which is discussed in the **Link and Image References** section below.
- **Images:** The base syntax for an image is `![alt text for the image](image url)`.
  Images can also have references, which is discussed in the **Link and Image References** section below.
- **In-line HTML:** Markdown allows you to include HTML inline, but this should be avoided.

### Link and image references

Markdown has a really nice feature that lets a user insert a reference instead of a URL for images and links.
Here is the syntax for using this feature:

```markdown
The image below is from [Google][googleweb]

![Google's logo][logo]

[googleweb]: https://www.google.com
[logo]: https://www.google.com/images/srpr/logo3w.png
```

By using references grouped at the bottom of your file, you can easily find, edit, and reuse link and image URLs.

## CLI and code snippets

When using code blocks try to ensure your example is ready to copy and paste. Consider that a reader may be a beginner with no understanding of the difference between a shell prompt and a command. The same applies to inline comments.

Do this:

```bash
curl -X GET http://httpbin.org/get
```

Not this (results in a "command not found" error):

```bash {1}
$ curl -X GET http://httpbin.org/get
```

Sample output:

```console
{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Host": "httpbin.org",
    "User-Agent": "curl/7.54.0"
  },
  "origin": "137.83.194.100, 137.83.194.100",
  "url": "https://httpbin.org/get"
}
```

## Adding a document

This section describes the general steps required for adding a document using `git`.

### Frontmatter

Each doc requires a frontmatter header, which Docusaurus uses to determine the following:

- What description, title and tags to inject into the HTML `<meta />` tag
- What sidebar and sidebar category to organize the document under
- A unique document ID

Example:

```text
---
id: my_awesome_tutorial
title: My Awesome Tutorial
sidebar_label: My Awesome Tutorial
hide_title: false
description: A really cool tutorial about something awesome!
keywords:
  - awesome
  - tutorial
---
```

:::note
If you're not sure where to begin, feel free to use an existing doc as boilerplate. Just remember that each document requires a unique ID.
:::

### Sidebar

Each developer site will implement one or more documentation sidebars, depending on the number of vertical content areas covered by that site. The relationship between docs, categories and sidebars can be summarized as follows (listed in hierarchical order from left to right):

```text
Sidebar --> Category --> [array of document IDs]
```

The sidebar is generated from the `sidebars.js` file located in the root folder.

:::note
The following snippet calls out each specific sidebar component (note that the actual `sidebars.js` file should not contain comments).
:::

```js {6,7}
module.exports = {
  panos: [
    // Add your new doc inside an existing sidebar
    {
      type: "category",
      label: "Tutorials", // Category label
      items: ["apis/my_awesome_tutorial"] // Document ID (including relative path)
    }
  ]
};
```

### Contributing a doc

Contributing a new document can be achieved with the following, high-level flow:

1. Create a new MD/MDX file under the `docs` folder
2. Add the appropriate frontmatter (including the unique ID)
3. Add the document ID to an existing or new sidebar/sidebar category

## More resources

- For more information about Markdown, go to [their site][markdown home].
- For more information about using Git and GitHub, first check out the [GitHub Help section](https://help.github.com)
- To learn more about MDX visit https://mdxjs.com/

[markdown home]: https://daringfireball.net/projects/markdown/
