import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75vh;
    gap: 1em;
    text-align: center;
    background-color: hsl(22, 31%, 88%);
    h1 {
      font-size: 7em;
    }

    h3 {
      font-size: 1.5em;
      margin-top:-1.5em;
    }
  }
`;

export default ErrorPage;
