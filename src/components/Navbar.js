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
                <NavbarItem to="/" itemValue={'Home'} itemIcon={icHomePage} subItems={subItems['Home']} iconStyle={{width: '48px', marginLeft: '-9px', marginRight: '5px'}} />

                <NavbarItem to="/objectives" itemValue={'Objectives'} itemIcon={icObjectives} subItems={subItems['Objectives']}
                iconStyle={{width: "35px",
                height: "35px", marginLeft:"-3px"}} />

                <NavbarItem to="/products" itemValue={'Our Products'} itemIcon={icService} subItems={subItems['Our Products']} />

                <NavbarItem to="/faqs" itemValue={'FAQS'} itemIcon={icAnswers} subItems={subItems['FAQS']} />
            </div>
        </div>
    );
}
