import React from 'react'

const DisplayRegisteredusers = (props) => {
    console.log(props);
    let { email, profpic } = props
    return (
        <div className="user-card">
            <div className="user-info">
                <img src={profpic} alt="Profile" className="profile-pic" />
                <h2 className="user-email">{email}</h2>
            </div>
        </div>
    )
}

export default DisplayRegisteredusers