import React from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'
import "../css/NavBarStyles.css"

const Navbar = () => {
  return (
   
      <nav className='navbar'>
       
        <NavLink to="/"> 
          Logo
        </NavLink>
        <span className='navbar__links'>
        <NavLink to="/"> 
          Home
        </NavLink>
        <NavLink to={"/createPage"}>
           Blog
        </NavLink>
        </span>
       
      </nav>
  
  )
}

// Navbar.propTypes = {}

export default Navbar