// Main menu section at top of the site on every page

import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)

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
        </div>

        {/* Right round icons menu ---------------------------------------------------------------------------------------------------*/}
        <div className="menuIcons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" quantity={undefined} hideOnMobile={undefined} />
            <MenuIcon hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare" quantity={undefined} />
            <MenuIcon hideOnMobile={true} quantity="1" link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon quantity="3" link="/shoppingcart" icon="fa-regular fa-bag-shopping" hideOnMobile={undefined} />

        {/* Mobile toggle menu -------------------------------------------------------------------------------------------------------*/}
            <button onClick={toggleMenu} className="d-lg-none d-xl-none menuIcon btn-menuIcon"><i className="fa-regular fa-bars"></i></button>
        </div>
    </nav>
  )
}

export default MainMenuSection