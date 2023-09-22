import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import food4 from "../assets/food4.jpeg";
import { FaCircleChevronDown } from "react-icons/fa6";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import panipuri from "../assets/panipuri.jpeg";
import dosa from "../assets/dosa.jpeg";
import samosa from "../assets/samosa.jpeg";
import pavbhaji from "../assets/pavbhaji.jpeg";
import dossa from "../assets/dossa.jpeg";
import chole from "../assets/chole.jpeg";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  return (
    <div className="homeInfo">
      <div
        className="backgroundTop"
        style={{ backgroundImage: `url(${food4})` }}
      >
        <div className="backgroundHeader">
          <h3>NOW OPEN</h3>
          <h1>Rajvadu Indian Restaurant</h1>

          <button> Online Order</button>

          <br />
          <br />

          <div class="icon">
            <a href="#homeimages">
              <FaCircleChevronDown size={70} color="white" />
            </a>
          </div>
        </div>
      </div>

      <div class="homeimages" id="homeimages">
        <hr></hr>
        <h1>ABOUT US</h1>
        <hr></hr>
        <h3>Discover</h3>

        <h2>
          <i>
            To our fellow and honorary Indians, we hope you are reminded of home
            each time you eat at Honest. As for our first-time visitors, we
            welcome you and promise to expand your palate with some of our
            favorite Indian street foods.
          </i>
        </h2>
        <br />
        <h4>
          All preparations are made from scratch daily and dishes are cooked to
          order. We use the freshest and highest quality ingredients. There are
          no frozen or processed products in our kitchens.
        </h4>
        <Link to="/About">
          <button>READ MORE</button>
        </Link>
        <br />
        <br />
      </div>

      <div class="slickcaro">
        <Slider {...settings}>
          <div>
            <img src={panipuri} alt="imagemain"></img>
          </div>
          <div>
            <img src={dosa} alt="imagemain"></img>
          </div>
          <div>
            <img src={samosa} alt="imagemain"></img>
          </div>
          <div>
            <img src={pavbhaji} alt="imagemain"></img>
          </div>
          <div>
            <img src={dossa} alt="imagemain"></img>
          </div>
          <div>
            <img src={chole} alt="imagemain"></img>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
