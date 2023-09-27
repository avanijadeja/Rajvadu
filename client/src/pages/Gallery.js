import React from "react";
import "../styles/Gallery.css";
import food1 from "../assets/images/cover6.jpeg";
import { FaCircleChevronDown } from "react-icons/fa6";
import { GalleryList } from "../helpers/GalleryList";
import GalleryItem from "../components/GalleryItem";

const Gallery = () => {
  return (
    <div className="gallery">
      <div
        className="backgroundTop"
        style={{ backgroundImage: `url(${food1})` }}
      >
        <div className="backgroundHeader">
          <h3>Beautiful Memories</h3>
          <h1>Our Gallery</h1>
          <div class="icon">
            <a href="#galleryimages">
              <FaCircleChevronDown size={70} color="white" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <hr />
        <h1 className="galleryTitle" id="galleryimages">
          Our Tasty Food
        </h1>
        <hr />
      </div>
      <br></br>
      <br></br>
      <div className="galleryList">
        {GalleryList.map((galleryItem, key) => {
          return <GalleryItem key={key} image={galleryItem.image} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
