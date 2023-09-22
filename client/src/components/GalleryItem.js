import React from "react";

function GalleryItem({ image, name, price }) {
  return (
    <div className="galleryItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
    </div>
  );
}

export default GalleryItem;
