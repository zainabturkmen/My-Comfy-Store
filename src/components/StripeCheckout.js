import React from "react";
import styled from "styled-components";

// const CheckoutForm = () => {
//     <h2>hello from stripe checkout</h2>
// };

const StripeCheckout = () => {
  return (
    <Wrapper>
      {/* <CheckoutForm /> */}
      <h2>hello from stripe checkout</h2>
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
