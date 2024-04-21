import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import '../styles/jinabase.css'; 
import InfoIcon from "../images/info.png";
import Select from "../components/Select";
import Button from "../components/Button";
import { abundances, elements, two_element } from "../constants";
import axios from "axios";

export default function Jinabase() {
  const [xColumn, setXColumn] = useState('');
  const [yColumn, setYColumn] = useState('')

  const [plot, setPlot] = useState('');

  const drawPlot = async () => {
    try {
      console.log({xColumn, yColumn});
      const {data} = await axios.post('http://127.0.0.1:8000/jinabase/plot_data/', {
        xColumn,
        yColumn
      });

      setPlot(data.graph)
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    console.log("changed,", {xColumn, yColumn});
  }, [xColumn, yColumn])

  return (
    <div className="side-by-side">
      <Navbar />
      <div className="home-container">
        <Header />
        <div className="main-container-plot">
          <div className="text-container-data">
            <p className="head-query">Query JINAbase</p>
          </div>
          <div className="side-by-side-sections">
            <div className="section">
                <p className="texts">Choose abundances for your sample and plotting</p>
                <div>
              <div className="inline-selects">
              <Select onSelectChange={(value) => {setXColumn(value)}} labelText={'X-axis'} list={elements} />
              <span className="slash"> / </span>
              <Select list={two_element} />
              <span className="axis-fields">
                <span>From: </span>
                <input className="input-style" type="text" /> 
                <span> To: </span>
                <input className="input-style" type="text" /> 
              </span>
              </div>

              <div className="inline-selects">
              <Select onSelectChange={(value) => {setYColumn(value)}} labelText={'Y-axis'} list={elements} />
              <span className="slash"> / </span>
              <Select list={two_element} />
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
                <span className="txt-btn">Solar abundances</span>
                <Select width={'200px'} list={abundances} />
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
                <Button onClick={drawPlot} label="Plot Abundances" />
                <Button label="Show data table" />
              </div>
            {plot&&<img src={`data:image/png;base64,${plot}`} alt="element plot" style={{width: 603, height:422}} />}
            </div>
            </div>
             
            <div className="side-by-side-sections">
            <div className="section">
              <div>
              <p className="texts">Need more abundances or stellar parameter criteria?</p>
              </div>
              <div className="desc-container-2" >
                  <img
                    className="icon"
                    src={InfoIcon}
                    alt="Info Icon"
                  />
                  <p className="itext">Leave upper and lower limit options empty to include all stars with abundances for selected elements.</p>
              </div>
              <div style={{width:'102%', height:1, backgroundColor:'#D3D3D3'}}/>
              <div className="button-group"> 
                <Button onClick={drawPlot} label="Add Criterion" />
                <Button label="Remove Criterion" />
              </div>
            </div>
            </div>

            <div className="side-by-side-sections">
            <div className="section">
              <div>
              <p className="texts">Further customize your sample</p>
              </div>
              <div className="desc-container-3" >
                  <img
                    className="icon"
                    src={InfoIcon}
                    alt="Info Icon"
                  />
                  <p className="itext">Use these criteria to select your sample of stars.</p>
              </div>
              <div style={{width:'102%', height:1, backgroundColor:'#D3D3D3'}}/>

              <div className="customize-sample">
                  <div>
                    <p className="head-check-text">Location of stars</p>
                    <div className="checkbox-container">
                      <input type="checkbox" id="location-of-stars-checkbox" />
                      <label htmlFor="location-of-stars-checkbox">Select/deselect all</label>
                      <input type="checkbox" id="location-of-stars-checkbox" />
                      <label htmlFor="location-of-stars-checkbox">MW Halo</label>
                    </div>
                  </div>
                  <div>
                    <p className="head-check-text">Stellar evolutionary phase</p>
                    <div className="checkbox-container">
                      <input type="checkbox" id="location-of-stars-checkbox" />
                      <label htmlFor="location-of-stars-checkbox">Giants</label>
                      <input type="checkbox" id="location-of-stars-checkbox" />
                      <label htmlFor="location-of-stars-checkbox">Subgiants</label>
                    </div>
                  </div>
                  <div>
                    <p className="head-check-text">N-capture signatures</p>
                    <div className="checkbox-container">
                      <input type="checkbox" id="location-of-stars-checkbox" />
                      <label htmlFor="location-of-stars-checkbox">s-rich</label>
                      <input type="checkbox" id="location-of-stars-checkbox" />
                      <label htmlFor="location-of-stars-checkbox">r-II rich</label>
                    </div>
                  </div>
                  <div>
                    <p className="head-check-text">Carbon signatures</p>
                    <div className="checkbox-container">
                      <input type="checkbox" id="location-of-stars-checkbox" />
                      <label htmlFor="location-of-stars-checkbox">CEMP</label>
                      <input type="checkbox" id="location-of-stars-checkbox" />
                      <label htmlFor="location-of-stars-checkbox">CEMP-no</label>
                    </div>
                  </div>
                </div>
            </div>
            </div>
            
            <div className="side-by-side-sections">
            <div className="section">
              <div>
              <p className="texts">Customize plot</p>
              </div>
              
              <div style={{width:'102%', height:1, backgroundColor:'#D3D3D3'}}/>

              <div className="customize-sample">
                  
                  <div>
                    <div className="checkbox-container">
                      <input type="checkbox" id="location-of-stars-checkbox" />
                      <label htmlFor="location-of-stars-checkbox" className="head-check-text">Show duplicate entries for each star when available</label> 
                    </div>
                  </div>
                  <div>
                    <div className="checkbox-container">
                      <input type="checkbox" id="location-of-stars-checkbox" />
                      <label htmlFor="location-of-stars-checkbox" className="head-check-text">Include upper limits in plot/table</label>
                    </div>
                  </div>
                  <div>
                    <div className="checkbox-container">
                      <input type="checkbox" id="location-of-stars-checkbox" />
                      <label htmlFor="location-of-stars-checkbox"  className="head-check-text">Show legend for plot</label>
                    </div>
                  </div>
                </div>
                <div className="button-group"> 
                <Button onClick={drawPlot} label="Plot Abundances" />
                <Button label="Show data table" />
              </div>
            </div>
            </div>

            </div>
          </div>
        </div>
  );
}
