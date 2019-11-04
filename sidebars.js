/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const yaml = require("js-yaml");
const fs = require("fs");

const sidebars = yaml.safeLoad(fs.readFileSync("docs/sidebars.yml", "utf8"))[
  "SIDEBARS"
];

var sidebarsExport = {};
sidebars.map(sidebar => {
  const sidebarName = Object.keys(sidebar)[0];
  var categories = [];
  sidebar[sidebarName].map(item => {
    sidebarObject = {};
    const category = item.category;
    const ids = item.ids;
    sidebarObject["type"] = "category";
    sidebarObject["label"] = category;
    sidebarObject["items"] = ids;
    categories.push(sidebarObject);
    sidebarsExport[sidebarName] = categories;
  });
});

console.log(sidebarsExport);

module.exports = sidebarsExport;
