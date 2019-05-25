import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="menu">
                <NavLink className="nav" to="/smurfs"><strong>View Residents</strong></NavLink>
                <NavLink className="nav" to="/smurf-form"><strong>Register New Citizen</strong></NavLink>
                <NavLink className="nav" to="/"><strong>Home</strong></NavLink>
            </div>  
        </div>

    )
}

export default NavBar;