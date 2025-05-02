import styled from "styled-components";
import { DecordBackground2 } from "../../assets/images";
import { Link } from "react-router-dom";

export const MainDiv = styled.div`
  margin-top: 100px;
`;

export const BackgroundContact = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${DecordBackground2});
  background-size: 37%;
  @media (max-width: 561px) {
    background-size: contain;
    height: 500px;
  }
`;

export const DecorTitle = styled.div`
  font-size: 72px;
  padding-left: 40px;
  text-align: center;
  text-shadow: -10px 4px 2px rgba(0, 0, 0, 0.6);
  color: white;
  text-transform: uppercase;
  @media (max-width: 500px) {
    font-size: 54px;
  }
  @media (max-width: 430px) {
    padding-left: 0;
    font-size: 40px;
  }

`;

export const BgColor = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const AppartementsDiv = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  padding-left: 35px;
  gap: 30px;
  align-items: flex-end;
  padding-bottom: 5px;
  @media(max-width:541px){
    flex-wrap: wrap;
    gap: 10px;
    height: 50px;
    align-items: flex-start;
    position: relative;
    top: 30px;
  }
`;

export const Appartment = styled(Link)`
    color: gray;
    cursor: pointer;
    &:hover{
      color: black;
      text-decoration: underline black;
    }
`

