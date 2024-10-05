// // // //component file
// // // // class based component

// // // import React,{Component} from "react"

// // // class App extends Component{
// // //     render(){
// // //         return <h1>Class Based Component</h1>
// // //     }
// // // }
// // // export default App

// // // // LHS(CHILD) INHERITES RHS (PARENT)
// // // // APP extends component

// // // 2. Functional based component
// // //render() is not required

// // import React from "react"

// // const App=() =>{
// //     return <h1>Functional Based Component</h1>
// // }

// // export default App


// import React from "react"

// const App = () => {
//     return (
//         <>
//             <h1>Working on JSX</h1>
//             <p>Multiple JSX element</p>
//         </>
//     );
// }
// export default App

//! Applying CSS in ReactJS

//? 1) Inline css

// import React from "react"

// const App = () => {

// let circle = {

// height: "200px",

// width: "200px",

// border: "2px solid red",

// borderRadius: "50%",

// backgroundColor: "yellow" I

// }

// return (

// <>

// <h1 style={{fontSize: "53px"}}>Applying Inline CSS</h1>

// <div style={circle}></div>

// <div style={{height:"200px", width: "500px", backgroundColor: "green"}}></div>

// </>

// )

// }

// export default App

//? 2) Global css
// import React from "react";

// const App=() => {
//     return (
//         <>
//         <section id="mainContainer">
//             <h1 className="head" > welcome to qspiders </h1>
//             <p className="para"> full stack course </p>
//             <h3> 5 months</h3>
//         </section>
//         </>
//     )
// }
// export default App

// 3) module css

// import React from "react"
// import Navbar from "./module/Navbar"

// const App = () => {
//     return (
//         <>
//             <Navbar/>
//         </>
//     )
// }
// export default App

//!  useState()
// import React, {useState} from "react";

// const App = () => {

//     let [developer , setDeveloper] = useState("Hema")//state variable
//     let student = "srivalli" // normal variable

//     let changeContent =() => {
//         //logic to update the state value
//         setDeveloper("Siva") 
//     }

//     return (
//         <>
//         <h1>State variable --{developer}</h1>
//         <h1>Normal variable --{student}</h1>
//         <button onClick ={changeContent}> change content</button> 
//         {/* if we direct pass set developer then will get error as to many rendering */}
//         </>
//     );
// }
// export default App

// import React from 'react'
// import SimpleCounter from './task/SimpleCounter'

// const App = () => {
//   return (
//     <>
//     <SimpleCounter/>
//     </>
//   )
// }

// export default 

//? Props
//!sending data from app.jsx

// import React from 'react'
// import Child from "./Child"
// const App = () => {
//   return (
//     <>
//     < Child student="Hema" sid={10}/>
//     </>
//   )
// }

// export default 

//?
// import React from 'react'
// import Child from "./Child"
// const App = () => {

//     let integers=[10,20,30]
//   return (
//     <>
//     <Child developer={["Hema","sri","valli"]} numberarray={integers}/>

//     </>
//   )
// }

// export  default App

//!how to sending object as the data 

// import React from 'react'
// import Child from './Child'

// const App = () => {

//     let animal= {
//         aname: "dog",
//         color: "black"
//     }

//   return (
//     <>
//     <Child employee = {{ename:"hema",sal:60000}} pet={animal}/>
//     </>
//   )
// }

// export default App

// //?
// import React from 'react'
// import Child from './Child'

// const App = () => {

//     // console.log(props);
//     return (
//         <>
//             <Child bool={true} />
//         </>
//     )
// }

// export default App

//!----------------
// import React from 'react'
// import Parent from './Parent'

// const App = () => {

//   return (
//     <>
//       <Parent />
//     </>
//     )
//   }

//   export default App

// import React from 'react'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <>
//       <Parent/>
//     </>
//   )
// }

// export default App

//?
// import React from 'react'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <>
//       <Parent/>
//     </>
//   )
// }

// export default App

//!
// import React from 'react'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <>
//       <Parent />
//     </>
//   )
// }

// export default App

//--------------------------------------------------------TASK 1-------------------------------------------------------------------
//!TASK 1: Data of Submission on or before "11/05/2024"

//?I will consider this task for your mock

//Create one component "MyProfile.jsx"

//inside this component take a normal variable "username" and store your name. Then display this name on UI inside "h3"

