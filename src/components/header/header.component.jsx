import React from "react";

import logo from "../../assets/portfolio-logo.png";

import {
  HeaderContainer,
  LogoContainer,
  NavBarOptionsContainer,
  NavBarOption,
} from "./header.styles";

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={logo} />
      </LogoContainer>
      <NavBarOptionsContainer>
        <NavBarOption to="/about">About Me</NavBarOption>
        <NavBarOption to="/work">My Work</NavBarOption>
        <NavBarOption to="/blog">Blog</NavBarOption>
      </NavBarOptionsContainer>
    </HeaderContainer>
  );
}

export default Header;
