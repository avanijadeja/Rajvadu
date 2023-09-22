import React from "react";
import "../styles/About.css";
import food1 from "../assets/food1.jpeg";
import { FaCircleChevronDown } from "react-icons/fa6";

function About() {
  return (
    <div className="about">
      <div
        className="backgroundTop"
        style={{ backgroundImage: `url(${food1})` }}
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
      <div id="aboutimages">
        <div id="aboutimages">
          <h1>Come and experience Yourself</h1>
          <hr />
          <h4>
            Once you step into the portals of this experience, you would have
            stepped into a New World; a world, which takes you back in time. At
            “Rajwadu (A Unit of Seetavallabha Ram LLP)”, we not only bring alive
            the traditional Indian and Gujarati culture but also harp on the
            need to preserve the same for future generations; quite simply
            because we want the myriad expressions which have come to occupy the
            faces to last and be passed on. The traditional welcome – full of
            warmth; the leisurely saunter in lush green surrounds along lantern
            lit pathways and responsible for those manifold expressions; the
            courtyard temple with four generation idols; the works of art and
            the resplendent architecture of yesteryears; and much more, is what
            “Rajwadu (A Unit of Seetavallabha Ram LLP)” is all about. Not to
            forget the cuisine and we – your host; comprising of our in house –
            staff whom we call members of our extended family and who breathe,
            day in and night out traditional hospitality. What we call
            “Mehmangati” “Rajwadu (A Unit of Seetavallabha Ram LLP)”, a theme
            based restaurant spread over 12,000 sq. yards represents ancient
            culture and life style of villages in India. It begun in August
            1998, when Mr. Paresh patel and Mr. Rajesh Patel together planted a
            promising idea of providing the Ahmedabadis the taste of their very
            own culture. “Rajwadu (A Unit of Seetavallabha Ram LLP)”, thus came
            into existence. The name itself echoes of royalty and tradition. A
            quite and serene place in the suburbs of the bustling city. Tranquil
            environment, Rajwadi khatla and Traditional Gujarati and Rajasthani
            food right under the open sky. What more can one ask for? “Rajwadu
            (A Unit of Seetavallabha Ram LLP)” is known as the epitome of
            authentic food.
          </h4>
        </div>
        
      </div>
    </div>
  );
}

export default About;
