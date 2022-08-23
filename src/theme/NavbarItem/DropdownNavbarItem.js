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
import NavbarProductItems from '../NavbarProductItems';

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
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
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

  function MegaDropdownMenu() {
    const [apiDocItems, setApiDocItems] = useState({}); 
    const [productItems, setProductItems] = useState([]);
    const [productGroupIdx, setProductGroupIdx] = useState(null);
    const [productIdx, setProductIdx] = useState(null);

    const resetMegaNav = () => {
      setApiDocItems({});
      setProductItems([]);
      setProductGroupIdx(null);
      setProductIdx(null);
    }

    const resetApiDocs = () => {
      setApiDocItems({});
      setProductIdx(null);
    }

    return (
      <div className="dropdown__menu mega" onMouseLeave={resetMegaNav}>
        <ul className="dropdown-product-group-list">
          {items.map((childItemProps, i) => {
            const { products, logoClass } = childItemProps;
              return (
                <NavbarItem
                  className={clsx(logoClass, { active: i === productGroupIdx })}
                  isDropdownItem
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
                  onClick={(e) => e.preventDefault()}
                  onMouseEnter={() => {
                    setProductItems(products);
                    setProductGroupIdx(i);
                    if (Object.values(apiDocItems).length > 0) {
                      resetApiDocs();
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
        <NavbarProductItems
          products={productItems} 
          setApiDocItems={setApiDocItems}
          setProductIdx={setProductIdx}
          productIdx={productIdx}
        />
        <NavbarDocItems apiDocs={apiDocItems.apiDocs} docs={apiDocItems.docs} />
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