---
id: create-doc-reqs
title: Create a Doc Starter
sidebar_position: 2
sidebar_label: Requirements
---

:::tip
The recommended way to add/edit content is locally, using your favorite text editor or IDE (e.g. VSCode, Cursor, VIM), optionally paired with an agentic coding assistant like [Claude Code](https://docs.claude.com/en/docs/claude-code) or [Codex](https://developers.openai.com/codex/cli/).
:::

## Minimum Requirements

1. **Node.js version >=18** (Node 20 LTS recommended)

To see if you have node installed run the following:

```bash
node -v
```

If you don't have node, install it [here](https://nodejs.org/en/download/) or use your package installer of choice (e.g. Homebrew).

2. **Yarn version >=1.5** (Classic)

To see if you have yarn installed run the following:

```bash
yarn --version
```

If you don't have yarn installed, run the following:

```bash
npm install --global yarn
```

Alternatively, if you're on Node 16+, you can enable [Corepack](https://nodejs.org/api/corepack.html) instead:

```bash
corepack enable
```

3. **Git CLI**

To see if you have git installed run the following:

```bash
git --version
```

If you don't have git installed, install it [here](https://git-scm.com/downloads).

4. **An IDE or Code Editor**

We recommend [VSCode](https://code.visualstudio.com/download) or [Cursor](https://cursor.com/) if you don't already have an editor of choice. Command-line editors like VIM also work well.

5. **(Optional) Agentic Coding Assistant**

An agentic coding assistant can speed up authoring and reviewing docs. Popular choices:

- [Claude Code](https://docs.claude.com/en/docs/claude-code) — Anthropic's CLI for Claude
- [Codex](https://developers.openai.com/codex/cli/) — OpenAI's CLI

Now that your environment is ready, let's move on to setting up your development environment.
