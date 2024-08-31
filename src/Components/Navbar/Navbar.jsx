import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="heading">
                <h1>Sasank Bavirisetti</h1>
            </div>
            <div >
                <ul className="links">


                    <Link to='/about'><li>About</li></Link>
                    <Link to='/skills'><li>Skills</li></Link>
                    <Link to='/experience'><li>Experience</li></Link>
                    <Link to='/projects'><li>Projects</li></Link>
                    <Link to='/certifications'><li>Certifications</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>
            </div>
        </div>
    )
}
