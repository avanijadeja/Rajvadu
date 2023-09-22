import React from "react";
import food1 from "../assets/food1.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
    <div className="aboutTop" style={{backgroundImage:`url(${food1})`}}></div>
     
    </div>
  );
};

export default About;
