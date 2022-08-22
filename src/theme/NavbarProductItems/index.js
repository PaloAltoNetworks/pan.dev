import React from 'react'
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink'
import clsx from 'classnames';

function NavbarProductItems({ products, setApiDocItems, setProductIdx, productIdx }) {
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
            />
          )
        })
      }
      </ul>
    </div>
  )
}

export default NavbarProductItems