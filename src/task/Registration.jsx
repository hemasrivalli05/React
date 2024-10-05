import React, { useState } from 'react';
import styles from '../module/registration.module.css';


const Registration = () => {
    let [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        hobby: '',
        experience: '',
        yearOfPassing: '',
    });

    let handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({...formData,[name]: value });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>

            <div className={styles.formGroup}>
                <label htmlFor='fname'>First Name: </label>
                <input id='fname' type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor='lname'> Last Name: </label>
                <input id='lname' type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor='email'> Email: </label>
                <input id='email' type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor='pswd'> Password: </label>
                <input id='pswd' type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>

            <div className={styles.formGroup}>
                <label > Hobby: </label>
                <select name="hobby" value={formData.hobby} onChange={handleChange} required>
                    <option value="">Select a hobby</option>
                    <option value="Coding">Coding</option>
                    <option value="Reading">Reading</option>
                    <option value="Writing">Writing</option>
                    <option value="Dancing">Dancing</option>
                    <option value="Singing">Singing</option>
                    <option value="Listening to Music">Listening to Music</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label > Experience: </label>
                <select name="experience" value={formData.experience} onChange={handleChange} required >
                    <option value="">Select experience level</option>
                    <option value="Fresher">Fresher</option>
                    <option value="Experienced">Experienced</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label>Year of Passing:</label>
                <select name="yearOfPassing" value={formData.yearOfPassing} onChange={handleChange} required>
                    <option value="">Select year of passing</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Registration;