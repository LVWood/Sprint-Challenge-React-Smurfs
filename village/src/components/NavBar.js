import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="menu">
                <NavLink to="/smurfs">View Residents</NavLink>
                <NavLink to="/smurf-form">Register New Citizen</NavLink>
                <NavLink to="/">Home</NavLink>
            </div>  
    )
}

export default NavBar;