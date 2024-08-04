import React, { useState } from 'react';
import Sidebar from '../../Common/SideBar';
import Orders from '../../Common/meds';
import MedicineSchedule from './medicines';

const LandingScreen = () => {
    const [click, setClick] = useState(false);
    return (
        <>

            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className='btn btn-primary p-4' onClick={() => {
                            setClick(!click);
                        }}></button>
                        <a className="navbar-brand p-2" href="#">Welcome </a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {click ? <><div style={{ float: "inline-start" }}><Sidebar /></div> </> : <></>}
                <div style={{ display: "flex" }}>
                    <div className='w-45 p-4'>Medicines
                        <MedicineSchedule />
                    </div>
                    <div className='w-45 p-4'><div className='p-4'>Appointments</div>
                        <div className='p-4'>Orders
                            <Orders /></div></div>
                </div></div>

        </>
    );
};

export default LandingScreen;
