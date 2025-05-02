import { Link } from "react-router-dom";
import styled from "styled-components";

export const TopMain = styled.div`
  width: 100%;
  height: 920px;
  padding-top: 60px;
  overflow: hidden;
  @media (max-width: 1170px) {
    height: 1700px;
  }
  @media (max-width: 1025px) {
    height: 2000px;
  }

  @media (max-width: 830px) {
    height: 3100px;
  }

  @media (max-width: 480px) {
    height: 2700px;
  }

  @media (max-width: 384px) {
    height: 2800px;
  }
`;

export const TitleTops = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 42px;
  font-family: "Edu AU VIC WA NT Pre", cursive;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  border-bottom: 2px solid;

  @media (max-width: 940px) {
    width: 75%;
    font-size: 40px;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 37px;
  }

  @media (max-width: 482px) {
    font-size: 30px;
  }

  @media (max-width: 338px) {
    font-size: 24px;
  }
`;

export const ProducctsBig = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1170px) {
    height: 1400px;
  }
  @media (max-width: 1025px) {
    height: 1500px;
  }
  @media (max-width: 830px) {
    height: 2800px;
  }
  @media (max-width: 480px) {
    height: 2550px;
  }
`;

export const ProductDiv = styled(Link)`
  width: 320px;
  height: 500px;
  margin-top: ${({ i }) => (i % 2 !== 0 ? "80px" : "0")};
  cursor: pointer;
  color: black;
  text-decoration: none;

  @media (max-width: 1285px) {
    width: 290px;
  }

  @media (max-width: 1170px) {
    width: 400px;
    height: 620px;
  }
  @media (max-width: 830px) {
    width: 55%;
    margin-top: 0;
  }

  @media (max-width: 610px) {
    width: 70%;
  }

  @media (max-width: 500px) {
    width: 85%;
    height: 580px;
  }
`;

export const ImagePart = styled.div`
  width: 100%;
  height: 380px;
  background-image: url(${({ image }) => image});
  background-size: 100% 100%;
  @media (max-width: 1170px) {
    height: 500px;
  }

  @media (max-width: 500px) {
    height: 430px;
  }
`;

export const ProductName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
  padding-top: 35px;
`;

export const ProductPrice = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
  padding-top: 5px;
  text-decoration: underline;
`;
