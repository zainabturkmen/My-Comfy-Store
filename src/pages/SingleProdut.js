import React from "react";
import styled from "styled-components";
import Image from "../assets/Home-image-big.png";
import small_img from "../assets/Home-image-small.png";
import { FaMinus, FaPlus } from "react-icons/fa";

const SingleProdut = () => {
  return (
    <Wrapper>
      <button className="btn">Back Home</button>
      {/* images and info container */}
      <div className="container">
        {/* images container */}
        <div className="images-container">
          <img className="big-img" src={Image} alt="" />
          <div className="small-images">
            <img src={small_img} alt="" />
            <img src={small_img} alt="" />
            <img src={small_img} alt="" />
            <img src={small_img} alt="" />
          </div>
        </div>
        {/* info container */}
        <div className="info-container">
          <h1 className="title">Modern Poster</h1>
          <div className="star-container">
            {/* star svg */}
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.6566 14.8757C2.91224 15.0948 3.23643 15.0171 3.62298 14.6989L6.92117 11.9557L10.2256 14.6989C10.6121 15.0171 10.9301 15.0948 11.192 14.8757C11.4476 14.6565 11.5037 14.2959 11.3478 13.7798L10.0448 9.38212L13.3741 6.66717C13.7607 6.3561 13.9165 6.03088 13.8168 5.67736C13.717 5.33799 13.424 5.1683 12.9439 5.17536L8.86016 5.20366L7.61946 0.784772C7.46983 0.261571 7.24536 0 6.92117 0C6.6032 0 6.37874 0.261571 6.22911 0.784772L4.98838 5.20366L0.904644 5.17536C0.424566 5.1683 0.131523 5.33799 0.0317674 5.67736C-0.0742132 6.03088 0.0878968 6.3561 0.474444 6.66717L3.80379 9.38212L2.50074 13.7798C2.34485 14.2959 2.40098 14.6565 2.6566 14.8757Z"
                fill="black"
              />
            </svg>
            <span>(100 Customers reviews)</span>
          </div>
          <p className="desc">
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic chillwave trust fund. Viral typewriter
            fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
            carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag
            kinfolk microdosing gochujang live-edge
          </p>
          <div className="content-container">
            <strong>Availabel: </strong>
            <span>In stock</span>
            <strong>SKU:</strong>
            <span>recQ0fMd8T0Vk211E</span>
            <strong>Brand:</strong>
            <span>liddy</span>
            <div className="underline"></div>
            <strong>color:</strong>
            <span className="color"></span>
          </div>

          <div className="calc-container">
            <FaMinus />
            <span className="count">1</span>
            <FaPlus />
          </div>

          <button className="btn">Add to cart</button>
        </div>
        {/* info end */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 2rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  .btn {
    color: white;
    border: none;
    background-color: #a6602d;
    padding: 10px 1rem;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
  }
  .container {
    margin-top: 3rem;
  }

  .images-container > img {
    width: 100%;
    height: 407px;
    object-fit: cover;
    border-radius: 5px;
  }
  .small-images {
    display: flex;
    gap: 0.8rem;
    margin-top: 0.5rem;
  }
  .small-images img {
    width: 100%;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
    min-width: 30px;
  }

  /* info container styles */

  .title {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 30px;
  }

  .star-container {
    display: flex;
    gap: 1rem;
  }

  .desc {
    line-height: 30px;
    font-size: 14px;
    margin-bottom: 1.5rem;
  }

  .content-container {
    margin-top: 0.8rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem 1rem;
    grid-template-areas:
      "avi stock"
      "SKU id"
      "brand name"
      "under under"
      "color type";
  }

  .underline {
    width: 100%;
    height: 1px;
    background-color: #e3c5ae;
    margin: 0.8rem 0.5rem;
    grid-area: under;
  }

  .color {
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
  }

  .calc-container {
    display: flex;
    gap: 2.5rem;
    align-items: center;
    margin: 1.5rem 0;
  }

  .count {
    font-size: 30px;
    font-weight: bold;
  }

  @media only screen and (min-width: 1000px) {
    margin: 4rem 3rem;
    .container {
      flex-direction: row;
      align-items: end;
      gap: 2.5rem;
    }
    .images-container {
      flex: 1;
      .big-img {
        height: 460px;
      }
    }

    .info-container {
      flex: 1;
    }
    .small-images {
      height: 63px;
      img {
        height: 100%;
      }
    }
  }

  @media only screen and (min-width: 1285px) {
  }
`;

export default SingleProdut;
