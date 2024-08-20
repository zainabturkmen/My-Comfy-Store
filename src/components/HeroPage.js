import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeroPage = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/" className="link">
            Home
          </Link>
          {product && <Link to="/products" className="link">/ Products </Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #e3c5ae;
  width: 100%;
  min-height: 18vh;
  display: flex;
  align-items: center;

  .section-center {
    width: 84vw;
    margin: 0 auto;
  }
  h3 {
    font-size: 20px;
    text-transform: capitalize;
    color: #542c10;
    .link {
      color: #824010;
    }
  }

  @media (max-width: 600px) {
    min-height: 10vh;

    h3 {
      font-size: 1.2em;
    }
  }
`;

export default HeroPage;
