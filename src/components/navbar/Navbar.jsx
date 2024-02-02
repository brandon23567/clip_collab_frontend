import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar_outer_container'>
            <div className='container'>
                <div className='logo_container'>
                    <h2>Clip Collab</h2>
                </div>

                <ul className='navbar'>
                    <li>
                        <Link to="" className="actual_link">Home</Link>
                    </li>

                    <li>
                        <Link to="" className="actual_link">Signup</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar