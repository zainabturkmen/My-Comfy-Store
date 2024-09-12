import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItems = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc")
  };

  const descrease = () => {
    toggleAmount(id, "inc")
  };
  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            Color : <span style={{ background: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons
        amount={amount}
        increase={increase}
        descrease={descrease}
      />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: center;
  }
  h5 {
    text-transform: capitalize;
    font-size: .7em;
  }
  p{
    font-size: .8em;
  }
  img {
    width: 100px;
    height: 70px;
    object-fit: cover;
    display: block;
  }
  .color {
    display: flex;
    align-items: center;
  }

  .color span {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-left: 0.5rem;
  }

  .remove-btn {
    background-color: transparent;
    border: none;
    color: red;
    cursor: pointer;
  }
  .price {
    display: none;
  }

  .subtotal {
    display: none;
  }

  @media (min-width: 776px) {
    .price-small {
      display: none;
    }

    .price {
      display: block;
    }
    .subtotal {
      display: block;
    }
  }
`;

export default CartItems;
