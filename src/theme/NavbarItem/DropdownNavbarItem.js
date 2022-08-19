import React, {useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import {
  isRegexpStringMatch,
  useCollapsible,
  Collapsible,
} from '@docusaurus/theme-common';
import {isSamePath, useLocalPathname} from '@docusaurus/theme-common/internal';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import NavbarItem from '@theme/NavbarItem';
import NavbarDocItems from '../NavbarDocItems';

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
  ...props
}) {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [apiDocItems, setApiDocItems] = useState({ apiDocs: null, docs: null }); 
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
        return;
      }
      setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    if (items[0]) {
      const { apidocs, docs } = items[0];
      setApiDocItems({ apidocs, docs })
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [dropdownRef]);

  function SingleDropdownMenu() {
    return (
      <div className="dropdown__menu">
        <ul>
          {items.map((childItemProps, i) => {
            // const { apidocs, docs, logoClass } = childItemProps;
              return (
                <NavbarItem
                  // className={logoClass}
                  isDropdownItem
                  onClick={(e) => {
                    if (apidocs || docs) {
                      e.preventDefault(); 
                      setApiDocItems({ apidocs, docs });
                    }
                  }}
                  onKeyDown={(e) => {
                    if (i === items.length - 1 && e.key === 'Tab') {
                      e.preventDefault();
                      setShowDropdown(false);
                      const nextNavbarItem = dropdownRef.current.nextElementSibling;
                      if (nextNavbarItem) {
                        const targetItem =
                          nextNavbarItem instanceof HTMLAnchorElement
                            ? nextNavbarItem
                            : // Next item is another dropdown; focus on the inner
                              // anchor element instead so there's outline
                              nextNavbarItem.querySelector('a');
                        targetItem.focus();
                      }
                    }
                  }}
                  activeClassName="dropdown__link--active"
                  {...childItemProps}
                  key={i}
                />
              )
            }
            )}
        </ul>
      </div>
    )
  }

  function DualDropdownMenu() {
    return (
      <div className="dropdown__menu dual-layout">
        <ul className="dropdown__menu--product-list">
          {items.map((childItemProps, i) => {
            const { products, logoClass } = childItemProps;

              return (
                <NavbarItem
                  className={logoClass}
                  isDropdownItem
                  onClick={(e) => {
                    e.preventDefault(); 
                    setProductItems(products);
                  }}
                  onKeyDown={(e) => {
                    if (i === items.length - 1 && e.key === 'Tab') {
                      e.preventDefault();
                      setShowDropdown(false);
                      const nextNavbarItem = dropdownRef.current.nextElementSibling;
                      if (nextNavbarItem) {
                        const targetItem =
                          nextNavbarItem instanceof HTMLAnchorElement
                            ? nextNavbarItem
                            : // Next item is another dropdown; focus on the inner
                              // anchor element instead so there's outline
                              nextNavbarItem.querySelector('a');
                        targetItem.focus();
                      }
                    }
                  }}
                  onMouseEnter={() => setProductItems(products)}
                  activeClassName="dropdown__link--active"
                  {...childItemProps}
                  key={i}
                />
              )
            }
            )}
        </ul>
        <NavbarProductItems products={productItems} setApiDocItems={setApiDocItems} />
        <NavbarDocItems apiDocs={apiDocItems.apiDocs} docs={apiDocItems.docs} />
      </div>
    )
  }

  function NavbarProductItems({ products, setApiDocItems }) {
    console.log({products})

    return (
      <div className="navbar-product-list-container">
        <ul>
        {
          products.map(product => {
            const { label, apiDocs, docs, logoClass } = product 

            return (
              <NavbarNavLink
                className={clsx('dropdown__link', logoClass)}
                label={label}
                to={"#"}
                onClick={(e) => {
                  if (apiDocs || docs) {
                    e.preventDefault(); 
                    setApiDocItems({ apiDocs, docs })
                  }
                }}
                onMouseEnter={() => setApiDocItems({ apiDocs, docs })}
              />
            )
          })
        }
        </ul>
      </div>
    )
  }

  return (
    <div
      ref={dropdownRef}
      className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', {
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown,
      })}>
      <NavbarNavLink
        aria-haspopup="true"
        aria-expanded={showDropdown}
        role="button"
        href={props.to ? undefined : '#'}
        className={clsx('navbar__link', className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}>
        {props.children ?? props.label}
      </NavbarNavLink>
      <DualDropdownMenu />
      {/* {showDualNavLayout ? <DualDropdownMenu/> : <SingleDropdownMenu />} */}
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
  const {collapsed, toggleCollapsed, setCollapsed} = useCollapsible({
    initialState: () => !containsActive,
  });
  // Expand/collapse if any item active after a navigation
  useEffect(() => {
    if (containsActive) {
      setCollapsed(!containsActive);
    }
  }, [localPathname, containsActive, setCollapsed]);

  return (
    <li
      className={clsx('menu__list-item', {
        'menu__list-item--collapsed': collapsed,
      })}>
      <NavbarNavLink
        role="button"
        className={clsx(
          'menu__link menu__link--sublist menu__link--sublist-caret',
          className,
        )}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          toggleCollapsed();
        }}>
        {props.children ?? props.label}
      </NavbarNavLink>
      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        {items.map((childItemProps, i) => (
          <NavbarItem
            mobile
            isDropdownItem
            onClick={onClick}
            activeClassName="menu__link--active"
            {...childItemProps}
            key={i}
          />
        ))}
      </Collapsible>
    </li>
  );
}

export default function DropdownNavbarItem({mobile = false, ...props}) {
  const Comp = mobile ? DropdownNavbarItemMobile : DropdownNavbarItemDesktop;
  return <Comp {...props} />;
}