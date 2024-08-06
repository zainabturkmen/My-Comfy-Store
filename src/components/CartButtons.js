import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartButtons = () => {
  return (
    <Wrapper>
      <Link to="/cart" className="cart-btn">
        Cart
        <span>
          <FaShoppingCart />
          <span>12</span>
        </span>
      </Link>
      <button>
        Login <FaUserPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CartButtons;
