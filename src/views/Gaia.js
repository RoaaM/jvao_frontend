import React from "react";
import '../styles/service.css'; 
import comingSoon from '../images/coming-soon.png';

export default function Gaia() {
  

  return (
    <div className="container-service">
      <img className="img-container" src={comingSoon} alt="comming soon"/>
    </div>
  );
}


