import { Link } from "react-router-dom";
import styled from "styled-components";

export const LeftSide = styled.div`
  width: 15%;
  height: 100vh;
  padding-top: 10px;
`;

export const MenuLink = styled(Link)`
  display: block;
  width: 100%;
  height: 40px;
  transition: 0.3s;
  padding: 10px 15px;
  background-color: ${({$isActive})=> $isActive && '#f0f0f7'};
  border-radius: 0 30px 30px 0;
  color: gray;
  text-decoration: none;
  &:hover {
    background-color: #f0f0f7;
  }
`;
