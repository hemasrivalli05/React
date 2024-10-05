// import React from 'react'
// import Child from './Child'

// const Parent = () => {

//      return (
//     <>
//     <Child name= "hema"  age={10} />
//     </>
//   )
// }

// export default Parent

// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <>
//     <Child course="Full stack" fees={1000} />
//     </>
//   )
// }

// export default Parent

//?
// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//     let developer = "Hema"

//   return (
//     <>
//         <Child employee={developer} />
//     </>
//   )
// }

// export default 

//!
// import React , {useState} from 'react'
// import Child from './Child'

// const Parent = () => {

//     let [tech,setTech]= useState("core java")

//   return (
//     <>
//         <Child technology={tech} />
//     </>
//   )
// }

// export default Parent

//?
// import React, {useState} from 'react'
// import Child from "./Child"

// const Parent = () => {

//     let [profile,setProfile] = useState({
//         playername: "St",
//         nationality: "Indian",
//         jersy_no : 10,
//         photo : "https://wallpapers.com/images/featured/sachin-tendulkar-eisybb8oqr2hlw31.jpg"
//     })
//   return (
//     <>
//         <Child player={profile} />
//     </>
//   )
// }

// export default Parent

//!prop- children
// import React from 'react'
// import Child from "./Child"

// const Parent = () => {
//     return (
//         <>
//             <Child>
//                 <h1>working on prop children</h1>
//                 <p>paragraph -- element and content...not sending any datatypes , variables</p>
//                 i am content
//             </Child>
//         </>
//     )
// }

// export default Parent

//? props children ----? after receiving
// import React from 'react'
// import Child from "./Child"

// const Parent = () => {
//     return (
//         <>
//             <Child>
//                 <div>Parent</div>
//                 <section>i am section</section>
//                 <nav>i am nav tag</nav>
//             </Child>
//         </>
//     )
// }

// export default Parent

//? props children ----? while receiving
// import React from 'react'
// import Child from "./Child"


// const Parent = () => {
//     return (
//         <>
//             <Child>
//                 <button>sending btn as a children</button>
//             </Child>
//         </>
//     )
// }

// export default Parent

//!task
// import React, { useState } from 'react'
// import Child from './Child'

// const Parent = () => {

//     let [institute, setInstitute] = useState({
//         iname: "qspiders",
//         mode: "online",
//         fees: 10000
//     })
//     return (
//         <>
//             <Child information={institute}>
//                 <h3>providing technical courses .....</h3>
//                 <p>nearly 1000 students attending batches each day</p>
//             </Child>
//         </>
//     )
// }

// export default Parent

//!prop-types
//it is a library 
//install-->npm install prop-types
//import it
//?using "prop-type" we can specify datatype for particular prop
//! NOTE: if datatypes are not matched will get a "warning"
// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <>
//         <Child pname="mobile" cost="30000"/>
//     </>
//   )
// }

// export default Parent

//!default props
//? when parent is not actually sending data , but in receiver component we have to display some content . Here we can use "default props"
//! note: default props will work only if parent is not sending the data
// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//     return (
//         <>
//             <Child rating={3} />
//         </>
//     )
// }

// export default Parent

//!task2
import React, { useState } from 'react'
import MyProfile from './task/MyProfile'

const Parent = () => {

    let [institute, setInstitute] = useState({
        iname: "qspiders",
        mode: "online",
        // fees: "5000",
        fees: 5000,
        course: "FULL STACK",
        photo: "/public/images/Hema.jpg",
        rating: 4.3
    });
    return (
        <>
            <MyProfile information={institute} >
                <h4>OUR MANTRA IS QUALITY</h4>
                <p>Training to all those aspiring for successful IT career</p>
            </MyProfile>
        </>
    )
}

export default Parent