/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import {
  findFirstCategoryLink,
  useDocById,
} from "@docusaurus/theme-common/internal";
import isInternalUrl from "@docusaurus/isInternalUrl";
import styles from "./styles.module.css";
function CardContainer({ href, children }) {
  return (
    <Link
      href={href}
      className={clsx("card padding--lg", styles.cardContainer)}
    >
      {children}
    </Link>
  );
}
function CardLayout({ href, icon, title, description }) {
  return (
    <CardContainer href={href}>
      <h2 className={clsx(styles.cardTitle)} title={title}>
        {icon} {title}
      </h2>
      {description && (
        <p className={clsx(styles.cardDescription)} title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  );
}
function CardCategory({ item }) {
  const href = findFirstCategoryLink(item);
  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      description={item.description}
    />
  );
}
function CardLink({ item }) {
  const icon = isInternalUrl(item.href) ? "📄️" : "🔗";
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label ?? doc.title}
      description={doc?.description}
    />
  );
}

function CardDoc({ item }) {
  const icon = item.icon ? item.icon : "📄️";
  const path = item.href ?? item.path;
  const doc = useDocById(item.id);
  const description = doc?.description ?? item.description;
  return (
    <CardLayout
      href={path}
      icon={icon}
      title={item.label ?? doc.title}
      description={description}
    />
  );
}

function CardRef({ item }) {
  const icon = "📄️";
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label ?? " "}
      description={item.description ?? " "}
    />
  );
}

export default function DocCardProduct({ item }) {
  var type = item.type ? item.type : "product";
  switch (type) {
    case "link":
      return <CardLink item={item} />;

    case "category":
      return <CardCategory item={item} />;

    case "doc":
      return <CardDoc item={item} />;

    case "product":
      return <CardRef item={item} />;

    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
