import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

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
