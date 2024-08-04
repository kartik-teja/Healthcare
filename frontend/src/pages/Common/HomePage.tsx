import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./NavBar";

function Home() {

    return (
        <>
            <Navbar />
            <div className='row h-90%'> Your reports is an e-Hospital,
                where you can book appointments with the doctors of any hospitals or clinics,
                take any necessary tests in any laboratory of your choice and even order your medicines at one stop</div>

        </>
    )
}

export default Home;