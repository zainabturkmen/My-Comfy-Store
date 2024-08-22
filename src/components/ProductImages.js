import React from "react";
import { useState } from "react";


const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <>
      <div className="images-container">
        <img className="big-img" src={main.url} alt="" />
        <div className="small-images">
          {images.map((image, index) => {
            return (
              <img
                src={image.url}
                key={index}
                alt={image.filename}
                onClick={() => setMain(images[index])}
                className={`${image.url === main.url ? "active" : null}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductImages;
