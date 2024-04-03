import React from "react";
import "./style.css";
import logs from "../assets/updatedfinallogo.png";
// import back from "../assets/updatedfinallogo.png";

const LandingPage = () => {
    return (
        <>
            <section id="landing-page">
                <div className="logan">

                    <img src={logs} alt="logo" />
                <button class="btn-donate">
                    Register Now
                </button>
                </div>
                
            </section>
        </>
    )
}

export default LandingPage