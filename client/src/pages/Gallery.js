import React from "react";
import "../styles/Gallery.css";
import { GalleryList } from "../helpers/GalleryList";
import GalleryItem from "../components/GalleryItem";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="galleryTitle">Our Gallery</h1>
      <div className="galleryList">
        {MenuList.map((galleryItem, key) => {
          return <GalleryItem key={key} image={galleryItem.image} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
