import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductsMain = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const LineUnder = styled.div`
  width: 95%;
  height: 1px ;
  background-color: silver;
`

export const Product = styled(Link)`
  width: 300px;
  height: 460px;
  cursor: pointer;
  color: black;
  text-decoration: none;
`

export const ProductImagePlace = styled.div`
  width: 100%;
  height: 320px;
  background-image: url(${({image})=>image});
  background-size: 100% 100%;
`

export const ProductName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 27px;
  padding-top: 25px;
`;

export const ProductPrice = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
  padding-top: 5px;
`;
