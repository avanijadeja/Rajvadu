import React, { Component } from "react";
import catering from "../assets/catering.png";
import food5 from "../assets/food5.jpeg";
import "../styles/Catering.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaCircleChevronDown } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";

function Catering() {
  return (
    <div className="catering">
      <div
        className="backgroundTop"
        style={{ backgroundImage: `url(${food5})` }}
      >
        <div className="backgroundHeader">
          <h3>We serve you better</h3>
          <h1>Catering</h1>
          <div class="icon">
            <a href="#cateringimages">
              <FaCircleChevronDown size={70} color="white" />
            </a>
          </div>
        </div>
      </div>
      <div class="cateringimages" id="cateringimages">
        <div className="cateringHead">
          <h1> GET YOUR QUOTATION</h1>
          <h4>
            As for our first time visitors, we welcome you and promise to expand
            your palate with some of our favorite Indian street foods.
          </h4>
        </div>
        <div className="cateringForm">
          <div className="leftside">
            <form id="contact-form">
              <div>
                <input
                  type="text"
                  // defaultValue={firstname}
                  // onBlur={handleChange}
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <br></br>
              <div>
                <input
                  type="text"
                  // defaultValue={lastname}
                  // onBlur={handleChange}
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
              <br></br>
              <div>
                <input
                  type="email"
                  // defaultValue={email}
                  name="email"
                  // onBlur={handleChange}
                  placeholder="Email Address"
                />
              </div>
              <br></br>
              <div>
                <input
                  type="phoneNumber"
                  // defaultValue={phoneNumber}
                  name="phoneNumber"
                  // onBlur={handleChange}
                  placeholder="Phone Number"
                />
              </div>
              <br></br>
              <div>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Type of Event"
                >
                  <Dropdown.Item href="#/action-1">
                    Birthday Party
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Wedding Event</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Office Party</Dropdown.Item>
                  <Dropdown.Item href="#/action-3"> Family Event</Dropdown.Item>
                </DropdownButton>
              </div>
              <br></br>
              <div>
                <textarea
                  name="Message"
                  // defaultValue={message}
                  // onBlur={handleChange}
                  placeholder="Pleae enter any items you are considering for this event.Be as detailed as you'd like*"
                  rows="6"
                />
              </div>
              <br></br>
              {/* {errorMessage && (
                <div> */}
              {/* display error message */}
              {/* <p className="error-text">{errorMessage}</p>
                </div>
              )} */}
              {/* submit button for contact form - onsubmit handlesubmit called */}
              <button type="submit" className="submit">
                Submit
              </button>
              <br></br>
            </form>
            <br></br>
            <br></br>
          </div>

          <div className="rightside">
   
            <img src={catering} alt="catering"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catering;
