import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useSidebarBreadcrumbs } from "@docusaurus/plugin-content-docs/client";
import { useHomePageRoute } from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { translate } from "@docusaurus/Translate";
import IconHome from "@theme/Icon/Home";
import styles from "./styles.module.css";

const crumbs = require("../../../crumbs.json");

// TODO move to design system folder
function BreadcrumbsItemLink({ children, href, isLast }) {
  const className = "breadcrumbs__link";
  if (isLast) {
    return (
      <span className={className} itemProp="name">
        {children}
      </span>
    );
  }
  return href ? (
    <Link className={className} href={href} itemProp="item">
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    // TODO Google search console doesn't like breadcrumb items without href.
    // The schema doesn't seem to require `id` for each `item`, although Google
    // insist to infer one, even if it's invalid. Removing `itemProp="item
    // name"` for now, since I don't know how to properly fix it.
    // See https://github.com/facebook/docusaurus/issues/7241
    <span className={className}>{children}</span>
  );
}
// TODO move to design system folder
function BreadcrumbsItem({ children, active, index, addMicrodata }) {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: "itemListElement",
        itemType: "https://schema.org/ListItem",
      })}
      className={clsx("breadcrumbs__item", {
        "breadcrumbs__item--active": active,
      })}
    >
      {children}
      <meta itemProp="position" content={String(index + 1)} />
    </li>
  );
}
function HomeBreadcrumbItem() {
  const homeHref = useBaseUrl("/");
  return (
    <li className="breadcrumbs__item">
      <Link
        aria-label={translate({
          id: "theme.docs.breadcrumbs.home",
          message: "Home page",
          description: "The ARIA label for the home page in the breadcrumbs",
        })}
        className={clsx("breadcrumbs__link", styles.breadcrumbsItemLink)}
        href={homeHref}
      >
        <IconHome className={styles.breadcrumbHomeIcon} />
      </Link>
    </li>
  );
}

function productCrumbLink(productCrumb) {
  // Only link the product breadcrumb if it's `make_link` is true
  return productCrumb.make_link ? productCrumb.href : undefined;
}

function linkedProductCrumb(productCrumb) {
  // Assign the link, only if asked for. This is to preserve existing
  // functionality until opt-in
  return { ...productCrumb, href: productCrumbLink(productCrumb) };
}

/**
 * Generate product and intermediate breadcrumbs for a given path.
 *
 * Traverse over the crumbs.json file to find the product breadcrumb
 * and any intermediate breadcrumbs that should go between the
 * homepage breadcrumb on the left and the breadcrumbs from docusaurus.
 *
 * @param {string} path
 * @param {*} crumbs
 *
 * @returns {Array} An array of intermediate breadcrumbs
 */
function generateIntermediateBreadcrumbs(path, crumbs) {
  if (!path) {
    return [];
  }
  // Check children of product
  for (const productCrumb of Object.values(crumbs)) {
    if (productCrumb.children) {
      for (const childCrumb of productCrumb.children) {
        // Being careful here to retain existing functionality until
        // opt-in with `add_crumb` or a specific `match` value
        if (
          path.startsWith(childCrumb.match) ||
          (childCrumb.add_crumb && path.startsWith(childCrumb.href))
        ) {
          if (!childCrumb.add_crumb || path === childCrumb.href) {
            return [linkedProductCrumb(productCrumb)];
          } else {
            return [linkedProductCrumb(productCrumb), childCrumb];
          }
        }
      }
    }
  }
  // None of the children match, so check the products themselves
  for (const crumb of Object.values(crumbs)) {
    if (path.startsWith(crumb.href)) {
      return [linkedProductCrumb(crumb)];
    }
  }
  return [];
}

export default function DocBreadcrumbs() {
  const sidebarBreadcrumbs = useSidebarBreadcrumbs() || [];
  const path = sidebarBreadcrumbs[sidebarBreadcrumbs.length - 1]?.href;
  const breadcrumbs = [
    ...generateIntermediateBreadcrumbs(path, crumbs),
    ...sidebarBreadcrumbs,
  ];
  const homePageRoute = useHomePageRoute();
  if (!breadcrumbs) {
    return null;
  }
  return (
    <nav
      className={clsx(
        ThemeClassNames.docs.docBreadcrumbs,
        styles.breadcrumbsContainer
      )}
      aria-label={translate({
        id: "theme.docs.breadcrumbs.navAriaLabel",
        message: "Breadcrumbs",
        description: "The ARIA label for the breadcrumbs",
      })}
    >
      <ul
        className="breadcrumbs"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {homePageRoute && <HomeBreadcrumbItem />}
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <BreadcrumbsItem
              key={idx}
              active={isLast}
              index={idx}
              addMicrodata={!!item.href}
            >
              <BreadcrumbsItemLink href={item.href} isLast={isLast}>
                {item.label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>
          );
        })}
      </ul>
    </nav>
  );
}
