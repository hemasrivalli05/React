import React, { useRef } from 'react'

const Uncontrolled = () => {

    let nameRef = useRef()
    let emailRef = useRef()
    console.log(nameRef)
    console.log(emailRef)

    //! when we pass a parameter to a function , that function if we pass it as a value for an event. In such case parameter will hold "SBE"
    //*event -> it will hold "SBE"
    let handleSubmit = (event) => {
        //logic to prevent default nature of the form "auto reloading"
        console.log(event);
        event.preventDefault(); //prevent the automatic reloading
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">USER NAME:</label>
                    <input type="text" id='uname' ref={nameRef}/>
                </div>
                <div>
                    <label htmlFor="uemail">USER EMAIL:</label>
                    <input type="email" id='uemail' ref={emailRef}/>
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </form>
        </>
    )
}

export default Uncontrolled

//! default nature of form
//? when we try to submit entire webpage is refreshing or reloading automatically
//problem--> data will be lost befor accessing

//! Synthetic Bsed Event (SBE)--> all the events related to the browser.
//?Ex: onClick() , onSubmit()