import React from "react";
import styled from "styled-components";
import Image from "../assets/aboutIamge.png";
import { HeroPage } from "../components";

const AboutPage = () => {
  return (
    <div>
      <HeroPage title="about" />
      <Wrapper>
        <div className="text-container">
          <div>
            <h1 className="title">our story</h1>
            <div className="underline"></div>
          </div>
          <p>
            Comfy Sloth is your ultimate destination for creating cozy and
            stylish living spaces. We specialize in offering a curated selection
            of high-quality, comfortable furniture that blends seamlessly with
            any home décor. Our mission is to bring comfort and elegance to
            every room, making your home a place where you can truly relax and
            unwind. At Comfy Sloth, we believe that comfort should never be
            compromised, and we are committed to providing pieces that are as
            durable as they are beautiful. Transform your home into a sanctuary
            with Comfy Sloth.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4.2em 0;
  
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    gap: 2em;
    max-width: 800px;
    margin: 0 auto;
  }
  p {
    line-height: 3em;
    font-size: 10px;
    text-align: center;
    font-size: 1.12em;
  }

  .title {
    font-size: 28px;
  }

  .underline {
    background-color: #a6602d;
    width: 100px;
    height: 3px;
    margin: 0 auto;
  }
  .title {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    .text-container {
      max-width: 500px;
      margin: 4em 2em;
      p {
        font-size: 0.8em;
      }
    }
  }
`;

export default AboutPage;
