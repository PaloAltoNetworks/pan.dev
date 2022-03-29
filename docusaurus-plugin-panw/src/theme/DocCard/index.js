/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Link from "@docusaurus/Link";
import { findFirstCategoryLink, useDocById } from "@docusaurus/theme-common";
import clsx from "clsx";
import styles from "./styles.module.css";
import isInternalUrl from "@docusaurus/isInternalUrl";

function CardContainer({ href, children }) {
  const className = clsx(
    "card margin-bottom--lg padding--lg",
    styles.cardContainer,
    href && styles.cardContainerLink
  );
  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}

function CardLayout({ href, icon, title, description }) {
  return (
    <CardContainer href={href}>
      <h2 className={clsx("text--truncate", styles.cardTitle)} title={title}>
        {icon} {title}
      </h2>
      <div
        className={clsx("text--truncate", styles.cardDescription)}
        title={description}
      >
        {description}
      </div>
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

export default function DocCard({ item }) {
  var type = item.type ? item.type : "doc";
  switch (type) {
    case "link":
      return <CardLink item={item} />;

    case "category":
      return <CardCategory item={item} />;

    case "doc":
      return <CardDoc item={item} />;

    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
