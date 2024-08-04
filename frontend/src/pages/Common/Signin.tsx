
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signin.css';
import Navbar from './NavBar';

const Signin = () => {
    const [hoverDoctor, setHoverDoctor] = useState(false);
    const [hoverPatient, setHoverPatient] = useState(false);
    const [doctorUsername, setDoctorUsername] = useState('');
    const [patientUsername, setPatientUsername] = useState('');

    const navigate = useNavigate();

    const handleDoctorSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('username', doctorUsername);
        localStorage.setItem('userType', 'doctor');
        alert(`Doctor ${doctorUsername} logged in`);
        navigate('/dashboard');
    };

    const handlePatientSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('username', patientUsername);
        localStorage.setItem('userType', 'patient');
        alert(`Patient ${patientUsername} logged in`);
        navigate('/dashboard');
    };

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
                                <form className='w-75 p-3 border rounded bg-light mx-auto' onSubmit={handleDoctorSubmit}>
                                    <img className="mt-3" src="/public/doctor/logo.png" alt="Doctor Logo" height="100px" />
                                    <h4>Doctor Login</h4>
                                    <div className="mb-3">
                                        <label htmlFor="doctor-username" className="form-label">Username</label>
                                        <input
                                            id="doctor-username"
                                            type="text"
                                            className="form-control"
                                            placeholder='Username'
                                            value={doctorUsername}
                                            onChange={(e) => setDoctorUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="doctor-password" className="form-label">Password</label>
                                        <input id="doctor-password" type="password" className="form-control" placeholder='********' />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </>
                        ) : (
                            <div className='h-auto'>
                                <img src="/public/doctor/logo.png" alt="Doctor Logo" height="90%" />
                                <h1>Doctor Login</h1>
                            </div>
                        )}
                    </div>
                    <div
                        className={`col-6 text-center ${hoverPatient ? 'highlight' : ''}`}
                        onMouseEnter={() => setHoverPatient(true)}
                        onMouseLeave={() => setHoverPatient(false)}
                    >
                        {hoverPatient ? (
                            <>
                                <form className='w-75 p-3 border rounded bg-light mx-auto' onSubmit={handlePatientSubmit}>
                                    <img className="mt-3 display-inline" src="/public/user/logo.png" alt="Patient Logo" height="100px" />
                                    <h4 className='display-inline'>Patient Login</h4>
                                    <div className="mb-3">
                                        <label htmlFor="patient-username" className="form-label">Username</label>
                                        <input
                                            id="patient-username"
                                            type="text"
                                            className="form-control"
                                            placeholder='Username'
                                            value={patientUsername}
                                            onChange={(e) => setPatientUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="patient-password" className="form-label">Password</label>
                                        <input id="patient-password" type="password" className="form-control" placeholder='********' />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </>
                        ) : (
                            <div className='h-auto'>
                                <img src="/public/user/logo.png" alt="Patient Logo" height="90%" />
                                <h1>Patient Login</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;
