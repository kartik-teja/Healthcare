import React, { useState } from 'react';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg display-inline navbar-dark bg-dark sidebar h-100 w-10">
            <div className="display-block" id="sidebarCollapse">
                <ul className="navbar-nav flex-column">
                    <li className="nav-item">
                        <a href="/Dashboard" className="nav-link">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a href="/patient/appointments" className="nav-link">Appointments</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Dashboard" className="nav-link">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a href="/pharma" className="nav-link">Pharma</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;