import React from 'react';
import Navbar from './NavBar';

const AboutUs = () => {
    return (
        <><Navbar /><div className="container py-5">
            <h1 className="display-4 text-center mb-4">About Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src="hospital-image.jpg" alt="Hospital Image" className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <p className="lead">
                        Welcome to e-Hospital, your trusted online healthcare partner. Our mission is to provide
                        quality medical care to our patients through innovative technology and compassionate
                        service.
                    </p>
                    <p>
                        Our team of experienced healthcare professionals is dedicated to delivering personalized
                        care to each patient. We strive to create a comfortable and convenient experience for
                        our patients, from online consultations to in-person visits.
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <h2 className="h5">Our Vision</h2>
                    <p>
                        To be the leading e-Hospital in the region, providing accessible and affordable
                        healthcare to all.
                    </p>
                </div>
                <div className="col-md-4">
                    <h2 className="h5">Our Mission</h2>
                    <p>
                        To deliver high-quality patient care through innovative technology, compassionate
                        service, and continuous improvement.
                    </p>
                </div>
                <div className="col-md-4">
                    <h2 className="h5">Our Values</h2>
                    <p>
                        Patient-centered care, integrity, respect, empathy, and teamwork.
                    </p>
                </div>
            </div>
        </div></>
    );
};

export default AboutUs;