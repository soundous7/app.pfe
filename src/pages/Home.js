import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/C.png";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <h1> MyRadio  </h1> 
      <p> Enjoy wherever you are</p>
        <Link to="/recipes">
          <button> WELCOME </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;