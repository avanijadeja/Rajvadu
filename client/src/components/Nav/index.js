import React from "react";
// import Auth from "../../utils/auth";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    return (
      <div class="Navbarcss">
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/Home">HOME</Link>
          </li>
          <li className="mx-1">
            <Link to="/About">ABOUT</Link>
          </li>
          <li className="mx-1">
            <Link to="/Gallery">GALLERY</Link>
          </li>
          <li className="mx-1">
            <Link to="/OnlineOrder">ONLINE ORDER</Link>
          </li>
          <li className="mx-1">
            <Link to="/DeliveryApps">DELIVERY APPS</Link>
          </li>
          <li className="mx-1">
            <Link to="/Caterning">CATERNING</Link>
          </li>
          <li className="mx-1">
            <Link to="/Contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <h5 class="info">(512)333 4444 rajvadu.austin@gmail.com</h5>
      <header className="flex-row px-1">
        <h1>
          <Link to="/">
            <h1>Rajvadu</h1>
          </Link>
        </h1>

        <nav>{showNavigation()}</nav>
      </header>
    </>
  );
}

export default Nav;
