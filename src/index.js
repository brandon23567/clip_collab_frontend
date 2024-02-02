import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from './pages/landing_page/Landing';
import AfterSignupPage from './pages/page_after_signup/AfterSignupPage';
import SignupPage from './pages/signup_page/Signup';


const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
  	},
	{
		path: "/thank_you",
		element: <AfterSignupPage />,
  	},
	{
		path: "/signup",
		element: <SignupPage />,
  	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    	<RouterProvider router={router} />
  	</React.StrictMode>
);