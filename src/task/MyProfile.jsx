//! TASK 1
// import React, { useState } from "react"
// import style from "./myprofile.module.css"; // Import CSS module
// const MyProfile = () => {


//     let username = "Hema Srivalli" // normal 
//     let [course, setcourse] = useState("Webtech")//state variable

//     let changeContent = () => {
//         //logic to update the state value
//         setcourse("Reactjs")
//     }

//     return (
//         <>
//             <div className={style.profile}>
//                 <h1> My Id Card</h1>

//                 <h3>Normal variable -- {username}</h3>
//                 <h3>State variable -- {course}</h3>
//                 <button onClick={changeContent}> change course</button>

//                 {/* <h1> My Id Card</h1> */}
//                 <p>Degree -- CSE</p>
//                 {/* <br /> */}
//                 <p>YOP -- 2023</p>
//             </div>
//         </>
//     );
// }
// export default MyProfile

import React from 'react'
import PropTypes from 'prop-types';
import style from "./myprofile.module.css";

const MyProfile = (props) => {

    console.log(props);

    let { iname, mode, fees, course, photo, rating } = props.information;

    return (
        <div>
            <div className="title">My Profile</div>
            <main>
                <div>
                    <img src={photo} alt="hema" height="150" width="150" />
                </div>
                    <h1>institute: {iname}</h1>
                    <h3>mode: {mode}</h3>
                    <h3>fees: {fees}</h3>
                    <h3>course: {course}</h3>
                    <h3>duration: {props.duration}</h3>
                    <h3>rating: {props.rating}</h3>
                    {props.children}
            </main>
        </div> 
    );
}

export default MyProfile

MyProfile.defaultProps = {
    rating: 4.0,
    duration: "4 months"
};

MyProfile.propTypes = {
    iname: PropTypes.string,
    mode: PropTypes.string,
    fees: PropTypes.number,
    course: PropTypes.string,
    photo: PropTypes.string,
    rating: PropTypes.number,
    duration: PropTypes.string,
};
