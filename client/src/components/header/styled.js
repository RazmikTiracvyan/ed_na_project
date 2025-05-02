import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../../assets/images";

export const Menu = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  transition: 1s;
  justify-content: space-between;
  background-color: ${({ $isscrolled, location }) =>
    !$isscrolled && location === "/" ? "none" : "white"};
  box-shadow: ${({ $isscrolled }) =>
    $isscrolled ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : "none"};
  position: fixed;

  z-index: 10;
  @media (max-width: 900px) {
    background-color: white;
  }
`;

export const LeftSide = styled.div`
  width: 33%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const CentralLogo = styled.div`
  width: 10%;
  height: 100px;
  background-image: url(${Logo});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media (max-width: 900px) {
    width: 100px;
    margin-left: 20px;
  }
`;

export const RightSide = styled.div`
  width: 30%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const MenuItems = styled(Link)`
  text-decoration: none;
  color: ${({ $isscrolled, location }) =>
    !$isscrolled && location === "/" ? "white" : "#241c11"};
`;

export const LineUnderLink = styled.div`
  width: ${({ selected }) => (selected ? "100%" : "0")};
  height: 2px;
  transition: 1s;
  margin-top: 2px;
  cursor: pointer;
  background-color: ${({ $isscrolled, location }) =>
    !$isscrolled && location === "/" ? "white" : "black"};
`;

export const IconSpan = styled.span`
  margin-left: 2px;
  position: relative;
  top: 2px;
`;

export const ResponsiveIcon = styled.div`
  width: 120px;
  height: 100px;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  @media (max-width: 900px) {
    display: flex;
  }
`;

export const ResponsiveIconSpan = styled.span`
  cursor: pointer;
`;

export const ResponsiveMain = styled.div`
  width: 100%;
  height: ${({ $openResponsive }) => ($openResponsive ? "100vh" : "0")};
  transition: 2s;
  position: fixed;
  top: 100px;
  background-color: white;
  z-index: 9;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const ResItems = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #241c11;
  text-decoration: none;
`;
