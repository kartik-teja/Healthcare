import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Common/HomePage";
import Signin from "../pages/Common/Signin";
import SignUp from "../pages/Common/Signup";
import Dashboard from "../pages/Doctor/Home/Homepage";
import Pharma from "../pages/e-pharma/pharma";
import Services from "../pages/Common/Services";
import AboutUs from "../pages/Common/AboutUs";
import LandingScreen from "../pages/Patient/Home/Homepage";



const router = createBrowserRouter([
    { path: '/*', element: <Home /> },
    { path: '/signin', element: <Signin /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/services', element: <Services /> },
    { path: '/aboutus', element: <AboutUs /> },
    { path: '/doctor/dashboard', element: <Dashboard /> },
    { path: '/user/dashboard', element: <LandingScreen /> },
    { path: '/pharma', element: <Pharma /> }
]);

export default router;