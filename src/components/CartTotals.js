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
          <h4>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h4>
          <h4>
            shipping Fee : <span>{formatPrice(shipping_fee)}</span>
          </h4>
          <hr />
          <h4>
            order total :{" "}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: start;

  article {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    padding: 2em 3em;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1em;

    h4 {
      display: grid;
      grid-template-columns: 200px 1fr;
    }
    span{
        font-weight: 400;
    }
    @media (min-width: 776px) {
      justify-content: flex-end;
    }
  }
`;

export default CartTotals;