//inside this component take a state variable "course" withupdator function "setCourse". In state variable store initial value as "webtech". By taking the taking the "button" update initial value of state variable to "Reactjs" using "setCourse" updator function. Display course inside h3 tag

//In h1 tag give heading "My Id Card"

//take 2 paragraph tag, mention your degree and in second p tag year of passing

//between these 2 ptag i need one line gap (break tag)

//call MyProfile.jsx inside App.jsx

//?apply module css-->display it in the form of card

//!send the photo of code aswell as output by making it as a pdf.. Save pdf with urname_taskname.pdf (ram_myprofile.pdf) format


// import React from 'react'
// import MyProfile from './task/MyProfile'

// const App = () => {
//   return (
//     <>
//       <MyProfile />
//     </>
//   )
// }

// export default App
//! props children
// import React from 'react'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <>
//       < Parent />
//     </>
//   )
// }

// export default App

//! props children----destructuring prop child
// import React from 'react'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <>
//       < Parent />
//     </>
//   )
// }

// export default App

//!prop-types
// import React from 'react'
// import Parent from './Parent'
// const App = () => {
//   return (
//     <>
//     <Parent />
//     </>
//   )
// }

// export default App

//?default props
// import React from 'react'
// import Parent from './Parent'
// const App = () => {
//   return (
//     <>
//     <Parent />
//     </>
//   )
// }

// export default App

//!
// import React from 'react'
// import Product from './Product'

// const App = () => {
//   return (
//     <>
//       <Product />
//     </>
//   )
// }

// export default App

//! sending the data from "ProductContext.jsx" to "Cart.jsx" with the help of "Context Api"
//!context api
// import React from 'react'
// import ProductContext from './context/ProductContext'

// const App = () => {
//   return (
//     <>
//       <ProductContext/>
//     </>
//   )
// }

// export default App

//! simplecounter task --context api
// import React from 'react'
// import CounterContext from './context/CounterContext'

// const App = () => {
//   return (
//     <>
//       <CounterContext />
//     </>
//   )
// }

// export default App

//?HOC
// import React from 'react'
// import ComponentA from './hoc/ComponentA'
// import ComponentB from './hoc/ComponentB'

// const App = () => {
//   return (
//     <>
//       <ComponentA />
//       <ComponentB />
//     </>
//   )
// }

// export default App
//?
// import React from 'react'
// import ComponentA from './hoc/ComponentA'
// import ComponentB from './hoc/ComponentB'

// const App = () => {
//   return (
//     <>
//       <ComponentA />
//       <ComponentB />
//     </>
//   )
// }

// export default App

//!conditional rendering
// import React from 'react'
// import ConditionRender from './conditionalrendering/ConditionRender'

// const App = () => {
//   return (
//     <>
//       <ConditionRender />
//     </>
//   )
// }

// export default App
//!toggle
// import React from 'react'
// import ConditionRender from './conditionalrendering/ConditionRender'

// const App = () => {
//   return (
//     <>
//       <ConditionRender />
//     </>
//   )
// }

// export default App
//! theme change
// import React from 'react'
// import ChangeTheme from './task/ChangeTheme'

// const App = () => {
//   return (
//     <>
//       <ChangeTheme />
//     </>
//   )
// }

// export default App
//?
// import React from 'react'
// import Reference from './Reference'

// const App = () => {
//   return (
//     <>
//       <Reference />
//     </>
//   )
// }

// export default App
// import React from 'react'
// import VideoControls from './task/VideoControls'

// const App = () => {
//   return (
//     <>
//       <VideoControls />
//     </>
//   )
// }

// export default App
//! task2
// import React from 'react'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <>
//       <Parent />
//     </>
//   )
// }

// export default App

// //?forms
// import React from 'react'
// import Uncntrolled from './forms/Uncntrolled'

// const App = () => {
//   return (
//     <>
//       <Uncntrolled />
//     </>
//   )
// }

// export default App
// ?
//?forms
// import React from 'react'
// import Controlled from './forms/Controlled'

// const App = () => {
//   return (
//     <>
//       <Controlled />
//     </>
//   )
// }

// export default App
//?
// import React from 'react'
// import FreeTicket from './task/FreeTicket'

// const App = () => {
//   return (
//     <>
//      <FreeTicket />
//     </>
//   )
// }

