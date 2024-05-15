import React from "react";
import '../styles/aboutUs.css'; // Assuming you have a CSS file for styling

export default function AboutUs() {
  return (
    <div>
      <div className="about-section">
        <h1>About Us</h1>
        <p>Welcome to our team of dedicated doctors with a profound passion for astrophysics!</p>
        <p>Driven by our love for both medicine and the mysteries of the universe, we have come together to form a unique group. Our team comprises medical professionals who share a common interest in astrophysics and a desire to contribute to scientific advancements in this fascinating field. As doctors, we are deeply familiar with the importance of research and innovation in advancing our understanding of the world around us. Drawing from our expertise in healthcare and our curiosity about the cosmos, we have embarked on a mission to support researchers and scientists in astrophysics. Our goal is to bridge the gap between medicine and astrophysics, leveraging our skills and knowledge to aid researchers in their endeavors. Whether it's providing medical insights into space travel, offering expertise in data analysis, or contributing to interdisciplinary collaborations, we are committed to making meaningful contributions to the astrophysics community. Join us on this exciting journey as we explore the wonders of the universe and work towards a future where healthcare and astrophysics intersect to benefit humanity.</p>
        <p>Feel free to explore our website and learn more about our team and the projects we're involved in. Together, let's reach for the stars!</p>
      </div>

      <h2 style={{ textAlign: "center", paddingBottom:10 }}>Our Team</h2>

      <div className="row center">
        <div className="column">
          <div className="card">
            <img src="/w3images/team1.jpg" alt="Mohammad Mardini" style={{ width: "100%" }} />
            <div className="container">
              <h2>Mohammad Mardini</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>Mmardini@Zu.Edu.Jo</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team3.jpg" alt="Ahmad Abu Shattal" style={{ width: "100%" }} />
            <div className="container">
              <h2>Ahmad Abu Shattal</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>Ahmad.Abushattal@Ahu.Edu.Jo</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
