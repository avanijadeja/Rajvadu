import React from "react";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    <ul>
      <li className="mx-1">
        <Link to="/About.js">About</Link>
      </li>
      <li className="mx-1">
        <Link to="/Caterning.js">Catering</Link>
      </li>
      <li className="mx-1">
        <Link to="/Contact.js">Contact</Link>
      </li>
      <li className="mx-1">
        <Link to="/DeliveryApps.js">DeliveryApps</Link>
      </li>
      <li className="mx-1">
        <Link to="/Gallery.js">Gallery</Link>
      </li>
      <li className="mx-1">
        <Link to="/Home.js">Home</Link>
      </li>
      <li className="mx-1">
        <Link to="/OnlineOrder.js">OnlineOrder</Link>
      </li>
    </ul>;
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <h1>Rajvadu</h1>
        </Link>
      </h1>

      <nav>{/* {showNavigation()} */}</nav>
    </header>
  );
}

export default Nav;
