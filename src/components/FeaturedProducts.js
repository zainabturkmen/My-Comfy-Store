import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import Loading from "./Loading";
import Error from "./Error";
import Products from "./Products";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

const FeaturedProducts = () => {
  const {
    products_loading: laoding,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if (laoding) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h1>Our Products</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.slice(0, 7).map((product) => {
          return <Products key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className="btn hero-btn">
        All Products <HiArrowLongRight className="arrow-svg" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 3em;
  background-color: #eeebeb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2em;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;
    h1 {
      font-size: 35px;
    }
  }
  .underline {
    background-color: #a6602d;
    width: 100px;
    height: 3px;
    margin: 0 auto;
  }

  .featured {
    display: flex;
    flex-direction: row;
    row-gap: 3.5em;
    column-gap: 2em;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3em;
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
    width: 9em;
    text-transform: capitalize;
    font-weight: 300;
    margin-top: 5em;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  .arrow-svg {
    margin-left: 8px;
    font-size: 24px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }
  }
`;

export default FeaturedProducts;
