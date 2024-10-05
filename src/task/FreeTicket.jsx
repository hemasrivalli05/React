import React, { useState } from 'react'

const FreeTicket = () => {

    let [traveller, setTraveller] = useState({
        pasgender: "",
        passtate: ""
    })

    let [message, setMessage] = useState("")

    let { passgender, passtate } = traveller;

    let handleInput = (event) => {
        let { name, value } = event.target
        setTraveller({ ...traveller, [name]: value });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(traveller);
        if (passgender.toLowerCase() === "female") {
            if (passtate.toLowerCase() === "karnataka") {
                setMessage("Congratulation! You have won a free ticket")
            } else {
                setMessage(`Sorry! You are not eligible for free ticket for ${passtate}`)
            }
        } else {
            setMessage("Sorry! You have not won a free ticket")
        }
    };

    return (
        <>
            <h1>FREE TICKET IN KARNATAKA</h1>
            <form onSubmit={handleSubmit}>
                <div value={passgender} onChange={handleInput}>
                    <label htmlFor="pgen">Gender:</label>
                    <input type="radio" name="passgender" id="pgen" value="male" />Male
                    <input type="radio" name="passgender" id="pgen" value="female" />Female
                    <input type="radio" name="passgender" id="pgen" value="other" />Other
                </div>
                <div>
                    <label htmlFor="pstate">State name:</label>
                    <input type="text" placeholder="enter your state name" id="pstate" name="passtate" value={passtate} onChange={handleInput} />
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </form>
            <h2>{message}</h2>
        </>
    );
}

export default FreeTicket