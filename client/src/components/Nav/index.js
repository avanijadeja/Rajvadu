import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "../../styles/Nav.css";
import { FaPhone } from "react-icons/fa6";

import { FaSquareEnvelope } from "react-icons/fa6";
function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="flex-row px-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="flex-row px-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="flex-row px-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="flex-row px-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <div class="Navbarcss">
      <p class="info">
        <FaPhone />
        (512)333 4444
        <FaSquareEnvelope />
        rajvadu.austin@gmail.com
      </p>
      <header className="flex-row px-1" id="navHead">
        <h1>
          <Link to="/">Rajvadu</Link>
        </h1>

        <nav>
          <ul className="flex-row">
            <li className="flex-row px-1">
              <Link to="/">HOME</Link>
            </li>
            <li className="flex-row px-1">
              <Link to="/About">ABOUT</Link>
            </li>

            <li className="flex-row px-1">
              <Link to="/Gallery">GALLERY</Link>
            </li>

            <li className="flex-row px-1">
              <Link to="/OnlineOrder">ONLINE ORDER</Link>
            </li>

            <li className="flex-row px-1">
              <Link to="/DeliveryApps">DELIVERY APPS</Link>
            </li>

            <li className="flex-row px-1">
              <Link to="/Catering">CATERNING</Link>
            </li>

            <li className="flex-row px-1">
              <Link to="/Contact">CONTACT</Link>
            </li>

            <li className="flex-row px-1">{showNavigation()}</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
