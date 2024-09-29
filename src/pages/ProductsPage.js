import React from "react";
import styled from "styled-components";
import { HeroPage } from "../components";
import { useFilterContext } from "../context/filter_context";
import { formatPrice, getUniqueValue } from "../utils/helpers";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const {
    filtered_products: products,
    sort,
    updateSort,
    filters: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValue(all_products, "category");
  const Companies = getUniqueValue(all_products, "company");
  const colors = getUniqueValue(all_products, "colors");
  console.log(colors);

  return (
    <>
      <HeroPage title="products" />

      <Wrapper>
        <div className="filters-container">
          {/* search input */}
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="search"
              type="text"
              name="text"
              placeholder="Search"
              value={text}
              onChange={updateFilters}
            />
          </form>
          {/* Categories */}
          <h3>Category</h3>
          <div className="categories-container">
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  name="category"
                  type="button"
                  className={`${
                    category === c.toLowerCase() ? "activei" : null
                  }`}>
                  {c}
                </button>
              );
            })}
          </div>
          {/* Companies */}
          <h3>Company</h3>
          <select
            className="Company"
            name="company"
            value={company}
            onChange={updateFilters}>
            {Companies.map((c, index) => {
              return (
                <option key={index} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
          {/* Colors */}
          <h3>Colors</h3>
          <div className="spans-container">
            {colors.map((c, index) => {
              const isActive = color === c;
              return (
                <button
                  key={index}
                  name="color"
                  style={{
                    backgroundColor: c !== "all" ? c : "transparent",
                    opacity: isActive ? 1 : 0.4,
                  }}
                  className="color-btn"
                  data-color={c}
                  onClick={updateFilters}>
                  {c === "all" ? "All" : null}
                </button>
              );
            })}
          </div>
          {/* Prices */}
          <h3>Price</h3>
          <p>{formatPrice(price)}</p>
          <input
            type="range"
            name="price"
            min={min_price}
            max={max_price}
            onChange={updateFilters}
          />
          {/* Free shipping */}
          <div className="free-shipping-container">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* clear Filter Button */}
          <button className="btn" onClick={clearFilters}>
            Clear Filter
          </button>
        </div>

        {/* products part */}
        <div className="products-container">
          {/* sort part */}
          <div className="sort-container">
            <span>{products.length} Products Found</span>
            <div className="underline"></div>
            <form className="sort">
              <label>Sort By</label>
              <select name="sort" value={sort} onChange={updateSort}>
                <option value="price-lowest">Price (Lowest)</option>
                <option value="Price-highest">Price (highest)</option>
                <option value="name-a">name (a)</option>
                <option value="name-z">name (z)</option>
              </select>
            </form>
          </div>
          {/* Products part */}
          <div className="products">
            {products.map((product) => {
              const { id, image, name, price } = product;
              return (
                <div className="product" key={id}>
                  <Link to={`/products/${id}`}>
                    <img src={image} alt={name} />
                  </Link>
                  <div className="name-price-container">
                    <p>{name}</p>
                    <span>{formatPrice(price)}</span>
                  </div>
                </div>
              );
            })}
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
  display: flex;
  justify-content: space-between;
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
    gap: 0.5rem;
    align-items: center;

    .color-btn {
      border: none;
      border-radius: 5em;
      padding: 0.7em;
      background-color: transparent;
      cursor: pointer;
    }
  }

  .categories-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    button {
      border: none;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      cursor: pointer;
    }
    .activei {
      color: #a6602d;
    }
  }
  .Company {
    width: 100px;
    border: none;
    padding: 0.3rem 0.5rem;
    font-size: 1.1rem;
    box-sizing: border-box;
  }

  .free-shipping-container {
    display: flex;
    align-items: center;
    gap: 1rem;

    label {
      margin: 0;
      font-size: 1.3em;
      font-weight: 600;
    }

    margin-top: 2.2rem;
    margin-bottom: 0.6rem;
    input {
      width: 20px;
      height: 20px;
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
