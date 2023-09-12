import React from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'
import "../css/NavBarStyles.css"

const Navbar = () => {
  return (
   
      <nav className='navbar'>
       
        <NavLink to="/" className={"logo"}> 
          Logo
        </NavLink>
        <span className={'navbar__links'}>
        <NavLink to="/" className={"links"}> 
          Home
        </NavLink>
        <NavLink to={"/createPage"} className={"links"}>
           Blog
        </NavLink>
        </span>
       
      </nav>
  
  )
}

// Navbar.propTypes = {}

export default Navbar