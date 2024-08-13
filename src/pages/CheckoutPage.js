import React from "react";
import { HeroPage } from "../components";
import styled from "styled-components";

const CheckoutPage = () => {
  return (
    <div>
      <HeroPage title="checkout" />
      <Wrapper></Wrapper>
    </div>
  );
};

const Wrapper = styled.div``;

export default CheckoutPage;
