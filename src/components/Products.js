import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { formatPrice } from "../utils/helpers";

const Products = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className="container">
        <Link to={`products/${id}`} className="link">
          <img src={image} alt={name} />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p className="text">
          This plush couch isn't just seating, it's the star of your relaxation
          station.
        </p>
        <div className="price-class">
          <p>{formatPrice(price)}</p>
          <Link to="/checkout" className="cart-btn">
            <FaShoppingCart />
          </Link>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin: 0 1em;
  border-radius: 10px;

  transition: all 0.3s ease-in-out;
  box-shadow: 0.1em 0.5em 0.5em rgba(0, 0, 0, 0.25);
  &:hover {
    transform: scale(1.1);
  }

  .container {
    width: 100%;
    img {
      width: 100%;
      height: 200px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      object-fit: cover; /* Ensure image covers the entire area */
    }
  }

  footer {
    text-align: start;
    max-width: 340px;
    margin-top: 1em;
    padding: 1em;

    h5 {
      text-transform: capitalize;
      font-size: 1em;
      margin-bottom: 0.2em;
      letter-spacing: 0.1em;
    }

    .text {
      margin-bottom: 16px;
      font-weight: 300;
      word-spacing: 0.1em;
      line-height: 1.8em;
      margin-bottom: 0.5em;
    }

    .price-class {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .cart-btn {
      margin-top: 0.3em;
      font-size: 1.4em;
      color: #000;
    }
  }
`;

export default Products;
