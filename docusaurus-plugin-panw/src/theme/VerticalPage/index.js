/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import classnames from "classnames";
import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";

function ProductContainer({ href, children }) {
  const className = clsx(
    "card margin-bottom--lg padding--lg",
    styles.productContainer,
    href && styles.productContainerLink
  );
  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}
function ProductLayout({ href, icon, title, description }) {
  return (
    <ProductContainer href={href}>
      <h2 className={clsx("text--truncate", styles.productTitle)} title={title}>
        {icon} {title}
      </h2>
      <div
        className={clsx("text--truncate", styles.productDescription)}
        title={description}
      >
        {description}
      </div>
    </ProductContainer>
  );
}

function ProductCard({ item }) {
  const icon = item.icon ?? "📄️";
  return <ProductLayout href={item.href} icon={icon} title={item.label} />;
}

function ProductCardList({ product }) {
  const crumbs = require("/crumbs.json");
  const product_menu = crumbs[product].children;
  return (
    <div>
      <div className="row">
        <h1>{crumbs[product].label}</h1>
      </div>
      <div className="row">
        {product_menu.map((item, index) => (
          <article key={index} className="col col--6">
            <ProductCard item={item} />
          </article>
        ))}
      </div>
    </div>
  );
}

function VerticalPage({ verticalSidebars }) {
  return (
    <div className="container">
      {verticalSidebars.map((product) => (
        <div key={product}>
          <ProductCardList product={product} />
        </div>
      ))}
    </div>
  );
}

export default VerticalPage;
