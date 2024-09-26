import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import { HiArrowLongRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <Wrapper>
      <article className="content">
        <h1>
          Design Your <br />
          Comfort Zone
        </h1>
        <p>
          By designing your comfort zone, you're not just settling for what's
          easy—you're creating a foundation that empowers you to explore new
          possibilities, take on challenges, and ultimately lead a more
          fulfilling life.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now <HiArrowLongRight className="arrow-svg" />
        </Link>
        <div className="layer"></div>
      </article>
      <article className="img-container">
        <div className="layer1"></div>

        <div className="img-con">
          <div className="mini">
            <img src={image1} alt="nice couch" className="main-img" />
            <img src={image2} alt="nice couch" className="accent-img1" />
          </div>
          <div className="mini1">
            <img src={image3} alt="nice couch" className="accent-img2" />
            <img src={image4} alt="nice couch" className="accent-img3" />
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2em 0;
  /* min-height: 60vh; */

  .layer,
  .layer1 {
    width: 387px;
    height: 251px;
    flex-shrink: 0;
    border-radius: 387px;
    background: var(--Primary-Color, #a6602d);
    filter: blur(200px);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  .layer1 {
    top: 0;
    right: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1em;
    max-width: 550px;
    margin: 0 auto;
    padding: 0 2.4em;

    h1 {
      font-size: 35px;
      line-height: 1.2em;
    }

    p {
      font-weight: 300;
      line-height: 1.9em;
      word-spacing: 0.3em;
    }
  }

  .hero-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #a6602d;
    color: white;
    border: none;
    padding: 9px 0;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 8.4em;
    text-transform: capitalize;
    font-weight: 300;
    margin-top: 2em;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  svg {
    margin-left: 8px;
    font-size: 24px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }
  }

  .img-container {
    display: none;
  }

  @media (min-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2em;
    padding-top: 5em;
    max-width: 1100px;
    margin: 0 auto;
    gap: 3em;

    .content {
      align-items: start;
      text-align: start;
      margin-left: -1.4em;

      h1 {
        font-size: 50px;
      }

      p {
        font-size: 18px;
      }
    }
    .img-container {
      display: block;
      position: relative;
    }

    img {
      width: 43%;
      height: 200px;
      border-radius: 20px 0px 20px 20px;
    }
    .img-con {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    .mini,
    .mini1 {
      display: flex;
      flex-direction: row;
      gap: 1em;
    }

    .accent-img1 {
      position: absolute;
      right: 3.5em;
      top: -3em;
    }
    .accent-img3 {
      position: relative;
      top: -3em;
    }
  }
`;

export default Hero;
