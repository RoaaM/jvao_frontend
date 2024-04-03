import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import '../styles/home.css'; 

export default function Home() {
  return (
    <div className="side-by-side">
        <Navbar />
        <div className="home-container">
          <Header />
          <div className="main-container">
            <div className="text-container">
              <p className="description">
              JORDANIAN VIRTUAL ASTRONOMICAL OBSERVATORY
              </p>
              <p className="description">
              The Jordanian Virtual Astronomical Observatory (JVAO) is an effort towards enhancing accessibility to astronomical data, tools, and services while promoting collaboration, advancing astronomical infrastructure, and inspiring future generations. The JVAO located at Zarqa University effort aims to gather astronomical data and tools from the most advanced telescopes worldwide, as well as esteemed researchers.            </p>
            </div>
          </div>
      </div>
     
    </div>
  );
}
