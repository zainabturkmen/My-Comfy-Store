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
          <p>
            shipping Fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
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
    width: 327px;
    height: 130px;
    padding: 2em;

    h4,
    h5,
    p {
      display: grid;
      grid-template-columns: 200px 1fr;
    }
    p {
      margin-bottom: 1em;
    }
    h4 {
      margin-top: 1rem;
    }
    @media (min-width: 776px) {
      justify-content: flex-end;
    }
  }
`;

export default CartTotals;
