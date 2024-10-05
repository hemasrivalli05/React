import React from 'react';

const DynamicNavbar = () => {
    // List of navigation items
    const navItems = ['Home', 'About', 'Contact', 'Profile', 'Settings', 'addedmore'];

    return (
        <nav>
            <ul>
                <li>
                    {navItems.map((item, index) => (
                        <h1 key={index} style={{ display: 'inline', marginRight: '10px' }}>
                            {item}
                        </h1>
                    ))}
                </li>
            </ul>
        </nav>
    );
};

export default DynamicNavbar;