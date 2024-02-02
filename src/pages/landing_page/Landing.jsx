import React, { useState } from 'react'
import "./Landing.css"
import Navbar from '../../components/navbar/Navbar'
import axios from "axios"

const Landing = () => {

    const [userEmail, setUserEmail] = useState("");

    const addUserEmailToBackend = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("userEmail", userEmail)

        const url = "http://localhost:8000/api/authentication/signup_new_user/"
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        axios.post(url, formData, config).then((response) => {
            console.log(response)
            alert("New user has been added bro");
            window.location.href = "/thank_you";
        })
    }

    return (
        <div className='main_landing_page_outer_container'>
            <div className='container'>
                <div className='navbar_container'>
                    <Navbar />
                </div>

                <div className='content_container'>
                    <h1>Welcome to <span>CLIP COLLAB</span></h1>
                    <p>
                        The number one platform that connects you as a video editor to your 
                        ideal client so u can start getting paid what you are worth. We put our 
                        editors first, so you can be sure to get the best of the best clients to 
                        offer your service to
                    </p>

                    <div className='signup_user_cont6ainer'>
                        <form className='actual_form' onSubmit={addUserEmailToBackend}>
                            <div className='single_input'>
                                <input type='email' placeholder='Please enter your email' onChange={(e) => setUserEmail(e.target.value)} />
                            </div>

                            <div className='signup_user_btn_container'>
                                <button type='submit' className='signup_btn'>Join Waitlist</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing