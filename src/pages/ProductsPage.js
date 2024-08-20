import React, { useState } from "react";
import styled from "styled-components";
import Image from "../assets/about-page-img.png";
import { HeroPage } from "../components";

const ProductsPage = () => {
  const [priceState, usePriceState] = useState(0);

  function ChangePrice(e) {
    usePriceState(e.target.value);
  }

  return (
    <>
      <HeroPage title="products" />

      <Wrapper>
        {/* <HeroPage title="products" /> */}

        <div className="filters-container">
          {/* search input */}
          <input
            className="search"
            type="text"
            id="search"
            placeholder="Search"
          />
          {/* Categories */}
          <h3>Category</h3>
          <div className="categories-container">
            <p>All</p>
            <p>Living Room</p>
            <p>Office</p>
            <p>Kitchen</p>
            <p>Bedroom</p>
            <p>Dining</p>
          </div>
          {/* Companies */}
          <h3>Company</h3>
          <select className="Company">
            <option value="all">all</option>
          </select>
          {/* Colors */}
          <h3>Colors</h3>
          <div className="spans-container">
            <span className="all">All</span>
            <span className="pink"></span>
            <span className="brown"></span>
            <span className="green"></span>
          </div>
          {/* Prices */}
          <h3>Price</h3>
          <p>{priceState}</p>
          <input
            type="range"
            name=""
            id=""
            min="0"
            max="4000"
            value={priceState}
            onChange={(e) => ChangePrice(e)}
          />
          {/* Free shipping */}
          <div className="free-shipping-container">
            <h3>Free Shipping</h3>
            <input type="checkbox" name="" id="" />
          </div>
          {/* clear Filter Button */}
          <button className="btn">Clear Filter</button>
        </div>

        {/* products part */}
        <div className="products-container">
          {/* sort part */}
          <div className="sort-container">
            <span>10 Products Found</span>
            <div className="underline"></div>
            <div className="sort">
              <span>Sort By</span>
              <select>
                <option value="Price (Lowest)">Price (Lowest)</option>
              </select>
            </div>
          </div>
          {/* Products part */}
          <div className="products">
            <div className="product">
              <img src={Image} alt="image" />
              <div className="name-price-container">
                <p>Modern Poster</p>
                <span>$30.99</span>
              </div>
            </div>
            <div className="product">
              <img src={Image} alt="image" />
              <div className="name-price-container">
                <p>Modern Poster</p>
                <span>$30.99</span>
              </div>
            </div>
            <div className="product">
              <img src={Image} alt="image" />
              <div className="name-price-container">
                <p>Modern Poster</p>
                <span>$30.99</span>
              </div>
            </div>
            <div className="product">
              <img src={Image} alt="image" />
              <div className="name-price-container">
                <p>Modern Poster</p>
                <span>$30.99</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  .search {
    font-size: 1.1rem;
    background-color: #f0eeee;
    border: none;
    padding: 0.5rem 1rem;
    color: #000;
    width: 215px;
  }
  h3 {
    margin-top: 2.2rem;
    margin-bottom: 0.6rem;
    font-size: 20px;
  }
  p {
    margin: 0;
  }
  .spans-container {
    display: flex;
    gap: 0.9rem;
    align-items: center;

    span {
      width: 24px;
      border-radius: 50%;
      height: 24px;
    }
    .all {
      border-bottom: 1px solid black;
      border-radius: 0;
    }
    .pink {
      background-color: #f46bd6;
    }
    .green {
      background-color: #4fcf64;
    }
    .brown {
      background-color: #a6602d;
    }
  }
  .categories-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  .Company {
    width: 86px;
    border: none;
    padding: 0.3rem 0.5rem;
    font-size: 1.1rem;
    box-sizing: border-box;
  }

  .free-shipping-container {
    display: flex;
    align-items: center;
    gap: 1rem;

    h3 {
      margin: 0;
    }

    margin-top: 2.2rem;
    margin-bottom: 0.6rem;
    input {
      width: 25px;
      height: 25px;
      border: 2px solid black;
    }
  }

  .btn {
    font-size: 1.1rem;
    background-color: #a6602d;
    color: #fff;
    padding: 0.7rem 1rem;
    border: none;
    border-radius: 10px;
    margin-top: 3rem;
    cursor: pointer;
  }

  /* products-container  */

  .products-container {
    margin-top: 83px;
    margin-bottom: 117px;
  }

  .sort-container {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    select {
      border: none;
      background-color: #fff;
      margin-left: 1rem;
    }
  }

  .underline {
    height: 1px;
    background-color: #e3c5ae;
    width: 100%;
  }

  .products {
    margin-top: 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    img {
      width: 100%;
      height: 168px;
      object-fit: cover;
      border-radius: 5px;
    }

    .name-price-container {
      display: flex;
      justify-content: space-between;
      margin-top: 0.8rem;
    }
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    gap: 2.8rem;

    .products-container {
      margin-top: 0;
      flex: 1;
    }
  }

  @media only screen and (min-width: 1000px) {
    margin-top: 129px;
    margin-right: 3.9rem;
    margin-left: 3rem;

    .sort-container {
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      select {
        margin-left: 1rem;
      }
      .underline {
        flex: 0.99;
      }
    }

    .products {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
  }

  @media only screen and (min-width: 1280px) {
    margin-right: 5.5rem;
    margin-left: 4rem;
    .products {
      grid-template-columns: 1fr 1fr 1fr;
      margin-bottom: 2.2rem;
    }
    .btn {
      margin-bottom: 2.2rem;
    }
  }
`;

export default ProductsPage;
