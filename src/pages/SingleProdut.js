import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";

import {
  Loading,
  Error,
  HeroPage,
  ProductImages,
  Stars,
  AddToCart,
} from "../components";

const SingleProdut = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id, fetchSingleProduct]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <HeroPage title={name} product />
      <Wrapper>
        <Link className="btnn" to="/products">
          Back To Products
        </Link>
        {/* images and info container */}
        <div className="container">
          {/* images container */}
          <ProductImages images={images} />
          {/* info container */}
          <div className="info-container">
            <h1 className="title">{name}</h1>
            <div className="star-container">
              {/* stars and reviews */}
              <Stars stars={stars} reviews={reviews} />
            </div>
            <span className="price">{formatPrice(price)}</span>
            <p className="desc">{description}</p>
            <div className="content-container">
              <strong>Availabel: </strong>
              <span>{stock > 0 ? "In stock" : "out of stock"}</span>
              <strong>SKU:</strong>
              <span>{sku}</span>
              <strong>Brand:</strong>
              <span>{company}</span>
              <div className="underline"></div>
            </div>

            {stock > 0 && <AddToCart product={product} />}
          </div>
          {/* info end */}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 4rem 2rem;

  .price {
    display: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
  .btnn {
    color: white;
    border: none;
    background-color: #a6602d;
    padding: 10px 1rem;
    border-radius: 10px;
    font-size: 20px;
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
    cursor: pointer;
  }
  .small-images img {
    width: 100%;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
    min-width: 30px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  .active {
    box-shadow: 0px 0px 0px 2px hsl(22, 31%, 52%);
  }

  /* info container styles */
  .info-container {
  }

  .title {
    font-size: 30px;
    text-transform: capitalize;
  }

  .star-container {
    display: flex;
    margin-bottom: 1em;
    gap: 0.5em;
    .stars {
      display: flex;
      gap: 0.3em;
      svg {
        color: #ffb900;
      }
    }
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

  .color-title {
    margin-right: 1em;
  }

  .color {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    color: white;
    cursor: pointer;
    opacity: 0.5;
    margin-right: 1em;
  }

  .active {
    opacity: 1;
  }

  .calc-container {
    display: flex;
    gap: 2.5rem;
    align-items: center;
    margin: 1.5rem 0;
    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
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
    margin: 6.5rem 7.5rem;
    margin-right: 9rem;

    .images-container {
      .big-img {
        height: 550px;
      }
    }

    .small-images {
      height: 70px;
    }

    .title {
      font-size: 3rem;
      margin-bottom: 0;
    }
    .desc {
      font-size: 1rem;
      line-height: 35px;
    }
    .star-container {
      gap: 38px;
    }

    .price {
      display: block;
      margin: 0.5rem 0;
      color: #a6602d;
    }
  }
`;

export default SingleProdut;
