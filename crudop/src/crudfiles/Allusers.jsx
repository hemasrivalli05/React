import { useState, useEffect } from "react"
import Search from "./Search"
import axios from '../axios'
import Displayusers from "./Displayusers"

const Allusers = () => {
    let [state, setState] = useState([])
    let [searchItem, setSearchItem] = useState("")

    let handleSearch = (term) => {
        setSearchItem(term)
    }

    console.log("searchterms", searchItem);

    let fetchusers = async () => {
        // let response = await axios.get("/candidates") //json server url
        // console.log(response);
        // let {data} = response

        let { data } = await axios.get("/candidate")
        console.log(data);
        setState(data)
    }
    useEffect(() => {
        fetchusers()
    }, []);

    let filteredUsers = state.filter(value => {
        if (searchItem == "") {
            return value
        }
        else if (value.firstname.toLowerCase().includes(searchItem.toLowerCase())) {
            return value
        }
    }).map((item) => <Displayusers key={item.id} {...item} />)

    return (
        <div>
            <Search handleSearch={handleSearch} placeholder="Search with firstname" />
            {
                state == null ? "loading.." : filteredUsers
            }
        </div>
    )
}

export default Allusers