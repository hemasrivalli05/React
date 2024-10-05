// import React from 'react'
// // import ReactDOM from 'react-dom'//imrd
// import { createPortal } from 'react-dom'

// const Portal = () => {
//   return createPortal("inserting string" , document.getElementById("portal"))
// }

// export default Portal

//! createPortal()--> 'react-dom'
//? it will connect the current component and html file by targetting the newly created element

//!createPortal(content,container)
//? content --> number, string , JSX, component
//? container--> document.getElementById("portal")

// import React from 'react'
// import ReactDOM from 'react-dom'

// const Portal = () => {
//   return ReactDOM.createPortal(<h1>Inserting into portal</h1> , document.getElementById("portal"))
  
// }

// export default Portal

//*TASK--> rendering componentbas the content
import React from 'react'
import { createPortal } from 'react-dom'
// import Style from '../task/portalTask.css'

const Portal = () => {

    //! *******component*******
    let PopUp = () => {
        return (
            <>
                {/* <style>
                    h1{
                        // color:blue;
                        style.backgroundColor: red;
                    }
                </style> */}
                <section className="popup">
                    <aside>
                        <h1>WELCOME TO SIGNUP PAGE</h1>
                    </aside>
                    <aside>
                        <div><input type="text" placeholder='Enter ur name'/></div>
                        <div><input type="password" placeholder='Enter ur pswd' /></div>
                    </aside>
                    <aside>
                        <button>SUBMIT</button>
                    </aside>
                </section>
            </>
        )
    };
    //! *******component********

  return createPortal(<PopUp/>, document.getElementById("portal"));
}

export default Portal

