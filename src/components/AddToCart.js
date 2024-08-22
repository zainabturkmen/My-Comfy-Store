import React from "react";

const AddToCart = () => {
  return (
    <>
      <div className="calc-container">
        <FaMinus />
        <span className="count">1</span>
        <FaPlus />
      </div>
    </>
  );
};

export default AddToCart;
