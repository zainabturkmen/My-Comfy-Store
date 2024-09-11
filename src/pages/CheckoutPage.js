import React from "react";
import { CartColumns, HeroPage } from "../components";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartContent from "../components/CartContent";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <HeroPage title="checkout" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  /* height: 100vh; */
  .empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    gap: 1.5em;
    h2 {
      font-size: 3em;
    }
    .btn {
      padding: 0.2em 1.5em;
      font-size: 1.3em;
    }
  }
`;

export default CheckoutPage;
