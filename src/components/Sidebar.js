import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { links } from "../utils/constants";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const isOpen = true;
  return (
    <Wrapper>
      <aside className={`${isOpen ? "sidebar" : "show-sidebar"}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="comfy sloth" />
          <button className="close-btn" type="button">
            <FaTimes/>
          </button>
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
  }

  img {
    width: 9em;
  }

  
`;

export default Sidebar;
