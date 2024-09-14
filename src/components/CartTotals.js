import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import StripeCheckout from "./StripeCheckout";

const CartTotals = () => {
  const { total_amount, shipping_fee, cart } = useCartContext();

  return (
    <Wrapper>
      <div className="total-div">
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
  justify-content: center;

  .total-div {
    max-width: 450px;
  }
  article {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    padding: 2.1em 3em;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 6em;
    width: 100%;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    /* padding: 40px; */

    h4 {
      display: grid;
      grid-template-columns: 200px 1fr;
    }
    span {
      font-weight: 400;
    }
    @media (min-width: 776px) {
      justify-content: flex-end;

      .total-div {
        width: 100px;
      }
    }
  }
  @media (max-width: 776px) {

    .total-div {
      width: 350px;
    }
  }
`;

export default CartTotals;
