import React from 'react';
import { NavLink } from 'react-router-dom';

const Events = () => {
    return (
        <>
            <div className="events">
                <h2>Events Page</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur reprehenderit ad eveniet qui impedit unde nesciunt vel excepturi. Maxime nesciunt et minima eius pariatur ea atque itaque obcaecati quos.</p>
                <div className="navigation-buttons">
                    <NavLink to="/companies"><button>Go to Companies</button></NavLink>
                    <NavLink to="/courses"><button>Go to Courses</button></NavLink>
                </div>
            </div></>
    );
};

export default Events;
