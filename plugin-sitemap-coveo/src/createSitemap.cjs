"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const sitemap = require("sitemap");
const utils_common = require("@docusaurus/utils-common");
const crumbs = require("../../crumbs.json");
const { XMLParser, XMLBuilder } = require("fast-xml-parser");

function traverse(crumbs, coveo_metadata, routePath) {
  const children = crumbs.children ?? crumbs;
  if (children == []) {
    return coveo_metadata;
  }
  for (var prop in children) {
    if (routePath.includes(children[prop].href)) {
      crumbs = children[prop];
      for (var i in children[prop]) {
        switch (i) {
          case "sitemap_informationtype":
          case "sitemap_feature":
          case "sitemap_productcategory":
          case "sitemap_osversion":
          case "sitemap_featurecategory":
            coveo_metadata[i] = coveo_metadata[i].concat(children[prop][i]);
            break;
        }
      }
      traverse(crumbs, coveo_metadata, routePath);
      break;
    }
  }
  return coveo_metadata;
}

function generateMeta(routePath, crumbs) {
  let coveo_metadata = {
    sitemap_informationtype: ["Developer"],
    sitemap_productcategory: [],
    sitemap_feature: [],
    sitemap_osversion: [],
    sitemap_featurecategory: [],
  };
  coveo_metadata = traverse(crumbs, coveo_metadata, routePath);
  /*
  let coveo_xml = `<coveo:metadata>`;
  if (coveo_metadata.sitemap_osversion != []) {
    coveo_xml =
      coveo_xml +
      `<sitemap_osversion>` +
      coveo_metadata.sitemap_osversion.join(";") +
      `</sitemap_osversion>`;
  }
  if (coveo_metadata.sitemap_informationtype != []) {
    coveo_xml =
      coveo_xml +
      ` <sitemap_informationtype>` +
      coveo_metadata.sitemap_informationtype.join(";") +
      `</sitemap_informationtype>`;
  }
  if (coveo_metadata.sitemap_feature != []) {
    coveo_xml =
      coveo_xml +
      `<sitemap_feature>` +
      coveo_metadata.sitemap_feature.join(";") +
      `</sitemap_feature>`;
  }
  if (coveo_metadata.sitemap_productcategory != []) {
    coveo_xml =
      coveo_xml +
      `<sitemap_productcategory>` +
      coveo_metadata.sitemap_productcategory.join(";") +
      `</sitemap_productcategory>`;
  }
  coveo_xml = coveo_xml + `</coveo:metadata>`;
  */
  let coveo_metadata_trim = {};
  if (coveo_metadata.sitemap_osversion.length > 0) {
    coveo_metadata_trim["sitemap_osversion"] =
      coveo_metadata.sitemap_osversion.join("; ");
  }
  if (coveo_metadata.sitemap_informationtype.length > 0) {
    coveo_metadata_trim["sitemap_informationtype"] =
      coveo_metadata.sitemap_informationtype.join("; ");
  }
  if (coveo_metadata.sitemap_feature.length > 0) {
    coveo_metadata_trim["sitemap_feature"] =
      coveo_metadata.sitemap_feature.join("; ");
  }
  if (coveo_metadata.sitemap_productcategory.length > 0) {
    coveo_metadata_trim["sitemap_productcategory"] =
      coveo_metadata.sitemap_productcategory.join("; ");
  }
  if (coveo_metadata.sitemap_featurecategory.length > 0) {
    coveo_metadata_trim["sitemap_feature-category"] =
      coveo_metadata.sitemap_featurecategory.join("; ");
  }

  return coveo_metadata_trim;
}
async function createSitemap(siteConfig, routesPaths, options) {
  const { url: hostname } = siteConfig;
  if (!hostname) {
    throw new Error("URL in docusaurus.config.js cannot be empty/undefined.");
  }
  const { changefreq, priority } = options;
  let coveo_xml_map = {};
  const sitemapStream = new sitemap.SitemapStream({
    hostname: hostname,
    xmnls: {
      custom: [
        'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9',
        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
        'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"',
        'xmlns:coveo="https://www.coveo.com/en/company/about-us"',
      ],
    },
  });
  routesPaths
    .filter((route) => !route.endsWith("404.html"))
    .forEach((routePath) => {
      let url = (0, utils_common.applyTrailingSlash)(routePath, {
        trailingSlash: siteConfig.trailingSlash,
        baseUrl: siteConfig.baseUrl,
      });
      sitemapStream.write({
        url,
        changefreq,
        priority,
      });
      let loc = siteConfig.url + url;
      coveo_xml_map[loc] = generateMeta(routePath, crumbs);
    });
  sitemapStream.end();
  const generatedSitemap = (
    await (0, sitemap.streamToPromise)(sitemapStream)
  ).toString();
  const parser = new XMLParser();
  const sitemap_json = parser.parse(generatedSitemap);
  for (var path in sitemap_json.urlset.url) {
    sitemap_json.urlset.url[path]["coveo:metadata"] =
      coveo_xml_map[sitemap_json.urlset.url[path].loc];
  }
  const builder = new XMLBuilder();
  let xmlDataStr = builder.build(sitemap_json.urlset);
  let begin = `<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns:coveo="https://www.coveo.com/schemas/metadata">`;
  let end = `</urlset>`;
  let new_sitemap = begin + xmlDataStr + end;
  return new_sitemap;
}
exports.default = createSitemap;
