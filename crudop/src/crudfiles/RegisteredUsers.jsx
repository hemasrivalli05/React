import React from 'react'
import { useState, useEffect } from "react"
import Search from "./Search"
// import axios from '../axios'
import axios from 'axios'
import DisplayRegisteredusers from './DisplayRegisteredusers'

const RegisteredUsers = () => {
    
        let [state, setState] = useState([])
        let [searchItem, setSearchItem] = useState("")

    let handleSearch = (term) => {
        setSearchItem(term)
    }

    // console.log("searchterms", searchItem);

    let fetchusers = async () => {

        let { data } = await axios.get("http://localhost:5000/registerusers")
        console.log(data);
        setState(data)
    }
    useEffect(() => {
        fetchusers();
    }, []);

    let filteredUsers = state.filter(value => {
        if (searchItem == "") {
            return value
        }
        else if (value.email.toLowerCase().includes(searchItem.toLowerCase())) {
            return value
        }
    }).map((item) => <DisplayRegisteredusers key={item.id} {...item} />)

    return (
        <div>
            <Search handleSearch={handleSearch} placeholder="Search with email"/>
            {
                state == null ? "loading.." : filteredUsers
            }
        </div>
    )
    
}

export default RegisteredUsers