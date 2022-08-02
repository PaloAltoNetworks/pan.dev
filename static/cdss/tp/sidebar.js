
const globby = require("globby");
const yaml = require("js-yaml");
const fs = require("fs");
// Use the following to frontload docs
var docs = ["tp/tp-public-api-overview", "tp/tp-public-api-headers", "tp/tp-public-api-access-limits", "tp/tp-public-api-manage-key", "tp/tp-public-api-best-practices"];

// Change these variables to match your doc path
const relativePath = "tp";
const absolutePath = "/api/tp";
function genEndpoints() {
  const endpoints = [];
  const css_overrides = [];
  // Absolute path from project root
  specs = globby.sync(['./static/oas/tp/*.yaml'], {
    absolute: false,
    objectMode: true,
    deep: 2,
    onlyDirectories: false,
  });

  specs.map((spec) => {
    const specContents = fs.readFileSync(spec.path, "utf8");
    const data = yaml.load(specContents);
    const categoryLabel = data.tags[0].name;
    const docId = categoryLabel
      .replace(/([a-z]T)([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
    const paths = data.paths;
    var category = {
      type: "category",
      label: categoryLabel,
      collapsed: false,
    };
    var items = [`${relativePath}/${docId}`];
    for ([path, methods] of Object.entries(paths)) {
      for ([method, attributes] of Object.entries(methods)) {
        const operationId = attributes.operationId;
        const linkLabel = attributes.summary;
        const item = {
          type: "link",
          label: linkLabel,
          href: `${absolutePath}/${docId}#operation/${operationId}`,
          customProps: {
            method: method,
          },
        };
        items.push(item);
      }
    }
    category.items = items;
    endpoints.push(category);
  });
  return endpoints;
}
const endpoints = genEndpoints();
const sidebar = docs.concat(endpoints);
module.exports = {
  sidebar: sidebar,
};
