import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Placements = () => {
    let navigate = useNavigate();

    return (
        <div className="placements-page">
            <h2>Placements Page</h2>
            <div className="testimonials">
                <div className="testimonial">
                    <p>QSPIDERS helped me get placed in a top MNC. The training was comprehensive and the support was excellent!</p>
                    <h4>- John Doe</h4>
                </div>
                <div className="testimonial">
                    <p>The practical sessions and real-world projects prepared me well for the job market. I highly recommend QSPIDERS!</p>
                    <h4>- Jane Smith</h4>
                </div>
                <div className="testimonial">
                    <p>Thanks to QSPIDERS, I am now working as a full-stack developer in a reputed company.</p>
                    <h4>- Alice Johnson</h4>
                </div>
            </div>

            <div className="navigation-buttons">
                <button onClick={() => navigate(-1)}>Go Back</button>
                <NavLink to="/events"><button>Go to Events</button></NavLink>
                <NavLink to="/courses"><button>Go to Courses</button></NavLink>
            </div>
        </div>
    );
};

export default Placements;
