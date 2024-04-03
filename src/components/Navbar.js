import React from "react";
import '../styles/nav-bar.css';
import logo from '../images/logo.png';
import icHomePage from '../images/icHomePage.png';
import icObjectives from '../images/icObjectives.png';
import icService from '../images/icService.png';
import icAnswers from '../images/icAnswers.png';
import icRenko from '../images/icRenko.png';
import icSearch from '../images/icSearch.png';
import icLegal from '../images/icLegal.png';

import NavbarItem from "./NavbarItem";

export default function Navbar() {

    const subItems = {
        "Home": [],
        "Objectives": [],
        "Our Products": [
            { value: "Data", icon: icRenko },
            { value: "Services", icon: icSearch },
            { value: "Scripts", icon: icLegal },
        ],
        "FAQS": [],
    };

    return (
        <div className="container">
            <img src={logo} alt="Logo" className="logo" />
            <div className="content-div">
                <p className="jvao">JVAO</p>
                <NavbarItem itemValue={'Home'} itemIcon={icHomePage} subItems={subItems['Home']} />
                <NavbarItem itemValue={'Objectives'} itemIcon={icObjectives} subItems={subItems['Objectives']} />
                <NavbarItem itemValue={'Our Products'} itemIcon={icService} subItems={subItems['Our Products']} />
                <NavbarItem itemValue={'FAQS'} itemIcon={icAnswers} subItems={subItems['FAQS']} />
            </div>
        </div>
    );
}
