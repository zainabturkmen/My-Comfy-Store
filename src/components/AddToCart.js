import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { id, stock } = product;

  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <>
      <div className="calc-container">
        <button onClick={decrease}>
          <FaMinus />
        </button>
        <span className="count">{amount}</span>
        <button onClick={increase}>
          <FaPlus />
        </button>
      </div>
      <Link to="/checkout" className="btnn">
        Add to cart
      </Link>
    </>
  );
};

export default AddToCart;
