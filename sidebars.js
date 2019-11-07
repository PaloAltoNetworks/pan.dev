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
  var categoryObjects = [];
  sidebar.categories.map(category => {
    categoryObject = {};
    categoryObject["type"] = "category";
    categoryObject["label"] = category.category;
    categoryObject["items"] = category.ids;
    categoryObjects.push(categoryObject);
  });
  sidebarsExport[sidebar.sidebar] = categoryObjects;
});

console.log(sidebarsExport);

module.exports = sidebarsExport;
