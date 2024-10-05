import React from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
    let navigate = useNavigate();

    return (
        <div className="courses">

            <div className="course-cards">
                <div className="course-card">
                    <h3>Java Full Stack</h3>
                    <p>Comprehensive training in Java-based full stack development.</p>
                </div>
                <div className="course-card">
                    <h3>Web Technology</h3>
                    <p>Understanding core web technologies and frameworks for modern web development.</p>
                </div>
                <div className="course-card">
                    <h3>MERN Stack</h3>
                    <p>Mastering MongoDB, Express.js, React, and Node.js in full stack applications.</p>
                </div>
                <div className="course-card">
                    <h3>Software Testing</h3>
                    <p>Learn essential software testing methodologies and tools to ensure quality and performance.</p>
                </div>
                <div className="course-card">
                    <h3>Core Java Selenium</h3>
                    <p>Master automation testing using Core Java and Selenium for web applications.</p>
                </div>
                <div className="course-card">
                    <h3>Python Full Stack</h3>
                    <p>Advanced Python programming with full stack development frameworks.</p>
                </div>

                <div className="course-card">
                    <h3>MEAN Stack</h3>
                    <p>Explore MongoDB, Express.js, Angular, and Node.js for full stack development.</p>
                </div>

            </div>

            <div className="navigation-buttons">
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>

        </div>
    );
};

export default Courses;
