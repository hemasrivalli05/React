// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './Layout'
// import Home from './Home'
// import PageNotFound from './PageNotFound'
// import ViewAll from './ViewAll'
// import SingleEmployee from './SingleEmployee'
// import UpdateEmp from './UpdateEmp'


// const App = () => {
//   return (
//     <>
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<Layout />}>
//                     <Route index element ={<Home/>}/>
//                     <Route path='/viewall' element={<ViewAll />}/>
//                     <Route path='/singleemp/:id' element={<SingleEmployee />} />
//                     <Route path='/edit/:id' element={<UpdateEmp />} />
//                     <Route path='*' element={<PageNotFound />}/>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     </>
//   )
// }

// export default App

// //!slug --> extra extension given to path, that will change for individual detail

import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import PageNotFound from './PageNotFound'
import ViewAll from './ViewAll'
import SingleEmployee from './SingleEmployee'
import UpdateEmp from './UpdateEmp'
import { Toaster } from 'react-hot-toast'

let routing = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/viewall',
        element: <ViewAll />,
      },
      {
        path: '/singleemp/:id',
        element: <SingleEmployee />,
      },
      {
        path: '/edit/:id',
        element: <UpdateEmp />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <div><Toaster position="top-right" reverseOrder={false} /></div>
      <RouterProvider router={routing} />
    </>
  )
}

export default App