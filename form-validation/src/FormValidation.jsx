import React, { useState } from 'react'

const FormValidation = () => {

    let [formData, setFormdata] = useState({
        requiredField: "",
        email: "",
        password: "",
        confirmPassword: "",
        url: "",
        digits: "",
        number: "",
        alphanum: "",
        textarea: ""
    })

    let { requiredField, email, password, confirmPassword, url, digits, number, alphanum, textarea } = formData

    let handleChange = (e) => {
        let { name, value } = e.target
        setFormdata({ ...formData, [name]: value })
    }

    let [errors, setErrors] = useState({})

    let handleSubmit = (e) => {
        e.preventDefault()

        let validationErrors = {}

        //requiredField
        if (requiredField === "") {
            //objectname.keyname = "value"
            validationErrors.requiredField = "This field is required"
        }

        //email
        let regexEmail = /\S+@\S+\.\S+/
        if (email == "") {
            validationErrors.email = "Email is required"
        }
        else if (!regexEmail.test(email)) {
            validationErrors.email = "Invalid email address"
        }

        //password
        if (password == "") {
            validationErrors.password = "Password is required"
        }
        //confirmation password
        if (confirmPassword == "") {
            validationErrors.confirmPassword = "Confirm password is required"
        }
        else if (password != confirmPassword) {
            validationErrors.confirmPassword = "Password is not matching"
        }

        //url
        let regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
        if (url == "") {
            validationErrors.url = "Url is required"
        }
        else if (!regexUrl.test(url)) {
            validationErrors.url = "Invalid url"
        }

        //digits
        let regexDigits = /^[0-9]+$/
        if (digits == "") {
            validationErrors.digits = "Digits is required"
        }
        else if (!regexDigits.test(digits)) {
            validationErrors.digits = "Invalid digits"
        }

        //numbers
        let regexNumbers = /^-?\d+(?:\.\d+)?$/
        if (number == "") {
            validationErrors.number = "Numbers is required"
        }
        else if (!regexNumbers.test(number)) {
            validationErrors.number = "Invalid numbers"
        }

        //alphanumeric
        let regexAlphanumeric = /^[a-zA-Z0-9]+$/
        if (alphanum == "") {
            validationErrors.alphanum = "Alphanumeric is required"
        }
        else if (!regexAlphanumeric.test(alphanum)) {
            validationErrors.alphanum = "Invalid alphanumeric"
        }

        //textarea
        if (textarea == "") {
            validationErrors.textarea = "Textarea is required"
        }
        // else if (textarea.length < 10) {
        //     validationErrors.textarea = "Textarea should be at least 10 characters long"
        // }
        setErrors(validationErrors)

    }

    let handleReset = (e) => {
        e.preventDefault()
        setFormdata({
            requiredField: "",
            email: "",
            password: "",
            confirmPassword: "",
            url: "",
            digits: "",
            number: "",
            alphanum: "",
            textarea: ""
        })
    }

    return (
        <>
            <form className='w-1/3 ml-5'>
                <legend className='text-2xl font-bold text-red-800 border-b-[3.5px]'>Form Validation</legend>

                {/* required field */}
                <section className='form-group p-[1.5px] my-3'>
                    <label> Required Field </label>
                    <div className='inp mt-2'>
                        <input type="text" placeholder='required field' className="border bg-slate-50 p-2 w-full" name="requiredField" value={requiredField} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.requiredField && <span>{errors.requiredField}</span>}
                    </div>
                </section>

                {/* email*/}
                <section className='form-group p-[1.5px] my-3'>
                    <label>Email</label>
                    <div className='inp mt-2'>
                        <input type="text" placeholder='Enter email' className="border bg-slate-50 p-2 w-full" name="email" value={email} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                </section>

                {/* Password */}
                <section className='form-group p-[1.5px] my-3'>
                    <label>Password</label>
                    <div className='inp mt-2'>
                        <input type="password" placeholder='Enter password' className="border bg-slate-50 p-2 w-full" name="password" value={password} onChange={handleChange} />
                        <div className='form-error text-red-600 text-sm'>
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                    </div>

                    {/* confirmation password */}
                    <div className='inp mt-2'>
                        <input type="password" placeholder='Enter confirmation password' className="border bg-slate-50 p-2 w-full" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                    </div>
                </section>

                {/* url */}
                <section className='form-group p-[1.5px] my-3'>
                    <label>URL</label>
                    <div className='inp mt-2'>
                        <input type="text" placeholder='Enter url' className="border bg-slate-50 p-2 w-full" name="url" value={url} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.url && <span>{errors.url}</span>}
                    </div>
                </section>


                {/* Digits */}
                <section className='form-group p-[1.5px] my-3'>
                    <label>Digits</label>
                    <div className='inp mt-2'>
                        <input type="text" placeholder='Enter digits' className="border bg-slate-50 p-2 w-full" name="digits" value={digits} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.digits && <span>{errors.digits}</span>}
                    </div>
                </section>

                {/* Number */}
                <section className='form-group p-[1.5px] my-3'>
                    <label>Number</label>
                    <div className='inp mt-2'>
                        <input type="text" placeholder='Enter number' className="border bg-slate-50 p-2 w-full" name="number" value={number} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.number && <span>{errors.number}</span>}
                    </div>
                </section>

                {/* Alphanumeric */}
                <section className='form-group'>
                    <label>Alphanumeric</label>
                    <div className='inp mt-2'>
                        <input type="text" placeholder='Enter Alphanumeric' className="border bg-slate-50 p-2 w-full" name="alphanum" value={alphanum} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.alphanum && <span>{errors.alphanum}</span>}
                    </div>
                </section>

                {/* Textarea */}
                <section className='form-group p-[1.5px] my-3'>
                    <label>Textarea</label>
                    <div className='inp mt-2'>
                        <textarea rows={5} cols={28} className="border bg-slate-50 p-2 w-full" name="textarea" value={textarea} onChange={handleChange}></textarea>
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.textarea && <span>{errors.textarea}</span>}
                    </div>
                </section>

                <section className='form-group'>
                    <button className='bg-red-800 text-white px-4 py-2 rounded-md' onClick={handleSubmit}>Submit</button>
                    <button className='bg-red-800 text-white px-6 py-2 rounded-md ms-2' onClick={handleReset}>Reset</button>
                </section>
            </form>
        </>
    )
}

export default FormValidation
