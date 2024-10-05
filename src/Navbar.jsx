import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <aside>
                    <img src="" alt="" />
                </aside>
                <aside>
                    <ul>
                        <NavLink to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/viewall">
                            <li>VIEW-ALL</li>
                        </NavLink>
                    </ul>
                </aside>
            </nav>
        </>
    )
}

export default Navbar