import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";


const Navbar = () => {
  return (
    <Nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <ul>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons/>  
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
    margin: 1.3em 0.3em;
  }

  img {
    width: 9em;
  }

  .nav-toggle {
    background: transparent;
    border: none;
    font-size: 1.6em;
    margin: 0 0.2em;
    color: #a6602d;
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
        }
      }
    }
  }
`;

export default Navbar;