// export default App
//!life cycle methods
// import React from 'react'
// import LifeCycleParent from './sideeffect/LifeCycleParent'

// const App = () => {
//   return (
//     <>
//       <LifeCycleParent />
//     </>
//   )
// }

// export default App

//! task3
// import React from 'react'
// import Registration from './task/Registration'

// const App = () => {
//   return (
//     <>
//       <Registration />
//     </>
//   )
// }

// export default App


// //? sideeffects
// import React from 'react'
// import UseEffectParent from './sideeffect/UseEffectParent'

// const App = () => {
//   return (
//     <>
//       <UseEffectParent />
//     </>
//   )
// }

// export default App

//! list and key - props rendering
//? List--> collection of items. [array]
//? rendering --> loading/ displaying content om ui
//? key- props --> special prop used to identify each element uniquely from others by passing different values to the "key"
//!why key-props?
//? to identify each element uniquely , to update each element from virtual-dom to real-dom correctly
// key = value [value should be different]

// import React, { useState } from 'react'

// const App = () => {
//   let [items, setItems] = useState(["virat", "dhoni", "virat","rohit", "jadeja" , "rohit"])

//   return (
//     <>
//       {items.map((val , ind) => {
//         // console.log(val)
//         return (

//           <ul key={ind}>
//             <li>{val}</li>
//           </ul>

//         )

//       })}
//     </>
//   )
// }

// export default App

//! how to fetch api?
//? 1) fetch() 2) axios

//! fetch()
//? it is a js function /method
//? we can fetch the data from the server by "api calls"
// sideEffect --> fetching the data from api(server)
//! fetch api --> https://fakestoreapi.com/products
//1st --> fetch returns a promise
//2nd --> after resolving promise "Response Obj"
// 3rd--> convert "Response Obj" into "json-obj"
//4th after converting "Response Obj" into "json-obj" again we will get promise, so resolve it

// import React, { useEffect, useState } from 'react'

// const App = () => {

//   let [item, setItem] = useState([])

//   //resolving promise using async and await
//   //? async-->function  await --> asynchrounous activities [promise]

//   let fetchApi = async () => {
//     let responseobj = await fetch("https://fakestoreapi.com/products");
//     console.log(responseobj); //Response Obj
//     let data = await responseobj.json()
//     console.log(data); // array 
//     setItem(data)

//   }


//   //managing the sideEffect inside useEffect()
//   //?[] ---> componentDidMount() --> "executes one time"
//   useEffect(() => {
//     try {
//       fetchApi()
//     } catch (e) {
//       console.log(e)
//     }
//   }, [])

//   return (
//     <>
//       <table border= "2px" style={{ textAlign: 'center' }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>TITLE</th>
//             <th>IMAGE</th>
//             <th>CATEGORY</th>
//             <th>PRICE</th>
//             <th>RATING</th>
//             <th>COUNT</th>
//           </tr>
//         </thead>
//         <tbody>
//           {item.map((val , index) => {
//             // console.log(val); //obj
//             return (
//               <tr key={val.id} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
//                 <td>{val.id}</td>
//                 <td>{val.title.slice(0,13)+'...'}</td>
//                 <td>
//                   <img src={val.image} alt="" height="50px" width="70px" />
//                 </td>
//                 <td>{val.category}</td>
//                 <td>Rs.{val.price}</td>
//                 <td>{val.rating.rate}/5</td>
//                 <td>{val.rating.count}</td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </>
//   )
// }

// export default App

//! Axios
//? it is js library--> "axios"
//? Axios we can communicate from browser to server by making the http request (post, get, put, delete)
//! install--? npm i axios
//! then import it 
//? Axios returns a "promise"
// sideEffect --> fetching the data from api(server)
//! api--> https://fakestoreapi.com/products
// 1st --> fetch the api with the help of axios we will get a "promise" we have to resolve the promise
//2nd --> after resolving the promise we will get an object
// import React from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'
// import { useState } from 'react'

// const App = () => {

//   let [product, setProduct] = useState([])

//   //reolve the promise ---> async and await
//   let getApi = async () => {
//     let { data } = await axios.get("https://fakestoreapi.com/products");
//     // console.log(data);
//     setProduct(data)
//   }

