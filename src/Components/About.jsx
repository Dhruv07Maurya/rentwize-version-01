import React from "react";
import AboutBackground from "../Assets/about-background.png";
import sofa from "../Assets/sofa1.jpg"
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img className="sofa" src={sofa} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Flexible and Affordable Furniture Rentals 
        </h1>
        <p className="primary-text">
        We provide a hassle-free solution for students, professionals, and anyone who frequently relocates. Save money and avoid the hassle of buying and moving furniture by renting from us.
        </p>
        <p className="primary-text">
        <h3>Our Mission</h3>
        To make furnishing your temporary home easy, affordable, and stress-free.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
