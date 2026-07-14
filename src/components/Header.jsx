import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.webp";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader className="header">
      <NavLink to="/">
        <img src={logo} alt="Logo" width="150px" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 10px 0px;

  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;
export default Header;
