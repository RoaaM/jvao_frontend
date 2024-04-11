import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import '../styles/jinabase.css'; 
import InfoIcon from "../images/info.png";
import Select from "../components/Select";
import Button from "../components/Button";

export default function Jinabase() {
  

  return (
    <div className="side-by-side">
      <Navbar />
      <div className="home-container">
        <Header />
        <div className="main-container-plot">
          <div className="text-container">
            <p className="head-query">Query JINAbase</p>
          </div>
          <div className="side-by-side-sections">
            <div className="section">
                <p className="texts">Choose abundances for your sample and plotting</p>
                <div>
              <div className="inline-selects">
              <Select labelText={'X-axis'} />
              <span className="slash"> / </span>
              <Select />
              <span className="axis-fields">
                <span>From: </span>
                <input className="input-style" type="text" /> 
                <span> To: </span>
                <input className="input-style" type="text" /> 
              </span>
              </div>

              <div className="inline-selects">
              <Select labelText={'Y-axis'} />
              <span className="slash"> / </span>
              <Select />
              <span className="axis-fields">
                <span>From: </span>
                <input className="input-style" type="text" /> 
                <span> To: </span>
                <input className="input-style" type="text" /> 
              </span>
              </div>
              </div>
              <div className="info-section">
              <Button label="Useful information" /> 
              <div className="text-and-button"> 
                <span>Solar abundances</span>
                <Select />
              </div>
              </div>
            </div>
            <div className="section">
              <div className="desc-container">
                  <img
                    className="icon"
                    src={InfoIcon}
                    alt="Info Icon"
                  />
                  <p className="itext">To plot the log(eps) abundances leave the denominator element empty. (the first option in the list)</p>
                </div>
              <div className="desc-container">
                  <img
                    className="icon"
                    src={InfoIcon}
                    alt="Info Icon"
                  />
                  <p className="itext">Leave upper and lower limit options empty to include all stars with abundances for selected elements.</p>
              </div>
              <div className="button-group"> 
                <Button label="Plot Abundances" />
                <Button label="Show data table" />
              </div>
            </div>

            </div>
            
            </div>
          </div>
        </div>
  );
}
