"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const fs_extra = require("fs-extra");
const path = require("path");
const createSitemap = require("./createSitemap.cjs");
function pluginSitemap(_context, options) {
  return {
    name: "docusaurus-plugin-sitemap",
    async postBuild({ siteConfig, routesPaths, outDir }) {
      if (siteConfig.noIndex) {
        return;
      }
      // Generate sitemap.
      const generatedSitemap = await (0, createSitemap.default)(
        siteConfig,
        routesPaths,
        options
      );
      // Write sitemap file.
      const sitemapPath = path.join(outDir, "coveo-sitemap.xml");
      try {
        await fs_extra.outputFile(sitemapPath, generatedSitemap);
      } catch (err) {
        throw new Error(`Writing sitemap failed: ${err}`);
      }
    },
  };
}
exports.default = pluginSitemap;
