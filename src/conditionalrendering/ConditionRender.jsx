//! 1) IF-ELSE WAY
// import React, { useState } from 'react'

// const ConditionRender = () => {
//     let [age, setAge] = useState(5)

//     if (age >= 18) {
//         return <h1>Eligible for voting</h1>
//     } else {
//         return <h1> not eligible</h1>
//     }
// }

// export default ConditionRender

//?Free Ticket
//passenger--> a) gender-> female  b)localiy-> karnataka 
// import React, { useState } from 'react'

// const ConditionRender = () => {

//     let [gender, setGender] = useState("female")
//     let [locality, setLocality] = useState("karnatka")

//     if (gender === "female") {
//         if (locality === "Andhra") {
//             return <h1> you are from Andhra , So free ticket will be available </h1>
//         } else {
//             return <h1>sorry, free ticket available for Andhra females only  </h1>

//         }

//     } else {
//         return <h1>no free ticket for male </h1>
//     }

// }

// export default ConditionRender

//!2 way
// import React, { useState } from 'react'

// const ConditionRender = () => {

//     let [mood, setMood] = useState("sad")
//   return (
//     <>
//         <h1>{mood === "happy" ? "😁😍 " : "😒😒"}</h1>
//     </>
//   )
// }

// export default ConditionRender

//! 3rad way
//like --if condition without else
// import React, { useState } from 'react'

// const ConditionRender = () => {

//     let [webtech, setWebtech]= useState(true)
//   return (
//     <>
//         <h1>{webtech===true && "Eligible for class"}</h1>
//     </>
//   )
// }

// export default ConditionRender

////////?Free Ticket------- using prompt not recommended
// passenger--> a) gender-> female  b)localiy-> karnataka 
// import React, { useState } from 'react'

// const ConditionRender = () => {

//     let gen = prompt("eneter your gender")
//     let loc = prompt("eneter your state")

//     let [gender, setGender] = useState(gen)
//     let [locality, setLocality] = useState(loc)

//     if (gender.toLowerCase() === "female") {
//         if (locality.toLowerCase() === "andhra") {
//             return <h1> you are from Andhra , So free ticket will be available </h1>
//         } else {
//             return <h1>sorry, free ticket available for Andhra females only  </h1>

//         }

//     } else {
//         return <h1>no free ticket for male </h1>
//     }

// }

// export default ConditionRender

//! toggling - follow and unfollow
import React, { useState } from 'react'

const ConditionRender = () => {

  let [follow, setFollow] = useState(false)

  let addfriend = () => {
    setFollow(!follow)
  }  

  return (
    <>
      <h1>{follow ? "Following" : "Not Following"}</h1>
      <button onClick={addfriend}>{follow ? "Unfollow" : "Follow"}</button>
    </>
  )
}

export default ConditionRender
// not operator(!)--->inverse answers  ----!false -->true
//follow--> false
//? 1st 