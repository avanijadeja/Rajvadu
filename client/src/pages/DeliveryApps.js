import React from "react";
import food2 from "../assets/images/cover4.jpeg";
import doordash from "../assets/images/doordash.jpg";
import grubhub from "../assets/images/grubhub.jpg";
import seamless from "../assets/images/seamless.jpg";
import ubereats from "../assets/images/ubereats.jpg";
import { FaCircleChevronDown } from "react-icons/fa6";
import "../styles/Delivery.css";
const DeliveryApps = () => {
  return (
    <div className="delivery">
      <div
        className="backgroundTop"
        style={{ backgroundImage: `url(${food2})` }}
      >
        <div className="backgroundHeader">
          <h3>We are in</h3>
          <h1>Our Delivery Apps</h1>
          <div class="icon">
            <a href="#deliveryimages">
              <FaCircleChevronDown size={70} color="white" />
            </a>
          </div>
        </div>
      </div>
      <br />

      <br />
      <div class="deliveryimages" id="deliveryimages">
        <img src={doordash} alt="imagemain"></img>
        <img src={grubhub} alt="imagemain"></img>
        <img src={seamless} alt="imagemain"></img>
        <img src={ubereats} alt="imagemain"></img>
        <br />
        <br />
      </div>
    </div>
  );
};

export default DeliveryApps;
