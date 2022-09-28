const globby = require("globby");
const yaml = require("js-yaml");
const fs = require("fs");
// Use the following to frontload docs
var docs = [
  {
    type: "link",
    label: "Legacy",
    href: "/sase/api/sdwan/legacy/",
    customProps: {
      version: "sdwan_versions",
    },
  },
  "api/sdwan/legacy/sdwan-api",
];
// Change these variables to match your doc path
const relativePath = "api/sdwan/legacy";
const absolutePath = "/sase/api/sdwan/legacy";

function genEndpoints() {
  const endpoints = [];
  // Absolute path from project root
  specs = globby.sync(["./openapi-specs/sdwan/legacy/*.yaml"], {
    absolute: false,
    objectMode: true,
    deep: 1,
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
    const linkId = `${relativePath}/${docId}`;
    const paths = data.paths;
    var category = {
      type: "category",
      label: categoryLabel,
      collapsed: true,
      link: {
        type: "doc",
        id: linkId,
      },
    };
    items = [];
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
