import styled from "styled-components";
import { DecordBackground } from "../../assets/images";

export const MainContact = styled.div`
  margin-top: 100px;
`;

export const BackgroundContact = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${DecordBackground});
`;

export const DecorTitle = styled.div`
  font-size: 72px;
  padding-left: 40px;
  text-align: center;
  text-shadow: -10px 4px 2px rgba(0, 0, 0, 0.6);
  color: white;
  @media(max-width:410px){
    font-size: 64px;
    padding-left: 0;
    width: 100%;
    text-align: center;
  }
`;

export const BgColor = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const LocationsMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
    height: 150vh;
  }
`;

export const LocationPart = styled.div`
  width: 49%;
  height: 100vh;

  @media (max-width: 900px) {
    width: 100%;
    height:70vh;
  }
`;

export const LineLocations = styled.div`
  width: 1px;
  height: 70vh;
  background-color: silver;
  @media (max-width: 900px) {
    width: 60%;
    height: 1px;
  }
`;

export const ShopName = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 50px;
  font-size: 45px;
`;


export const Shoplocation = styled.div`
    color: silver;
    text-align: center;
    margin-top: 10px;
    font-size: 17px;
`

export const ShopImage = styled.div`
    width: 80%;
    height: 60vh;
    margin:50px auto;
    @media (max-width: 900px) {
        height: 40vh;
        width: 50%;
        margin: 20px auto;
  }
  @media (max-width: 520px) {
        width: 70%;
  }
`

export const ShopNk = styled.img``