import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        {new Date().getFullYear()}
        <span>ComfySloth</span> All Rights Reserved
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100px;
  background-color: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: var(--promary-color);
  }
`;

export default Footer;
