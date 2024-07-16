import React from 'react'
import { NavLink } from 'react-router-dom'
const NavItem = ({name, icon, link}) => {
  return (
    <NavLink className='nav-item' to={link}> {icon} <span className='nav-item-text'>{name}</span></NavLink>
  )
}

export default NavItem
