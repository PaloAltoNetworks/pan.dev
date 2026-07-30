import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import {
  isRegexpStringMatch,
  useCollapsible,
  Collapsible,
} from "@docusaurus/theme-common";
import {
  isSamePath,
  useLocalPathname,
} from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import NavbarDocItems from "../NavbarDocItems";
import NavbarItem from "@theme/NavbarItem";
import "./DropdownNavbarItem.scss";

function isItemActive(item, localPathname) {
  if (isSamePath(item.to, localPathname)) {
    return true;
  }
  if (isRegexpStringMatch(item.activeBaseRegex, localPathname)) {
    return true;
  }
  if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
    return true;
  }
  return false;
}

function containsActiveItems(items, localPathname) {
  return items.some((item) => isItemActive(item, localPathname));
}

function DropdownNavbarItemDesktop({
  items,
  position,
  className,
  onClick,
  megaNav,
  ...props
}) {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
        return;
      }
      setShowDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [dropdownRef]);

  function DropdownMenu() {
    return (
      <div className="dropdown__menu">
        <ul>
          {items.map((childItemProps, i) => {
            return (
              <NavbarItem
                isDropdownItem
                onKeyDown={(e) => {
                  if (i === items.length - 1 && e.key === "Tab") {
                    e.preventDefault();
                    setShowDropdown(false);
                    const nextNavbarItem =
                      dropdownRef.current.nextElementSibling;
                    if (nextNavbarItem) {
                      const targetItem =
                        nextNavbarItem instanceof HTMLAnchorElement
                          ? nextNavbarItem
                          : // Next item is another dropdown; focus on the inner
                            // anchor element instead so there's outline
                            nextNavbarItem.querySelector("a");
                      targetItem.focus();
                    }
                  }
                }}
                activeClassName="dropdown__link--active"
                {...childItemProps}
                key={i}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  function MegaDropdownMenu() {
    const [apiDocItems, setApiDocItems] = useState({});
    const [colorClass, setColorClass] = useState("");
    const [productGroupIdx, setProductGroupIdx] = useState(null);
    const [productTitle, setProductTitle] = useState("");
    const [productIdx, setProductIdx] = useState(null);

    const [expandedProductGroups, setExpandedProductGroups] = useState({});
    const [initialCollapse, setInitialCollapse] = useState(true);
    const showViewAllDocs = Object.keys(apiDocItems).length > 0;

    return (
      <div className="dropdown__menu mega">
        <ul className="dropdown-product-group-list">
          {items.map((childItemProps, i) => {
            const {
              products,
              colorclass,
              label: productGroupLabel,
            } = childItemProps;
            const firstProduct = products[0];

            // Special case for linking to Strata Cloud Manager landing page
            if (productGroupLabel === "Strata Cloud Manager") {
              return (
                <React.Fragment>
                  <NavbarItem
                    isDropdownItem
                    label={productGroupLabel}
                    className={`product-group-list__product-title ${colorclass}`}
                    to="/strata-cloud-manager"
                  />
                </React.Fragment>
              );
            }

            return (
              <React.Fragment key={i}>
                <NavbarItem
                  className={clsx(
                    `product-group-list__product-title ${colorclass}`,
                    {
                      active:
                        i === productGroupIdx &&
                        expandedProductGroups[productGroupLabel],
                    }
                  )}
                  isDropdownItem
                  onKeyDown={(e) => {
                    if (i === items.length - 1 && e.key === "Tab") {
                      e.preventDefault();
                      setShowDropdown(false);
                      const nextNavbarItem =
                        dropdownRef.current.nextElementSibling;
                      if (nextNavbarItem) {
                        const targetItem =
                          nextNavbarItem instanceof HTMLAnchorElement
                            ? nextNavbarItem
                            : // Next item is another dropdown; focus on the inner
                              // anchor element instead so there's outline
                              nextNavbarItem.querySelector("a");
                        targetItem.focus();
                      }
                    }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (expandedProductGroups[productGroupLabel]) {
                      setExpandedProductGroups({
                        ...expandedProductGroups,
                        [productGroupLabel]: false,
                      });
                    } else {
                      setApiDocItems({
                        apiDocs: firstProduct.apiDocs,
                        docs: firstProduct.docs,
                      });
                      setExpandedProductGroups({
                        ...expandedProductGroups,
                        [productGroupLabel]: true,
                      });
                      setInitialCollapse(false);
                      setColorClass(colorclass);
                      setProductIdx(0);
                      setProductTitle(firstProduct.label);
                      setProductGroupIdx(i);
                    }
                  }}
                  activeClassName="dropdown__link--active"
                  {...childItemProps}
                />
                <Collapsible
                  className="padding-top--none padding-left--none"
                  lazy
                  as="ul"
                  collapsed={
                    initialCollapse || !expandedProductGroups[productGroupLabel]
                  }
                >
                  {products.map((product, j) => {
                    const { apiDocs, docs, label } = product;
                    return (
                      <li className="padding-left--sm" key={j}>
                        <NavbarNavLink
                          className={clsx(
                            `dropdown__link product ${colorclass}`,
                            {
                              active: productIdx === j && productGroupIdx === i,
                            }
                          )}
                          label={product.label}
                          onClick={(e) => {
                            e.preventDefault();
                            setApiDocItems({ apiDocs, docs });
                            setColorClass(colorclass);
                            setProductTitle(label);
                            setProductIdx(j);
                            setProductGroupIdx(i);
                          }}
                        />
                      </li>
                    );
                  })}
                </Collapsible>
              </React.Fragment>
            );
          })}
        </ul>
        <div className="dropdown-right-panel">
          <NavbarDocItems
            apiDocs={apiDocItems.apiDocs}
            docs={apiDocItems.docs}
            productTitle={productTitle}
            colorClass={colorClass}
          />
          {showViewAllDocs && (
            <Link
              className="dropdown-right-panel__explore-docs-link"
              to="/#developer-docs-section"
            >
              Explore our Developer Docs
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={dropdownRef}
      className={clsx("navbar__item", "dropdown", "dropdown--hoverable", {
        "dropdown--right": position === "right",
        "dropdown--show": showDropdown,
      })}
    >
      <NavbarNavLink
        aria-haspopup="true"
        aria-expanded={showDropdown}
        role="button"
        href={props.to ? undefined : "#"}
        className={clsx("navbar__link", className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}
      >
        {props.children ?? props.label}
      </NavbarNavLink>
      {megaNav ? <MegaDropdownMenu /> : <DropdownMenu />}
    </div>
  );
}

function DropdownNavbarItemMobile({
  items,
  className,
  position, // Need to destructure position from props so that it doesn't get passed on.
  onClick,
  ...props
}) {
  const localPathname = useLocalPathname();
  const containsActive = containsActiveItems(items, localPathname);
  const { collapsed, toggleCollapsed, setCollapsed } = useCollapsible({
    initialState: () => !containsActive,
  });
  // Expand/collapse if any item active after a navigation
  useEffect(() => {
    if (containsActive) {
      setCollapsed(!containsActive);
    }
  }, [localPathname, containsActive, setCollapsed]);

  const [productGroupIdx, setProductGroupIdx] = useState(null);
  const [productIdx, setProductIdx] = useState(null);

  return (
    <>
      {items.map((item, i) => {
        const { products } = item;
        const productGroupListClass = clsx("menu__list-item", {
          "menu__list-item--collapsed": i !== productGroupIdx,
        });
        return (
          <li key={i} className={productGroupListClass}>
            <NavbarNavLink
              role="button"
              className={clsx(
                "menu__link menu__link--sublist menu__link--sublist-caret product-group",
                { "menu__list-item--collapsed": i !== productGroupIdx }
              )}
              label={item.label}
              onClick={(e) => {
                e.preventDefault();
                if (i !== productGroupIdx) {
                  setProductGroupIdx(i);
                } else {
                  setProductGroupIdx(null);
                }
              }}
            />
            <Collapsible
              lazy
              as="ul"
              className="menu__list"
              collapsed={i !== productGroupIdx}
            >
              {products.map((product, j) => (
                <li
                  key={j}
                  className={clsx("menu__list-item", {
                    "menu__list-item--collapsed": j !== productIdx,
                  })}
                >
                  <NavbarNavLink
                    to={product.to}
                    label={product.label}
                    className={clsx(
                      "menu__link menu__link--sublist menu__link--sublist-caret"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      if (j !== productIdx) {
                        setProductIdx(j);
                      } else {
                        setProductIdx(null);
                      }
                    }}
                  />
                  <Collapsible
                    lazy
                    as="ul"
                    className="menu__list"
                    collapsed={j !== productIdx}
                  >
                    {product.docs && (
                      <>
                        <NavbarNavLink
                          className={clsx("menu__link section__title")}
                          label={"Docs"}
                          onClick={(e) => e.preventDefault()}
                        />
                        {product.docs.map((productDoc, i) => (
                          <NavbarNavLink
                            key={i}
                            className={clsx("menu__link menu__link--sublist")}
                            label={productDoc.label}
                            to={productDoc.to}
                          />
                        ))}
                      </>
                    )}
                    {product.apiDocs && (
                      <>
                        <NavbarNavLink
                          className={clsx("menu__link section__title")}
                          label={"API Reference"}
                          onClick={(e) => e.preventDefault()}
                        />
                        {product.apiDocs.map((apiDoc, i) => (
                          <NavbarNavLink
                            key={i}
                            className={clsx("menu__link menu__link--sublist")}
                            label={apiDoc.label}
                            to={apiDoc.to}
                          />
                        ))}
                      </>
                    )}
                  </Collapsible>
                </li>
              ))}
            </Collapsible>
          </li>
        );
      })}
    </>
  );
}

export default function DropdownNavbarItem({ mobile = false, ...props }) {
  const Comp = mobile ? DropdownNavbarItemMobile : DropdownNavbarItemDesktop;
  return <Comp {...props} />;
}
