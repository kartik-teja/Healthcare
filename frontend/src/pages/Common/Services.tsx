import React from 'react';
import Navbar from './NavBar';

const Services = () => {
    return (
        <><Navbar /><div className="container py-5">
            <h1 className="display-4 text-center mb-4">Our Services</h1>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <h2 className="h5 card-header">Online Consultations</h2>
                        <div className="card-body">
                            <p>
                                Get expert medical advice from the comfort of your own home. Our online consultation
                                service connects you with our team of experienced doctors.
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <h2 className="h5 card-header">Lab Tests and Diagnostics</h2>
                        <div className="card-body">
                            <p>
                                Our state-of-the-art laboratory offers a wide range of tests and diagnostics to help
                                diagnose and treat various medical conditions.
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <h2 className="h5 card-header">Medicine Delivery</h2>
                        <div className="card-body">
                            <p>
                                Get your prescribed medicines delivered right to your doorstep. Our medicine delivery
                                service ensures that you receive your medication on time.
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div></>
    );
};

export default Services;