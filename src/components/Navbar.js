import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <Nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={openSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  .nav-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1.6em 0.3em;
  }

  img {
    width: 9em;
  }

  .nav-toggle {
    background: transparent;
    border: none;
    font-size: 1.6em;
    margin: 0 0.2em;
    color: var(--promary-color);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  ul {
    display: none;
  }

  @media (min-width: 700px) {
    .nav-center {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
    .nav-toggle {
      display: none;
    }
    ul {
      display: block;
      display: flex;
      gap: 2em;
      li {
        list-style-type: none;
        a {
          color: #000;
          text-transform: capitalize;
          font-size: 1.2em;
          &:hover {
            border-bottom: 2px solid var(--promary-color);
          }
        }
      }
    }
  }
`;

export default Navbar;
