import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartColumns, CartItems, CartTotals } from "../components";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper>
      <CartColumns />
      <hr />
      {cart.map((item) => {
        return <CartItems key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="btn">
          Continue shopping
        </Link>
        <button type="button" className="clear-btn" onClick={clearCart}>
          Clear shopping Cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2em;

  .link-container {
    display: flex;
    gap: 1em;
    justify-content: space-between;
    .clear-btn {
      border: none;
      background-color: transparent;
      color: black;
      text-decoration: underline;
      font-size: 1em;
      cursor: pointer;
    }
  }

  @media (max-width: 776px) {
    .btn {
      font-size: 0.7em;
    }
  }
`;

export default CartContent;
