import React from 'react'
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink'
import clsx from 'classnames';

function NavbarProductItems({ products, setApiDocItems, setProductIdx, productIdx }) {
  if (!products.length) return null; 
  return (
    <div className="navbar-product-list-container">
      <ul>
      {
        products.map((product, i) => {
          const { label, apiDocs, docs, logoClass } = product 
          return (
            <NavbarNavLink
              className={clsx('dropdown__link', logoClass, { active: i === productIdx })}
              label={label}
              to={"#"}
              onMouseEnter={() => {
                setApiDocItems({ apiDocs, docs });
                setProductIdx(i);
              }}
              onClick={(e) => e.preventDefault()}
            />
          )
        })
      }
      </ul>
    </div>
  )
}

export default NavbarProductItems