[![Deploy Live](https://github.com/PaloAltoNetworks/pan.dev/actions/workflows/deploy-live.yml/badge.svg)](https://github.com/PaloAltoNetworks/pan.dev/actions/workflows/deploy-live.yml) [![CodeQL](https://github.com/PaloAltoNetworks/pan.dev/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/PaloAltoNetworks/pan.dev/actions/workflows/codeql-analysis.yml)

<h1 align="center">
  <p align="center">Palo Alto Networks Developer Docs</p>
  <a href="https://pan.dev">
  <img src="https://raw.githubusercontent.com/PaloAltoNetworks/pan.dev/master/static/img/site.png"/>
  </a>
</h1>

## About PAN.dev (evil steve was here)

**What is PAN.dev?**

PAN.dev is the home for developer-focused documentation at Palo Alto Networks.

**Why was PAN.dev created**?

PAN.dev was created to deliver a better developer experience to our developer community by aggregating developer-focused content, simplifying the doc authoring experience, and providing content in a more consumable medium.

**Who can contribute?**

Anyone! We made pan.dev open source so all members of the community can author, edit, and open issues on our docs.

**How can I contribute?**

We have a [contributing guide](https://pan.dev/contributing). Docs are authored in markdown an easy-to-write plain text markup language (the same format used for readme's and slack!).

A special thanks to all those who have contributed to the docs so far!

**Contributors**

<a href="https://github.com/PaloAltoNetworks/pan.dev/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=PaloAltoNetworks/pan.dev" />
</a>

## Developer Environment

This website is built using Docusaurus 2, a modern static website generator.

> For more advanced/detailed use cases see the [contributing guide](https://pan.dev/contributing)

### Installation

```
yarn
```

### Local Development

```
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The `master` branch is linked to a Firebase site and will auto-deploy when changes are merged.

Build/deploy previews will be automatically generated for pull requests into the `master` branch. Build/deploy previews can be used to review changes to determine if they are ready to be merged into `master`.

### Support

See [SUPPORT.md](https://github.com/PaloAltoNetworks/pan.dev/blob/master/SUPPORT.md).
