//! at a time will display single employee info

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleEmployee = () => {

    let [emp, setEmp] = useState("")

    let { id } = useParams()
    console.log(id);

    useEffect(() => {
        document.title = `Information of ${emp.ename}`
    })

    let getApi = async () => {
        let {data} = await axios.get("http://localhost:5000/employee/" + id);
        // console.log(data);
        setEmp(data)
    }

    console.log(emp);

    //? [] -->componentDidMount() -->"only once"
    useEffect(() => {
        getApi()
    }, [])

    let navigate = useNavigate()

    return (
        <>
            <section>
                <h1>Information of {emp.ename}</h1>
                <h2>ID: {emp.id}</h2>
                <h2>email: {emp.email}</h2>
                <div>
                    <button onClick={()=> navigate("/")}>Home</button>
                    <button onClick={() => navigate(-1)}>Go-back</button>
                </div>
            </section>
        </>
    )
}

export default SingleEmployee

//! useParams() --> hook--> "react-router-dom"
//? we can get parameters (slug value) present in url by destructing the specific slug