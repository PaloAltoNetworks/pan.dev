/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import DocCardProduct from "@theme/DocCardProduct";
export default function DocCardListProduct({ items }) {
  return (
    <div className="row">
      {items.map((item, index) => (
        <article key={index} className="col col--6 padding--sm">
          <DocCardProduct item={item} />
        </article>
      ))}
    </div>
  );
}
