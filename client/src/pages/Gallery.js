import React from "react";
import { AiFillLayout } from "react-icons/ai";
import food1 from "../assets/food1.jpeg";
import "../styles/Gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="Gallery">
        <img src={food1} alt="food1" />
        <div>
          <h1 id="gallery">Gallery</h1>
        </div>
      </div>
      <div>
        <h1> Gallery</h1>
        <h1> Gallery</h1> <h1> Gallery</h1> <h1> Gallery</h1> <h1> Gallery</h1>{" "}
        <h1> Gallery</h1> <h1> Gallery</h1> <h1> Gallery</h1> <h1> Gallery</h1>{" "}
        <h1> Gallery</h1> <h1> Gallery</h1> <h1> Gallery</h1> <h1> Gallery</h1>{" "}
        <h1> Gallery</h1>
      </div>
    </>
  );
};

export default Gallery;
