import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="content">
        <h1>Custom Furniture Built Only For You</h1>
        <div className="service-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 6em;
  .content {
    background-color: #f5ebe3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2em;
  }

  h1 {
    color: #835533;
    font-size: 38px;
    padding-top: 1em;
  }

  .service-center {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3.5em;
    position: relative;
    top: 6em;
    max-width: 1300px;
    justify-content: center;
    align-items: center ;
    margin: 0 auto;
  }

  .service {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e3c5ae;
    gap: 1em;
    width: 300px;
    height: 310px;
    border-radius: 5px;
    padding: 2.3em;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }

    .icon {
      background-color: #f5ebe3;
      padding: 0.3em 0.5em 0.2em 0.5em;
      border-radius: 50px;
      font-size: 2.2em;
    }
    h3 {
      color: #835533;
      font-size: 1.6em;
    }
    p {
      font-weight: 300;
      line-height: 1.7em;
    }
  }
`;
export default Services;
