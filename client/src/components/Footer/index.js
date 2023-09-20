import React from "react";
// import Auth from "../../utils/auth";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>ADDRESS</h4>
            <ul className="list-unstyled">
              <li> 1601 South interest 20</li>
              <li> Suite 1101</li>
              <li> Austin, Tx - 78623</li>
              <li></li>
              <li> (512)401 3503</li>
            </ul>
          </div>
          <div className="col">
            <h4>SOCIAL LINKS</h4>
            <ul className="list-unstyled">
              <li></li>
            </ul>
          </div>
          <div className="col">
            <h4>HOURS</h4>
            <ul className="list-unstyled">
              <li>SUN - THU : 11:00am - 9.30pm</li>
              <li>FRI - SAT : 11:00am - 10:00pm</li>
              <li> MONDAY CLOSED</li>
              <li></li>
              <li> We cater for all your special </li>
              <li> Occassions. </li>
              <li> Please ask the associate for details. </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; (new Date().getFullYear() | All rights reserved)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
