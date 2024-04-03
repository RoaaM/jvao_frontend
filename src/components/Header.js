import React from "react";
import '../styles/header.css';
import icUser from '../images/icUser.png';
import icLogin from '../images/icLogin.png';
import icAboutUs from '../images/icAboutUs.png';

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-links">
                <div className="header-link">
                    <img src={icAboutUs} alt="about Icon" className="header-icon" />
                    <p>About Us</p>
                </div>

                <div className="header-link">
                    <img src={icLogin} alt="login Icon" className="header-icon" />
                    <p>Login</p>
                </div>
            </div>

            <img src={icUser} alt="user Icon" className="user-icon" />
        </div>
    );
}
