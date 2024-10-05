import React from 'react'

const Displayusers = (props) => {
    console.log(props);
    let { firstname, lastname, age, city } = props
    return (
        <div className="user-card">
            <div className="user-details">
                <h2 className="user-name">{firstname} {lastname}</h2>
                <p className="user-age">Age: {age}</p>
                <p className="user-city">City: {city}</p>
            </div>
        </div>
    )
}

export default Displayusers