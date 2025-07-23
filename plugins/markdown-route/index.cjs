function markdownRoutePlugin() {
  return {
    name: "markdown-route-plugin",
    async contentLoaded({ actions }) {
      actions.addRoute({
        path: "/__md",
        matchPath: "/:route+.md",
        component: "@site/src/components/MarkdownPage",
      });
    },
  };
}
module.exports = markdownRoutePlugin;
