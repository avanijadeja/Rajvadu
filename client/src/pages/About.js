import React from "react";
import food1 from "../assets/food1.jpeg";
import "../styles/About.css";
import { FaCircleChevronDown } from "react-icons/fa6";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${food1})` }}>
        <div className="aboutHeader">
          <h3>Discover</h3>
          <h1>Our Story</h1>
          <div class="icon">
            <FaCircleChevronDown size={70} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
