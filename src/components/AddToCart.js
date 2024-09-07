import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);

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
      <strong className="color-title">color:</strong>
      <span>
        {colors.map((color, index) => {
          return (
            <button
              key={index}
              style={{ background: color }}
              className={`${mainColor === color ? "color active" : "color"}`}
              onClick={() => setMainColor(color)}>
              {index}
            </button>
          );
        })}
      </span>
      <div className="calc-container">
        <button onClick={decrease}>
          <FaMinus />
        </button>
        <span className="count">{amount}</span>
        <button onClick={increase}>
          <FaPlus />
        </button>
      </div>
      <Link
        to="/checkout"
        className="btnn"
        onClick={() => addToCart(id, amount, colors, product)}>
        Add to cart
      </Link>
    </>
  );
};

export default AddToCart;
