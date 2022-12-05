// Main menu section at top of the site on every page

import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext' 
import { CartItem } from '../models/ShoppingCartModel'

interface MainMenuSectionType {
  totalQuantity?: CartItem
}

const MainMenuSection: React.FC<MainMenuSectionType> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const { totalQuantity } = useShoppingCartContext() as ShoppingCartContextType

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="mainMenu container">

        {/* Logotype -----------------------------------------------------------------------------------------------------------------*/}
        <NavLink className="logo" to="/" end>Fixxo.</NavLink>

        {/* Text middle menu----------------------------------------------------------------------------------------------------------*/}
        <div className={`menuLinks ${ showMenu ? "d-grid": ""}`}>
            <NavLink className="menuLink" to="/" end>Home</NavLink>
            <NavLink className="menuLink" to="/categories" end>Categories</NavLink>
            <NavLink className="menuLink" to="/products" >Products</NavLink>
            <NavLink className="menuLink" to="/contacts" end>Contacts</NavLink>
            <NavLink className="menuLink" to="/manage" end>Manage</NavLink>
        </div>

        {/* Right round icons menu ---------------------------------------------------------------------------------------------------*/}
        <div className="menuIcons">
          <NavLink to="/search" end className="menuIcon">
            <i className="fa-regular fa-magnifying-glass"></i>
          </NavLink>

          <NavLink to="/compare" end className="menuIcon d-none d-md-flex">
            <i className="fa-regular fa-code-compare"></i>
          </NavLink>

          <NavLink to="/wishlist" end className="menuIcon d-none d-md-flex">
            <i className="fa-regular fa-heart"></i>
          </NavLink>

          <button className="menuIcon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme'>{totalQuantity}</span>
            <i className="fa-regular fa-bag-shopping"></i></button>

          {/* <NavLink to="/shoppingcart" end className="menuIcon">
            <i className="fa-regular fa-bag-shopping"></i>
          </NavLink> */}


        {/* Mobile toggle menu -------------------------------------------------------------------------------------------------------*/}
            <button onClick={toggleMenu} className="d-lg-none d-xl-none menuIcon btn-menuIcon">
              <i className="fa-regular fa-bars"></i>
            </button>
        </div>
    </nav>
  )
}

export default MainMenuSection



