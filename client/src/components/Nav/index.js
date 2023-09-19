import React from "react";
// import Auth from "../../utils/auth";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    return (
      <div class="Navbarcss">
        <ul>
          <li className="mx-1">
            <Link to="/Home.js">HOME</Link>
          </li>
          <li className="mx-1">
            <Link to="/About.js">ABOUT</Link>
          </li>
          <li className="mx-1">
            <Link to="/Gallery.js">GALLERY</Link>
          </li>
          <li className="mx-1">
            <Link to="/OnlineOrder.js">ONLINE ORDER</Link>
          </li>
          <li className="mx-1">
            <Link to="/DeliveryApps.js">DELIVERY APPS</Link>
          </li>
          <li className="mx-1">
            <Link to="/Caterning.js">CATERNING</Link>
          </li>
          <li className="mx-1">
            <Link to="/Contact.js">CONTACT</Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <h1>Rajvadu</h1>
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
