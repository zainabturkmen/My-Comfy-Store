import React from "react";
import styled from "styled-components";
import Image from "../assets/about-page-img.png";

const AboutPage = () => {
  return (
    <Wrapper>
      <img className="furnitures-img" src={Image} alt="furnitures" />
      <div className="text-container">
        <h1 className="title">our story</h1>
        <div className="underline"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          molestiae dolores laborum natus cumque sequi recusandae facere iusto
          delectus odit labore reprehenderit, veniam corporis voluptatibus.
          Perspiciatis velit dolores repudiandae suscipit? Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Dolor labore dolorem ea
          praesentium, laboriosam tempore ut doloremque voluptas quia
          voluptatibus.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .text-container {
    text-align: center;
    background-image: url(${Image});
    background-size: cover;
    color: #fff;
    padding: 1.5rem 2.8rem;
  }
  p {
    line-height: 20px; /* 200% */
    font-size: 10px;
  }

  .title {
    font-size: 28px;
  }

  .furnitures-img {
    display: none;
  }

  .underline {
    background-color: #fff;
    width: 100px;
    height: 1px;
    margin: 0 auto;
    margin-top: 0.5rem;
  }
  .title {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 600px) {
    .title {
      font-size: 30px;
    }

    .underline {
      height: 5px;
    }
    p {
      font-size: 16px;
      line-height: 30px;
    }
    .text-container {
      padding: 80px 117px;
      padding-bottom: 133px;
    }
  }

  @media only screen and (min-width: 1000px) {
    display: flex;
    gap: 1.8rem;
    padding: 0 2.8rem;
    .text-container {
      text-align: left;
      background-image: none;
      color: #000;
      flex: 1;
      padding: 0;
    }
    .furnitures-img {
      display: unset;
      height: 416px;
      object-fit: cover;
      width: 100%;
      flex: 1;
    }

    .underline {
      background-color: #a6602d;
      height: 5px;
      margin-left: 1rem;
    }

    p {
      font-size: 1rem;
      line-height: 30px;
      margin-top: 2.5rem;
    }
    .title {
      font-size: 30px;
    }
  }

  @media only screen and (min-width: 1280px) {
    padding: 0 5rem;
    gap: 3rem;

    .title {
      font-size: 40px;
    }
    .underline {
      width: 127px;
    }
    p {
      margin-top: 45px;
      font-size: 18px;
    }
  }
`;

export default AboutPage;
