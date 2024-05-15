import React from "react";
import '../styles/service.css'; 
import comingSoon from '../images/coming-soon.png';

export default function Scripts() {
  

  return (
    <div className="container-service">
      <p style={{fontSize:50, fontWeight:500}}>Scripts</p>
      <img className="img-container" src={comingSoon} alt="comming soon"/>
    </div>
  );
}


