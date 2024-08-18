import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper className="section section-center">
      <h1>there was an error...</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2em;
    color: #000;
  }
`;
export default Error;
