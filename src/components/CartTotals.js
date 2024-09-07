import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <h5>
            shipping Fee : <span>{formatPrice(shipping_fee)}</span>
          </h5>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    width: 327px;
    height: 130px;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: start; */
    text-align: start;

    article {
      display: flex;
      justify-content: space-around;
    }
    h5 {
      font-size: 1em;
    }
  }
`;

export default CartTotals;
