import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/C.jpg";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Home Made </h1>
        <p> RECIPES TO FIT ANY TASTE</p>
        <Link to="/recipes">
          <button> ENTER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;