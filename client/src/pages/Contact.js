import React, { useState } from "react";
import { validateEmail } from "../utils/helpes";
import food6 from "../assets/food6.jpeg";
import { FaCircleChevronDown } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";

const Contact = () => {
  // define useState form name, email, message ,set default value as empty string
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Define useState for errorMessage, default value empty string
  const [errorMessage, setErrorMessage] = useState("");

  // destructure formState
  const { name, email, message } = formState;

  // define handleChange function for if field empty and not valid, Errormessage is display
  function handleChange(e) {
    //  check for email , if email has invalid format or blank then pass error message.
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // preventDefault function on submit
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="contact">
      <div
        className="backgroundTop"
        style={{ backgroundImage: `url(${food6})` }}
      >
        <div className="backgroundHeader">
          <h3>Be in Touch</h3>
          <h1>Contact Us</h1>
          <div class="icon">
            <a href="#contact">
              <FaCircleChevronDown size={70} color="white" />
            </a>
          </div>
        </div>
      </div>
      <div class="contact" id="contact">
        <br />
        <h1> GET IN TOUCH</h1>
        <br />
        <br />
        <section className="contactForm">
          {/* contact form  */}
          <form id="contact-form">
            <div>
              <label htmlFor="Name" className="contactLabel">
                Name:
              </label>{" "}
              <br></br>
              <input
                type="text"
                defaultValue={name}
                onBlur={handleChange}
                name="Name"
                placeholder="Please Enter Your Name"
              />
            </div>
            <br></br>
            <div>
              <label htmlFor="email" className="contactLabel">
                Email:
              </label>
              <br></br>
              {/* input for email. onblur handlechange called */}
              <input
                type="email"
                defaultValue={email}
                name="email"
                onBlur={handleChange}
                placeholder="Please Enter Your Email"
              />
            </div>
            <br></br>
            <div>
              <label htmlFor="Message" className="contactLabel">
                {" "}
                Message:
              </label>
              <br></br>
              {/*  textarea for message , maximum rows 6 on onblur handlechange called */}
              <textarea
                name="Message"
                defaultValue={message}
                onBlur={handleChange}
                placeholder="Pleae Enter Your Message"
                rows="6"
              />
            </div>
            <br></br>
            {errorMessage && (
              <div>
                {/* display error message */}
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            {/* submit button for contact form - onsubmit handlesubmit called */}
            <button type="submit" className="submit" onSubmit={handleSubmit}>
              Submit
            </button>
            <br></br>
          </form>
        </section>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Contact;
