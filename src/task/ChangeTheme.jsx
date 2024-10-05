// import React, { useState } from 'react'
// import { GiSundial } from "react-icons/gi";
// import { AiFillMoon } from "react-icons/ai";

// const ChangeTheme = () => {

//     let [theme, setTheme] = useState(false)

//     let changeTheme = () => {
//         setTheme(!theme)
//     }

//     //! ChangeBgColor is a component . "C" first letter is in capital
//     let ChangeBgColor = () => {
//         //target the body tag and provide className for body tag
//         if (theme) {
//             document.body.className = "dark"
//         } else {
//             document.body.className = "light"
//         }
//     };

//     return (
//         <>
//             <ChangeBgColor />
//             <h1>{theme ? "Dark Theme" : "Light Theme"}</h1>
//             <button onClick={changeTheme} className={theme? "light" : "dark"}>{theme ? <GiSundial /> : <AiFillMoon /> }</button>
//         </>
//     )
// }

// export default ChangeTheme

//! "react-icons"--> library related icons --> they kept all icons in the form of components
//? install --> npm add react-icons
//? import it

//!html
// <h1 class = "a"></h1>
// <p class = "a"></p>

//!task bulb image 
import React, { useState } from 'react'

const ChangeTheme = () => {

    let [bulb, setBulb] = useState(false);

    let changeTheme = () => {
        setBulb(!bulb);
    }

    return (
        <>
            <img src={bulb ? "/public/images/bulbon.jpg" : "/public/images/bulboff.png"} alt="Image" height={200} width={200} />
            <button onClick={changeTheme}>
                {bulb ? "Bulb OFF" : "Bulb ON"}
            </button>
        </>
    );
}

export default ChangeTheme