import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { links } from "../utils/constants";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  // const isOpen = true;
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="comfy sloth" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout" onClick={closeSidebar}>checkout</Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background-color: white;
    transform: translate(-100%);
    transition: all 0.6s linear;
    z-index: 1;
    padding: 2em 1em;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  img {
    width: 9em;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-btn {
    background-color: transparent;
    border: none;
    color: var(--promary-color);
    font-size: 1.5em;
    margin-right: 0.5em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 2em 1em;
    gap: 2em;
    li {
      list-style-type: none;
      a {
        color: #000;
        text-transform: capitalize;
        font-size: 1.2em;
        transition: all 0.6s ease-in-out;
        &:hover {
          border-bottom: 2px solid var(--promary-color);
          color: var(--promary-color);
          transform: scale(1.1);
          padding: 0 1em;
        }
      }
    }
  }
  
  .login,
  .cart-btn {
    display: block;
    margin: 0 auto;
    padding-top: 2em;
  }
  @media (min-width: 600px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
