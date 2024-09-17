import React from "react";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { useNavigate } from "react-router";

const promis = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  return <h2>hello from stripe checkout</h2>;
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promis}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .layer {
    width: 387px;
    height: 251px;
    flex-shrink: 0;
    border-radius: 387px;
    background: var(--Primary-Color, #a6602d);
    filter: blur(200px);
  }
`;

export default StripeCheckout;
