import React from 'react'
import "./AfterSignupPage.css"
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const AfterSignupPage = () => {
    return (
        <div className='main_after_outer_container'>
            <div className='container'>
                <div className='navbar_container'>
                    <Navbar />
                </div>

                <div className='content_container'>
                    <h2>Thank you for signing up</h2>
                    <p>
                        You will be notified once our platform is ready for use and you will be the first 
                        to use our brand new platform.
                    </p>
                    <button>
                        <Link to="/" className='actual_link_btn'>Go Back</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AfterSignupPage