import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #000000;
  color: white;
  justify-content: space-between;
  display: flex;
  margin-bottom: 30px;
`;

export const LogoContainer = styled(Link)`
  height: 200%;
  width: 100px;
  img {
    width: 100px;
    text-align: center;
  }
`;
export const NavBarOptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "Poiret One", cursive;
  padding-right: 30px;
`;

export const NavBarOption = styled(Link)`
  padding: 10px 25px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  &:visited {
    color: inherit;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