//   //? managing the sideEffect inside useEffect()
//   //[] ---> componentDidMount() --> "executes one time"
//   useEffect(() => {
//     try {
//       getApi()
//     } catch (e) {
//       console.log(e)
//     }

//   }, [])

//   return (
//     <>
//     <main>
//       <section className="product-grid">
//         {product.map((val) => {
//           console.log(val);//obj
//           return (
//             <article key={val.id} className="product-card">
//               <h1> SL.NO:{val.id} - TITLE: {val.title.slice(0,16)+"..."}</h1>
//               <div className="product-image">
//                 <img src={val.image} alt="product" height="200px" width="200px" />
//               </div>
//               <h3>CATEGORY: {val.category}</h3>
//               <h4>PRICE: Rs.{val.price}/-</h4>
//               <div>
//                 <span>RATING: {val.rating.rate}</span>
//                 <span>COUNT: {val.rating.count}</span>
//               </div>
//               <p>{val.description.slice(0,25)+"....."}</p>
//             </article>
//           )
//         })}
//       </section>
//       </main>
//     </>
//   )
// }

// export default App

//?fetch
// it is a js method

//? axios
// it is js library

// import React from 'react'
// import Sender from './errorboundaries/Sender'

// const App = () => {
//   return (
//     <>
//       <Sender/>
//     </>
//   )
// }

// export default App

//! TASK 4
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styles from './module/axios.module.css';

// const App = () => {
//   let [users, setUsers] = useState([]);

//   let getApi = async () => {
//     let { data } = await axios.get('https://api.github.com/users');
//     // console.log(data);
//     setUsers(data);
//   }

//   useEffect(() => {
//     try {
//       getApi()
//     } catch (error) {
//       console.error('Error', error);
//     }
//   }, []);

//   return (
//     <div>
//       <h1>GitHub Users</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Login</th>
//             <th>Avatar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.login}</td>
//               <td><img src={user.avatar_url} alt={user.login} width="50" height="50" /></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;

//!
// import React from 'react'
// import Child from './Child'

// const App = () => {
//   return (
//     <>
//       <h1>I am parent</h1>
//       <Child />
//     </>
//   )
// }

// export default App

//! portals
// import React from 'react'
// import Portal from './portals/Portal'

// const App = () => {
//   return (
//     <>
//       <h1>I am parent</h1>
//       <Portal />
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Portal from './portals/Portal'

// const App = () => {
//   return (
//     <>
//      <h1>Insert into root</h1>
//      <Portal/>
//     </>
//   )
// }

// export default App
//! portal task
// import React, { useState } from 'react'
// import Portal from './portals/Portal'

// const App = () => {

//   let [panel, setPanel] = useState(false)

//   let getPopup = () => {
//     setPanel(!panel)
//   }

//   return (
//     <>
//     <button onClick={getPopup}>Sign UP</button>
//     {panel ? <Portal />: <> </>}
//     </>
//   )
// }

// export default App

//!pure components
// import React from 'react'
// import PureParent from './purecomponents/PureParent'

// const App = () => {
//   return (
//     <>
//       <PureParent/>
//     </>
//   )
// }

// export default App

//!memo --> inbuild method "react"
//fbc
//? skip the unwanted rerendering in FBC
//* --> implements the purecomponent concept in fbc
//! note: memo will memize(store) entire component which is passed into memo along based on prop-value
//? memo will stored the changes in "browser cache"--caching process
//*question-->even after wrapping the components with memo , some components still going re-load??
//! ans--> heavy dates cannot be stored in browser cache
//? memo acts as HOC
//--> it is applicable only for
// import React from 'react'
// import PureParent from './purecomponents/PureParent'

// const App = () => {
//   return (
//     <>
//     <PureParent/>
//     </>
//   )
// }

// export default App

//!useMemo()
//hook -"react"
//? heavy function--> function which takes time to load
//!Note: useMemo() memoizes(stores) value returned or output of heavy function
//? Memoization --> caching the result of heavy function
//* syntax: let output_heavyfun = useMemo(heavyFunction, dependency_list)

// import React, { useMemo, useState } from 'react'

// const App = () => {

//   let [counter1, setCounter1] = useState(0)
//   let [counter2, setCounter2] = useState(100)

