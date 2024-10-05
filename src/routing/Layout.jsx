import React from 'react'
// import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            {/* <Header/>
            <h1>Home</h1> */}
            <Outlet />

        </>
    )
}

export default Layout