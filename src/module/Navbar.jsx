import React from "react"
import Style from "./nav.module.css"
const Navbar = () => {
    return (
        <>
            <nav>
                <nav id={Style.navContainer}></nav>
                <ul className={Style.listContainer}>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </>

    )
}
export default Navbar
