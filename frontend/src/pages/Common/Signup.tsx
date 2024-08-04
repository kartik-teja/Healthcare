import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css'; // Import custom CSS
import Navbar from './NavBar';

const SignUp = () => {
    const [hoverDoctor, setHoverDoctor] = useState(false);
    const [hoverPatient, setHoverPatient] = useState(false);

    return (
        <>
            <Navbar />
            <div className={`overlay ${hoverDoctor || hoverPatient ? 'active' : ''}`}></div>
            <div className="container">
                <div className="row py-5 position-relative">
                    <div
                        className={`col-6 text-center ${hoverDoctor ? 'highlight' : ''}`}
                        onMouseEnter={() => setHoverDoctor(true)}
                        onMouseLeave={() => setHoverDoctor(false)}
                    >
                        {hoverDoctor ? (
                            <>
                                <form className='w-75 p-3 border rounded bg-light mx-auto'>
                                    <h4 className="mb-3">

                                        <img className="display-inline pr-4" src="./doctor/logo.png" height="50px"></img>Doctor Sign Up</h4>
                                    <div className="row mb-3">
                                        <label htmlFor="doctor-name" className="col-sm-4 col-form-label">Full Name</label>
                                        <div className="col-sm-8">
                                            <input id="doctor-name" type="text" className="form-control" placeholder='Full Name' />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="doctor-username" className="col-sm-4 col-form-label">Username</label>
                                        <div className="col-sm-8">
                                            <input id="doctor-username" type="text" className="form-control" placeholder='Username' />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="doctor-password" className="col-sm-4 col-form-label">Password</label>
                                        <div className="col-sm-8">
                                            <input id="doctor-password" type="password" className="form-control" placeholder='********' />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="doctor-phone" className="col-sm-4 col-form-label">Phone Number</label>
                                        <div className="col-sm-8">
                                            <input id="doctor-phone" type="text" className="form-control" placeholder='Phone Number' />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="doctor-email" className="col-sm-4 col-form-label">Email</label>
                                        <div className="col-sm-8">
                                            <input id="doctor-email" type="email" className="form-control" placeholder='Email' />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="offset-sm-4 col-m-8">
                                            <button type="submit" className="btn btn-info">Signup</button>
                                        </div>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className='h-auto'>
                                <img src="./doctor/logo.png" height="350px"></img>
                                <h1>Doctor Sign Up</h1></div>
                        )}
                    </div>
                    <div
                        className={`col-6 text-center ${hoverPatient ? 'highlight' : ''}`}
                        onMouseEnter={() => setHoverPatient(true)}
                        onMouseLeave={() => setHoverPatient(false)}
                    >
                        {hoverPatient ? (
                            <>
                                <form className='w-75 p-3 border rounded bg-light mx-auto'>
                                    <h4 className="mb-3">
                                        <img className="display-inline pr-4" src="./user/logo.png" height="50px"></img>
                                        Patient Sign Up</h4>
                                    <div className="row mb-3">
                                        <label htmlFor="patient-name" className="col-sm-4 col-form-label">Full Name</label>
                                        <div className="col-sm-8">
                                            <input id="patient-name" type="text" className="form-control" placeholder='Full Name' />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="patient-username" className="col-sm-4 col-form-label">Username</label>
                                        <div className="col-sm-8">
                                            <input id="patient-username" type="text" className="form-control" placeholder='Username' />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="patient-password" className="col-sm-4 col-form-label">Password</label>
                                        <div className="col-sm-8">
                                            <input id="patient-password" type="password" className="form-control" placeholder='********' />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="patient-phone" className="col-sm-4 col-form-label">Phone Number</label>
                                        <div className="col-sm-8">
                                            <input id="patient-phone" type="text" className="form-control" placeholder='Phone Number' />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="patient-email" className="col-sm-4 col-form-label">Email</label>
                                        <div className="col-sm-8">
                                            <input id="patient-email" type="email" className="form-control" placeholder='Email' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div>
                                            <button type="submit" className="btn btn-info">Signup</button>
                                        </div>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className='h-auto'>
                                <img src="./user/logo.png" height="100%"></img>
                                <h1>Patient Sign Up</h1></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
