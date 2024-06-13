import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import '../styles/data.css';
import '../styles/myvistors.css'; // New CSS file for map styling

const MyVisitors = () => {

  return (
    <div className="side-by-side">
      <Navbar />
      <div className="home-container">
        <Header />
        <div className="main-container-visitor">
          <div className="text-visitors">
            <p className="head">Our Visitors Map</p>
          </div>
          <div id="mapmyvisitors-container" className="map-container">
          <a href="https://mapmyvisitors.com/web/1bw4x"  title="Visit tracker">
          <img style={{width:"100%", height:400}} src="https://mapmyvisitors.com/map.png?d=rPw8wpvRGQtiwnoEEHgWID7jtYvcrZpQgcSyv2zEnuA&cl=ffffff" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVisitors;
