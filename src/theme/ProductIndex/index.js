/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import DocCardListProduct from "@theme/DocCardListProduct";

export default function ProductIndex({ product }) {
  const crumbs = require("/crumbs.json");
  const product_menu = crumbs[product].children;
  return <DocCardListProduct items={product_menu} />;
}
