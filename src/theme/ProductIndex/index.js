/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import DocCardListProduct from "@theme/DocCardListProduct";
import Button from "@theme/Button";
import useGlobalData from "@docusaurus/useGlobalData";

export default function ProductIndex({ product }) {
  const crumbs = require("/crumbs.json");
  const product_menu = crumbs[product].children;
  return <DocCardListProduct items={product_menu} />;
  /*
  var docs = [];
  var apis = [];
  const docsData =
    useGlobalData()["docusaurus-plugin-content-docs"][product]["versions"][0][
      "docs"
    ];
  docsData.forEach((doc) => {
    const doc_id = doc.id;
    console.log(doc);
    console.log(doc_id);
    if (doc_id.startsWith("api")) {
      apis.push(doc);
    } else {
      docs.push(doc);
    }
  });
  console.log(docs);

  return (
    <article>
      <h1>Dev Docs</h1>
      <DocCardList items={docs} />
      <h1>API Docs</h1>
      <DocCardList items={apis} />
    </article>
  );
  */
}
