import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeroPage = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/" className="link">
            Home
          </Link>{" "}
          / {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section-center {
    height: 140px;
    background-color: #e3c5ae;
    padding-left: 13em;
    padding-top: 4em;
  }

  h3 {
    font-size: 20px;
    text-transform: capitalize;
    color: #542c10;
    .link {
      color: #824010;
    }
  }
`;

export default HeroPage;
