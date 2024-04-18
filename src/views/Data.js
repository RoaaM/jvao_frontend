import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import '../styles/data.css'; 
import jinabaseImage from '../images/query1.png';
import gaiaImage from '../images/query2.png';
import { Link } from "react-router-dom";

export default function Data() {
  return (
    <div className="side-by-side">
      <Navbar />
      <div className="home-container">
        <Header />
        <div className="main-container-data">
          <div className="text-container">
            <p className="head">Data</p>
          </div>
          <div className="side-by-side-sections">
            {/* Jinabase Section */}
            <div className="section">
            <Link to={"/jinabase"}><p className="sub-head">Jinabase</p></Link>

              <img
                className="section-image"
                src={jinabaseImage}
                alt="Jinabase"
              />
              <div className="jina-discription">
                <p>JINAbase is a specialized database concentrating on metal-poor stars, offering insights into the early universe's chemical makeup and stellar nucleosynthesis processes. Developed by the Joint Institute for Nuclear Astrophysics (JINA), it serves as a valuable resource for astronomers studying these unique celestial objects.</p>
              </div>
            </div>
            {/* Gaia Section */}
            <div className="section">
            <Link to={"/gaia"}><p className="sub-head">Gaia</p></Link>
              <img
                className="section-image"
                src={gaiaImage}
                alt="Gaia"
              />
              <div className="gaia-description">
                <p>Gaia, launched by the European Space Agency in 2013, aims to map the Milky Way with unprecedented precision, charting the positions and movements of over a billion stars. Positioned at the second Lagrange point (L2), Gaia's advanced instruments provide detailed measurements of stellar positions and brightnesses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
