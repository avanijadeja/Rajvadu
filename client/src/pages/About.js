import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/About.css";

import cover3 from "../assets/images/cover3.jpeg";
import { FaCircleChevronDown } from "react-icons/fa6";

import main1 from "../assets/images/main1.jpeg";
import main2 from "../assets/images/main2.jpeg";
import main3 from "../assets/images/main3.jpeg";
import main4 from "../assets/images/main4.jpeg";
import main5 from "../assets/images/main5.jpeg";
import main6 from "../assets/images/main6.jpeg";
import main7 from "../assets/images/main7.jpeg";
import main8 from "../assets/images/main8.jpeg";
import main9 from "../assets/images/main9.jpeg";
import main10 from "../assets/images/main10.jpeg";
function About() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div className="about">
      <div
        className="backgroundTop"
        style={{ backgroundImage: `url(${cover3})` }}
      >
        <div className="backgroundHeader">
          <h3>Discover</h3>
          <h1>Our Story</h1>
          <div class="icon">
            <a href="#aboutimages">
              <FaCircleChevronDown size={70} color="white" />
            </a>
          </div>
        </div>
      </div>
      <div class="aboutimages" id="aboutimages">
        <div>
          <br />
          <br />
          <br />
          <hr />
          <h1>About Us</h1>
          <hr />
        </div>
        <h4>
          Once you step into the portals of this experience, you would have
          stepped into a New World; a world, which takes you back in time. At
          “Rajwadu”, we not only bring alive the traditional Indian and Gujarati
          culture but also harp on the need to preserve the same for future
          generations; quite simply because we want the myriad expressions which
          have come to occupy the faces to last and be passed on.
          <br />
          <br />
          The traditional welcome – full of warmth; the leisurely saunter in
          lush green surrounds along lantern lit pathways and responsible for
          those manifold expressions; the courtyard temple with four generation
          idols; the works of art and the resplendent architecture of
          yesteryears; and much more, is what “Rajwadu” is all about. Not to
          forget the cuisine and we – your host; comprising of our in house –
          staff whom we call members of our extended family and who breathe, day
          in and night out traditional hospitality.
          <br />
          <br />
          What we call “Mehmangati” “Rajwadu”, a theme based restaurant spread
          over 12,000 sq. yards represents ancient culture and life style of
          villages in India. It begun in August 1998, when Mr. Paresh patel and
          Mr. Rajesh Patel together planted a promising idea of providing the
          Ahmedabadis the taste of their very own culture. “Rajwadu”, thus came
          into existence. The name itself echoes of royalty and tradition. A
          quite and serene place in the suburbs of the bustling city. Tranquil
          environment, Rajwadi khatla and Traditional Gujarati and Rajasthani
          food right under the open sky. What more can one ask for? “Rajwadu (A
          Unit of Seetavallabha Ram LLP)” is known as the epitome of authentic
          food.
        </h4>
      </div>
      <div class="slickcaro">
        <Slider {...settings}>
          <div>
            <img src={main1} alt="imagemain"></img>
          </div>
          <div>
            <img src={main2} alt="imagemain"></img>
          </div>
          <div>
            <img src={main3} alt="imagemain"></img>
          </div>
          <div>
            <img src={main4} alt="imagemain"></img>
          </div>
          <div>
            <img src={main5} alt="imagemain"></img>
          </div>
          <div>
            <img src={main6} alt="imagemain"></img>
          </div>
          <div>
            <img src={main7} alt="imagemain"></img>
          </div>
          <div>
            <img src={main8} alt="imagemain"></img>
          </div>
          <div>
            <img src={main9} alt="imagemain"></img>
          </div>
          <div>
            <img src={main10} alt="imagemain"></img>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default About;