//   //heavy fun
//   let even = useMemo(() => {
//     let i = 0
//     while (i < 1000000000) {
//       i++;
//     }
//     //here loop continue till the condition becomes false
//     return counter1 % 2 === 0
//   },[counter1]);
//   return (
//     <>
//       <button onClick={() => setCounter1(counter1 + 1)}>Counter1-{counter1}</button>
//       {even? "EVEN" : "ODD"}
//       <button onClick={() => setCounter2(counter2 + 1)}>Counter2-{counter2}</button>
//     </>
//   )
// }

// export default App

//!useCallback()
//hook--"react"
//!NOTE:it will memoize the entire function
//* Synstax: let cachedFunction useCallback(function, dependency_list)

// import React from 'react'
// import MainCompo from './usecallback/MainCompo'

// const App = () => {
//   return (
//     <>
//       <MainCompo />
//     </>
//   )
// }

// export default App

//!Routing in React-- without making page reload based on url of the particular webpages navigate btw the webpages. (SPA)
//library--> "reaxt-router-dom"
//install ---> npm install react-router-dom@latest
//import and use

// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './routing/Home'
// import Menu from './routing/Menu'
// import Settings from './routing/Settings'
// import PageNotFound from './routing/PageNotFound'
// import Layout from './routing/Layout'

// const App = () => {
//   return (
//     <>
//       {/* it will connect the url browser ..*/}
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Layout />} >
//             <Route index element={<Home />} />
//             <Route path='/menu' element={<Menu />} />
//             <Route path='/settings' element={<Settings />} />
//             <Route path='*' element={<PageNotFound />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

//!nested rounting--> mentioning one route inside the another route
//?why?--> to maintain the Route hierarchy / to make the routing more organized and easy to manage

//the Route which covers all the remaining Route --> Parent Route
//all remaining Route which is inside the Parent Route --> Child Route / children
//!Problem --> Since we are sharing only the url through nested routing, ccz of that only url of particular webpage is changing but not the content(all the webpages we are getting content Parent Route Component)
//?Solution--> Shared Routing . Shared index (mention Outlet from react-router-dom


//! in built components in ''
//?1)
//routingcontain the path of a particulal webpage of element
//?4 Link --> Similar to anchor tag , We can navigate btw the webpages by clicking upon the options
//to--> similar to "href", it will holds the path of particular page to be visiyted after clicking upon specific option
//?5 NavLink --> Similar to anchor tag , We can navigate btw the webpages by clicking upon the options.Extra feature , it will add "class" attribute with the value "active"
//to--> similar to "href", it will holds the path of particular page to be visiyted after clicking upon specific option

//! note : DOM will read "Link" as "anchor tag" and "to" as "href" so if we want to apply css to link we have to target anchor tag 

//! object way routing --> object (equal to Route)
// import React from 'react'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Layout from './routing/Layout'
// import Home from './routing/Home'
// import Menu from './routing/Menu'
// import Settings from './routing/Settings'
// import PageNotFound from './routing/PageNotFound'

// let r = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true, //path:"/",
//         element: <Home />
//       },
//       {
//         path: "/menu",
//         element: <Menu />
//       },
//       {
//         path: "/settings",
//         element: <Settings />
//       },
//       {
//         path: "*",
//         element: <PageNotFound />
//       }
//     ]
//   }
// ])


// const App = () => {
//   return (
//     <>
//       <RouterProvider router={r}/>
//     </>
//   )
// }

// export default App

//! RouterProvider--> it will provide routing or paths to all mention components
//? router

//!task
// import React from 'react'
// import Greet from './task/Greet'

// const App = () => {
//   return (
//     <>
//       <Greet/>
//     </>
//   )
// }

// export default App

//?
// import React from 'react'
// import TodoList from './task/TodoList'

// const App = () => {
//   return (
//     <>
//       <TodoList />
//     </>
//   )
// }

// export default App

//! Routing task 
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './RoutingTask/Home';
import Companies from './RoutingTask/Companies';
import Events from './RoutingTask/Events';
import Courses from './RoutingTask/Courses';
import Placements from './RoutingTask/Placements';
import ErrorPage from './RoutingTask/ErrorPage';
import Layout from './RoutingTask/Layout';
import './RoutingTask/style.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="companies" element={<Companies />} />
          <Route path="events" element={<Events />} />
          <Route path="courses" element={<Courses />} />
          <Route path="placements" element={<Placements />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

