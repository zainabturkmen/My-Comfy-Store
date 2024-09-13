import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  return (
    <Wrapper>
      <Link to="/checkout" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-icon">
          <FaShoppingCart />
          <span className="count">{ total_items}</span>
        </span>
      </Link>
      <button className="login">
        Login
        <span>
          <FaUserPlus />
        </span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 3em;
  margin-top: 0.3em;

  .cart-btn {
    font-size: 1.3em;
    color: black;
    margin-top: 0.4em;
    .cart-icon {
      font-size: 1.2em;
      position: relative;
      top: 0.2em;
      left: 0.3em;
    }
    .count {
      color: white;
      background-color: var(--promary-color);
      padding: 0.1em 0.4em;
      border-radius: 6em;
      font-size: 0.6em;
      position: absolute;
      right: -1em;
      top: -0.9em;
    }
  }

  .login {
    font-size: 1.3em;
    color: black;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding-top: -1.3 em;
    span {
      margin-left: 0.5em;
      font-size: 1.3em;
    }
  }
  @media (max-width: 700px) {
    .login,
    .cart-btn {
      display: none;
    }
  }
`;

export default CartButtons;
