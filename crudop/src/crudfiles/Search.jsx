import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = (props) => {
    console.log(props);
    let {handleSearch , placeholder} = props

  return (
    <div className="searchBlock">
        <input type="text" placeholder= {placeholder} onInput={(e)=>handleSearch(e.target.value)}/>
        <IoSearch/>
    </div>
  )
}

export default Search