import React from 'react'
import Header from './Header'
// import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Header/>
        <h1>Home</h1>
        {/* <Outlet/> */}
    </>
  )
}

export default Home

//! Shared Routing --> along with url , content of Parent Route component is also be shared with Child Route Components
//? NOte- <Outlet/> always should be mentioned in Parent Route Compo
//!Problem-->Every webpage the content of the Parent Route Component is repeating
//solution-->Index Props / Index Routing

//!Index Props /Index Routing
//1) Create one new component, Layout.jsx (Supportive component for Home.jsx)
//2)Seperate the content [<Header /> , <h1>Home</h1>]and <Outlet/> among layout.jsx and Home.jsx
//3)way 1: If we mention conetent[ <Header /> ,<h1>Home</h1> ] in Layout.jsx then keep the <Outlet/> in Home.jsx ******** OR******** way 2: If we mention conetent[ <Header /> ,<h1>Home</h1> ] in Home.jsx then keep the <Outlet/> in Layout.jsx
//* NOte- <Outlet/> always should be mentioned in Parent Route Compo
//?4)once we separate content and <Outlet/>, the component which will have <Outlet/> make it as a "parent route component". The component which will hold the "content" make it as immediate "Child Route compo".then give the same path . i.e "/" for both "parent  route compo" and "child route compo" in App.js
