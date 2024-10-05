import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'


const UpdateEmp = () => {

    let [employee, setEmployee] = useState({
        ename: "",//name of employee
        email: ""
    })

    let { ename, email } = employee

    let navigate = useNavigate()

    //!changing the title
    useEffect(() => {
        document.title = "UPDATING EMPLOYEE PAGE"
    })

    //!fetching the data from the database and displaying it on input field
    //acsessing parameters , acessing slug value by destructuring
    let { id } = useParams()
    console.log(id);

    //?resolve promise ---async and wait
    let getData = async () => {
        let {data} = await  axios.get("http://localhost:5000/employee/" + id);
        console.log(data);
        setEmployee(data)
    }
    useEffect(() => {
        try {
            getData()
        } catch (e) {
            console.log(e);
        }
    },[])

    //!fetching the data from the database and displaying it on input field

    let handleInput = (e) => {
        // console.log(e);
        let { name, value } = e.target
        setEmployee({ ...employee, [name]: value })//wrap in []
    }

    //e-SBE
    let handleSubmit = (e) => {
        e.preventDefault();
        try {
            let payload = { ename, email }
            axios.put("http://localhost:5000/employee/" + id, payload);
            navigate("/viewall");
        } catch (e) {
            console.log(e);
        } finally {
            setEmployee({ ename: "", email: "" })
        }

    }

    return (
        <>
            <section>
                <h1>WELCOME TO UPDATE PAGE</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder="enter emplyee's name" value={ename} name='ename' onChange={handleInput} required />
                    </div>
                    <div>
                        <input type="email" placeholder='enter employes email' value={email} name='email' onChange={handleInput} required />
                    </div>
                    <div>
                        <button>EDIT EMPLOYEE</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default UpdateEmp;