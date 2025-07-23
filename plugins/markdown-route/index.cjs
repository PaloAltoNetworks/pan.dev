function markdownRoutePlugin() {
  return {
    name: "markdown-route-plugin",
    async contentLoaded({ actions }) {
      actions.addRoute({
        path: "/__rawmd",
        matchPath: "/:route+.md",
        component: "@site/src/components/MarkdownPage",
        exact: true,
      });
    },
  };
}
module.exports = markdownRoutePlugin;
