import React, { useState } from 'react'

const Form2 = () => {
    let [formValue, setFormValue] = useState({
        minLength: "",
        maxLength: "",
        rangeLength: "",
        minValue: "",
        maxValue: "",
        rangeValue: "",
    })
    let { minLength, maxLength, rangeLength, minValue, maxValue, rangeValue } = formValue

    let handleChange = (e) => {
        let { name, value } = e.target
        setFormValue({ ...formValue, [name]: value })
    }

    let [errors, setErrors] = useState({})

    let handleSubmit = (e) => {
        e.preventDefault()

        let validationErrors = {}

        //MinLength
        if (minLength == "") {
            validationErrors.minLength = "Min Length is required"
        }
        else if (minLength.length < 6) {
            validationErrors.minLength = "Min Length should be 6 characters"
        }

        //Max Length
        if (maxLength == "") {
            validationErrors.maxLength = "Max Length is required"
        }
        else if (maxLength.length > 6) {
            validationErrors.maxLength = "Max Length should be 6 characters"
        }

        //Range Length
        if (rangeLength == "") {
            validationErrors.rangeLength = "Range Length is required"
        }
        else if (rangeLength.length < 6 || rangeLength.length > 20) {
            validationErrors.rangeLength = "Range Length should be 6-20 characters"
        }

        //min value
        if (minValue == "") {
            validationErrors.minValue = "Min Value is required"
        }
        else if (minValue < 6) {
            validationErrors.minValue = "Min Value should be 6"
        }

        //max value
        if (maxValue == "") {
            validationErrors.maxValue = "Max Value is required"
        }
        else if (maxValue > 20) {
            validationErrors.maxValue = "Max Value should be 20"
        }

        //range value
        if (rangeValue == "") {
            validationErrors.rangeValue = "Range Value is required"
        }
        else if (rangeValue < 6 || rangeValue > 20) {
            validationErrors.rangeValue = "Range Value should be 6-20"
        }


        setErrors(validationErrors)
    }
    return (
        <>
            <form>
                <legend className='text-2xl font-bold text-red-800 border-b-[3.5px]'>Form Validation</legend>
                <section className='form-group p-[1.5px] my-3'>
                    <label>Min Length</label>
                    <div className='inp mt-2'>
                        <input type='text' placeholder='Min 6 characters' className='border bg-slate-50 p-2 w-full' name="minLength" value={minLength} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.minLength && <span>{errors.minLength}</span>}
                    </div>
                </section>

                <section className='form-group p-[1.5px] my-3'>
                    <label>Max Length</label>
                    <div className='inp mt-2'>
                        <input type='text' placeholder='Max 6 characters' className='border bg-slate-50 p-2 w-full' name="maxLength" value={maxLength} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.maxLength && <span>{errors.maxLength}</span>}
                    </div>
                </section>

                <section className='form-group p-[1.5px] my-3'>
                    <label>Range Length</label>
                    <div className='inp mt-2'>
                        <input type='text' placeholder='6-20 characters' className='border bg-slate-50 p-2 w-full' name="rangeLength" value={rangeLength} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.rangeLength && <span>{errors.rangeLength}</span>}
                    </div>
                </section>

                <section className='form-group p-[1.5px] my-3'>
                    <label>Min value</label>
                    <div className='inp mt-2'>
                        <input type='number' placeholder='Min value 6' className='border bg-slate-50 p-2 w-full' name="minValue" value={minValue} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.minValue && <span>{errors.minValue}</span>}
                    </div>
                </section>

                <section className='form-group p-[1.5px] my-3'>
                    <label>Max value</label>
                    <div className='inp mt-2'>
                        <input type='number' placeholder='Max value 20' className='border bg-slate-50 p-2 w-full' name="maxValue" value={maxValue} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.maxValue && <span>{errors.maxValue}</span>}
                    </div>
                </section>

                <section className='form-group p-[1.5px] my-3'>
                    <label>Range value</label>
                    <div className='inp mt-2'>
                        <input type='number' placeholder='Range 6-20' className='border bg-slate-50 p-2 w-full' name="rangeValue" value={rangeValue} onChange={handleChange} />
                    </div>
                    <div className='form-error text-red-600 text-sm'>
                        {errors.rangeValue && <span>{errors.rangeValue}</span>}
                    </div>
                </section>

                <section className='form-group'>
                    <button className='bg-red-800 text-white px-4 py-2 rounded-md' onClick={handleSubmit}>Submit</button>
                    <button className='bg-red-800 text-white px-6 py-2 rounded-md ms-2'>Reset</button>
                </section>
            </form>
        </>
    )
}

export default Form2