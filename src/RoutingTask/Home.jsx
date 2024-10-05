import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Welcome to QSPIDERS App</h1>
                <p>Accelerate your career with top-notch training and placement opportunities.</p>
            </div>
            <div className="features">
                <div className="feature-cards">
                    <h2>Expert Instructors</h2>
                    <p>Learn from industry experts with hands-on experience.</p>
                </div>
                <div className="feature-cards">
                    <h2>Placement Assistance</h2>
                    <p>Get assistance and guidance for job placements.</p>
                </div>
                <div className="feature-cards">
                    <h2>Diverse Courses</h2>
                    <p>Choose from a variety of courses tailored to industry needs.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
