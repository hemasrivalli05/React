import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/"><li>HOME</li></NavLink>
        <NavLink to="/companies"><li>COMPANIES</li></NavLink>
        <NavLink to="/events"><li>EVENTS</li></NavLink>
        <NavLink to="/courses"><li>COURSES</li></NavLink>
        <NavLink to="/placements"><li>PLACEMENTS</li></NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
