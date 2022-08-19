import React from 'react'
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink'
import clsx from 'classnames';

function NavbarProductItems({ products, setApiDocItems }) {
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

export default NavbarProductItems