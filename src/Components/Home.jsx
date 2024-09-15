import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import chair1 from "../Assets/chair2.jpg"
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Furnish Your Space, Stress-Free 
          </h1>
          <p className="primary-text">
          Rent furniture and home appliances for your temporary living needs, delivered right to your doorstep.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img className="chair" src={chair1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
