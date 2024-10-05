import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav>
        <ul>
            <NavLink to="/"><li>HOME</li></NavLink>
            <NavLink to="/settings"><li>SETTING</li></NavLink>
            <NavLink to="/menu"><li>MENU</li></NavLink>
        </ul>
    </nav>
    </>
  )
}

export default Header
//! note : DOM will read "Link" as "anchor tag" and "to" as "href" so if we want to apply css to link we have to target anchor tag 