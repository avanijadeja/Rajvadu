import React from "react";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
   <ul>
          <li className="mx-1">
            <Link to="/About.js">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/Caterning.js">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/Contact.js">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/DeliveryApps.js">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/Gallery.js">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/Home.js">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/OnlineOrder.js">
              Login
            </Link>
          </li>
          

        </ul>
  
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
          -Shop-Shop
        </Link>
      </h1>

      <nav>
     
        {/* {showNavigation()} */}
      </nav>
    </header>
  );
}

export default Nav;
