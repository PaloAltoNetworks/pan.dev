const globby = require("globby");
const yaml = require("js-yaml");
const fs = require("fs");
// Use the following to frontload docs
var docs = ["sase/config/config-api"];
// Change these variables to match your doc path
const relativePath = "sase/config";
const absolutePath = "/api/sase/config";
function genEndpoints() {
  const endpoints = [];
  var endEndpoints = [];
  var pushToEnd = [];
  // Absolute path from project root
  specs = globby.sync(["./static/sase/spec/config/*.yaml"], {
    absolute: false,
    objectMode: true,
    deep: 1,
    onlyDirectories: false,
  });
  specs.map((spec) => {
    const specContents = fs.readFileSync(spec.path, "utf8");
    const data = yaml.load(specContents);
    const specSplit = spec.path.split("/");
    const categoryLabel = specSplit[specSplit.length - 1].replace(".yaml", "");
    const docId = categoryLabel
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
    const paths = data.paths;
    var category = {
      type: "category",
      label: categoryLabel,
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
    if (pushToEnd.includes(category.label)) {
      endEndpoints.push(category);
    } else {
      endpoints.push(category);
    }
  });
  return [endpoints, endEndpoints];
}
const [endpoints, endEndpoints] = genEndpoints();
const sidebar = docs.concat(endpoints).concat(endEndpoints);
module.exports = {
  sidebar: sidebar,
};
