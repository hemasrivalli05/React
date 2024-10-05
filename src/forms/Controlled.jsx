// //! storing the data in different state variable
// //? NOTE: when we take different statevariable, then the function passed into onchange() should also be "different"
// import React, { useState } from 'react'

// const Controlled = () => {

//     let [username, setUsername]=useState("")//1st state variable stores username
//     //*event -> it will hold "SBE"
//     let handleName = (event) => {
//         //logic --> access the vale that we are typing then pass and store inside the static variable
//     // console.log(event)
//     // console.log(event.target.value)
//     setUsername(event.target.value)
//     }

//     let [useremail , setUseremail]= useState("")
//     let handleEmail = (event) => {
//         setUseremail(event.target.value)
//         }

//     //! when we pass a parameter to a function , that function if we pass it as a value for an event. In such case parameter will hold "SBE"
//     //*e -> it will hold "SBE"
//     let handleSubmit = (e) => {
//         //logic to prevent default nature of the form "auto reloading"
//         // console.log(e);
//         e.preventDefault(); //prevent the automatic reloading
//         console.log(username);
//         console.log(useremail);
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="uname">USER NAME:</label>
//                     <input type="text" id='uname' value={username} onChange={handleName}/>
//                 </div>
//                 <div>
//                     <label htmlFor="uemail">USER EMAIL:</label>
//                     <input type="email" id='uemail' value={useremail} onChange={handleEmail} />
//                 </div>
//                 <div>
//                     <button>SUBMIT</button>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default Controlled

// //! default nature of form
// //? when we try to submit entire webpage is refreshing or reloading automatically
// //problem--> data will be lost befor accessing

// //! Synthetic Bsed Event (SBE)--> all the events related to the browser.
// //?Ex: onClick() , onSubmit()


//!storing the data of different inputfield in "same state variable"
//? NOTE: when we take different statevariable, then the function passed into onchange() should also be "different"

import React, { useState } from 'react'

const Controlled = () => {

    //to store multiple input data in same state variable initial value should be a obj. Inside obj declare separate key-value pair for each input field
    let [info, setInfo] = useState({
        username: "",
        useremail: "",
        gender: "",//radio button
        degree: "" //dropdown
    })

    //!checkbox -->for skill
    let [skill, setSkill] = useState([])//initially empty array
    
    let { username, useremail, gender, degree } = info;

    let handleInput = (e) => {
        //! e.target.value ->this is wrong because initial is in object
        let { name, value } = e.target; // destructuring 2 properties present under target
        //! name --> acts as a variable , it holds "keyname" as the data
        //! value --> acts as a variable , it holds "value of particular key" as the data
        setInfo({...info,[name]: value }) //? here we are passing the value of name as a key and value as a value

        //?NOTE: to pass the "data present inside one variable" as a key, then wrap variable inside []
    };
    let handleCheckbox = (e) =>{
        setSkill([...skill,e.target.value])
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(info);
        console.log(skill);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="uname">USER NAME:</label>
                    <input type="text" id="uname" value={username} onChange={handleInput} name="username" />
                </div>
                <div>
                    <label htmlFor="uemail">USER EMAIL:</label>
                    <input type="email" id="uemail" value={useremail} onChange={handleInput} name="useremail" />
                </div>
                <div value={gender} onChange={handleInput}>
                    <label htmlFor="">Gender:</label>
                    <input type="radio" name='gender' value="Male" />MALE
                    <input type="radio" name='gender' value="Female" />FEMALE
                    <input type="radio" name='gender' value="Others" />OTHERS
                </div>
                <div>
                    <label htmlFor="deg">DEGREE:</label>
                    <select name="degree" id="deg" value = {degree} onChange={handleInput}>
                        <option value="B.E">B.E</option>
                        <option value="MBA">MBA</option>
                        <option value="BSC">BSC</option>
                        <option value="BCA">BCA</option>
                    </select>
                </div>
                <div value= {skill} onChange={handleCheckbox}>
                    <label htmlFor="skills">SKILLS </label>
                    <input type="checkbox" name="skills" id="skills" value="HTML"/>HTML
                    <input type="checkbox" name="skills" id="skills" value="CSS"/>CSS
                    <input type="checkbox" name="skills" id="skills" value="JS"/>JS
                    <input type="checkbox" name="skills" id="skills" value="QA"/>QA 
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </form>
        </>
    )
}

export default Controlled

//!note:  checkbox, radio btns , drop down --> multiple ip options
//!when we provide multiple input options for the user , then "value attr" and "onChange()" should be given to immediate parent










// import React, { useState } from 'react'

// const Controlled = () => {

//     let [state, setState] = useState({
//         sname : "lakshmi"
//     })

//     let changename = () => {
//         setState({sname : "lakshmi" })

//     }
//   return (
//     <>
//         <button onClick={changename}>change</button>
//     </>
//   )
// }

// export default Controlled