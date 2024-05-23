import React from "react";
import MultiplePizzas from "../assets/f.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        MyRadio is the leading news and professional source for radio broadcast owners, managers and engineers across the nation. 
        We aim to serve them with compelling content, real journalism, practical technology coverage and commentary by opinion engines.
        </p>
        
      </div>
    </div>
  );
}

export default About;