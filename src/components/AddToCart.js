import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [mainColor, SetMainColor] = useState(colors[0]);
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
