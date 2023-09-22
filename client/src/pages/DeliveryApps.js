import React from "react";

import doordash from "../assets/doordash.jpeg";
import grubhub from "../assets/grubhub.jpeg";
import seamless from "../assets/seamless.jpeg";
import ubereats from "../assets/ubereats.jpeg";

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
            <a href="#aboutimages">
              <FaCircleChevronDown size={70} color="white" />
            </a>
          </div>
        </div>
      </div>

      <div class="deliveryimages">
        <img src={doordash} alt="imagemain"></img>
        <img src={grubhub} alt="imagemain"></img>
        <img src={seamless} alt="imagemain"></img>
        <img src={ubereats} alt="imagemain"></img>
      </div>
    </div>
  );
};

export default DeliveryApps;
