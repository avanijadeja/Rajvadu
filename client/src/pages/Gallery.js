import React from "react";
import { AiFillLayout } from "react-icons/ai";
import food1 from "../assets/images/food1.jpeg";

const Gallery = () => {
  return (
    <div className="Gallery" style={{ backgroundImage: `url(${food1})` }}>
      <h1>Gallery</h1>
    </div>
  );
};

export default Gallery;
